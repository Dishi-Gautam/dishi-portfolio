// src/components/Projects.jsx
// Project cards with hover effect; GSAP cardHoverEffect on mouse events
import React, { useEffect, useRef } from 'react'
import styles from './Projects.module.css'
import { Box, Text, Button, Heading } from '@chakra-ui/react'
import ScrollHeading from './ScrollHeading'
import { projects } from '../data'
import { staggerReveal } from '../utils/gsap'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Projects() {
  const ref = useRef(null)
  useEffect(() => {
    if (!ref.current) return
    const items = ref.current.querySelectorAll('.proj-card')
    if (items.length) staggerReveal(items)

    const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    items.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 24, filter: 'blur(4px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.75,
          ease: 'power2.out',
          delay: i * 0.06,
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            end: 'bottom 20%',
            toggleActions: 'play reverse play reverse',
          },
        }
      )
    })
  }, [])

  return (
    <div className={styles.wrap}>
      <div className="container" ref={ref}>
        <Box mb={4}><ScrollHeading text="Projects" /></Box>
        <div className={styles.grid}>
          {projects.map((p, idx) => (
            <div key={idx} className={`${styles.flipWrap} proj-card`}>
              <div className={styles.flip}>
                {/* Front: project info + stack */}
                <div className={`${styles.face} ${styles.front}`}>
                  <div className={styles.cardHeader}>
                    <span className={styles.rule} />
                    <span className={styles.index}>{String(idx + 1).padStart(2, '0')}</span>
                  </div>
                  <Heading as="h3" className={styles.title}>{p.title}</Heading>
                  <Text className={styles.body}>{p.description}</Text>
                  {p.tech?.length ? (
                    <div className={styles.stackRow}>
                      {p.tech.map((t, i) => (
                        <span key={i} className={styles.stackBadge}>{t}</span>
                      ))}
                    </div>
                  ) : null}
                </div>

                {/* Back: actions with blurred background */}
                <div className={`${styles.face} ${styles.back}`}>
                  <div className={styles.backInner}>
                    <Button as="a" href={p.site || '#'} target={p.site ? '_blank' : undefined} rel={p.site ? 'noreferrer' : undefined} className={styles.link} aria-label={`${p.title} Live Site`} isDisabled={!p.site}>Visit Site ↗</Button>
                    <Button as="a" href={p.repo} target="_blank" rel="noreferrer" className={styles.link} aria-label={`${p.title} GitHub`}>GitHub</Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
