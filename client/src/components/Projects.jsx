// src/components/Projects.jsx
import React, { useEffect, useMemo, useRef, useState } from 'react'
import styles from './Projects.module.css'
import {
  Box,
  Text,
  Button,
  Heading,
  Flex,
  Badge,
} from '@chakra-ui/react'
import ScrollHeading from './ScrollHeading'
import { projects } from '../data'
import { staggerReveal } from '../utils/gsap'

const chunk = (arr, size) => arr.reduce((acc, _, i) => {
  if (i % size === 0) acc.push(arr.slice(i, i + size))
  return acc
}, [])

export default function Projects() {
  const ref = useRef(null)
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [disableTransition, setDisableTransition] = useState(false)
  
  const slides = useMemo(() => chunk(projects.slice(0, 6), 2), [])
  const extendedSlides = useMemo(() => [...slides, slides[0]], [slides])

  // Stagger cards on scroll
  useEffect(() => {
    if (!ref.current) return
    const items = ref.current.querySelectorAll('.proj-card')
    if (items.length) staggerReveal(items)
  }, [])

  // Auto-advance carousel with infinite loop
  useEffect(() => {
    const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return undefined
    if (paused) return undefined
    const id = setInterval(() => {
      setDisableTransition(false)
      setActive((prev) => {
        if (prev === extendedSlides.length - 1) return prev
        return prev + 1
      })
    }, 6200)
    return () => clearInterval(id)
  }, [paused, extendedSlides.length])

  // Handle infinite loop reset
  useEffect(() => {
    if (active === extendedSlides.length - 1) {
      const timeout = setTimeout(() => {
        setDisableTransition(true)
        setActive(0)
      }, 900)
      return () => clearTimeout(timeout)
    }
  }, [active, extendedSlides.length])

  return (
    <div id="projects" className={styles.wrap}>
      <div className="container" ref={ref}>
        <Box textAlign="center" mb={12}>
          <Box mb={4}>
            <ScrollHeading text="My Projects" lightMode />
          </Box>
          <Text 
            fontSize={{ base: 'md', md: 'lg' }}
            color="rgba(255, 255, 255, 0.8)"
            fontFamily="'Inter', 'DM Sans', sans-serif"
            maxW="800px"
            mx="auto"
          >
            Discover the projects that showcase my passion for design and innovation
          </Text>
        </Box>

        <div className={styles.carousel}>
          <div
            className={styles.track}
            style={{
              transform: `translateX(-${active * 100}%)`,
              transition: disableTransition ? 'none' : 'transform 900ms ease-in-out',
            }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {extendedSlides.map((pair, slideIdx) => (
              <div key={slideIdx} className={styles.slide}>
                {pair.map((p, idx) => {
                  const cardKey = `${slideIdx}-${idx}`
                  return (
                    <div
                      key={cardKey}
                      className={`${styles.card} proj-card`}
                    >
                      <div className={styles.imageArea}>
                        {p.image ? (
                          <img src={p.image} alt={p.title} className={styles.projectImage} />
                        ) : (
                          <div className={styles.placeholderImage}>
                            <Text fontSize="4xl" opacity={0.3}>🚀</Text>
                          </div>
                        )}
                      </div>
                      
                      <div className={styles.cardContent}>
                        <Flex justify="space-between" align="center" mb={3}>
                          <Heading 
                            as="h3" 
                            fontSize="xl"
                            fontFamily="'Story Script', cursive"
                            color="white"
                          >
                            {p.title}
                          </Heading>
                          <Badge
                            bg="rgba(176, 137, 104, 0.3)"
                            color="#e9d7c9"
                            px={3}
                            py={1}
                            borderRadius="full"
                            fontSize="xs"
                            fontFamily="'Inter', 'DM Sans', sans-serif"
                            textTransform="capitalize"
                          >
                            {p.category || 'Web Design'}
                          </Badge>
                        </Flex>

                        <Text 
                          fontSize="sm" 
                          color="rgba(255, 255, 255, 0.7)"
                          fontFamily="'Inter', 'DM Sans', sans-serif"
                          mb={4}
                          noOfLines={2}
                        >
                          {p.description}
                        </Text>

                        <Flex gap={3} mt="auto">
                          <Button
                            as="a"
                            href={p.site || '#'}
                            target={p.site ? '_blank' : undefined}
                            rel={p.site ? 'noreferrer' : undefined}
                            flex={1}
                            bg="rgba(176, 137, 104, 0.9)"
                            color="white"
                            _hover={{
                              bg: 'rgba(176, 137, 104, 1)',
                              transform: 'translateY(-2px)',
                            }}
                            borderRadius="full"
                            size="sm"
                            fontFamily="'Inter', 'DM Sans', sans-serif"
                            isDisabled={!p.site}
                          >
                            Visit Site
                          </Button>
                          <Button
                            as="a"
                            href={p.repo}
                            target="_blank"
                            rel="noreferrer"
                            flex={1}
                            bg="rgba(255, 255, 255, 0.1)"
                            color="white"
                            border="1px solid rgba(176, 137, 104, 0.3)"
                            _hover={{
                              bg: 'rgba(255, 255, 255, 0.15)',
                              transform: 'translateY(-2px)',
                            }}
                            borderRadius="full"
                            size="sm"
                            fontFamily="'Inter', 'DM Sans', sans-serif"
                          >
                            GitHub
                          </Button>
                        </Flex>
                      </div>
                    </div>
                  )
                })}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.dots}>
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              className={`${styles.dot} ${i === active ? styles.dotActive : ''}`}
              onClick={() => {
                setDisableTransition(false)
                setActive(i)
                setPaused(true)
                setTimeout(() => setPaused(false), 2000)
              }}
              type="button"
            />
          ))}
        </div>
      </div>
    </div>
  )
}
