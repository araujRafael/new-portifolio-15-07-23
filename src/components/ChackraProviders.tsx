// app/providers.tsx
'use client'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { Source_Code_Pro } from 'next/font/google'

const srcCode = Source_Code_Pro({ subsets: ['latin-ext'] })
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}
const fonts = {
  heading: 'var(--font-srcCode)',
  body: 'var(--font-srcCode)',
}

const theme = extendTheme({ colors, fonts })
export function ChackraProviders({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-srcCode: ${srcCode.style.fontFamily};
          }
        `}
      </style>
      <CacheProvider>
        <ChakraProvider theme={theme} >
          <main>
            {children}
          </main>
        </ChakraProvider>
      </CacheProvider>
    </>
  )
}