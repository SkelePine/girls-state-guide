import { useState, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { name: 'Apply', id: 'apply' },
  { name: 'What Is It', id: 'what' },
  { name: 'The Week', id: 'week' },
  { name: 'Packing', id: 'packing' },
  { name: 'Run for Office', id: 'office' },
  { name: 'For Parents', id: 'parents' },
  { name: 'FAQ', id: 'faq' },
]

const menuVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: 'auto',
    opacity: 1,
    transition: {
      height: { duration: 0.32, ease: 'easeOut' },
      opacity: { duration: 0.2 },
      staggerChildren: 0.06,
      delayChildren: 0.08,
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

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, ease: 'easeOut' },
  },
}

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeId, setActiveId] = useState('')
  const navRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sectionIds = links.map((link) => link.id)
    const visibleRatios = new Map()

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

        for (const id of sectionIds) {
          const ratio = visibleRatios.get(id)
          if (ratio !== undefined && ratio >= bestRatio) {
            bestRatio = ratio
            nextActive = id
          }
        }

        if (nextActive) {
          setActiveId(nextActive)
        }
      },
      {
        rootMargin: '-20% 0px -55% 0px',
        threshold: [0, 0.1, 0.25, 0.5, 0.75],
      }
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isOpen) return

    const handlePointerDown = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    return () => document.removeEventListener('pointerdown', handlePointerDown)
  }, [isOpen])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const top = element.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  const linkStyle = (id) => ({
    color: activeId === id ? '#C9A84C' : 'white',
    borderBottom: activeId === id ? '2px solid #C9A84C' : '2px solid transparent',
    paddingBottom: '2px',
  })

  return (
    <>
      <nav
        ref={navRef}
        className="sticky top-0 z-50 w-full transition-all duration-300"
        style={{
          backgroundColor: '#1B2A4A',
          boxShadow: scrolled || isOpen ? '0 2px 20px rgba(0,0,0,0.3)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-xl font-bold tracking-wide bg-transparent border-none cursor-pointer"
            style={{ color: '#C9A84C', fontFamily: '"Playfair Display", serif' }}
          >
            CA Girls State Guide
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className="text-sm hover:opacity-75 transition-all duration-200 bg-transparent border-none cursor-pointer"
                style={linkStyle(link.id)}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            className="md:hidden text-white bg-transparent border-none cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="mobile-menu"
              className="md:hidden overflow-hidden px-6"
              style={{ backgroundColor: '#1B2A4A' }}
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="flex flex-col gap-4 pb-6 pt-1">
                {links.map((link) => (
                  <motion.button
                    key={link.name}
                    type="button"
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm hover:opacity-75 text-left bg-transparent border-none cursor-pointer py-1 transition-all duration-200 self-start"
                    style={linkStyle(link.id)}
                    variants={itemVariants}
                  >
                    {link.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Mobile overlay */}
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
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
    </>
  )
}
