import { useState, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

/** Grouped like the top navbar — flat unique section IDs for scroll tracking */
const groups = [
  {
    label: 'Getting In',
    links: [
      { id: 'apply', label: 'How to Apply' },
      { id: 'what', label: 'What Is It' },
    ],
  },
  {
    label: 'The Structure',
    links: [
      { id: 'structure', label: 'How It Works' },
      { id: 'office', label: 'Positions' },
      { id: 'week', label: 'The Week' },
    ],
  },
  {
    label: 'Prepare',
    links: [
      { id: 'prepare', label: 'Prepare to Go' },
      { id: 'runforoffice', label: 'Run for Office' },
      { id: 'filing', label: 'Filing & Currency' },
      { id: 'bill', label: 'Write Your Bill' },
      { id: 'barexam', label: 'Bar Exam' },
    ],
  },
  {
    label: 'The Experience',
    links: [
      { id: 'experience', label: 'The Experience' },
      { id: 'delegates', label: 'From the Delegates' },
    ],
  },
  {
    label: 'What Is Next',
    links: [
      { id: 'next', label: 'Girls Nation & After' },
    ],
  },
  {
    label: 'Parents',
    links: [
      { id: 'parents', label: 'For Parents' },
    ],
  },
  {
    label: 'More',
    links: [
      { id: 'faq', label: 'FAQ' },
      { id: 'about', label: 'About' },
    ],
  },
]

const allSections = groups.flatMap((g) => g.links.map((l) => ({ ...l, group: g.label })))

/** DOM / scroll order (must match App.jsx) — used for active-section detection */
const SECTION_ORDER = [
  'about',
  'apply',
  'what',
  'structure',
  'office',
  'week',
  'prepare',
  'runforoffice',
  'filing',
  'bill',
  'barexam',
  'experience',
  'next',
  'parents',
  'delegates',
  'faq',
]

const LABEL_MS = 2200

function findGroupIndex(sectionId) {
  const i = groups.findIndex((g) => g.links.some((l) => l.id === sectionId))
  return i >= 0 ? i : 0
}

function getActiveSectionFromScroll() {
  const marker = window.innerHeight * 0.32
  let current = SECTION_ORDER[0]
  for (const id of SECTION_ORDER) {
    const el = document.getElementById(id)
    if (!el) continue
    if (el.getBoundingClientRect().top <= marker) {
      current = id
    }
  }
  return current
}

export default function SectionIndicator() {
  const [activeId, setActiveId] = useState(allSections[0].id)
  const [visible, setVisible] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [browseGroup, setBrowseGroup] = useState(0)
  const [toastLabel, setToastLabel] = useState(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const closeTimer = useRef(null)
  const openTimer = useRef(null)
  const groupHoverTimer = useRef(null)
  const toastTimer = useRef(null)
  const navRef = useRef(null)
  const hoveringRef = useRef(false)

  const activeGroupIndex = findGroupIndex(activeId)
  const openGroupIndex = hovering ? browseGroup : activeGroupIndex

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.querySelector('.hero-gradient')
      if (!hero) {
        setVisible(window.scrollY > 400)
      } else {
        setVisible(hero.getBoundingClientRect().bottom < 120)
      }

      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(maxScroll > 0 ? Math.min(1, Math.max(0, window.scrollY / maxScroll)) : 0)

      // Reliable with lazy-loaded sections (IntersectionObserver alone misses late mounts)
      const nextId = getActiveSectionFromScroll()
      setActiveId((prev) => (prev === nextId ? prev : nextId))
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  // Keep IntersectionObserver as a supplement; re-attach when lazy sections mount
  useEffect(() => {
    const ratios = new Map()
    const observed = new Set()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            ratios.set(entry.target.id, entry.intersectionRatio)
          } else {
            ratios.delete(entry.target.id)
          }
        })

        let bestId = ''
        let bestRatio = -1
        for (const id of SECTION_ORDER) {
          const ratio = ratios.get(id)
          if (ratio !== undefined && ratio >= bestRatio) {
            bestRatio = ratio
            bestId = id
          }
        }
        if (bestId) setActiveId(bestId)
      },
      {
        rootMargin: '-25% 0px -45% 0px',
        threshold: [0, 0.1, 0.25, 0.5, 0.75],
      }
    )

    const tryObserve = () => {
      SECTION_ORDER.forEach((id) => {
        const el = document.getElementById(id)
        if (el && !observed.has(id)) {
          observer.observe(el)
          observed.add(id)
        }
      })
    }

    tryObserve()
    const mo = new MutationObserver(tryObserve)
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      mo.disconnect()
    }
  }, [])

  useEffect(() => {
    setBrowseGroup(activeGroupIndex)
    if (hoveringRef.current) return

    const meta = allSections.find((s) => s.id === activeId)
    if (!meta) return

    setToastLabel({ group: meta.group, label: meta.label, key: activeId + Date.now() })
    if (toastTimer.current) clearTimeout(toastTimer.current)
    toastTimer.current = setTimeout(() => setToastLabel(null), LABEL_MS)
  }, [activeId, activeGroupIndex])

  useEffect(() => {
    const el = navRef.current
    if (!el || !hovering) return

    const onWheel = (e) => {
      e.preventDefault()
      const dir = e.deltaY > 0 ? 1 : e.deltaY < 0 ? -1 : 0
      if (!dir) return
      setBrowseGroup((i) => Math.min(groups.length - 1, Math.max(0, i + dir)))
    }

    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [hovering])

  useEffect(() => () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    if (openTimer.current) clearTimeout(openTimer.current)
    if (groupHoverTimer.current) clearTimeout(groupHoverTimer.current)
    if (toastTimer.current) clearTimeout(toastTimer.current)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (!element) return
    const top = element.getBoundingClientRect().top + window.scrollY - 80
    window.scrollTo({ top, behavior: 'smooth' })
  }

  const openRail = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    if (openTimer.current) clearTimeout(openTimer.current)
    if (toastTimer.current) clearTimeout(toastTimer.current)
    setToastLabel(null)

    openTimer.current = setTimeout(() => {
      hoveringRef.current = true
      setHovering(true)
      setBrowseGroup(activeGroupIndex)
    }, 220)
  }

  const closeRail = () => {
    if (openTimer.current) clearTimeout(openTimer.current)
    if (groupHoverTimer.current) clearTimeout(groupHoverTimer.current)
    closeTimer.current = setTimeout(() => {
      hoveringRef.current = false
      setHovering(false)
      setBrowseGroup(activeGroupIndex)
    }, 200)
  }

  const previewGroup = (i) => {
    if (groupHoverTimer.current) clearTimeout(groupHoverTimer.current)
    groupHoverTimer.current = setTimeout(() => setBrowseGroup(i), 160)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="section-indicator"
          ref={navRef}
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 12 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="hidden md:flex fixed right-4 top-1/2 -translate-y-1/2 z-40 items-center gap-3"
          onMouseEnter={openRail}
          onMouseLeave={closeRail}
        >
          <div className="relative flex items-center justify-end" style={{ width: 0 }}>
            <AnimatePresence mode="wait">
              {!hovering && toastLabel && (
                <motion.div
                  key={toastLabel.key}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 6 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="absolute right-3 whitespace-nowrap text-right pointer-events-none rounded-lg px-3 py-2"
                  style={{
                    backgroundColor: 'rgba(250, 247, 242, 0.92)',
                    boxShadow: '0 4px 16px rgba(27,42,74,0.12)',
                    border: '1px solid rgba(201,168,76,0.25)',
                  }}
                  aria-live="polite"
                >
                  <p
                    className="text-xs uppercase tracking-widest mb-0.5"
                    style={{ color: '#C9A84C' }}
                  >
                    {toastLabel.group}
                  </p>
                  <p
                    className="text-sm font-medium"
                    style={{ color: '#1B2A4A', fontFamily: 'Playfair Display, Georgia, serif' }}
                  >
                    {toastLabel.label}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <nav aria-label="Section progress">
            <motion.div
              className="relative overflow-hidden rounded-2xl"
              style={{
                backgroundColor: 'rgba(27, 42, 74, 0.9)',
                boxShadow: '0 8px 28px rgba(0,0,0,0.28)',
                border: '1px solid rgba(201,168,76,0.22)',
              }}
              animate={{
                width: hovering ? 228 : 40,
              }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            >
              <div
                className="absolute left-0 top-0 bottom-0 w-0.5 overflow-hidden"
                style={{ backgroundColor: 'rgba(156,163,175,0.35)' }}
                aria-hidden="true"
              >
                <div
                  className="w-full transition-[height] duration-200 ease-out"
                  style={{
                    height: `${scrollProgress * 100}%`,
                    backgroundColor: '#C9A84C',
                  }}
                />
              </div>

              {!hovering && (
                <div className="relative flex flex-col items-center gap-3.5 py-4 px-2">
                  {groups.map((group, i) => {
                    const isActive = i === activeGroupIndex
                    return (
                      <button
                        key={group.label}
                        type="button"
                        onClick={() => scrollToSection(group.links[0].id)}
                        className="flex items-center justify-center bg-transparent border-none cursor-pointer p-0"
                        style={{ width: 22, height: 22 }}
                        aria-label={group.label}
                        aria-current={isActive ? 'true' : undefined}
                        title={group.label}
                      >
                        <motion.span
                          className="block rounded-full"
                          animate={{
                            width: isActive ? 11 : 7,
                            height: isActive ? 11 : 7,
                            backgroundColor: isActive ? '#C9A84C' : '#9CA3AF',
                            boxShadow: isActive
                              ? [
                                  '0 0 0 0 rgba(201,168,76,0.5)',
                                  '0 0 0 5px rgba(201,168,76,0)',
                                  '0 0 0 0 rgba(201,168,76,0.5)',
                                ]
                              : 'none',
                          }}
                          transition={{
                            width: { duration: 0.2 },
                            height: { duration: 0.2 },
                            backgroundColor: { duration: 0.2 },
                            boxShadow: isActive
                              ? { duration: 2, repeat: Infinity, ease: 'easeInOut' }
                              : { duration: 0.2 },
                          }}
                        />
                      </button>
                    )
                  })}
                </div>
              )}

              {hovering && (
                <div className="relative py-3.5 px-1">
                  {groups.map((group, i) => {
                    const isOpen = i === openGroupIndex
                    const isActiveGroup = i === activeGroupIndex

                    return (
                      <div key={group.label} className={i > 0 ? 'mt-1' : ''}>
                        <button
                          type="button"
                          onClick={() => {
                            if (groupHoverTimer.current) clearTimeout(groupHoverTimer.current)
                            setBrowseGroup(i)
                            scrollToSection(group.links[0].id)
                          }}
                          onMouseEnter={() => previewGroup(i)}
                          className="w-full flex items-center gap-2.5 bg-transparent border-none cursor-pointer text-left px-3 py-2.5"
                          style={{
                            backgroundColor: isOpen ? 'rgba(201,168,76,0.1)' : 'transparent',
                            borderRadius: 8,
                          }}
                        >
                          <span
                            className="rounded-full flex-shrink-0"
                            style={{
                              width: isActiveGroup ? 9 : 6,
                              height: isActiveGroup ? 9 : 6,
                              backgroundColor: isActiveGroup ? '#C9A84C' : 'rgba(156,163,175,0.7)',
                            }}
                          />
                          <span
                            className="text-[11px] uppercase tracking-widest font-semibold"
                            style={{
                              color: isOpen || isActiveGroup ? '#C9A84C' : 'rgba(255,255,255,0.55)',
                            }}
                          >
                            {group.label}
                          </span>
                        </button>

                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
                              className="overflow-hidden"
                            >
                              <div className="pb-1.5 pt-0.5">
                                {group.links.map((link) => {
                                  const isActive = link.id === activeId
                                  return (
                                    <button
                                      key={link.id}
                                      type="button"
                                      onClick={() => scrollToSection(link.id)}
                                      className="w-full flex items-center gap-3 bg-transparent border-none cursor-pointer text-left pl-7 pr-3 py-2.5 transition-colors duration-150"
                                      style={{
                                        backgroundColor: isActive
                                          ? 'rgba(201,168,76,0.12)'
                                          : 'transparent',
                                        borderRadius: 6,
                                      }}
                                      onMouseEnter={(e) => {
                                        if (!isActive) {
                                          e.currentTarget.style.backgroundColor =
                                            'rgba(255,255,255,0.06)'
                                        }
                                      }}
                                      onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = isActive
                                          ? 'rgba(201,168,76,0.12)'
                                          : 'transparent'
                                      }}
                                      aria-current={isActive ? 'true' : undefined}
                                    >
                                      <span
                                        className="rounded-full flex-shrink-0"
                                        style={{
                                          width: isActive ? 7 : 5,
                                          height: isActive ? 7 : 5,
                                          backgroundColor: isActive
                                            ? '#C9A84C'
                                            : 'rgba(156,163,175,0.55)',
                                        }}
                                      />
                                      <span
                                        className="text-sm font-medium"
                                        style={{
                                          color: isActive
                                            ? '#C9A84C'
                                            : 'rgba(255,255,255,0.9)',
                                          fontFamily: 'Inter, system-ui, sans-serif',
                                        }}
                                      >
                                        {link.label}
                                      </span>
                                    </button>
                                  )
                                })}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )
                  })}
                </div>
              )}
            </motion.div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
