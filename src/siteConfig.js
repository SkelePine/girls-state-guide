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
  contactEmail: import.meta.env.VITE_CONTACT_EMAIL || '',
  formspreeEndpoint: import.meta.env.VITE_FORMSPREE_ENDPOINT || '',
  googleFormUrl:
    import.meta.env.VITE_GOOGLE_FORM_URL ||
    'https://forms.gle/r1npFtyzztRLExZM7',
}

export const yearNote = `Verified for ${siteConfig.verifiedYear} — always confirm dates, campus, and deadlines with your ALA unit for your year.`
