import { useState, useEffect, useRef } from 'react'
import { useHashTab } from '../hooks/useHashTab'
import FadeInSection, { StaggerContainer, StaggerItem } from './FadeInSection'
import IconBadge from './IconBadge'
import SectionTabs from './SectionTabs'

const STORAGE_KEY = 'girls-state-packing-checked'

function loadChecked() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) return JSON.parse(stored)
  } catch {
    // ignore invalid localStorage data
  }
  return {}
}

const tabs = [
  { id: 'packing', label: 'Packing List' },
  { id: 'dorms', label: 'Dorm Life' },
  { id: 'speeches', label: 'Speech Times' },
]

const packingCategories = [
  {
    id: 'clothing',
    label: '👗 Clothing',
    items: [
      '5–6 business casual outfits (dress pants, blouses, midi skirts, blazers)',
      'Comfortable flats or low block heels — you walk everywhere',
      'One nicer outfit for Closing Ceremony',
      'Casual evening clothes (leggings, sweats, t-shirts)',
      'Pajamas',
      'Light cardigan or blazer — lecture halls are cold',
      'Comfortable sneakers for evenings',
      'Undergarments + socks for each day + 1',
      'Breathable fabrics — California is hot in June',
    ],
  },
  {
    id: 'toiletries',
    label: '🧴 Toiletries',
    items: [
      'Shower caddy',
      'Shower shoes / flip flops',
      'Quick-dry towel (2 recommended)',
      'Bathrobe or cover-up for walking to bathroom',
      'All skincare (morning + night routine)',
      'Hair tools (brush, ties, clips, dry shampoo)',
      'Hot tools (straightener, curling iron, hair dryer)',
      'Deodorant — stress sweating is real, bring extra',
      'Feminine hygiene products',
      'Toothbrush, toothpaste, floss',
      'Mini first aid kit (Advil, Pepto, Band-Aids)',
      'Any prescription medications',
      'Sunscreen — California sun is intense',
    ],
  },
  {
    id: 'dorm',
    label: '🛏️ Dorm Essentials',
    items: [
      'Twin XL sheets + pillowcase — confirm if provided',
      'Pillow',
      'Blanket / throw',
      'Power strip / surge protector',
      'Extension cord',
      'Portable fan — dorms may be warm',
      'Earplugs / sleep mask',
      'Reusable water bottle — stay hydrated',
      'Small laundry bag',
    ],
  },
  {
    id: 'school',
    label: '📚 School Supplies',
    items: [
      'Notebook + pens',
      'Highlighters',
      'Index cards',
      'Sharpies',
      'Laptop or tablet — useful for bill writing',
      'Printed copy of your submitted bill',
    ],
  },
  {
    id: 'tech',
    label: '📱 Tech & Misc',
    items: [
      'Phone + charger',
      'Portable battery pack — essential for 6AM–10:30PM days',
      'Headphones',
      'Small backpack or tote for daily sessions',
      'Cash $20–40 for incidentals',
      'Snacks — granola bars, trail mix, crackers',
      'Gum / mints',
    ],
  },
]

const leaveAtHome = [
  'Candles or open flames',
  'Hot plates or cooking appliances',
  'Excessive valuables',
  'Anything irreplaceable',
]

const dormProvided = [
  { icon: '🛏️', item: 'Extra-long twin bed (80") with mattress' },
  { icon: '🪑', item: 'Desk and chair' },
  { icon: '👗', item: 'Dresser and wardrobe' },
  { icon: '📶', item: 'Wi-Fi access' },
  { icon: '🧺', item: 'Laundry facilities in building' },
  { icon: '💻', item: '24/7 computer labs' },
]

const dormTips = [
  { title: 'Your Roommate', desc: 'You\'ll be assigned a roommate you likely don\'t know. Introduce yourself immediately. Your roommate might become one of your closest Girls State friends.' },
  { title: 'The Bathrooms', desc: 'Communal bathrooms shared by your floor. Bring shower shoes and a robe. Go early in the morning for shorter waits. It\'s not as bad as it sounds.' },
  { title: 'Lights Out', desc: '10:30 PM lights out is enforced. Take it seriously. Days start at 6:00 AM — you need the sleep.' },
  { title: 'Your Phone', desc: 'Phones are allowed in the dorms but restricted during sessions. Don\'t be alarmed if you can\'t reach your daughter immediately.' },
  { title: 'Posters', desc: 'Campaign posters may ONLY be hung inside residence halls using blue tape. No other tape. No hanging outside.' },
  { title: 'The Heat', desc: 'California is hot in June. Pack breathable fabrics and sunscreen. Lecture halls are air-conditioned — bring a layer.' },
]

