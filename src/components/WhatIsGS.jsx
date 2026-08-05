import FadeInSection, { StaggerContainer, StaggerItem } from './FadeInSection'
import IconBadge from './IconBadge'

export default function WhatIsGS() {
    const cards = [
      {
        icon: '🏛️',
        title: 'The Short Version',
        text: 'ALA California Girls State is a week-long, nonpartisan leadership and civics program. Of California\'s 556,000 high school juniors, only 450 are chosen each year — one per high school. You come together to simulate an entire state government from scratch. You\'re not just learning about democracy. You\'re doing it.',
      },
      {
        icon: '🎖️',
        title: 'Who Runs It',
        text: 'The American Legion Auxiliary (ALA) — one of the largest veterans support organizations in the country. Founded on "Service Not Self," the ALA has run Girls State programs nationally since 1937. California\'s program began in 1940 with 125 delegates. The 2026 session was the 83rd.',
      },
      {
        icon: '📍',
        title: 'Where & When',
        text: 'Held every June for one week. The 2026 session (83rd) was held June 22–27 at the University of California, Riverside (UCR) campus. Location may vary by year — confirm with your ALA unit.',
      },
      {
        icon: '⚖️',
        title: 'The Mission',
        text: 'Four founding principles: Justice · Freedom · Democracy · Loyalty. Core value: Service Not Self. This isn\'t a competition or a camp. It\'s a simulation of real government — and you\'re a citizen of it.',
      },
    ]
  
    const alumnae = [
      'Jane Pauley', 'Ann Richards', 'Leeza Gibbons',
      'Lynne Cheney', 'Brigadier General Michelle Johnson',
    ]
  
    return (
      <FadeInSection>
      <section id="what" style={{ backgroundColor: '#1B2A4A' }} className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
  
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-widest mb-3" style={{ color: '#C9A84C' }}>
              The Basics
            </p>
            <h2 style={{ color: 'white', fontFamily: '"Playfair Display", serif' }}
                className="text-4xl md:text-5xl font-bold mb-4">
              What Is Girls State?
            </h2>
            <p className="text-white opacity-60 text-sm leading-relaxed max-w-xl mx-auto">
              Everything the acceptance letter didn't tell you.
            </p>
          </div>
  
          {/* Cards */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {cards.map((card) => (
              <StaggerItem key={card.title} style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(201,168,76,0.3)' }}
                   className="card-hover rounded-xl p-8 hover:border-yellow-400 transition-all duration-300">
                <IconBadge size="lg" variant="gold" className="mb-4">{card.icon}</IconBadge>
                <h3 style={{ color: '#C9A84C', fontFamily: '"Playfair Display", serif' }}
                    className="text-xl font-bold mb-3">{card.title}</h3>
                <p className="text-white opacity-70 leading-relaxed text-sm">{card.text}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
  
          {/* Pull Quote */}
          <div style={{ borderLeft: '4px solid #C9A84C' }} className="pl-8 mb-16 max-w-3xl mx-auto">
            <p style={{ color: 'white', fontFamily: '"Playfair Display", serif' }}
               className="text-2xl italic leading-relaxed mb-4">
              "I walked in not knowing a single person. I walked out with a city full of sisters, a speech I gave in front of hundreds of people, and a completely different idea of what I'm capable of."
            </p>
            <p style={{ color: '#C9A84C' }} className="text-xs uppercase tracking-widest">
              — 2026 Delegate, Gilbreth City, McMahon County
            </p>
          </div>
  
          {/* Notable Alumnae */}
          <div className="text-center">
            <p className="text-xs uppercase tracking-widest mb-6" style={{ color: '#C9A84C' }}>
              Notable Alumnae
            </p>
            <StaggerContainer className="flex flex-wrap justify-center gap-4">
              {alumnae.map((name) => (
                <StaggerItem key={name} style={{ backgroundColor: 'rgba(255,255,255,0.08)', color: 'white' }}
                      className="px-4 py-2 rounded-full text-sm">
                  {name}
                </StaggerItem>
              ))}
              <StaggerItem style={{ backgroundColor: 'rgba(255,255,255,0.08)', color: 'white' }}
                    className="px-4 py-2 rounded-full text-sm">
                + hundreds more
              </StaggerItem>
            </StaggerContainer>
          </div>
  
        </div>
      </section>
      </FadeInSection>
    )
  }