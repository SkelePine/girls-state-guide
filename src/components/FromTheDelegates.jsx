import { useHashTab } from '../hooks/useHashTab'
import FadeInSection, { StaggerContainer, StaggerItem } from './FadeInSection'
import SectionTabs from './SectionTabs'

const tabs = [
  { id: 'delegates', label: 'From the Delegates' },
  { id: 'session', label: '2026 Session Highlights' },
]

const officers = [
  { role: 'Governor', name: 'Posey Dinka' },
  { role: 'Speaker of the House', name: 'Mya Cottin-Rack' },
  { role: 'President Pro Tem of the Senate', name: 'Aria Mehta' },
  { role: 'Superintendent of Public Instruction', name: 'Noa Sarfati' },
  { role: 'Secretary of State', name: 'Isabelle Alejandre' },
]

const bills = [
  { name: 'Early Elementary Technology Reform', delegate: 'Kendall Metzler', city: 'Bass' },
  { name: 'Firearm Safety and Crisis Prevention Training Act of 2026', delegate: 'Hannah Li', city: 'Saubel' },
  { name: 'Missing and Murdered Indigenous Persons Act', delegate: 'Gabriella', city: 'Bass' },
  { name: 'California Civic Modernization Act of 2026', delegate: 'Janvi Vangaru', city: 'Ride' },
  { name: 'California Tech Repurpose Act', delegate: 'Isla Tuvilla', city: 'Asawa' },
  { name: 'Healthcare Access and Continuity Amendment Act of 2026', delegate: 'Liliana Rivera', city: 'Asawa' },
  { name: 'Disabled Veterans Stability and Opportunity Act', delegate: 'Kiana Lee', city: 'Pleasant' },
  { name: 'Teenage Voting Rights Act of 2026', delegate: 'Juliana Garcia', city: 'Tape' },
]

