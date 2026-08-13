import { useState } from 'react'
import FadeInSection, { StaggerContainer, StaggerItem } from './FadeInSection'
import IconBadge from './IconBadge'

const bankFacts = [
  'Every delegate starts with G$500 in a Girls State bank account.',
  'The bank is at mykidsbank.org — Banking Number 3081.',
  'Maximum donation to any one candidate is G$25 per election.',
  'You can donate to the same candidate across multiple explorations for different offices.',
  'All contributions must be reported on Form #12.',
  'You must file a List of Campaign Contributors even if no contributions were received.',
  'Failure to file Form #12 results in disqualification.',
  'You must maintain at least G$1 in your account at all times.',
  'Filing fees are paid by transferring from your account to the City, County, or State.',
]

const campaignRules = [
  'Only use butcher paper from the ALA Girls State Campaign Table for signs.',
  'Maximum 5 pieces or rolls of butcher paper.',
  'Supporters can hold signs during your speech but only off-stage and must not distract from your speech.',
  'You can purchase a General Assembly pre-show slide for G$100 paid to the state treasurer.',
  'You can purchase a daily journalism publication ad for G$50 paid to journalism.',
  'Do NOT bring campaign materials from home.',
  'Do NOT wear anything from home to distinguish yourself as a candidate.',
]

const writeInLevels = [
  {
    title: 'City Level',
    desc: 'File with the Acting City Clerk prior to speeches at City Meeting.',
  },
  {
    title: 'County Level',
    desc: 'File with the Acting County Clerk prior to speeches at County Meeting.',
  },
  {
    title: 'State Level',
    desc: 'File with the Acting Secretary of State immediately following announcement of qualified candidates — Primary elections only. No write-ins after initial primary elections at state level.',
  },
]

const writeInCampaign = ['Word of mouth', 'Posters', 'General Assembly slides', 'Journalism ads']

