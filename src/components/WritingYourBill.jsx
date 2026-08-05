import { useState } from 'react'
import FadeInSection, { StaggerContainer, StaggerItem } from './FadeInSection'

export default function WritingYourBill() {
  const [openSection, setOpenSection] = useState(0)

  const billSections = [
    {
      section: 'SECTION 1',
      title: 'TITLE',
      desc: 'A short name for your bill.',
      example: 'This act may be cited as the "Teenage Drivers\' License Act of 2026."',
      tip: 'Write this LAST — after you know what the bill actually says.',
    },
    {
      section: 'SECTION 2',
      title: 'PURPOSE',
      desc: 'Brief narrative overview: What\'s the problem? Why does it need to be resolved?',
      example: 'Write a brief summary of the purpose, content, and effect of the proposed bill. No more than a paragraph.',
      tip: '1–3 sentences to a paragraph. This is your introduction.',
    },
    {
      section: 'SECTION 3',
      title: 'DEFINITIONS',
      desc: 'Define 1–5 key terms essential to understanding the bill.',
      example: 'A teenager is a person who is under the age of twenty at the time in question.',
      tip: 'Only include terms that are truly essential. Don\'t over-define.',
    },
    {
      section: 'SECTION 4',
      title: 'BODY CLAUSES',
      desc: 'The actual law-making section. Use alphanumeric outline: (A), (1), (a), (i)',
      example: 'The [Name of Your Bill] entails that:\n(A) The legislature finds and declares...\n(1) First Sub Clause\n(a) Sub Sub Clause',
      tip: 'This is the longest section. Be specific and clear. Include as many sub-sections as needed.',
    },
    {
      section: 'SECTION 5',
      title: 'EFFECTIVE DATE',
      desc: 'When your bill takes effect.',
      example: 'This act shall be effective for all citizens of the State of California on or after January 1, 2027.',
      tip: '⚠️ Bills effective within 90 days = emergency legislation = requires 2/3 majority to pass. After 90 days = simple majority (1/2).',
    },
  ]

  const topics = [
    'Education reform', 'Healthcare access', 'Housing affordability',
    'Environmental protection', 'Mental health resources', 'Public safety',
    'Youth programs', 'Veterans\' services', 'Voting rights', 'Technology policy',
  ]

  const passedBills = [
    { name: 'Early Elementary Technology Reform', delegate: 'Kendall Metzler', city: 'Bass' },
    { name: 'Firearm Safety and Crisis Prevention Training Act of 2026', delegate: 'Hannah Li', city: 'Saubel' },
    { name: 'Missing and Murdered Indigenous Persons Act', delegate: 'Gabriella', city: 'Bass' },
    { name: 'California Civic Modernization Act of 2026', delegate: 'Janvi Vangaru', city: 'Ride' },
    { name: 'Healthcare Access and Continuity Amendment Act of 2026', delegate: 'Liliana Rivera', city: 'Asawa' },
    { name: 'Disabled Veterans Stability and Opportunity Act', delegate: 'Kiana Lee', city: 'Pleasant' },
    { name: 'Teenage Voting Rights Act of 2026', delegate: 'Juliana Garcia', city: 'Tape' },
  ]

  return (
    <FadeInSection>
    <section id="bill" style={{ backgroundColor: '#FAF7F2' }} className="py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest mb-3" style={{ color: '#C9A84C' }}>
            Your Voice in Law
          </p>
          <h2 style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Writing Your Bill
          </h2>
          <p style={{ color: '#2D2D2D', opacity: 0.65 }} className="text-sm leading-relaxed max-w-xl mx-auto">
            Your bill is your voice. It's the one place in the entire week where you get to say: this is what I care about, and here's what I'd do about it.
          </p>
        </div>

        {/* Deadline Banner */}
        <div className="rounded-2xl p-5 mb-12 text-center"
             style={{ backgroundColor: '#FEF3C7', border: '1px solid #FCD34D' }}>
          <p className="font-bold text-sm mb-1" style={{ color: '#92400E' }}>
            ⏰ Important: Bills must be submitted BEFORE the session begins
          </p>
          <p className="text-xs" style={{ color: '#92400E', opacity: 0.8 }}>
            The 2026 deadline was June 17, 2026 — before the June 22 start. Check your year's deadline with your ALA unit. Submit via Google Form provided by your unit.
          </p>
        </div>

        {/* Topic Ideas */}
        <div className="mb-12">
          <p className="text-xs uppercase tracking-widest mb-4 text-center" style={{ color: '#C9A84C' }}>
            Topic Ideas
          </p>
          <StaggerContainer className="flex flex-wrap justify-center gap-2">
            {topics.map((topic) => (
              <StaggerItem key={topic} className="px-4 py-2 rounded-full text-sm"
                    style={{ backgroundColor: 'white', color: '#1B2A4A', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                {topic}
              </StaggerItem>
            ))}
          </StaggerContainer>
          <p className="text-center text-xs mt-4" style={{ color: '#2D2D2D', opacity: 0.5 }}>
            Pick something within California State Legislature jurisdiction that you genuinely care about.
          </p>
        </div>

        {/* Bill Structure */}
        <div className="mb-12">
          <p className="text-xs uppercase tracking-widest mb-6 text-center" style={{ color: '#C9A84C' }}>
            The Official Bill Structure
          </p>
          <StaggerContainer className="space-y-3">
            {billSections.map((item, index) => (
              <StaggerItem key={index} className="card-hover rounded-2xl overflow-hidden"
                   style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                <button
                  type="button"
                  onClick={() => setOpenSection(openSection === index ? -1 : index)}
                  className="w-full flex items-center justify-between p-5 text-left transition-all"
                  style={{ backgroundColor: openSection === index ? '#1B2A4A' : 'white' }}
                  aria-expanded={openSection === index}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-bold px-2 py-1 rounded"
                          style={{ backgroundColor: '#C9A84C', color: '#1B2A4A' }}>
                      {item.section}
                    </span>
                    <span className="font-semibold text-sm"
                          style={{ color: openSection === index ? 'white' : '#1B2A4A' }}>
                      {item.title}
                    </span>
                  </div>
                  <span style={{ color: '#C9A84C' }}>{openSection === index ? '−' : '+'}</span>
                </button>
                {openSection === index && (
                  <div className="p-5" style={{ backgroundColor: 'white' }}>
                    <p className="text-sm leading-relaxed mb-3" style={{ color: '#2D2D2D', opacity: 0.75 }}>{item.desc}</p>
                    <div className="p-3 rounded-lg mb-3 font-mono text-xs"
                         style={{ backgroundColor: '#F8F9FA', color: '#1B2A4A', whiteSpace: 'pre-line' }}>
                      {item.example}
                    </div>
                    <div className="flex items-start gap-2 p-3 rounded-lg"
                         style={{ backgroundColor: 'rgba(201,168,76,0.08)' }}>
                      <span style={{ color: '#C9A84C' }}>💡</span>
                      <p className="text-xs" style={{ color: '#1B2A4A' }}>{item.tip}</p>
                    </div>
                  </div>
                )}
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Bills Passed in 2026 */}
        <div className="card-hover rounded-2xl p-8" style={{ backgroundColor: '#1B2A4A' }}>
          <p className="text-xs uppercase tracking-widest mb-6 text-center" style={{ color: '#C9A84C' }}>
            Bills Passed & Signed into Law — 2026 Session
          </p>
          <StaggerContainer className="space-y-3">
            {passedBills.map((bill) => (
              <StaggerItem key={bill.name} className="card-hover flex items-start gap-3 p-3 rounded-xl"
                   style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
                <span style={{ color: '#C9A84C' }} className="mt-0.5">✓</span>
                <div>
                  <p className="text-white text-sm font-medium">{bill.name}</p>
                  <p className="text-white opacity-40 text-xs">{bill.delegate} · City of {bill.city}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <p className="text-center text-xs mt-6 text-white opacity-30">
            Real bills passed and signed into law at the 2026 ALA California Girls State session.
          </p>
        </div>

      </div>
    </section>
    </FadeInSection>
  )
}