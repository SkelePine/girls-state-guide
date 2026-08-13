import { useState, useEffect, useMemo, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { useFocusTrap } from '../hooks/useFocusTrap'

export const glossaryTerms = [
  { term: 'Blue Star Delegate', def: 'A delegate with an immediate family member currently serving in the U.S. military.' },
  { term: 'Blue Tape', def: 'The only approved tape for hanging campaign posters in residence halls.' },
  { term: 'Butcher Paper', def: 'The only approved material for campaign signs — available at the ALA Girls State Campaign Table.' },
  { term: 'City Debrief', def: 'The nightly city meeting at 9:30 PM where delegates reflect on the day.' },
  { term: 'Fixer', def: 'A Purple Hat counselor who helps correct errors on election forms.' },
  { term: 'G$', def: 'Girls State currency — every delegate starts with G$500 in their Girls State bank account at mykidsbank.org.' },
  { term: 'G$ Filing Fee', def: 'The Girls State currency fee required to run for office, ranging from G$350 to G$500 depending on the position.' },
  { term: 'General Assembly', def: 'A full session where all delegates gather together.' },
  { term: 'Gold Star Delegate', def: 'A delegate who has lost an immediate family member in military service.' },
  { term: 'Moot Court', def: 'The Supreme Court–style hearing where Justices hear a First Amendment case argued by the Attorney General and opposing counsel.' },
  { term: 'Non-Partisan Office', def: 'An office with no party affiliation where both parties can sign nomination papers — includes Superintendent of Public Instruction and Supreme Court Justices.' },
  { term: 'Notary', def: 'A Green Hat counselor who must be present when you sign Form #5.' },
  { term: 'Partisan Office', def: 'An office where you must win your party primary first — includes Governor, Lt. Governor, Secretary of State, Attorney General, Treasurer, and Controller.' },
  { term: 'Plank', def: 'A specific policy position endorsed by a political party as part of their platform.' },
  { term: 'Pro Tem', def: 'President Pro Tempore — elected by Senators at the first meeting to preside over the Senate until the Lt. Governor takes office.' },
  { term: 'Qualified Candidate', def: 'A candidate who has met all requirements to appear on the official ballot, including paying filing fees, collecting required signatures, and filing correct paperwork.' },
  { term: 'Verification Deputy', def: 'A delegate who collects nomination signatures on behalf of a candidate and affirms their validity.' },
  { term: 'Whistle Stop Tour', def: 'When candidates for Governor, Lt. Governor, Attorney General, and Superintendent of Public Instruction visit all four counties to answer questions before the General Election.' },
  { term: 'Write-in Candidate', def: 'A candidate who did not qualify for the official ballot but has filed intent to run and can be elected by majority vote.' },
].sort((a, b) => a.term.localeCompare(b.term))

export default function GlossaryModal({ open, onClose }) {
  const [query, setQuery] = useState('')
  const dialogRef = useRef(null)
  useFocusTrap(open, dialogRef)

  useEffect(() => {
    if (!open) {
      setQuery('')
      return
    }
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return glossaryTerms
    return glossaryTerms.filter(
      (item) => item.term.toLowerCase().includes(q) || item.def.toLowerCase().includes(q)
    )
  }, [query])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <button
            type="button"
            aria-label="Close glossary overlay"
            className="absolute inset-0 border-none cursor-pointer"
            style={{ backgroundColor: 'rgba(0,0,0,0.55)' }}
            onClick={onClose}
          />

          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="glossary-title"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative w-full max-w-3xl max-h-[85vh] flex flex-col rounded-2xl overflow-hidden"
            style={{
              backgroundColor: '#1B2A4A',
              boxShadow: '0 24px 64px rgba(0,0,0,0.45)',
              border: '1px solid rgba(201,168,76,0.35)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 p-6 pb-4">
              <div>
                <p className="text-xs uppercase tracking-widest mb-2" style={{ color: '#C9A84C' }}>
                  Know the Language
                </p>
                <h2
                  id="glossary-title"
                  style={{ color: 'white', fontFamily: '"Playfair Display", serif' }}
                  className="text-2xl md:text-3xl font-bold"
                >
                  Glossary
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close glossary"
                className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center border-none cursor-pointer transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#C9A84C', color: '#1B2A4A' }}
              >
                <X size={20} />
              </button>
            </div>

            <div className="px-6 pb-4">
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search terms…"
                aria-label="Search glossary"
                className="w-full px-4 py-3 rounded-xl text-sm border-none outline-none"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.08)',
                  color: 'white',
                  border: '1px solid rgba(201,168,76,0.35)',
                }}
              />
            </div>

            <div className="flex-1 overflow-y-auto px-6 pb-6 space-y-3" style={{ scrollbarWidth: 'thin' }}>
              {filtered.length === 0 ? (
                <p className="text-sm text-muted-on-navy text-center py-8">No terms match your search.</p>
              ) : (
                filtered.map((item) => (
                  <div
                    key={item.term}
                    className="rounded-xl p-4"
                    style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}
                  >
                    <h3
                      style={{ color: '#C9A84C', fontFamily: '"Playfair Display", serif' }}
                      className="text-lg font-bold mb-1"
                    >
                      {item.term}
                    </h3>
                    <p className="text-sm leading-relaxed text-white opacity-75">{item.def}</p>
                  </div>
                ))
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
