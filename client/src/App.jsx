import React, { useEffect, useRef } from 'react'
import './App.css'
import { Box, Container, Heading, Text } from '@chakra-ui/react'
import SidebarNav from './components/SidebarNav'
import HeroNG from './components/HeroNG'
import AboutNG from './components/AboutNG'
import ExperienceNG from './components/ExperienceNG'
import Projects from './components/Projects'
import SkillsSimple from './components/SkillsSimple'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollName from './components/ScrollName'
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
          <SkillsSimple />
         
          <ScrollName />
          {/* Contact placeholder removed; scroll-fill callout appears before footer */}
        </main>
         <Contact />
        <Footer />
      </Box>
    </div>
  )
}
