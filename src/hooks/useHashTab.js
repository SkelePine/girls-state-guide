import { useState, useEffect } from 'react'

/**
 * Sync a tab id with the URL hash: #sectionId/tabId (e.g. #prepare/packing)
 * Also supports #sectionId?tab=packing
 */
export function useHashTab(sectionId, defaultTab, validTabs) {
  const parseHash = () => {
    if (typeof window === 'undefined') return defaultTab
    const raw = window.location.hash.replace(/^#/, '')
    if (!raw) return defaultTab

    const [path, query = ''] = raw.split('?')
    const parts = path.split('/')
    if (parts[0] !== sectionId) {
      const params = new URLSearchParams(query)
      if (parts[0] === sectionId || window.location.hash.includes(sectionId)) {
        const t = params.get('tab')
        if (t && validTabs.includes(t)) return t
      }
      return null
    }
    const tabFromPath = parts[1]
    if (tabFromPath && validTabs.includes(tabFromPath)) return tabFromPath
    const params = new URLSearchParams(query)
    const t = params.get('tab')
    if (t && validTabs.includes(t)) return t
    return defaultTab
  }

  const [activeTab, setActiveTabState] = useState(() => parseHash() || defaultTab)

  useEffect(() => {
    const onHash = () => {
      const next = parseHash()
      if (next) setActiveTabState(next)
    }
    window.addEventListener('hashchange', onHash)
    onHash()
    return () => window.removeEventListener('hashchange', onHash)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionId, defaultTab])

  const setActiveTab = (tab) => {
    setActiveTabState(tab)
    const next = `#${sectionId}/${tab}`
    if (window.location.hash !== next) {
      window.history.replaceState(null, '', next)
    }
  }

  return [activeTab, setActiveTab]
}

/** Scroll to a section and optionally open a tab */
export function jumpTo(sectionId, tabId) {
  if (tabId) {
    window.location.hash = `${sectionId}/${tabId}`
  } else {
    window.location.hash = sectionId
  }
  requestAnimationFrame(() => {
    const el = document.getElementById(sectionId)
    if (!el) return
    const top = el.getBoundingClientRect().top + window.scrollY - 80
    window.scrollTo({ top, behavior: 'smooth' })
  })
}
