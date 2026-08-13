import { Link } from 'react-router-dom'
import LegalLayout from './LegalLayout'
import { siteConfig } from '../siteConfig'
import { usePageMeta } from '../hooks/usePageMeta'

export default function PrivacyPolicy() {
  usePageMeta({
    title: 'Privacy Policy — CA Girls State Guide',
    description:
      'What the CA Girls State Guide collects (story form, checklists), who can see it, how to request deletion, and GDPR/CCPA rights.',
  })

  const contactBlock = siteConfig.contactEmail ? (
    <a href={`mailto:${siteConfig.contactEmail}`} className="text-gold-on-cream">
      {siteConfig.contactEmail}
    </a>
  ) : (
    <Link to="/#footer-share" className="text-gold-on-cream">
      Contact form on the homepage
    </Link>
  )

  return (
    <LegalLayout title="Privacy Policy" eyebrow="Your Privacy">
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
          <strong style={{ color: '#1B2A4A' }}>Google Form (optional):</strong> if you open our linked Google Form,
          Google collects whatever fields that form asks for under Google’s policies.
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
      </ul>
      <p>
        We do not ask for payment card data on this Site. We do not sell personal information.
      </p>

      <h2 style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }} className="text-xl font-bold pt-2">
        How we use it
      </h2>
      <p>
        We use story submissions to read your experience, respond if needed, and — only if you answered “yes” to the
        publish permission question — consider featuring your words on the guide. Checklist storage exists only so your
        progress persists on the same browser. Hosting logs keep the Site reliable and secure.
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
          <strong style={{ color: '#1B2A4A' }}>Google Forms:</strong> if you use that link, Google and anyone you share
          that form’s inbox with can see those responses.
        </li>
        <li>
          <strong style={{ color: '#1B2A4A' }}>Vercel:</strong> may process access logs; they do not receive your story
          form body through this Site’s static hosting.
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
        <li>Formspree — form delivery</li>
        <li>Google Forms — optional longer questionnaire</li>
        <li>Vercel — hosting and logs</li>
        <li>Self-hosted fonts (Inter, Playfair Display) — no Google Fonts request</li>
      </ul>
      <p>
        Details on cookies and storage: see our{' '}
        <Link to="/cookies" className="text-gold-on-cream">
          Cookie Policy
        </Link>
        .
      </p>

      <h2 style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }} className="text-xl font-bold pt-2">
        How to request deletion or access
      </h2>
      <p>
        Email or message us via {contactBlock} and tell us you want your form data accessed, corrected, or deleted.
        Include the email address you used on the form so we can find your submission. We will respond within a
        reasonable time (typically within 30 days). Clearing your browser storage removes checklist and cookie-choice
        data on that device immediately.
      </p>

      <h2 style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }} className="text-xl font-bold pt-2">
        GDPR (EEA / UK-oriented)
      </h2>
      <p>
        If European data-protection law applies to you, you may have rights to access, rectify, erase, restrict, or
        object to certain processing, and to data portability, where applicable. Our lawful bases for the story form are
        your consent (you choose to submit) and our legitimate interest in operating an educational guide. You may
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
        Retention &amp; security
      </h2>
      <p>
        Form submissions are retained as needed to operate the guide, then deleted or archived when no longer needed.
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
        Privacy questions: {contactBlock}, addressed to {siteConfig.author}.
      </p>

      <h2 style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }} className="text-xl font-bold pt-2">
        Changes
      </h2>
      <p>We may update this page from time to time. The “Last updated” date at the top will change when we do.</p>
    </LegalLayout>
  )
}
