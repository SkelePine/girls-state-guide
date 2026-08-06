import { useState, useEffect } from 'react'
import { useHashTab, jumpTo } from '../hooks/useHashTab'
import FadeInSection, { StaggerContainer, StaggerItem } from './FadeInSection'
import SectionTabs from './SectionTabs'

const tabs = [
  { id: 'apply', label: 'How to Apply' },
  { id: 'before', label: 'Before You Go' },
]

const steps = [
  {
    number: '01',
    title: 'Check Your Eligibility',
    content: 'Currently enrolled in 11th grade at a California high school. Upper half of your class academically. Demonstrated leadership, character, and interest in government. No prior government experience required.',
  },
  {
    number: '02',
    title: 'Find Your ALA Unit',
    content: 'Each high school is sponsored by a local American Legion Auxiliary (ALA) Unit. Ask your school counselor if your school is already sponsored, or search the unit finder at cagirlsstate.org.',
  },
  {
    number: '03',
    title: 'Apply Through Your School',
    content: 'Each unit runs its own selection process — typically a written application, interview, and transcript review. One Delegate + 1st Alternate + 2nd Alternate are selected per school.',
  },
  {
    number: '04',
    title: 'If You\'re an Alternate',
    content: 'Don\'t count yourself out. Every year, alternates attend. If you\'re selected as a 1st or 2nd Alternate, stay ready. Keep your bags packed.',
  },
  {
    number: '05',
    title: 'Understand the Costs',
    content: 'The total program cost is approximately $500–$575 per delegate — almost entirely covered by your sponsoring ALA unit. You may have a small transportation cost.',
  },
  {
    number: '06',
    title: 'Apply for the Samsung Scholarship',
    content: 'Open to delegates who are direct descendants of wartime U.S. military veterans. Must be submitted before or on Day 1 of your session — no extensions. Awards range from $1,250 to $10,000. Start early.',
  },
]

const links = [
  { label: 'Official Girls State Site', url: 'https://www.cagirlsstate.org' },
  { label: 'Find Your ALA Unit', url: 'https://www.cagirlsstate.org/delegates-alternates' },
  { label: 'Samsung Scholarship', url: 'https://www.legion.org/get-involved/scholarships/samsung-american-legion-scholarship' },
  { label: 'GSAF Alumnae Foundation', url: 'https://www.cagsaf.org' },
  { label: 'ALA Department of California', url: 'https://calegionaux.org' },
]

const STORAGE_KEY = 'girls-state-before-checked'

const beforeCategories = [
  {
    id: 'before',
    label: 'Before the Session',
    items: [
      'Submit your bill by the deadline',
      'Apply for Samsung Scholarship before Day 1',
      'Research positions you want to run for',
      'Practice creating a speech out loud',
      'Confirm your bus pickup time and location with your ALA unit',
      'Confirm if bedding is provided',
      'Notify organizers of any dietary restrictions or medical needs',
      'Download the Girls State bank app at mykidsbank.org (Banking Number 3081)',
    ],
  },
  {
    id: 'departure',
    label: 'Day of Departure',
    items: [
      'Charge your portable battery pack',
      'Pack blue tape for campaign posters',
      'Bring cash $20–40 for incidentals',
      'Pack your submitted bill printed out',
      'Bring index cards for speech notes',
    ],
  },
]

function loadChecked() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) return JSON.parse(stored)
  } catch {
    // ignore
  }
  return {}
}

