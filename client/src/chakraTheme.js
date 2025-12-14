// src/chakraTheme.js
import { extendTheme } from '@chakra-ui/react'
// Chakra theme created via extendTheme using specified palette
const overrides = {
  styles: {
    global: {
      ':root': {
        '--bg': '#e9d7c9',
        '--text': '#4a3b33',
        '--muted': '#7a5f52',
        '--window': '#f7efe7',
        '--border': '#d7c3b5',
        '--accent': '#b08968',
        '--btn-bg': '#efe3da',
      },
      'html, body, #root': {
        backgroundColor: 'var(--bg)',
        color: 'var(--text)',
        minHeight: '100%',
      },
    },
  },
  fonts: {
    heading: 'Inter, system-ui, sans-serif',
    body: 'Inter, system-ui, sans-serif',
  },
  colors: {
    brand: {
      50: '#fbf6f2',
      100: '#f7efe7',
      200: '#efe3da',
      300: '#e9d7c9',
      400: '#d7c3b5',
      500: '#b08968',
      600: '#7a5f52',
      700: '#634c43',
      800: '#4a3b33',
      900: '#3b2f29',
    },
  },
  radii: {
    md: '12px',
    lg: '16px',
  },
  components: {
    Button: {
      baseStyle: { 
        borderRadius: '12px',
        backdropFilter: 'blur(12px) saturate(150%)',
        WebkitBackdropFilter: 'blur(12px) saturate(150%)',
        border: '1px solid rgba(176, 137, 104, 0.25)',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease',
      },
      variants: {
        solid: { 
          bg: 'rgba(233, 215, 201, 0.7)', 
          color: 'brand.800', 
          _hover: { 
            bg: 'rgba(247, 239, 231, 0.85)',
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 16px rgba(0, 0, 0, 0.15)',
          } 
        },
        outline: { 
          bg: 'rgba(255, 255, 255, 0.3)',
          borderColor: 'brand.400', 
          color: 'brand.800', 
          _hover: { 
            bg: 'rgba(247, 239, 231, 0.7)',
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 16px rgba(0, 0, 0, 0.15)',
          } 
        },
      },
    },
    Container: { baseStyle: { maxW: '1000px', px: 6 } },
    Heading: { baseStyle: { fontWeight: 800, letterSpacing: '-0.02em' } },
  },
}

const theme = extendTheme(overrides)
export default theme