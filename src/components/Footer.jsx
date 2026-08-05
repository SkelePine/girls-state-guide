import FadeInSection, { StaggerContainer, StaggerItem } from './FadeInSection'

export default function Footer() {
    return (
      <FadeInSection>
      <footer style={{ backgroundColor: '#1B2A4A' }} className="py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          
          <div style={{ backgroundColor: '#C9A84C' }} className="w-16 h-0.5 mx-auto mb-8"></div>
          
          <p style={{ color: '#C9A84C', fontFamily: '"Playfair Display", serif' }}
             className="text-2xl font-bold mb-3">
            CA Girls State Guide
          </p>
          
          <p className="text-white opacity-50 text-sm mb-6 max-w-md mx-auto">
            An unofficial guide built by 2026 delegates for every delegate who comes after. Not affiliated with the American Legion Auxiliary.
          </p>

          <StaggerContainer className="flex flex-wrap justify-center gap-6 mb-8">
            {[
              { label: 'Official Site', url: 'https://www.cagirlsstate.org' },
              { label: 'GSAF', url: 'https://www.cagsaf.org' },
              { label: 'ALA California', url: 'https://calegionaux.org' },
              { label: 'Girls State Store', url: 'https://shopcagirlsstate.com' },
            ].map((link) => (
              <StaggerItem key={link.label}>
                <a href={link.url} target="_blank" rel="noopener noreferrer"
                   className="text-white opacity-50 hover:opacity-100 text-sm transition-opacity">
                  {link.label}
                </a>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div style={{ backgroundColor: 'rgba(255,255,255,0.1)' }} className="w-full h-px mb-6"></div>
          
          <p className="text-white opacity-30 text-xs">
            © 2026 CA Girls State Guide · Built with 💛 by 2026 delegates
          </p>

        </div>
      </footer>
      </FadeInSection>
    )
  }