export default function FromTheDelegates() {
  const [activeTab, setActiveTab] = useHashTab('delegates', 'delegates', ['delegates', 'session'])

  return (
    <FadeInSection>
      <section id="delegates" style={{ backgroundColor: '#FAF7F2' }} className="py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-widest mb-3 text-gold-on-cream">
              Real Experience
            </p>
            <h2
              style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            >
              From the Delegates
            </h2>
            <p style={{ color: '#2D2D2D', opacity: 0.65 }} className="text-sm leading-relaxed max-w-xl mx-auto">
              Stories from the week — and the moments that defined the 83rd session.
            </p>
          </div>

          <div className="mb-6">
            <SectionTabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} variant="light" className="mb-0" />
          </div>

          {activeTab === 'delegates' && (
            <div className="max-w-4xl mx-auto">
              <div
                className="card-hover rounded-2xl overflow-hidden mb-12"
                style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.1)' }}
              >
                <div style={{ backgroundColor: '#1B2A4A' }} className="p-6">
                  <p className="text-xs uppercase tracking-widest mb-1" style={{ color: '#C9A84C' }}>
                    2026 Nationalist Party Keynote Address
                  </p>
                  <p className="text-muted-on-navy text-sm">
                    Delivered at ALA California Girls State, 83rd Session · UC Riverside
                  </p>
                </div>
                <div style={{ backgroundColor: 'white' }} className="p-8">
                  <div style={{ borderLeft: '4px solid #C9A84C' }} className="pl-6">
                    <p
                      style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }}
                      className="text-lg italic leading-relaxed mb-6"
                    >
                      &quot;Good evening, Nationalists. My name is Inaaya Saif, and I am honored to serve as your Nationalist Party Keynote Speaker.
                    </p>
                    <p style={{ color: '#2D2D2D', opacity: 0.8 }} className="text-sm leading-relaxed mb-4">
                      These words are not merely a slogan — They represent who we are. They represent a group of young leaders who came to Girls State ready to learn, ready to serve, and ready to make a difference.
                    </p>
                    <p style={{ color: '#2D2D2D', opacity: 0.8 }} className="text-sm leading-relaxed mb-4">
                      Just three days ago, we all walked into this campus as strangers. Some of us may have been excited — others were nervous — and most didn&apos;t even know what to expect. Yet, in just these past few days, we&apos;ve created something remarkable. We debated ideas. We ran campaigns. We voted, legislated, collaborated, and led. We challenged ourselves to step outside our comfort zones and discover skills we didn&apos;t know we had.
                    </p>
                    <p style={{ color: '#2D2D2D', opacity: 0.8 }} className="text-sm leading-relaxed mb-4">
                      Through all of this, one thing has become clear: Leadership cannot be defined by a title — It&apos;s never been about winning or popularity. Leadership is having the courage to speak up when no one else will. Leadership is listening to perspectives that differ from yours with an open mind. Leadership is choosing to serve others before yourself. That&apos;s the spirit that defines the Nationalist Party.
                    </p>
                    <p style={{ color: '#2D2D2D', opacity: 0.8 }} className="text-sm leading-relaxed mb-4">
                      Take a moment to look around this room. You are surrounded by future lawmakers, educators, entrepreneurs, engineers, advocates, and public servants. But more importantly, you are surrounded by people who are already learning how to lead right now — not someday, but today.
                    </p>
                    <p style={{ color: '#2D2D2D', opacity: 0.8 }} className="text-sm leading-relaxed mb-6">
                      As we continue the remainder of this week, I encourage each of you to continue showing up. Keep sharing ideas. Keep asking questions. Keep being curious. Keep taking risks. And most importantly, keep being yourself. Because every conversation, every obstacle, and every opportunity helps shape the leader you will become.
                    </p>
                    <p
                      style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }}
                      className="text-lg italic leading-relaxed"
                    >
                      &quot;Nationalists, we still have work to do. We have goals to accomplish. We have opportunities to create. We have ideas to share. We have memories to make. But if these first days are any indication of who we are, then I&apos;m certain our future is incredibly bright. Thank you, Nationalists.&quot;
                    </p>
                  </div>
                  <p className="text-right text-sm mt-6" style={{ color: '#C9A84C' }}>
                    — Inaaya Saif, Nationalist Party Keynote Speaker<br />
                    <span className="text-xs opacity-70">Gilbreth City · McMahon County · 2026</span>
                  </p>
                </div>
              </div>

              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <StaggerItem
                  className="card-hover p-6 rounded-2xl"
                  style={{ backgroundColor: 'white', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', borderTop: '4px solid #C9A84C' }}
                >
                  <p className="text-xs uppercase tracking-widest mb-3 text-gold-on-cream">
                    On Running for Multiple Offices
                  </p>
                  <p
                    style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }}
                    className="text-base italic leading-relaxed mb-4"
                  >
                    &quot;I applied for Platform Committee Chair, Superintendent of Schools, District Attorney, and Attorney General. I didn&apos;t win every race. But every time I stood up and spoke, I got better. Every time I put my name on a form, I got braver. That&apos;s the whole point.&quot;
                  </p>
                  <p style={{ color: '#C9A84C' }} className="text-xs uppercase tracking-widest">
                    — 2026 Delegate, Gilbreth City
                  </p>
                </StaggerItem>

                <StaggerItem
                  className="card-hover p-6 rounded-2xl"
                  style={{ backgroundColor: 'white', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', borderTop: '4px solid #1B2A4A' }}
                >
                  <p className="text-xs uppercase tracking-widest mb-3 text-gold-on-cream">
                    On Making Community
                  </p>
                  <p
                    style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }}
                    className="text-base italic leading-relaxed mb-4"
                  >
                    &quot;In order to have a positive Girls State experience, you have to be present. You can be really in everyone&apos;s face, or you can be more laid back — but as long as you make those connections with friends, counselors, and everyone around you, it&apos;ll be so much more memorable. Make that community.&quot;
                  </p>
                  <p style={{ color: '#C9A84C' }} className="text-xs uppercase tracking-widest">
                    — 2026 Delegate, McMahon County
                  </p>
                </StaggerItem>

                <StaggerItem
                  className="card-hover p-6 rounded-2xl"
                  style={{ backgroundColor: 'white', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', borderTop: '4px solid #C9A84C' }}
                >
                  <p className="text-xs uppercase tracking-widest mb-3 text-gold-on-cream">
                    On Being Nervous
                  </p>
                  <p
                    style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }}
                    className="text-base italic leading-relaxed mb-4"
                  >
                    &quot;I thought everyone else already knew what they were doing. They didn&apos;t. Once I realized we were all figuring it out together, I stopped waiting for permission to participate.&quot;
                  </p>
                  <p style={{ color: '#C9A84C' }} className="text-xs uppercase tracking-widest">
                    — 2026 Delegate · Share your city/county to be named
                  </p>
                </StaggerItem>

                <StaggerItem
                  className="card-hover p-6 rounded-2xl"
                  style={{ backgroundColor: 'white', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', borderTop: '4px solid #1B2A4A' }}
                >
                  <p className="text-xs uppercase tracking-widest mb-3 text-gold-on-cream">
                    On Showing Up
                  </p>
                  <p
                    style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }}
                    className="text-base italic leading-relaxed mb-4"
                  >
                    &quot;The best advice I got was simple: raise your hand. Run for something. Sit with someone new at lunch. The week rewards the people who show up fully — titles optional.&quot;
                  </p>
                  <p style={{ color: '#C9A84C' }} className="text-xs uppercase tracking-widest">
                    — 2026 Delegate · Guest reflections welcome
                  </p>
                </StaggerItem>
              </StaggerContainer>

              <div className="rounded-2xl p-10 text-center relative overflow-hidden" style={{ backgroundColor: '#1B2A4A' }}>
                <div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{ background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }}
                  aria-hidden="true"
                />
                <p className="text-xs uppercase tracking-widest mb-6 text-gold-on-cream">
                  What We&apos;d Tell Our Pre-Girls State Selves
                </p>
                <p
                  style={{ color: 'white', fontFamily: '"Playfair Display", serif' }}
                  className="text-2xl md:text-3xl italic leading-relaxed mb-6"
                >
                  &quot;Just try your best for everything. Make the most out of it. Run for positions. Network with people. Talk to others. Show up. That&apos;s it. That&apos;s the whole guide.&quot;
                </p>
                <div style={{ backgroundColor: '#C9A84C' }} className="w-12 h-0.5 mx-auto mb-4" />
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  — Compiled from 2026 delegate reflections
                </p>
              </div>

              <div
                className="mt-12 text-center p-8 rounded-2xl"
                style={{ border: '2px dashed rgba(201,168,76,0.4)' }}
              >
                <p style={{ color: '#C9A84C' }} className="text-xs uppercase tracking-widest mb-3">
                  This Section Grows Over Time
                </p>
                <p style={{ color: '#2D2D2D', opacity: 0.78 }} className="text-sm leading-relaxed max-w-md mx-auto mb-5">
                  This guide is written by Inaaya Saif — and it&apos;s open to real delegate voices. If you have a story, tip, or reflection from Girls State, share it below. With your permission, it can live here for the next girl who needs it.
                </p>
                <a
                  href="#footer-share"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector('footer')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="inline-flex items-center px-5 py-3 rounded-full text-sm font-medium"
                  style={{ backgroundColor: '#1B2A4A', color: 'white', textDecoration: 'none', minHeight: 44 }}
                >
                  Share your story →
                </a>
              </div>
            </div>
          )}

          {activeTab === 'session' && (
            <div>
              <p className="text-xs uppercase tracking-widest mb-6 text-center" style={{ color: '#C9A84C' }}>
                Elected Leadership
              </p>
              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
                {officers.map((officer) => (
                  <StaggerItem
                    key={officer.role}
                    className="card-hover rounded-2xl p-6 text-center"
                    style={{ backgroundColor: 'white', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
                  >
                    <p className="text-xs uppercase tracking-widest mb-2" style={{ color: '#C9A84C' }}>
                      {officer.role}
                    </p>
                    <p
                      style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }}
                      className="text-lg font-bold"
                    >
                      {officer.name}
                    </p>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="card-hover rounded-2xl p-8" style={{ backgroundColor: '#1B2A4A' }}>
                  <p className="text-xs uppercase tracking-widest mb-3 text-gold-on-cream">
                    Supreme Court
                  </p>
                  <p
                    style={{ color: 'white', fontFamily: '"Playfair Display", serif' }}
                    className="text-xl font-bold mb-2"
                  >
                    Fingersh v. Harmen
                  </p>
                  <p className="text-sm leading-relaxed text-white opacity-70">
                    Presided by Chief Justice Payden Thibodeau
                  </p>
                </div>
                <div
                  className="card-hover rounded-2xl p-8"
                  style={{ backgroundColor: 'white', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
                >
                  <p className="text-xs uppercase tracking-widest mb-3 text-gold-on-cream">
                    Oratorical Contest Winner
                  </p>
                  <p
                    style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }}
                    className="text-xl font-bold"
                  >
                    Linda Frazier
                  </p>
                </div>
              </div>

              <div
                className="rounded-2xl p-8 mb-12"
                style={{ backgroundColor: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.35)' }}
              >
                <p className="text-xs uppercase tracking-widest mb-3 text-gold-on-cream">
                  Pre-Registration Spotlight
                </p>
                <p className="text-sm leading-relaxed mb-3" style={{ color: '#1B2A4A' }}>
                  Presented by the Secretary of State: <strong>66 delegates</strong> pre-registered in just one hour —
                  about <strong>15%</strong> of the Girls State population.
                </p>
                <p
                  style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }}
                  className="text-lg italic leading-relaxed"
                >
                  Only 59.3% of women actually vote — so vote like your future depends on it. Because it does.
                </p>
              </div>

              <p className="text-xs uppercase tracking-widest mb-6 text-center" style={{ color: '#C9A84C' }}>
                Bills Passed &amp; Signed into Law
              </p>
              <StaggerContainer className="space-y-3 mb-10">
                {bills.map((bill) => (
                  <StaggerItem
                    key={bill.name}
                    className="card-hover flex items-start gap-3 p-4 rounded-xl"
                    style={{ backgroundColor: 'white', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}
                  >
                    <span style={{ color: '#C9A84C' }} className="mt-0.5">✓</span>
                    <div>
                      <p className="text-sm font-medium" style={{ color: '#1B2A4A' }}>{bill.name}</p>
                      <p className="text-xs mt-1" style={{ color: '#2D2D2D', opacity: 0.5 }}>
                        {bill.delegate} · City of {bill.city}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              <p className="text-center text-xs leading-relaxed" style={{ color: '#2D2D2D', opacity: 0.5 }}>
                All information sourced directly from the official 2026 ALA California Girls State Closing Ceremony program.
              </p>
            </div>
          )}
        </div>
      </section>
    </FadeInSection>
  )
}
