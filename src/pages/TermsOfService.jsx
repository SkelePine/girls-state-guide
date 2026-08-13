import { Link } from 'react-router-dom'
import LegalLayout from './LegalLayout'
import { siteConfig, pageMeta } from '../siteConfig'
import { usePageMeta } from '../hooks/usePageMeta'

export default function TermsOfService() {
  usePageMeta(pageMeta.terms)

  return (
    <LegalLayout title="Terms of Service" eyebrow="Using This Guide">
      <p>
        Welcome to the unofficial CA Girls State Guide (the “Site”), created by {siteConfig.author},{' '}
        {siteConfig.authorRole}. By using the Site, you agree to these Terms. If you do not agree, please do not use the
        Site.
      </p>

      <h2 style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }} className="text-xl font-bold pt-2">
        Unofficial resource
      </h2>
      <p>
        This Site is an independent educational resource. It is <strong style={{ color: '#1B2A4A' }}>not</strong>{' '}
        affiliated with, endorsed by, or an official publication of the American Legion Auxiliary, California Girls
        State, Girls Nation, or any ALA unit. Always confirm dates, campus location, deadlines, fees, and rules with your
        ALA unit and{' '}
        <a href="https://www.cagirlsstate.org" target="_blank" rel="noopener noreferrer" className="text-gold-on-cream">
          cagirlsstate.org
        </a>
        .
      </p>

      <h2 style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }} className="text-xl font-bold pt-2">
        No warranties
      </h2>
      <p>
        Content is provided “as is” for general informational purposes based on delegate experience (including the{' '}
        {siteConfig.verifiedYear} session) and may become outdated. We do not warrant completeness, accuracy, or fitness
        for a particular purpose.
      </p>

      <h2 style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }} className="text-xl font-bold pt-2">
        Acceptable use
      </h2>
      <p>
        You agree not to misuse the Site, attempt to disrupt it, submit unlawful or harmful content through forms, or
        scrape the Site in a way that harms operations. Story submissions should be truthful to your knowledge and
        respectful of other delegates’ privacy.
      </p>

      <h2 style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }} className="text-xl font-bold pt-2">
        User submissions
      </h2>
      <p>
        If you share a story or tip, you grant us a non-exclusive license to review it and, with your permission as
        indicated in your submission or follow-up, to publish excerpts on the Site. Do not submit content you do not have
        the right to share.
      </p>

      <h2 style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }} className="text-xl font-bold pt-2">
        Third-party links &amp; services
      </h2>
      <p>
        Links to ALA sites, Formspree, Google Forms, and other third parties are for convenience. Their terms and privacy
        practices apply when you leave the Site or submit data to them.
      </p>

      <h2 style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }} className="text-xl font-bold pt-2">
        Limitation of liability
      </h2>
      <p>
        To the fullest extent permitted by law, {siteConfig.author} and the Site operators are not liable for any
        indirect, incidental, or consequential damages arising from your use of the Site or reliance on its content.
      </p>

      <h2 style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }} className="text-xl font-bold pt-2">
        Governing law
      </h2>
      <p>
        These Terms are governed by the laws of the State of California, without regard to conflict-of-law principles,
        except where prohibited.
      </p>

      <h2 style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }} className="text-xl font-bold pt-2">
        Contact
      </h2>
      <p>
        Questions about these Terms: use the contact options on the{' '}
        <Link to="/" className="text-gold-on-cream">
          homepage
        </Link>
        .
      </p>

      <h2 style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }} className="text-xl font-bold pt-2">
        Changes
      </h2>
      <p>We may update these Terms periodically. Continued use after changes constitutes acceptance of the updated Terms.</p>
    </LegalLayout>
  )
}
