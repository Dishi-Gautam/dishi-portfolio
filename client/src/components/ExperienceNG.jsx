import React, { useEffect, useRef, useState } from 'react'
import { Box, Container, Heading, Text, HStack, Badge, Flex, useBreakpointValue, Button } from '@chakra-ui/react'
import ScrollHeading from './ScrollHeading'
import { experience } from '../data'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ExperienceItem = ({ exp, index }) => {
  const itemRef = useRef(null)
  const dotRef = useRef(null)
  const [isExpanded, setIsExpanded] = useState(false)
  const isEven = index % 2 === 0
  const isMobile = useBreakpointValue({ base: true, md: false })

  // Split summary into lines to get the first one for the preview
  const summaryLines = exp.summary.split('\n').filter(line => line.trim() !== '')
  const firstLine = summaryLines[0]
  const hasMultipleLines = summaryLines.length > 1

  useEffect(() => {
    const el = itemRef.current
    const dot = dotRef.current
    if (!el || !dot) return

    const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!prefersReduced) {
      // Animate card entrance
      gsap.fromTo(
        el,
        { opacity: 0, x: isMobile ? 30 : (isEven ? -50 : 50), y: 20 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      // Animate dot pop
      gsap.fromTo(
        dot,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: dot,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }
  }, [isEven, isMobile])

  return (
    <Flex
      ref={itemRef}
      position="relative"
      mb={16}
      w="100%"
      justifyContent={isMobile ? 'flex-start' : (isEven ? 'flex-start' : 'flex-end')}
      pl={isMobile ? '40px' : 0}
    >
      {/* Roadmap Dot */}
      <Box
        ref={dotRef}
        position="absolute"
        left={isMobile ? '0' : '50%'}
        top="40px"
        transform={isMobile ? 'translateX(-50%)' : 'translateX(-50%)'}
        zIndex={3}
        w="20px"
        h="20px"
        bg="brand.600"
        borderRadius="50%"
        border="4px solid white"
        boxShadow="0 0 15px rgba(176,137,104,0.5)"
      />

      {/* Experience Card */}
      <Box
        maxW={isMobile ? '100%' : '45%'}
        w="100%"
        bg="white"
        borderRadius="24px"
        overflow="hidden"
        boxShadow="0 15px 45px rgba(0,0,0,0.07)"
        transition="all 0.4s ease"
        _hover={{ transform: 'translateY(-8px)', boxShadow: '0 25px 60px rgba(0,0,0,0.12)' }}
        border="1px solid"
        borderColor="rgba(0,0,0,0.03)"
      >
        <Box
          bg="linear-gradient(135deg, #b08968 0%, #7a5f52 100%)"
          p={6}
          position="relative"
        >
          <Text
            fontSize="xs"
            fontWeight="700"
            color="whiteAlpha.800"
            textTransform="uppercase"
            letterSpacing="1.5px"
            mb={2}
          >
            {exp.period}
          </Text>
          <Heading as="h3" fontSize={{ base: 'xl', md: '2xl' }} color="white" mb={1}>
            {exp.role}
          </Heading>
          <Text color="whiteAlpha.900" fontWeight="600" fontSize="md">
            {exp.org}
          </Text>
        </Box>

        <Box p={6}>
          <Text
            fontSize="sm"
            color="brand.text"
            mb={hasMultipleLines ? 2 : 6}
            lineHeight="1.7"
            whiteSpace="pre-line"
          >
            {isExpanded ? exp.summary : firstLine}
          </Text>

          {hasMultipleLines && (
            <Button
              variant="link"
              size="sm"
              color="brand.600"
              onClick={() => setIsExpanded(!isExpanded)}
              mb={6}
              _hover={{ textDecoration: 'none', color: 'brand.800' }}
              fontWeight="600"
            >
              {isExpanded ? 'View Less' : 'View More'}
            </Button>
          )}

          <HStack spacing={2} wrap="wrap">
            {exp.tech.map((t) => (
              <Badge
                key={t}
                variant="subtle"
                bg="rgba(176,137,104,0.08)"
                color="brand.600"
                px={3}
                py={1}
                borderRadius="full"
                fontSize="xs"
                fontWeight="600"
                textTransform="none"
              >
                {t}
              </Badge>
            ))}
          </HStack>
        </Box>
      </Box>
    </Flex>
  )
}

export default function ExperienceNG() {
  const lineRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    const line = lineRef.current
    const container = containerRef.current
    if (!line || !container) return

    // Interactive Roadmap line fill animation
    gsap.fromTo(
      line,
      { height: '0%' },
      {
        height: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top 75%',
          end: 'bottom 80%',
          scrub: true,
        },
      }
    )
  }, [])

  return (
    <Box
      id="experience"
      as="section"
      py={{ base: 20, md: 32 }}
      bg="linear-gradient(180deg, #f7efe7 0%, #ffffff 100%)"
      position="relative"
      overflow="hidden"
    >
      {/* Background Decorative Blob */}
      <Box
        position="absolute"
        top="-10%"
        left="-5%"
        w="400px"
        h="400px"
        bg="radial-gradient(circle, rgba(176,137,104,0.05) 0%, transparent 70%)"
        filter="blur(60px)"
        pointerEvents="none"
      />

      <Container maxW="1000px" position="relative">
        <Box mb={20} textAlign="center">
          <ScrollHeading text="Experience" />
        </Box>

        <Box position="relative" ref={containerRef} px={{ base: 4, md: 0 }}>
          {/* Central Timeline Line (Track) */}
          <Box
            position="absolute"
            left={{ base: '4px', md: '50%' }}
            top="0"
            bottom="0"
            w="2px"
            bg="rgba(176,137,104,0.15)"
            transform={{ base: 'none', md: 'translateX(-50%)' }}
            zIndex={1}
          />

          {/* Fill Line (Animated) */}
          <Box
            ref={lineRef}
            position="absolute"
            left={{ base: '4px', md: '50%' }}
            top="0"
            w="2px"
            bg="brand.600"
            transform={{ base: 'none', md: 'translateX(-50%)' }}
            zIndex={2}
            boxShadow="0 0 10px rgba(176,137,104,0.4)"
          />

          {/* Experience Items */}
          <Flex direction="column" position="relative" zIndex={3}>
            {experience.map((exp, idx) => (
              <ExperienceItem key={idx} exp={exp} index={idx} />
            ))}
          </Flex>
        </Box>
      </Container>
    </Box>
  )
}
