import { Link } from 'react-router-dom'
import { openCookieConsent } from './CookieConsent'
import { siteConfig } from '../siteConfig'

const year = new Date().getFullYear()

/** Legal + contact strip used on the guide footer and every legal page. */
export default function LegalFooterLinks({ className = '' }) {
  return (
    <div className={className}>
      <nav
        aria-label="Legal and contact"
        className="flex flex-wrap justify-center gap-x-3 gap-y-2 text-sm"
      >
        <Link
          to="/privacy"
          style={{ color: '#C9A84C', textDecoration: 'none', minHeight: 44, display: 'inline-flex', alignItems: 'center' }}
        >
          Privacy Policy
        </Link>
        <span aria-hidden="true" className="text-muted-on-navy self-center">
          ·
        </span>
        <Link
          to="/terms"
          style={{ color: '#C9A84C', textDecoration: 'none', minHeight: 44, display: 'inline-flex', alignItems: 'center' }}
        >
          Terms of Service
        </Link>
        <span aria-hidden="true" className="text-muted-on-navy self-center">
          ·
        </span>
        <Link
          to="/cookies"
          style={{ color: '#C9A84C', textDecoration: 'none', minHeight: 44, display: 'inline-flex', alignItems: 'center' }}
        >
          Cookie Policy
        </Link>
        <span aria-hidden="true" className="text-muted-on-navy self-center">
          ·
        </span>
        <a
          href={`mailto:${siteConfig.contactEmail}`}
          style={{ color: '#C9A84C', textDecoration: 'none', minHeight: 44, display: 'inline-flex', alignItems: 'center' }}
        >
          {siteConfig.contactEmail}
        </a>
        <span aria-hidden="true" className="text-muted-on-navy self-center">
          ·
        </span>
        <button
          type="button"
          onClick={openCookieConsent}
          className="bg-transparent border-none cursor-pointer text-sm"
          style={{ color: '#C9A84C', minHeight: 44 }}
        >
          Cookie choices
        </button>
      </nav>
      <p className="text-xs leading-relaxed text-muted-on-navy text-center mt-4">
        © {year} CA Girls State Guide · {siteConfig.byline}
      </p>
    </div>
  )
}
