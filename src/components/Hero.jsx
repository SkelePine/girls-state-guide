import { useState, useEffect } from 'react'
import DecorSparkles from './DecorSparkles'
import { siteConfig } from '../siteConfig'
import { jumpTo } from '../hooks/useHashTab'

const stats = [
  { key: 'delegates', label: 'Delegates Selected', from: 0, to: 450, suffix: '' },
  { key: 'juniors', label: 'CA Juniors Eligible', from: 0, to: 556, suffix: 'K' },
  { key: 'session', label: '2026 Session', from: 0, to: 83, suffix: 'rd' },
  { key: 'year', label: 'Year CA Program Began', from: 1900, to: 1940, suffix: '' },
]

const secondaryCtas = [
  { label: 'Packing List', onClick: () => jumpTo('prepare', 'packing') },
  { label: 'Running for Office', onClick: () => jumpTo('runforoffice') },
  { label: 'For Parents', onClick: () => jumpTo('parents') },
]

/** Count-up that survives React Strict Mode remounts */
function AnimatedStat({ from, to, suffix = '', delay = 0 }) {
  const [display, setDisplay] = useState(from)

  useEffect(() => {
    let frame = 0
    let startAt = null
    const duration = 2000
    let cancelled = false

    const tick = (now) => {
      if (cancelled) return
      if (startAt === null) startAt = now + delay * 1000
      if (now < startAt) {
        frame = requestAnimationFrame(tick)
        return
      }
      const t = Math.min(1, (now - startAt) / duration)
      const eased = 1 - (1 - t) ** 3
      setDisplay(Math.round(from + (to - from) * eased))
      if (t < 1) {
        frame = requestAnimationFrame(tick)
      } else {
        setDisplay(to)
      }
    }

    frame = requestAnimationFrame(tick)

    // Safety: always land on final value even if rAF is interrupted
    const failSafe = window.setTimeout(() => {
      if (!cancelled) setDisplay(to)
    }, delay * 1000 + duration + 100)

    return () => {
      cancelled = true
      cancelAnimationFrame(frame)
      window.clearTimeout(failSafe)
    }
  }, [from, to, delay])

  return (
    <span>
      {display}
      {suffix}
    </span>
  )
}

function GoldDivider({ className = '' }) {
  return (
    <div
      className={`hero-gold-divider h-0.5 w-16 mx-auto ${className}`}
      style={{ backgroundColor: '#C9A84C' }}
      aria-hidden="true"
    />
  )
}

export default function Hero() {
  return (
    <section className="hero-gradient relative flex flex-col items-center text-center px-4 sm:px-6 pt-8 pb-8 sm:pt-10 sm:pb-10 overflow-x-clip">
      <GoldDivider className="mb-4 relative z-10" />

      <p className="relative z-10 text-xs uppercase tracking-widest mb-2" style={{ color: '#C9A84C' }}>
        ALA California Girls State · {siteConfig.verifiedYear} & Beyond
      </p>

      <div className="relative z-10 max-w-4xl mb-3 px-6 sm:px-12">
        <DecorSparkles />
        <h1
          style={{ color: 'white', fontFamily: '"Playfair Display", serif' }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
        >
          Everything You Wish You Knew Before Girls State.
        </h1>
      </div>

      <p
        className="relative z-10 text-sm sm:text-base max-w-2xl mb-5 leading-relaxed px-1"
        style={{ color: 'rgba(255,255,255,0.82)' }}
      >
        The unofficial, actually-useful guide to ALA California Girls State — from the moment you get selected to the moment you get home.
      </p>

      <div className="relative z-10 w-full max-w-sm px-1 mb-3">
        <button
          type="button"
          onClick={() => jumpTo('apply', 'apply')}
          style={{ backgroundColor: '#C9A84C', color: '#1B2A4A', minHeight: 46 }}
          className="hero-cta w-full px-8 py-3 rounded-xl text-sm font-semibold shadow-md border-none cursor-pointer"
        >
          Just got selected? Start here
        </button>
      </div>

      {/* Soft gold secondary pills — visual only; same jump targets */}
      <div className="relative z-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-7">
        {secondaryCtas.map((cta) => (
          <button
            key={cta.label}
            type="button"
            onClick={cta.onClick}
            className="hero-cta border-none cursor-pointer text-sm font-medium px-4 sm:px-5 rounded-full transition-opacity hover:opacity-90"
            style={{
              backgroundColor: 'rgba(255,255,255,0.1)',
              color: 'rgba(255,255,255,0.92)',
              border: '1px solid rgba(255,255,255,0.35)',
              minHeight: 40,
            }}
          >
            {cta.label}
          </button>
        ))}
      </div>

      {/* Stats — count up + gentle float */}
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8 mb-5 w-full max-w-3xl">
        {stats.map((stat, index) => (
          <div key={stat.key} className="text-center">
            <p
              className="hero-stat-float text-2xl sm:text-3xl md:text-4xl font-bold tabular-nums"
              style={{
                color: '#C9A84C',
                fontFamily: '"Playfair Display", serif',
                animationDelay: `${index * 0.4}s`,
              }}
            >
              <AnimatedStat
                from={stat.from}
                to={stat.to}
                suffix={stat.suffix}
                delay={0.15 + index * 0.1}
              />
            </p>
            <p
              className="text-[10px] sm:text-xs uppercase tracking-widest mt-1"
              style={{ color: 'rgba(255,255,255,0.72)' }}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      <div className="relative z-10 px-8 py-1 mb-3">
        <DecorSparkles
          sparkles={[
            { className: 'absolute -top-3 -left-3', size: 11, delay: 0.2 },
            { className: 'absolute -top-2 -right-4', size: 13, delay: 1 },
            { className: 'absolute -bottom-2 left-1/2', size: 9, delay: 1.6 },
          ]}
        />
        <p className="relative text-sm italic leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
          {siteConfig.byline}
        </p>
      </div>

      <GoldDivider className="relative z-10" />
    </section>
  )
}
