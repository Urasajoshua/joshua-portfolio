"use client"
import React, { useEffect, useState } from 'react'
import { navItems } from '../constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Icon } from '@iconify/react';

const Navbar = () => {

  const [active, setActive] = useState('')
  const pathName = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  const handleHamburger = () => {
    setMenuOpen(!menuOpen)
  }

  useEffect(() => {
    setActive(pathName)
  }, [pathName])
  return (
    <div className='fixed w-full h-24 shadow-2xl bg-black top-0'>
      <div className='flex justify-between items-center h-full w-full px-4 '>
        <div></div>
        <div>
          <ul className='hidden sm:flex'>
            {navItems.map((item) => (
              <Link className={`${active === item.link ? "text-yellow-400 " : "text-white"} ml-10 first-letter:uppercase hover:border-b hover:border-yellow-400 text-xl `} href={item.link} key={item.link}>{item.name}</Link>
            ))}
          </ul>
        </div>
        <div>
          <div className='flex sm:hidden cursor-pointer pl-24' onClick={handleHamburger}>
            <Icon icon="ci:hamburger-lg" width={40} height={40} />
          </div>
        </div>
      </div>
      <div className={menuOpen ? 'fixed top-0 w-[65%] sm:hidden h-screen bg-white bg-opacity-100 p-10 ease-in duration-500' : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
        <div className='flex w-full items-center justify-end text-black'>
          <div onClick={handleHamburger}>
            <Icon icon="fluent-mdl2:cancel" width={30} height={30} color='black' />
          </div>

        </div>
        <div>
          <ul className='flex flex-col text-black py-4'>
            {navItems.map((item) => (
              <Link className='py-4 cursor-pointer' href={item.link} key={item.link} onClick={handleHamburger}>{item.name}</Link>
            ))}
          </ul>
        </div>
      </div>
    </div>

  )
}

export default Navbar