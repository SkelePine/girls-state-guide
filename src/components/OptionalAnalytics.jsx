import { useEffect, useState } from 'react'
import { Analytics } from '@vercel/analytics/react'
import { hasAcceptedNonEssentialCookies } from './CookieConsent'

function beforeSend(event) {
  if (!hasAcceptedNonEssentialCookies()) return null
  return event
}

/**
 * Vercel Web Analytics — loads only after the visitor Accepts non-essential cookies.
 * If they later Decline, further events are dropped even if the script is already present.
 */
export default function OptionalAnalytics() {
  const [allowed, setAllowed] = useState(hasAcceptedNonEssentialCookies)

  useEffect(() => {
    const onChange = (event) => {
      setAllowed(event.detail === 'accepted')
    }
    window.addEventListener('gs-cookie-consent-changed', onChange)
    return () => window.removeEventListener('gs-cookie-consent-changed', onChange)
  }, [])

  if (!allowed) return null

  return <Analytics beforeSend={beforeSend} />
}
