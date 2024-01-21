'use client'
import React, { useEffect, useState } from 'react'
import { navItems } from '../constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Icon } from '@iconify/react';

const Navbar = () => {

    const [active,setActive] = useState('')
    const pathName = usePathname()

    useEffect(()=>{
        setActive(pathName)
    },[pathName])
  return (
    <div className='flex justify-between text-white py-10 bg-black'>
      <div></div>
      <div>
        <ul>
            {navItems.map((item)=>(
                <Link key={item.link} className={`mr-12 ${active === item.link ? "text-yellow-300 underline": ""}`} href={item.link}>
                    {item.name} 
                </Link>
            ))}
        </ul>
      </div>
      <div className='flex gap-2 space-x-4 pr-8'>
        <h2 className='py-3 text-xl'>let`s Talk</h2>
        <Icon icon="icon-park-outline:message" color='yellow' height={50} />
      </div>
    </div>
  )
}

export default Navbar
