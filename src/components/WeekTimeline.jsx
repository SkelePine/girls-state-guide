import { useState } from 'react'
import FadeInSection, { StaggerContainer, StaggerItem } from './FadeInSection'
import IconBadge from './IconBadge'

export default function WeekTimeline() {
  const [activeDay, setActiveDay] = useState(0)

  const days = [
    {
      label: 'Day 0',
      title: 'The Bus Ride',
      icon: '🚌',
      vibe: 'Anticipation',
      vibeColor: '#C9A84C',
      content: [
        'Buses depart from regional pickup points across California — some as late as 11 PM or 1 AM.',
        'Your district determines your bus and pickup point. Check your unit\'s information packet.',
        'This is actually a great time to meet other delegates from your district before you even arrive.',
      ],
      tip: 'Bring: snacks, neck pillow, headphones, something to sleep in, portable charger.',
    },
    {
      label: 'Day 1',
      title: 'Arrival & Orientation',
      icon: '☀️',
      vibe: 'Nervous excitement',
      vibeColor: '#E8A838',
      content: [
        '6:00 AM wake up (not optional). 7:15 AM flag raising.',
        'Check in, get your room assignment, meet your roommate.',
        'Assigned to your city (~30 people) and party (Nationalist or Federalist).',
        'Orientation: counselors walk you through everything.',
        'First city council meeting — acting officers appointed.',
        'Everyone files for city office and gives a speech. Yes, on Day 1.',
        '10:30 PM lights out — enforced.',
      ],
      tip: 'Everyone is equally lost. That\'s the point. Lean in.',
    },
    {
      label: 'Day 2',
      title: 'City Day',
      icon: '🏘️',
      vibe: 'Finding your footing',
      vibeColor: '#4CAF50',
      content: [
        'City elections happen — find out your city role.',
        'Party meetings begin.',
        'Legislature organizes — Senate and Assembly hold first meetings.',
        'Start thinking about your bill.',
        'Workshops on government structure.',
        'Daily schedule: 6 AM wake up → Flag Raising → City Meeting → County Meeting → General Assembly → Party Meeting → Committee Meetings → City Debrief → 10:30 PM lights out.',
      ],
      tip: 'Your city becomes real today. Show up to everything.',
    },
    {
      label: 'Day 3',
      title: 'Party Day',
      icon: '🔵🔴',
      vibe: 'Energy is HIGH',
      vibeColor: '#9C27B0',
      content: [
        'Party conventions in full swing.',
        'Platform committees meet and debate.',
        'Party leadership elections.',
        'State filing begins — fundraising for filing fees starts at breakfast.',
        'Legislature meets and begins debating bills.',
        'Campaigns starting to heat up.',
      ],
      tip: 'Fundraising rule: max $25 per contributor. Track every name, city, and amount.',
    },
    {
      label: 'Day 4',
      title: 'Primary Day',
      icon: '🗳️',
      vibe: 'Peak intensity',
      vibeColor: '#FF5722',
      content: [
        'State filing continues.',
        'Campaigns everywhere — posters, speeches, handshakes.',
        'Primary elections.',
        'Legislature debates bills.',
        'Party rallies and Keynote Speeches.',
        'Whistle stop tours begin — Governor, Lt. Gov, AG, Supt. of Public Instruction visit all 4 counties.',
      ],
      tip: 'You can ONLY campaign AFTER you are announced as a qualified candidate.',
    },
    {
      label: 'Day 5',
      title: 'General Election Day',
      icon: '🏛️',
      vibe: 'Emotional & proud',
      vibeColor: '#2196F3',
      content: [
        'State-level candidates give major speeches.',
        'General election voting.',
        'Mock Superior Court trial in each county.',
        'Supreme Court Moot Court (First Amendment case).',
        'POW/MIA Memorial Ceremony — one of the most moving moments of the week.',
        'Election results announced.',
      ],
      tip: 'Put your phone away for the POW/MIA ceremony. Be fully present.',
    },
    {
      label: 'Day 6',
      title: 'Closing Ceremony',
      icon: '🎓',
      vibe: 'You will cry',
      vibeColor: '#C9A84C',
      content: [
        'National Anthem performed by ALA CAGS Choir.',
        'City and County Reports presented.',
        'State officer addresses — Governor\'s Address.',
        'Supreme Court Ruling announced.',
        'Legislative Report — bills passed and signed into law.',
        'Oratorical Contest Winner, Outstanding Citizen, Lifetime Achievement Awards.',
        'Jessica Wright Memorial Scholarship announced.',
        'Samsung Scholarship announced.',
        'ALA Girls State Promise recited by all delegates.',
        'Girls Nation delegates announced. ⭐',
        'Departure.',
      ],
      tip: 'The Girls State Promise: "I, [your name], a Citizen of California Girls State, promise to defend the Girls State Banner..."',
    },
  ]

  return (
    <FadeInSection>
    <section id="week" style={{ backgroundColor: '#FAF7F2' }} className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-widest mb-3" style={{ color: '#C9A84C' }}>
            Day by Day
          </p>
          <h2 style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            The Week
          </h2>
          <p style={{ color: '#2D2D2D', opacity: 0.65 }} className="text-sm leading-relaxed max-w-xl mx-auto">
            A general overview of what to expect each day. Your exact schedule is given upon arrival and may vary.
          </p>
        </div>

        {/* Day Selector — swipe on mobile, wrap on larger screens */}
        <div
          className="flex flex-nowrap sm:flex-wrap justify-start sm:justify-center gap-2 mb-10 overflow-x-auto overscroll-x-contain pb-1 -mx-1 px-1"
          style={{ scrollbarWidth: 'none' }}
          role="tablist"
          aria-label="Days of the week"
        >
          {days.map((day, index) => (
            <button
              key={day.label}
              type="button"
              role="tab"
              aria-selected={activeDay === index}
              onClick={() => setActiveDay(index)}
              className="flex-shrink-0 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-200 border-none cursor-pointer whitespace-nowrap"
              style={{
                backgroundColor: activeDay === index ? '#1B2A4A' : 'white',
                color: activeDay === index ? 'white' : '#1B2A4A',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                minHeight: 44,
              }}
            >
              {day.label}
            </button>
          ))}
        </div>

        {/* Active Day Content */}
        <div className="max-w-3xl mx-auto">
          <div className="card-hover rounded-2xl overflow-hidden"
               style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.1)' }}>

            {/* Day Header */}
            <div style={{ backgroundColor: '#1B2A4A' }} className="p-5 sm:p-8">
              <div className="flex items-center gap-3 sm:gap-4 mb-3">
                <IconBadge size="xl" variant="light">{days[activeDay].icon}</IconBadge>
                <div>
                  <p style={{ color: '#C9A84C' }} className="text-xs uppercase tracking-widest">
                    {days[activeDay].label}
                  </p>
                  <h3 style={{ color: 'white', fontFamily: '"Playfair Display", serif' }}
                      className="text-xl sm:text-2xl font-bold">
                    {days[activeDay].title}
                  </h3>
                </div>
              </div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium"
                    style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: days[activeDay].vibeColor }}>
                Vibe: {days[activeDay].vibe}
              </span>
            </div>

            {/* Day Content */}
            <div style={{ backgroundColor: 'white' }} className="p-5 sm:p-8">
              <StaggerContainer className="space-y-3 mb-6" key={activeDay}>
                {days[activeDay].content.map((item, i) => (
                  <StaggerItem key={i} className="flex items-start gap-3 text-sm"
                      style={{ color: '#2D2D2D', opacity: 0.8 }}>
                    <span style={{ color: '#C9A84C' }} className="mt-0.5 flex-shrink-0">→</span>
                    {item}
                  </StaggerItem>
                ))}
              </StaggerContainer>
              {/* Tip */}
              <div className="p-4 rounded-xl"
                   style={{ backgroundColor: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.3)' }}>
                <p className="text-xs uppercase tracking-widest mb-1" style={{ color: '#C9A84C' }}>
                  💡 Tip
                </p>
                <p className="text-sm leading-relaxed" style={{ color: '#1B2A4A' }}>{days[activeDay].tip}</p>
              </div>
            </div>

          </div>

          {/* Navigation arrows */}
          <div className="flex justify-between mt-6">
            <button
              onClick={() => setActiveDay(Math.max(0, activeDay - 1))}
              disabled={activeDay === 0}
              className="px-5 py-2 rounded-full text-sm font-medium transition-all"
              style={{
                backgroundColor: activeDay === 0 ? 'rgba(0,0,0,0.05)' : '#1B2A4A',
                color: activeDay === 0 ? 'rgba(0,0,0,0.3)' : 'white',
              }}
            >
              ← Previous Day
            </button>
            <button
              onClick={() => setActiveDay(Math.min(days.length - 1, activeDay + 1))}
              disabled={activeDay === days.length - 1}
              className="px-5 py-2 rounded-full text-sm font-medium transition-all"
              style={{
                backgroundColor: activeDay === days.length - 1 ? 'rgba(0,0,0,0.05)' : '#1B2A4A',
                color: activeDay === days.length - 1 ? 'rgba(0,0,0,0.3)' : 'white',
              }}
            >
              Next Day →
            </button>
          </div>
        </div>

      </div>
    </section>
    </FadeInSection>
  )
}