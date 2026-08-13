import { useState } from 'react'
import FadeInSection, { StaggerContainer, StaggerItem } from './FadeInSection'
import GlossaryModal from './Glossary'
import LegalFooterLinks from './LegalFooterLinks'
import { siteConfig } from '../siteConfig'
import { sanitizeText, isValidEmail } from '../utils/sanitize'

const fieldStyle = {
  backgroundColor: 'rgba(255,255,255,0.08)',
  color: 'white',
  border: '1px solid rgba(201,168,76,0.35)',
  minHeight: 44,
}

const labelClass = 'block text-xs font-medium mb-1.5 text-muted-on-navy'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [publishPermission, setPublishPermission] = useState('') // '' | 'yes' | 'no'
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [errors, setErrors] = useState({})
  const [glossaryOpen, setGlossaryOpen] = useState(false)

  const validate = () => {
    const next = {}
    const cleanEmail = sanitizeText(email, { maxLength: 254 })
    const cleanMessage = sanitizeText(message, { maxLength: 5000 })

    if (!cleanEmail) next.email = 'Email is required.'
    else if (!isValidEmail(cleanEmail)) next.email = 'Enter a valid email address.'

    if (!cleanMessage) next.message = 'Please share a short note about your experience.'

    if (publishPermission !== 'yes' && publishPermission !== 'no') {
      next.publishPermission = 'Please choose whether we may publish your story.'
    }

    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) {
      setStatus('idle')
      return
    }

    const cleanName = sanitizeText(name, { maxLength: 200 })
    const cleanEmail = sanitizeText(email, { maxLength: 254 })
    const cleanMessage = sanitizeText(message, { maxLength: 5000 })
    const permissionLabel =
      publishPermission === 'yes'
        ? 'Yes — may publish on the website'
        : 'No — do not publish; private to site operator'

    const endpoint = siteConfig.formspreeEndpoint
    if (endpoint) {
      setStatus('sending')
      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            email: cleanEmail,
            name: cleanName || 'Alumna',
            message: cleanMessage,
            publish_permission: permissionLabel,
            _subject: 'CA Girls State Guide — Alumna story',
          }),
        })
        if (!res.ok) throw new Error('send failed')
        setStatus('sent')
        setEmail('')
        setName('')
        setMessage('')
        setPublishPermission('')
        setErrors({})
      } catch {
        setStatus('error')
      }
      return
    }

    if (siteConfig.contactEmail) {
      const subject = encodeURIComponent('CA Girls State Guide — Alumna story')
      const body = encodeURIComponent(
        `Name: ${cleanName || '(not provided)'}\nEmail: ${cleanEmail}\nPublish permission: ${permissionLabel}\n\n${cleanMessage}`
      )
      window.location.href = `mailto:${siteConfig.contactEmail}?subject=${subject}&body=${body}`
      setStatus('sent')
      return
    }

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

          <p className="text-sm leading-relaxed mb-2 max-w-md mx-auto text-muted-on-navy">
            {siteConfig.byline}
          </p>
          <p className="text-xs leading-relaxed mb-6 max-w-md mx-auto text-muted-on-navy">
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
                  className="text-sm transition-opacity hover:opacity-100 text-muted-on-navy"
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
            <h2
              className="text-lg font-bold mb-2 text-center"
              style={{ color: '#C9A84C', fontFamily: '"Playfair Display", serif' }}
            >
              Share your story
            </h2>
            <p className="text-sm leading-relaxed mb-4 text-center text-muted-on-navy">
              Are you a Girls State alumna? Share your story with future delegates. Submissions are sent securely over
              HTTPS to Formspree for the site operator to review.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3" noValidate>
              <div>
                <label htmlFor="story-name" className={labelClass}>
                  Your name <span className="opacity-70">(optional)</span>
                </label>
                <input
                  id="story-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="name"
                  className="w-full px-4 py-3 rounded-lg text-sm border-none outline-none"
                  style={fieldStyle}
                />
              </div>

              <div>
                <label htmlFor="story-email" className={labelClass}>
                  Email address <span className="font-semibold">(required)</span>
                </label>
                <input
                  id="story-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  aria-invalid={errors.email ? 'true' : 'false'}
                  aria-describedby={errors.email ? 'story-email-error' : undefined}
                  className="w-full px-4 py-3 rounded-lg text-sm border-none outline-none"
                  style={{
                    ...fieldStyle,
                    border: errors.email ? '1px solid #FCA5A5' : fieldStyle.border,
                  }}
                />
                {errors.email && (
                  <p id="story-email-error" className="text-xs mt-1" style={{ color: '#FCA5A5' }} role="alert">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="story-message" className={labelClass}>
                  Your story or note <span className="font-semibold">(required)</span>
                </label>
                <textarea
                  id="story-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={3}
                  aria-invalid={errors.message ? 'true' : 'false'}
                  aria-describedby={errors.message ? 'story-message-error' : undefined}
                  className="w-full px-4 py-3 rounded-lg text-sm border-none outline-none resize-y"
                  style={{
                    ...fieldStyle,
                    minHeight: 96,
                    border: errors.message ? '1px solid #FCA5A5' : fieldStyle.border,
                  }}
                />
                {errors.message && (
                  <p id="story-message-error" className="text-xs mt-1" style={{ color: '#FCA5A5' }} role="alert">
                    {errors.message}
                  </p>
                )}
              </div>

              <fieldset className="m-0 p-0 border-none">
                <legend className={`${labelClass} mb-2`}>
                  May we publish your story on this website? <span className="font-semibold">(required)</span>
                </legend>
                <div className="flex flex-col gap-2" role="radiogroup" aria-required="true">
                  <label className="flex items-start gap-3 text-sm text-muted-on-navy cursor-pointer" style={{ minHeight: 44 }}>
                    <input
                      type="radio"
                      name="publish-permission"
                      value="yes"
                      checked={publishPermission === 'yes'}
                      onChange={() => setPublishPermission('yes')}
                      className="mt-1"
                    />
                    <span>Yes — you may publish my story (or an excerpt) on the website</span>
                  </label>
                  <label className="flex items-start gap-3 text-sm text-muted-on-navy cursor-pointer" style={{ minHeight: 44 }}>
                    <input
                      type="radio"
                      name="publish-permission"
                      value="no"
                      checked={publishPermission === 'no'}
                      onChange={() => setPublishPermission('no')}
                      className="mt-1"
                    />
                    <span>No — keep it private for the site operator only</span>
                  </label>
                </div>
                {errors.publishPermission && (
                  <p className="text-xs mt-2" style={{ color: '#FCA5A5' }} role="alert">
                    {errors.publishPermission}
                  </p>
                )}
              </fieldset>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="px-6 py-3 rounded-lg text-sm font-medium cursor-pointer border-none transition-opacity hover:opacity-90 disabled:opacity-60"
                style={{ backgroundColor: '#C9A84C', color: '#1B2A4A', minHeight: 44 }}
              >
                {status === 'sending' ? 'Sending…' : 'Share my story'}
              </button>
              <div aria-live="polite" aria-atomic="true">
                {status === 'sent' && (
                  <p className="text-xs text-center" style={{ color: '#C9A84C' }}>
                    Thank you — your note is on its way.
                  </p>
                )}
                {status === 'error' && (
                  <p className="text-xs text-center" style={{ color: '#FCA5A5' }} role="alert">
                    Something went wrong. Try the Google Form below, or check your connection and try again.
                  </p>
                )}
              </div>
            </form>

            <p className="text-center text-xs mt-5 text-muted-on-navy">
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

          <LegalFooterLinks />
        </div>
      </footer>

      <GlossaryModal open={glossaryOpen} onClose={() => setGlossaryOpen(false)} />
    </FadeInSection>
  )
}
