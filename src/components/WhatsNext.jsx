import { useHashTab } from '../hooks/useHashTab'
import FadeInSection, { StaggerContainer, StaggerItem } from './FadeInSection'
import IconBadge from './IconBadge'
import SectionTabs from './SectionTabs'

const tabs = [
  { id: 'after', label: 'After Girls State' },
  { id: 'girlsnation', label: 'Girls Nation' },
]

export default function WhatsNext() {
  const [activeTab, setActiveTab] = useHashTab('next', 'after', ['after', 'girlsnation'])

  const whatHappens = [
    { icon: '🏛️', text: 'Nationalist and Federalist parties — same structure as Girls State' },
    { icon: '📜', text: 'Write and debate national-level legislation in the Senate chamber' },
    { icon: '🗳️', text: 'Elect a Girls Nation President and Vice President' },
    { icon: '🏠', text: 'Visit the White House, Capitol Hill, and D.C. monuments' },
    { icon: '⚰️', text: 'Changing of the Guard at Arlington National Cemetery' },
    { icon: '🌎', text: 'Form a national network with delegates from all 50 states' },
  ]

  const howToStandOut = [
    { step: '01', title: 'Be Genuinely Engaged', desc: 'Counselors notice authentic participation — not performance. Show up fully to every session, city meeting, and assembly.' },
    { step: '02', title: 'Run for Office', desc: 'Especially state-level offices. The selection process considers your participation and leadership throughout the week.' },
    { step: '03', title: 'Write a Strong Bill', desc: 'Submit your bill before the session begins. A well-researched, clearly written bill demonstrates exactly the kind of civic engagement Girls Nation looks for.' },
    { step: '04', title: 'Build Relationships Across Counties', desc: 'Don\'t just stay in your city. The Girls Nation selection involves peer nominations — the more people who know and respect you, the better.' },
    { step: '05', title: 'Speak Up in Sessions', desc: 'Participate in floor debates, ask questions in assemblies, and contribute meaningfully to your party\'s platform.' },
    { step: '06', title: 'Lead Without a Title', desc: 'Some of the most impactful delegates at Girls State never win an election. Leadership is about how you show up — not what\'s on your badge.' },
  ]

  const immediate = [
    { task: 'Connect with new friends on Instagram/LinkedIn before you lose momentum', urgent: true },
    { task: 'Write down your memories while they\'re fresh — you\'ll want them later', urgent: false },
    { task: 'Share your experience with your school (you\'re encouraged to present back)', urgent: false },
  ]

  const withinMonth = [
    { task: 'Add Girls State to your college application activities list', link: null },
    { task: 'Apply for GSAF Scholarships ($4,000/year available to alumnae)', link: 'https://www.cagsaf.org' },
    { task: 'Apply for GSAF Internships (paid media or operations internships)', link: 'https://www.cagsaf.org' },
    { task: 'Join the alumnae Facebook and LinkedIn groups', link: null },
    { task: 'Consider joining the American Legion Auxiliary if eligible', link: 'https://calegionaux.org' },
  ]

  const longTerm = [
    { icon: '🎓', title: 'Volunteer as a Counselor', desc: 'Must be 20+ or 3 years post-high school. Email ALACAGSChief@gmail.com to express interest.' },
    { icon: '💛', title: 'Donate', desc: 'It costs ~$575 to send one delegate. Help future delegates attend by donating to your local ALA unit or GSAF.' },
    { icon: '🔗', title: 'Stay Connected', desc: 'Join the GSAF alumnae network on Facebook and LinkedIn. The connections you made this week can last a lifetime.' },
    { icon: '📣', title: 'Spread the Word', desc: 'Go back to your high school and tell people about Girls State. You were one delegate per school — help the next one get selected.' },
  ]

  return (
    <FadeInSection>
      <section id="next" style={{ backgroundColor: '#FAF7F2' }} className="py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-widest mb-3" style={{ color: '#C9A84C' }}>
              Looking Ahead
            </p>
            <h2
              style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            >
              What Is Next
            </h2>
            <p style={{ color: '#2D2D2D', opacity: 0.65 }} className="text-sm leading-relaxed max-w-xl mx-auto">
              Girls Nation and life after the week — what comes next for delegates.
            </p>
          </div>

          <div className="mb-2">
            <SectionTabs
              tabs={tabs}
              activeTab={activeTab}
              onChange={setActiveTab}
              variant="light"
              className="mb-0"
            />
          </div>

          {activeTab === 'girlsnation' && (
            <div className="mt-8">
              <p style={{ color: '#2D2D2D', opacity: 0.65 }} className="text-sm leading-relaxed max-w-xl mx-auto text-center mb-12">
                Two delegates from California are selected to represent the state at ALA Girls Nation in Washington, D.C. in July. It's the national version of Girls State — and it's announced at the Closing Ceremony.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <div className="card-hover rounded-2xl p-8" style={{ backgroundColor: '#1B2A4A' }}>
                  <h3
                    style={{ color: '#C9A84C', fontFamily: '"Playfair Display", serif' }}
                    className="text-2xl font-bold mb-6"
                  >
                    What Happens There
                  </h3>
                  <StaggerContainer className="space-y-4">
                    {whatHappens.map((item) => (
                      <StaggerItem key={item.text} className="flex items-start gap-3">
                        <IconBadge size="sm" variant="light">{item.icon}</IconBadge>
                        <span className="text-white opacity-70 text-sm">{item.text}</span>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </div>

                <div
                  className="card-hover rounded-2xl p-8"
                  style={{ backgroundColor: 'white', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
                >
                  <h3
                    style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }}
                    className="text-2xl font-bold mb-4"
                  >
                    How Selection Works
                  </h3>
                  <p style={{ color: '#2D2D2D', opacity: 0.7 }} className="text-sm leading-relaxed mb-4">
                    Two delegates from California are selected through a combination of peer nominations, staff observation, and interviews throughout the week. The selection is announced at the Closing Ceremony on the final day.
                  </p>
                  <p style={{ color: '#2D2D2D', opacity: 0.7 }} className="text-sm leading-relaxed mb-4">
                    There is no single formula for selection. Counselors and staff observe delegates throughout the entire week — in city meetings, floor sessions, party conventions, and informal interactions.
                  </p>
                  <div
                    className="p-4 rounded-xl"
                    style={{ backgroundColor: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.3)' }}
                  >
                    <p className="text-sm leading-relaxed" style={{ color: '#1B2A4A' }}>
                      💡 The delegates selected for Girls Nation are not always the ones who won the most elections. They're the ones who showed the most genuine leadership, engagement, and character throughout the week.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-16">
                <p className="text-center text-xs uppercase tracking-widest mb-8" style={{ color: '#C9A84C' }}>
                  How to Position Yourself
                </p>
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {howToStandOut.map((item) => (
                    <StaggerItem
                      key={item.step}
                      className="card-hover p-6 rounded-2xl"
                      style={{ backgroundColor: 'white', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
                    >
                      <p
                        style={{ color: '#C9A84C', fontFamily: '"Playfair Display", serif' }}
                        className="text-3xl font-bold mb-3"
                      >
                        {item.step}
                      </p>
                      <h4
                        style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }}
                        className="text-base font-bold mb-2"
                      >
                        {item.title}
                      </h4>
                      <p style={{ color: '#2D2D2D', opacity: 0.7 }} className="text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>

              <div className="card-hover rounded-2xl p-8" style={{ backgroundColor: '#1B2A4A' }}>
                <p className="text-xs uppercase tracking-widest mb-4 text-center" style={{ color: '#C9A84C' }}>
                  On Your College Application
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-white font-semibold mb-2">Girls State</p>
                    <p className="text-white opacity-60 text-sm leading-relaxed">
                      One of 450 delegates selected from 556,000 California high school juniors — one per high school. Week-long civic leadership program simulating state government. Ran for office, wrote and debated legislation.
                    </p>
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-2">Girls Nation ⭐</p>
                    <p className="text-white opacity-60 text-sm leading-relaxed">
                      One of 2 delegates selected from California (100 total nationally) to represent the state at ALA Girls Nation in Washington, D.C. Participated in national Senate sessions, visited the White House and Capitol Hill.
                    </p>
                  </div>
                </div>
                <p className="text-center text-xs mt-6 text-white opacity-30">
                  Both belong prominently on your Common App activities section.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'after' && (
            <div className="mt-8 max-w-5xl mx-auto">
              <p style={{ color: '#2D2D2D', opacity: 0.65 }} className="text-sm leading-relaxed max-w-xl mx-auto text-center mb-12">
                The experience doesn't end when the bus pulls away. Here's how to make the most of everything that comes next.
              </p>

              <div className="mb-12">
                <p className="text-xs uppercase tracking-widest mb-6" style={{ color: '#C9A84C' }}>
                  Right After — Do These First
                </p>
                <StaggerContainer className="space-y-3">
                  {immediate.map((item) => (
                    <StaggerItem
                      key={item.task}
                      className="card-hover flex items-start gap-4 p-5 rounded-xl"
                      style={{
                        backgroundColor: 'white',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                        borderLeft: item.urgent ? '4px solid #C9A84C' : '4px solid #E5E7EB',
                      }}
                    >
                      <div
                        className="flex-shrink-0 w-5 h-5 rounded border-2 mt-0.5"
                        style={{ borderColor: '#C9A84C' }}
                      ></div>
                      <div>
                        <p style={{ color: '#1B2A4A' }} className="text-sm leading-relaxed">{item.task}</p>
                        {item.urgent && (
                          <span
                            className="text-xs px-2 py-0.5 rounded-full mt-1 inline-block"
                            style={{ backgroundColor: 'rgba(201,168,76,0.15)', color: '#C9A84C' }}
                          >
                            Time-sensitive
                          </span>
                        )}
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>

              <div className="mb-12">
                <p className="text-xs uppercase tracking-widest mb-6" style={{ color: '#C9A84C' }}>
                  Within the Month
                </p>
                <StaggerContainer className="space-y-3">
                  {withinMonth.map((item) => (
                    <StaggerItem
                      key={item.task}
                      className="card-hover flex items-start gap-4 p-5 rounded-xl"
                      style={{ backgroundColor: 'white', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}
                    >
                      <div
                        className="flex-shrink-0 w-5 h-5 rounded border-2 mt-0.5"
                        style={{ borderColor: '#D1D5DB' }}
                      ></div>
                      <div className="flex-1 flex items-center justify-between gap-4">
                        <p style={{ color: '#1B2A4A' }} className="text-sm leading-relaxed">{item.task}</p>
                        {item.link && (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs flex-shrink-0 px-3 py-1 rounded-full transition-opacity hover:opacity-75"
                            style={{ backgroundColor: '#1B2A4A', color: 'white' }}
                          >
                            Visit →
                          </a>
                        )}
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>

              <div className="card-hover rounded-2xl p-8 mb-12" style={{ backgroundColor: '#1B2A4A' }}>
                <p className="text-xs uppercase tracking-widest mb-4" style={{ color: '#C9A84C' }}>
                  How to List It on College Applications
                </p>
                <div className="rounded-xl p-5" style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}>
                  <p className="text-white opacity-50 text-xs uppercase tracking-widest mb-2">Activity Name</p>
                  <p className="text-white font-medium mb-4">ALA California Girls State Delegate</p>
                  <p className="text-white opacity-50 text-xs uppercase tracking-widest mb-2">Description</p>
                  <p className="text-white opacity-75 text-sm leading-relaxed">
                    One of 450 delegates selected from 556,000 CA high school juniors (one per high school) for week-long civic leadership program at UC Riverside; simulated state government, ran for multiple offices, wrote and debated legislation.
                  </p>
                  <p className="text-white opacity-40 text-xs mt-3 italic">
                    Add your specific roles: Nationalist Party Keynote Speaker, City Commissioner, District Attorney candidate, etc.
                  </p>
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest mb-6" style={{ color: '#C9A84C' }}>
                  Long Term — Pay It Forward
                </p>
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {longTerm.map((item) => (
                    <StaggerItem
                      key={item.title}
                      className="card-hover p-6 rounded-2xl"
                      style={{ backgroundColor: 'white', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
                    >
                      <IconBadge size="lg" variant="gold" className="mb-3">{item.icon}</IconBadge>
                      <h4
                        style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }}
                        className="text-base font-bold mb-2"
                      >
                        {item.title}
                      </h4>
                      <p style={{ color: '#2D2D2D', opacity: 0.7 }} className="text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </div>
          )}
        </div>
      </section>
    </FadeInSection>
  )
}
