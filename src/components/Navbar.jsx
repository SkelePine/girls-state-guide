import { useState, useEffect, useRef } from 'react'
import { AnimatePresence, motion, useScroll } from 'framer-motion'
import { Menu, X, ChevronDown, Search } from 'lucide-react'
import SiteSearch from './SiteSearch'
import { jumpTo } from '../hooks/useHashTab'

const navGroups = [
  {
    label: 'Getting In',
    links: [
      { name: 'How to Apply', id: 'apply' },
      { name: 'What Is It', id: 'what' },
    ],
  },
  {
    label: 'The Structure',
    links: [
      { name: 'How It Works', id: 'structure' },
      { name: 'Positions', id: 'office' },
      { name: 'The Week', id: 'week' },
    ],
  },
  {
    label: 'Prepare',
    links: [
      { name: 'Prepare to Go', id: 'prepare' },
      { name: 'Run for Office', id: 'runforoffice' },
      { name: 'Filing and Currency', id: 'filing' },
      { name: 'Write Your Bill', id: 'bill' },
      { name: 'Bar Exam', id: 'barexam' },
    ],
  },
  {
    label: 'The Experience',
    links: [
      { name: 'The Experience', id: 'experience' },
      { name: 'From the Delegates', id: 'delegates' },
    ],
  },
  {
    label: 'What Is Next',
    links: [
      { name: 'Girls Nation and After', id: 'next' },
    ],
  },
  {
    label: 'Parents',
    links: [
      { name: 'Parent Guide', id: 'parents' },
    ],
  },
  {
    label: 'More',
    links: [
      { name: 'FAQ', id: 'faq' },
      { name: 'About', id: 'about' },
    ],
  },
]

const allNavIds = [...new Set(navGroups.flatMap((g) => g.links.map((l) => l.id)))]

/** Match App.jsx section order for reliable scroll highlighting */
const NAV_SECTION_ORDER = [
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

function getNavActiveFromScroll() {
  const marker = window.innerHeight * 0.28
  let current = ''
  for (const id of NAV_SECTION_ORDER) {
    if (!allNavIds.includes(id)) continue
    const el = document.getElementById(id)
    if (!el) continue
    if (el.getBoundingClientRect().top <= marker) {
      current = id
    }
  }
  return current
}

const menuVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: 'auto',
    opacity: 1,
    transition: {
      height: { duration: 0.32, ease: 'easeOut' },
      opacity: { duration: 0.2 },
    },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: {
      height: { duration: 0.25, ease: 'easeIn' },
      opacity: { duration: 0.15 },
    },
  },
}

