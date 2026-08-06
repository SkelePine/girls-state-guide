import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { List, X } from 'lucide-react'
import { jumpTo } from '../hooks/useHashTab'

const GROUPS = [
  {
    label: 'Getting In',
    links: [
      { label: 'About', id: 'about' },
      { label: 'Apply', id: 'apply' },
      { label: 'What Is It', id: 'what' },
      { label: 'For Parents', id: 'parents' },
    ],
  },
  {
    label: 'Structure',
    links: [
      { label: 'How It Works', id: 'structure' },
      { label: 'Positions', id: 'office' },
      { label: 'The Week', id: 'week' },
    ],
  },
  {
    label: 'Prepare',
    links: [
      { label: 'Prepare', id: 'prepare' },
      { label: 'Run for Office', id: 'runforoffice' },
      { label: 'Filing', id: 'filing' },
      { label: 'Your Bill', id: 'bill' },
      { label: 'Bar Exam', id: 'barexam' },
    ],
  },
  {
    label: 'More',
    links: [
      { label: 'Experience', id: 'experience' },
      { label: "What's Next", id: 'next' },
      { label: 'Delegates', id: 'delegates' },
      { label: 'FAQ', id: 'faq' },
    ],
  },
]

/** Compact jump menu for mobile (SectionIndicator is desktop-only) */
export default function MobileJumpMenu() {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="md:hidden fixed left-4 z-50"
      style={{ bottom: 'max(1.5rem, env(safe-area-inset-bottom, 0px))' }}
    >
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="mb-3 rounded-2xl overflow-hidden overflow-y-auto overscroll-y-contain"
            style={{
              backgroundColor: 'rgba(27,42,74,0.96)',
              border: '1px solid rgba(201,168,76,0.3)',
              boxShadow: '0 12px 32px rgba(0,0,0,0.35)',
              width: 'min(240px, calc(100vw - 5.5rem))',
              maxHeight: 'min(55vh, calc(100dvh - 7rem))',
            }}
          >
            <p className="px-3 pt-3 pb-1 text-[10px] uppercase tracking-widest" style={{ color: '#C9A84C' }}>
              Jump to
            </p>
            {GROUPS.map((group) => (
              <div key={group.label} className="pb-1">
                <p
                  className="px-3 pt-2 pb-0.5 text-[10px] uppercase tracking-widest"
                  style={{ color: 'rgba(201,168,76,0.65)' }}
                >
                  {group.label}
                </p>
                {group.links.map((link) => (
                  <button
                    key={`${link.id}-${link.label}`}
                    type="button"
                    className="w-full text-left px-3 py-2.5 text-sm text-white bg-transparent border-none cursor-pointer"
                    style={{ minHeight: 44 }}
                    onClick={() => {
                      setOpen(false)
                      jumpTo(link.id, link.tab)
                    }}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close jump menu' : 'Open jump menu'}
        aria-expanded={open}
        className="rounded-full flex items-center justify-center border-none cursor-pointer"
        style={{
          width: 48,
          height: 48,
          backgroundColor: '#1B2A4A',
          color: '#C9A84C',
          border: '1.5px solid #C9A84C',
          boxShadow: '0 4px 16px rgba(0,0,0,0.25)',
        }}
      >
        {open ? <X size={20} /> : <List size={20} />}
      </button>
    </div>
  )
}
