import React, { useEffect, useState } from 'react'
import { Box, Button, Flex, IconButton, VStack, Link as ChakraLink, useDisclosure } from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

const links = [
  { id: 'home', label: 'home' },
  { id: 'about', label: 'about' },
  { id: 'experience', label: 'experience' },
  { id: 'projects', label: 'projects' },
  { id: 'skills', label: 'skills' },
  { id: 'contact', label: 'contact' },
]

export default function SidebarNav() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [activeId, setActiveId] = useState('home')

  const handleNav = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    onClose()
  }

  // Observe sections to highlight active link
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id
            if (id) setActiveId(id)
          }
        })
      },
      { root: null, rootMargin: '0px 0px -60% 0px', threshold: 0.25 }
    )

    // Delay to ensure all sections are mounted
    const timeoutId = setTimeout(() => {
      const targets = links
        .map((l) => document.getElementById(l.id))
        .filter(Boolean)
      targets.forEach((t) => observer.observe(t))
    }, 100)

    return () => {
      clearTimeout(timeoutId)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      {/* Hamburger Menu Button - Mobile Only */}
      <IconButton
        aria-label="Open menu"
        icon={<HamburgerIcon />}
        onClick={onOpen}
        display={{ base: 'flex', md: 'none' }}
        position="fixed"
        top={4}
        right={4}
        zIndex={20}
        bg="rgba(255, 255, 255, 0.85)"
        backdropFilter="blur(10px)"
        border="1px solid"
        borderColor="rgba(176,137,104,0.15)"
        boxShadow="0 4px 20px rgba(0,0,0,0.08)"
        _hover={{ bg: 'rgba(255, 255, 255, 0.95)' }}
      />

      {/* Desktop Navigation - Top Center */}
      <Box
        as="nav"
        aria-label="Primary"
        position="fixed"
        top={{ base: 4, md: 6 }}
        left="50%"
        transform="translateX(-50%)"
        zIndex={1000}
        bg="rgba(251, 246, 241, 0.7)"
        backdropFilter="blur(16px) saturate(180%)"
        borderRadius="full"
        px={{ base: 4, md: 6 }}
        py={3}
        boxShadow="0 8px 32px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)"
        border="1px solid"
        borderColor="rgba(176,137,104,0.2)"
        display={{ base: 'none', md: 'block' }}
        transition="all 0.3s ease"
        _before={{
          content: '""',
          position: 'absolute',
          inset: 0,
          borderRadius: 'full',
          padding: '1px',
          background: 'linear-gradient(135deg, rgba(255,255,255,0.8), rgba(176,137,104,0.3))',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          pointerEvents: 'none',
        }}
      >
        <Flex as="ul" gap={{ base: 3, md: 6 }} align="center" listStyleType="none" m={0} p={0}>
          {links.map((l) => {
            const isActive = activeId === l.id
            return (
              <Button
                as="li"
                key={l.id}
                onClick={() => handleNav(l.id)}
                variant="unstyled"
                fontSize={{ base: 'sm', md: 'md' }}
                fontWeight={isActive ? '600' : '500'}
                color={isActive ? 'brand.600' : 'brand.muted'}
                fontFamily="'Story Script', 'Comic Neue', 'Quicksand', cursive, sans-serif"
                textTransform="lowercase"
                position="relative"
                px={2}
                h="auto"
                minW="auto"
                transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                _hover={{
                  color: 'brand.600',
                  transform: 'translateY(-2px) scale(1.05)',
                  textShadow: '0 2px 8px rgba(176, 137, 104, 0.2)',
                }}
                _active={{
                  transform: 'translateY(0) scale(0.98)',
                }}
                _after={{
                  content: '""',
                  position: 'absolute',
                  bottom: '-4px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: isActive ? '100%' : '0%',
                  height: '2px',
                  bg: 'brand.500',
                  borderRadius: 'full',
                  transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                {l.label}
              </Button>
            )
          })}
        </Flex>
      </Box>

      {/* Mobile Drawer */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <Box
            position="fixed"
            inset={0}
            bg="blackAlpha.600"
            zIndex={30}
            onClick={onClose}
          />
          
          {/* Drawer */}
          <Box
            position="fixed"
            top={0}
            right={0}
            h="100vh"
            w="280px"
            bg="brand.window"
            borderLeft="1px solid"
            borderColor="brand.border"
            zIndex={31}
            boxShadow="0 0 40px rgba(0,0,0,0.2)"
            p={6}
          >
            {/* Close Button */}
            <IconButton
              aria-label="Close menu"
              icon={<CloseIcon />}
              onClick={onClose}
              position="absolute"
              top={4}
              right={4}
              size="sm"
              variant="ghost"
            />

            {/* Navigation Links */}
            <VStack spacing={4} align="stretch" mt={12}>
              {links.map((l) => {
                const isActive = activeId === l.id
                return (
                  <ChakraLink
                    key={l.id}
                    onClick={() => handleNav(l.id)}
                    fontSize="lg"
                    fontWeight={isActive ? '600' : '500'}
                    color={isActive ? 'brand.600' : 'brand.text'}
                    fontFamily="'Inter', 'DM Sans', sans-serif"
                    textTransform="lowercase"
                    px={4}
                    py={3}
                    borderRadius="md"
                    bg={isActive ? 'rgba(176,137,104,0.1)' : 'transparent'}
                    _hover={{
                      bg: 'rgba(176,137,104,0.15)',
                      color: 'brand.600',
                    }}
                    transition="all 0.2s ease"
                    cursor="pointer"
                  >
                    {l.label}
                  </ChakraLink>
                )
              })}
            </VStack>
          </Box>
        </>
      )}
    </>
  )
}
