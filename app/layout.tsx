import type { Metadata } from 'next'
import './globals.css'
import { raleway } from './lib/font'
import Header from './components/header1'
import Footer from './components/footer1'
import { sharedMetaData } from './../shared-metadata';


export const metadata = {
  ...sharedMetaData
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${raleway.className} flex min-h-screen flex-col flex-1`}>
        <Header/>
      <div className='background'>
          <div className='gradient-blur'></div>
        </div>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
