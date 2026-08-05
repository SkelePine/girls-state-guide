import FadeInSection, { StaggerContainer, StaggerItem } from './FadeInSection'
import IconBadge from './IconBadge'

export default function Traditions() {
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
      <section id="traditions" style={{ backgroundColor: '#1B2A4A' }} className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
  
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-widest mb-3" style={{ color: '#C9A84C' }}>
              The Culture
            </p>
            <h2 style={{ color: 'white', fontFamily: '"Playfair Display", serif' }}
                className="text-4xl md:text-5xl font-bold mb-4">
              Traditions & Ceremonies
            </h2>
            <p className="text-white opacity-60 text-sm leading-relaxed max-w-xl mx-auto">
              Girls State has a culture all its own. Songs, chants, ceremonies, and moments you won't find anywhere else.
            </p>
          </div>
  
          {/* Party Chants */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <StaggerItem className="card-hover rounded-2xl p-8 text-center"
                 style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: '2px solid rgba(201,168,76,0.4)' }}>
              <p className="text-xs uppercase tracking-widest mb-4" style={{ color: '#C9A84C' }}>
                🔵 Nationalist Party Chant
              </p>
              <p style={{ color: 'white', fontFamily: '"Playfair Display", serif' }}
                 className="text-xl italic leading-relaxed">
                "Red, White, Blue —<br />
                Nationalists coming through!<br />
                Stand up, get loud,<br />
                Nationalists make us proud!"
              </p>
            </StaggerItem>
            <StaggerItem className="card-hover rounded-2xl p-8 text-center"
                 style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: '2px solid rgba(255,255,255,0.15)' }}>
              <p className="text-xs uppercase tracking-widest mb-4" style={{ color: '#C9A84C' }}>
                🔴 Federalist Party Chant
              </p>
              <p style={{ color: 'white', fontFamily: '"Playfair Display", serif' }}
                 className="text-xl italic leading-relaxed opacity-70">
                Your party will teach you on Day 1.<br />
                <span className="text-sm not-italic">Every year the chant evolves — it's part of the tradition.</span>
              </p>
            </StaggerItem>
          </StaggerContainer>

          {/* Ceremonies Grid */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {ceremonies.map((item) => (
              <StaggerItem key={item.title} className="card-hover p-6 rounded-2xl"
                   style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <IconBadge size="lg" variant="gold" className="mb-3">{item.icon}</IconBadge>
                <h3 style={{ color: '#C9A84C', fontFamily: '"Playfair Display", serif' }} className="text-lg font-bold mb-1">{item.title}</h3>
                <p className="text-xs mb-3" style={{ color: '#C9A84C', opacity: 0.6 }}>{item.time}</p>
                <p className="text-white opacity-65 text-sm leading-relaxed">{item.desc}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Girls State Promise */}
          <div className="card-hover rounded-2xl p-10 text-center"
               style={{ backgroundColor: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.4)' }}>
            <p className="text-xs uppercase tracking-widest mb-6" style={{ color: '#C9A84C' }}>
              The Girls State Promise — Recited at the Closing Ceremony
            </p>
            <p style={{ color: 'white', fontFamily: '"Playfair Display", serif' }}
               className="text-lg md:text-xl italic leading-relaxed max-w-3xl mx-auto">
              "I, [state your name], a Citizen of California Girls State, promise to defend the Girls State Banner and all the things it represents against all evil which seeks to destroy them. Therefore, it will be my duty to constantly endeavor to promote and perpetuate true sisterhood and democracy to which all humanity is entitled. With God as my judge and justice as my motto, this is my promise from this day forward."
            </p>
            <div style={{ backgroundColor: '#C9A84C' }} className="w-12 h-0.5 mx-auto mt-6"></div>
          </div>
  
        </div>
      </section>
      </FadeInSection>
    )
  }