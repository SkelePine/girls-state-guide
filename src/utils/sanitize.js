/**
 * Strip tags and control characters from user-supplied text before submit.
 * Does not claim to be a full HTML sanitizer — we never render this HTML back into the DOM.
 */
export function sanitizeText(value, { maxLength = 5000 } = {}) {
  if (value == null) return ''
  let text = String(value)
  text = text.replace(/<[^>]*>/g, '')
  text = text.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '')
  text = text.replace(/\s+/g, ' ').trim()
  if (text.length > maxLength) text = text.slice(0, maxLength)
  return text
}

export function isValidEmail(value) {
  const email = sanitizeText(value, { maxLength: 254 })
  // Practical validation — not a full RFC parser
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)
}
