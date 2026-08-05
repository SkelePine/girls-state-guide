export default function IconBadge({
  children,
  variant = 'gold',
  size = 'md',
  className = '',
}) {
  const sizes = {
    sm: { box: 36, text: 'text-base' },
    md: { box: 44, text: 'text-xl' },
    lg: { box: 52, text: 'text-2xl' },
    xl: { box: 56, text: 'text-3xl' },
  }

  const backgrounds = {
    gold: 'rgba(201, 168, 76, 0.18)',
    navy: 'rgba(27, 42, 74, 0.08)',
    light: 'rgba(255, 255, 255, 0.12)',
  }

  const { box, text } = sizes[size] || sizes.md

  return (
    <div
      className={`inline-flex items-center justify-center rounded-full flex-shrink-0 ${text} ${className}`}
      style={{
        width: box,
        height: box,
        backgroundColor: backgrounds[variant] || backgrounds.gold,
      }}
      aria-hidden="true"
    >
      {children}
    </div>
  )
}
