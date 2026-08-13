import { useHashTab } from '../hooks/useHashTab'
import FadeInSection, { StaggerContainer, StaggerItem } from './FadeInSection'
import IconBadge from './IconBadge'
import SectionTabs from './SectionTabs'

const tabs = [
  { id: 'is', label: 'What It Is' },
  { id: 'not', label: 'What It Is NOT' },
  { id: '51st', label: 'The 51st State' },
]

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

const misconceptions = [
  {
    myth: 'It\'s a summer camp',
    truth: 'It\'s an immersive government simulation. Days run 6:00 AM–10:30 PM with elections, legislation, courts, and ceremonies — not cabin crafts and free swim.',
  },
  {
    myth: 'It\'s a debate tournament or Model UN',
    truth: 'You don\'t just argue positions. You form cities and counties, run campaigns, file paperwork, pass bills, and live inside a working state for a week.',
  },
  {
    myth: 'Only political science kids belong',
    truth: 'Delegates come from every interest — STEM, arts, athletics, student government, and none of the above. Selection rewards leadership and character, not a major.',
  },
  {
    myth: 'It\'s partisan / pushes a party agenda',
    truth: 'The program is nonpartisan. You\'re randomly assigned to the Nationalist or Federalist party for the simulation — those are Girls State parties, not Democrat or Republican.',
  },
  {
    myth: 'You have to already know how government works',
    truth: 'Almost nobody walks in knowing the filing forms or speech times. Counselors and this guide exist so you can learn by doing.',
  },
  {
    myth: 'Winning every election is the point',
    truth: 'Showing up, serving your city, writing a strong bill, and building community matter as much as titles. Many standout delegates never win a statewide race.',
  },
]

const fiftyFirst = [
  {
    icon: '🗺️',
    title: 'A full state in miniature',
    text: 'For one week, 450 delegates become the citizens of California Girls State — often called the "51st state." You build government from the ground up: cities, counties, parties, and a state administration.',
  },
  {
    icon: '🏙️',
    title: 'Cities are your home base',
    text: 'You\'re assigned to a city of ~30 delegates. City elections happen first. Your city is where you sleep, meet at night, and build your closest friendships.',
  },
  {
    icon: '🏞️',
    title: 'Four counties, real structure',
    text: 'Cities roll up into counties (Marshall, Dorsey, Brown, McMahon — each with a community identity). County offices and courts come next as the simulation expands.',
  },
  {
    icon: '🏛️',
    title: 'State government is real work',
    text: 'Governor, legislature, courts, and state officers run the full apparatus. Filing fees, signatures, party primaries, and general elections mirror the intensity of real campaigns.',
  },
  {
    icon: '🔵🔴',
    title: 'Two parties, built from scratch',
    text: 'Nationalists and Federalists write platforms, hold conventions, and elect leadership. Party assignment is random — you earn your place by how you lead inside it.',
  },
  {
    icon: '📜',
    title: 'Laws, currency, and culture',
    text: 'You submit a bill before you arrive, spend Girls State currency (G$), hang campaign posters with blue tape, and close the week with the Girls State Promise. It\'s a complete civic world.',
  },
]

