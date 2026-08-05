export default function SectionDivider({ bg = '#FAF7F2' }) {
  return (
    <div
      className="flex items-center justify-center"
      style={{ height: 56, backgroundColor: bg }}
      aria-hidden="true"
    >
      <div className="relative flex items-center justify-center w-full max-w-xs px-4">
        <div
          className="absolute left-4 right-4 h-px"
          style={{ backgroundColor: '#C9A84C', opacity: 0.55 }}
        />
        <svg
          className="relative z-10 flex-shrink-0"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          style={{ backgroundColor: bg }}
        >
          <path
            d="M12 2L13.8 9.2L21 11L13.8 12.8L12 20L10.2 12.8L3 11L10.2 9.2L12 2Z"
            fill="#C9A84C"
          />
        </svg>
      </div>
    </div>
  )
}
