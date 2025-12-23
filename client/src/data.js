
export const socials = [
  { label: 'GitHub', url: 'https://github.com/Dishi-Gautam' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/dishi02/' }
]

// Skills used by Skills.jsx
export const skills = {
  'Languages': [
    { name: 'C' },
    { name: 'C++' },
    { name: 'Python' },
    { name: 'JavaScript' },
  ],
  'Frontend': [
    { name: 'HTML' },
    { name: 'CSS' },
    { name: 'React' },
    { name: 'Tailwind CSS' },
  ],
  'Backend': [
    { name: 'Node.js' },
    { name: 'Express.js' },
  ],
  'Databases': [
    { name: 'MongoDB' },
    { name: 'MySQL' },
    { name: 'PostgreSQL' },
  ],
  'Tools': [
    { name: 'Git' },
    { name: 'GitHub' },
    { name: 'VS Code' },
    { name: 'Postman' },
  ],
}

export const projects = [
  {
    title: 'Harvesta',
    description: 'Smart agriculture platform for data-driven crop management.',
    tech: ['React', 'Node.js', 'MongoDB'],
    repo: 'https://github.com/yjhkdjsg/Harvesta'    ,
    image:'../../public/images/harvesta.png',
  },
  {
    title: 'CyberGuard',
    description: 'Cybersecurity monitoring platform for campus networks. Features tamper-proof logging, real-time threat detection, AI-powered attack classification, and honeypot deception.',
    tech: ['React.js', 'Node.js', 'Flask', 'MongoDB', 'Socket.IO', 'Machine Learning'],
    repo: 'https://github.com/Dishi-Gautam',
    comingSoon: true,
  },
  {
    title: 'DevSpace',
    description: 'Developer workspace utilities for workflow polish and productivity.',
    tech: ['React', 'MUI', 'Python'],
    repo: 'https://github.com/Dishi-Gautam',
    comingSoon: true,
  },
  {
    title: 'Samaaj',
    description: 'Civic issue reporting platform bridging citizens and solutions. Users report local problems with photos and locations, while moderators respond in real-time.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Bootstrap'],
    repo: 'https://github.com/yash2607-del/Samaaj',
    site: 'https://samaaj-xi.vercel.app/',
    image: '../../public/images/pic1.png',
  },
  {
    title: 'NextHire',
    description: 'AI-powered recruitment platform streamlining hiring with automated resume screening, candidate matching, interview scheduling, and performance analytics.',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'OpenAI', 'Tailwind CSS'],
    repo: 'https://github.com/yash2607-del/NextHire',
    site: '',
    comingSoon: true,
    image: 'https://via.placeholder.com/1200x700?text=NextHire',
  },
  {
    title: 'Portfolio',
    description: 'Personal portfolio with smooth scroll animations, GSAP-driven reveals, and Chakra-themed UI.',
    tech: ['React', 'Chakra UI', 'GSAP', 'Vite'],
    repo: 'https://github.com/Dishi-Gautam/dishi-portfolio',
    site: '',
    image:'../../public/images/portfolio.png',
  },
]

export const experience = [
  {
    role: 'Intern',
    org: 'Girikon',
    period: 'June 2025 – July 2025',
    summary: 'Contributed to web features and UI polish in a collaborative environment.',
  },
  {
    role: 'Hackathon Participant',
    org: 'University & Community Events',
    period: '2024 – 2025',
    summary: 'Built prototypes focused on usability, animations, and performance.',
  },
]