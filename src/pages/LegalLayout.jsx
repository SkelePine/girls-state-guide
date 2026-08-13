import { Link } from 'react-router-dom'
import { siteConfig } from '../siteConfig'
import LegalFooterLinks from '../components/LegalFooterLinks'

export default function LegalLayout({ title, eyebrow, children }) {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#FAF7F2' }}>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>

      <header style={{ backgroundColor: '#1B2A4A' }} className="px-4 sm:px-6 py-6">
        <div className="max-w-3xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <Link
            to="/"
            className="text-lg font-bold tracking-wide"
            style={{ color: '#C9A84C', fontFamily: '"Playfair Display", serif', textDecoration: 'none' }}
          >
            CA Girls State Guide
          </Link>
          <nav aria-label="Legal page">
            <Link
              to="/"
              className="text-sm font-medium"
              style={{
                color: 'rgba(255,255,255,0.85)',
                textDecoration: 'none',
                minHeight: 44,
                display: 'inline-flex',
                alignItems: 'center',
              }}
            >
              ← Back to guide
            </Link>
          </nav>
        </div>
      </header>

      <main id="main" className="px-4 sm:px-6 py-12 sm:py-16 flex-1">
        <article className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest mb-3 text-gold-on-cream">
            {eyebrow}
          </p>
          <h1
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }}
          >
            {title}
          </h1>
          <p className="text-sm text-muted-on-cream mb-10">
            Last updated: August 13, 2026 · Site by {siteConfig.author}
          </p>
          <div className="legal-prose space-y-6 text-base leading-relaxed text-muted-on-cream">{children}</div>
        </article>
      </main>

      <footer style={{ backgroundColor: '#1B2A4A' }} className="px-4 sm:px-6 py-8 mt-auto">
        <div className="max-w-3xl mx-auto">
          <LegalFooterLinks />
        </div>
      </footer>
    </div>
  )
}
