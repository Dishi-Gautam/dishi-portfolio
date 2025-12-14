import React, { useEffect, useRef } from 'react'
import './App.css'
import { Box, Container, Heading, Text } from '@chakra-ui/react'
import SidebarNav from './components/SidebarNav'
import HeroNG from './components/HeroNG'
import AboutNG from './components/AboutNG'
import ExperienceNG from './components/ExperienceNG'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { initBlobParallax } from './utils/gsap'

export default function App() {
  const scrollRef = useRef(null)

  useEffect(() => {
    initBlobParallax(scrollRef.current)
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
          <Skills />
          
        </main>
         <Contact />
        <Footer />
      </Box>
    </div>
  )
}
