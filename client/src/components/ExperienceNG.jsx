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

    // Scroll reveal with blur effect
    if (!prefersReduced) {
      gsap.fromTo(
        card,
        { opacity: 0, y: 32, filter: 'blur(6px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.85,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            end: 'bottom 20%',
            toggleActions: 'play reverse play reverse',
          },
        }
      )
    }

    // Subtle hover lift
    const onMouseEnter = () => {
      gsap.to(card, { y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.15)', duration: 0.3, ease: 'power2.out' })
    }
    const onMouseLeave = () => {
      gsap.to(card, { y: 0, boxShadow: '0 10px 30px rgba(0,0,0,0.10)', duration: 0.3, ease: 'power2.out' })
    }

    card.addEventListener('mouseenter', onMouseEnter)
    card.addEventListener('mouseleave', onMouseLeave)
    return () => {
      card.removeEventListener('mouseenter', onMouseEnter)
      card.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [])

  return (
    <Box id="experience" as="section" py={{ base: 20, md: 28 }} bg="brand.window">
      <Container maxW="1200px">
        <Box mb={8}><ScrollHeading text="Experience" /></Box>
        
        <Box ref={cardRef} maxW="600px" borderRadius="16px" border="1px solid" borderColor="brand.400" bg="linear-gradient(180deg, var(--surface), var(--bg-alt))" boxShadow="0 10px 30px rgba(0,0,0,0.10)" p={8} transition="all 300ms ease">
          {/* Header with rule */}
          <Box display="flex" alignItems="center" gap={3} mb={6}>
            <Box w={12} h="2px" bg="brand.600" borderRadius="2px" />
            <Text fontSize="sm" fontWeight="700" letterSpacing="0.8px" color="brand.accent">INTERNSHIP</Text>
          </Box>
          
          {/* Role & Company */}
          <Heading as="h3" fontSize={{ base: '24px', md: '28px' }} mb={2} color="brand.text">
            Intern — Girikon
          </Heading>
          
          {/* Timeline */}
          <Text fontSize="md" color="brand.muted" mb={4} fontWeight="500">
            June 2025 — July 2025
          </Text>
          
          {/* Description */}
          <Text fontSize="md" color="brand.text" mb={6} lineHeight="1.6">
            Completed hands-on training in Salesforce CRM (Sales/Service Cloud) with experience in client solutions, data modeling, integrations, SaaS tools, and workflow optimization.
          </Text>
          
          {/* Tech badges */}
          <HStack spacing={2} wrap="wrap">
            {['Salesforce', 'CRM', 'Integrations', 'SaaS'].map((tech) => (
              <Badge key={tech} borderRadius="full" bg="brand.300" border="1px solid" borderColor="brand.400" px={3} py={1} color="brand.text" fontSize="xs" fontWeight="600">
                {tech}
              </Badge>
            ))}
          </HStack>
        </Box>
      </Container>
    </Box>
  )
}
