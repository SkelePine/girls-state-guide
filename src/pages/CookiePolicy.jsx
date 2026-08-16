import LegalLayout from './LegalLayout'
import { Link } from 'react-router-dom'
import { siteConfig, pageMeta } from '../siteConfig'
import { usePageMeta } from '../hooks/usePageMeta'

export default function CookiePolicy() {
  usePageMeta(pageMeta.cookies)

  return (
    <LegalLayout title="Cookie Policy" eyebrow="Cookies & Storage">
      <p>
        This Cookie Policy explains how the unofficial CA Girls State Guide (“we,” “the Site”), operated by{' '}
        {siteConfig.author}, uses cookies and similar technologies. It is written in plain language to match how the
        Site actually works today. It is not formal legal advice.
      </p>

      <h2 style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }} className="text-xl font-bold pt-2">
        Short version
      </h2>
      <p>
        We use <strong style={{ color: '#1B2A4A' }}>essential</strong> browser storage so packing checklists and your
        cookie choice keep working. Optional visitor analytics load only if you click{' '}
        <strong style={{ color: '#1B2A4A' }}>Accept</strong> on the cookie banner. Nothing is pre-checked. You can
        Decline non-essential cookies and still use the guide. We do not use advertising cookies.
      </p>

      <h2 style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }} className="text-xl font-bold pt-2">
        Essential storage (always on)
      </h2>
      <p>These are needed for basic features. They are not used for advertising:</p>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <strong style={{ color: '#1B2A4A' }}>Packing / Before You Go checklists</strong> — saved in your browser’s{' '}
          <code>localStorage</code> so progress stays on this device.
        </li>
        <li>
          <strong style={{ color: '#1B2A4A' }}>Splash-seen flag</strong> — <code>sessionStorage</code> so the short
          loading screen does not repeat every time you navigate within the same visit.
        </li>
        <li>
          <strong style={{ color: '#1B2A4A' }}>Cookie choice</strong> — <code>localStorage</code> key{' '}
          <code>gs-cookie-consent</code> stores whether you Accepted or Declined non-essential cookies so we do not ask
          again every page load.
        </li>
      </ul>

      <h2 style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }} className="text-xl font-bold pt-2">
        Non-essential cookies
      </h2>
      <p>
        We do <strong style={{ color: '#1B2A4A' }}>not</strong> use advertising or marketing cookies. If you Accept,
        we load <strong style={{ color: '#1B2A4A' }}>Vercel Web Analytics</strong> so we can see how many people visit
        the guide and which pages they open. That script does not set advertising cookies. It loads{' '}
        <strong style={{ color: '#1B2A4A' }}>only</strong> after you Accept, and never if you Decline. Declining does
        not block the guide, checklists, or story form.
      </p>

      <h2 style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }} className="text-xl font-bold pt-2">
        Your choices
      </h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>On first visit, a banner at the bottom asks you to Accept or Decline non-essential cookies.</li>
        <li>
          Reopen choices anytime via <strong style={{ color: '#1B2A4A' }}>Cookie choices</strong> in the footer, or clear
          site data in your browser.
        </li>
        <li>
          See also our{' '}
          <Link to="/privacy" className="text-gold-on-cream">
            Privacy Policy
          </Link>
          .
        </li>
      </ul>

      <h2 style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }} className="text-xl font-bold pt-2">
        Contact
      </h2>
      <p>
        Questions:{' '}
        <Link to="/#footer-share" className="text-gold-on-cream">
          Contact form on the guide
        </Link>
        {siteConfig.contactEmail ? (
          <>
            {' '}
            or{' '}
            <a href={`mailto:${siteConfig.contactEmail}`} className="text-gold-on-cream">
              {siteConfig.contactEmail}
            </a>
          </>
        ) : null}
        .
      </p>
    </LegalLayout>
  )
}
