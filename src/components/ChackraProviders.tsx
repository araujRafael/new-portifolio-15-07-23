// app/providers.tsx
'use client'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { Fira_Code } from 'next/font/google'
const fira = Fira_Code({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-fira',
  preload: true,
  fallback: ['--font-fira']
})
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}
const fonts = {
  heading: 'var(--font-fira)',
  body: 'var(--font-fira)',
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
            --font-fira: ${fira.style.fontFamily};
          }
        `}
      </style>
      <CacheProvider>
        <ChakraProvider theme={theme} >
          <main className='--font-fira font-mono'>
            {children}
          </main>
        </ChakraProvider>
      </CacheProvider>
    </>
  )
}