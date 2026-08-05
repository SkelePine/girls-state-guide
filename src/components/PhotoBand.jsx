/**
 * Photo band — drop real images into /public/images/ using the filenames below.
 * Until files exist, a tasteful placeholder shows so layout stays intentional.
 */
import { useState } from 'react'

const DEFAULTS = {
  campus: {
    src: '/images/campus.jpg',
    alt: 'UC Riverside campus during Girls State',
    caption: 'Campus life · 2026 Session',
  },
  community: {
    src: '/images/community.jpg',
    alt: 'Delegates gathered at Girls State',
    caption: 'City · County · Community',
  },
  ceremony: {
    src: '/images/ceremony.jpg',
    alt: 'Flag ceremony or closing moments at Girls State',
    caption: 'Traditions that stay with you',
  },
}

export default function PhotoBand({
  imageKey = 'campus',
  src,
  alt,
  caption,
  overlay = true,
  heightClass = 'h-56 sm:h-72 md:h-80',
}) {
  const meta = DEFAULTS[imageKey] || DEFAULTS.campus
  const finalSrc = src || meta.src
  const finalAlt = alt || meta.alt
  const finalCaption = caption || meta.caption
  const [failed, setFailed] = useState(false)

  return (
    <figure className={`relative w-full overflow-hidden ${heightClass}`}>
      {!failed ? (
        <img
          src={finalSrc}
          alt={finalAlt}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          onError={() => setFailed(true)}
        />
      ) : (
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, #1B2A4A 0%, #2a3f66 45%, #1B2A4A 100%)',
          }}
          aria-hidden="true"
        />
      )}

      {overlay && (
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, rgba(27,42,74,0.75) 0%, rgba(27,42,74,0.15) 55%, transparent 100%)',
          }}
        />
      )}

      <figcaption className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
        <p className="text-xs uppercase tracking-widest mb-1" style={{ color: '#C9A84C' }}>
          {failed ? 'Add your photo' : 'From the week'}
        </p>
        <p
          className="text-white text-lg sm:text-xl font-medium"
          style={{ fontFamily: '"Playfair Display", serif' }}
        >
          {failed ? `Drop ${finalSrc.replace('/images/', '')} into /public/images/` : finalCaption}
        </p>
      </figcaption>
    </figure>
  )
}
