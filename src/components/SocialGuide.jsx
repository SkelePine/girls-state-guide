import FadeInSection, { StaggerContainer, StaggerItem } from './FadeInSection'

export default function SocialGuide() {
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
  
    return (
      <FadeInSection>
      <section id="social" style={{ backgroundColor: '#FAF7F2' }} className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
  
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest mb-3" style={{ color: '#C9A84C' }}>
              The Heart of It All
            </p>
            <h2 style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }}
                className="text-4xl md:text-5xl font-bold mb-4">
              Making Connections
            </h2>
            <p style={{ color: '#2D2D2D', opacity: 0.65 }} className="max-w-2xl mx-auto leading-relaxed">
              Girls State is 450 strangers becoming a community in 6 days. You can be really in everyone's face, or you can be more laid back — but as long as you make those connections with friends, counselors, and everyone around you, it'll be so much more memorable. Make that community.
            </p>
          </div>
  
          {/* Tips Grid */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {tips.map((tip) => (
              <StaggerItem key={tip.title} className="p-6 rounded-2xl"
                   style={{ backgroundColor: 'white', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
                <div className="text-3xl mb-4">{tip.icon}</div>
                <h3 style={{ color: '#1B2A4A' }} className="font-bold mb-2">{tip.title}</h3>
                <p style={{ color: '#2D2D2D', opacity: 0.7 }} className="text-sm leading-relaxed">{tip.desc}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
  
          {/* Introvert Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="rounded-2xl p-8" style={{ backgroundColor: '#1B2A4A' }}>
              <h3 style={{ color: '#C9A84C', fontFamily: '"Playfair Display", serif' }}
                  className="text-2xl font-bold mb-2">For Introverts</h3>
              <p className="text-white opacity-60 text-sm mb-6">
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
  
            <div className="rounded-2xl p-8"
                 style={{ backgroundColor: 'white', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
              <h3 style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }}
                  className="text-2xl font-bold mb-2">Conversation Starters</h3>
              <p style={{ color: '#2D2D2D', opacity: 0.6 }} className="text-sm mb-6">
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
                    <span style={{ color: '#C9A84C' }} className="flex-shrink-0 text-sm">💬</span>
                    <span style={{ color: '#1B2A4A' }} className="text-sm italic">{starter}</span>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
  
          {/* Quotes */}
          <div>
            <p className="text-center text-sm uppercase tracking-widest mb-8" style={{ color: '#C9A84C' }}>
              From Real Delegates
            </p>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {quotes.map((quote) => (
                <StaggerItem key={quote.source} className="p-6 rounded-2xl"
                     style={{ backgroundColor: 'white', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', borderLeft: '3px solid #C9A84C' }}>
                  <p style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }}
                     className="text-sm italic leading-relaxed mb-3">
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
      </section>
      </FadeInSection>
    )
  }