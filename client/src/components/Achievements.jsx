import React, { useEffect, useRef } from 'react'
import { Box, Container, Text, Link, SimpleGrid, Badge, Image, Heading, Flex } from '@chakra-ui/react'
import ScrollHeading from './ScrollHeading'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import img1 from "../assets/iitm.png"
import img2 from "../assets/hackvision.png"
import img3 from "../assets/darkcode.png"
import img4 from "../assets/ieee.png"
gsap.registerPlugin(ScrollTrigger)

const achievementsData = [
  {
    title: 'IITM Janakpuri',
    subtitle: 'Secured 3rd position in the hackathon',
    detail: 'Awarded 3rd place for project execution and innovation.',
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7426557036567601152/?rcm=ACoAAETw3dQBcNhMJo-_Zex-tp5B5qggfPzBpNE",
    image: img1
  },
  {
    title: 'HackVision Hackathon',
    subtitle: 'Secured 3rd position',
    detail: 'Built a practical solution under deadline-driven conditions.',
    link: "https://www.linkedin.com/posts/dishi02_hackathon-innovation-sustainability-ugcPost-7283526648782602240-jbwq",
    image: img2,
  },
  {
    title: 'DarkCode Rising',
    subtitle: 'Secured 3rd position in competition',
    detail: 'Recognized for performance, teamwork, and product quality.',
    link: "https://www.linkedin.com/posts/dishi02_we-secured-%F0%9D%9F%AF%F0%9D%97%BF%F0%9D%97%B1-%F0%9D%97%BD%F0%9D%97%B9%F0%9D%97%AE%F0%9D%97%B0%F0%9D%97%B2-at-the-%F0%9D%97%97%F0%9D%97%AE%F0%9D%97%BF%F0%9D%97%B8%F0%9D%97%96%F0%9D%97%BC%F0%9D%97%B1%F0%9D%97%B2-ugcPost-7418895567822499840-fcTU",
    image: img3,
  },
  {
    title: 'IEEE Techblocks',
    subtitle: 'Mentor - Trained 150+ students',
    detail: 'Conducted mentorship sessions focused on Gen AI concepts.',
    link: "https://www.linkedin.com/posts/dishi02_mentorship-ieeestudentbranch-innovation-ugcPost-7243309456581664769-p6ug",
    image: img4
  },
]

export default function Achievements() {
  const ref = useRef(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return
    const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return
    const items = root.querySelectorAll('[data-achievement-card]')
    items.forEach((el) => {
      gsap.fromTo(el, { opacity: 0, x: -20 }, {
        opacity: 1,
        x: 0,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 85%', end: 'bottom 20%', toggleActions: 'play reverse play reverse' }
      })
    })
  }, [])

  return (
    <Box id="achievements" as="section" py={{ base: 16, md: 24 }} bg="brand.background" position="relative" overflow="hidden">
      <Container maxW="1200px" position="relative" zIndex={1}>
        <Box mb={10}><ScrollHeading text="Achievements" /></Box>

        <Text
          textAlign="center"
          color="brand.muted"
          fontSize={{ base: 'md', md: 'lg' }}
          mb={8}
          fontFamily="'Inter', 'DM Sans', sans-serif"
          fontWeight="600"
        >
          Click any card to view the LinkedIn post.
        </Text>

        <SimpleGrid ref={ref} columns={{ base: 1, md: 2 }} spacing={{ base: 6, md: 8 }}>
          {achievementsData.map((item, index) => (
            <Box
              key={index}
              data-achievement-card
              bg="rgba(255, 255, 255, 0.65)"
              border="1px solid"
              borderColor="rgba(176, 137, 104, 0.2)"
              borderRadius="3xl"
              overflow="hidden"
              backdropFilter="blur(16px)"
              boxShadow="0 10px 30px rgba(0,0,0,0.06)"
              transition="all 0.3s ease"
              _hover={{ 
                bg: "rgba(255, 255, 255, 0.85)", 
                transform: "translateY(-6px)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.12)"
              }}
              display="flex"
              flexDirection="column"
            >
              <Box position="relative" height="220px" overflow="hidden">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  w="100%" 
                  h="100%" 
                  objectFit="cover" 
                  transition="transform 0.5s ease"
                  _hover={{ transform: "scale(1.05)" }}
                />
                <Box 
                  position="absolute" 
                  inset={0} 
                  bg="linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)" 
                />
                <Heading 
                  as="h3" 
                  position="absolute" 
                  bottom={4} 
                  left={5} 
                  right={5}
                  color="white" 
                  fontSize="xl" 
                  fontFamily="'Inter', 'DM Sans', sans-serif"
                >
                  {item.title}
                </Heading>
              </Box>

              <Box p={6} flex="1" display="flex" flexDirection="column">
                <Text 
                  color="brand.600" 
                  fontWeight="700" 
                  fontSize="sm" 
                  mb={2} 
                  textTransform="uppercase" 
                  letterSpacing="0.5px"
                >
                  {item.subtitle}
                </Text>
                
                <Text
                  fontSize="md"
                  color="brand.text"
                  fontFamily="'Inter', 'DM Sans', sans-serif"
                  mb={6}
                  lineHeight="1.6"
                >
                  {item.detail}
                </Text>

                <Link
                  href={item.link}
                  isExternal
                  mt="auto"
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  w="100%"
                  py={3}
                  borderRadius="xl"
                  bg="linear-gradient(135deg, #b08968 0%, #7a5f52 100%)"
                  color="white"
                  fontWeight="600"
                  fontSize="sm"
                  letterSpacing="0.5px"
                  transition="all 0.2s"
                  _hover={{ textDecoration: 'none', filter: 'brightness(1.1)', transform: "scale(1.02)" }}
                  _active={{ transform: "scale(0.98)" }}
                  boxShadow="0 4px 14px rgba(176,137,104,0.3)"
                >
                  View LinkedIn Post
                </Link>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}