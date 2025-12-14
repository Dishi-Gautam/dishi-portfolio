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
    <Box 
      as="footer" 
      pos="relative" 
      bg="linear-gradient(180deg, #f7efe7 0%, #ece4db 100%)"
      pt={{ base: 16, md: 20 }} 
      pb={{ base: 12, md: 16 }} 
      overflow="hidden"
    >
      {/* Decorative elements */}
      <Box
        pos="absolute"
        top="10%"
        left="5%"
        width="200px"
        height="200px"
        borderRadius="50%"
        background="radial-gradient(circle, rgba(176, 137, 104, 0.08) 0%, transparent 70%)"
        filter="blur(40px)"
      />
      <Box
        pos="absolute"
        bottom="15%"
        right="8%"
        width="250px"
        height="250px"
        borderRadius="50%"
        background="radial-gradient(circle, rgba(215, 195, 181, 0.06) 0%, transparent 70%)"
        filter="blur(40px)"
      />
      
      <Container maxW="1200px" pos="relative" zIndex={1}>
        {/* Main CTA Section */}
        <Box textAlign="center" mb={12}>
          <Heading 
            as="h2" 
            fontSize={{ base: '3xl', md: '5xl' }}
            color="brand.text"
            mb={4}
            fontFamily="'Inter', 'DM Sans', sans-serif"
            fontWeight="700"
          >
            Let's Build Something Amazing
          </Heading>
          <Text 
            fontSize={{ base: 'lg', md: 'xl' }}
            color="brand.textSecondary"
            mb={8}
            maxW="600px"
            mx="auto"
            fontFamily="'Inter', 'DM Sans', sans-serif"
          >
            Have a project in mind? I'm always open to discussing new opportunities and creative ideas.
          </Text>
          <Button 
            as={Link} 
            href="mailto:mail2dishig@gmail.com" 
            size="lg"
            bg="linear-gradient(135deg, #b08968 0%, #7a5f52 100%)"
            color="white"
            px={10}
            py={7}
            fontSize="lg"
            borderRadius="full"
            fontFamily="'Inter', 'DM Sans', sans-serif"
            fontWeight="600"
            boxShadow="0 10px 30px rgba(176, 137, 104, 0.3)"
            transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
            _hover={{
              transform: 'translateY(-3px)',
              boxShadow: '0 15px 40px rgba(176, 137, 104, 0.4)',
            }}
          >
            Get In Touch ✉️
          </Button>
        </Box>

        {/* Social Links */}
        <HStack 
          justify="center" 
          spacing={8} 
          mb={12}
          flexWrap="wrap"
        >
          {socials.map((s) => (
            <Link 
              key={s.label}
              href={s.url} 
              isExternal
              fontSize="lg"
              color="brand.muted"
              fontFamily="'Inter', 'DM Sans', sans-serif"
              fontWeight="500"
              transition="all 0.3s ease"
              _hover={{ 
                color: 'brand.600',
                transform: 'translateY(-2px)'
              }}
            >
              {s.label}
            </Link>
          ))}
        </HStack>

        {/* Divider */}
        <Box 
          w="100%" 
          h="1px" 
          bg="rgba(176, 137, 104, 0.25)" 
          mb={8}
        />

        {/* Bottom Section */}
        <Box 
          display="flex"
          flexDirection={{ base: 'column', md: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          gap={4}
        >
          <HStack spacing={2} color="brand.muted" fontFamily="'Inter', 'DM Sans', sans-serif">
            <Text>© 2025 Dishi Gautam. Crafted with</Text>
            <Box as="span" ref={heartRef} display="inline-block" color="#b08968">❤️</Box>
          </HStack>
          <HStack spacing={6} flexWrap="wrap" justifyContent="center">
            <Link 
              href="#about"
              color="brand.muted"
              fontFamily="'Inter', 'DM Sans', sans-serif"
              fontSize="sm"
              transition="all 0.3s ease"
              _hover={{ color: 'brand.600' }}
            >
              About
            </Link>
            <Link 
              href="#projects"
              color="brand.muted"
              fontFamily="'Inter', 'DM Sans', sans-serif"
              fontSize="sm"
              transition="all 0.3s ease"
              _hover={{ color: 'brand.600' }}
            >
              Projects
            </Link>
            <Link 
              href="#skills"
              color="brand.muted"
              fontFamily="'Inter', 'DM Sans', sans-serif"
              fontSize="sm"
              transition="all 0.3s ease"
              _hover={{ color: 'brand.600' }}
            >
              Skills
            </Link>
            <Link 
              href="#contact"
              color="brand.muted"
              fontFamily="'Inter', 'DM Sans', sans-serif"
              fontSize="sm"
              transition="all 0.3s ease"
              _hover={{ color: 'brand.600' }}
            >
              Contact
            </Link>
          </HStack>
        </Box>
      </Container>
    </Box>
  )
}
