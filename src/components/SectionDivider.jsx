export default function SectionDivider() {
  return (
    <div
      className="flex items-center justify-center px-6"
      style={{ backgroundColor: 'transparent' }}
      aria-hidden="true"
    >
      <div className="flex items-center w-full max-w-xs gap-3">
        <div
          className="flex-1 h-px"
          style={{ backgroundColor: '#C9A84C', opacity: 0.55 }}
        />
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          className="flex-shrink-0"
        >
          <path
            d="M5 0L6.2 3.8L10 5L6.2 6.2L5 10L3.8 6.2L0 5L3.8 3.8L5 0Z"
            fill="#C9A84C"
            opacity="0.85"
          />
        </svg>
        <div
          className="flex-1 h-px"
          style={{ backgroundColor: '#C9A84C', opacity: 0.55 }}
        />
      </div>
    </div>
  )
}
