import { Link } from 'react-router-dom'
import LegalLayout from './LegalLayout'
import { siteConfig } from '../siteConfig'

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy" eyebrow="Your Privacy">
      <p>
        This Privacy Policy describes how the unofficial CA Girls State Guide (“we,” “the Site”), operated by{' '}
        {siteConfig.author}, handles information when you visit{' '}
        <a href={siteConfig.siteUrl} style={{ color: '#C9A84C' }}>
          {siteConfig.siteUrl.replace(/^https?:\/\//, '')}
        </a>
        . This is not a formal legal opinion. Program details always belong to the American Legion Auxiliary and your
        local unit.
      </p>

      <h2 style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }} className="text-xl font-bold pt-2">
        Information we collect
      </h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <strong style={{ color: '#1B2A4A' }}>Story / contact form:</strong> optional name, email address, and message
          when you use “Share your story.”
        </li>
        <li>
          <strong style={{ color: '#1B2A4A' }}>Google Form:</strong> if you open our linked Google Form, Google collects
          the fields on that form under Google’s policies.
        </li>
        <li>
          <strong style={{ color: '#1B2A4A' }}>Essential browser storage:</strong> packing and “Before You Go” checklist
          progress (`localStorage`), splash-seen flag (`sessionStorage`), and privacy-notice acknowledgment
          (`localStorage`). These stay on your device.
        </li>
        <li>
          <strong style={{ color: '#1B2A4A' }}>Hosting logs:</strong> our host (e.g. Vercel) may process standard server
          logs such as IP address, user agent, and request URLs to operate and secure the Site.
        </li>
      </ul>

      <h2 style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }} className="text-xl font-bold pt-2">
        How we use information
      </h2>
      <p>
        We use story submissions to review and, with permission, feature delegate voices; to respond if needed; and to
        improve the guide. Checklist storage exists only so your progress persists between visits on the same browser.
      </p>

      <h2 style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }} className="text-xl font-bold pt-2">
        Processors / third parties
      </h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <strong style={{ color: '#1B2A4A' }}>Formspree</strong> — delivers footer form submissions to the site operator.
        </li>
        <li>
          <strong style={{ color: '#1B2A4A' }}>Google Forms</strong> — optional longer story questionnaire.
        </li>
        <li>
          <strong style={{ color: '#1B2A4A' }}>Vercel (or successor host)</strong> — hosts the static site and may process
          access logs.
        </li>
        <li>
          <strong style={{ color: '#1B2A4A' }}>Fonts:</strong> Inter and Playfair Display are self-hosted with the Site.
          We do not load fonts from Google Fonts.
        </li>
      </ul>
      <p>We do not sell your personal information and do not use advertising cookies or third-party ad trackers.</p>

      <h2 style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }} className="text-xl font-bold pt-2">
        Cookies and similar technologies
      </h2>
      <p>
        The Site does not set advertising cookies. We use essential browser storage as described above. You can clear
        site data in your browser settings at any time. Our first-visit notice explains this; you can reopen it from the
        footer (“Privacy choices”).
      </p>

      <h2 style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }} className="text-xl font-bold pt-2">
        California residents (CCPA-oriented)
      </h2>
      <p>
        We do not sell or share personal information for cross-context behavioral advertising. Subject to applicable law,
        California residents may request to know, delete, or correct personal information we hold from form submissions,
        or ask questions about our practices, by contacting us as below. We will not discriminate against you for
        exercising privacy rights.
      </p>

      <h2 style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }} className="text-xl font-bold pt-2">
        Retention &amp; security
      </h2>
      <p>
        Form submissions are retained as needed to operate the guide and then deleted or archived when no longer needed.
        Transmission uses HTTPS. No method of transmission or storage is 100% secure.
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
        Questions about this policy: use the Share your story form on the{' '}
        <Link to="/#footer-share" style={{ color: '#C9A84C' }}>
          guide homepage
        </Link>{' '}
        or the Google Form linked there, addressed to {siteConfig.author}.
      </p>

      <h2 style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }} className="text-xl font-bold pt-2">
        Changes
      </h2>
      <p>We may update this page from time to time. The “Last updated” date at the top will change when we do.</p>
    </LegalLayout>
  )
}
