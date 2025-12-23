import React, { useEffect, useRef } from 'react'
import { Box, Container, Heading, Button, Image, Text, HStack } from '@chakra-ui/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function HeroNG() {
  const bgRef = useRef(null)
  const headingRef = useRef(null)
  const subRefs = useRef([])
  const btnRefs = useRef([])
  const nameRef = useRef(null)

  useEffect(() => {
    // Initial subtle gradient animation on mount
    gsap.to(bgRef.current, {
      backgroundPosition: '0% 100%',
      duration: 1.2,
      ease: 'power2.out',
    })

    // Gentle parallax for grid overlay on scroll
    const gridEl = document.getElementById('hero-grid-overlay')
    if (gridEl) {
      gsap.to(gridEl, {
        backgroundPositionY: 40,
        ease: 'none',
        scrollTrigger: {
          trigger: gridEl,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
    }

    const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // Heading reveal: fade + crisp
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, filter: 'blur(6px)', y: 12 },
        { opacity: 1, filter: 'blur(0px)', y: 0, duration: 1.2, ease: 'power3.out' }
      )
    }

    // "I am Dishi" reveal
    if (nameRef.current) {
      gsap.fromTo(
        nameRef.current,
        { opacity: 0, filter: 'blur(6px)', y: 14 },
        { opacity: 1, filter: 'blur(0px)', y: 0, duration: 1.1, ease: 'power3.out', delay: 0.5 }
      )
    }

    if (!prefersReduced) {
      // Subtext lines enter/leave
      const subs = subRefs.current.filter(Boolean)
      subs.forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 16 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            delay: i * 0.4,
            scrollTrigger: {
              trigger: el,
              start: 'top 95%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse',
              onLeave: () => gsap.to(el, { opacity: 0.7, y: -6, duration: 0.45, ease: 'power2.in' }),
              onEnterBack: () => gsap.to(el, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }),
            },
          }
        )
      })

      // Buttons subtle enter + hover lift remains via Chakra
      const btns = btnRefs.current.filter(Boolean)
      btns.forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', delay: i * 0.06 }
        )
      })
    }
  }, [])

  return (
    <Box id="home" as="section" position="relative" overflow="hidden">
      <Box
        ref={bgRef}
        position="absolute"
        inset={0}
        bgGradient="linear(to-b, brand.window, brand.bg)"
      />
      {/* Soft grid overlay with edge fade */}
      <Box
        position="absolute"
        inset={0}
        pointerEvents="none"
        id="hero-grid-overlay"
        opacity={0.3}
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, rgba(120, 95, 80, 0.35) 0, rgba(120, 95, 80, 0.35) 1px, transparent 1px, transparent 26px), repeating-linear-gradient(90deg, rgba(120, 95, 80, 0.35) 0, rgba(120, 95, 80, 0.35) 1px, transparent 1px, transparent 26px)',
          backgroundPosition: '0 0',
          maskImage:
            'radial-gradient(closest-side, rgba(0,0,0,0.85), rgba(0,0,0,0.75) 40%, rgba(0,0,0,0.4) 65%, rgba(0,0,0,0.15) 80%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage:
            'radial-gradient(closest-side, rgba(0,0,0,0.85), rgba(0,0,0,0.75) 40%, rgba(0,0,0,0.4) 65%, rgba(0,0,0,0.15) 80%, rgba(0,0,0,0) 100%)',
        }}
      />

      <Container maxW="1200px" position="relative" zIndex={1} py={{ base: 24, md: 40 }}>
        <Box textAlign="center" maxW="900px" mx="auto">
          <Heading
        as="h1"
        ref={headingRef}
        fontFamily="'Great Vibes', cursive"
        fontWeight="400"
        lineHeight={1.1}
        color="brand.text"
        fontSize={{ base: '4xl', md: '6xl', lg: '7xl' }}
        textShadow="0 2px 10px rgba(0,0,0,0.08)"
          >
        Hey,
          </Heading>
          <Heading
        as="h2"
        fontFamily="'Great Vibes', cursive"
        fontWeight="400"
        lineHeight={1.1}
        color="brand.text"
        fontSize={{ base: '5xl', md: '6xl' }}
        mt={2}
        ref={nameRef}
          >
        I am Dishi
          </Heading>
          <Text
        
        color="brand.muted"
        fontSize={{ base: 'xl', md: '2xl' }}
        mt={3}
        ref={(el)=> (subRefs.current[1] = el)}
          >
        Full stack developer   
          </Text>
        </Box>

        <HStack mt={{ base: 8, md: 10 }} spacing={4} justify="center">
          <Button as="a" href="#contact" border="0.5px solid" size="lg" variant="solid" ref={(el)=> (btnRefs.current[0] = el)}>
        Hire Me
          </Button>
          <Button as="a" href="https://drive.google.com/file/d/1QCCxNWrkvwcHR74G33h1bxFpp1vThgUt/view?usp=sharing" target="_blank" rel="noreferrer" size="lg" variant="outline" ref={(el)=> (btnRefs.current[1] = el)}>Download Resume</Button>
        </HStack>
      </Container>
        </Box>
      )
    }