export default function WhatIsGS() {
  const [activeTab, setActiveTab] = useHashTab('what', 'is', ['is', 'not', '51st'])

  return (
    <FadeInSection>
      <section id="what" style={{ backgroundColor: '#1B2A4A' }} className="py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-widest mb-3" style={{ color: '#C9A84C' }}>
              The Basics
            </p>
            <h2
              style={{ color: 'white', fontFamily: '"Playfair Display", serif' }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            >
              What Is Girls State?
            </h2>
            <p className="text-muted-on-navy text-sm leading-relaxed max-w-xl mx-auto">
              Everything the acceptance letter didn&apos;t tell you.
            </p>
          </div>

          <SectionTabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />

          {activeTab === 'is' && (
            <>
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                {cards.map((card) => (
                  <StaggerItem
                    key={card.title}
                    style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(201,168,76,0.3)' }}
                    className="card-hover rounded-xl p-8 hover:border-yellow-400 transition-all duration-300"
                  >
                    <IconBadge size="lg" variant="gold" className="mb-4">{card.icon}</IconBadge>
                    <h3
                      style={{ color: '#C9A84C', fontFamily: '"Playfair Display", serif' }}
                      className="text-xl font-bold mb-3"
                    >
                      {card.title}
                    </h3>
                    <p className="text-white opacity-70 leading-relaxed text-sm">{card.text}</p>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              <div style={{ borderLeft: '4px solid #C9A84C' }} className="pl-8 mb-16 max-w-3xl mx-auto">
                <p
                  style={{ color: 'white', fontFamily: '"Playfair Display", serif' }}
                  className="text-2xl italic leading-relaxed mb-4"
                >
                  &quot;I walked in not knowing a single person. I walked out with a city full of sisters, a speech I gave in front of hundreds of people, and a completely different idea of what I&apos;m capable of.&quot;
                </p>
                <p style={{ color: '#C9A84C' }} className="text-xs uppercase tracking-widest">
                  — 2026 Delegate, Gilbreth City, McMahon County
                </p>
              </div>

              <div className="text-center">
                <p className="text-xs uppercase tracking-widest mb-6" style={{ color: '#C9A84C' }}>
                  Notable Alumnae
                </p>
                <StaggerContainer className="flex flex-wrap justify-center gap-4">
                  {alumnae.map((name) => (
                    <StaggerItem
                      key={name}
                      style={{ backgroundColor: 'rgba(255,255,255,0.08)', color: 'white' }}
                      className="px-4 py-2 rounded-full text-sm"
                    >
                      {name}
                    </StaggerItem>
                  ))}
                  <StaggerItem
                    style={{ backgroundColor: 'rgba(255,255,255,0.08)', color: 'white' }}
                    className="px-4 py-2 rounded-full text-sm"
                  >
                    + hundreds more
                  </StaggerItem>
                </StaggerContainer>
              </div>
            </>
          )}

          {activeTab === 'not' && (
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {misconceptions.map((item) => (
                <StaggerItem
                  key={item.myth}
                  className="card-hover rounded-2xl p-7"
                  style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <p className="text-xs uppercase tracking-widest mb-2" style={{ color: '#C9A84C' }}>
                    Myth
                  </p>
                  <h3
                    style={{ color: 'white', fontFamily: '"Playfair Display", serif' }}
                    className="text-lg font-bold mb-3"
                  >
                    {item.myth}
                  </h3>
                  <p className="text-xs uppercase tracking-widest mb-2" style={{ color: '#C9A84C' }}>
                    Reality
                  </p>
                  <p className="text-white opacity-70 text-sm leading-relaxed">{item.truth}</p>
                </StaggerItem>
              ))}
            </StaggerContainer>
          )}

          {activeTab === '51st' && (
            <>
              <div
                className="rounded-2xl p-8 mb-10 text-center"
                style={{ backgroundColor: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.35)' }}
              >
                <p
                  style={{ color: 'white', fontFamily: '"Playfair Display", serif' }}
                  className="text-2xl md:text-3xl italic leading-relaxed"
                >
                  For one week, you don&apos;t visit government — you become the 51st state.
                </p>
              </div>
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {fiftyFirst.map((item) => (
                  <StaggerItem
                    key={item.title}
                    className="card-hover rounded-2xl p-6"
                    style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
                  >
                    <IconBadge size="lg" variant="gold" className="mb-4">{item.icon}</IconBadge>
                    <h3
                      style={{ color: '#C9A84C', fontFamily: '"Playfair Display", serif' }}
                      className="text-lg font-bold mb-2"
                    >
                      {item.title}
                    </h3>
                    <p className="text-white opacity-70 text-sm leading-relaxed">{item.text}</p>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </>
          )}
        </div>
      </section>
    </FadeInSection>
  )
}
