import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavMenu from './NavMenu'
import Authprovider from './AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MySpace',
  description: 'Myspace Clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Authprovider>
    <html lang="en">
      <body className={inter.className}>
        <NavMenu />
        {children}
      </body>
    </html>
    </Authprovider>
  )
}
