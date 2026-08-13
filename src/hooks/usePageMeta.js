import { useEffect } from 'react'
import { siteConfig } from '../siteConfig'

const DEFAULTS = {
  title: 'CA Girls State Guide — The Ultimate Delegate Resource by Inaaya Saif',
  description:
    'The unofficial actually-useful guide to ALA California Girls State — from the moment you get selected to the moment you get home. Built by 2026 delegate Inaaya Saif.',
}

function setMeta(name, content, attr = 'name') {
  if (!content) return
  let el = document.head.querySelector(`meta[${attr}="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

/** Set document title + description (and matching OG/Twitter tags) per route. */
export function usePageMeta({ title, description } = {}) {
  useEffect(() => {
    const t = title || DEFAULTS.title
    const d = description || DEFAULTS.description
    document.title = t
    setMeta('description', d)
    setMeta('og:title', t, 'property')
    setMeta('og:description', d, 'property')
    setMeta('og:url', `${siteConfig.siteUrl}${window.location.pathname === '/' ? '' : window.location.pathname}`, 'property')
    setMeta('twitter:title', t)
    setMeta('twitter:description', d)
  }, [title, description])
}
