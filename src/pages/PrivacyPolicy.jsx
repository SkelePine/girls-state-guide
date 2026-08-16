import { Link } from 'react-router-dom'
import LegalLayout from './LegalLayout'
import { siteConfig, pageMeta } from '../siteConfig'
import { usePageMeta } from '../hooks/usePageMeta'

export default function PrivacyPolicy() {
  usePageMeta(pageMeta.privacy)

  return (
    <LegalLayout title="Privacy Policy" eyebrow="Your Privacy" showSiteBy={false}>
      <p>
        This Privacy Policy describes how the unofficial CA Girls State Guide (“we,” “the Site”), operated by{' '}
        {siteConfig.author}, handles information when you visit{' '}
        <a href={siteConfig.siteUrl} className="text-gold-on-cream">
          {siteConfig.siteUrl.replace(/^https?:\/\//, '')}
        </a>
        . It is written in plain language to match how the Site works. It is not formal legal advice. Program details
        always belong to the American Legion Auxiliary and your local unit.
      </p>

      <h2 style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }} className="text-xl font-bold pt-2">
        What we collect
      </h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <strong style={{ color: '#1B2A4A' }}>Alumni / story form:</strong> name (optional), email (required), your
          message (required), and whether you allow us to publish your story on the Site (required yes/no). We sanitize
          text before sending so HTML is not stored as executable content.
        </li>
        <li>
          <strong style={{ color: '#1B2A4A' }}>Essential browser storage:</strong> packing and “Before You Go” checklist
          progress (`localStorage`), splash-seen flag (`sessionStorage`), and cookie consent choice (`localStorage`).
          These stay on your device.
        </li>
        <li>
          <strong style={{ color: '#1B2A4A' }}>Hosting logs:</strong> our host (Vercel) may process standard server logs
          such as IP address, user agent, and request URLs to operate and secure the Site.
        </li>
        <li>
          <strong style={{ color: '#1B2A4A' }}>Optional analytics (only after Accept):</strong> Vercel Web Analytics
          records anonymous page views — the page URL, referrer, approximate location (country/region), device type,
          and browser. It does not use advertising cookies and is not tied to your name or email.
        </li>
      </ul>

      <h2 style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }} className="text-xl font-bold pt-2">
        Why we collect it
      </h2>
      <p>
        We use story submissions to read your experience, respond if needed, and — only if you answered “yes” to the
        publish permission question — consider featuring your words on the guide. Checklist storage exists only so your
        progress persists on the same browser. Hosting logs keep the Site reliable and secure. Optional analytics help
        us understand how many people use the guide.
      </p>

      <h2 style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }} className="text-xl font-bold pt-2">
        How long we keep it
      </h2>
      <p>
        Form submissions are kept for up to <strong style={{ color: '#1B2A4A' }}>24 months</strong>, or until you ask us
        to delete them, whichever comes first. After that we delete or anonymize them when no longer needed to operate
        the guide. Checklist and cookie-choice data stay in your browser until you clear site data. Vercel’s visitor
        session identifier for analytics is discarded after 24 hours; aggregated visit counts may remain in the
        dashboard.
      </p>

      <h2 style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }} className="text-xl font-bold pt-2">
        How it is stored and who can see it
      </h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <strong style={{ color: '#1B2A4A' }}>Formspree:</strong> footer form submissions are sent over HTTPS to
          Formspree, which delivers them to the site operator ({siteConfig.author}). Formspree staff may access
          submissions as needed to operate their service under their privacy policy.
        </li>
        <li>
          <strong style={{ color: '#1B2A4A' }}>Site operator:</strong> {siteConfig.author} can read submissions to
          operate the guide. We do not publish your story unless you gave permission.
        </li>
        <li>
          <strong style={{ color: '#1B2A4A' }}>Vercel:</strong> may process access logs, and — only if you Accepted
          non-essential cookies — anonymous Web Analytics page views. They do not receive your story form body through
          this Site’s static hosting.
        </li>
        <li>
          Checklist and consent data stay in <strong style={{ color: '#1B2A4A' }}>your browser</strong> unless you clear
          site data.
        </li>
      </ul>

      <h2 style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }} className="text-xl font-bold pt-2">
        Processors / third parties
      </h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <strong style={{ color: '#1B2A4A' }}>Formspree</strong> — processor for footer form submissions
        </li>
        <li>
          <strong style={{ color: '#1B2A4A' }}>Google Forms</strong> — optional longer story questionnaire. If you open
          our linked Google Form, Google collects whatever fields that form asks for under Google’s policies, and Google
          and anyone with access to that form’s response inbox can see those responses.
        </li>
        <li>
          <strong style={{ color: '#1B2A4A' }}>Vercel</strong> — hosting provider that may process access logs, and
          optional Web Analytics after you Accept
        </li>
        <li>
          <strong style={{ color: '#1B2A4A' }}>Fonts:</strong> Inter and Playfair Display are self-hosted with this Site
          and are <strong style={{ color: '#1B2A4A' }}>not</strong> loaded from Google Fonts
        </li>
      </ul>

      <h2 style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }} className="text-xl font-bold pt-2">
        Sale of data, advertising cookies, and trackers
      </h2>
      <p>
        We do <strong style={{ color: '#1B2A4A' }}>not</strong> sell personal data. We do{' '}
        <strong style={{ color: '#1B2A4A' }}>not</strong> use advertising cookies or third-party ad trackers. Optional
        Vercel Web Analytics loads only after you Accept non-essential cookies, and never if you Decline. See our{' '}
        <Link to="/cookies" className="text-gold-on-cream">
          Cookie Policy
        </Link>
        .
      </p>

      <h2 style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }} className="text-xl font-bold pt-2">
        How to request deletion or access
      </h2>
      <p>
        Email us at{' '}
        <a href={`mailto:${siteConfig.contactEmail}`} className="text-gold-on-cream">
          {siteConfig.contactEmail}
        </a>{' '}
        (or use the{' '}
        <Link to="/#footer-share" className="text-gold-on-cream">
          contact form
        </Link>
        ) and tell us you want your form data accessed, corrected, or deleted. Include the email address you used on the
        form so we can find your submission. We will respond within a reasonable time (typically within 30 days).
        Clearing your browser storage removes checklist and cookie-choice data on that device immediately.
      </p>

      <h2 style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }} className="text-xl font-bold pt-2">
        GDPR (EEA / UK-oriented)
      </h2>
      <p>
        If European data-protection law applies to you, you may have rights to access, rectify, erase, restrict, or
        object to certain processing, and to data portability, where applicable. Our lawful bases for the story form are
        your consent (you choose to submit) and our legitimate interest in operating an educational guide. Optional
        analytics, if you Accept, is based on your consent — you can withdraw it anytime via Cookie choices. You may
        withdraw consent for future publishing by contacting us. You may lodge a complaint with your local supervisory
        authority. Contact us using the details above to exercise rights.
      </p>

      <h2 style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }} className="text-xl font-bold pt-2">
        California residents (CCPA / CPRA-oriented)
      </h2>
      <p>
        We do not sell or share personal information for cross-context behavioral advertising. Subject to applicable
        law, California residents may request to know, delete, or correct personal information we hold from form
        submissions, or ask questions about our practices, by contacting us as above. We will not discriminate against
        you for exercising privacy rights.
      </p>

      <h2 style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }} className="text-xl font-bold pt-2">
        Security
      </h2>
      <p>
        Transmission uses HTTPS. No method of transmission or storage is 100% secure. We sanitize form text before it
        leaves your browser and avoid storing sensitive credentials in the Site’s frontend code.
      </p>

      <h2 style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }} className="text-xl font-bold pt-2">
        Children
      </h2>
      <p>
        The Site is intended for high-school-aged delegates and families preparing for Girls State. We do not knowingly
        collect information from children under 13 through the Site. If you believe we have, contact us to request
        deletion.
      </p>

      <h2 style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }} className="text-xl font-bold pt-2">
        Contact
      </h2>
      <p>
        Privacy questions:{' '}
        <a href={`mailto:${siteConfig.contactEmail}`} className="text-gold-on-cream">
          {siteConfig.contactEmail}
        </a>
        , addressed to {siteConfig.author}. You can also use the{' '}
        <Link to="/#footer-share" className="text-gold-on-cream">
          homepage contact form
        </Link>
        .
      </p>

      <h2 style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }} className="text-xl font-bold pt-2">
        Changes
      </h2>
      <p>We may update this page from time to time. The “Last updated” date at the top will change when we do.</p>
    </LegalLayout>
  )
}
