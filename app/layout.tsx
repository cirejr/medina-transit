import type { Metadata } from 'next'
import './globals.css'
import { Inter as FontSans } from 'next/font/google'
import { cn } from '@/lib/utils'
import { Providers } from '@/providers/providers'
import { GridSmallBackground } from '@/components/global/grid-background'
import Footer from '@/components/global/footer'
import GlobalNavbar from '@/components/global/navbar-menu'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Medina Transit',
  description: 'Meilleur Compagnie de Transit',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <Providers>
          <GlobalNavbar />
          <GridSmallBackground>{children}</GridSmallBackground>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
