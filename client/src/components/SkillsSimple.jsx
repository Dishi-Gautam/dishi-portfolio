// src/components/SkillsSimple.jsx
import React, { useEffect, useRef } from 'react'
import { Box, Container, Heading, HStack, Text, SimpleGrid, Icon } from '@chakra-ui/react'
import { skills } from '../data'
import ScrollHeading from './ScrollHeading'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Optional icon mapping for common technologies in data.js
import {
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiReact,
  SiExpress,
  SiMui,
  SiGit,
  SiGreensock,
  SiMongodb,
} from 'react-icons/si'

const nameIconMap = {
  'JavaScript': SiJavascript,
  'Python': SiPython,
  'C++': SiCplusplus,
  'React': SiReact,
  'Express.js': SiExpress,
  'MUI': SiMui,
  'Git': SiGit,
  'GSAP': SiGreensock,
  'MongoDB': SiMongodb,
}

export default function SkillsSimple() {
  const ref = useRef(null)
  useEffect(() => {
    const root = ref.current
    if (!root) return
    const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return
    const groups = root.querySelectorAll('[data-skill-group]')
    groups.forEach((el, i) => {
      gsap.fromTo(el, { opacity: 0, y: 24, filter: 'blur(4px)' }, {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 0.7,
        ease: 'power2.out',
        delay: i * 0.06,
        scrollTrigger: { trigger: el, start: 'top 85%', end: 'bottom 20%', toggleActions: 'play reverse play reverse' }
      })
    })
  }, [])

  return (
    <Box id="skills" as="section" py={{ base: 16, md: 20 }} bg="brand.window">
      <Container maxW="1200px">
        <Box mb={6}><ScrollHeading text="Skills & Technologies" /></Box>
        <Box ref={ref} display="flex" flexDirection="column" alignItems="center">
          <SimpleGrid columns={{ base: 1, md: 1 }} spacing={{ base: 6, md: 8 }} w="100%" maxW="600px">
            {Object.entries(skills).map(([group, items]) => (
              <Box key={group} data-skill-group>
                {/* Group pill header like screenshot */}
                <Box display="flex" justifyContent="center" mb={3}><Box display="inline-flex" alignItems="center" bg="brand.300" border="1px solid" borderColor="brand.400" borderRadius="full" px={3} py={1} boxShadow="0 6px 18px rgba(0,0,0,0.08)">
                  <Box w={2} h={2} borderRadius="full" bg="brand.600" mr={2} />
                  <Heading as="h3" fontSize="lg" color="brand.text">{group}</Heading>
                </Box></Box>
                {/* Badges row */}
                <HStack spacing={3} wrap="wrap" justify="center">
                  {items.map((it, i) => {
                    const IconComp = nameIconMap[it.name]
                    return (
                      <HStack key={`${group}-${i}`} spacing={2} px={3} py={2} borderRadius="md" border="1px solid" borderColor="brand.400" bg="brand.100" boxShadow="0 6px 18px rgba(0,0,0,0.06)" transition="transform 200ms ease, box-shadow 200ms ease, background-color 200ms ease" _hover={{ transform: 'translateY(-2px)', boxShadow: '0 10px 22px rgba(0,0,0,0.10)', bg: 'brand.200' }}>
                        {IconComp && <Icon as={IconComp} boxSize={5} color="brand.600" />}
                        <Text color="brand.text" fontSize="md">{it.name}</Text>
                      </HStack>
                    )
                  })}
                </HStack>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  )
}
