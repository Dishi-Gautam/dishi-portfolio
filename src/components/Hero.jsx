import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Hero() {
  const containerRef = useRef(null)
  useEffect(() => {
    const el = containerRef.current
    gsap.fromTo(
      el,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
    )
  }, [])

  return (
    <div className="hero" ref={containerRef}>
      <h1>Hi, I'm Dishi</h1>
      <p>
        Developer passionate about building on the internet—turning complex
        problems into simple, beautiful solutions.
      </p>
    </div>
  )
}
