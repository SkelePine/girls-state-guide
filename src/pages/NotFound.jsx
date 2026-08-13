import { Link } from 'react-router-dom'
import LegalLayout from './LegalLayout'
import { usePageMeta } from '../hooks/usePageMeta'
import { pageMeta } from '../siteConfig'

export default function NotFound() {
  usePageMeta(pageMeta.notFound)

  return (
    <LegalLayout title="Page not found" eyebrow="404">
      <p>
        We could not find that page. It may have moved, or the link might be typed incorrectly.
      </p>
      <p>
        <Link
          to="/"
          className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold"
          style={{
            backgroundColor: '#1B2A4A',
            color: 'white',
            textDecoration: 'none',
            minHeight: 44,
          }}
        >
          ← Back to the guide homepage
        </Link>
      </p>
      <p className="text-sm">
        Looking for policies?{' '}
        <Link to="/privacy" className="text-gold-on-cream">
          Privacy
        </Link>
        {' · '}
        <Link to="/terms" className="text-gold-on-cream">
          Terms
        </Link>
        {' · '}
        <Link to="/cookies" className="text-gold-on-cream">
          Cookies
        </Link>
      </p>
    </LegalLayout>
  )
}
