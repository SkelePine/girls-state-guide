import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

/** localStorage: 'accepted' | 'declined' — non-essential cookies only load after 'accepted' */
export const COOKIE_CONSENT_KEY = 'gs-cookie-consent'
export const COOKIE_CONSENT_EVENT = 'gs-open-cookie-consent'

export function getCookieConsent() {
  try {
    return localStorage.getItem(COOKIE_CONSENT_KEY)
  } catch {
    return null
  }
}

/** True only when the visitor explicitly accepted non-essential cookies. */
export function hasAcceptedNonEssentialCookies() {
  return getCookieConsent() === 'accepted'
}

/**
 * Call this before loading analytics/tracking scripts.
 * Currently the site does not ship analytics; gate future trackers here.
 */
export function loadNonEssentialIfAllowed(loader) {
  if (hasAcceptedNonEssentialCookies() && typeof loader === 'function') {
    loader()
  }
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      const value = localStorage.getItem(COOKIE_CONSENT_KEY)
      if (value !== 'accepted' && value !== 'declined') setVisible(true)
    } catch {
      setVisible(true)
    }

    const open = () => setVisible(true)
    window.addEventListener(COOKIE_CONSENT_EVENT, open)
    return () => window.removeEventListener(COOKIE_CONSENT_EVENT, open)
  }, [])

  const choose = (value) => {
    try {
      localStorage.setItem(COOKIE_CONSENT_KEY, value)
    } catch {
      // ignore
    }
    // Migrate / clear legacy notice key if present
    try {
      localStorage.removeItem('gs-privacy-notice-seen')
    } catch {
      // ignore
    }
    setVisible(false)
    window.dispatchEvent(new CustomEvent('gs-cookie-consent-changed', { detail: value }))
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-desc"
      className="fixed bottom-0 inset-x-0 z-[80] p-4 sm:p-5"
      style={{ paddingBottom: 'max(1rem, env(safe-area-inset-bottom, 0px))' }}
    >
      <div
        className="max-w-3xl mx-auto rounded-2xl p-5 sm:p-6 flex flex-col gap-4"
        style={{
          backgroundColor: 'rgba(27, 42, 74, 0.97)',
          border: '1px solid rgba(201,168,76,0.35)',
          boxShadow: '0 12px 40px rgba(0,0,0,0.35)',
        }}
      >
        <div className="text-left">
          <p id="cookie-consent-title" className="text-xs uppercase tracking-widest mb-1" style={{ color: '#C9A84C' }}>
            Cookie choices
          </p>
          <p id="cookie-consent-desc" className="text-sm leading-relaxed text-muted-on-navy">
            We use essential browser storage so packing checklists and your cookie choice work. We do not load
            advertising or analytics cookies unless you Accept non-essential cookies. You can change this anytime.{' '}
            <Link to="/cookies" style={{ color: '#C9A84C' }}>
              Cookie Policy
            </Link>
            {' · '}
            <Link to="/privacy" style={{ color: '#C9A84C' }}>
              Privacy Policy
            </Link>
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
          <button
            type="button"
            onClick={() => choose('declined')}
            className="px-5 py-2.5 rounded-full text-sm font-semibold border-none cursor-pointer"
            style={{
              backgroundColor: 'rgba(255,255,255,0.1)',
              color: 'white',
              border: '1px solid rgba(255,255,255,0.35)',
              minHeight: 44,
            }}
          >
            Decline non-essential
          </button>
          <button
            type="button"
            onClick={() => choose('accepted')}
            className="px-5 py-2.5 rounded-full text-sm font-semibold border-none cursor-pointer"
            style={{ backgroundColor: '#C9A84C', color: '#1B2A4A', minHeight: 44 }}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}

export function openCookieConsent() {
  window.dispatchEvent(new Event(COOKIE_CONSENT_EVENT))
}

/** @deprecated use openCookieConsent */
export function openPrivacyNotice() {
  openCookieConsent()
}
