/** Shared tab bar — gold active pill */
export default function SectionTabs({ tabs, activeTab, onChange, className = '', variant = 'dark' }) {
  const isLight = variant === 'light'

  return (
    <div
      className={`flex flex-nowrap sm:flex-wrap justify-start sm:justify-center gap-2 sm:gap-3 mb-12 overflow-x-auto overscroll-x-contain pb-1 -mx-1 px-1 ${className}`}
      style={{ scrollbarWidth: 'none' }}
    >
      {tabs.map((tab) => {
        const active = activeTab === tab.id
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onChange(tab.id)}
            className="flex-shrink-0 px-5 sm:px-6 rounded-full text-sm font-medium transition-all duration-200 border-none cursor-pointer"
            style={{
              minHeight: 44,
              backgroundColor: active
                ? '#C9A84C'
                : isLight
                  ? 'white'
                  : 'rgba(255,255,255,0.1)',
              color: active ? '#1B2A4A' : isLight ? '#1B2A4A' : 'white',
              boxShadow: isLight && !active ? '0 2px 10px rgba(0,0,0,0.06)' : undefined,
              border: isLight && !active ? '1px solid rgba(27,42,74,0.08)' : '1px solid transparent',
            }}
          >
            {tab.label}
          </button>
        )
      })}
    </div>
  )
}
