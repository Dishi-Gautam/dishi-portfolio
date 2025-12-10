// src/utils/gsap.js
// GSAP helpers with ScrollTrigger and prefers-reduced-motion handling
let gsapRef = null
let ScrollTriggerRef = null

export function registerGSAP() {
  if (typeof window === 'undefined') return
  if (gsapRef) return
  try {
    const { gsap } = require('gsap')
    const { ScrollTrigger } = require('gsap/ScrollTrigger')
    gsap.registerPlugin(ScrollTrigger)
    gsapRef = gsap
    ScrollTriggerRef = ScrollTrigger
  } catch {}
}

const prefersNoMotion = () =>
  typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches

export function reveal(target, opts = {}) {
  registerGSAP()
  if (!gsapRef || prefersNoMotion()) return
  gsapRef.from(target, {
    opacity: 0,
    y: 24,
    duration: 0.6,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: target,
      start: 'top 85%',
      toggleActions: 'play none none reverse',
    },
    ...opts,
  })
}

export function staggerReveal(targets, opts = {}) {
  registerGSAP()
  if (!gsapRef || prefersNoMotion()) return
  gsapRef.from(targets, {
    opacity: 0,
    y: 24,
    duration: 0.6,
    ease: 'power2.out',
    stagger: 0.12,
    scrollTrigger: {
      trigger: targets[0],
      start: 'top 85%',
    },
    ...opts,
  })
}

export function initBlobParallax(container) {
  registerGSAP()
  if (!gsapRef || prefersNoMotion()) return
  const blob = document.querySelector('#hero-blob')
  if (!blob) return
  gsapRef.to(blob, {
    y: 20,
    scale: 1.03,
    duration: 6,
    ease: 'sine.inOut',
    yoyo: true,
    repeat: -1,
  })
  ScrollTriggerRef.create({
    trigger: container || blob,
    start: 'top top',
    onUpdate: self => {
      const p = self.progress
      blob.style.transform += ` translateY(${p * 20}px)`
    },
  })
}

export function cardHoverEffect(el) {
  registerGSAP()
  if (!gsapRef) return
  const enter = () => gsapRef.to(el, { scale: 1.03, boxShadow: '0 12px 28px rgba(80,60,50,0.18)', duration: 0.2 })
  const leave = () => gsapRef.to(el, { scale: 1.0, boxShadow: '0 8px 24px rgba(80,60,50,0.15)', duration: 0.2 })
  return { enter, leave }
}
