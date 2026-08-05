import FadeInSection, { StaggerContainer, StaggerItem } from './FadeInSection'
import IconBadge from './IconBadge'

export default function AfterGS() {
    const immediate = [
      { task: 'Connect with new friends on Instagram/LinkedIn before you lose momentum', urgent: true },
      { task: 'Apply for the Samsung Scholarship — must be submitted before or on Day 1 of your session. Do this BEFORE you go.', urgent: true },
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
      <section id="after" style={{ backgroundColor: '#FAF7F2' }} className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
  
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-widest mb-3" style={{ color: '#C9A84C' }}>
              The Week Is Over — Now What?
            </p>
            <h2 style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }}
                className="text-4xl md:text-5xl font-bold mb-4">
              After Girls State
            </h2>
            <p style={{ color: '#2D2D2D', opacity: 0.65 }} className="text-sm leading-relaxed max-w-xl mx-auto">
              The experience doesn't end when the bus pulls away. Here's how to make the most of everything that comes next.
            </p>
          </div>
  
          {/* Immediate Actions */}
          <div className="mb-12">
            <p className="text-xs uppercase tracking-widest mb-6" style={{ color: '#C9A84C' }}>
              Right After — Do These First
            </p>
            <StaggerContainer className="space-y-3">
              {immediate.map((item) => (
                <StaggerItem key={item.task} className="card-hover flex items-start gap-4 p-5 rounded-xl"
                     style={{
                       backgroundColor: 'white',
                       boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                       borderLeft: item.urgent ? '4px solid #C9A84C' : '4px solid #E5E7EB',
                     }}>
                  <div className="flex-shrink-0 w-5 h-5 rounded border-2 mt-0.5"
                       style={{ borderColor: '#C9A84C' }}></div>
                  <div>
                    <p style={{ color: '#1B2A4A' }} className="text-sm leading-relaxed">{item.task}</p>
                    {item.urgent && (
                      <span className="text-xs px-2 py-0.5 rounded-full mt-1 inline-block"
                            style={{ backgroundColor: 'rgba(201,168,76,0.15)', color: '#C9A84C' }}>
                        Time-sensitive
                      </span>
                    )}
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
  
          {/* Within the Month */}
          <div className="mb-12">
            <p className="text-xs uppercase tracking-widest mb-6" style={{ color: '#C9A84C' }}>
              Within the Month
            </p>
            <StaggerContainer className="space-y-3">
              {withinMonth.map((item) => (
                <StaggerItem key={item.task} className="card-hover flex items-start gap-4 p-5 rounded-xl"
                     style={{ backgroundColor: 'white', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                  <div className="flex-shrink-0 w-5 h-5 rounded border-2 mt-0.5"
                       style={{ borderColor: '#D1D5DB' }}></div>
                  <div className="flex-1 flex items-center justify-between gap-4">
                    <p style={{ color: '#1B2A4A' }} className="text-sm leading-relaxed">{item.task}</p>
                    {item.link && (
                      <a href={item.link} target="_blank" rel="noopener noreferrer"
                         className="text-xs flex-shrink-0 px-3 py-1 rounded-full transition-opacity hover:opacity-75"
                         style={{ backgroundColor: '#1B2A4A', color: 'white' }}>
                        Visit →
                      </a>
                    )}
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
  
          {/* College App Box */}
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
  
          {/* Long Term */}
          <div>
            <p className="text-xs uppercase tracking-widest mb-6" style={{ color: '#C9A84C' }}>
              Long Term — Pay It Forward
            </p>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {longTerm.map((item) => (
                <StaggerItem key={item.title} className="card-hover p-6 rounded-2xl"
                     style={{ backgroundColor: 'white', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
                  <IconBadge size="lg" variant="gold" className="mb-3">{item.icon}</IconBadge>
                  <h4 style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }} className="text-base font-bold mb-2">{item.title}</h4>
                  <p style={{ color: '#2D2D2D', opacity: 0.7 }} className="text-sm leading-relaxed">{item.desc}</p>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
  
        </div>
      </section>
      </FadeInSection>
    )
  }