/**
 * Photo band — framed full images (no harsh crop).
 * Drop files into /public/images/: campus.jpg, community.jpg, ceremony.jpg
 */
import { useState } from 'react'

const DEFAULTS = {
  campus: {
    src: '/images/campus.jpg',
    alt: 'UC Riverside campus during Girls State',
    caption: 'Campus life · 2026 Session',
    // Prefer showing the building/lawn, not empty sky or extreme edges
    position: 'center center',
  },
  community: {
    src: '/images/community.jpg',
    alt: 'Delegates gathered at Girls State',
    caption: 'City · County · Community',
    // Keep the stage / screens in frame for portrait shots
    position: 'center 35%',
  },
  ceremony: {
    src: '/images/ceremony.jpg',
    alt: 'Flag ceremony or closing moments at Girls State',
    caption: 'Traditions that stay with you',
    position: 'center 40%',
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
  const [failed, setFailed] = useState(false)

  return (
    <figure
      className="w-full px-4 sm:px-6 py-10 sm:py-12"
      style={{ backgroundColor: '#1B2A4A' }}
    >
      <div className="max-w-5xl mx-auto">
        <div
          className="relative overflow-hidden rounded-2xl"
          style={{
            backgroundColor: '#152238',
            boxShadow: '0 12px 40px rgba(0,0,0,0.35)',
            border: '1px solid rgba(201,168,76,0.2)',
          }}
        >
          {!failed ? (
            <div
              className="relative w-full flex items-center justify-center"
              style={{
                minHeight: '240px',
                backgroundColor: '#152238',
              }}
            >
              <img
                src={finalSrc}
                alt={finalAlt}
                className="max-w-full w-auto h-auto"
                style={{
                  maxHeight: 'min(70vh, 520px)',
                  display: 'block',
                }}
                loading="lazy"
                onError={() => setFailed(true)}
              />
            </div>
          ) : (
            <div
              className="w-full flex items-center justify-center px-6"
              style={{
                minHeight: '240px',
                background:
                  'linear-gradient(135deg, #1B2A4A 0%, #2a3f66 45%, #1B2A4A 100%)',
              }}
              aria-hidden="true"
            />
          )}

          {overlay && !failed && (
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-28 sm:h-32"
              style={{
                background:
                  'linear-gradient(to top, rgba(21,34,56,0.92) 0%, rgba(21,34,56,0.45) 55%, transparent 100%)',
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
              {failed
                ? `Drop ${finalSrc.replace('/images/', '')} into /public/images/`
                : finalCaption}
            </p>
          </figcaption>
        </div>
      </div>
    </figure>
  )
}
