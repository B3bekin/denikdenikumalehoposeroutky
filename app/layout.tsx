import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from './component/navbar'
import Footer from './component/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wimpy Blog',
  description: 'Generated and create by Wimpy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <main className='max-w-screen-xl mx-auto px-4 shadow-2xl'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
