import { useEffect, useRef } from 'react'

/** Trap Tab focus inside `containerRef` while `active` is true; restores focus on cleanup. */
export function useFocusTrap(active, containerRef) {
  const previousFocus = useRef(null)

  useEffect(() => {
    if (!active) return undefined

    previousFocus.current = document.activeElement
    const root = containerRef.current
    if (!root) return undefined

    const focusableSelector =
      'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'

    const getFocusable = () =>
      Array.from(root.querySelectorAll(focusableSelector)).filter(
        (el) => !el.hasAttribute('disabled') && el.getAttribute('aria-hidden') !== 'true'
      )

    const focusables = getFocusable()
    if (focusables.length) focusables[0].focus()

    const onKeyDown = (e) => {
      if (e.key !== 'Tab') return
      const items = getFocusable()
      if (!items.length) return
      const first = items[0]
      const last = items[items.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    root.addEventListener('keydown', onKeyDown)
    return () => {
      root.removeEventListener('keydown', onKeyDown)
      if (previousFocus.current && typeof previousFocus.current.focus === 'function') {
        previousFocus.current.focus()
      }
    }
  }, [active, containerRef])
}
