// src/components/Skills.jsx
import React, { useEffect, useRef } from 'react'
import { Box, Container, Heading, HStack, Text, SimpleGrid, Icon, Flex } from '@chakra-ui/react'
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

export default function Skills() {
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
    <Box id="skills" as="section" py={{ base: 16, md: 24 }} bg="brand.window" position="relative" overflow="hidden">
      {/* Decorative background elements */}
      <Box
        position="absolute"
        top="10%"
        right="5%"
        width="350px"
        height="350px"
        borderRadius="50%"
        background="radial-gradient(circle, rgba(176, 137, 104, 0.12) 0%, transparent 70%)"
        filter="blur(60px)"
        pointerEvents="none"
      />
      <Box
        position="absolute"
        bottom="15%"
        left="5%"
        width="300px"
        height="300px"
        borderRadius="50%"
        background="radial-gradient(circle, rgba(215, 195, 181, 0.15) 0%, transparent 70%)"
        filter="blur(60px)"
        pointerEvents="none"
      />

      <Container maxW="1200px" position="relative" zIndex={1}>
        <Box mb={10}><ScrollHeading text="Skills & Technologies" /></Box>
        
       
        <Box ref={ref} display="flex" flexDirection="column" alignItems="center">
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={{ base: 6, md: 8 }} w="100%" maxW="1100px">
            {Object.entries(skills).map(([group, items]) => (
              <Box 
                key={group} 
                data-skill-group
                bg="rgba(255, 255, 255, 0.6)"
                backdropFilter="blur(20px) saturate(180%)"
                borderRadius="3xl"
                p={7}
                border="1px solid"
                borderColor="rgba(176, 137, 104, 0.25)"
                boxShadow="0 10px 40px rgba(0,0,0,0.08)"
                transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                position="relative"
                overflow="hidden"
                _hover={{
                  transform: 'translateY(-6px)',
                  boxShadow: '0 25px 60px rgba(0,0,0,0.15)',
                  borderColor: 'rgba(176, 137, 104, 0.5)',
                  _before: {
                    opacity: 1,
                  },
                }}
                _before={{
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  bg: 'linear-gradient(90deg, #b08968 0%, #7a5f52 100%)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                }}
              >
                {/* Group header */}
                <Flex align="center" mb={5}>
                  <Box 
                    w={10} 
                    h={10}
                    borderRadius="xl" 
                    bg="linear-gradient(135deg, #b08968 0%, #7a5f52 100%)" 
                    mr={3}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    boxShadow="0 4px 15px rgba(176, 137, 104, 0.3)"
                    transition="all 0.3s ease"
                    _groupHover={{
                      transform: 'rotate(10deg) scale(1.1)',
                    }}
                  >
                    <Box 
                      w={2.5} 
                      h={2.5} 
                      borderRadius="full" 
                      bg="white"
                    />
                  </Box>
                  <Heading 
                    as="h3" 
                    fontSize="2xl" 
                    color="brand.text" 
                    fontFamily="'Inter', 'DM Sans', sans-serif"
                    fontWeight="700"
                  >
                    {group}
                  </Heading>
                </Flex>

                {/* Skills badges */}
                <Flex flexWrap="wrap" gap={2.5}>
                  {items.map((it, i) => {
                    const IconComp = nameIconMap[it.name]
                    return (
                      <Flex
                        key={`${group}-${i}`}
                        align="center"
                        gap={2}
                        px={4}
                        py={2.5}
                        borderRadius="full"
                        bg="white"
                        border="1px solid"
                        borderColor="rgba(176, 137, 104, 0.25)"
                        boxShadow="0 3px 10px rgba(0,0,0,0.06)"
                        transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                        cursor="default"
                        _hover={{
                          transform: 'translateY(-4px) scale(1.08)',
                          boxShadow: '0 10px 25px rgba(176, 137, 104, 0.25)',
                          borderColor: 'brand.500',
                          bg: 'rgba(176, 137, 104, 0.05)',
                        }}
                        style={{
                          animationDelay: `${i * 0.05}s`,
                        }}
                      >
                        {IconComp && (
                          <Icon 
                            as={IconComp} 
                            boxSize={4} 
                            color="brand.600" 
                            transition="transform 0.3s ease"
                          />
                        )}
                        <Text 
                          color="brand.text" 
                          fontSize="sm" 
                          fontFamily="'Inter', 'DM Sans', sans-serif" 
                          fontWeight="500"
                        >
                          {it.name}
                        </Text>
                      </Flex>
                    )
                  })}
                </Flex>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  )
}
