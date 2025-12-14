import React, { useEffect, useRef } from 'react'
import { Box, Container, Heading, Text, Image, Flex } from '@chakra-ui/react'
import ScrollHeading from './ScrollHeading'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function AboutNG() {
  const sectionRef = useRef(null)
  const imageRef = useRef(null)
  const textRef = useRef(null)
  const shapesRef = useRef([])

  useEffect(() => {
    const el = sectionRef.current
    const img = imageRef.current
    const text = textRef.current

    // Floating shapes animation
    shapesRef.current.forEach((shape, i) => {
      if (!shape) return
      gsap.to(shape, {
        y: -20 + (i * 10),
        x: 10 - (i * 5),
        duration: 3 + (i * 0.5),
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      })
      
      gsap.to(shape, {
        rotation: 360,
        duration: 15 + (i * 5),
        ease: 'none',
        repeat: -1,
      })
    })

    // Enhanced 3D image reveal with rotation and scale
    gsap.fromTo(
      img,
      { opacity: 0, scale: 0.85, filter: 'blur(10px)' },
      {
        opacity: 1,
        scale: 1,
        filter: 'blur(0px)',
        duration: 1.4,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 70%',
          end: 'bottom 30%',
          toggleActions: 'play reverse play reverse',
        },
      }
    )

    // Text animation
    gsap.fromTo(
      text,
      { opacity: 0, y: 30, filter: 'blur(8px)' },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 70%',
          end: 'bottom 30%',
          toggleActions: 'play reverse play reverse',
        },
      }
    )
  }, [])

  return (
    <Box 
      id="about" 
      ref={sectionRef} 
      as="section" 
      py={{ base: 16, md: 24 }} 
      bg="linear-gradient(135deg, #3e3028 0%, #4a3b33 50%, #3e3028 100%)"
      position="relative"
      overflow="hidden"
    >
      {/* Floating geometric shapes */}
      <Box
        ref={(el) => (shapesRef.current[0] = el)}
        position="absolute"
        top="10%"
        left="5%"
        width={{ base: '60px', md: '80px' }}
        height={{ base: '60px', md: '80px' }}
        borderRadius="30% 70% 70% 30% / 30% 30% 70% 70%"
        background="linear-gradient(135deg, rgba(215, 195, 181, 0.3), rgba(176, 137, 104, 0.4))"
        filter="blur(1px)"
        zIndex={1}
      />
      <Box
        ref={(el) => (shapesRef.current[1] = el)}
        position="absolute"
        top="20%"
        right="8%"
        width={{ base: '40px', md: '60px' }}
        height={{ base: '40px', md: '60px' }}
        borderRadius="50%"
        background="linear-gradient(135deg, rgba(233, 215, 201, 0.3), rgba(215, 195, 181, 0.4))"
        filter="blur(1px)"
        zIndex={1}
      />
      <Box
        ref={(el) => (shapesRef.current[2] = el)}
        position="absolute"
        bottom="15%"
        left="8%"
        width={{ base: '50px', md: '70px' }}
        height={{ base: '50px', md: '70px' }}
        clipPath="polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"
        background="linear-gradient(135deg, rgba(176, 137, 104, 0.3), rgba(143, 111, 86, 0.4))"
        filter="blur(1px)"
        zIndex={1}
      />

      <Container maxW="1200px" position="relative" zIndex={2}>
        <Box textAlign="center" mb={{ base: 12, md: 16 }}>
          <ScrollHeading text="About me" lightMode />
        </Box>

        <Flex direction={{ base: 'column', md: 'row' }} align="center" gap={{ base: 12, md: 16 }}>
          {/* Left: Profile Image with blob background */}
          <Box flex="0 0 auto" position="relative" display="flex" alignItems="center" justifyContent="center">
            {/* Blob background */}
            <Box
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              width={{ base: '310px', md: '430px' }}
              height={{ base: '310px', md: '430px' }}
              borderRadius="30% 70% 70% 30% / 30% 30% 70% 70%"
              background="linear-gradient(135deg, rgba(155, 111, 111, 0.45), rgba(224, 200, 200, 0.5))"
              filter="blur(2px)"
              zIndex={0}
            />
            
            {/* Profile Image */}
            <Box
              position="relative"
              width={{ base: '300px', md: '420px' }}
              height={{ base: '340px', md: '480px' }}
              display="flex"
              alignItems="center"
              justifyContent="center"
              zIndex={1}
            >
              <Image
                ref={imageRef}
                src="/pp.jpg"
                alt="Profile"
                width="85%"
                height="85%"
                objectFit="cover"
                objectPosition="center top"
                borderRadius="30% 70% 70% 30% / 30% 30% 70% 70%"
                transition="transform 0.5s ease"
                _hover={{ transform: 'scale(1.05)' }}
              />
            </Box>
          </Box>

          {/* Right: Text Content */}
          <Box ref={textRef} flex="1" color="white">
            <Text 
              fontSize={{ base: 'md', md: 'lg' }}
              lineHeight="1.8"
              mb={6}
              fontFamily="'Inter', 'DM Sans', system-ui, sans-serif"
              fontWeight="400"
            >
              Welcome to my portfolio! I'm a passionate Full Stack developer 
              dedicated to creating seamless and visually engaging digital experiences. With 
              experience in modern web technologies, I specialize in building intuitive interfaces that enhance 
              usability and user satisfaction.
            </Text>
            
            <Text 
              fontSize={{ base: 'md', md: 'lg' }}
              lineHeight="1.8"
              fontFamily="'Inter', 'DM Sans', system-ui, sans-serif"
              fontWeight="400"
            >
              My skills include React, Node.js, and MongoDB, ensuring that 
              each project is both aesthetically pleasing and functionally efficient. I have 
              worked on diverse projects, including web platforms, AI-powered solutions, and 
              full-stack applications, always focusing on user-centered solutions that drive 
              engagement.
            </Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}