const speechRows = [
  { office: 'City Council', time: '30 seconds', audience: 'Full city' },
  { office: 'City Clerk', time: '30 seconds', audience: 'Full city' },
  { office: 'City Treasurer', time: '30 seconds', audience: 'Full city' },
  { office: 'Senator (primary)', time: '30 seconds', audience: 'Own party in city' },
  { office: 'Senator (general)', time: '1 minute', audience: 'Full city' },
  { office: 'Assembly Member (primary)', time: '30 seconds', audience: 'Own party in city' },
  { office: 'Assembly Member (general)', time: '1 minute', audience: 'Full city' },
  { office: 'Party Leader (city)', time: '1 minute', audience: 'Own party at county meeting' },
  { office: 'Party Leader (county)', time: '2 minutes', audience: 'Full party at party meeting' },
  { office: 'All county offices', time: '30 seconds', audience: 'Full county' },
  { office: 'Governor (primary)', time: '2 minutes', audience: 'Own party' },
  { office: 'Lt. Governor (primary)', time: '1 minute', audience: 'Own party' },
  { office: 'Attorney General (primary)', time: '30 seconds', audience: 'Own party' },
  { office: 'Secretary of State (primary)', time: '30 seconds', audience: 'Own party' },
  { office: 'Treasurer (primary)', time: '30 seconds', audience: 'Own party' },
  { office: 'Controller (primary)', time: '30 seconds', audience: 'Own party' },
  { office: 'Superintendent of Public Instruction (primary)', time: '30 seconds', audience: 'Both parties at General Session' },
  { office: 'Supreme Court Justice (primary)', time: '30 seconds', audience: 'Both parties at General Session' },
]

