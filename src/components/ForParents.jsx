import { useState } from 'react'
import FadeInSection, { StaggerContainer, StaggerItem } from './FadeInSection'
import IconBadge from './IconBadge'
import { jumpTo } from '../hooks/useHashTab'

const parentSections = [
  {
    icon: '🏛️',
    title: 'What Is This Program?',
    content:
      'ALA California Girls State is a week-long, nonpartisan civic leadership program run by the American Legion Auxiliary. Of 556,000 California high school juniors, only 450 are selected each year — one per high school. Your daughter was chosen for her leadership, academics, and character. This is a significant honor. The program has been running since 1940 and the 2026 session was the 83rd.',
  },
  {
    icon: '📍',
    title: 'Where Will She Be?',
    content:
      'The 2026 session was held at the University of California, Riverside (UCR) campus, 900 University Ave, Riverside, CA 92521. She will live in the campus residence halls, eat in the dining commons, and spend the week in sessions, meetings, and assemblies. Note: Campus location may vary by year — confirm with your ALA unit.',
  },
  {
    icon: '🚌',
    title: 'How Does She Get There?',
    content:
      'Transportation is coordinated by your local ALA unit. Buses depart from regional pickup points across California — some as late as 11 PM. Your unit will provide the specific bus number, pickup location, and departure time. Do not arrange separate transportation without confirming with your unit first.',
  },
  {
    icon: '📅',
    title: 'What Will She Be Doing All Week?',
    content:
      'A full day runs from 6:00 AM wake-up to 10:30 PM lights out. She will attend city, county, and state government sessions; run for elected office and give speeches; write and debate legislation; participate in party conventions and rallies; take part in a service project honoring veterans; attend flag ceremonies morning and evening; and participate in a mock trial and/or Supreme Court Moot Court.',
  },
  {
    icon: '📱',
    title: 'Can You Contact Her?',
    content:
      "Phones are permitted in the dorms but restricted during sessions. Don't be alarmed if she doesn't respond immediately — she's busy. She is safe, supervised, and in good hands. The program has professional staff and trained counselors on-site at all times.",
  },
  {
    icon: '🍽️',
    title: 'What About Food?',
    content:
      'All meals are provided in the campus dining hall. At UCR, the main facility is the Glasgow Dining Commons — an 800+ seat all-you-can-eat facility with six food venues. If your daughter has dietary restrictions or allergies, contact your ALA unit and the program organizers BEFORE the session begins.',
  },
  {
    icon: '💊',
    title: 'What About Medical Needs?',
    content:
      'If your daughter takes prescription medications, ensure she has enough for the full week. Inform your ALA unit of any medical conditions or needs in advance. There is staff support on-site. Pack a small first aid kit with basics like Advil, Pepto, and Band-Aids.',
  },
  {
    icon: '💰',
    title: 'What Does It Cost?',
    content:
      "The total program cost is approximately $500–$575 per delegate — almost entirely covered by your sponsoring ALA unit. You may have a small transportation cost. If your daughter is running for a state office, she'll need Girls State currency (G$) for filing fees — she fundraises this during the week from other delegates. Each delegate starts with G$500 in their Girls State bank account.",
  },
  {
    icon: '🎓',
    title: 'What Happens at the End?',
    content:
      'The program concludes with a Closing Ceremony on the final day (Friday). This includes awards, scholarship announcements, the Girls Nation announcement, and the Girls State Promise recited by all delegates. Families are typically not present for the ceremony itself — your daughter will be bused home afterward. Confirm pickup logistics with your ALA unit.',
  },
  {
    icon: '✨',
    title: 'What Should You Expect When She Gets Home?',
    content:
      "Honestly? She may be exhausted, emotional, and completely transformed. Girls State is an intense, immersive experience. Give her space to process. Ask her about it. Listen. Many delegates describe it as one of the most impactful weeks of their lives. Don't be surprised if she comes home wanting to change the world.",
  },
]

const packingHighlights = [
  { item: 'Business casual clothing for daytime sessions', note: 'Dress pants, blouses, skirts — no jeans during sessions' },
  { item: 'Comfortable shoes', note: 'She will walk a lot — no stilettos' },
  { item: 'Layers for air-conditioned rooms', note: 'Lecture halls are cold even when it\'s 90°F outside' },
  { item: 'Sunscreen and reusable water bottle', note: 'Riverside in June is 90°F+' },
  { item: 'Bedding (twin XL)', note: 'Confirm with your unit if linens are provided' },
  { item: 'Shower caddy and shower shoes', note: 'Communal bathrooms' },
  { item: 'Cash $20–40', note: 'For incidentals' },
  { item: 'Index cards and Sharpies', note: 'Useful for speech notes and labeling' },
]

