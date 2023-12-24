import { Inter } from 'next/font/google'
import './globals.css'
import { raleway } from './lib/font'
import { sharedMetaData } from '../shared-metadata';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  ...sharedMetaData
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${raleway.className} flex min-h-screen flex-col flex-1`}>
        <div className='background'>
          <div className='gradient-blur'></div>
        </div>
        {children}
      </body>
    </html>
  );
};