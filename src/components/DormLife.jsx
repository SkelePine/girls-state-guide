import FadeInSection, { StaggerContainer, StaggerItem } from './FadeInSection'
import IconBadge from './IconBadge'

export default function DormLife() {
    const provided = [
      { icon: '🛏️', item: 'Extra-long twin bed (80") with mattress' },
      { icon: '🪑', item: 'Desk and chair' },
      { icon: '👗', item: 'Dresser and wardrobe' },
      { icon: '📶', item: 'Wi-Fi access' },
      { icon: '🧺', item: 'Laundry facilities in building' },
      { icon: '💻', item: '24/7 computer labs' },
    ]
  
    const tips = [
      { title: 'Your Roommate', desc: 'You\'ll be assigned a roommate you likely don\'t know. Introduce yourself immediately. Your roommate might become one of your closest Girls State friends.' },
      { title: 'The Bathrooms', desc: 'Communal bathrooms shared by your floor. Bring shower shoes and a robe. Go early in the morning for shorter waits. It\'s not as bad as it sounds.' },
      { title: 'Lights Out', desc: '10:30 PM lights out is enforced. Take it seriously. Days start at 6:00 AM — you need the sleep.' },
      { title: 'Your Phone', desc: 'Phones are allowed in the dorms but restricted during sessions. Don\'t be alarmed if you can\'t reach your daughter immediately.' },
      { title: 'Posters', desc: 'Campaign posters may ONLY be hung inside residence halls using blue tape. No other tape. No hanging outside.' },
      { title: 'The Heat', desc: 'Riverside in late June hits 90°F+. Pack breathable fabrics and sunscreen. Lecture halls are air-conditioned — bring a layer.' },
    ]
  
    return (
      <FadeInSection>
      <section id="dorms" style={{ backgroundColor: '#1B2A4A' }} className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
  
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-widest mb-3" style={{ color: '#C9A84C' }}>
              Where You'll Sleep
            </p>
            <h2 style={{ color: 'white', fontFamily: '"Playfair Display", serif' }}
                className="text-4xl md:text-5xl font-bold mb-4">
              Dorm Life & Room Assignments
            </h2>
            <p className="text-white opacity-60 text-sm leading-relaxed max-w-xl mx-auto">
              Dorming for the first time can feel like a lot. Here's exactly what to expect so nothing catches you off guard.
            </p>
          </div>
  
          {/* Campus Info Banner */}
          <div className="rounded-2xl p-6 mb-12 text-center"
               style={{ backgroundColor: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.4)' }}>
            <p style={{ color: '#C9A84C' }} className="text-xs uppercase tracking-widest mb-2">2026 Campus</p>
            <p style={{ color: 'white' }} className="text-xl font-bold mb-1">University of California, Riverside (UCR)</p>
            <p className="text-white opacity-60 text-sm">900 University Ave, Riverside, CA 92521</p>
            <p className="text-white opacity-40 text-xs mt-2">Note: Campus location may vary by year — confirm with your ALA unit</p>
          </div>
  
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
  
            {/* What's Provided */}
            <div className="card-hover rounded-2xl p-8" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
              <h3 style={{ color: '#C9A84C', fontFamily: '"Playfair Display", serif' }}
                  className="text-xl font-bold mb-6">What's Provided</h3>
              <StaggerContainer className="space-y-4">
                {provided.map((item) => (
                  <StaggerItem key={item.item} className="flex items-center gap-3">
                    <IconBadge size="sm" variant="light">{item.icon}</IconBadge>
                    <span className="text-white opacity-75 text-sm">{item.item}</span>
                  </StaggerItem>
                ))}
              </StaggerContainer>
              <div className="mt-6 p-3 rounded-xl"
                   style={{ backgroundColor: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)' }}>
                <p className="text-xs" style={{ color: '#C9A84C' }}>
                  ⚠️ Confirm with your unit whether bedding/linens are provided — bring your own to be safe.
                </p>
              </div>
            </div>
  
            {/* Dining */}
            <div className="card-hover rounded-2xl p-8" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
              <h3 style={{ color: '#C9A84C', fontFamily: '"Playfair Display", serif' }}
                  className="text-xl font-bold mb-6">Dining</h3>
              <p className="text-white opacity-70 text-sm leading-relaxed mb-4">
                All meals are provided in the campus dining hall. At UCR, the main facility is the <strong className="text-white">Glasgow Dining Commons</strong> — an 800+ seat all-you-can-eat facility with six food venues.
              </p>
              <p className="text-white opacity-70 text-sm leading-relaxed mb-6">
                Days run from 6:00 AM to 10:30 PM. Eat breakfast. You need the fuel.
              </p>
              <div className="p-3 rounded-xl"
                   style={{ backgroundColor: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)' }}>
                <p className="text-xs" style={{ color: '#C9A84C' }}>
                  🍽️ Have dietary restrictions? Contact your ALA unit and program organizers BEFORE the session begins.
                </p>
              </div>
            </div>
          </div>
  
          {/* Tips Grid */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tips.map((tip) => (
              <StaggerItem key={tip.title} className="card-hover p-5 rounded-xl"
                   style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <h4 style={{ color: '#C9A84C', fontFamily: '"Playfair Display", serif' }} className="font-semibold mb-2 text-sm">{tip.title}</h4>
                <p className="text-white opacity-60 text-xs leading-relaxed">{tip.desc}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
  
        </div>
      </section>
      </FadeInSection>
    )
  }