export default function HowToApply() {
  const [activeTab, setActiveTab] = useHashTab('apply', 'apply', ['apply', 'before'])
  const [checked, setChecked] = useState(loadChecked)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(checked))
  }, [checked])

  const toggleItem = (categoryId, index) => {
    const key = `${categoryId}-${index}`
    setChecked((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const totalItems = beforeCategories.reduce((sum, cat) => sum + cat.items.length, 0)
  const checkedCount = Object.values(checked).filter(Boolean).length
  const progress = Math.round((checkedCount / totalItems) * 100)

  return (
    <FadeInSection>
      <section id="apply" style={{ backgroundColor: '#FAF7F2' }} className="py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-widest mb-3" style={{ color: '#C9A84C' }}>
              Step One
            </p>
            <h2
              style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            >
              How to Apply
            </h2>
            <p style={{ color: '#2D2D2D', opacity: 0.65 }} className="text-sm leading-relaxed max-w-xl mx-auto">
              Get selected — then get ready. Everything from eligibility to your departure-day checklist.
            </p>
            <button
              type="button"
              onClick={() => jumpTo('parents')}
              className="mt-5 text-sm font-medium bg-transparent border-none cursor-pointer underline-offset-4 hover:underline"
              style={{ color: '#1B2A4A', minHeight: 44 }}
            >
              Parent or family member? Open the Parent Guide →
            </button>
          </div>

          <div className="mb-2">
            <SectionTabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} variant="light" className="mb-0" />
          </div>

          {activeTab === 'apply' && (
            <>
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 mt-8">
                {steps.map((step) => (
                  <StaggerItem
                    key={step.number}
                    className="card-hover flex gap-6 p-6 rounded-xl"
                    style={{ backgroundColor: 'white', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
                  >
                    <div className="flex-shrink-0">
                      <span
                        style={{ color: '#C9A84C', fontFamily: '"Playfair Display", serif' }}
                        className="text-3xl font-bold"
                      >
                        {step.number}
                      </span>
                    </div>
                    <div>
                      <h3
                        style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }}
                        className="font-semibold text-lg mb-2"
                      >
                        {step.title}
                      </h3>
                      <p style={{ color: '#2D2D2D', opacity: 0.7 }} className="text-sm leading-relaxed">
                        {step.content}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              <div style={{ backgroundColor: '#1B2A4A' }} className="card-hover rounded-2xl p-8">
                <p className="text-xs uppercase tracking-widest mb-6 text-center" style={{ color: '#C9A84C' }}>
                  Key Links
                </p>
                <StaggerContainer className="flex flex-wrap justify-center gap-4">
                  {links.map((link) => (
                    <StaggerItem key={link.label}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          backgroundColor: 'rgba(255,255,255,0.1)',
                          color: 'white',
                          border: '1px solid rgba(201,168,76,0.4)',
                        }}
                        className="px-5 py-2 rounded-full text-sm hover:opacity-80 transition-opacity inline-block"
                      >
                        {link.label} →
                      </a>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </>
          )}

          {activeTab === 'before' && (
            <div className="mt-8">
              <div
                className="rounded-2xl p-5 mb-10 text-center"
                style={{ backgroundColor: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.4)' }}
              >
                <p className="text-sm leading-relaxed" style={{ color: '#1B2A4A' }}>
                  Your bill must be submitted BEFORE the session begins — check your year&apos;s deadline with your ALA unit.
                </p>
              </div>

              <div
                className="mb-10 p-5 rounded-2xl"
                style={{ backgroundColor: '#1B2A4A' }}
              >
                <div className="flex justify-between items-center mb-3">
                  <p className="text-sm font-medium text-white">Checklist Progress</p>
                  <p className="text-sm font-bold" style={{ color: '#C9A84C' }}>
                    {checkedCount}/{totalItems} · {progress}%
                  </p>
                </div>
                <div className="w-full h-2 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.12)' }}>
                  <div
                    className="h-2 rounded-full transition-all duration-500"
                    style={{ width: `${progress}%`, backgroundColor: '#C9A84C' }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {beforeCategories.map((cat) => (
                  <div key={cat.id}>
                    <p className="text-xs uppercase tracking-widest mb-4" style={{ color: '#C9A84C' }}>
                      {cat.label}
                    </p>
                    <StaggerContainer className="space-y-2">
                      {cat.items.map((item, index) => {
                        const key = `${cat.id}-${index}`
                        const isChecked = checked[key]
                        return (
                          <StaggerItem key={key}>
                            <button
                              type="button"
                              onClick={() => toggleItem(cat.id, index)}
                              aria-pressed={isChecked}
                              className="card-hover w-full flex items-start gap-3 p-4 rounded-xl cursor-pointer border-none text-left"
                              style={{ backgroundColor: 'white', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}
                            >
                              <span
                                className="flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center mt-0.5"
                                style={{
                                  borderColor: isChecked ? '#C9A84C' : '#D1D5DB',
                                  backgroundColor: isChecked ? '#C9A84C' : 'transparent',
                                }}
                                aria-hidden="true"
                              >
                                {isChecked && <span className="text-white text-xs">✓</span>}
                              </span>
                              <span
                                className="text-sm leading-relaxed transition-all"
                                style={{
                                  color: isChecked ? '#9CA3AF' : '#2D2D2D',
                                  textDecoration: isChecked ? 'line-through' : 'none',
                                }}
                              >
                                {item}
                              </span>
                            </button>
                          </StaggerItem>
                        )
                      })}
                    </StaggerContainer>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </FadeInSection>
  )
}
