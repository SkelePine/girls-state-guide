import { useState } from 'react'
import FadeInSection, { StaggerContainer, StaggerItem } from './FadeInSection'

export default function Footer() {
  const [email, setEmail] = useState('')
  const year = new Date().getFullYear()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    setEmail('')
  }

  return (
    <FadeInSection>
      <footer style={{ backgroundColor: '#1B2A4A' }} className="py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <div style={{ backgroundColor: '#C9A84C' }} className="w-16 h-0.5 mx-auto mb-8"></div>

          <p style={{ color: '#C9A84C', fontFamily: '"Playfair Display", serif' }}
             className="text-2xl font-bold mb-3">
            CA Girls State Guide
          </p>

          <p className="text-white opacity-50 text-sm leading-relaxed mb-6 max-w-md mx-auto">
            An unofficial guide built by 2026 delegates for every delegate who comes after. Not affiliated with the American Legion Auxiliary.
          </p>

          <StaggerContainer className="flex flex-wrap justify-center gap-6 mb-10">
            {[
              { label: 'Official Site', url: 'https://www.cagirlsstate.org' },
              { label: 'GSAF', url: 'https://www.cagsaf.org' },
              { label: 'ALA California', url: 'https://calegionaux.org' },
              { label: 'Girls State Store', url: 'https://shopcagirlsstate.com' },
            ].map((link) => (
              <StaggerItem key={link.label}>
                <a href={link.url} target="_blank" rel="noopener noreferrer"
                   className="text-white opacity-50 hover:opacity-100 text-sm transition-opacity">
                  {link.label}
                </a>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Alumna contact */}
          <div className="max-w-md mx-auto mb-10">
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'white', opacity: 0.7 }}>
              Are you a Girls State alumna? Share your story.
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 items-stretch"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                aria-label="Email address"
                className="flex-1 px-4 py-3 rounded-lg text-sm border-none outline-none"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.08)',
                  color: 'white',
                  border: '1px solid rgba(201,168,76,0.35)',
                }}
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-lg text-sm font-medium cursor-pointer border-none transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#C9A84C', color: '#1B2A4A' }}
              >
                Submit
              </button>
            </form>
          </div>

          <div style={{ backgroundColor: 'rgba(255,255,255,0.1)' }} className="w-full h-px mb-6"></div>

          <p className="text-white opacity-30 text-xs">
            © {year} CA Girls State Guide · Built with 💛 by 2026 delegates
          </p>

        </div>
      </footer>
    </FadeInSection>
  )
}
