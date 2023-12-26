import Link from 'next/link'
import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className='flex items-center justify-content w-full max-w-3xl px-4 py-8 mx-auto'>
    <nav className='flex items-center space-x-4'>
      <Link href='/'  className='font-medium'>About</Link>
      <Link href='/'  className='font-medium'>Blog</Link>
    </nav>
 
  </header>
  )
}

export default Header