export default function ForParents() {
  const [openItem, setOpenItem] = useState(0)

  return (
    <FadeInSection>
      <section id="parents" style={{ backgroundColor: '#FAF7F2' }} className="py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-widest mb-3" style={{ color: '#C9A84C' }}>
              Family Guide
            </p>
            <h2
              style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            >
              For Parents
            </h2>
            <p className="text-muted-on-cream text-base leading-relaxed max-w-xl mx-auto">
              Your daughter just got selected for one of the most prestigious programs in California. Here&apos;s everything you need to know — from drop-off to pick-up and everything in between.
            </p>
          </div>

          <div
            className="rounded-2xl p-8 mb-12 text-center relative overflow-hidden"
            style={{
              backgroundColor: '#1B2A4A',
              boxShadow: '0 12px 32px rgba(27,42,74,0.18)',
            }}
          >
            <div
              className="absolute top-0 left-0 right-0 h-1"
              style={{ background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }}
              aria-hidden="true"
            />
            <p style={{ color: '#C9A84C' }} className="text-xs uppercase tracking-widest mb-3">
              A Note for Parents
            </p>
            <p
              style={{ color: 'white', fontFamily: '"Playfair Display", serif' }}
              className="text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto"
            >
              Of 556,000 California high school juniors, your daughter is one of only 450 chosen. She was selected because of her leadership, academics, and character. She is ready for this.
            </p>
          </div>

          <StaggerContainer className="space-y-3 mb-12">
            {parentSections.map((section, index) => {
              const open = openItem === index
              return (
                <StaggerItem
                  key={section.title}
                  className="card-hover rounded-2xl overflow-hidden"
                  style={{
                    backgroundColor: 'white',
                    boxShadow: open
                      ? '0 10px 28px rgba(27,42,74,0.12)'
                      : '0 2px 12px rgba(0,0,0,0.06)',
                    border: open ? '1px solid rgba(201,168,76,0.4)' : '1px solid transparent',
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenItem(open ? null : index)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left transition-all border-none cursor-pointer"
                    style={{ backgroundColor: open ? '#1B2A4A' : 'white' }}
                    aria-expanded={open}
                  >
                    <div className="flex items-center gap-4">
                      <IconBadge size="md" variant={open ? 'light' : 'gold'}>{section.icon}</IconBadge>
                      <span
                        className="font-semibold text-sm sm:text-base"
                        style={{ color: open ? 'white' : '#1B2A4A' }}
                      >
                        {section.title}
                      </span>
                    </div>
                    <span style={{ color: '#C9A84C' }} className="text-xl flex-shrink-0 ml-4">
                      {open ? '−' : '+'}
                    </span>
                  </button>
                  {open && (
                    <div className="px-5 sm:px-6 pb-6" style={{ backgroundColor: '#1B2A4A' }}>
                      <p className="text-white text-base leading-relaxed pt-2 border-t border-white/10" style={{ opacity: 0.92 }}>
                        {section.content}
                      </p>
                    </div>
                  )}
                </StaggerItem>
              )
            })}
          </StaggerContainer>

          <div
            className="rounded-2xl p-8 mb-12"
            style={{
              backgroundColor: 'white',
              boxShadow: '0 4px 20px rgba(27,42,74,0.08)',
              borderTop: '3px solid #C9A84C',
            }}
          >
            <p className="text-xs uppercase tracking-widest mb-2" style={{ color: '#C9A84C' }}>
              Before She Leaves
            </p>
            <p
              className="text-xl font-semibold mb-6"
              style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }}
            >
              Packing Highlights for Parents
            </p>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {packingHighlights.map((item) => (
                <StaggerItem
                  key={item.item}
                  className="card-hover flex items-start gap-3 p-4 rounded-xl"
                  style={{ backgroundColor: '#FAF7F2', border: '1px solid rgba(27,42,74,0.06)' }}
                >
                  <span
                    className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{ backgroundColor: 'rgba(201,168,76,0.2)', color: '#C9A84C' }}
                  >
                    ✓
                  </span>
                  <div>
                    <p className="text-sm font-medium" style={{ color: '#1B2A4A' }}>{item.item}</p>
                    <p className="text-xs mt-0.5" style={{ color: '#2D2D2D', opacity: 0.6 }}>{item.note}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
            <p className="text-xs mt-5 text-center" style={{ color: '#2D2D2D', opacity: 0.55 }}>
              Prefer the full checklist?{' '}
              <button
                type="button"
                onClick={() => jumpTo('prepare', 'packing')}
                className="underline bg-transparent border-none cursor-pointer font-medium"
                style={{ color: '#1B2A4A' }}
              >
                Open the Packing List →
              </button>
            </p>
          </div>

          <div className="rounded-2xl p-8 mb-12" style={{ backgroundColor: '#1B2A4A' }}>
            <p className="text-xs uppercase tracking-widest mb-6" style={{ color: '#C9A84C' }}>
              How to Support Her Before She Goes
            </p>
            <StaggerContainer className="space-y-3">
              {[
                'Help her research the positions she wants to run for',
                'Practice her speech with her at home — be her audience',
                'Help her make her campaign poster (Canva is free and easy)',
                'Make sure her bill is submitted before the deadline',
                "If she's eligible for the Samsung Scholarship, help her gather military service documentation early",
                "Remind her: she was selected because she's ready for this",
              ].map((tip) => (
                <StaggerItem key={tip} className="flex items-start gap-3">
                  <span style={{ color: '#C9A84C' }} className="flex-shrink-0 mt-0.5">→</span>
                  <p className="text-white opacity-80 text-sm leading-relaxed">{tip}</p>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          <div className="text-center">
            <p className="text-xs uppercase tracking-widest mb-6" style={{ color: '#C9A84C' }}>
              Key Links for Parents
            </p>
            <StaggerContainer className="flex flex-wrap justify-center gap-3">
              {[
                { label: 'Official Girls State Site', url: 'https://www.cagirlsstate.org' },
                { label: 'ALA Department of California', url: 'https://calegionaux.org' },
                { label: 'GSAF Alumnae Foundation', url: 'https://www.cagsaf.org' },
                { label: 'Samsung Scholarship', url: 'https://www.legion.org/get-involved/scholarships/samsung-american-legion-scholarship' },
              ].map((link) => (
                <StaggerItem key={link.label}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      backgroundColor: 'white',
                      color: '#1B2A4A',
                      border: '1px solid rgba(201,168,76,0.45)',
                      boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                      textDecoration: 'none',
                      minHeight: 44,
                    }}
                    className="px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity inline-flex items-center"
                  >
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
