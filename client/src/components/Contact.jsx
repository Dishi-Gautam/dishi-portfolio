import React, { useEffect, useRef } from 'react'
import { Box, Container, Heading, Text, Input, Textarea, Button, VStack, HStack, Link, Icon } from '@chakra-ui/react'
import { socials } from '../data'
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

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!prefersReduced) {
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
      const infoItems = container.querySelectorAll('[data-info] > div > [data-contact-item]')
      infoItems.forEach((el, i) => {
        gsap.fromTo(el, { opacity: 0, x: 16, filter: 'blur(4px)' }, {
          opacity: 1,
          x: 0,
          filter: 'blur(0px)',
          duration: 0.6,
          ease: 'power2.out',
          delay: 0.3 + i * 0.06,
          scrollTrigger: { trigger: el, start: 'top 95%', toggleActions: 'play reverse play reverse' }
        })
      })
    }
  }, [])

  return (
    <Box id="contact" py={{ base: 20, md: 28 }} bg="brand.window" ref={containerRef}>
      <Container maxW="1200px">
        <Box display={{ base: 'block', md: 'grid' }} gridTemplateColumns={{ md: '1fr 1fr' }} gap={{ base: 8, md: 12 }}>
          {/* Form Section */}
          <Box data-form>
            <form onSubmit={(e) => e.preventDefault()}>
              <VStack spacing={4} align="stretch">
                {/* Name and Subject Row */}
                <HStack spacing={4} data-field>
                  <Input
                    placeholder="Name"
                    type="text"
                    bg="rgba(176, 137, 104, 0.08)"
                    border="none"
                    borderRadius="md"
                    color="brand.text"
                    px={4}
                    py={6}
                    _placeholder={{ color: 'brand.muted' }}
                    _focus={{ bg: 'rgba(176, 137, 104, 0.12)', outline: 'none' }}
                    transition="all 200ms ease"
                    required
                  />
                  <Input
                    placeholder="Subject"
                    type="text"
                    bg="rgba(176, 137, 104, 0.08)"
                    border="none"
                    borderRadius="md"
                    color="brand.text"
                    px={4}
                    py={6}
                    _placeholder={{ color: 'brand.muted' }}
                    _focus={{ bg: 'rgba(176, 137, 104, 0.12)', outline: 'none' }}
                    transition="all 200ms ease"
                  />
                </HStack>

                {/* Email and Phone Row */}
                <HStack spacing={4} data-field>
                  <Input
                    placeholder="E-Mail"
                    type="email"
                    bg="rgba(176, 137, 104, 0.08)"
                    border="none"
                    borderRadius="md"
                    color="brand.text"
                    px={4}
                    py={6}
                    _placeholder={{ color: 'brand.muted' }}
                    _focus={{ bg: 'rgba(176, 137, 104, 0.12)', outline: 'none' }}
                    transition="all 200ms ease"
                    required
                  />
                  <Input
                    placeholder="Phone"
                    type="tel"
                    bg="rgba(176, 137, 104, 0.08)"
                    border="none"
                    borderRadius="md"
                    color="brand.text"
                    px={4}
                    py={6}
                    _placeholder={{ color: 'brand.muted' }}
                    _focus={{ bg: 'rgba(176, 137, 104, 0.12)', outline: 'none' }}
                    transition="all 200ms ease"
                  />
                </HStack>

                {/* Message */}
                <Box data-field>
                  <Textarea
                    placeholder="Your Message..."
                    rows={6}
                    bg="rgba(176, 137, 104, 0.08)"
                    border="none"
                    borderRadius="md"
                    color="brand.text"
                    px={4}
                    py={4}
                    _placeholder={{ color: 'brand.muted' }}
                    _focus={{ bg: 'rgba(176, 137, 104, 0.12)', outline: 'none' }}
                    transition="all 200ms ease"
                  />
                </Box>

                {/* Submit Button */}
                <Box data-field>
                  <Button
                    type="submit"
                    bg="linear-gradient(135deg, var(--brand-500) 0%, var(--brand-600) 100%)"
                    color="brand.text"
                    fontWeight="600"
                    px={8}
                    py={6}
                    borderRadius="full"
                    textTransform="uppercase"
                    fontSize="sm"
                    letterSpacing="wide"
                    boxShadow="0 10px 30px rgba(176, 137, 104, 0.3)"
                    _hover={{ 
                      transform: 'translateY(-2px)', 
                      boxShadow: '0 15px 40px rgba(176, 137, 104, 0.4)' 
                    }}
                    _active={{ transform: 'translateY(0)' }}
                    transition="all 300ms ease"
                  >
                    Send Message
                  </Button>
                </Box>
              </VStack>
            </form>
          </Box>

          {/* Contact Info Section - Colorful Cards */}
          <Box data-info display="flex" flexDirection="column" justifyContent="center" gap={6}>
            {/* GitHub Card */}
            <Box 
              data-contact-item 
              bg="linear-gradient(135deg, var(--brand-500) 0%, var(--brand-600) 100%)"
              borderRadius="2xl"
              p={6}
              color="brand.text"
              boxShadow="0 10px 30px rgba(176, 137, 104, 0.3)"
              position="relative"
              overflow="hidden"
              _hover={{ transform: 'translateY(-4px)', boxShadow: '0 15px 40px rgba(176, 137, 104, 0.4)' }}
              transition="all 300ms ease"
            >
              {/* Decorative blob */}
              <Box
                position="absolute"
                top="-20px"
                left="-20px"
                w="100px"
                h="100px"
                bg="white"
                opacity={0.15}
                borderRadius="full"
              />
              <HStack spacing={4} position="relative" zIndex={1}>
                <Box 
                  bg="white" 
                  p={3} 
                  borderRadius="xl"
                  boxShadow="0 5px 15px rgba(0,0,0,0.1)"
                >
                  <Icon as={SiGithub} boxSize={6} color="brand.600" />
                </Box>
                <VStack align="start" spacing={0}>
                  <Text fontSize="lg" fontWeight="700">GitHub</Text>
                  <Link href="https://github.com/Dishi-Gautam" isExternal fontSize="sm" opacity={0.95} _hover={{ opacity: 1 }}>
                    Dishi-Gautam
                  </Link>
                </VStack>
              </HStack>
            </Box>

            {/* LinkedIn Card */}
            <Box 
              data-contact-item 
              bg="linear-gradient(135deg, var(--brand-500) 0%, var(--brand-600) 100%)"
              borderRadius="2xl"
              p={6}
              color="brand.text"
              boxShadow="0 10px 30px rgba(176, 137, 104, 0.3)"
              position="relative"
              overflow="hidden"
              _hover={{ transform: 'translateY(-4px)', boxShadow: '0 15px 40px rgba(176, 137, 104, 0.4)' }}
              transition="all 300ms ease"
            >
              <Box
                position="absolute"
                top="-20px"
                left="-20px"
                w="100px"
                h="100px"
                bg="white"
                opacity={0.15}
                borderRadius="full"
              />
              <HStack spacing={4} position="relative" zIndex={1}>
                <Box 
                  bg="white" 
                  p={3} 
                  borderRadius="xl"
                  boxShadow="0 5px 15px rgba(0,0,0,0.1)"
                >
                  <Icon as={SiLinkedin} boxSize={6} color="brand.600" />
                </Box>
                <VStack align="start" spacing={0}>
                  <Text fontSize="lg" fontWeight="700">LinkedIn</Text>
                  <Link href="https://www.linkedin.com/in/dishi02/" isExternal fontSize="sm" opacity={0.95} _hover={{ opacity: 1 }}>
                    Dishi Gautam
                  </Link>
                </VStack>
              </HStack>
            </Box>

            {/* Email Card */}
            <Box 
              data-contact-item 
              bg="linear-gradient(135deg, var(--brand-500) 0%, var(--brand-600) 100%)"
              borderRadius="2xl"
              p={6}
              color="brand.text"
              boxShadow="0 10px 30px rgba(176, 137, 104, 0.3)"
              position="relative"
              overflow="hidden"
              _hover={{ transform: 'translateY(-4px)', boxShadow: '0 15px 40px rgba(176, 137, 104, 0.4)' }}
              transition="all 300ms ease"
            >
              <Box
                position="absolute"
                top="-20px"
                left="-20px"
                w="100px"
                h="100px"
                bg="white"
                opacity={0.15}
                borderRadius="full"
              />
              <HStack spacing={4} position="relative" zIndex={1}>
                <Box 
                  bg="white" 
                  p={3} 
                  borderRadius="xl"
                  boxShadow="0 5px 15px rgba(0,0,0,0.1)"
                >
                  <Icon as={FiMail} boxSize={6} color="brand.600" />
                </Box>
                <VStack align="start" spacing={0}>
                  <Text fontSize="lg" fontWeight="700">Email At</Text>
                  <Link href="mailto:mail2dishig@gmail.com" fontSize="sm" opacity={0.95} _hover={{ opacity: 1 }}>
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
