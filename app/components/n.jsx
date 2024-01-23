"use client"
import React, { useEffect, useState } from 'react'
import { navItems } from '../constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Icon } from '@iconify/react';

const Navbar = () => {

  const [active ,setActive ] = useState('')
  const pathName = usePathname()

  useEffect(()=>{
    setActive(pathName)
  },[pathName])
  return (
    <div className='fixed w-full h-24 shadow-2xl bg-black top-0'>
      <div className='flex justify-between items-center h-full w-full px-4 '>
        <div>1</div>
        <div>
          <ul className='hidden sm:flex'>
            {navItems.map((item)=>(
              <Link className={`${active === item.link ? "text-yellow-400 ": "text-white"} ml-10 first-letter:uppercase hover:border-b hover:border-yellow-400 text-xl `}  href={item.link} key={item.link}>{item.name}</Link>
            ))}
          </ul>
        </div>
        <div>3</div>
      </div>
    </div>
  )
}

export default Navbar