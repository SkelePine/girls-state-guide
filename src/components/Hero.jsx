import { motion } from 'framer-motion'
import FadeInSection, { StaggerContainer, StaggerItem } from './FadeInSection'

const stats = [
  { number: '450', label: 'Delegates Selected' },
  { number: '556K', label: 'CA Juniors Eligible' },
  { number: '83rd', label: '2026 Session' },
  { number: '1940', label: 'Year CA Program Began' },
]

const sparkles = [
  { className: 'absolute -top-4 -left-1 md:-left-10 md:top-0', size: 16, delay: 0 },
  { className: 'absolute -top-1 -right-2 md:-right-12 md:top-3', size: 12, delay: 0.8 },
  { className: 'absolute top-1/2 -left-6 md:-left-14 hidden sm:block', size: 10, delay: 1.6 },
  { className: 'absolute bottom-4 -right-3 md:-right-10', size: 14, delay: 1.2 },
  { className: 'absolute -bottom-1 left-1/4 hidden md:block', size: 9, delay: 2.1 },
  { className: 'absolute top-8 right-1/4 hidden md:block', size: 8, delay: 2.6 },
]

function Sparkle({ className, delay = 0, size = 20 }) {
  return (
    <motion.svg
      className={`${className} pointer-events-none`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0.25, 0.85, 0.25],
        scale: [0.9, 1.1, 0.9],
        rotate: [0, 12, 0],
      }}
      transition={{
        duration: 3.8,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
    >
      <path
        d="M12 2L13.8 9.2L21 11L13.8 12.8L12 20L10.2 12.8L3 11L10.2 9.2L12 2Z"
        fill="#C9A84C"
      />
    </motion.svg>
  )
}

function GoldDivider({ className, delay = 0 }) {
  return (
    <motion.div
      className={`h-0.5 w-16 ${className}`}
      style={{ backgroundColor: '#C9A84C', transformOrigin: 'center' }}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay }}
    />
  )
}

export default function Hero() {
  return (
    <FadeInSection>
      <section className="hero-gradient relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden">

        {/* Decorative top line */}
        <GoldDivider className="mb-8 relative z-10" delay={0.15} />

        {/* Eyebrow text */}
        <p className="relative z-10 text-sm uppercase tracking-widest mb-4" style={{ color: '#C9A84C' }}>
          ALA California Girls State · 2026 & Beyond
        </p>

        {/* Main headline */}
        <div className="relative z-10 max-w-4xl mb-6">
          {sparkles.map((sparkle) => (
            <Sparkle key={sparkle.className} {...sparkle} />
          ))}
          <h1 style={{ color: 'white', fontFamily: '"Playfair Display", serif' }}
              className="text-5xl md:text-7xl font-bold leading-tight">
            Everything You Wish You Knew Before Girls State.
          </h1>
        </div>

        {/* Subheadline */}
        <p className="relative z-10 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed" style={{ color: 'white', opacity: 0.75 }}>
          The unofficial, actually-useful guide to ALA California Girls State — from the moment you get selected to the moment you get home.
        </p>

        {/* CTA Cards */}
        <StaggerContainer className="relative z-10 flex flex-col md:flex-row gap-4 mb-16">
          <StaggerItem>
            <a href="#apply" style={{ backgroundColor: 'white', color: '#1B2A4A' }}
               className="hero-cta px-8 py-4 rounded-lg text-sm font-medium shadow-md block">
              📋 Just got selected? Start here
            </a>
          </StaggerItem>
          <StaggerItem>
            <a href="#packing" style={{ backgroundColor: 'transparent', color: 'white', border: '2px solid white' }}
               className="hero-cta px-8 py-4 rounded-lg text-sm font-medium shadow-md block">
              🧳 Getting ready to go? Jump to Packing
            </a>
          </StaggerItem>
          <StaggerItem>
            <a href="#office" style={{ backgroundColor: '#C9A84C', color: 'white' }}
               className="hero-cta px-8 py-4 rounded-lg text-sm font-medium shadow-md block">
              🎤 Want to run for office? Go to the Playbook
            </a>
          </StaggerItem>
        </StaggerContainer>

        {/* Stats bar */}
        <StaggerContainer className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-16 mb-16">
          {stats.map((stat, index) => (
            <StaggerItem key={stat.label} className="text-center">
              <motion.p
                style={{ color: '#C9A84C', fontFamily: '"Playfair Display", serif' }}
                className="text-3xl font-bold"
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 3.2 + index * 0.35,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: index * 0.55,
                }}
              >
                {stat.number}
              </motion.p>
              <p className="text-xs uppercase tracking-widest mt-1" style={{ color: 'white', opacity: 0.6 }}>
                {stat.label}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Byline */}
        <p className="relative z-10 text-sm italic" style={{ color: 'white', opacity: 0.5 }}>
          Built by 2026 delegates, for every delegate who comes after.
        </p>

        {/* Bottom decorative line */}
        <GoldDivider className="mt-8 relative z-10" delay={0.45} />

      </section>
    </FadeInSection>
  )
}
