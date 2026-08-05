import FadeInSection, { StaggerContainer, StaggerItem } from './FadeInSection'
import IconBadge from './IconBadge'

export default function HowItWorks() {
    const counties = [
      { name: 'Marshall County', type: 'Farming Community', icon: '🌾' },
      { name: 'Dorsey County', type: 'Urban Community', icon: '🏙️' },
      { name: 'Brown County', type: 'Desert-Mountain Community', icon: '⛰️' },
      { name: 'McMahon County', type: 'Coastal-Border Community', icon: '🌊' },
    ]
  
    const parties = [
      {
        color: '#1B2A4A',
        name: '🔵 Nationalist Party',
        points: [
          'Randomly assigned — not chosen',
          'Builds its own platform from scratch',
          'Holds its own conventions & rallies',
          'Elects its own party leadership',
          'Selects a Keynote Speaker',
        ],
      },
      {
        color: '#8B1A1A',
        name: '🔴 Federalist Party',
        points: [
          'Randomly assigned — not chosen',
          'Builds its own platform from scratch',
          'Holds its own conventions & rallies',
          'Elects its own party leadership',
          'Selects a Keynote Speaker',
        ],
      },
    ]
  
    const paperColors = [
      { color: '#4CAF50', label: 'Green', meaning: 'City forms' },
      { color: '#FFC107', label: 'Yellow', meaning: 'County forms' },
      { color: '#F5F5F5', label: 'White', meaning: 'State non-partisan' },
      { color: '#E91E8C', label: 'Pink', meaning: 'Federalist party' },
      { color: '#2196F3', label: 'Blue', meaning: 'Nationalist party' },
    ]
  
    return (
      <FadeInSection>
      <section id="structure" style={{ backgroundColor: '#FAF7F2' }} className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
  
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-widest mb-3" style={{ color: '#C9A84C' }}>
              The Structure
            </p>
            <h2 style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }}
                className="text-4xl md:text-5xl font-bold mb-4">
              How It All Works
            </h2>
            <p style={{ color: '#2D2D2D', opacity: 0.65 }} className="text-sm leading-relaxed max-w-xl mx-auto">
              Girls State has its own government, its own parties, its own cities. It sounds complicated — and honestly, it kind of is at first. Here's the breakdown.
            </p>
          </div>
  
          {/* Three Level Pyramid */}
          <div className="mb-16">
            <p className="text-center text-xs uppercase tracking-widest mb-8" style={{ color: '#C9A84C' }}>
              Three Levels of Government
            </p>
            <StaggerContainer className="flex flex-col gap-4 max-w-2xl mx-auto">
              {[
                { level: 'State Level', desc: 'Governor · Legislature · Courts · State Officers', width: 'w-full', opacity: 1 },
                { level: 'County Level', desc: 'County Officials · Superior Court · School Board', width: 'w-4/5', opacity: 0.85 },
                { level: 'City Level', desc: 'Your home base · Your squad · Your first elections', width: 'w-3/5', opacity: 0.7 },
              ].map((tier) => (
                <StaggerItem key={tier.level} className={`${tier.width} mx-auto`}>
                  <div className="rounded-xl p-5 text-center"
                       style={{ backgroundColor: '#1B2A4A', opacity: tier.opacity }}>
                    <p style={{ color: '#C9A84C' }} className="font-bold text-xs uppercase tracking-widest mb-1">
                      {tier.level}
                    </p>
                    <p className="text-white text-xs opacity-70">{tier.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
  
          {/* Four Counties */}
          <div className="mb-16">
            <p className="text-center text-xs uppercase tracking-widest mb-8" style={{ color: '#C9A84C' }}>
              The Four Counties
            </p>
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {counties.map((county) => (
                <StaggerItem key={county.name} className="card-hover rounded-xl p-6 text-center"
                     style={{ backgroundColor: 'white', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
                  <IconBadge size="lg" variant="gold" className="mb-3 mx-auto">{county.icon}</IconBadge>
                  <p style={{ color: '#1B2A4A' }} className="font-bold text-sm mb-1">{county.name}</p>
                  <p style={{ color: '#2D2D2D', opacity: 0.6 }} className="text-xs">{county.type}</p>
                </StaggerItem>
              ))}
            </StaggerContainer>
            <p className="text-center text-xs mt-4" style={{ color: '#2D2D2D', opacity: 0.5 }}>
              Each city has approximately 30 delegates. Cities are named after notable figures.
            </p>
          </div>
  
          {/* Two Parties */}
          <div className="mb-16">
            <p className="text-center text-xs uppercase tracking-widest mb-4" style={{ color: '#C9A84C' }}>
              The Two Parties
            </p>
            <p className="text-center text-sm leading-relaxed mb-8" style={{ color: '#2D2D2D', opacity: 0.65 }}>
              You don't choose your party — it's randomly assigned. And that's kind of the point.
            </p>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {parties.map((party) => (
                <StaggerItem key={party.name} className="card-hover rounded-xl p-6"
                     style={{ backgroundColor: 'white', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', borderTop: `4px solid ${party.color}` }}>
                  <h3 style={{ color: party.color, fontFamily: '"Playfair Display", serif' }} className="font-bold text-lg mb-4">{party.name}</h3>
                  <ul className="space-y-2">
                    {party.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm" style={{ color: '#2D2D2D', opacity: 0.75 }}>
                        <span style={{ color: '#C9A84C' }}>✓</span> {point}
                      </li>
                    ))}
                  </ul>
                </StaggerItem>
              ))}
            </StaggerContainer>
            <div className="mt-4 p-4 rounded-xl text-center"
                 style={{ backgroundColor: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.3)' }}>
              <p className="text-sm leading-relaxed" style={{ color: '#1B2A4A' }}>
                ⚠️ Neither party is tied to real-world political parties. Both are fictional and nonpartisan.
              </p>
            </div>
          </div>
  
          {/* Paper Color System */}
          <div>
            <p className="text-center text-xs uppercase tracking-widest mb-8" style={{ color: '#C9A84C' }}>
              The Paper Color System — You'll Use This Constantly
            </p>
            <StaggerContainer className="flex flex-wrap justify-center gap-4">
              {paperColors.map((paper) => (
                <StaggerItem key={paper.label} className="flex items-center gap-3 px-5 py-3 rounded-full"
                     style={{ backgroundColor: 'white', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                  <div className="w-4 h-4 rounded-full border border-gray-200"
                       style={{ backgroundColor: paper.color }}></div>
                  <span className="text-sm font-medium" style={{ color: '#1B2A4A' }}>{paper.label}</span>
                  <span className="text-xs" style={{ color: '#2D2D2D', opacity: 0.6 }}>= {paper.meaning}</span>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
  
        </div>
      </section>
      </FadeInSection>
    )
  }