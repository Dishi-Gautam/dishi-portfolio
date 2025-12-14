import React, { useEffect, useRef } from 'react'
import { Box, Container, Heading, Text, HStack, Badge } from '@chakra-ui/react'
import ScrollHeading from './ScrollHeading'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ExperienceNG() {
  const cardRef = useRef(null)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return
    const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // Enhanced scroll reveal with blur and scale effect
    if (!prefersReduced) {
      gsap.fromTo(
        card,
        { opacity: 0, y: 40, scale: 0.95, filter: 'blur(8px)' },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            end: 'bottom 20%',
            toggleActions: 'play reverse play reverse',
          },
        }
      )
    }

    // Enhanced hover lift with rotation
    const onMouseEnter = () => {
      gsap.to(card, { 
        y: -12, 
        scale: 1.02,
        rotateX: 2,
        boxShadow: '0 25px 50px rgba(0,0,0,0.18)', 
        duration: 0.4, 
        ease: 'power2.out' 
      })
    }
    const onMouseLeave = () => {
      gsap.to(card, { 
        y: 0, 
        scale: 1,
        rotateX: 0,
        boxShadow: '0 12px 35px rgba(0,0,0,0.12)', 
        duration: 0.4, 
        ease: 'power2.out' 
      })
    }

    card.addEventListener('mouseenter', onMouseEnter)
    card.addEventListener('mouseleave', onMouseLeave)
    return () => {
      card.removeEventListener('mouseenter', onMouseEnter)
      card.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [])

  return (
    <Box 
      id="experience" 
      as="section" 
      py={{ base: 20, md: 28 }} 
      bg="linear-gradient(135deg, #f7efe7 0%, #ece4db 50%, #f7efe7 100%)"
      position="relative"
      overflow="hidden"
    >
      {/* Decorative background elements */}
      <Box
        position="absolute"
        top="10%"
        right="5%"
        width="200px"
        height="200px"
        borderRadius="50%"
        bg="radial-gradient(circle, rgba(176,137,104,0.1) 0%, transparent 70%)"
        filter="blur(40px)"
        pointerEvents="none"
      />
      <Box
        position="absolute"
        bottom="15%"
        left="8%"
        width="250px"
        height="250px"
        borderRadius="50%"
        bg="radial-gradient(circle, rgba(215,195,181,0.15) 0%, transparent 70%)"
        filter="blur(50px)"
        pointerEvents="none"
      />

      <Container maxW="1200px" position="relative" zIndex={1}>
        <Box mb={12} textAlign="center"><ScrollHeading text="Experience" /></Box>
        
        <Box 
          ref={cardRef} 
          maxW="700px" 
          mx="auto"
          borderRadius="24px" 
          bg="white"
          boxShadow="0 20px 60px rgba(0,0,0,0.08), 0 0 1px rgba(0,0,0,0.1)" 
          overflow="hidden"
          transition="all 400ms ease"
          style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
        >
          {/* Colored header bar with gradient */}
          <Box 
            bg="linear-gradient(135deg, #b08968 0%, #7a5f52 100%)"
            p={6}
            position="relative"
            overflow="hidden"
          >
            {/* Decorative pattern overlay */}
            <Box
              position="absolute"
              top="0"
              right="0"
              width="100%"
              height="100%"
              opacity={0.1}
              backgroundImage="repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)"
              pointerEvents="none"
            />
            
            <Box position="relative" zIndex={1}>
              {/* Badge */}
              <Box display="inline-flex" alignItems="center" gap={2} mb={3}>
                <Box 
                  width="8px" 
                  height="8px" 
                  borderRadius="50%" 
                  bg="rgba(255,255,255,0.9)"
                  boxShadow="0 0 10px rgba(255,255,255,0.5)"
                />
                <Text 
                  fontSize="xs" 
                  fontWeight="700" 
                  letterSpacing="2px" 
                  color="white"
                  textTransform="uppercase"
                >
                  Internship
                </Text>
              </Box>
              
              {/* Role & Company */}
              <Heading 
                as="h3" 
                fontSize={{ base: '2xl', md: '3xl' }} 
                mb={2} 
                color="white" 
                fontFamily="'Inter', 'DM Sans', system-ui, sans-serif"
                fontWeight="700"
              >
                Intern — Girikon
              </Heading>
              
              {/* Timeline with icon */}
              <Box display="flex" alignItems="center" gap={2}>
                
                <Text 
                  fontSize="md" 
                  color="rgba(255,255,255,0.95)" 
                  fontWeight="500"
                  fontFamily="'Inter', 'DM Sans', system-ui, sans-serif"
                >
                  June 2025 — July 2025
                </Text>
              </Box>
            </Box>
          </Box>
          
          {/* Content section */}
          <Box p={6}>
            {/* Description */}
            <Text 
              fontSize="md" 
              color="brand.text" 
              mb={6} 
              lineHeight="1.8"
              fontFamily="'Inter', 'DM Sans', system-ui, sans-serif"
            >
              Completed hands-on training in Salesforce CRM (Sales/Service Cloud) with experience in client solutions, data modeling, integrations, SaaS tools, and workflow optimization.
            </Text>
            
            {/* Tech stack section */}
            <Box>
              <Text 
                fontSize="xs" 
                fontWeight="700" 
                letterSpacing="1px" 
                color="brand.muted"
                mb={3}
                textTransform="uppercase"
              >
                Technologies
              </Text>
              <HStack spacing={2} wrap="wrap">
                {['Salesforce', 'CRM', 'Integrations', 'SaaS'].map((tech) => (
                  <Badge 
                    key={tech} 
                    borderRadius="full" 
                    bg="linear-gradient(135deg, rgba(176,137,104,0.1) 0%, rgba(176,137,104,0.05) 100%)"
                    border="1px solid" 
                    borderColor="rgba(176,137,104,0.3)" 
                    px={4} 
                    py={2} 
                    color="brand.text" 
                    fontSize="sm" 
                    fontWeight="600"
                    transition="all 0.3s ease"
                    _hover={{
                      bg: "linear-gradient(135deg, rgba(176,137,104,0.2) 0%, rgba(176,137,104,0.1) 100%)",
                      transform: "translateY(-2px)",
                      borderColor: "brand.600",
                    }}
                  >
                    {tech}
                  </Badge>
                ))}
              </HStack>
            </Box>
          </Box>
          
          {/* Bottom accent bar */}
          <Box 
            height="4px"
            bg="linear-gradient(90deg, #b08968 0%, #7a5f52 50%, #b08968 100%)"
          />
        </Box>
      </Container>
    </Box>
  )
}
