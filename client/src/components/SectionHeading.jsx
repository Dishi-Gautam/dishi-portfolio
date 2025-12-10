import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default function SectionHeading({ children, id }) {
  const ref = useRef(null)
  useEffect(() => {
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    const el = ref.current
    gsap.fromTo(el, { y: 18, opacity: 0 }, { y:0, opacity:1, duration:0.6, ease:'power2.out' })

    // Scroll-driven accent fill: progresses as the section scrolls
    const section = el.closest('section') || el.parentElement
    const accentEl = el.querySelector('.sec-accent .fill')
    if (section && accentEl) {
      gsap.fromTo(
        accentEl,
        { width: '0%' },
        {
          width: '100%',
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'bottom 30%',
            scrub: true,
          },
        }
      )
    }
  }, [])
  const text = typeof children === 'string' ? children : ''
  let leading = text
  let accent = ''
  if (text) {
    const parts = text.trim().split(/\s+/)
    if (parts.length > 1) {
      // Accent the last word for multi-word headings
      leading = parts.slice(0, -1).join(' ')
      accent = parts[parts.length - 1]
    } else {
      // Single word: accent last 4 letters if long enough
      const w = parts[0]
      const n = Math.max(0, Math.min(4, w.length))
      leading = w.slice(0, w.length - n)
      accent = w.slice(w.length - n)
    }
  }
  return (
    <h2 ref={ref} id={id} className="sec-heading">
      <span className="sec-main">{leading}</span>
      {accent && ' '}
      <span className="sec-accent">
        <span className="stroke">{accent}</span>
        <span className="fill" aria-hidden>{accent}</span>
      </span>
    </h2>
  )
}
