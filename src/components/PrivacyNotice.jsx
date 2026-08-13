import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const STORAGE_KEY = 'gs-privacy-notice-seen'
export const PRIVACY_NOTICE_EVENT = 'gs-open-privacy-notice'

export default function PrivacyNotice() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY) !== '1') setVisible(true)
    } catch {
      setVisible(true)
    }

    const open = () => setVisible(true)
    window.addEventListener(PRIVACY_NOTICE_EVENT, open)
    return () => window.removeEventListener(PRIVACY_NOTICE_EVENT, open)
  }, [])

  const accept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, '1')
    } catch {
      // ignore
    }
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="privacy-notice-title"
      aria-describedby="privacy-notice-desc"
      className="fixed bottom-0 inset-x-0 z-[80] p-4 sm:p-5"
      style={{ paddingBottom: 'max(1rem, env(safe-area-inset-bottom, 0px))' }}
    >
      <div
        className="max-w-3xl mx-auto rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-4"
        style={{
          backgroundColor: 'rgba(27, 42, 74, 0.97)',
          border: '1px solid rgba(201,168,76,0.35)',
          boxShadow: '0 12px 40px rgba(0,0,0,0.35)',
        }}
      >
        <div className="flex-1 text-left">
          <p id="privacy-notice-title" className="text-xs uppercase tracking-widest mb-1" style={{ color: '#C9A84C' }}>
            Privacy notice
          </p>
          <p id="privacy-notice-desc" className="text-sm leading-relaxed text-muted-on-navy">
            We use essential browser storage for packing checklists and this notice. Story submissions go to Formspree
            and/or Google Forms. We do not use advertising cookies.{' '}
            <Link to="/privacy" style={{ color: '#C9A84C' }}>
              Privacy Policy
            </Link>
          </p>
        </div>
        <button
          type="button"
          onClick={accept}
          className="flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-semibold border-none cursor-pointer"
          style={{ backgroundColor: '#C9A84C', color: '#1B2A4A', minHeight: 44 }}
        >
          Accept
        </button>
      </div>
    </div>
  )
}

export function openPrivacyNotice() {
  window.dispatchEvent(new Event(PRIVACY_NOTICE_EVENT))
}
