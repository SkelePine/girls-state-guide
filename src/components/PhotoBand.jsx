/**
 * Photo band — full-bleed cinematic break between sections.
 * Drop files into /public/images/: campus.jpg, community.jpg, ceremony.jpg
 */
import { useState } from 'react'

const DEFAULTS = {
  campus: {
    src: '/images/campus.jpg',
    alt: 'Sunlit UC Riverside campus lawn and buildings during California Girls State',
    caption: 'Campus life · 2026 Session',
    // Prefer showing the building/lawn, not empty sky or extreme edges
    position: 'center center',
  },
  community: {
    src: '/images/community.jpg',
    alt: 'California Girls State delegates gathered outdoors in community and city groups',
    caption: 'City · County · Community',
    // Keep tents / crowd centered for wide crop
    position: 'center 40%',
  },
  ceremony: {
    src: '/images/ceremony.jpg',
    alt: 'Delegates standing indoors for a Girls State flag ceremony',
    caption: 'Traditions that stay with you',
    // Lower % = show higher in the photo (more ceiling / top of room)
    position: 'center 50%',
  },
}

export default function PhotoBand({
  imageKey = 'campus',
  src,
  alt,
  caption,
  overlay = true,
}) {
  const meta = DEFAULTS[imageKey] || DEFAULTS.campus
  const finalSrc = src || meta.src
  const finalAlt = alt || meta.alt
  const finalCaption = caption || meta.caption
  const finalPosition = meta.position || 'center center'
  const [failed, setFailed] = useState(false)

  return (
    <figure className="relative w-full overflow-hidden" style={{ backgroundColor: '#152238' }}>
      <div
        className="relative w-full"
        style={{
          height: 'clamp(260px, 48vw, 580px)',
        }}
      >
        {!failed ? (
          <img
            src={finalSrc}
            alt={finalAlt}
            className="absolute inset-0 w-full h-full"
            style={{
              objectFit: 'cover',
              objectPosition: finalPosition,
              display: 'block',
            }}
            loading="lazy"
            onError={() => setFailed(true)}
          />
        ) : (
          <div
            className="absolute inset-0 flex items-center justify-center px-6"
            style={{
              background:
                'linear-gradient(135deg, #1B2A4A 0%, #2a3f66 45%, #1B2A4A 100%)',
            }}
            aria-hidden="true"
          />
        )}

        {overlay && !failed && (
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-32 sm:h-40"
            style={{
              background:
                'linear-gradient(to top, rgba(21,34,56,0.92) 0%, rgba(21,34,56,0.5) 50%, transparent 100%)',
            }}
          />
        )}

        <figcaption className="absolute bottom-0 left-0 right-0 px-5 sm:px-8 md:px-12 pb-5 sm:pb-7 pt-10">
          <p className="text-xs uppercase tracking-widest mb-1" style={{ color: '#C9A84C' }}>
            {failed ? 'Add your photo' : 'From the week'}
          </p>
          <p
            className="text-white text-lg sm:text-xl md:text-2xl font-medium"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            {failed
              ? `Drop ${finalSrc.replace('/images/', '')} into /public/images/`
              : finalCaption}
          </p>
        </figcaption>
      </div>
    </figure>
  )
}
