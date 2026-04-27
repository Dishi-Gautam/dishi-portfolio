import React, { useEffect, useRef } from 'react'
import './App.css'
import { Box, Container, Heading, Text } from '@chakra-ui/react'
import SidebarNav from './components/SidebarNav'
import HeroNG from './components/HeroNG'
import AboutNG from './components/AboutNG'
import ExperienceNG from './components/ExperienceNG'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { initBlobParallax } from './utils/gsap'
import Lenis from 'lenis'

export default function App() {
  const scrollRef = useRef(null)

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    initBlobParallax(scrollRef.current)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div ref={scrollRef} id="app-scroll-container">
      <SidebarNav />
      <Box>
        <main>
          <HeroNG />
          <AboutNG />
          <ExperienceNG />
          <Projects />
          <Achievements />
          <Skills />
          
        </main>
         <Contact />
        <Footer />
      </Box>
    </div>
  )
}
