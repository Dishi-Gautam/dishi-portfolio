import React, { useEffect, useRef } from 'react'
import { Box, Container, Heading, Text, Button, HStack, Link } from '@chakra-ui/react'
import { socials } from '../data'
import gsap from 'gsap'

export default function Footer() {
  const heartRef = useRef(null)

  useEffect(() => {
    const heart = heartRef.current
    if (!heart) return

    // Heartbeat animation
    gsap.timeline({ repeat: -1 }).to(heart, {
      scale: 1.3,
      duration: 0.1,
      ease: 'power2.out',
    }).to(heart, {
      scale: 1,
      duration: 0.15,
      ease: 'power2.in',
    }).to(heart, {
      scale: 1.2,
      duration: 0.1,
      ease: 'power2.out',
    }).to(heart, {
      scale: 1,
      duration: 0.15,
      ease: 'power2.in',
    }).to(heart, {
      scale: 1,
      duration: 0.4,
    })
  }, [])
  return (
    <Box as="footer" pos="relative" bg="linear-gradient(135deg, #f6ede3 0%, #ece4db 50%, #f0e8e0 100%)" pt={{ base: 10, md: 1}} pb={{ base: 8, md: 1 }} overflow="hidden">
      {/* Gradient background effect */}
      <Box pos="absolute" top="-40%" right="-20%" w="500px" h="500px" borderRadius="50%" bg="radial-gradient(circle, rgba(176,137,104,0.15) 0%, transparent 70%)" pointerEvents="none" />
      <Box pos="absolute" bottom="-30%" left="-15%" w="400px" h="400px" borderRadius="50%" bg="radial-gradient(circle, rgba(176,137,104,0.1) 0%, transparent 70%)" pointerEvents="none" />
      
      <Container maxW="1200px" pos="relative" zIndex={1}>
       
        <Text textAlign="center" color="brand.muted" mb={8}>
          Throw me an email or connect with me on LinkedIn!
        </Text>

        <HStack justify="center" spacing={6} mb={{ base: 12, md: 16 }}>
          <Button as={Link} href="mailto:mail2dishig@gmail.com" size="lg" variant="solid" borderRadius="full">
            Contact Me
          </Button>
          {socials.filter(s => s.label !== 'LeetCode').map((s) => (
            <Button key={s.label} as={Link} href={s.url} isExternal size="lg" variant="outline" borderRadius="full">
              {s.label}
            </Button>
          ))}
        </HStack>

        <HStack justify="center" spacing={6} color="brand.muted" mb={6}>
          <Link href="#work">Work</Link>
          <Link href="#about">About</Link>
          <Link href="#contact">Contact</Link>
          {socials.filter(s => s.label !== 'LeetCode').map((s) => (
            <Link key={`footer-nav-${s.label}`} href={s.url} isExternal>{s.label} ↗</Link>
          ))}
          <Link href="/resume.pdf" isExternal>Resume ↗</Link>
        </HStack>

        <HStack justify="center" spacing={2} color="brand.muted">
          <Text>Made with</Text>
          <Box as="span" ref={heartRef} display="inline-block" color="brand.600">❤️</Box>
          <Text>and :)</Text>
        </HStack>
      </Container>
    </Box>
  )
}
