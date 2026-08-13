import { useState } from 'react'
import FadeInSection, { StaggerContainer, StaggerItem } from './FadeInSection'
import GlossaryModal from './Glossary'
import { siteConfig } from '../siteConfig'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [glossaryOpen, setGlossaryOpen] = useState(false)
  const year = new Date().getFullYear()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email.trim()) return

    const endpoint = siteConfig.formspreeEndpoint
    if (endpoint) {
      setStatus('sending')
      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            email: email.trim(),
            name: name.trim() || 'Alumna',
            message: message.trim() || 'I would like to share my Girls State story.',
            _subject: 'CA Girls State Guide — Alumna story',
          }),
        })
        if (!res.ok) throw new Error('send failed')
        setStatus('sent')
        setEmail('')
        setName('')
        setMessage('')
      } catch {
        setStatus('error')
      }
      return
    }

    if (siteConfig.contactEmail) {
      const subject = encodeURIComponent('CA Girls State Guide — Alumna story')
      const body = encodeURIComponent(
        `Name: ${name || '(not provided)'}\nEmail: ${email}\n\n${message || 'I would like to share my Girls State story.'}`
      )
      window.location.href = `mailto:${siteConfig.contactEmail}?subject=${subject}&body=${body}`
      setStatus('sent')
      return
    }

    // No Formspree / email configured — open Google Form
    window.open(siteConfig.googleFormUrl, '_blank', 'noopener,noreferrer')
    setStatus('sent')
  }

  return (
    <FadeInSection>
      <footer style={{ backgroundColor: '#1B2A4A' }} className="py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div style={{ backgroundColor: '#C9A84C' }} className="w-16 h-0.5 mx-auto mb-8" />

          <p
            style={{ color: '#C9A84C', fontFamily: '"Playfair Display", serif' }}
            className="text-2xl font-bold mb-3"
          >
            CA Girls State Guide
          </p>

          <p className="text-sm leading-relaxed mb-2 max-w-md mx-auto" style={{ color: 'rgba(255,255,255,0.78)' }}>
            {siteConfig.byline}
          </p>
          <p className="text-xs leading-relaxed mb-6 max-w-md mx-auto" style={{ color: 'rgba(255,255,255,0.65)' }}>
            An unofficial guide. Not affiliated with the American Legion Auxiliary.
          </p>

          <StaggerContainer className="flex flex-wrap justify-center gap-6 mb-8">
            {[
              { label: 'Official Site', url: 'https://www.cagirlsstate.org' },
              { label: 'GSAF', url: 'https://www.cagsaf.org' },
              { label: 'ALA California', url: 'https://calegionaux.org' },
              { label: 'Girls State Store', url: 'https://shopcagirlsstate.com' },
            ].map((link) => (
              <StaggerItem key={link.label}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition-opacity hover:opacity-100"
                  style={{ color: 'rgba(255,255,255,0.72)' }}
                >
                  {link.label}
                </a>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className="mb-10 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={() => setGlossaryOpen(true)}
              className="px-6 py-3 rounded-full text-sm font-medium border-none cursor-pointer transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#C9A84C', color: '#1B2A4A', minHeight: 44 }}
            >
              Glossary
            </button>
            <a
              href="#parents"
              onClick={(e) => {
                e.preventDefault()
                window.location.hash = 'parents'
                const el = document.getElementById('parents')
                if (el) {
                  const top = el.getBoundingClientRect().top + window.scrollY - 80
                  window.scrollTo({ top, behavior: 'smooth' })
                }
              }}
              className="px-6 py-3 rounded-full text-sm font-medium inline-flex items-center"
              style={{
                backgroundColor: 'rgba(255,255,255,0.08)',
                color: 'white',
                border: '1px solid rgba(201,168,76,0.4)',
                minHeight: 44,
                textDecoration: 'none',
              }}
            >
              For parents
            </a>
          </div>

          <div className="max-w-md mx-auto mb-10 text-left" id="footer-share">
            <p className="text-sm leading-relaxed mb-4 text-center" style={{ color: 'rgba(255,255,255,0.8)' }}>
              Are you a Girls State alumna? Share your story with future delegates.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name (optional)"
                aria-label="Your name"
                className="w-full px-4 py-3 rounded-lg text-sm border-none outline-none"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.08)',
                  color: 'white',
                  border: '1px solid rgba(201,168,76,0.35)',
                  minHeight: 44,
                }}
              />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                aria-label="Email address"
                className="w-full px-4 py-3 rounded-lg text-sm border-none outline-none"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.08)',
                  color: 'white',
                  border: '1px solid rgba(201,168,76,0.35)',
                  minHeight: 44,
                }}
              />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="A short note about your experience"
                aria-label="Message"
                rows={3}
                className="w-full px-4 py-3 rounded-lg text-sm border-none outline-none resize-y"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.08)',
                  color: 'white',
                  border: '1px solid rgba(201,168,76,0.35)',
                }}
              />
              <button
                type="submit"
                disabled={status === 'sending'}
                className="px-6 py-3 rounded-lg text-sm font-medium cursor-pointer border-none transition-opacity hover:opacity-90 disabled:opacity-60"
                style={{ backgroundColor: '#C9A84C', color: '#1B2A4A', minHeight: 44 }}
              >
                {status === 'sending' ? 'Sending…' : 'Share my story'}
              </button>
              {status === 'sent' && (
                <p className="text-xs text-center" style={{ color: '#C9A84C' }}>
                  Thank you — your note is on its way.
                </p>
              )}
              {status === 'error' && (
                <p className="text-xs text-center" style={{ color: '#FCA5A5' }}>
                  Something went wrong. Try the Google Form below.
                </p>
              )}
            </form>

            <p className="text-center text-xs mt-5" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Prefer a form?{' '}
              <a
                href={siteConfig.googleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#C9A84C' }}
              >
                Open the Google Form →
              </a>
            </p>
          </div>

          <div style={{ backgroundColor: 'rgba(255,255,255,0.1)' }} className="w-full h-px mb-6" />

          <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
            © {year} CA Girls State Guide · {siteConfig.byline}
          </p>
        </div>
      </footer>

      <GlossaryModal open={glossaryOpen} onClose={() => setGlossaryOpen(false)} />
    </FadeInSection>
  )
}
