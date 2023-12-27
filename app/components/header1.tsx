import Link from 'next/link'
import React from 'react'
import { Github,Linkedin } from 'lucide-react';

import SocialLink from './SocialLink'

const socials =[
  {label:'Github',
  icon:Github,
  href:'https://github.com/fatmatrn'},
  {label:'LinkedIn',
  icon:Linkedin,
  href:'https://www.linkedin.com/in/fatmatrn'},
]

type Props = {}

const Header = (props: Props) => {
  return (
    <header className='flex items-center justify-end space-x-5 w-full max-w-3xl px-4 py-8 mx-auto'>

    <nav className='flex  items-center space-x-4'>
      <Link href='/'  className='font-medium'>About</Link>
      <Link href='/'  className='font-medium'>Blog</Link>
    </nav>
    <div className="flex items-center space-x-4  ">
            {socials.map((social)=>(
                <SocialLink key={social.label}
                icon={social.icon}
                href={social.href}/>
            ))}
        </div>
 
  </header>
  )
}

export default Header