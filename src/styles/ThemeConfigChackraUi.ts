import { defineStyleConfig, extendTheme } from '@chakra-ui/react'

const Container = defineStyleConfig({
  baseStyle:{
    width:'100%',
    maxWidth:'920px',
  }
})
const Link = defineStyleConfig({
  baseStyle:{
    _active:{
      textDecoration:'none',
    },
    _hover:{
      textDecoration:'none',
    }

  },
  variants:{
    outline:{
      textDecoration:'none',
      borderWidth:'1px',
      borderColor:'black',
      px:'8',
      py:'1',
      rounded:'md',
    }
  }
})
const Button = defineStyleConfig({
  baseStyle:{
    width:'100%',
  },
  variants:{
    outline:{
      color:'white',
      _hover:{
        color:'black',
      }
    },
    solid:{
      background:'white !important',
      color:'black',
      _hover:{
        background:'whiteAlpha.500 !important',
        color:'black',
      }
    }
  }
})

const themeConfig = {
  components:{
    Container,
    Link,
    Button
  },
  colors: {
    primary: {
      900: `var(--primary-900)`,
      700: `var(--primary-700)`,
    },
    secondary: {
      900: `var(--secondary-900)`,
      700: `var(--secondary-700)`,
    },
  },
  fonts : {
    heading: `var(--font-fira)`,
    body: `var(--font-fira)`,
  }
}

export const themeConfigChackraUi = extendTheme(themeConfig)