import type { Metadata } from 'next'
import Providers from './Providers'
// Style
import '../styles/globals.css'
// Fonts
import { Fira_Code } from 'next/font/google'
import Body from '@/components/Atom/Body'
import { headers } from 'next/headers'
const fira = Fira_Code({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-fira',
  preload: true,
  fallback: ['--font-fira']
})

export const generateMetadata = (): Metadata => {

  return {
    title: {
      template: `%s | Rafael Diniz;`,
      default: `CodeArea | Portifolio;`,
    }
  }
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
