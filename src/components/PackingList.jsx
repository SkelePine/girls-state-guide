import { useState, useEffect } from 'react'
import FadeInSection, { StaggerContainer, StaggerItem } from './FadeInSection'

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

export default function PackingList() {
  const categories = [
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
        'Underwear + socks for every day + 1 extra',
        'Breathable fabrics — Riverside is 90°F+ in June',
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
        'Deodorant — stress sweating is real, bring extra',
        'Feminine hygiene products',
        'Toothbrush, toothpaste, floss',
        'Mini first aid kit (Advil, Pepto, Band-Aids)',
        'Any prescription medications',
        'Sunscreen — Riverside sun is intense',
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
      id: 'campaign',
      label: '📣 Campaign Supplies',
      items: [
        'Poster board (2–3 sheets)',
        'Markers — thick + thin, multiple colors',
        'Glitter, stickers, washi tape',
        'Printed photos of yourself',
        'BLUE TAPE ONLY — only approved tape for hanging posters',
        'Index cards for speech notes',
        'Sharpies in multiple colors',
      ],
    },
    {
      id: 'school',
      label: '📚 School Supplies',
      items: [
        'Notebook + pens — write down your memories every night',
        'Highlighters',
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
        'Lanyard for your badge',
        'Small backpack or tote for daily sessions',
        'Cash $20–40 for incidentals',
        'Snacks — granola bars, trail mix, crackers',
        'Gum / mints',
      ],
    },
  ]

  const [checked, setChecked] = useState(loadChecked)
  const [activeCategory, setActiveCategory] = useState('clothing')

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(checked))
  }, [checked])

  const toggleItem = (categoryId, index) => {
    const key = `${categoryId}-${index}`
    setChecked(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const resetList = () => {
    setChecked({})
    localStorage.removeItem(STORAGE_KEY)
  }

  const totalItems = categories.reduce((sum, cat) => sum + cat.items.length, 0)
  const checkedCount = Object.values(checked).filter(Boolean).length
  const progress = Math.round((checkedCount / totalItems) * 100)

  const activeItems = categories.find(c => c.id === activeCategory)?.items || []

  return (
    <FadeInSection>
    <section id="packing" style={{ backgroundColor: '#FAF7F2' }} className="py-24 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12 no-print">
          <p className="text-xs uppercase tracking-widest mb-3" style={{ color: '#C9A84C' }}>
            Don't Forget a Thing
          </p>
          <h2 style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }}
              className="text-4xl md:text-5xl font-bold mb-4">
            The Ultimate Packing List
          </h2>
          <p style={{ color: '#2D2D2D', opacity: 0.65 }} className="text-sm leading-relaxed max-w-xl mx-auto">
            Pack smart. You're living out of a dorm room for 6 days — going from business casual sessions to late-night city meetings to 6 AM flag ceremonies.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8 p-5 rounded-2xl no-print" style={{ backgroundColor: 'white', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
          <div className="flex justify-between items-center mb-3 gap-4 flex-wrap">
            <p className="text-sm font-medium" style={{ color: '#1B2A4A' }}>Packing Progress</p>
            <div className="flex items-center gap-3 flex-wrap">
              <p className="text-sm font-bold" style={{ color: '#C9A84C' }}>{checkedCount}/{totalItems} items · {progress}%</p>
              <button
                type="button"
                onClick={resetList}
                className="text-xs font-medium px-3 py-1.5 rounded-full cursor-pointer border-none transition-opacity hover:opacity-80"
                style={{ backgroundColor: '#1B2A4A', color: 'white' }}
              >
                Reset List
              </button>
              <button
                type="button"
                onClick={() => window.print()}
                className="text-xs font-medium px-3 py-1.5 rounded-full cursor-pointer border-none transition-opacity hover:opacity-80"
                style={{ backgroundColor: '#C9A84C', color: '#1B2A4A' }}
              >
                Print List
              </button>
            </div>
          </div>
          <div className="w-full h-2 rounded-full" style={{ backgroundColor: '#E5E7EB' }}>
            <div className="h-2 rounded-full transition-all duration-500"
                 style={{ width: `${progress}%`, backgroundColor: '#C9A84C' }}></div>
          </div>
          {progress === 100 && (
            <p className="text-center text-sm mt-3" style={{ color: '#C9A84C' }}>
              🎉 You're all packed! You've got this.
            </p>
          )}
        </div>

        {/* Print-only header */}
        <div className="print-only print-packing-header">
          <p className="print-logo">CA Girls State Guide</p>
          <h1 className="print-title">The Ultimate Packing List</h1>
          <p className="print-subtitle">Check off items as you pack · {checkedCount}/{totalItems} complete</p>
        </div>

        {/* Category Tabs */}
        <StaggerContainer className="flex flex-wrap gap-2 mb-6 no-print">
          {categories.map((cat) => {
            const catChecked = cat.items.filter((_, i) => checked[`${cat.id}-${i}`]).length
            return (
              <StaggerItem key={cat.id}>
                <button
                  onClick={() => setActiveCategory(cat.id)}
                  className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
                  style={{
                    backgroundColor: activeCategory === cat.id ? '#1B2A4A' : 'white',
                    color: activeCategory === cat.id ? 'white' : '#1B2A4A',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                  }}
                >
                  {cat.label}
                  {catChecked > 0 && (
                    <span className="ml-2 text-xs px-1.5 py-0.5 rounded-full"
                          style={{ backgroundColor: '#C9A84C', color: 'white' }}>
                      {catChecked}
                    </span>
                  )}
                </button>
              </StaggerItem>
            )
          })}
        </StaggerContainer>

        {/* Checklist — screen */}
        <StaggerContainer className="rounded-2xl overflow-hidden no-print" style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }} key={activeCategory}>
          {activeItems.map((item, index) => {
            const key = `${activeCategory}-${index}`
            const isChecked = checked[key]
            return (
              <StaggerItem
                key={index}
                onClick={() => toggleItem(activeCategory, index)}
                className="flex items-center gap-4 p-4 cursor-pointer transition-all duration-150 border-b last:border-b-0"
                style={{
                  backgroundColor: isChecked ? 'rgba(201,168,76,0.06)' : 'white',
                  borderColor: '#F3F4F6',
                }}
              >
                <div className="flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-all"
                     style={{
                       borderColor: isChecked ? '#C9A84C' : '#D1D5DB',
                       backgroundColor: isChecked ? '#C9A84C' : 'transparent',
                     }}>
                  {isChecked && <span className="text-white text-xs">✓</span>}
                </div>
                <span className="text-sm transition-all"
                      style={{
                        color: isChecked ? '#9CA3AF' : '#2D2D2D',
                        textDecoration: isChecked ? 'line-through' : 'none',
                      }}>
                  {item}
                </span>
              </StaggerItem>
            )
          })}
        </StaggerContainer>

        {/* Checklist — print (all categories) */}
        <div className="print-only print-checklist">
          {categories.map((cat) => (
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
        <div className="mt-8 p-6 rounded-2xl" style={{ backgroundColor: '#FEF2F2', border: '1px solid #FECACA' }}>
          <p className="font-semibold mb-3 text-sm" style={{ color: '#DC2626' }}>❌ Leave at Home</p>
          <StaggerContainer className="flex flex-wrap gap-2 no-print">
            {['Candles or open flames', 'Hot plates or cooking appliances', 'Excessive valuables', 'Anything irreplaceable'].map((item) => (
              <StaggerItem key={item} className="px-3 py-1 rounded-full text-xs"
                    style={{ backgroundColor: '#FEE2E2', color: '#DC2626' }}>
                {item}
              </StaggerItem>
            ))}
          </StaggerContainer>
          <ul className="print-only print-item-list">
            {['Candles or open flames', 'Hot plates or cooking appliances', 'Excessive valuables', 'Anything irreplaceable'].map((item) => (
              <li key={item} className="print-item">
                <span className="print-checkbox">☐</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
    </FadeInSection>
  )
}