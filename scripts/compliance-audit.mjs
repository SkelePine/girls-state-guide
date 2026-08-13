import { chromium, devices } from 'playwright'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const axeSource = require('axe-core').source

const BASE = 'http://127.0.0.1:4173'
const pages = ['/', '/privacy', '/terms', '/cookies']

async function runAxe(page) {
  await page.addScriptTag({ content: axeSource })
  return page.evaluate(async () => {
    // eslint-disable-next-line no-undef
    const results = await axe.run(document, {
      runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21aa'] },
    })
    return {
      violations: results.violations.map((v) => ({
        id: v.id,
        impact: v.impact,
        help: v.help,
        nodes: v.nodes.length,
      })),
    }
  })
}

async function checkLinks(page) {
  const hrefs = await page.$$eval('a[href]', (as) =>
    as.map((a) => ({ href: a.getAttribute('href'), text: (a.textContent || '').trim().slice(0, 60) }))
  )
  const legal = {
    privacy: hrefs.some((h) => h.href === '/privacy' || h.href?.endsWith('/privacy')),
    terms: hrefs.some((h) => h.href === '/terms' || h.href?.endsWith('/terms')),
    cookies: hrefs.some((h) => h.href === '/cookies' || h.href?.endsWith('/cookies')),
  }
  return { legal, count: hrefs.length }
}

async function main() {
  const browser = await chromium.launch({ headless: true })
  const report = { pages: {}, cookie: {}, viewports: {}, broken: [] }

  // Cookie banner Accept / Decline
  {
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto(BASE + '/', { waitUntil: 'networkidle' })
    const banner = page.locator('#cookie-consent-title')
    report.cookie.visibleFirstVisit = await banner.isVisible()
    report.cookie.hasAccept = await page.getByRole('button', { name: 'Accept' }).isVisible()
    report.cookie.hasDecline = await page.getByRole('button', { name: 'Decline non-essential' }).isVisible()
    await page.getByRole('button', { name: 'Decline non-essential' }).click()
    await page.waitForTimeout(300)
    report.cookie.hiddenAfterDecline = !(await banner.isVisible().catch(() => false))
    const consent = await page.evaluate(() => localStorage.getItem('gs-cookie-consent'))
    report.cookie.storedValue = consent
    await context.close()
  }

  {
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto(BASE + '/', { waitUntil: 'networkidle' })
    await page.getByRole('button', { name: 'Accept' }).click()
    const consent = await page.evaluate(() => localStorage.getItem('gs-cookie-consent'))
    report.cookie.acceptStores = consent
    await context.close()
  }

  for (const path of pages) {
    const page = await browser.newPage()
    const res = await page.goto(BASE + path, { waitUntil: 'networkidle' })
    // dismiss cookie if present
    const decline = page.getByRole('button', { name: 'Decline non-essential' })
    if (await decline.isVisible().catch(() => false)) await decline.click()

    const title = await page.title()
    const description = await page.locator('meta[name="description"]').getAttribute('content')
    const links = await checkLinks(page)
    const axe = await runAxe(page)
    const hasMain = await page.locator('main').count()
    const hasH1 = await page.locator('h1').count()
    const hasFooter = await page.locator('footer').count()

    report.pages[path] = {
      status: res?.status(),
      title,
      description: description?.slice(0, 80),
      legal: links.legal,
      hasMain: hasMain > 0,
      hasH1: hasH1 > 0,
      hasFooter: hasFooter > 0,
      axeViolations: axe.violations,
    }
    await page.close()
  }

  // Viewport smoke: no horizontal overflow at key widths
  for (const width of [375, 768, 1280]) {
    const page = await browser.newPage({ viewport: { width, height: 900 } })
    await page.goto(BASE + '/', { waitUntil: 'networkidle' })
    const decline = page.getByRole('button', { name: 'Decline non-essential' })
    if (await decline.isVisible().catch(() => false)) await decline.click()
    const overflow = await page.evaluate(() => {
      const doc = document.documentElement
      return {
        scrollWidth: doc.scrollWidth,
        clientWidth: doc.clientWidth,
        overflowX: doc.scrollWidth > doc.clientWidth + 2,
      }
    })
    // min tap targets sample: buttons under 44px
    const smallButtons = await page.evaluate(() => {
      const btns = [...document.querySelectorAll('button, a')]
      return btns
        .filter((el) => {
          const r = el.getBoundingClientRect()
          return r.width > 0 && r.height > 0 && (r.height < 40 || r.width < 40)
        })
        .slice(0, 8)
        .map((el) => ({
          text: (el.textContent || '').trim().slice(0, 40),
          h: Math.round(el.getBoundingClientRect().height),
          w: Math.round(el.getBoundingClientRect().width),
        }))
    })
    report.viewports[width] = { ...overflow, smallButtonsSample: smallButtons }
    await page.close()
  }

  // Broken internal routes
  for (const path of [...pages, '/robots.txt', '/sitemap.xml']) {
    const page = await browser.newPage()
    const res = await page.goto(BASE + path, { waitUntil: 'domcontentloaded' })
    if (!res || res.status() >= 400) report.broken.push({ path, status: res?.status() })
    await page.close()
  }

  await browser.close()
  console.log(JSON.stringify(report, null, 2))
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
