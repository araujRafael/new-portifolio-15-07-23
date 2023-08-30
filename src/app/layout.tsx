import type { Metadata } from 'next'
import { ChackraProviders } from '@/components/ChackraProviders'
import { LayoutPage } from '@/components/Atom/LayoutPage'
import './globals.css'

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
    <html lang="en">

      <body className={`bg-black text-white --font-srcCode`}>
        <ChackraProviders>
          <LayoutPage>
            {children}
          </LayoutPage>
        </ChackraProviders>
      </body>
    </html>
  )
}
