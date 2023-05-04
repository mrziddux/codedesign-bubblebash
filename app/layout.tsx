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
    <html lang="en">
      <body className={`${openSans.className}`}>
        <div id='bg-overlay' className='-z-10 bg-primary md:h-[929px] h-[720px] absolute inset-x-0 top-0 w-screen'></div>
        <div className="max-w-5xl mx-auto px-6 lg:px-0">
          <Header />
        </div>
          {children}
        <div className="max-w-5xl mx-auto px-6 lg:px-0 py-16">
          <Footer />
        </div>
      </body>
    </html>
  )
}
