import { useHashTab } from '../hooks/useHashTab'
import FadeInSection, { StaggerContainer, StaggerItem } from './FadeInSection'
import IconBadge from './IconBadge'
import SectionTabs from './SectionTabs'

const tabs = [
  { id: 'connections', label: 'Making Connections' },
  { id: 'traditions', label: 'Traditions and Culture' },
]

export default function TheExperience() {
  const [activeTab, setActiveTab] = useHashTab('experience', 'connections', ['connections', 'traditions'])

  const tips = [
    {
      icon: '👋',
      title: 'Introduce Yourself First',
      desc: 'Don\'t wait for someone to come to you. Walk up, say your name, where you\'re from, and what office you\'re running for. Everyone is waiting for someone else to go first — be that person.',
    },
    {
      icon: '🍽️',
      title: 'Sit Next to Someone New at Every Meal',
      desc: 'Meals are one of the best networking opportunities of the week. Make it a rule: every meal, sit next to someone you haven\'t talked to yet.',
    },
    {
      icon: '📱',
      title: 'Exchange Instagram Handles in the Moment',
      desc: 'Don\'t wait until the last day. When you meet someone you connect with, exchange handles right then. The connections you make here are real — alumnae networks last decades.',
    },
    {
      icon: '📓',
      title: 'Write Down Names',
      desc: 'You\'ll meet hundreds of people. Write names in your notebook so you actually remember them. A name + one detail about them goes a long way.',
    },
    {
      icon: '🤝',
      title: 'Connect with Your Counselors',
      desc: 'Counselors are Girls State alumnae who\'ve been exactly where you are. They\'re there to support you, not just supervise you. Ask them questions. Tell them what you\'re going through.',
    },
    {
      icon: '🌐',
      title: 'Go Beyond Your City',
      desc: 'Your city is your home base, but don\'t stay there. For state offices you need signatures from multiple counties — use that as an excuse to meet people everywhere.',
    },
  ]

  const introvertTips = [
    'It\'s okay to take 10 minutes alone to recharge — your dorm room exists for a reason',
    'One-on-one conversations are your superpower — find them',
    'You don\'t have to be the loudest person to be the most memorable',
    'Find your people in your city first, then expand outward',
    'Ask questions instead of making statements — people love talking about themselves',
  ]

  const quotes = [
    {
      text: 'Everyone is in the same boat. Everyone gets split up from their friends, and everyone creates an amazing sisterhood with the new friends they make.',
      source: 'LAGS Alumna',
    },
    {
      text: 'It\'s OK to not feel like you fit in at first — you\'ll find your people by the end of the week.',
      source: 'Girls Nation Alumna',
    },
    {
      text: 'Don\'t be nervous to go up and talk to someone out of the blue! Everyone is new to this!',
      source: 'Girls Nation Alumna, 2026',
    },
    {
      text: 'It\'s easy to get imposter syndrome, but remember that you deserve to be here.',
      source: 'Girls Nation Alumna, 2026',
    },
    {
      text: 'Connect with women different from you — and stay connected!',
      source: 'Girls Nation Alumna, 1972',
    },
  ]

  const ceremonies = [
    {
      icon: '🚩',
      title: 'Flag Raising',
      time: 'Every morning at 7:15 AM',
      desc: 'Every morning begins with a formal flag raising ceremony. Stand tall, be present, put your phone away. By the end of the week, this becomes one of the most meaningful parts of the day.',
    },
    {
      icon: '🌅',
      title: 'Retreat',
      time: 'Every evening',
      desc: 'Every evening ends with retreat — the formal lowering of the flag. A solemn, structured tradition that bookends each day.',
    },
    {
      icon: '🎖️',
      title: 'POW/MIA Memorial Ceremony',
      time: 'Thursday evening',
      desc: 'One of the most emotional moments of the week. Honors prisoners of war and those missing in action. Be fully present. Put your phone away.',
    },
    {
      icon: '🏛️',
      title: 'Whistle Stop Tour',
      time: 'Before General Election',
      desc: 'Candidates for Governor, Lt. Governor, Attorney General, and Superintendent of Public Instruction travel to all four counties answering questions from delegates. Think of it as a live debate tour.',
    },
    {
      icon: '⚖️',
      title: 'Mock Superior Court Trial',
      time: 'Thursday, in each county',
      desc: 'Each county holds a real mock trial. The District Attorney prosecutes, the Public Defender defends, the Superior Court Judge presides, and delegates serve on the jury.',
    },
    {
      icon: '📜',
      title: 'Supreme Court Moot Court',
      time: 'During the session',
      desc: 'The Supreme Court Justices hear a First Amendment case argued by the Attorney General and opposing counsel. One of the most intellectually exciting events of the week.',
    },
    {
      icon: '🏙️',
      title: 'City Expo',
      time: 'During the session',
      desc: 'Cities showcase their work, ordinances, service projects, and community identity. A chance to see what every city has built throughout the week.',
    },
    {
      icon: '🎭',
      title: 'Talent Show',
      time: 'During the session',
      desc: 'Cities organize acts for the talent show — one of the most fun and memorable traditions. The Commissioner of Talent leads the charge.',
    },
    {
      icon: '✍️',
      title: 'Honor Flight Messages',
      time: 'Service Project',
      desc: 'All delegates participate in writing messages for veterans on upcoming Honor Flights — fulfilling the ALA\'s core mission of "Service Not Self."',
    },
  ]

  return (
    <FadeInSection>
      <section id="experience" style={{ backgroundColor: '#FAF7F2' }} className="py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-widest mb-3" style={{ color: '#C9A84C' }}>
              The Heart of It All
            </p>
            <h2
              style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            >
              The Experience
            </h2>
            <p style={{ color: '#2D2D2D', opacity: 0.65 }} className="text-sm leading-relaxed max-w-xl mx-auto">
              Sisterhood, traditions, and the culture that makes Girls State unforgettable.
            </p>
          </div>

          <div className="mb-2">
            <SectionTabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} variant="light" className="mb-0" />
          </div>

          {activeTab === 'connections' && (
            <div className="mt-8">
              <p style={{ color: '#2D2D2D', opacity: 0.65 }} className="text-sm max-w-2xl mx-auto leading-relaxed text-center mb-12">
                Girls State is 450 strangers becoming a community in 6 days. You can be really in everyone's face, or you can be more laid back — but as long as you make those connections with friends, counselors, and everyone around you, it'll be so much more memorable. Make that community.
              </p>

              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {tips.map((tip) => (
                  <StaggerItem
                    key={tip.title}
                    className="card-hover p-6 rounded-2xl"
                    style={{ backgroundColor: 'white', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
                  >
                    <IconBadge size="lg" variant="gold" className="mb-4">{tip.icon}</IconBadge>
                    <h3
                      style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }}
                      className="text-xl font-bold mb-2"
                    >
                      {tip.title}
                    </h3>
                    <p style={{ color: '#2D2D2D', opacity: 0.7 }} className="text-sm leading-relaxed">
                      {tip.desc}
                    </p>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <div className="card-hover rounded-2xl p-8" style={{ backgroundColor: '#1B2A4A' }}>
                  <h3
                    style={{ color: '#C9A84C', fontFamily: '"Playfair Display", serif' }}
                    className="text-2xl font-bold mb-2"
                  >
                    For Introverts
                  </h3>
                  <p className="text-white opacity-60 text-sm leading-relaxed mb-6">
                    You don't have to be the loudest person in the room to make an impact.
                  </p>
                  <StaggerContainer className="space-y-3">
                    {introvertTips.map((tip) => (
                      <StaggerItem key={tip} className="flex items-start gap-3 text-sm text-white opacity-70">
                        <span style={{ color: '#C9A84C' }} className="flex-shrink-0 mt-0.5">→</span>
                        {tip}
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
                    className="text-2xl font-bold mb-2"
                  >
                    Conversation Starters
                  </h3>
                  <p style={{ color: '#2D2D2D', opacity: 0.6 }} className="text-sm leading-relaxed mb-6">
                    When you don't know what to say, start here.
                  </p>
                  <StaggerContainer className="space-y-3">
                    {[
                      '"Where are you from?"',
                      '"What office are you running for?"',
                      '"Are you nervous too?"',
                      '"What\'s your city like?"',
                      '"What bill did you write?"',
                      '"What do you want to do after high school?"',
                    ].map((starter) => (
                      <StaggerItem key={starter} className="flex items-start gap-3">
                        <IconBadge size="sm" variant="gold">💬</IconBadge>
                        <span style={{ color: '#1B2A4A' }} className="text-sm italic">{starter}</span>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </div>
              </div>

              <div>
                <p className="text-center text-xs uppercase tracking-widest mb-8" style={{ color: '#C9A84C' }}>
                  From Real Delegates
                </p>
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {quotes.map((quote) => (
                    <StaggerItem
                      key={quote.source}
                      className="card-hover p-6 rounded-2xl"
                      style={{
                        backgroundColor: 'white',
                        boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                        borderLeft: '3px solid #C9A84C',
                      }}
                    >
                      <p
                        style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }}
                        className="text-sm italic leading-relaxed mb-3"
                      >
                        "{quote.text}"
                      </p>
                      <p style={{ color: '#C9A84C' }} className="text-xs uppercase tracking-widest">
                        — {quote.source}
                      </p>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </div>
          )}

          {activeTab === 'traditions' && (
            <div className="mt-8">
              <p style={{ color: '#2D2D2D', opacity: 0.65 }} className="text-sm leading-relaxed max-w-xl mx-auto text-center mb-12">
                Girls State has a culture all its own. Songs, chants, ceremonies, and moments you won't find anywhere else.
              </p>

              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                <StaggerItem
                  className="card-hover rounded-2xl p-8 text-center"
                  style={{ backgroundColor: '#1B2A4A', border: '2px solid rgba(201,168,76,0.4)' }}
                >
                  <p className="text-xs uppercase tracking-widest mb-4" style={{ color: '#C9A84C' }}>
                    🔵 Nationalist Party Chant
                  </p>
                  <p
                    style={{ color: 'white', fontFamily: '"Playfair Display", serif' }}
                    className="text-xl italic leading-relaxed opacity-70"
                  >
                    Your party will teach you on Day 1.<br />
                    <span className="text-sm not-italic">Every year the chant evolves — it&apos;s part of the tradition.</span>
                  </p>
                </StaggerItem>
                <StaggerItem
                  className="card-hover rounded-2xl p-8 text-center"
                  style={{ backgroundColor: '#1B2A4A', border: '2px solid rgba(255,255,255,0.15)' }}
                >
                  <p className="text-xs uppercase tracking-widest mb-4" style={{ color: '#C9A84C' }}>
                    🔴 Federalist Party Chant
                  </p>
                  <p
                    style={{ color: 'white', fontFamily: '"Playfair Display", serif' }}
                    className="text-xl italic leading-relaxed opacity-70"
                  >
                    Your party will teach you on Day 1.<br />
                    <span className="text-sm not-italic">Every year the chant evolves — it&apos;s part of the tradition.</span>
                  </p>
                </StaggerItem>
              </StaggerContainer>

              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
                {ceremonies.map((item) => (
                  <StaggerItem
                    key={item.title}
                    className="card-hover p-6 rounded-2xl"
                    style={{ backgroundColor: '#1B2A4A', border: '1px solid rgba(255,255,255,0.08)' }}
                  >
                    <IconBadge size="lg" variant="gold" className="mb-3">{item.icon}</IconBadge>
                    <h3
                      style={{ color: '#C9A84C', fontFamily: '"Playfair Display", serif' }}
                      className="text-lg font-bold mb-1"
                    >
                      {item.title}
                    </h3>
                    <p className="text-xs mb-3" style={{ color: '#C9A84C', opacity: 0.6 }}>{item.time}</p>
                    <p className="text-white opacity-65 text-sm leading-relaxed">{item.desc}</p>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              <div
                className="card-hover rounded-2xl p-10 text-center"
                style={{ backgroundColor: '#1B2A4A', border: '1px solid rgba(201,168,76,0.4)' }}
              >
                <p className="text-xs uppercase tracking-widest mb-6" style={{ color: '#C9A84C' }}>
                  The Girls State Promise — Recited at the Closing Ceremony
                </p>
                <p
                  style={{ color: 'white', fontFamily: '"Playfair Display", serif' }}
                  className="text-lg md:text-xl italic leading-relaxed max-w-3xl mx-auto"
                >
                  "I, [state your name], a Citizen of California Girls State, promise to defend the Girls State Banner and all the things it represents against all evil which seeks to destroy them. Therefore, it will be my duty to constantly endeavor to promote and perpetuate true sisterhood and democracy to which all humanity is entitled. With God as my judge and justice as my motto, this is my promise from this day forward."
                </p>
                <div style={{ backgroundColor: '#C9A84C' }} className="w-12 h-0.5 mx-auto mt-6"></div>
              </div>
            </div>
          )}
        </div>
      </section>
    </FadeInSection>
  )
}
