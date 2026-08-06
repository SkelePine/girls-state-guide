import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed z-50 flex items-center justify-center rounded-full cursor-pointer"
          style={{
            right: 'max(1.5rem, env(safe-area-inset-right, 0px))',
            bottom: 'max(1.5rem, env(safe-area-inset-bottom, 0px))',
            width: 48,
            height: 48,
            minWidth: 44,
            minHeight: 44,
            backgroundColor: '#1B2A4A',
            color: '#C9A84C',
            border: '1.5px solid #C9A84C',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.25)',
            transition: 'background-color 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#243556'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#1B2A4A'
          }}
        >
          <ArrowUp size={20} strokeWidth={2.5} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
