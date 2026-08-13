/**
 * Site-wide settings — update these before launch.
 * For Formspree: create a form at formspree.io, then set VITE_FORMSPREE_ENDPOINT in .env
 *   e.g. VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxxx
 * For Google Form: set VITE_GOOGLE_FORM_URL in .env to your live form link.
 */
export const siteConfig = {
  author: 'Inaaya Saif',
  authorRole: '2026 Delegate',
  byline: 'Built by Inaaya Saif, 2026 Delegate — for every delegate who comes after.',
  verifiedYear: 2026,
  sessionLabel: '83rd Session',
  campus2026: 'University of California, Riverside (UCR)',
  siteUrl: import.meta.env.VITE_SITE_URL || 'https://www.girlsstateultimateguide.com',
  /** Public contact for privacy/deletion requests — override with VITE_CONTACT_EMAIL */
  contactEmail:
    import.meta.env.VITE_CONTACT_EMAIL || 'privacy@girlsstateultimateguide.com',
  formspreeEndpoint: import.meta.env.VITE_FORMSPREE_ENDPOINT || '',
  googleFormUrl:
    import.meta.env.VITE_GOOGLE_FORM_URL ||
    'https://forms.gle/r1npFtyzztRLExZM7',
}

export const yearNote = `Verified for ${siteConfig.verifiedYear} — always confirm dates, campus, and deadlines with your ALA unit for your year.`

/** Unique titles + meta descriptions (target ~150–160 characters for descriptions). */
export const pageMeta = {
  home: {
    title: 'CA Girls State Guide — The Ultimate Delegate Resource by Inaaya Saif',
    description:
      'Unofficial ALA CA Girls State guide: packing, offices, filing, bills, and week tips from a 2026 delegate. Prepare now—always verify details with your ALA unit.',
  },
  privacy: {
    title: 'Privacy Policy — CA Girls State Guide',
    description:
      'How this Girls State guide handles Formspree and Google Forms, Vercel logs, and checklist storage—and how to request deletion. We do not sell personal data.',
  },
  terms: {
    title: 'Terms of Service — CA Girls State Guide',
    description:
      'Terms for the unofficial CA Girls State Guide: not ALA-affiliated, content as-is, acceptable use, story submissions, and California law for this education site.',
  },
  cookies: {
    title: 'Cookie Policy — CA Girls State Guide',
    description:
      'Cookies on the CA Girls State Guide: essential checklists, your Accept or Decline choice, and no analytics until you opt in. Change your cookie choice anytime.',
  },
  notFound: {
    title: 'Page Not Found — CA Girls State Guide',
    description:
      'Page not found. Return to the CA Girls State Guide for packing lists, offices, the week timeline, and practical tips from California Girls State delegates.',
  },
}
