import FadeInSection, { StaggerContainer, StaggerItem } from './FadeInSection'

export default function GirlsNation() {
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
  
    return (
      <FadeInSection>
      <section id="girlsnation" style={{ backgroundColor: '#FAF7F2' }} className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
  
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest mb-3" style={{ color: '#C9A84C' }}>
              The Next Level
            </p>
            <h2 style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }}
                className="text-4xl md:text-5xl font-bold mb-4">
              Girls Nation
            </h2>
            <p style={{ color: '#2D2D2D', opacity: 0.65 }} className="max-w-xl mx-auto">
              Two delegates from California are selected to represent the state at ALA Girls Nation in Washington, D.C. in July. It's the national version of Girls State — and it's announced at the Closing Ceremony.
            </p>
          </div>
  
          {/* What / How Split */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
  
            {/* What Is It */}
            <div className="rounded-2xl p-8" style={{ backgroundColor: '#1B2A4A' }}>
              <h3 style={{ color: '#C9A84C', fontFamily: '"Playfair Display", serif' }}
                  className="text-2xl font-bold mb-6">What Happens There</h3>
              <StaggerContainer className="space-y-4">
                {whatHappens.map((item) => (
                  <StaggerItem key={item.text} className="flex items-start gap-3">
                    <span className="text-xl flex-shrink-0">{item.icon}</span>
                    <span className="text-white opacity-70 text-sm">{item.text}</span>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
  
            {/* Selection */}
            <div className="rounded-2xl p-8"
                 style={{ backgroundColor: 'white', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
              <h3 style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }}
                  className="text-2xl font-bold mb-4">How Selection Works</h3>
              <p style={{ color: '#2D2D2D', opacity: 0.7 }} className="text-sm leading-relaxed mb-4">
                Two delegates from California are selected through a combination of peer nominations, staff observation, and interviews throughout the week. The selection is announced at the Closing Ceremony on the final day.
              </p>
              <p style={{ color: '#2D2D2D', opacity: 0.7 }} className="text-sm leading-relaxed mb-4">
                There is no single formula for selection. Counselors and staff observe delegates throughout the entire week — in city meetings, floor sessions, party conventions, and informal interactions.
              </p>
              <div className="p-4 rounded-xl"
                   style={{ backgroundColor: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.3)' }}>
                <p className="text-sm" style={{ color: '#1B2A4A' }}>
                  💡 The delegates selected for Girls Nation are not always the ones who won the most elections. They're the ones who showed the most genuine leadership, engagement, and character throughout the week.
                </p>
              </div>
            </div>
          </div>
  
          {/* How to Stand Out */}
          <div className="mb-16">
            <p className="text-center text-sm uppercase tracking-widest mb-8" style={{ color: '#C9A84C' }}>
              How to Position Yourself
            </p>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {howToStandOut.map((item) => (
                <StaggerItem key={item.step} className="p-6 rounded-2xl"
                     style={{ backgroundColor: 'white', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
                  <p style={{ color: '#C9A84C', fontFamily: '"Playfair Display", serif' }}
                     className="text-3xl font-bold mb-3">{item.step}</p>
                  <h4 style={{ color: '#1B2A4A' }} className="font-bold mb-2">{item.title}</h4>
                  <p style={{ color: '#2D2D2D', opacity: 0.7 }} className="text-sm leading-relaxed">{item.desc}</p>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
  
          {/* On Your College App */}
          <div className="rounded-2xl p-8" style={{ backgroundColor: '#1B2A4A' }}>
            <p className="text-sm uppercase tracking-widest mb-4 text-center" style={{ color: '#C9A84C' }}>
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
      </section>
      </FadeInSection>
    )
  }