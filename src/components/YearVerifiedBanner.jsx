import { siteConfig, yearNote } from '../siteConfig'

/** Slim year-proofing strip under the navbar */
export default function YearVerifiedBanner() {
  return (
    <div
      className="w-full text-center px-4 py-2.5"
      style={{
        backgroundColor: 'rgba(201,168,76,0.12)',
        borderBottom: '1px solid rgba(201,168,76,0.28)',
      }}
      role="note"
    >
      <p className="text-xs sm:text-sm leading-relaxed" style={{ color: '#1B2A4A' }}>
        <span className="font-semibold" style={{ color: '#C9A84C' }}>
          Verified for {siteConfig.verifiedYear}
        </span>
        <span className="mx-2 opacity-40">·</span>
        {yearNote.replace(`Verified for ${siteConfig.verifiedYear} — `, '')}
      </p>
    </div>
  )
}
