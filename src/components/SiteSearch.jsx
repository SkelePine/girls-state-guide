import { useState, useEffect, useMemo, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Search, X } from 'lucide-react'
import { jumpTo } from '../hooks/useHashTab'
import { useFocusTrap } from '../hooks/useFocusTrap'

const SEARCH_INDEX = [
  { title: 'How to Apply', section: 'apply', tab: 'apply', keywords: 'eligibility ala unit samsung scholarship alternate' },
  { title: 'Before You Go checklist', section: 'apply', tab: 'before', keywords: 'bill deadline packing bank mykidsbank departure' },
  { title: 'What Is Girls State', section: 'what', tab: 'is', keywords: 'ala mission campus southern california' },
  { title: 'What It Is NOT', section: 'what', tab: 'not', keywords: 'myth camp debate partisan' },
  { title: 'The 51st State', section: 'what', tab: '51st', keywords: 'cities counties parties simulation' },
  { title: 'How It Works', section: 'structure', keywords: 'city county state nationalist federalist' },
  { title: 'Positions & Offices', section: 'office', keywords: 'governor senator mayor filing' },
  { title: 'The Week', section: 'week', keywords: 'timeline schedule day' },
  { title: 'Packing List', section: 'prepare', tab: 'packing', keywords: 'clothes toiletries dorm school index cards sharpies' },
  { title: 'Dorm Life', section: 'prepare', tab: 'dorms', keywords: 'roommate bathroom lights out heat' },
  { title: 'Speech Times', section: 'prepare', tab: 'speeches', keywords: 'minutes audience whistle stop' },
  { title: 'Run for Office', section: 'runforoffice', keywords: 'campaign playbook tips' },
  { title: 'Filing & Currency', section: 'filing', keywords: 'forms bank g$ write-in signatures' },
  { title: 'Write Your Bill', section: 'bill', keywords: 'legislation google form deadline' },
  { title: 'Bar Exam', section: 'barexam', keywords: 'mock bar law judicial attorney optional challenge' },
  { title: 'Making Connections', section: 'experience', tab: 'connections', keywords: 'social introvert friends' },
  { title: 'Traditions', section: 'experience', tab: 'traditions', keywords: 'flag promise chant ceremony' },
  { title: 'After Girls State', section: 'next', tab: 'after', keywords: 'college scholarship alumnae' },
  { title: 'Girls Nation', section: 'next', tab: 'girlsnation', keywords: 'dc selection washington' },
  { title: 'For Parents', section: 'parents', keywords: 'family medical food phone packing' },
  { title: 'From the Delegates', section: 'delegates', tab: 'delegates', keywords: 'keynote inaaya stories' },
  { title: '2026 Session Highlights', section: 'delegates', tab: 'session', keywords: 'officers bills court' },
  { title: 'FAQ', section: 'faq', keywords: 'nervous homesick phone cost alternate' },
  { title: 'About This Guide', section: 'about', keywords: 'unofficial inaaya saif' },
]

export default function SiteSearch({ open, onClose }) {
  const [query, setQuery] = useState('')
  const inputRef = useRef(null)
  const dialogRef = useRef(null)
  useFocusTrap(open, dialogRef)

  useEffect(() => {
    if (!open) {
      setQuery('')
      return
    }
    const t = setTimeout(() => inputRef.current?.focus(), 50)
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      clearTimeout(t)
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return SEARCH_INDEX.slice(0, 8)
    return SEARCH_INDEX.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.keywords.toLowerCase().includes(q)
    ).slice(0, 12)
  }, [query])

  const go = (item) => {
    onClose()
    jumpTo(item.section, item.tab)
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[95] flex items-start justify-center pt-[12vh] px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            className="absolute inset-0 border-none cursor-pointer"
            style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
            aria-label="Close search"
            onClick={onClose}
          />
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label="Search the guide"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="relative w-full max-w-lg rounded-2xl overflow-hidden"
            style={{
              backgroundColor: '#1B2A4A',
              border: '1px solid rgba(201,168,76,0.35)',
              boxShadow: '0 20px 50px rgba(0,0,0,0.4)',
            }}
          >
            <div className="flex items-center gap-3 p-4 border-b" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
              <Search size={18} style={{ color: '#C9A84C' }} />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search the guide…"
                className="flex-1 bg-transparent border-none outline-none text-sm text-white"
                aria-label="Search"
              />
              <button
                type="button"
                onClick={onClose}
                className="border-none cursor-pointer rounded-full flex items-center justify-center"
                style={{ width: 36, height: 36, backgroundColor: '#C9A84C', color: '#1B2A4A' }}
                aria-label="Close"
              >
                <X size={16} />
              </button>
            </div>
            <ul className="max-h-72 overflow-y-auto py-2">
              {results.length === 0 ? (
                <li className="px-4 py-6 text-sm text-center text-muted-on-navy">No matches</li>
              ) : (
                results.map((item) => (
                  <li key={`${item.section}-${item.tab || 'main'}-${item.title}`}>
                    <button
                      type="button"
                      onClick={() => go(item)}
                      className="w-full text-left px-4 py-3 text-sm bg-transparent border-none cursor-pointer text-white hover:bg-white/5 transition-colors"
                      style={{ minHeight: 44 }}
                    >
                      {item.title}
                    </button>
                  </li>
                ))
              )}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
