import React, { useEffect, useRef } from 'react'
import { Box, Container, Heading, Text, Image, Flex } from '@chakra-ui/react'
import ScrollHeading from './ScrollHeading'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function AboutNG() {
  const sectionRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    const el = sectionRef.current
    const img = imageRef.current

    // Fade/scale image in as About comes into view
    gsap.fromTo(
      img,
      { opacity: 0, scale: 0.95, y: 30, filter: 'blur(6px)' },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 70%',
          end: 'bottom 30%',
          toggleActions: 'play reverse play reverse',
        },
      }
    )

    // Remove blue shade: keep theme-based subtle window background without gradient animation
    // If any previous animation existed, kill it by not setting gsap.to on background

    // Ensure no CSS keyframe animations interfere (none used)
  }, [])

  return (
    <Box id="about" ref={sectionRef} as="section" py={{ base: 12, md: 16 }} bg="brand.window">
      <Container maxW="1200px">
        <Box mb={3}>
          <ScrollHeading text="About Me" />
        </Box>

        <Flex direction={{ base: 'column', md: 'row' }} align={{ base: 'flex-start', md: 'center' }} gap={{ base: 8, md: 12 }}>
          {/* Left: About copy */}
          <Box flex="1" maxW={{ base: '100%', md: '60%' }}>
            <Text color="muted" mb={{ base: 6, md: 0 }}>
              I’m a developer passionate about building things that live on the internet.
              I enjoy turning complex problems into simple, beautiful, and intuitive solutions.
              Always up for learning new tech and collaborating on impactful projects.
            </Text>
          </Box>

          {/* Right: Semi-circle frame with 3D lift */}
          <Box flex="1" display="flex" justifyContent="center" alignItems="center">
            {/* Perspective wrapper for 3D effect */}
            <Box
              position="relative"
              width={{ base: 280, md: 360 }}
              height={{ base: 280, md: 360 }}
              style={{ perspective: '900px', transformStyle: 'preserve-3d' }}
            >
              {/* Semi-circle removed per request */}

              {/* Profile image only (no card), centered and taller with soft edges + smooth hover */}
              <Box
                position="absolute"
                left="50%"
                top="50%"
                transform="translate(-50%, -50%)"
                width={{ base: 180, md: 220 }}
                height={{ base: 220, md: 270 }}
                borderRadius="24px"
                overflow="hidden"
                border="0"
                boxShadow="0 18px 40px rgba(0,0,0,0.20), 0 2px 6px rgba(0,0,0,0.12)"
                transition="transform 0.35s ease, box-shadow 0.35s ease"
                _hover={{ transform: 'translate(-50%, -50%) scale(1.03)', boxShadow: '0 26px 56px rgba(0,0,0,0.28), 0 4px 10px rgba(0,0,0,0.16)' }}
                zIndex={2}
              >
                {/* Soft oval shadow under the image for 3D lift */}
                <Box
                  position="absolute"
                  left="50%"
                  bottom={-18}
                  transform="translateX(-50%)"
                  width={{ base: 140, md: 180 }}
                  height={{ base: 26, md: 30 }}
                  borderRadius="full"
                  bg="blackAlpha.700"
                  filter="blur(14px)"
                  opacity={0.28}
                  pointerEvents="none"
                />
                <Image
                  ref={imageRef}
                  src="/pp.jpg"
                  alt="Profile"
                  width="100%"
                  height="100%"
                  objectFit="cover"
                  objectPosition="center"
                  style={{ transform: 'scale(1.04) translateZ(30px)', transition: 'transform 0.35s ease', willChange: 'transform' }}
                  borderRadius="24px"
                  fallbackSrc="/pp.jpg"
                />
              </Box>

              {/* Subtle rim light */}
              
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}
