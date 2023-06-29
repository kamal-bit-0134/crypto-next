import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Details Section',
  description: 'Generated by create next app',
  icons: {
    icon: '/icon.ico',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
        {children}
        </body>
    </html>
  )
}