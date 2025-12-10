import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Marquee() {
  const trackRef = useRef(null)
  useEffect(() => {
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    const el = trackRef.current
    const tl = gsap.timeline({ repeat: -1 })
    tl.to(el, { xPercent: -50, duration: 15, ease: 'none' })
  }, [])
  return (
    <div className="marquee">
      <div className="marquee-track" ref={trackRef}>
        <span>React • Vite • GSAP • Python • ML Basics • </span>
        <span>React • Vite • GSAP • Python • ML Basics • </span>
      </div>
    </div>
  )
}
