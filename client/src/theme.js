import { extendTheme } from '@chakra-ui/react'

const colors = {
  brand: {
    bg: '#e9d7c9',
    text: '#4a3b33',
    muted: '#7a5f52',
    window: '#f7efe7',
    border: '#d7c3b5',
    accent: '#b08968',
    btnBg: '#efe3da',
  },
}

const theme = extendTheme({
  colors,
  styles: {
    global: {
      body: {
        bg: 'brand.window',
        color: 'brand.text',
      },
      '::selection': {
        bg: 'brand.accent',
        color: 'white',
      },
    },
  },
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'normal',
        borderRadius: 'md',
      },
      variants: {
        solid: {
          bg: 'brand.btnBg',
          color: 'brand.text',
          _hover: {
            bg: 'brand.border',
          },
        },
        outline: {
          borderColor: 'brand.border',
          color: 'brand.text',
          _hover: {
            bg: 'brand.window',
          },
        },
      },
    },
  },
})

export default theme

