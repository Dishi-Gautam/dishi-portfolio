import React, { useEffect, useRef } from 'react'
import { Box, Container, Heading, Text, Input, Textarea, Button, VStack, HStack, Link, Icon } from '@chakra-ui/react'
import { socials } from '../data'
import ScrollHeading from './ScrollHeading'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi'
import { SiGithub, SiLinkedin, SiLeetcode } from 'react-icons/si'

gsap.registerPlugin(ScrollTrigger)

const socialIconMap = {
  'GitHub': SiGithub,
  'LinkedIn': SiLinkedin,
  'LeetCode': SiLeetcode,
}

export default function Contact() {
  const containerRef = useRef(null)
  const shapesRef = useRef([])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!prefersReduced) {
      // Floating shapes animation
      shapesRef.current.forEach((shape, i) => {
        if (!shape) return
        gsap.to(shape, {
          y: -30 + (i * 15),
          x: 15 - (i * 8),
          duration: 4 + (i * 0.8),
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
        })
        
        gsap.to(shape, {
          rotation: 360,
          duration: 20 + (i * 5),
          ease: 'none',
          repeat: -1,
        })
      })

      // Form section animation with stagger
      const formBox = container.querySelector('[data-form]')
      if (formBox) {
        gsap.fromTo(formBox, { opacity: 0, x: -40, filter: 'blur(8px)' }, {
          opacity: 1,
          x: 0,
          filter: 'blur(0px)',
          duration: 0.95,
          ease: 'power2.out',
          scrollTrigger: { trigger: container, start: 'top 85%', toggleActions: 'play reverse play reverse' }
        })
      }

      // Info section animation
      const infoBox = container.querySelector('[data-info]')
      if (infoBox) {
        gsap.fromTo(infoBox, { opacity: 0, x: 40, filter: 'blur(8px)' }, {
          opacity: 1,
          x: 0,
          filter: 'blur(0px)',
          duration: 0.95,
          ease: 'power2.out',
          delay: 0.12,
          scrollTrigger: { trigger: container, start: 'top 85%', toggleActions: 'play reverse play reverse' }
        })
      }

      // Form fields stagger with enhanced animation
      const fields = container.querySelectorAll('[data-field]')
      fields.forEach((el, i) => {
        gsap.fromTo(el, { opacity: 0, y: 20, filter: 'blur(5px)' }, {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.65,
          ease: 'power2.out',
          delay: 0.15 + i * 0.08,
          scrollTrigger: { trigger: el, start: 'top 95%', toggleActions: 'play reverse play reverse' }
        })
      })

      // Info items stagger
      const infoItems = container.querySelectorAll('[data-info] [data-contact-item]')
      infoItems.forEach((el, i) => {
        gsap.fromTo(el, { opacity: 0, scale: 0.9, filter: 'blur(4px)' }, {
          opacity: 1,
          scale: 1,
          filter: 'blur(0px)',
          duration: 0.6,
          ease: 'back.out(1.2)',
          delay: 0.3 + i * 0.1,
          scrollTrigger: { trigger: el, start: 'top 95%', toggleActions: 'play reverse play reverse' }
        })
      })
    }
  }, [])

  return (
    <Box 
      id="contact" 
      py={{ base: 20, md: 28 }} 
      bg="linear-gradient(135deg, #3e3028 0%, #4a3b33 50%, #3e3028 100%)"
      position="relative"
      overflow="hidden"
      ref={containerRef}
    >
      {/* Floating geometric shapes */}
      <Box
        ref={(el) => (shapesRef.current[0] = el)}
        position="absolute"
        top="15%"
        right="8%"
        width={{ base: '50px', md: '70px' }}
        height={{ base: '50px', md: '70px' }}
        borderRadius="30% 70% 70% 30% / 30% 30% 70% 70%"
        background="linear-gradient(135deg, rgba(215, 195, 181, 0.2), rgba(176, 137, 104, 0.3))"
        filter="blur(1px)"
        zIndex={1}
      />
      <Box
        ref={(el) => (shapesRef.current[1] = el)}
        position="absolute"
        top="60%"
        left="5%"
        width={{ base: '40px', md: '60px' }}
        height={{ base: '40px', md: '60px' }}
        borderRadius="50%"
        background="linear-gradient(135deg, rgba(233, 215, 201, 0.25), rgba(215, 195, 181, 0.3))"
        filter="blur(1px)"
        zIndex={1}
      />
      <Box
        ref={(el) => (shapesRef.current[2] = el)}
        position="absolute"
        bottom="10%"
        right="15%"
        width={{ base: '45px', md: '65px' }}
        height={{ base: '45px', md: '65px' }}
        clipPath="polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"
        background="linear-gradient(135deg, rgba(176, 137, 104, 0.25), rgba(143, 111, 86, 0.35))"
        filter="blur(1px)"
        zIndex={1}
      />

      <Container maxW="1200px" position="relative" zIndex={2}>
        <Box textAlign="center" mb={{ base: 10, md: 12 }}>
          <ScrollHeading text="Get In Touch" lightMode />
          <Text 
            fontSize={{ base: 'md', md: 'lg' }}
            color="rgba(255, 255, 255, 0.8)"
            fontFamily="'Inter', 'DM Sans', sans-serif"
            maxW="700px"
            mx="auto"
            mt={4}
          >
            Have a project in mind or want to collaborate? Drop me a message and let's create something amazing together
          </Text>
        </Box>
        <Box display={{ base: 'block', md: 'grid' }} gridTemplateColumns={{ md: '1fr 1fr' }} gap={{ base: 8, md: 12 }}>
          {/* Form Section */}
          <Box 
            data-form
            bg="rgba(74, 59, 51, 0.4)"
            backdropFilter="blur(20px) saturate(180%)"
            borderRadius="3xl"
            p={{ base: 6, md: 8 }}
            border="1px solid"
            borderColor="rgba(176, 137, 104, 0.2)"
            boxShadow="0 20px 60px rgba(0, 0, 0, 0.3)"
          >
            <form onSubmit={(e) => e.preventDefault()}>
              <VStack spacing={5} align="stretch">
                {/* Name and Subject Row */}
                <HStack spacing={4} data-field>
                  <Input
                    placeholder="Name"
                    type="text"
                    bg="rgba(255, 255, 255, 0.1)"
                    border="1px solid"
                    borderColor="rgba(176, 137, 104, 0.3)"
                    borderRadius="xl"
                    color="white"
                    px={4}
                    py={6}
                    _placeholder={{ color: 'rgba(255, 255, 255, 0.5)' }}
                    _focus={{ 
                      bg: 'rgba(255, 255, 255, 0.15)', 
                      borderColor: 'rgba(176, 137, 104, 0.6)',
                      outline: 'none' 
                    }}
                    _hover={{ borderColor: 'rgba(176, 137, 104, 0.4)' }}
                    transition="all 300ms ease"
                    fontFamily="'Inter', 'DM Sans', sans-serif"
                    required
                  />
                  <Input
                    placeholder="Subject"
                    type="text"
                    bg="rgba(255, 255, 255, 0.1)"
                    border="1px solid"
                    borderColor="rgba(176, 137, 104, 0.3)"
                    borderRadius="xl"
                    color="white"
                    px={4}
                    py={6}
                    _placeholder={{ color: 'rgba(255, 255, 255, 0.5)' }}
                    _focus={{ 
                      bg: 'rgba(255, 255, 255, 0.15)', 
                      borderColor: 'rgba(176, 137, 104, 0.6)',
                      outline: 'none' 
                    }}
                    _hover={{ borderColor: 'rgba(176, 137, 104, 0.4)' }}
                    transition="all 300ms ease"
                    fontFamily="'Inter', 'DM Sans', sans-serif"
                  />
                </HStack>

                {/* Email and Phone Row */}
                <HStack spacing={4} data-field>
                  <Input
                    placeholder="E-Mail"
                    type="email"
                    bg="rgba(255, 255, 255, 0.1)"
                    border="1px solid"
                    borderColor="rgba(176, 137, 104, 0.3)"
                    borderRadius="xl"
                    color="white"
                    px={4}
                    py={6}
                    _placeholder={{ color: 'rgba(255, 255, 255, 0.5)' }}
                    _focus={{ 
                      bg: 'rgba(255, 255, 255, 0.15)', 
                      borderColor: 'rgba(176, 137, 104, 0.6)',
                      outline: 'none' 
                    }}
                    _hover={{ borderColor: 'rgba(176, 137, 104, 0.4)' }}
                    transition="all 300ms ease"
                    fontFamily="'Inter', 'DM Sans', sans-serif"
                    required
                  />
                  <Input
                    placeholder="Phone"
                    type="tel"
                    bg="rgba(255, 255, 255, 0.1)"
                    border="1px solid"
                    borderColor="rgba(176, 137, 104, 0.3)"
                    borderRadius="xl"
                    color="white"
                    px={4}
                    py={6}
                    _placeholder={{ color: 'rgba(255, 255, 255, 0.5)' }}
                    _focus={{ 
                      bg: 'rgba(255, 255, 255, 0.15)', 
                      borderColor: 'rgba(176, 137, 104, 0.6)',
                      outline: 'none' 
                    }}
                    _hover={{ borderColor: 'rgba(176, 137, 104, 0.4)' }}
                    transition="all 300ms ease"
                    fontFamily="'Inter', 'DM Sans', sans-serif"
                  />
                </HStack>

                {/* Message */}
                <Box data-field>
                  <Textarea
                    placeholder="Your Message..."
                    rows={6}
                    bg="rgba(255, 255, 255, 0.1)"
                    border="1px solid"
                    borderColor="rgba(176, 137, 104, 0.3)"
                    borderRadius="xl"
                    color="white"
                    px={4}
                    py={4}
                    _placeholder={{ color: 'rgba(255, 255, 255, 0.5)' }}
                    _focus={{ 
                      bg: 'rgba(255, 255, 255, 0.15)', 
                      borderColor: 'rgba(176, 137, 104, 0.6)',
                      outline: 'none' 
                    }}
                    _hover={{ borderColor: 'rgba(176, 137, 104, 0.4)' }}
                    transition="all 300ms ease"
                    fontFamily="'Inter', 'DM Sans', sans-serif"
                  />
                </Box>

                {/* Submit Button */}
                <Box data-field>
                  <Button
                    type="submit"
                    w="full"
                    bg="rgba(176, 137, 104, 0.9)"
                    color="white"
                    fontWeight="600"
                    px={8}
                    py={7}
                    borderRadius="xl"
                    fontSize="md"
                    letterSpacing="wide"
                    fontFamily="'Inter', 'DM Sans', sans-serif"
                    boxShadow="0 10px 30px rgba(176, 137, 104, 0.4)"
                    _hover={{ 
                      bg: 'rgba(176, 137, 104, 1)',
                      transform: 'translateY(-2px)', 
                      boxShadow: '0 15px 40px rgba(176, 137, 104, 0.5)' 
                    }}
                    _active={{ transform: 'translateY(0)' }}
                    transition="all 300ms ease"
                  >
                    Send Message ✉️
                  </Button>
                </Box>
              </VStack>
            </form>
          </Box>

          {/* Contact Info Section - Redesigned Cards */}
          <Box data-info display="flex" flexDirection="column" justifyContent="center" gap={5}>
            {/* GitHub Card */}
            <Box 
              data-contact-item 
              bg="rgba(74, 59, 51, 0.5)"
              backdropFilter="blur(20px) saturate(180%)"
              borderRadius="2xl"
              p={6}
              color="white"
              boxShadow="0 10px 30px rgba(0, 0, 0, 0.3)"
              position="relative"
              overflow="hidden"
              border="1px solid"
              borderColor="rgba(176, 137, 104, 0.3)"
              _hover={{ 
                transform: 'translateY(-6px) scale(1.02)', 
                boxShadow: '0 20px 50px rgba(176, 137, 104, 0.4)',
                borderColor: 'rgba(176, 137, 104, 0.5)'
              }}
              transition="all 400ms cubic-bezier(0.4, 0, 0.2, 1)"
              cursor="pointer"
            >
              {/* Decorative gradient overlay */}
              <Box
                position="absolute"
                top="-30px"
                right="-30px"
                w="120px"
                h="120px"
                bg="linear-gradient(135deg, rgba(176, 137, 104, 0.3), rgba(215, 195, 181, 0.2))"
                borderRadius="full"
                filter="blur(30px)"
              />
              <HStack spacing={4} position="relative" zIndex={1}>
                <Box 
                  bg="rgba(176, 137, 104, 0.9)"
                  p={3.5} 
                  borderRadius="xl"
                  boxShadow="0 8px 20px rgba(0,0,0,0.2)"
                  transition="all 300ms ease"
                  _groupHover={{ transform: 'rotate(10deg) scale(1.1)' }}
                >
                  <Icon as={SiGithub} boxSize={6} color="white" />
                </Box>
                <VStack align="start" spacing={1}>
                  <Text fontSize="lg" fontWeight="700" fontFamily="'Inter', 'DM Sans', sans-serif">GitHub</Text>
                  <Link 
                    href="https://github.com/Dishi-Gautam" 
                    isExternal 
                    fontSize="sm" 
                    color="rgba(255, 255, 255, 0.8)"
                    fontFamily="'Inter', 'DM Sans', sans-serif"
                    _hover={{ color: 'white', textDecoration: 'underline' }}
                  >
                    Dishi-Gautam
                  </Link>
                </VStack>
              </HStack>
            </Box>

            {/* LinkedIn Card */}
            <Box 
              data-contact-item 
              bg="rgba(74, 59, 51, 0.5)"
              backdropFilter="blur(20px) saturate(180%)"
              borderRadius="2xl"
              p={6}
              color="white"
              boxShadow="0 10px 30px rgba(0, 0, 0, 0.3)"
              position="relative"
              overflow="hidden"
              border="1px solid"
              borderColor="rgba(176, 137, 104, 0.3)"
              _hover={{ 
                transform: 'translateY(-6px) scale(1.02)', 
                boxShadow: '0 20px 50px rgba(176, 137, 104, 0.4)',
                borderColor: 'rgba(176, 137, 104, 0.5)'
              }}
              transition="all 400ms cubic-bezier(0.4, 0, 0.2, 1)"
              cursor="pointer"
            >
              <Box
                position="absolute"
                top="-30px"
                right="-30px"
                w="120px"
                h="120px"
                bg="linear-gradient(135deg, rgba(176, 137, 104, 0.3), rgba(215, 195, 181, 0.2))"
                borderRadius="full"
                filter="blur(30px)"
              />
              <HStack spacing={4} position="relative" zIndex={1}>
                <Box 
                  bg="rgba(176, 137, 104, 0.9)"
                  p={3.5} 
                  borderRadius="xl"
                  boxShadow="0 8px 20px rgba(0,0,0,0.2)"
                  transition="all 300ms ease"
                >
                  <Icon as={SiLinkedin} boxSize={6} color="white" />
                </Box>
                <VStack align="start" spacing={1}>
                  <Text fontSize="lg" fontWeight="700" fontFamily="'Inter', 'DM Sans', sans-serif">LinkedIn</Text>
                  <Link 
                    href="https://www.linkedin.com/in/dishi02/" 
                    isExternal 
                    fontSize="sm" 
                    color="rgba(255, 255, 255, 0.8)"
                    fontFamily="'Inter', 'DM Sans', sans-serif"
                    _hover={{ color: 'white', textDecoration: 'underline' }}
                  >
                    Dishi Gautam
                  </Link>
                </VStack>
              </HStack>
            </Box>

            {/* Email Card */}
            <Box 
              data-contact-item 
              bg="rgba(74, 59, 51, 0.5)"
              backdropFilter="blur(20px) saturate(180%)"
              borderRadius="2xl"
              p={6}
              color="white"
              boxShadow="0 10px 30px rgba(0, 0, 0, 0.3)"
              position="relative"
              overflow="hidden"
              border="1px solid"
              borderColor="rgba(176, 137, 104, 0.3)"
              _hover={{ 
                transform: 'translateY(-6px) scale(1.02)', 
                boxShadow: '0 20px 50px rgba(176, 137, 104, 0.4)',
                borderColor: 'rgba(176, 137, 104, 0.5)'
              }}
              transition="all 400ms cubic-bezier(0.4, 0, 0.2, 1)"
              cursor="pointer"
            >
              <Box
                position="absolute"
                top="-30px"
                right="-30px"
                w="120px"
                h="120px"
                bg="linear-gradient(135deg, rgba(176, 137, 104, 0.3), rgba(215, 195, 181, 0.2))"
                borderRadius="full"
                filter="blur(30px)"
              />
              <HStack spacing={4} position="relative" zIndex={1}>
                <Box 
                  bg="rgba(176, 137, 104, 0.9)"
                  p={3.5} 
                  borderRadius="xl"
                  boxShadow="0 8px 20px rgba(0,0,0,0.2)"
                  transition="all 300ms ease"
                >
                  <Icon as={FiMail} boxSize={6} color="white" />
                </Box>
                <VStack align="start" spacing={1}>
                  <Text fontSize="lg" fontWeight="700" fontFamily="'Inter', 'DM Sans', sans-serif">Email At</Text>
                  <Link 
                    href="mailto:mail2dishig@gmail.com" 
                    fontSize="sm" 
                    color="rgba(255, 255, 255, 0.8)"
                    fontFamily="'Inter', 'DM Sans', sans-serif"
                    _hover={{ color: 'white', textDecoration: 'underline' }}
                  >
                    mail2dishig@gmail.com
                  </Link>
                </VStack>
              </HStack>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
