import FadeInSection, { StaggerContainer, StaggerItem } from './FadeInSection'
import IconBadge from './IconBadge'

const needToKnow = [
  {
    title: 'Completely optional',
    desc: 'You do not have to take the bar exam to participate in Girls State.',
  },
  {
    title: 'Not required for legal roles',
    desc: 'You do NOT need to pass the bar exam to run for District Attorney, Public Defender, Superior Court Judge, Attorney General, or any other judicial or attorney role. This is intentional — to ensure every delegate has the opportunity to hold those offices.',
  },
  {
    title: 'Multiple choice plus essay',
    desc: 'The exam consists of multiple-choice questions and an essay prompt scaled to the Girls State context.',
  },
  {
    title: 'A real challenge',
    desc: 'The bar exam is designed to be genuinely challenging. Taking it is a meaningful experience whether you pass or not.',
  },
]

const whoShould = [
  {
    icon: '⚖️',
    title: 'Aspiring Lawyers',
    desc: 'If you are interested in law this is a rare chance to experience what the real bar exam feels like years before you would ever take it.',
  },
  {
    icon: '🏛️',
    title: 'Judicial Role Candidates',
    desc: 'If you are running for District Attorney, Public Defender, Attorney General, or Supreme Court Justice, taking the bar shows genuine commitment to the role.',
  },
  {
    icon: '🧠',
    title: 'Anyone Who Loves a Challenge',
    desc: 'You do not need to be interested in law to take it. It is a unique intellectual challenge that most people your age will never have the opportunity to experience.',
  },
  {
    icon: '📋',
    title: 'Resume Builders',
    desc: 'Attempting the Girls State Bar Exam is a distinctive detail that stands out on college applications and in interviews.',
  },
]

export default function BarExam() {
  return (
    <FadeInSection>
      <section id="barexam" style={{ backgroundColor: '#FAF7F2' }} className="py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-widest mb-3 text-gold-on-cream">
              Hidden Gem
            </p>
            <h2
              style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            >
              The Girls State Bar Exam
            </h2>
            <p style={{ color: '#2D2D2D', opacity: 0.65 }} className="text-sm leading-relaxed max-w-2xl mx-auto">
              One of the most unique and underrated opportunities at Girls State — and most delegates don&apos;t even know it exists.
            </p>
          </div>

          <div
            className="rounded-2xl overflow-hidden"
            style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.1)' }}
          >
            <div style={{ backgroundColor: '#1B2A4A' }} className="p-8 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <IconBadge size="lg" variant="light" className="mx-auto sm:mx-0">
                  ⚖️
                </IconBadge>
                <div>
                  <h3
                    style={{ color: '#C9A84C', fontFamily: '"Playfair Display", serif' }}
                    className="text-2xl font-bold mb-3"
                  >
                    What Is the Bar Exam
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.8)' }}>
                    At Girls State, delegates have the opportunity to take a mock bar exam — a scaled exam consisting of
                    multiple-choice questions and an essay prompt, modeled after the real California Bar Exam that
                    attorneys must pass to lawfully practice law in the state.
                  </p>
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: 'white' }} className="p-6 sm:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <p
                    className="font-bold mb-5"
                    style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }}
                  >
                    What You Need to Know
                  </p>
                  <StaggerContainer className="space-y-4">
                    {needToKnow.map((item) => (
                      <StaggerItem key={item.title} className="flex items-start gap-3">
                        <span style={{ color: '#C9A84C' }} className="flex-shrink-0 mt-0.5 font-bold">
                          →
                        </span>
                        <div>
                          <p className="font-bold text-sm mb-1" style={{ color: '#1B2A4A' }}>
                            {item.title}
                          </p>
                          <p className="text-xs leading-relaxed" style={{ color: '#2D2D2D', opacity: 0.65 }}>
                            {item.desc}
                          </p>
                        </div>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </div>

                <div>
                  <p
                    className="font-bold mb-5"
                    style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }}
                  >
                    Who Should Take It
                  </p>
                  <StaggerContainer className="space-y-3">
                    {whoShould.map((card) => (
                      <StaggerItem
                        key={card.title}
                        className="card-hover flex items-start gap-3 p-4 rounded-xl"
                        style={{
                          backgroundColor: '#FAF7F2',
                          border: '1px solid rgba(27,42,74,0.06)',
                        }}
                      >
                        <IconBadge size="sm" variant="gold">
                          {card.icon}
                        </IconBadge>
                        <div>
                          <p className="font-bold text-sm mb-1" style={{ color: '#1B2A4A' }}>
                            {card.title}
                          </p>
                          <p className="text-xs leading-relaxed" style={{ color: '#2D2D2D', opacity: 0.65 }}>
                            {card.desc}
                          </p>
                        </div>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </div>
              </div>

              <div
                className="rounded-xl p-5 mb-4"
                style={{
                  backgroundColor: 'rgba(27,42,74,0.06)',
                  border: '1px solid rgba(27,42,74,0.1)',
                }}
              >
                <p className="text-xs uppercase tracking-widest mb-2" style={{ color: '#1B2A4A', opacity: 0.7 }}>
                  Real World Context
                </p>
                <p className="text-sm leading-relaxed" style={{ color: '#1B2A4A' }}>
                  In real life the California Bar Exam is one of the most difficult professional licensing exams in the
                  United States. Attorneys must pass it to legally practice law in California. The Girls State version
                  gives you a taste of what that experience is like scaled and adapted for the program context.
                </p>
              </div>

              <div
                className="rounded-xl p-5"
                style={{
                  backgroundColor: 'rgba(201,168,76,0.12)',
                  border: '1px solid rgba(201,168,76,0.35)',
                }}
              >
                <p className="text-xs uppercase tracking-widest mb-2" style={{ color: '#C9A84C' }}>
                  Important
                </p>
                <p className="text-sm leading-relaxed" style={{ color: '#1B2A4A' }}>
                  The bar exam is NOT required to run for any legal or judicial position at Girls State. This is
                  intentional — the program wants every delegate to have the opportunity to hold those offices
                  regardless of whether they take or pass the exam. Do not let the bar exam stop you from running for
                  District Attorney, Attorney General, or any judicial role.
                </p>
              </div>
            </div>
          </div>

          <p className="text-center text-xs leading-relaxed mt-8" style={{ color: '#2D2D2D', opacity: 0.5 }}>
            Information sourced directly from the 2026 ALA California Girls State Government and Legal Resource Guide.
            Details may vary by session year — confirm with your counselors upon arrival.
          </p>
        </div>
      </section>
    </FadeInSection>
  )
}
