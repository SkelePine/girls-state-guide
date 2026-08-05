import FadeInSection, { StaggerContainer, StaggerItem } from './FadeInSection'

export default function HowToApply() {
    const steps = [
      {
        number: '01',
        title: 'Check Your Eligibility',
        content: 'Currently enrolled in 11th grade at a California high school. Upper half of your class academically. Demonstrated leadership, character, and interest in government. No prior government experience required.',
      },
      {
        number: '02',
        title: 'Find Your ALA Unit',
        content: 'Each high school is sponsored by a local American Legion Auxiliary (ALA) Unit. Ask your school counselor if your school is already sponsored, or search the unit finder at cagirlsstate.org.',
      },
      {
        number: '03',
        title: 'Apply Through Your School',
        content: 'Each unit runs its own selection process — typically a written application, interview, and transcript review. One Delegate + 1st Alternate + 2nd Alternate are selected per school.',
      },
      {
        number: '04',
        title: 'If You\'re an Alternate',
        content: 'Don\'t count yourself out. Every year, alternates attend. If you\'re selected as a 1st or 2nd Alternate, stay ready. Keep your bags packed.',
      },
      {
        number: '05',
        title: 'Understand the Costs',
        content: 'The total program cost is approximately $500–$575 per delegate — almost entirely covered by your sponsoring ALA unit. You may have a small transportation cost.',
      },
      {
        number: '06',
        title: 'Apply for the Samsung Scholarship',
        content: 'Open to delegates who are direct descendants of wartime U.S. military veterans. Must be submitted before or on Day 1 of your session — no extensions. Awards range from $1,250 to $10,000. Start early.',
      },
    ]
  
    const links = [
      { label: 'Official Girls State Site', url: 'https://www.cagirlsstate.org' },
      { label: 'Find Your ALA Unit', url: 'https://www.cagirlsstate.org/delegates-alternates' },
      { label: 'Samsung Scholarship', url: 'https://www.legion.org/get-involved/scholarships/samsung-american-legion-scholarship' },
      { label: 'GSAF Alumnae Foundation', url: 'https://www.cagsaf.org' },
      { label: 'ALA Department of California', url: 'https://calegionaux.org' },
    ]
  
    return (
      <FadeInSection>
      <section id="apply" style={{ backgroundColor: '#FAF7F2' }} className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
  
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest mb-3" style={{ color: '#C9A84C' }}>
              Step One
            </p>
            <h2 style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }}
                className="text-4xl md:text-5xl font-bold mb-4">
              How to Apply
            </h2>
            <p style={{ color: '#2D2D2D', opacity: 0.65 }} className="max-w-xl mx-auto">
              Before you can experience Girls State, you have to get there. Here's exactly how the selection process works.
            </p>
          </div>
  
          {/* Steps */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {steps.map((step) => (
              <StaggerItem key={step.number} className="flex gap-6 p-6 rounded-xl"
                   style={{ backgroundColor: 'white', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
                <div className="flex-shrink-0">
                  <span style={{ color: '#C9A84C', fontFamily: '"Playfair Display", serif' }}
                        className="text-3xl font-bold">{step.number}</span>
                </div>
                <div>
                  <h3 style={{ color: '#1B2A4A' }} className="font-semibold text-lg mb-2">{step.title}</h3>
                  <p style={{ color: '#2D2D2D', opacity: 0.7 }} className="text-sm leading-relaxed">{step.content}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
  
          {/* Key Links */}
          <div style={{ backgroundColor: '#1B2A4A' }} className="rounded-2xl p-8">
            <p className="text-sm uppercase tracking-widest mb-6 text-center" style={{ color: '#C9A84C' }}>
              Key Links
            </p>
            <StaggerContainer className="flex flex-wrap justify-center gap-4">
              {links.map((link) => (
                <StaggerItem key={link.label}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer"
                     style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(201,168,76,0.4)' }}
                     className="px-5 py-2 rounded-full text-sm hover:opacity-80 transition-opacity inline-block">
                    {link.label} →
                  </a>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
  
        </div>
      </section>
      </FadeInSection>
    )
  }