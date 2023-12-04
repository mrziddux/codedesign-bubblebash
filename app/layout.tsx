import './globals.css'
import { Open_Sans } from 'next/font/google'
import Header from './header'
import Footer from './footer'
import { Metadata } from 'next'

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Stack Nation',
  description: 'Terobos Batas Kreativitas dengan Tim Ahli Kami untuk Merancang dan Mengembangkan Web & Aplikasi yang Membuat Anda Tersenyum Puas!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className='scroll-smooth' style={{ scrollBehavior: 'smooth' }} lang="en">
      <head>
        <link rel="icon" href="/logo.svg" sizes="any" />
        <link rel="favicon" href="/logo.svg" sizes="any" />
        <link rel="apple-icon" href="/logo.svg" sizes="any" />
      </head>
      <body className={`${openSans.className}`}>
        {children}
      </body>
    </html>
  )
}
