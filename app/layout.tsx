import './globals.css'
import { Open_Sans } from 'next/font/google'
import Header from './header'
import Footer from './footer'

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Bubble Bash',
  description: 'Slicing Design by Codedesign',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className='scroll-smooth' style={{ scrollBehavior: 'smooth' }} lang="en">
      <body className={`${openSans.className}`}>
        {children}
      </body>
    </html>
  )
}