const dropdownVariants = {
  hidden: { opacity: 0, y: -8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    y: -6,
    transition: { duration: 0.15, ease: 'easeIn' },
  },
}

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [hoveredGroup, setHoveredGroup] = useState(null)
  const [mobileExpanded, setMobileExpanded] = useState(null)
  const [scrolled, setScrolled] = useState(false)
  const [activeId, setActiveId] = useState('')
  const [searchOpen, setSearchOpen] = useState(false)
  const navRef = useRef(null)
  const hoverTimeout = useRef(null)
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    // Redirect old parent deep-links
    const h = window.location.hash || ''
    if (h.includes('next/parents') || h.includes('tab=parents')) {
      window.history.replaceState(null, '', '#parents')
    }
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setSearchOpen(true)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      const next = getNavActiveFromScroll()
      if (next) setActiveId((prev) => (prev === next ? prev : next))
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  useEffect(() => {
    const visibleRatios = new Map()
    const observed = new Set()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleRatios.set(entry.target.id, entry.intersectionRatio)
          } else {
            visibleRatios.delete(entry.target.id)
          }
        })

        let nextActive = ''
        let bestRatio = -1

        for (const id of NAV_SECTION_ORDER) {
          if (!allNavIds.includes(id)) continue
          const ratio = visibleRatios.get(id)
          if (ratio !== undefined && ratio >= bestRatio) {
            bestRatio = ratio
            nextActive = id
          }
        }

        if (nextActive) setActiveId(nextActive)
      },
      {
        rootMargin: '-20% 0px -55% 0px',
        threshold: [0, 0.1, 0.25, 0.5, 0.75],
      }
    )

    const tryObserve = () => {
      allNavIds.forEach((id) => {
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
    if (!isOpen) return

    const handlePointerDown = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false)
        setMobileExpanded(null)
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    return () => document.removeEventListener('pointerdown', handlePointerDown)
  }, [isOpen])

  useEffect(() => () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current)
  }, [])

  const scrollToSection = (id, tab) => {
    jumpTo(id, tab)
    setIsOpen(false)
    setHoveredGroup(null)
    setMobileExpanded(null)
  }

  const openGroup = (label) => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current)
    setHoveredGroup(label)
  }

  const closeGroup = () => {
    hoverTimeout.current = setTimeout(() => setHoveredGroup(null), 120)
  }

  const isGroupActive = (group) => {
    return group.links.some((l) => l.id === activeId)
  }

  return (
    <>
      <nav
        ref={navRef}
        className="sticky top-0 z-50 w-full transition-all duration-300 relative"
        style={{
          backgroundColor: '#1B2A4A',
          boxShadow: scrolled || isOpen ? '0 2px 20px rgba(0,0,0,0.3)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-lg sm:text-xl font-bold tracking-wide bg-transparent border-none cursor-pointer"
            style={{ color: '#C9A84C', fontFamily: '"Playfair Display", serif', minHeight: 44 }}
          >
            CA Girls State Guide
          </button>

          {/* Desktop grouped dropdowns */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Search the guide"
              className="mr-1 flex items-center justify-center bg-transparent border-none cursor-pointer rounded-full"
              style={{ width: 40, height: 40, color: 'white', minHeight: 44 }}
              title="Search (Ctrl+K)"
            >
              <Search size={18} />
            </button>
            {navGroups.map((group) => {
              const active = isGroupActive(group)
              const open = hoveredGroup === group.label
              const isDirect = group.label === 'Parents' && group.links.length === 1

              if (isDirect) {
                const link = group.links[0]
                return (
                  <button
                    key={group.label}
                    type="button"
                    onClick={() => scrollToSection(link.id, link.tab)}
                    className="text-sm px-2 lg:px-3 bg-transparent border-none cursor-pointer transition-colors duration-200"
                    style={{
                      color: active ? '#C9A84C' : 'white',
                      borderBottom: active ? '2px solid #C9A84C' : '2px solid transparent',
                      minHeight: 44,
                      paddingBottom: '2px',
                    }}
                  >
                    {group.label}
                  </button>
                )
              }

              return (
                <div
                  key={group.label}
                  className="relative"
                  onMouseEnter={() => openGroup(group.label)}
                  onMouseLeave={closeGroup}
                >
                  <button
                    type="button"
                    className="text-sm px-2 lg:px-3 bg-transparent border-none cursor-pointer flex items-center gap-1 transition-colors duration-200"
                    style={{
                      color: active || open ? '#C9A84C' : 'white',
                      borderBottom: active ? '2px solid #C9A84C' : '2px solid transparent',
                      minHeight: 44,
                      paddingBottom: '2px',
                    }}
                    aria-expanded={open}
                  >
                    {group.label}
                    <ChevronDown
                      size={13}
                      className="transition-transform duration-200"
                      style={{ transform: open ? 'rotate(180deg)' : 'none' }}
                    />
                  </button>

                  <AnimatePresence>
                    {open && (
                      <motion.div
                        key={`${group.label}-dropdown`}
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="absolute left-0 top-full mt-3 py-2 rounded-xl min-w-[210px] z-50"
                        style={{
                          backgroundColor: '#1B2A4A',
                          borderTop: '2px solid #C9A84C',
                          boxShadow: '0 10px 28px rgba(0,0,0,0.35)',
                        }}
                        onMouseEnter={() => openGroup(group.label)}
                        onMouseLeave={closeGroup}
                      >
                        {group.links.map((link) => {
                          const linkActive = activeId === link.id
                          return (
                            <button
                              key={`${group.label}-${link.name}`}
                              type="button"
                              onClick={() => scrollToSection(link.id, link.tab)}
                              className="w-full text-left px-4 text-sm bg-transparent border-none cursor-pointer transition-colors duration-200"
                              style={{ color: linkActive ? '#C9A84C' : 'white', minHeight: 44 }}
                              onMouseEnter={(e) => { e.currentTarget.style.color = '#C9A84C' }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.color = linkActive ? '#C9A84C' : 'white'
                              }}
                            >
                              {link.name}
                            </button>
                          )
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>

          <div className="flex items-center gap-1 md:hidden">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Search the guide"
              className="text-white bg-transparent border-none cursor-pointer flex items-center justify-center"
              style={{ minWidth: 44, minHeight: 44 }}
            >
              <Search size={20} />
            </button>
            <button
              type="button"
              className="text-white bg-transparent border-none cursor-pointer flex items-center justify-center"
              style={{ minWidth: 44, minHeight: 44 }}
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Reading progress */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{ height: 3, backgroundColor: 'rgba(255,255,255,0.12)' }}
          aria-hidden="true"
        >
          <motion.div
            className="h-full origin-left"
            style={{
              scaleX: scrollYProgress,
              backgroundColor: '#C9A84C',
            }}
          />
        </div>

        {/* Mobile accordion menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="mobile-menu"
              className="md:hidden overflow-hidden px-4 sm:px-6"
              style={{ backgroundColor: '#1B2A4A' }}
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div
                className="flex flex-col gap-1 pb-6 pt-1 overflow-y-auto overscroll-y-contain"
                style={{ maxHeight: 'min(70vh, calc(100dvh - 4.5rem))' }}
              >
                {navGroups.map((group) => {
                  const expanded = mobileExpanded === group.label
                  const active = isGroupActive(group)
                  const isDirect = group.label === 'Parents' && group.links.length === 1

                  if (isDirect) {
                    const link = group.links[0]
                    return (
                      <div key={group.label} className="border-b border-white/10 last:border-b-0">
                        <button
                          type="button"
                          onClick={() => scrollToSection(link.id, link.tab)}
                          className="w-full flex items-center py-3 text-sm bg-transparent border-none cursor-pointer text-left"
                          style={{ color: active ? '#C9A84C' : 'white', minHeight: 44 }}
                        >
                          {group.label}
                        </button>
                      </div>
                    )
                  }

                  return (
                    <div key={group.label} className="border-b border-white/10 last:border-b-0">
                      <button
                        type="button"
                        onClick={() => setMobileExpanded(expanded ? null : group.label)}
                        className="w-full flex items-center justify-between py-3 text-sm bg-transparent border-none cursor-pointer text-left"
                        style={{ color: active || expanded ? '#C9A84C' : 'white', minHeight: 44 }}
                        aria-expanded={expanded}
                      >
                        {group.label}
                        <ChevronDown
                          size={16}
                          className="transition-transform duration-200"
                          style={{ transform: expanded ? 'rotate(180deg)' : 'none' }}
                        />
                      </button>

                      <AnimatePresence initial={false}>
                        {expanded && (
                          <motion.div
                            key={`${group.label}-mobile`}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: 'easeOut' }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col gap-1 pb-3 pl-2">
                              {group.links.map((link) => {
                                const linkActive = activeId === link.id
                                return (
                                  <button
                                    key={`${group.label}-m-${link.name}`}
                                    type="button"
                                    onClick={() => scrollToSection(link.id, link.tab)}
                                    className="text-sm text-left py-2.5 bg-transparent border-none cursor-pointer transition-colors duration-200"
                                    style={{
                                      color: linkActive ? '#C9A84C' : 'rgba(255,255,255,0.75)',
                                      minHeight: 44,
                                    }}
                                  >
                                    {link.name}
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
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-overlay"
            className="fixed inset-0 z-40 md:hidden"
            style={{ backgroundColor: 'rgba(27, 42, 74, 0.55)' }}
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => {
              setIsOpen(false)
              setMobileExpanded(null)
            }}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      <SiteSearch open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  )
}
