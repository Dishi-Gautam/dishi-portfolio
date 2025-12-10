import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Ornaments() {
  const rootRef = useRef(null)
  useEffect(() => {
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    const el = rootRef.current
    const dots = el.querySelectorAll('.orn-dot')
    gsap.to(dots, { y: 8, repeat: -1, yoyo: true, ease: 'sine.inOut', stagger: 0.2, duration: 2 })
    const blobs = el.querySelectorAll('.orn-blob')
    gsap.to(blobs, { x: 10, y: -6, rotate: 2, repeat: -1, yoyo: true, ease: 'sine.inOut', duration: 3 })
  }, [])

  return (
    <div ref={rootRef} className="ornaments" aria-hidden="true">
      <div className="orn-dot" />
      <div className="orn-dot" />
      <div className="orn-dot" />
      <div className="orn-blob" />
      <div className="orn-blob" />
    </div>
  )
}
