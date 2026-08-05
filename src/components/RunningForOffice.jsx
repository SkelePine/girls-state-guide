import { useState } from 'react'
import FadeInSection, { StaggerContainer, StaggerItem } from './FadeInSection'

export default function RunningForOffice() {
  const [openStep, setOpenStep] = useState(0)

  const steps = [
    {
      number: '01',
      title: 'Choose Your Office',
      content: (
        <div className="space-y-3 text-sm" style={{ color: '#2D2D2D', opacity: 0.75 }}>
          <p>Think about your strengths. City offices are great for everyone — lower stakes, immediate community. County and state offices are more competitive but absolutely worth trying.</p>
          <p>You can run at multiple levels throughout the week. Don't stop after one race.</p>
          <div className="grid grid-cols-2 gap-3 mt-4">
            {[
              { type: 'Speaker / Debater', go: 'Governor, AG, District Attorney' },
              { type: 'Organizer', go: 'City Clerk, Secretary of State' },
              { type: 'Community Builder', go: 'Mayor, Commissioner of Inspiration' },
              { type: 'Policy Writer', go: 'Platform Committee, Assemblymember' },
            ].map((item) => (
              <div key={item.type} className="p-3 rounded-lg"
                   style={{ backgroundColor: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.2)' }}>
                <p className="font-medium text-xs mb-1" style={{ color: '#1B2A4A' }}>{item.type}</p>
                <p className="text-xs opacity-70">→ {item.go}</p>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      number: '02',
      title: 'Write Your Speech (60–90 seconds)',
      content: (
        <div className="space-y-4 text-sm">
          <p style={{ color: '#2D2D2D', opacity: 0.75 }}>The structure that works every time:</p>
          <div className="space-y-2">
            {[
              { step: '1. Hook', desc: 'Don\'t start with "Hi my name is." Start with something that makes people look up.' },
              { step: '2. Who You Are', desc: 'Name, where you\'re from, one real thing about you.' },
              { step: '3. Why This Office', desc: 'What specifically draws you to this role.' },
              { step: '4. What You\'ll Do', desc: '2–3 concrete, specific things.' },
              { step: '5. Close Strong', desc: 'Ask for the vote. End with energy.' },
            ].map((item) => (
              <div key={item.step} className="flex gap-3 p-3 rounded-lg"
                   style={{ backgroundColor: 'rgba(27,42,74,0.04)' }}>
                <span className="font-bold text-xs flex-shrink-0" style={{ color: '#C9A84C' }}>{item.step}</span>
                <span className="text-xs" style={{ color: '#2D2D2D', opacity: 0.75 }}>{item.desc}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 p-4 rounded-xl" style={{ backgroundColor: '#1B2A4A' }}>
            <p className="text-xs uppercase tracking-widest mb-3" style={{ color: '#C9A84C' }}>Sentence Starters</p>
            {[
              '"I believe that [value] is the foundation of great leadership, and that\'s exactly why I\'m running for..."',
              '"Leadership isn\'t about a title. It\'s about [specific thing]. And that\'s what I\'m here to do."',
              '"If elected, my three priorities will be..."',
              '"I\'m not just running for [office] — I\'m running for every girl in this room who..."',
            ].map((starter) => (
              <p key={starter} className="text-xs text-white opacity-60 mb-2 italic">{starter}</p>
            ))}
          </div>
        </div>
      ),
    },
    {
      number: '03',
      title: 'Make Your Campaign Poster',
      content: (
        <div className="space-y-3 text-sm">
          <div className="grid grid-cols-1 gap-2">
            {[
              { rule: 'Your name LARGE', desc: 'Readable from across a room' },
              { rule: 'Bold 2–3 color scheme', desc: 'Pick colors that pop and match your energy' },
              { rule: 'Clear slogan', desc: 'Under 8 words. Something that sounds like YOU.' },
              { rule: 'Your photo', desc: 'People vote for faces they recognize' },
              { rule: 'The office you\'re running for', desc: 'Make it obvious what you want' },
              { rule: 'BLUE TAPE ONLY', desc: 'Only approved tape for hanging in residence halls' },
            ].map((item) => (
              <div key={item.rule} className="flex items-start gap-3 p-3 rounded-lg"
                   style={{ backgroundColor: 'rgba(201,168,76,0.06)' }}>
                <span style={{ color: '#C9A84C' }} className="text-xs font-bold flex-shrink-0">✓</span>
                <div>
                  <span className="font-medium text-xs" style={{ color: '#1B2A4A' }}>{item.rule}</span>
                  <span className="text-xs ml-2" style={{ color: '#2D2D2D', opacity: 0.6 }}>— {item.desc}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs" style={{ color: '#2D2D2D', opacity: 0.6 }}>
            💡 Free tool: <strong>Canva.com</strong> has free campaign poster templates. Use them.
          </p>
        </div>
      ),
    },
    {
      number: '04',
      title: 'Campaign — But Know the Rules',
      content: (
        <div className="space-y-4 text-sm">
          <div className="p-4 rounded-xl" style={{ backgroundColor: '#FEF3C7', border: '1px solid #FCD34D' }}>
            <p className="font-semibold text-xs mb-2" style={{ color: '#92400E' }}>⚠️ Important Rule</p>
            <p className="text-xs" style={{ color: '#92400E' }}>
              When you are fundraising, you are NOT campaigning. You can ONLY start campaigning AFTER you are announced as a qualified candidate.
            </p>
          </div>
          <p style={{ color: '#2D2D2D', opacity: 0.75 }}>Fundraising script: <em>"I am fundraising to file for a state office, are you willing to contribute a donation?"</em> — do NOT ask for votes during fundraising.</p>
          <div className="space-y-2">
            {[
              'Max $25 from any single contributor',
              'Track every contributor\'s name, city, and amount (required for Form #12)',
              'Must maintain at least $1 in your account at all times',
              'Introduce yourself to everyone — especially in your city and party',
              'Ask directly: "I\'m running for [X] — I\'d love your support"',
              'Support other candidates too — this is collaborative, not cutthroat',
            ].map((rule) => (
              <div key={rule} className="flex items-start gap-2 text-xs" style={{ color: '#2D2D2D', opacity: 0.75 }}>
                <span style={{ color: '#C9A84C' }}>→</span> {rule}
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      number: '05',
      title: 'Delivery Tips',
      content: (
        <div className="space-y-2 text-sm">
          {[
            { tip: 'Practice out loud', desc: 'At least 5 times — not in your head, out loud.' },
            { tip: 'Speak slower', desc: 'Slower than you think you need to. Nerves speed you up.' },
            { tip: 'Eye contact', desc: 'Look at different parts of the room, not just one spot.' },
            { tip: 'Smile', desc: 'Even when your heart is pounding. Especially then.' },
            { tip: 'If you lose your place', desc: 'Pause. Breathe. Continue. Do NOT apologize.' },
            { tip: 'You deserve to be here', desc: 'Imposter syndrome is real. You were selected for a reason.' },
          ].map((item) => (
            <div key={item.tip} className="flex gap-3 p-3 rounded-lg"
                 style={{ backgroundColor: 'rgba(27,42,74,0.04)' }}>
              <span className="font-bold text-xs flex-shrink-0 mt-0.5" style={{ color: '#C9A84C' }}>✓</span>
              <div>
                <span className="font-medium text-xs" style={{ color: '#1B2A4A' }}>{item.tip}: </span>
                <span className="text-xs" style={{ color: '#2D2D2D', opacity: 0.7 }}>{item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      ),
    },
  ]

  return (
    <FadeInSection>
    <section id="runforoffice" style={{ backgroundColor: '#FAF7F2' }} className="py-24 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest mb-3" style={{ color: '#C9A84C' }}>
            Your Playbook
          </p>
          <h2 style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }}
              className="text-4xl md:text-5xl font-bold mb-4">
            Running for Office
          </h2>
          <p style={{ color: '#2D2D2D', opacity: 0.65 }} className="max-w-xl mx-auto">
            On Day 1, you will give a speech. In front of everyone. Whether you're ready or not. Here's how to be ready — and why you should run for everything.
          </p>
        </div>

        {/* Accordion Steps */}
        <StaggerContainer className="space-y-3 mb-12">
          {steps.map((step, index) => (
            <StaggerItem key={index} className="rounded-2xl overflow-hidden"
                 style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
              <button
                onClick={() => setOpenStep(openStep === index ? -1 : index)}
                className="w-full flex items-center justify-between p-6 text-left transition-all"
                style={{ backgroundColor: openStep === index ? '#1B2A4A' : 'white' }}
              >
                <div className="flex items-center gap-4">
                  <span style={{ color: '#C9A84C', fontFamily: '"Playfair Display", serif' }}
                        className="text-2xl font-bold">{step.number}</span>
                  <span className="font-semibold"
                        style={{ color: openStep === index ? 'white' : '#1B2A4A' }}>
                    {step.title}
                  </span>
                </div>
                <span style={{ color: openStep === index ? '#C9A84C' : '#9CA3AF' }}
                      className="text-xl">
                  {openStep === index ? '−' : '+'}
                </span>
              </button>
              {openStep === index && (
                <div className="p-6 pt-0" style={{ backgroundColor: 'white' }}>
                  <div className="pt-4 border-t" style={{ borderColor: '#F3F4F6' }}>
                    {step.content}
                  </div>
                </div>
              )}
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Big Quote */}
        <div className="rounded-2xl p-8 text-center"
             style={{ backgroundColor: '#1B2A4A' }}>
          <p style={{ color: 'white', fontFamily: '"Playfair Display", serif' }}
             className="text-xl italic leading-relaxed mb-4">
            "You might not win every race you enter. That's not the point. The point is that you tried, you spoke, you put yourself out there. Run for everything. Every speech you give makes the next one easier."
          </p>
          <div style={{ backgroundColor: '#C9A84C' }} className="w-12 h-0.5 mx-auto"></div>
        </div>

      </div>
    </section>
    </FadeInSection>
  )
}