import React from 'react'
import {LucideIcon}  from 'lucide-react'

type Props = {
    className?:string;
    icon:LucideIcon;
    href:string
}

const SocialLink = (props: Props) => {
  return (
   <a href={props.href} className={props.className} target='_blank'
   rel='noopener noreferrer'>
    <props.icon className='w-5 h-5 hover:scale-110 transaiion-transform'/>
   </a>
  )
}

export default SocialLink