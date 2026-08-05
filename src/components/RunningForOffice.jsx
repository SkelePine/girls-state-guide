import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import FadeInSection, { StaggerContainer, StaggerItem } from './FadeInSection'

export default function RunningForOffice() {
  const [openStep, setOpenStep] = useState(0)

  const steps = [
    {
      number: '01',
      title: 'Choose Your Office',
      content: (
        <div className="space-y-3 text-sm leading-relaxed" style={{ color: '#2D2D2D', opacity: 0.85 }}>
          <p>Think about your strengths. City offices are great for everyone — lower stakes, immediate community. County and state offices are more competitive but absolutely worth trying.</p>
          <p>You can run at multiple levels throughout the week. Don&apos;t stop after one race.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
            {[
              { type: 'Speaker / Debater', go: 'Governor, AG, District Attorney' },
              { type: 'Organizer', go: 'City Clerk, Secretary of State' },
              { type: 'Community Builder', go: 'Mayor, Commissioner of Inspiration' },
              { type: 'Policy Writer', go: 'Platform Committee, Assemblymember' },
            ].map((item) => (
              <div
                key={item.type}
                className="p-4 rounded-xl"
                style={{ backgroundColor: 'rgba(201,168,76,0.1)', borderLeft: '3px solid #C9A84C' }}
              >
                <p className="font-semibold text-xs mb-1" style={{ color: '#1B2A4A' }}>{item.type}</p>
                <p className="text-xs" style={{ color: '#2D2D2D', opacity: 0.7 }}>→ {item.go}</p>
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
        <div className="space-y-4 text-sm leading-relaxed">
          <p style={{ color: '#2D2D2D', opacity: 0.85 }}>The structure that works every time:</p>
          <div className="space-y-2">
            {[
              { step: '1. Hook', desc: 'Don\'t start with "Hi my name is." Start with something that makes people look up.' },
              { step: '2. Who You Are', desc: 'Name, where you\'re from, one real thing about you.' },
              { step: '3. Why This Office', desc: 'What specifically draws you to this role.' },
              { step: '4. What You\'ll Do', desc: '2–3 concrete, specific things.' },
              { step: '5. Close Strong', desc: 'Ask for the vote. End with energy.' },
            ].map((item) => (
              <div
                key={item.step}
                className="flex gap-3 p-3 rounded-xl"
                style={{ backgroundColor: 'rgba(27,42,74,0.04)' }}
              >
                <span className="font-bold text-xs flex-shrink-0" style={{ color: '#C9A84C' }}>{item.step}</span>
                <span className="text-xs" style={{ color: '#2D2D2D', opacity: 0.8 }}>{item.desc}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 p-5 rounded-xl" style={{ backgroundColor: '#1B2A4A' }}>
            <p className="text-xs uppercase tracking-widest mb-3" style={{ color: '#C9A84C' }}>Sentence Starters</p>
            {[
              '"I believe that [value] is the foundation of great leadership, and that\'s exactly why I\'m running for..."',
              '"Leadership isn\'t about a title. It\'s about [specific thing]. And that\'s what I\'m here to do."',
              '"If elected, my three priorities will be..."',
              '"I\'m not just running for [office] — I\'m running for every girl in this room who..."',
            ].map((starter) => (
              <p key={starter} className="text-xs mb-2 italic" style={{ color: 'rgba(255,255,255,0.72)' }}>{starter}</p>
            ))}
          </div>
        </div>
      ),
    },
    {
      number: '03',
      title: 'Make Your Campaign Poster (State Only)',
      content: (
        <div className="space-y-3 text-sm leading-relaxed">
          <div
            className="p-4 rounded-xl"
            style={{ backgroundColor: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.35)' }}
          >
            <p className="text-xs uppercase tracking-widest mb-2" style={{ color: '#C9A84C' }}>
              Important Distinction
            </p>
            <p className="text-xs leading-relaxed" style={{ color: '#1B2A4A' }}>
              Campaign posters are for <strong>state offices only</strong>. If you&apos;re running for city or county,
              you do <strong>not</strong> make a poster — focus on speeches, introductions, and relationships.
              Posters become part of the campaign once you&apos;re running at the state level.
            </p>
          </div>
          <p className="text-xs" style={{ color: '#2D2D2D', opacity: 0.75 }}>
            If you&apos;re running for a state office, here&apos;s what makes a strong poster:
          </p>
          <div className="grid grid-cols-1 gap-2">
            {[
              { rule: 'Your name LARGE', desc: 'Readable from across a room' },
              { rule: 'Bold 2–3 color scheme', desc: 'Pick colors that pop and match your energy' },
              { rule: 'Clear slogan', desc: 'Under 8 words. Something that sounds like YOU.' },
              { rule: 'Your photo', desc: 'People vote for faces they recognize' },
              { rule: 'The office you\'re running for', desc: 'Make it obvious what you want' },
              { rule: 'BLUE TAPE ONLY', desc: 'Only approved tape for hanging in residence halls' },
            ].map((item) => (
              <div
                key={item.rule}
                className="flex items-start gap-3 p-3 rounded-xl"
                style={{ backgroundColor: 'rgba(201,168,76,0.08)' }}
              >
                <span style={{ color: '#C9A84C' }} className="text-xs font-bold flex-shrink-0 mt-0.5">✓</span>
                <div>
                  <span className="font-medium text-xs" style={{ color: '#1B2A4A' }}>{item.rule}</span>
                  <span className="text-xs ml-2" style={{ color: '#2D2D2D', opacity: 0.65 }}>— {item.desc}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs pt-1" style={{ color: '#2D2D2D', opacity: 0.7 }}>
            Free tool: <strong>Canva.com</strong> has free campaign poster templates. Use them for state races.
          </p>
        </div>
      ),
    },
    {
      number: '04',
      title: 'Campaign — But Know the Rules',
      content: (
        <div className="space-y-4 text-sm leading-relaxed">
          <div>
            <p className="text-xs uppercase tracking-widest mb-3" style={{ color: '#C9A84C' }}>
              By Level — Posters &amp; Fundraising
            </p>
            <div className="grid grid-cols-1 gap-2">
              {[
                {
                  level: 'City',
                  rules: 'No campaign poster. You cannot fundraise. Focus on speeches, introductions, and earning votes in your city.',
                },
                {
                  level: 'County',
                  rules: 'No campaign poster. Fundraising is optional — you may fundraise if you choose, but it is not required.',
                },
                {
                  level: 'State',
                  rules: 'Campaign poster required. Fundraising is required to cover filing fees. This is the level where posters + G$ fundraising are part of the process.',
                },
              ].map((item) => (
                <div
                  key={item.level}
                  className="p-3 rounded-xl"
                  style={{ backgroundColor: 'rgba(27,42,74,0.04)', borderLeft: '3px solid #C9A84C' }}
                >
                  <p className="font-semibold text-xs mb-1" style={{ color: '#1B2A4A' }}>{item.level}</p>
                  <p className="text-xs leading-relaxed" style={{ color: '#2D2D2D', opacity: 0.8 }}>{item.rules}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-xl" style={{ backgroundColor: '#FEF3C7', border: '1px solid #FCD34D' }}>
            <p className="font-semibold text-xs mb-2" style={{ color: '#92400E' }}>Important Rule (When You Fundraise)</p>
            <p className="text-xs" style={{ color: '#92400E' }}>
              When you are fundraising, you are NOT campaigning. You can ONLY start campaigning AFTER you are announced as a qualified candidate.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold mb-2" style={{ color: '#1B2A4A' }}>
              If you&apos;re fundraising (state required · county optional)
            </p>
            <p className="text-xs mb-3" style={{ color: '#2D2D2D', opacity: 0.85 }}>
              Script: <em>&quot;I am fundraising to file for a state office, are you willing to contribute a donation?&quot;</em> — do NOT ask for votes during fundraising.
            </p>
            <div className="space-y-2">
              {[
                'Max $25 from any single contributor',
                'Track every contributor\'s name, city, and amount (required for Form #12)',
                'Must maintain at least $1 in your account at all times',
                'Introduce yourself to everyone — especially in your city and party',
                'Ask directly: "I\'m running for [X] — I\'d love your support"',
                'Support other candidates too — this is collaborative, not cutthroat',
              ].map((rule) => (
                <div key={rule} className="flex items-start gap-2 text-xs" style={{ color: '#2D2D2D', opacity: 0.8 }}>
                  <span style={{ color: '#C9A84C' }}>→</span> {rule}
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      number: '05',
      title: 'Delivery Tips',
      content: (
        <div className="space-y-2 text-sm leading-relaxed">
          {[
            { tip: 'Practice out loud', desc: 'At least 5 times — not in your head, out loud.' },
            { tip: 'Speak slower', desc: 'Slower than you think you need to. Nerves speed you up.' },
            { tip: 'Eye contact', desc: 'Look at different parts of the room, not just one spot.' },
            { tip: 'Smile', desc: 'Even when your heart is pounding. Especially then.' },
            { tip: 'If you lose your place', desc: 'Pause. Breathe. Continue. Do NOT apologize.' },
            { tip: 'You deserve to be here', desc: 'Imposter syndrome is real. You were selected for a reason.' },
          ].map((item) => (
            <div
              key={item.tip}
              className="flex gap-3 p-3 rounded-xl"
              style={{ backgroundColor: 'rgba(27,42,74,0.04)' }}
            >
              <span className="font-bold text-xs flex-shrink-0 mt-0.5" style={{ color: '#C9A84C' }}>✓</span>
              <div>
                <span className="font-medium text-xs" style={{ color: '#1B2A4A' }}>{item.tip}: </span>
                <span className="text-xs" style={{ color: '#2D2D2D', opacity: 0.75 }}>{item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      ),
    },
  ]

  return (
    <FadeInSection>
      <section id="runforoffice" style={{ backgroundColor: '#FAF7F2' }} className="py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-widest mb-3" style={{ color: '#C9A84C' }}>
              Your Playbook
            </p>
            <h2
              style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            >
              Running for Office
            </h2>
            <p style={{ color: '#2D2D2D', opacity: 0.65 }} className="text-sm leading-relaxed max-w-xl mx-auto">
              On Day 1, you will give a speech. In front of everyone. Whether you&apos;re ready or not. Here&apos;s how to be ready — and why you should run for everything.
            </p>
          </div>

          <StaggerContainer className="space-y-3 mb-12">
            {steps.map((step, index) => {
              const open = openStep === index
              return (
                <StaggerItem
                  key={step.number}
                  className="card-hover rounded-2xl overflow-hidden"
                  style={{
                    boxShadow: open
                      ? '0 10px 28px rgba(27,42,74,0.14)'
                      : '0 2px 12px rgba(0,0,0,0.06)',
                    border: open ? '1px solid rgba(201,168,76,0.35)' : '1px solid transparent',
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenStep(open ? -1 : index)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left transition-all border-none cursor-pointer"
                    style={{ backgroundColor: open ? '#1B2A4A' : 'white' }}
                    aria-expanded={open}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className="flex items-center justify-center rounded-full text-sm font-bold flex-shrink-0"
                        style={{
                          width: 40,
                          height: 40,
                          backgroundColor: open ? 'rgba(201,168,76,0.2)' : 'rgba(201,168,76,0.15)',
                          color: '#C9A84C',
                          fontFamily: '"Playfair Display", serif',
                        }}
                      >
                        {step.number}
                      </span>
                      <span
                        className="font-semibold text-sm sm:text-base"
                        style={{ color: open ? 'white' : '#1B2A4A' }}
                      >
                        {step.title}
                      </span>
                    </div>
                    <span
                      style={{ color: open ? '#C9A84C' : '#9CA3AF' }}
                      className="text-xl leading-none ml-3"
                    >
                      {open ? '−' : '+'}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        key={`step-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: 'easeOut' }}
                        className="overflow-hidden"
                        style={{ backgroundColor: 'white' }}
                      >
                        <div className="px-5 sm:px-6 pb-6 pt-2">
                          <div
                            className="pt-4"
                            style={{ borderTop: '1px solid rgba(27,42,74,0.08)' }}
                          >
                            {step.content}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </StaggerItem>
              )
            })}
          </StaggerContainer>

          {/* What to do if you lose */}
          <div
            className="rounded-2xl p-7 sm:p-8 mb-8"
            style={{
              backgroundColor: 'white',
              boxShadow: '0 4px 20px rgba(27,42,74,0.08)',
              borderTop: '3px solid #C9A84C',
            }}
          >
            <p className="text-xs uppercase tracking-widest mb-2" style={{ color: '#C9A84C' }}>
              Mental Reset
            </p>
            <h3
              style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }}
              className="text-xl sm:text-2xl font-bold mb-4"
            >
              What to Do If You Lose
            </h3>
            <p className="text-sm leading-relaxed mb-5" style={{ color: '#2D2D2D', opacity: 0.8 }}>
              Most people lose at least one race. That doesn&apos;t mean you failed — it means you showed up. Here&apos;s how to reset and keep going.
            </p>
            <div className="space-y-3">
              {[
                { title: 'Feel it for a minute — then move', desc: 'It\'s okay to be disappointed. Take a breath. Then decide your next move before the day ends.' },
                { title: 'Run again at the next level', desc: 'City → county → state. A loss at one level doesn\'t block you from the next. Many strong candidates win later in the week.' },
                { title: 'Support someone else\'s campaign', desc: 'Help a friend with speeches, posters, or votes. Leadership isn\'t only about your name on the ballot.' },
                { title: 'Apply for appointed roles', desc: 'Governor\'s Ceremonial Appointments, committee work, and city roles still need people who show up.' },
                { title: 'Keep speaking and connecting', desc: 'Every speech makes the next one easier. The week rewards presence — titles optional.' },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-3 p-3 rounded-xl"
                  style={{ backgroundColor: 'rgba(27,42,74,0.04)' }}
                >
                  <span className="font-bold text-xs flex-shrink-0 mt-0.5" style={{ color: '#C9A84C' }}>→</span>
                  <div>
                    <p className="font-medium text-xs mb-0.5" style={{ color: '#1B2A4A' }}>{item.title}</p>
                    <p className="text-xs leading-relaxed" style={{ color: '#2D2D2D', opacity: 0.75 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="rounded-2xl p-8 sm:p-10 text-center relative overflow-hidden"
            style={{ backgroundColor: '#1B2A4A' }}
          >
            <div
              className="absolute top-0 left-0 right-0 h-1"
              style={{ background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }}
              aria-hidden="true"
            />
            <p
              style={{ color: 'white', fontFamily: '"Playfair Display", serif' }}
              className="text-xl italic leading-relaxed mb-4"
            >
              &quot;You might not win every race you enter. That&apos;s not the point. The point is that you tried, you spoke, you put yourself out there. Run for everything. Every speech you give makes the next one easier.&quot;
            </p>
            <div style={{ backgroundColor: '#C9A84C' }} className="w-12 h-0.5 mx-auto" />
          </div>
        </div>
      </section>
    </FadeInSection>
  )
}
