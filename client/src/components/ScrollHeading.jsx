import React, { useEffect, useRef, useId } from 'react'
import { Box } from '@chakra-ui/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ScrollHeading({ text, lightMode = false }) {
  const clipRef = useRef(null)
  const sectionRef = useRef(null)
  const svgRef = useRef(null)
  const uid = useId()

  useEffect(() => {
    const clip = clipRef.current
    const section = sectionRef.current
    if (!clip || !section) return

    const width = () => section.getBoundingClientRect().width
    clip.setAttribute('width', 0)

    const tween = gsap.to(clip, {
      attr: { width: () => width() },
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        invalidateOnRefresh: true,
      },
    })

    const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const onMouseMove = (e) => {
      if (prefersReduced) return
      const el = svgRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const rx = -((y / rect.height) - 0.5) * 3
      const ry = ((x / rect.width) - 0.5) * 5
      gsap.to(el, { rotateX: rx, rotateY: ry, transformPerspective: 800, duration: 0.28, ease: 'power3.out' })
    }
    const onMouseLeave = () => {
      const el = svgRef.current
      if (!el) return
      gsap.to(el, { rotateX: 0, rotateY: 0, duration: 0.36, ease: 'power3.out' })
    }
    section.addEventListener('mousemove', onMouseMove)
    section.addEventListener('mouseleave', onMouseLeave)

    return () => {
      tween?.kill()
      section.removeEventListener('mousemove', onMouseMove)
      section.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [])

  return (
    <Box ref={sectionRef} sx={{ aspectRatio: '6 / 1', perspective: '800px' }}>
      <svg ref={svgRef} viewBox="0 0 1200 200" width="100%" height="100%" role="img" aria-label={text} style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}>
        <defs>
          <clipPath id={`scroll-heading-clip-${uid}`}>
            <rect ref={clipRef} x="0" y="0" width="0" height="200" />
          </clipPath>
          <filter id={`scroll-heading-shadow-${uid}`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="6" result="blur" />
            <feOffset in="blur" dx="6" dy="6" result="offsetBlur" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.35" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode in="offsetBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle"
          fontFamily="'Anton', system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
          fontSize="110" fill={lightMode ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.25)"} filter={`url(#scroll-heading-shadow-${uid})`}>
          {text}
        </text>
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle"
          fontFamily="'Anton', system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
          fontSize="110" fill="transparent" stroke="currentColor" strokeWidth="2"
          style={{ color: lightMode ? 'rgba(233, 215, 201, 0.4)' : 'var(--chakra-colors-brand-border)' }}>
          {text}
        </text>
        <g clipPath={`url(#scroll-heading-clip-${uid})`}>
          <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle"
            fontFamily="'Anton', system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
            fontSize="110" fill="currentColor"
            style={{ color: lightMode ? '#e9d7c9' : 'var(--chakra-colors-brand-text)' }}>
            {text}
          </text>
        </g>
      </svg>
    </Box>
  )
}