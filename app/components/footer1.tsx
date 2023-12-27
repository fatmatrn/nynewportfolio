import React from 'react'
import { Github,Linkedin } from 'lucide-react';
import SocialLink from './SocialLink';

const socials =[
    {label:'Github',
    icon:Github,
    href:'https://github.com/fatmatrn'},
    {label:'LinkedIn',
    icon:Linkedin,
    href:'https://www.linkedin.com/in/fatmatrn'},
]

const Footer = () => {
  return (
   
    <footer className='flex items-center justify-between max-w-xl mx-auto px-4 w-full  h-20'>
           <span className='text-sm text-slate-500'>©  {new Date().getFullYear()}  Fatma Turan</span>
        <div className="flex items-center space-x-4">
            {socials.map((social)=>(
                <SocialLink key={social.label}
                icon={social.icon}
                href={social.href}/>
            ))}
        </div>
    </footer>
  )
}

export default Footer