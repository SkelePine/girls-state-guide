import FadeInSection, { StaggerContainer, StaggerItem } from './FadeInSection'

export default function FromTheDelegates() {
    return (
      <FadeInSection>
      <section id="delegates" style={{ backgroundColor: '#FAF7F2' }} className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
  
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest mb-3" style={{ color: '#C9A84C' }}>
              Real Experience
            </p>
            <h2 style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }}
                className="text-4xl md:text-5xl font-bold mb-4">
              From the Delegates
            </h2>
            <p style={{ color: '#2D2D2D', opacity: 0.65 }} className="max-w-xl mx-auto">
              This guide was built by 2026 delegates. Here's what we actually experienced — the moments that surprised us, challenged us, and changed us.
            </p>
          </div>
  
          {/* Keynote Speech */}
          <div className="rounded-2xl overflow-hidden mb-12"
               style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.1)' }}>
            <div style={{ backgroundColor: '#1B2A4A' }} className="p-6">
              <p className="text-xs uppercase tracking-widest mb-1" style={{ color: '#C9A84C' }}>
                2026 Nationalist Party Keynote Address
              </p>
              <p className="text-white opacity-60 text-sm">
                Delivered at ALA California Girls State, 83rd Session · UC Riverside
              </p>
            </div>
            <div style={{ backgroundColor: 'white' }} className="p-8">
              <div style={{ borderLeft: '4px solid #C9A84C' }} className="pl-6">
                <p style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }}
                   className="text-lg italic leading-relaxed mb-6">
                  "Good evening, Nationalists. My name is Inaaya Saif, and I am honored to serve as your Nationalist Party Keynote Speaker.
                </p>
                <p style={{ color: '#2D2D2D', opacity: 0.8 }} className="text-sm leading-relaxed mb-4">
                  These words are not merely a slogan — They represent who we are. They represent a group of young leaders who came to Girls State ready to learn, ready to serve, and ready to make a difference.
                </p>
                <p style={{ color: '#2D2D2D', opacity: 0.8 }} className="text-sm leading-relaxed mb-4">
                  Just three days ago, we all walked into this campus as strangers. Some of us may have been excited — others were nervous — and most didn't even know what to expect. Yet, in just these past few days, we've created something remarkable. We debated ideas. We ran campaigns. We voted, legislated, collaborated, and led. We challenged ourselves to step outside our comfort zones and discover skills we didn't know we had.
                </p>
                <p style={{ color: '#2D2D2D', opacity: 0.8 }} className="text-sm leading-relaxed mb-4">
                  Through all of this, one thing has become clear: Leadership cannot be defined by a title — It's never been about winning or popularity. Leadership is having the courage to speak up when no one else will. Leadership is listening to perspectives that differ from yours with an open mind. Leadership is choosing to serve others before yourself. That's the spirit that defines the Nationalist Party.
                </p>
                <p style={{ color: '#2D2D2D', opacity: 0.8 }} className="text-sm leading-relaxed mb-4">
                  Take a moment to look around this room. You are surrounded by future lawmakers, educators, entrepreneurs, engineers, advocates, and public servants. But more importantly, you are surrounded by people who are already learning how to lead right now — not someday, but today.
                </p>
                <p style={{ color: '#2D2D2D', opacity: 0.8 }} className="text-sm leading-relaxed mb-6">
                  As we continue the remainder of this week, I encourage each of you to continue showing up. Keep sharing ideas. Keep asking questions. Keep being curious. Keep taking risks. And most importantly, keep being yourself. Because every conversation, every obstacle, and every opportunity helps shape the leader you will become.
                </p>
                <p style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }}
                   className="text-lg italic leading-relaxed">
                  "Nationalists, we still have work to do. We have goals to accomplish. We have opportunities to create. We have ideas to share. We have memories to make. But if these first days are any indication of who we are, then I'm certain our future is incredibly bright. Thank you, Nationalists."
                </p>
              </div>
              <p className="text-right text-sm mt-6" style={{ color: '#C9A84C' }}>
                — Inaaya Saif, Nationalist Party Keynote Speaker<br />
                <span className="text-xs opacity-70">Gilbreth City · McMahon County · 2026</span>
              </p>
            </div>
          </div>
  
          {/* Personal Reflections */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <StaggerItem className="p-6 rounded-2xl"
                 style={{ backgroundColor: 'white', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', borderTop: '4px solid #C9A84C' }}>
              <p className="text-xs uppercase tracking-widest mb-3" style={{ color: '#C9A84C' }}>
                On Running for Multiple Offices
              </p>
              <p style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }}
                 className="text-base italic leading-relaxed mb-4">
                "I applied for Platform Committee Chair, Superintendent of Schools, District Attorney, and Attorney General. I didn't win every race. But every time I stood up and spoke, I got better. Every time I put my name on a form, I got braver. That's the whole point."
              </p>
              <p style={{ color: '#C9A84C' }} className="text-xs uppercase tracking-widest">
                — 2026 Delegate, Gilbreth City
              </p>
            </StaggerItem>

            <StaggerItem className="p-6 rounded-2xl"
                 style={{ backgroundColor: 'white', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', borderTop: '4px solid #1B2A4A' }}>
              <p className="text-xs uppercase tracking-widest mb-3" style={{ color: '#C9A84C' }}>
                On Making Community
              </p>
              <p style={{ color: '#1B2A4A', fontFamily: '"Playfair Display", serif' }}
                 className="text-base italic leading-relaxed mb-4">
                "In order to have a positive Girls State experience, you have to be present. You can be really in everyone's face, or you can be more laid back — but as long as you make those connections with friends, counselors, and everyone around you, it'll be so much more memorable. Make that community."
              </p>
              <p style={{ color: '#C9A84C' }} className="text-xs uppercase tracking-widest">
                — 2026 Delegate, McMahon County
              </p>
            </StaggerItem>
          </StaggerContainer>

          {/* One Sentence */}
          <div className="rounded-2xl p-10 text-center" style={{ backgroundColor: '#1B2A4A' }}>
            <p className="text-xs uppercase tracking-widest mb-6" style={{ color: '#C9A84C' }}>
              What We'd Tell Our Pre-Girls State Selves
            </p>
            <p style={{ color: 'white', fontFamily: '"Playfair Display", serif' }}
               className="text-2xl md:text-3xl italic leading-relaxed mb-6">
              "Just try your best for everything. Make the most out of it. Run for positions. Network with people. Talk to others. Show up. That's it. That's the whole guide."
            </p>
            <div style={{ backgroundColor: '#C9A84C' }} className="w-12 h-0.5 mx-auto mb-4"></div>
            <p className="text-white opacity-40 text-sm">— 2026 Delegates, ALA California Girls State</p>
          </div>
  
          {/* Share Your Story */}
          <div className="mt-12 text-center p-8 rounded-2xl"
               style={{ border: '2px dashed rgba(201,168,76,0.4)' }}>
            <p style={{ color: '#C9A84C' }} className="text-sm uppercase tracking-widest mb-3">
              This Section Grows Over Time
            </p>
            <p style={{ color: '#2D2D2D', opacity: 0.65 }} className="text-sm max-w-md mx-auto">
              Are you a Girls State alumna with a story to share? This guide is built by delegates, for delegates. Reach out to add your experience.
            </p>
          </div>
  
        </div>
      </section>
      </FadeInSection>
    )
  }