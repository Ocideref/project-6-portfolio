import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from './components/Navbar/Navbar'
import {Providers} from "./providers";


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portafolio - Federico González',
  description: 'Generated with next app',
}

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
