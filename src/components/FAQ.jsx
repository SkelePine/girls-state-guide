import { useState } from 'react'
import FadeInSection, { StaggerContainer, StaggerItem } from './FadeInSection'

export default function FAQ() {
  const [openItem, setOpenItem] = useState(null)

  const faqs = [
    {
      q: 'Do I need to know about government before I go?',
      a: 'No — counselors teach you everything on arrival. You don\'t need prior government experience to have a fulfilling experience. What matters is your willingness to engage and participate.',
    },
    {
      q: 'What if I\'m really nervous about public speaking?',
      a: 'That\'s literally the point of the program. Everyone is nervous on Day 1. You\'ll give a speech anyway — and you\'ll be glad you did. Every speech you give makes the next one easier. The environment is supportive, not competitive.',
    },
    {
      q: 'What if I don\'t win any elections?',
      a: 'Run again at the next level. Support other candidates. Apply for appointed positions. Write a letter of interest for a Governor\'s Ceremonial Appointment. The experience isn\'t about winning — it\'s about showing up. Many of the most impactful delegates at Girls State never win an election.',
    },
    {
      q: 'Can I bring my phone?',
      a: 'Yes, but phones are restricted during sessions. You\'ll have access to your phone in the dorms and during free time. Don\'t expect to be on it much during the day — you\'ll be too busy.',
    },
    {
      q: 'What if I have dietary restrictions?',
      a: 'Contact your ALA unit and the program organizers BEFORE the session begins. Don\'t wait until you arrive. The dining commons at UCR has multiple food venues, but it\'s important to communicate your needs in advance.',
    },
    {
      q: 'Is it expensive?',
      a: 'Most delegates pay little to nothing — your ALA unit covers approximately $500–$575. You may have a small transportation cost depending on your district. Ask your unit what, if anything, you\'ll need to cover personally.',
    },
    {
      q: 'What if I\'m an alternate?',
      a: 'Stay ready. Every year, alternates attend. If you\'re selected as a 1st or 2nd Alternate, keep your bags packed and your bill written. Since 2023, each of the Department Alternate applicants were invited to attend.',
    },
    {
      q: 'What should I do if I\'m homesick?',
      a: 'Talk to your counselor. It\'s completely normal. It usually passes by Day 2 once you\'re immersed in the program and have found your city community. Counselors are trained to support you through exactly this.',
    },
    {
      q: 'Can I room with my friend?',
      a: 'Roommates are typically assigned. You probably won\'t room with someone you know — and that\'s actually a good thing. Your roommate might become one of your closest Girls State friends.',
    },
    {
      q: 'What\'s the bus situation?',
      a: 'Your ALA unit coordinates transportation. Buses depart from regional pickup points across California, some as late as 11 PM. Check your unit\'s information packet for your specific bus number, pickup location, and departure time.',
    },
    {
      q: 'Where was Girls State held in 2026?',
      a: 'UC Riverside campus, Riverside, CA — June 22–27, 2026 (83rd session). Location may vary by year — always confirm with your ALA unit.',
    },
    {
      q: 'When is my bill due?',
      a: 'Before the session begins. The 2026 deadline was June 17, 2026 — before the June 22 start. Check your year\'s deadline with your ALA unit. Submit via the Google Form provided in your delegate materials.',
    },
    {
      q: 'What is the Girls State Promise?',
      a: '"I, [state your name], a Citizen of California Girls State, promise to defend the Girls State Banner and all the things it represents against all evil which seeks to destroy them. Therefore, it will be my duty to constantly endeavor to promote and perpetuate true sisterhood and democracy to which all humanity is entitled. With God as my judge and justice as my motto, this is my promise from this day forward." — Recited by all delegates at the Closing Ceremony.',
    },
    {
      q: 'How do I get selected for Girls Nation?',
      a: 'Stand out all week through genuine engagement, strong participation, and leadership. Two delegates from California are selected through peer nominations, staff observation, and interviews. The announcement is made at the Closing Ceremony on the final day.',
    },
    {
      q: 'Can I run for multiple offices?',
      a: 'Yes — and you should. You may hold only ONE elected office at Girls State, but you can run for as many as you want. Running for multiple offices means more speeches, more practice, and more chances to win. Every attempt teaches you something.',
    },
    {
      q: 'What is Girls State currency (G$)?',
      a: 'Each delegate starts with G$500 in a Girls State bank account (Banking Number 3081 at mykidsbank.org). You use G$ to pay filing fees for state offices and to donate to candidates you support. Max donation per candidate is G$25.',
    },
    {
      q: 'What are Governor\'s Ceremonial Appointments?',
      a: 'After the Governor is elected, they appoint delegates to 42 departments, agencies, boards and commissions before the close of the session. To be considered, submit a letter of interest to the Governor by the deadline on the daily schedule. No election required — open to all delegates.',
    },
    {
      q: 'Is this guide official?',
      a: 'No — this is an unofficial guide created by 2026 delegates to help future delegates prepare. Always verify current information with your ALA unit and the official Girls State website at cagirlsstate.org. Program details may change year to year.',
    },
  ]

  return (
    <FadeInSection>
    <section id="faq" style={{ backgroundColor: '#FAF7F2' }} className="py-24 px-6">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest mb-3" style={{ color: '#C9A84C' }}>
            Got Questions?
          </p>
          <h2 style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }}
              className="text-4xl md:text-5xl font-bold mb-4">
            FAQ
          </h2>
          <p style={{ color: '#2D2D2D', opacity: 0.65 }} className="text-sm leading-relaxed max-w-xl mx-auto">
            Everything you were wondering but didn't know who to ask.
          </p>
        </div>

        {/* Accordion */}
        <StaggerContainer className="space-y-3">
          {faqs.map((faq, index) => (
            <StaggerItem key={index} className="card-hover rounded-2xl overflow-hidden"
                 style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
              <button
                onClick={() => setOpenItem(openItem === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left transition-all"
                style={{ backgroundColor: openItem === index ? '#1B2A4A' : 'white' }}
              >
                <span className="font-medium text-sm pr-4"
                      style={{ color: openItem === index ? 'white' : '#1B2A4A' }}>
                  {faq.q}
                </span>
                <span style={{ color: '#C9A84C' }} className="text-xl flex-shrink-0">
                  {openItem === index ? '−' : '+'}
                </span>
              </button>
              {openItem === index && (
                <div className="px-6 pb-6" style={{ backgroundColor: 'white' }}>
                  <p className="text-sm leading-relaxed pt-4"
                     style={{ color: '#2D2D2D', opacity: 0.8 }}>
                    {faq.a}
                  </p>
                </div>
              )}
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Disclaimer */}
        <div className="mt-12 p-6 rounded-2xl text-center"
             style={{ backgroundColor: 'rgba(27,42,74,0.05)', border: '1px solid rgba(27,42,74,0.1)' }}>
          <p style={{ color: '#1B2A4A', opacity: 0.6 }} className="text-xs leading-relaxed">
            This is an unofficial guide created by 2026 delegates. Not affiliated with the American Legion Auxiliary. Always verify current information with your ALA unit and the official website at{' '}
            <a href="https://www.cagirlsstate.org" target="_blank" rel="noopener noreferrer"
               style={{ color: '#C9A84C' }} className="underline">
              cagirlsstate.org
            </a>.
            Program details, locations, and procedures may change year to year.
          </p>
        </div>

      </div>
    </section>
    </FadeInSection>
  )
}