import React, { useRef } from 'react'
import { Box, Text, Image, Badge } from '@chakra-ui/react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import lanyardTexture from '../assets/lanyard/lanyard.png'

export default function Lanyard({
  title = 'Welcome',
  subtitle = 'Glad you are here',
  imageSrc = ''
}) {
  const containerRef = useRef(null)

  // Motion values to simulate the physics of a hanging card
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Give the card a natural pendulum rotation based on horizontal drag
  const rotateX = useTransform(y, [-100, 100], [10, -10])
  const rotateY = useTransform(x, [-100, 100], [-15, 15])
  const rotateZ = useTransform(x, [-100, 100], [-8, 8])

  // Add smooth spring physics to the rotations
  const springRotateX = useSpring(rotateX, { stiffness: 200, damping: 20 })
  const springRotateY = useSpring(rotateY, { stiffness: 200, damping: 20 })
  const springRotateZ = useSpring(rotateZ, { stiffness: 200, damping: 20 })

  return (
    <Box
      ref={containerRef}
      position="relative"
      w="100%"
      h={{ base: '320px', md: '340px' }}
      borderRadius="2xl"
      overflow="visible"
      perspective="1000px"
      display="flex"
      justifyContent="center"
    >
      {/* Background Lanyard String (Static attachment point) */}
      <Box
        position="absolute"
        top={-4}
        left="50%"
        transform="translateX(-50%)"
        w="4px"
        h="48px"
        bg="linear-gradient(to bottom, #7a5f52, #b08968)"
        borderRadius="full"
        zIndex={0}
        boxShadow="0 4px 10px rgba(0,0,0,0.1)"
      />

      <Badge
        position="absolute"
        top={3}
        right={1}
        bg="linear-gradient(135deg, #b08968 0%, #7a5f52 100%)"
        color="white"
        borderRadius="full"
        px={3}
        py={1}
        textTransform="none"
        fontWeight="bold"
        fontSize="xs"
        zIndex={10}
        pointerEvents="none"
        boxShadow="0 4px 12px rgba(176,137,104,0.4)"
      >
        Drag Card !
      </Badge>

      {/* The Draggable Inner Card */}
      <Box
        as={motion.div}
        drag
        dragConstraints={containerRef}
        dragElastic={0.4}
        dragTransition={{ bounceStiffness: 400, bounceDamping: 15 }}
        whileDrag={{ scale: 1.05, cursor: 'grabbing' }}
        whileHover={{ scale: 1.02 }}
        style={{
          x,
          y,
          rotateX: springRotateX,
          rotateY: springRotateY,
          rotateZ: springRotateZ,
          cursor: 'grab',
          zIndex: 5
        }}
        position="absolute"
        top={8}
        w="90%"
        h="85%"
        borderRadius="2xl"
        bg="linear-gradient(160deg, rgba(255,255,255,1), rgba(245,236,228,0.95))"
        border="1px solid"
        borderColor="rgba(176,137,104,0.3)"
        boxShadow="0 20px 40px rgba(0,0,0,0.15), inset 0 2px 0 rgba(255,255,255,0.8)"
        transformOrigin="top center"
      >
        <Image
          src={lanyardTexture}
          alt="lanyard header"
          w="100%"
          h="18px"
          objectFit="cover"
          opacity={0.8}
          borderTopRadius="2xl"
          draggable={false}
        />

        {imageSrc ? (
          <Box px={4} pt={4}>
            <Image
              src={imageSrc}
              alt={title}
              w="100%"
              h="140px"
              objectFit="cover"
              borderRadius="xl"
              border="1px solid"
              borderColor="rgba(0,0,0,0.05)"
              boxShadow="0 8px 16px rgba(0,0,0,0.08)"
              draggable={false}
              userSelect="none"
            />
          </Box>
        ) : null}

        <Box px={5} pt={4} display="flex" flexDirection="column" gap={1}>
          <Text color="brand.text" fontWeight="800" fontSize="xl" textAlign="center" lineHeight="1.2">
            {title}
          </Text>
          <Text color="brand.muted" fontWeight="600" fontSize="sm" textAlign="center">
            {subtitle}
          </Text>
        </Box>
      </Box>
    </Box>
  )
}
