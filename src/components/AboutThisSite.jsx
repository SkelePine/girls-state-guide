import FadeInSection, { StaggerContainer, StaggerItem } from './FadeInSection'
import { siteConfig } from '../siteConfig'
import { jumpTo } from '../hooks/useHashTab'

const points = [
  {
    title: 'Built by a delegate',
    text: `${siteConfig.byline} It reflects real experience from the ${siteConfig.sessionLabel} at ${siteConfig.campus2026}. Guest stories from fellow delegates are welcome.`,
  },
  {
    title: 'Unofficial & independent',
    text: 'This is not an official American Legion Auxiliary publication. For official rules, deadlines, and registration, always confirm with your ALA unit and cagirlsstate.org.',
  },
  {
    title: 'What you\'ll find here',
    text: 'Practical how-tos for applying, packing, running for office, filing, writing your bill, and navigating the week — plus honest advice from people who just lived it.',
  },
  {
    title: 'How to use this guide',
    text: 'Skim the sections that match where you are. Use the top navigation or the side progress rail to jump around. Checklists save to your browser so you can come back later.',
  },
]

export default function AboutThisSite() {
  return (
    <FadeInSection>
      <section id="about" style={{ backgroundColor: '#FAF7F2' }} className="py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-widest mb-3 text-gold-on-cream">
              Start Here
            </p>
            <h2
              style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            >
              About This Guide
            </h2>
            <p className="text-muted-on-cream text-base leading-relaxed max-w-xl mx-auto">
              Everything the acceptance letter didn&apos;t cover — organized so you can find what you need fast.
            </p>
            <p className="text-xs mt-3 tracking-wide text-muted-on-cream">
              {siteConfig.author} · {siteConfig.authorRole}
            </p>
            <button
              type="button"
              onClick={() => jumpTo('parents')}
              className="mt-6 inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium border-none cursor-pointer transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#1B2A4A', color: 'white', minHeight: 44 }}
            >
              Visiting for a daughter? Parent Guide →
            </button>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {points.map((point) => (
              <StaggerItem
                key={point.title}
                className="card-hover rounded-2xl p-8"
                style={{ backgroundColor: 'white', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
              >
                <h3
                  style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }}
                  className="text-xl font-bold mb-3"
                >
                  {point.title}
                </h3>
                <p className="text-muted-on-cream text-base leading-relaxed">
                  {point.text}
                </p>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div
            className="rounded-2xl p-8 text-center"
            style={{ backgroundColor: '#1B2A4A' }}
          >
            <p className="text-xs uppercase tracking-widest mb-3" style={{ color: '#C9A84C' }}>
              Disclaimer
            </p>
            <p className="text-sm leading-relaxed text-white opacity-75 max-w-2xl mx-auto">
              Program details, campus location, and rules can change year to year. Use this guide as a starting point,
              then verify anything time-sensitive with your sponsoring ALA unit and the official Girls State program.
            </p>
          </div>
        </div>
      </section>
    </FadeInSection>
  )
}