export default function FilingProcess() {
  const [openItem, setOpenItem] = useState(null)
  const [extraOpen, setExtraOpen] = useState(null)

  const fees = [
    { office: 'Governor', fee: '$500', partisan: true },
    { office: 'Lt. Governor', fee: '$400', partisan: true },
    { office: 'Attorney General', fee: '$400', partisan: true },
    { office: 'Secretary of State', fee: '$400', partisan: true },
    { office: 'Treasurer', fee: '$350', partisan: true },
    { office: 'Controller', fee: '$350', partisan: true },
    { office: 'Superintendent of Public Instruction', fee: '$350', partisan: false },
    { office: 'Justice of the Supreme Court', fee: '$350', partisan: false },
  ]

  const forms = [
    { number: 'Form #3', name: 'Declaration of Candidacy', desc: 'Your official filing form. Includes your Girls State name, city, county, party, and Verification Deputies.' },
    { number: 'Form #4', name: 'Nomination Form', desc: 'Requires 11–15 signatures from at least two counties. Partisan offices: signatures from your party only. Non-partisan: both parties can sign.' },
    { number: 'Form #5', name: 'Verification Deputy\'s Affidavit', desc: 'Signed with a GREEN HAT Notary present. Do NOT sign until you are with the notary.' },
    { number: 'Form #12', name: 'Campaign Contribution Disclosure', desc: 'Track every contributor\'s name, city, and amount. Max $25 per contributor. Must maintain $1 minimum balance.' },
  ]

  const people = [
    { hat: '🟢', role: 'Green Hats', desc: 'Notaries — must sign your Form #5' },
    { hat: '🟣', role: 'Purple Hats', desc: 'Fixers — help correct errors on forms' },
    { hat: '📋', role: 'Clerks & Treasurers', desc: 'Provide forms and collect fees ONLY — do not answer questions or correct forms' },
    { hat: '👋', role: 'Liaisons, JCs, Interns', desc: 'Encouragement and guidance' },
  ]

  return (
    <FadeInSection>
    <section id="filing" style={{ backgroundColor: '#1B2A4A' }} className="py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest mb-3" style={{ color: '#C9A84C' }}>
            State Offices Only
          </p>
          <h2 style={{ color: 'white', fontFamily: '"Playfair Display", serif' }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            The State Filing Process
          </h2>
          <p className="text-muted-on-navy text-sm leading-relaxed max-w-xl mx-auto">
            Running for a state office is a whole process — and it starts before you even campaign. Here's exactly how it works.
          </p>
        </div>

        {/* People to Know */}
        <div className="mb-12">
          <p className="text-xs uppercase tracking-widest mb-6 text-center" style={{ color: '#C9A84C' }}>
            People to Know
          </p>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {people.map((person) => (
              <StaggerItem key={person.role} className="card-hover flex gap-4 p-4 rounded-xl"
                   style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}>
                <IconBadge size="md" variant="light">{person.hat}</IconBadge>
                <div>
                  <p style={{ color: '#C9A84C' }} className="font-semibold text-sm">{person.role}</p>
                  <p className="text-muted-on-navy text-xs mt-1">{person.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* The Three Forms */}
        <div className="mb-12">
          <p className="text-xs uppercase tracking-widest mb-6 text-center" style={{ color: '#C9A84C' }}>
            The Forms You Need
          </p>
          <StaggerContainer className="space-y-3">
            {forms.map((form, index) => (
              <StaggerItem key={form.number} className="card-hover rounded-xl overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenItem(openItem === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left border-none cursor-pointer"
                  style={{ backgroundColor: 'rgba(255,255,255,0.07)' }}
                  aria-expanded={openItem === index}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-bold px-2 py-1 rounded"
                          style={{ backgroundColor: '#C9A84C', color: '#1B2A4A' }}>
                      {form.number}
                    </span>
                    <span className="text-white font-medium text-sm">{form.name}</span>
                  </div>
                  <span style={{ color: '#C9A84C' }}>{openItem === index ? '−' : '+'}</span>
                </button>
                {openItem === index && (
                  <div className="px-5 pb-5" style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}>
                    <p className="text-muted-on-navy text-sm leading-relaxed pt-3">{form.desc}</p>
                  </div>
                )}
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Signature Rules */}
        <div className="mb-12 p-6 rounded-2xl"
             style={{ backgroundColor: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.3)' }}>
          <p className="text-xs uppercase tracking-widest mb-4" style={{ color: '#C9A84C' }}>
            Signature Rules
          </p>
          <StaggerContainer className="space-y-2">
            {[
              'Need 11–15 total signatures from at least TWO counties',
              'Must have a Verification Deputy in each county where you collect signatures',
              'Partisan offices: signatures from your party only',
              'Non-partisan offices: both parties can sign',
              'File all paperwork in your HOME county',
            ].map((rule) => (
              <StaggerItem key={rule} className="flex items-start gap-2 text-sm text-white opacity-75">
                <span style={{ color: '#C9A84C' }}>→</span> {rule}
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Filing Fees */}
        <div className="mb-12">
          <p className="text-xs uppercase tracking-widest mb-6 text-center" style={{ color: '#C9A84C' }}>
            Filing Fees (Girls State Currency — G$)
          </p>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {fees.map((item) => (
              <StaggerItem key={item.office} className="card-hover p-4 rounded-xl text-center"
                   style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: `1px solid ${item.partisan ? 'rgba(201,168,76,0.3)' : 'rgba(255,255,255,0.1)'}` }}>
                <p style={{ color: '#C9A84C' }} className="text-xl font-bold mb-1">{item.fee}</p>
                <p className="text-white opacity-70 text-xs mb-2">{item.office}</p>
                <span className="text-xs px-2 py-0.5 rounded-full"
                      style={{ backgroundColor: item.partisan ? 'rgba(201,168,76,0.2)' : 'rgba(255,255,255,0.1)', color: item.partisan ? '#C9A84C' : 'rgba(255,255,255,0.5)' }}>
                  {item.partisan ? 'Partisan' : 'Non-Partisan'}
                </span>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <p className="text-center text-xs mt-4 text-muted-on-navy">
            Start fundraising at breakfast the morning after state filing is announced. Max $25 per contributor.
          </p>
        </div>

        {/* Tips */}
        <div className="p-6 rounded-2xl mb-16" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
          <p className="text-xs uppercase tracking-widest mb-4" style={{ color: '#C9A84C' }}>
            Form Tips — Read Carefully
          </p>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {[
              'Read aloud — top to bottom, left to right',
              'Print clearly in blue or black pen only',
              'Don\'t leave ANY blank fields',
              'Verify GS signatures and party affiliation',
              'Ask for the correct color paper',
              'File in the correct (HOME) county',
              'Do NOT sign Form #5 until you are with a Green Hat Notary',
              'Only pay your filing fee once, in your HOME county',
            ].map((tip) => (
              <StaggerItem key={tip} className="flex items-start gap-2 text-xs text-muted-on-navy">
                <span style={{ color: '#C9A84C' }}>✓</span> {tip}
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        <div style={{ backgroundColor: 'rgba(255,255,255,0.12)' }} className="w-full h-px mb-16" />

        {/* Bank & Currency */}
        <div className="mb-12">
          <h3
            style={{ color: 'white', fontFamily: '"Playfair Display", serif' }}
            className="text-2xl md:text-3xl font-bold mb-3 text-center"
          >
            Girls State Bank Account and Currency
          </h3>
          <p className="text-muted-on-navy text-sm leading-relaxed max-w-xl mx-auto text-center mb-8">
            Your Girls State bank account powers filing fees, donations, and campaign materials.
          </p>

          <StaggerContainer className="space-y-3 mb-6">
            <StaggerItem className="card-hover rounded-xl overflow-hidden">
              <button
                type="button"
                onClick={() => setExtraOpen(extraOpen === 'bank' ? null : 'bank')}
                className="w-full flex items-center justify-between p-5 text-left border-none cursor-pointer"
                style={{ backgroundColor: 'rgba(255,255,255,0.07)' }}
                aria-expanded={extraOpen === 'bank'}
              >
                <span className="text-white font-medium text-sm">Bank Rules &amp; G$ Facts</span>
                <span style={{ color: '#C9A84C' }}>{extraOpen === 'bank' ? '−' : '+'}</span>
              </button>
              {extraOpen === 'bank' && (
                <div className="px-5 pb-5 pt-2" style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}>
                  <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                    {bankFacts.map((fact) => (
                      <StaggerItem
                        key={fact}
                        className="p-4 rounded-xl text-sm leading-relaxed text-white opacity-80"
                        style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}
                      >
                        {fact}
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div
                      className="rounded-xl p-5"
                      style={{ backgroundColor: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.35)' }}
                    >
                      <p
                        style={{ color: '#C9A84C', fontFamily: '"Playfair Display", serif' }}
                        className="font-bold mb-3"
                      >
                        Fundraising Script
                      </p>
                      <p className="text-sm leading-relaxed text-white opacity-80 mb-3">
                        When fundraising, say: <em>&quot;I am intending to run for the elected office of [position]&quot;</em> —
                        this phrase does not constitute improper campaigning.
                      </p>
                      <p className="text-sm leading-relaxed text-white opacity-70">
                        Do NOT ask for votes, state your qualifications, or declare your candidacy while fundraising.
                        You can ONLY start campaigning AFTER you are announced as a qualified candidate.
                      </p>
                    </div>
                    <div className="rounded-xl p-5" style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}>
                      <p
                        style={{ color: '#C9A84C', fontFamily: '"Playfair Display", serif' }}
                        className="font-bold mb-3"
                      >
                        Campaign Materials Rules
                      </p>
                      <ul className="space-y-2">
                        {campaignRules.map((rule) => (
                          <li key={rule} className="flex items-start gap-2 text-sm leading-relaxed text-white opacity-75">
                            <span style={{ color: '#C9A84C' }} className="flex-shrink-0">→</span>
                            {rule}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </StaggerItem>
          </StaggerContainer>
        </div>

        {/* Write-In Candidates */}
        <div>
          <h3
            style={{ color: 'white', fontFamily: '"Playfair Display", serif' }}
            className="text-2xl md:text-3xl font-bold mb-3 text-center"
          >
            Write-In Candidates
          </h3>
          <p className="text-muted-on-navy text-sm leading-relaxed max-w-xl mx-auto text-center mb-8">
            Not on the ballot yet? You can still run. Write-in candidacy is a real opportunity.
          </p>

          <StaggerContainer className="space-y-3">
            <StaggerItem className="card-hover rounded-xl overflow-hidden">
              <button
                type="button"
                onClick={() => setExtraOpen(extraOpen === 'writein' ? null : 'writein')}
                className="w-full flex items-center justify-between p-5 text-left border-none cursor-pointer"
                style={{ backgroundColor: 'rgba(255,255,255,0.07)' }}
                aria-expanded={extraOpen === 'writein'}
              >
                <span className="text-white font-medium text-sm">Write-In Guide</span>
                <span style={{ color: '#C9A84C' }}>{extraOpen === 'writein' ? '−' : '+'}</span>
              </button>
              {extraOpen === 'writein' && (
                <div className="px-5 pb-5 pt-2" style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}>
                  <p className="text-sm leading-relaxed text-white opacity-75 mb-6">
                    If you are not a qualified candidate, you can still run as a write-in by filing with the appropriate
                    official to declare your intent. You can be elected by majority vote.
                  </p>
                  <p className="text-xs uppercase tracking-widest mb-4" style={{ color: '#C9A84C' }}>
                    How to File
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
                    {writeInLevels.map((level) => (
                      <div
                        key={level.title}
                        className="rounded-xl p-4"
                        style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}
                      >
                        <p
                          style={{ color: '#C9A84C', fontFamily: '"Playfair Display", serif' }}
                          className="font-bold mb-2 text-sm"
                        >
                          {level.title}
                        </p>
                        <p className="text-xs leading-relaxed text-white opacity-70">{level.desc}</p>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="rounded-xl p-4" style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}>
                      <p
                        style={{ color: '#C9A84C', fontFamily: '"Playfair Display", serif' }}
                        className="font-bold mb-3 text-sm"
                      >
                        How Write-Ins Can Campaign
                      </p>
                      <ul className="space-y-2">
                        {writeInCampaign.map((option) => (
                          <li key={option} className="flex items-center gap-2 text-sm text-white opacity-75">
                            <span style={{ color: '#C9A84C' }}>✓</span>
                            {option}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div
                      className="rounded-xl p-4"
                      style={{ backgroundColor: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.35)' }}
                    >
                      <p
                        style={{ color: '#C9A84C', fontFamily: '"Playfair Display", serif' }}
                        className="font-bold mb-3 text-sm"
                      >
                        Speech Rules
                      </p>
                      <p className="text-sm leading-relaxed text-white opacity-80 mb-2">
                        Write-in candidates may NOT give a speech with qualified candidates.
                      </p>
                      <p className="text-sm leading-relaxed text-white opacity-70">
                        During speeches, write-in candidates stand when their name is announced and may only state their
                        ballot name and the position they are running for.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </StaggerItem>
          </StaggerContainer>
        </div>

      </div>
    </section>
    </FadeInSection>
  )
}
