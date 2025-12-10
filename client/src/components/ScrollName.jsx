import React, { useEffect, useRef } from 'react'
import { Box, Container } from '@chakra-ui/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ScrollName() {
  const clipRef = useRef(null)
  const sectionRef = useRef(null)
  const svgRef = useRef(null)

  useEffect(() => {
    const clip = clipRef.current
    const section = sectionRef.current
    if (!clip || !section) return

    const width = () => section.getBoundingClientRect().width
    // Initialize clip width to 0
    clip.setAttribute('width', 0)

    const tween = gsap.to(clip, {
      attr: { width: () => width() },
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })

    // 3D tilt on mouse move for subtle depth
    const onMouseMove = (e) => {
      const el = svgRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const rx = -((y / rect.height) - 0.5) * 4
      const ry = ((x / rect.width) - 0.5) * 6
      gsap.to(el, { rotateX: rx, rotateY: ry, transformPerspective: 800, duration: 0.3, ease: 'power2.out' })
    }
    const onMouseLeave = () => {
      const el = svgRef.current
      if (!el) return
      gsap.to(el, { rotateX: 0, rotateY: 0, duration: 0.4, ease: 'power2.out' })
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
    <Box as="section" ref={sectionRef} py={{ base: 24, md: 32 }} bg="brand.window">
      <Container maxW="1200px">
        <Box position="relative" sx={{ aspectRatio: '6 / 1', perspective: '800px' }}>
          <svg ref={svgRef} viewBox="0 0 1200 200" width="100%" height="100%" role="img" aria-label="Let's connect scroll fill" style={{ transformStyle: 'preserve-3d' }}>
            <defs>
              <clipPath id="dishi-fill-clip">
                <rect ref={clipRef} x="0" y="0" width="0" height="200" />
              </clipPath>
              <filter id="soft-shadow" x="-50%" y="-50%" width="200%" height="200%">
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
            {/* 3D shadow layer */}
            <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle"
              fontFamily="'Anton', system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
              fontSize="110" fill="rgba(0,0,0,0.25)" filter="url(#soft-shadow)">
              Let's connect
            </text>
            {/* Outline text */}
            <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle"
              fontFamily="'Anton', system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
              fontSize="110" fill="transparent" stroke="currentColor" strokeWidth="2"
              style={{ color: 'var(--chakra-colors-brand-border)' }}>
              Let's connect
            </text>
            {/* Filled text revealed by clip */}
            <g clipPath="url(#dishi-fill-clip)">
              <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle"
                fontFamily="'Anton', system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
                fontSize="110" fill="currentColor"
                style={{ color: 'var(--chakra-colors-brand-text)' }}>
                Let's connect
              </text>
            </g>
          </svg>
        </Box>
      </Container>
    </Box>
  )
}
