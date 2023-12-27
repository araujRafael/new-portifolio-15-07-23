import type { Metadata } from 'next'
import Providers from './Providers'
// Style
import '../styles/globals.css'
// Fonts
import { Fira_Code } from 'next/font/google'
import Body from '@/components/Atom/Body'
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
    <html lang='en-US' >
      <Body font={fira} >
        <Providers>
          {children}
        </Providers>
      </Body>
    </html>
  )
}