export default function PrepareToGo() {
  const [activeTab, setActiveTab] = useHashTab('prepare', 'packing', ['packing', 'dorms', 'speeches'])
  const [checked, setChecked] = useState(loadChecked)
  const [activeCategory, setActiveCategory] = useState('clothing')
  const categoryBtnRefs = useRef({})

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(checked))
  }, [checked])

  const selectCategory = (id) => {
    setActiveCategory(id)
    requestAnimationFrame(() => {
      categoryBtnRefs.current[id]?.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      })
    })
  }

  const toggleItem = (categoryId, index) => {
    const key = `${categoryId}-${index}`
    setChecked((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const resetList = () => {
    setChecked({})
    localStorage.removeItem(STORAGE_KEY)
  }

  const totalItems = packingCategories.reduce((sum, cat) => sum + cat.items.length, 0)
  const checkedCount = Object.values(checked).filter(Boolean).length
  const progress = Math.round((checkedCount / totalItems) * 100)
  const activeItems = packingCategories.find((c) => c.id === activeCategory)?.items || []

  return (
    <FadeInSection>
      <section id="prepare" style={{ backgroundColor: '#FAF7F2' }} className="py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 no-print">
            <p className="text-xs uppercase tracking-widest mb-3 text-gold-on-cream">
              Before You Leave
            </p>
            <h2
              style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            >
              Prepare to Go
            </h2>
            <p className="text-muted-on-cream text-base leading-relaxed max-w-xl mx-auto">
              Pack smart, know your dorm, and memorize your speech times before you arrive.
            </p>
          </div>

          <div className="mb-2 no-print">
            <SectionTabs
              tabs={tabs}
              activeTab={activeTab}
              onChange={setActiveTab}
              variant="light"
              className="mb-0"
            />
          </div>

          {activeTab === 'packing' && (
            <div id="packing-print" className="max-w-4xl mx-auto mt-8">
              {/* Progress Bar */}
              <div
                className="mb-8 p-6 rounded-2xl no-print relative overflow-hidden"
                style={{
                  backgroundColor: 'white',
                  boxShadow: '0 4px 20px rgba(27,42,74,0.08)',
                  borderTop: '3px solid #C9A84C',
                }}
              >
                <div className="flex justify-between items-center mb-4 gap-4 flex-wrap">
                  <div>
                    <p className="text-xs uppercase tracking-widest mb-1" style={{ color: '#C9A84C' }}>
                      Interactive Checklist
                    </p>
                    <p
                      className="text-lg font-semibold"
                      style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }}
                    >
                      Packing Progress
                    </p>
                  </div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <p className="text-sm font-bold tabular-nums" style={{ color: '#C9A84C' }}>
                      {checkedCount}/{totalItems} · {progress}%
                    </p>
                    <button
                      type="button"
                      onClick={resetList}
                      className="text-xs font-medium cursor-pointer border-none bg-transparent underline-offset-2 hover:underline"
                      style={{ color: '#B45353', minHeight: 44, minWidth: 44, padding: '8px 12px' }}
                    >
                      Reset
                    </button>
                    <button
                      type="button"
                      onClick={() => window.print()}
                      className="text-xs font-semibold px-4 py-2 rounded-full cursor-pointer border-none transition-opacity hover:opacity-90"
                      style={{ backgroundColor: '#1B2A4A', color: 'white', minHeight: 44 }}
                    >
                      Print List
                    </button>
                  </div>
                </div>
                <div className="w-full h-2.5 rounded-full" style={{ backgroundColor: 'rgba(27,42,74,0.08)' }}>
                  <div
                    className="h-2.5 rounded-full transition-all duration-500"
                    style={{
                      width: `${progress}%`,
                      background: 'linear-gradient(90deg, #C9A84C, #E0C56E)',
                    }}
                  />
                </div>
                {progress === 100 && (
                  <p className="text-center text-sm mt-4" style={{ color: '#C9A84C' }}>
                    You&apos;re all packed — you&apos;ve got this.
                  </p>
                )}
              </div>

              {/* Print-only header */}
              <div className="print-only print-packing-header">
                <p className="print-logo">CA Girls State Guide</p>
                <h2 className="print-title">The Ultimate Packing List</h2>
                <p className="print-subtitle">
                  Check off items as you pack · {checkedCount}/{totalItems} complete
                </p>
              </div>

              {/* Category Tabs — swipe on mobile, wrap on larger screens */}
              <div
                className="flex flex-nowrap sm:flex-wrap justify-start sm:justify-center gap-2 mb-6 no-print overflow-x-auto overscroll-x-contain pb-1 -mx-1 px-1"
                style={{ scrollbarWidth: 'none' }}
                role="tablist"
                aria-label="Packing categories"
              >
                {packingCategories.map((cat) => {
                  const catChecked = cat.items.filter((_, i) => checked[`${cat.id}-${i}`]).length
                  const isActive = activeCategory === cat.id
                  return (
                    <button
                      key={cat.id}
                      ref={(el) => {
                        categoryBtnRefs.current[cat.id] = el
                      }}
                      type="button"
                      role="tab"
                      id={`packing-tab-${cat.id}`}
                      aria-controls={`packing-panel-${cat.id}`}
                      aria-selected={isActive}
                      tabIndex={isActive ? 0 : -1}
                      onClick={() => selectCategory(cat.id)}
                      className="flex-shrink-0 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer border-none whitespace-nowrap"
                      style={{
                        backgroundColor: isActive ? '#1B2A4A' : 'white',
                        color: isActive ? 'white' : '#1B2A4A',
                        boxShadow: isActive
                          ? '0 6px 18px rgba(27,42,74,0.22)'
                          : '0 2px 10px rgba(0,0,0,0.06)',
                        minHeight: 44,
                      }}
                    >
                      {cat.label}
                      {catChecked > 0 && (
                        <span
                          className="ml-2 text-xs px-1.5 py-0.5 rounded-full"
                          style={{
                            backgroundColor: isActive ? '#C9A84C' : 'rgba(201,168,76,0.2)',
                            color: '#1B2A4A',
                          }}
                        >
                          {catChecked}/{cat.items.length}
                        </span>
                      )}
                    </button>
                  )
                })}
              </div>

              {/* Checklist — screen */}
              <StaggerContainer
                className="rounded-2xl overflow-hidden no-print"
                style={{
                  boxShadow: '0 4px 20px rgba(27,42,74,0.08)',
                  border: '1px solid rgba(27,42,74,0.06)',
                }}
                key={activeCategory}
                role="tabpanel"
                id={`packing-panel-${activeCategory}`}
                aria-labelledby={`packing-tab-${activeCategory}`}
              >
                {activeItems.map((item, index) => {
                  const key = `${activeCategory}-${index}`
                  const isChecked = checked[key]
                  return (
                    <StaggerItem key={index} className="border-b last:border-b-0" style={{ borderColor: 'rgba(27,42,74,0.06)' }}>
                      <button
                        type="button"
                        onClick={() => toggleItem(activeCategory, index)}
                        aria-pressed={isChecked}
                        className="w-full flex items-center gap-4 px-5 py-4 cursor-pointer transition-all duration-150 border-none text-left"
                        style={{
                          backgroundColor: isChecked ? 'rgba(201,168,76,0.08)' : 'white',
                        }}
                      >
                        <span
                          className="flex-shrink-0 w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all"
                          style={{
                            borderColor: isChecked ? '#C9A84C' : '#D1D5DB',
                            backgroundColor: isChecked ? '#C9A84C' : 'transparent',
                          }}
                          aria-hidden="true"
                        >
                          {isChecked && <span className="text-white text-xs font-bold">✓</span>}
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

              {/* Checklist — print (all categories) */}
              <div className="print-only print-checklist">
                {packingCategories.map((cat) => (
                  <div key={cat.id} className="print-category">
                    <h2 className="print-category-title">{cat.label}</h2>
                    <ul className="print-item-list">
                      {cat.items.map((item, index) => {
                        const isChecked = checked[`${cat.id}-${index}`]
                        return (
                          <li key={index} className={isChecked ? 'print-item checked' : 'print-item'}>
                            <span className="print-checkbox">{isChecked ? '☑' : '☐'}</span>
                            <span>{item}</span>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Leave at Home */}
              <div
                className="mt-8 p-6 rounded-2xl"
                style={{ backgroundColor: '#FEF2F2', border: '1px solid #FECACA' }}
              >
                <p className="font-semibold mb-3 text-sm" style={{ color: '#DC2626' }}>
                  ❌ Leave at Home
                </p>
                <StaggerContainer className="flex flex-wrap gap-2 no-print">
                  {leaveAtHome.map((item) => (
                    <StaggerItem
                      key={item}
                      className="px-3 py-1 rounded-full text-xs"
                      style={{ backgroundColor: '#FEE2E2', color: '#DC2626' }}
                    >
                      {item}
                    </StaggerItem>
                  ))}
                </StaggerContainer>
                <ul className="print-only print-item-list">
                  {leaveAtHome.map((item) => (
                    <li key={item} className="print-item">
                      <span className="print-checkbox">☐</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'dorms' && (
            <div className="mt-8">
              {/* Campus Info Banner */}
              <div
                className="rounded-2xl p-6 mb-12 text-center"
                style={{
                  backgroundColor: 'rgba(201,168,76,0.12)',
                  border: '1px solid rgba(201,168,76,0.4)',
                }}
              >
                <p style={{ color: '#C9A84C' }} className="text-xs uppercase tracking-widest mb-2">
                  2026 Campus
                </p>
                <p style={{ color: '#1B2A4A' }} className="text-xl font-bold mb-1">
                  Southern California
                </p>
                <p style={{ color: '#2D2D2D', opacity: 0.65 }} className="text-sm">
                  Exact campus can change by year — confirm the official location, housing, and logistics with your ALA unit
                </p>
              </div>

              {/* Two Column Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {/* What's Provided */}
                <div className="card-hover rounded-2xl p-8" style={{ backgroundColor: '#1B2A4A' }}>
                  <h3
                    style={{ color: '#C9A84C', fontFamily: '"Playfair Display", serif' }}
                    className="text-xl font-bold mb-6"
                  >
                    What&apos;s Provided
                  </h3>
                  <StaggerContainer className="space-y-4">
                    {dormProvided.map((item) => (
                      <StaggerItem key={item.item} className="flex items-center gap-3">
                        <IconBadge size="sm" variant="gold">
                          {item.icon}
                        </IconBadge>
                        <span className="text-white opacity-75 text-sm">{item.item}</span>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                  <div
                    className="mt-6 p-3 rounded-xl"
                    style={{
                      backgroundColor: 'rgba(201,168,76,0.1)',
                      border: '1px solid rgba(201,168,76,0.2)',
                    }}
                  >
                    <p className="text-xs" style={{ color: '#C9A84C' }}>
                      ⚠️ Confirm with your unit whether bedding/linens are provided — bring your own to be safe.
                    </p>
                  </div>
                </div>

                {/* Dining */}
                <div className="card-hover rounded-2xl p-8" style={{ backgroundColor: '#1B2A4A' }}>
                  <h3
                    style={{ color: '#C9A84C', fontFamily: '"Playfair Display", serif' }}
                    className="text-xl font-bold mb-6"
                  >
                    Dining
                  </h3>
                  <p className="text-white opacity-70 text-sm leading-relaxed mb-4">
                    All meals are provided in the campus dining hall. Confirm dining details and any dietary needs with your
                    ALA unit before the session begins.
                  </p>
                  <p className="text-white opacity-70 text-sm leading-relaxed mb-6">
                    Days run from 6:00 AM to 10:30 PM. Eat breakfast. You need the fuel.
                  </p>
                  <div
                    className="p-3 rounded-xl"
                    style={{
                      backgroundColor: 'rgba(201,168,76,0.1)',
                      border: '1px solid rgba(201,168,76,0.2)',
                    }}
                  >
                    <p className="text-xs" style={{ color: '#C9A84C' }}>
                      🍽️ Have dietary restrictions? Contact your ALA unit and program organizers BEFORE
                      the session begins.
                    </p>
                  </div>
                </div>
              </div>

              {/* Tips Grid */}
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {dormTips.map((tip) => (
                  <StaggerItem
                    key={tip.title}
                    className="card-hover p-5 rounded-xl"
                    style={{
                      backgroundColor: '#1B2A4A',
                      border: '1px solid rgba(201,168,76,0.25)',
                    }}
                  >
                    <h4
                      style={{ color: '#C9A84C', fontFamily: '"Playfair Display", serif' }}
                      className="font-semibold mb-2 text-sm"
                    >
                      {tip.title}
                    </h4>
                    <p className="text-muted-on-navy text-xs leading-relaxed">{tip.desc}</p>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          )}

          {activeTab === 'speeches' && (
            <div className="max-w-5xl mx-auto mt-8">
              <div
                className="rounded-2xl overflow-x-auto mb-8"
                style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
              >
                <div className="min-w-[520px]">
                  <div
                    className="grid grid-cols-3 gap-2 px-5 py-4 text-xs uppercase tracking-widest font-semibold"
                    style={{ backgroundColor: '#C9A84C', color: '#1B2A4A' }}
                  >
                    <span>Office</span>
                    <span>Speech Time</span>
                    <span>Audience</span>
                  </div>
                  {speechRows.map((row, i) => (
                    <div
                      key={row.office}
                      className="grid grid-cols-3 gap-2 px-5 py-3 text-sm leading-relaxed"
                      style={{
                        backgroundColor: i % 2 === 0 ? 'white' : '#1B2A4A',
                        color: i % 2 === 0 ? '#2D2D2D' : 'white',
                      }}
                    >
                      <span className="font-medium">{row.office}</span>
                      <span style={{ color: '#C9A84C' }} className="font-semibold">
                        {row.time}
                      </span>
                      <span style={{ opacity: i % 2 === 0 ? 0.75 : 0.7 }}>{row.audience}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="rounded-2xl p-6 mb-4"
                style={{
                  backgroundColor: 'rgba(201,168,76,0.12)',
                  border: '1px solid rgba(201,168,76,0.35)',
                }}
              >
                <p className="text-xs uppercase tracking-widest mb-2" style={{ color: '#C9A84C' }}>
                  Write-In Speeches
                </p>
                <p className="text-sm leading-relaxed" style={{ color: '#1B2A4A' }}>
                  Write-in candidates may NOT give a speech with qualified candidates. During speeches,
                  write-in candidates stand when their name is announced and may only state their ballot
                  name and the office they are running for.
                </p>
              </div>

              <div className="rounded-2xl p-6" style={{ backgroundColor: '#1B2A4A' }}>
                <p className="text-xs uppercase tracking-widest mb-2" style={{ color: '#C9A84C' }}>
                  Whistle Stop Tour
                </p>
                <p className="text-sm leading-relaxed text-white opacity-75">
                  For General Election state offices, candidates for Governor, Lt. Governor, Attorney
                  General, and Superintendent of Public Instruction will participate in a Whistle Stop
                  Tour visiting all four counties and answering questions before the General Election.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </FadeInSection>
  )
}
