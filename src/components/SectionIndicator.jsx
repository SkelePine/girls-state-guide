import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const sections = [
  { id: 'apply', label: 'Apply' },
  { id: 'what', label: 'What Is It' },
  { id: 'structure', label: 'How It Works' },
  { id: 'office', label: 'Positions' },
  { id: 'week', label: 'The Week' },
  { id: 'dorms', label: 'Dorm Life' },
  { id: 'packing', label: 'Packing' },
  { id: 'runforoffice', label: 'Run for Office' },
  { id: 'filing', label: 'Filing' },
  { id: 'bill', label: 'Your Bill' },
  { id: 'social', label: 'Social' },
  { id: 'traditions', label: 'Traditions' },
  { id: 'girlsnation', label: 'Girls Nation' },
  { id: 'after', label: 'After' },
  { id: 'parents', label: 'Parents' },
  { id: 'delegates', label: 'Delegates' },
  { id: 'faq', label: 'FAQ' },
]

export default function SectionIndicator() {
  const [activeId, setActiveId] = useState('')
  const [hoveredId, setHoveredId] = useState(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.querySelector('.hero-gradient')
      if (!hero) {
        setVisible(window.scrollY > 400)
        return
      }
      // Show once the hero has mostly scrolled off-screen
      setVisible(hero.getBoundingClientRect().bottom < 120)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const ids = sections.map((s) => s.id)
    const ratios = new Map()

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
        for (const id of ids) {
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

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (!element) return
    const top = element.getBoundingClientRect().top + window.scrollY - 80
    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          key="section-indicator"
          aria-label="Section progress"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-end gap-3"
        >
          {sections.map((section) => {
            const isActive = activeId === section.id
            const showLabel = isActive || hoveredId === section.id

            return (
              <button
                key={section.id}
                type="button"
                onClick={() => scrollToSection(section.id)}
                onMouseEnter={() => setHoveredId(section.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="relative flex items-center justify-end bg-transparent border-none cursor-pointer p-0"
                aria-label={section.label}
                aria-current={isActive ? 'true' : undefined}
              >
                <AnimatePresence>
                  {showLabel && (
                    <motion.span
                      key={`${section.id}-label`}
                      initial={{ opacity: 0, x: 6 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 4 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                      className="absolute right-5 whitespace-nowrap text-xs font-medium px-2 py-1 rounded pointer-events-none"
                      style={{
                        color: isActive ? '#1B2A4A' : '#1B2A4A',
                        backgroundColor: 'rgba(255,255,255,0.92)',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                      }}
                    >
                      {section.label}
                    </motion.span>
                  )}
                </AnimatePresence>

                <motion.span
                  className="block rounded-full"
                  animate={{
                    width: isActive ? 12 : 8,
                    height: isActive ? 12 : 8,
                    backgroundColor: isActive ? '#C9A84C' : '#9CA3AF',
                  }}
                  transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                  style={{
                    boxShadow: isActive ? '0 0 0 3px rgba(201,168,76,0.25)' : 'none',
                  }}
                />
              </button>
            )
          })}
        </motion.nav>
      )}
    </AnimatePresence>
  )
}
