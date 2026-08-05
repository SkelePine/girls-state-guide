import { useState } from 'react'
import FadeInSection, { StaggerContainer, StaggerItem } from './FadeInSection'
import IconBadge from './IconBadge'

export default function ParentGuide() {
  const [openItem, setOpenItem] = useState(null)

  const sections = [
    {
      icon: '🏛️',
      title: 'What Is This Program?',
      content: 'ALA California Girls State is a week-long, nonpartisan civic leadership program run by the American Legion Auxiliary. Of 556,000 California high school juniors, only 450 are selected each year — one per high school. Your daughter was chosen for her leadership, academics, and character. This is a significant honor. The program has been running since 1940 and the 2026 session was the 83rd.',
    },
    {
      icon: '📍',
      title: 'Where Will She Be?',
      content: 'The 2026 session was held at the University of California, Riverside (UCR) campus, 900 University Ave, Riverside, CA 92521. She will live in the campus residence halls, eat in the dining commons, and spend the week in sessions, meetings, and assemblies. Note: Campus location may vary by year — confirm with your ALA unit.',
    },
    {
      icon: '🚌',
      title: 'How Does She Get There?',
      content: 'Transportation is coordinated by your local ALA unit. Buses depart from regional pickup points across California — some as late as 11 PM. Your unit will provide the specific bus number, pickup location, and departure time. Do not arrange separate transportation without confirming with your unit first.',
    },
    {
      icon: '📅',
      title: 'What Will She Be Doing All Week?',
      content: 'A full day runs from 6:00 AM wake-up to 10:30 PM lights out. She will attend city, county, and state government sessions; run for elected office and give speeches; write and debate legislation; participate in party conventions and rallies; take part in a service project honoring veterans; attend flag ceremonies morning and evening; and participate in a mock trial and/or Supreme Court Moot Court.',
    },
    {
      icon: '📱',
      title: 'Can You Contact Her?',
      content: 'Phones are permitted in the dorms but restricted during sessions. Don\'t be alarmed if she doesn\'t respond immediately — she\'s busy. She is safe, supervised, and in good hands. The program has professional staff and trained counselors on-site at all times.',
    },
    {
      icon: '🍽️',
      title: 'What About Food?',
      content: 'All meals are provided in the campus dining hall. At UCR, the main facility is the Glasgow Dining Commons — an 800+ seat all-you-can-eat facility with six food venues. If your daughter has dietary restrictions or allergies, contact your ALA unit and the program organizers BEFORE the session begins.',
    },
    {
      icon: '💊',
      title: 'What About Medical Needs?',
      content: 'If your daughter takes prescription medications, ensure she has enough for the full week. Inform your ALA unit of any medical conditions or needs in advance. There is staff support on-site. Pack a small first aid kit with basics like Advil, Pepto, and Band-Aids.',
    },
    {
      icon: '💰',
      title: 'What Does It Cost?',
      content: 'The total program cost is approximately $500–$575 per delegate — almost entirely covered by your sponsoring ALA unit. You may have a small transportation cost. If your daughter is running for a state office, she\'ll need Girls State currency (G$) for filing fees — she fundraises this during the week from other delegates. Each delegate starts with G$500 in their Girls State bank account.',
    },
    {
      icon: '🎓',
      title: 'What Happens at the End?',
      content: 'The program concludes with a Closing Ceremony on the final day (Friday). This includes awards, scholarship announcements, the Girls Nation announcement, and the Girls State Promise recited by all delegates. Families are typically not present for the ceremony itself — your daughter will be bused home afterward. Confirm pickup logistics with your ALA unit.',
    },
    {
      icon: '✨',
      title: 'What Should You Expect When She Gets Home?',
      content: 'Honestly? She may be exhausted, emotional, and completely transformed. Girls State is an intense, immersive experience. Give her space to process. Ask her about it. Listen. Many delegates describe it as one of the most impactful weeks of their lives. Don\'t be surprised if she comes home wanting to change the world.',
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
    { item: 'Campaign supplies', note: 'Poster board, markers, blue tape, printed photos' },
  ]

  return (
    <FadeInSection>
    <section id="parents" style={{ backgroundColor: '#1B2A4A' }} className="py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest mb-3" style={{ color: '#C9A84C' }}>
            For Families
          </p>
          <h2 style={{ color: 'white', fontFamily: '"Playfair Display", serif' }}
              className="text-4xl md:text-5xl font-bold mb-4">
            Parent Guide
          </h2>
          <p className="text-white opacity-60 text-sm leading-relaxed max-w-xl mx-auto">
            Your daughter just got selected for one of the most prestigious programs in California. Here's everything you need to know — from drop-off to pick-up and everything in between.
          </p>
        </div>

        {/* Honor Banner */}
        <div className="rounded-2xl p-6 mb-12 text-center"
             style={{ backgroundColor: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.4)' }}>
          <p style={{ color: '#C9A84C' }} className="text-xs uppercase tracking-widest mb-2">A Note for Parents</p>
          <p style={{ color: 'white' }} className="text-lg leading-relaxed max-w-2xl mx-auto">
            Of 556,000 California high school juniors, your daughter is one of only 450 chosen. She was selected because of her leadership, academics, and character. She is ready for this.
          </p>
        </div>

        {/* Accordion Sections */}
        <StaggerContainer className="space-y-3 mb-12">
          {sections.map((section, index) => (
            <StaggerItem key={section.title} className="card-hover rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenItem(openItem === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left transition-all"
                style={{ backgroundColor: openItem === index ? 'rgba(201,168,76,0.15)' : 'rgba(255,255,255,0.06)' }}
              >
                <div className="flex items-center gap-4">
                  <IconBadge size="md" variant="light">{section.icon}</IconBadge>
                  <span className="font-semibold text-white">{section.title}</span>
                </div>
                <span style={{ color: '#C9A84C' }} className="text-xl flex-shrink-0 ml-4">
                  {openItem === index ? '−' : '+'}
                </span>
              </button>
              {openItem === index && (
                <div className="px-6 pb-6" style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}>
                  <p className="text-white opacity-70 text-sm leading-relaxed pt-4">{section.content}</p>
                </div>
              )}
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Packing Highlights */}
        <div className="rounded-2xl p-8 mb-12" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
          <p className="text-xs uppercase tracking-widest mb-6" style={{ color: '#C9A84C' }}>
            Packing Highlights for Parents
          </p>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {packingHighlights.map((item) => (
              <StaggerItem key={item.item} className="card-hover flex items-start gap-3 p-3 rounded-xl"
                   style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}>
                <span style={{ color: '#C9A84C' }} className="flex-shrink-0 mt-0.5">✓</span>
                <div>
                  <p className="text-white text-sm font-medium">{item.item}</p>
                  <p className="text-white opacity-40 text-xs">{item.note}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <p className="text-white opacity-40 text-xs mt-4 text-center">
            See the full interactive packing list in the Packing section above.
          </p>
        </div>

        {/* How to Support Her */}
        <div className="rounded-2xl p-8 mb-12"
             style={{ backgroundColor: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.3)' }}>
          <p className="text-xs uppercase tracking-widest mb-6" style={{ color: '#C9A84C' }}>
            How to Support Her Before She Goes
          </p>
          <StaggerContainer className="space-y-3">
            {[
              'Help her research the positions she wants to run for',
              'Practice her speech with her at home — be her audience',
              'Help her make her campaign poster (Canva is free and easy)',
              'Make sure her bill is submitted before the deadline',
              'If she\'s eligible for the Samsung Scholarship, help her gather military service documentation early',
              'Remind her: she was selected because she\'s ready for this',
            ].map((tip) => (
              <StaggerItem key={tip} className="flex items-start gap-3">
                <span style={{ color: '#C9A84C' }} className="flex-shrink-0 mt-0.5">→</span>
                <p className="text-white opacity-70 text-sm leading-relaxed">{tip}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Key Links */}
        <div className="text-center">
          <p className="text-xs uppercase tracking-widest mb-6" style={{ color: '#C9A84C' }}>
            Key Links for Parents
          </p>
          <StaggerContainer className="flex flex-wrap justify-center gap-4">
            {[
              { label: 'Official Girls State Site', url: 'https://www.cagirlsstate.org' },
              { label: 'ALA Department of California', url: 'https://calegionaux.org' },
              { label: 'GSAF Alumnae Foundation', url: 'https://www.cagsaf.org' },
              { label: 'Samsung Scholarship', url: 'https://www.legion.org/get-involved/scholarships/samsung-american-legion-scholarship' },
            ].map((link) => (
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