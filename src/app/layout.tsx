import type { Metadata } from 'next'
import Providers from './Providers'
// Style
import '../styles/globals.css'
// Fonts
import { Fira_Code } from 'next/font/google'
import Body from '@/components/Atom/Body'
import Html from '@/components/Atom/Html'
const fira = Fira_Code({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-fira',
  preload: true,
  fallback: ['--font-fira']
})

export const metadata: Metadata = {
  title: {
    template: '%s | Rafael Diniz;',
    default: 'Rafael Diniz;',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Html >
      <Body font={fira} >
        <Providers>
          {children}
        </Providers>
      </Body>
    </Html>
  )
}
