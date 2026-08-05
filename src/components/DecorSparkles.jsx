const DEFAULT_SPARKLES = [
  { className: 'absolute -top-5 left-2 md:-left-8', size: 16, delay: 0 },
  { className: 'absolute -top-2 -right-1 md:-right-10', size: 12, delay: 0.7 },
  { className: 'absolute top-1/2 -left-8 md:-left-14 hidden sm:block', size: 10, delay: 1.4 },
  { className: 'absolute bottom-2 -right-2 md:-right-8', size: 14, delay: 1.1 },
  { className: 'absolute -bottom-3 left-1/4', size: 9, delay: 1.9 },
  { className: 'absolute top-0 right-1/4 hidden md:block', size: 11, delay: 0.4 },
]

function Sparkle({ className, delay = 0, size = 20 }) {
  return (
    <svg
      className={`hero-sparkle ${className} pointer-events-none`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      style={{ animationDelay: `${delay}s` }}
    >
      <path
        d="M12 2L13.8 9.2L21 11L13.8 12.8L12 20L10.2 12.8L3 11L10.2 9.2L12 2Z"
        fill="#C9A84C"
      />
    </svg>
  )
}

/** Twinkling gold stars around a heading or brand name */
export default function DecorSparkles({ sparkles = DEFAULT_SPARKLES, className = '' }) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-visible ${className}`} aria-hidden="true">
      {sparkles.map((s) => (
        <Sparkle key={`${s.className}-${s.delay}`} {...s} />
      ))}
    </div>
  )
}

export { Sparkle, DEFAULT_SPARKLES }
