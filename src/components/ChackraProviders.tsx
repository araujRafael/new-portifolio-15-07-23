// app/providers.tsx
'use client'
import { themeConfigChackraUi } from '@/styles/ThemeConfigChackraUi'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, Stack } from '@chakra-ui/react'

export function ChackraProviders({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <CacheProvider>
        <ChakraProvider theme={themeConfigChackraUi} >
          <Stack w={'full'} minH={'full'} h={'full'} fontFamily={'body'}
            gap={0}>
            {children}
          </Stack>
        </ChakraProvider>
      </CacheProvider>
    </>
  )
}