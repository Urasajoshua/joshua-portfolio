"use client"
import React from 'react'
import { Icon } from '@iconify/react';
import Image from 'next/image';
import Card from './components/Card';

const Home = () => {
  return (
    <div className=''>
      <div className='flex  flex-col md:flex-row md:justify-between md:gap-14 text-white md:my-16 p-8'>
        <div className='flex flex-col text-start'>
          <h1 className='first-letter:uppercase text-2xl py-2'>hello, i`m</h1>
          <h1 className='text-yellow-400 text-4xl font-semibold font-serif py-2'>Joshua Urasa</h1>
          <h1 className='text-3xl py-2 font-extrabold'>Software Developer</h1>
          <p className='py-8 text-pretty text-base'>
            As a software developer, I'm all about solving problems<br />
            and creating smart solutions.
            I love learning new things and keeping up with the latest in tech. <br />
            I pay close attention to details, making sure my code is clean and efficient.<br />
            Teamwork is my thing—I enjoy working with others and bringing ideas to the table.<br />
            I'm good at fixing tricky technical issues,<br />
            and I'm always curious to explore new technologies.<br />
            I take pride in my work, and my goal is to deliver results that make users happy.

          </p>


          <div className='flex justify-start gap-8'>
            <button className='bg-yellow-400 px-8 py-3 rounded-lg text-black flex justify-center items-center gap-2'>Hire Me
              <Icon className='inline ' icon="ooui:next-ltr" />
            </button>
            <button className='px-8 border border-white py-3 rounded-lg flex justify-center items-center gap-2'>Download Resume
            <Icon className='inline ' icon="ooui:next-ltr" />
            </button>
          </div>
        </div>
        <div className='w-1/2'>
          <Image src={'/joshua.png'} width={450} className='rounded-full' height={70}/>
        </div>
        <div className='w-1/5  shadow-2xl flex flex-col space-y-8 justify-center items-center text-center'>
          <div>
            <h1 className='text-yellow-400 text-5xl font-extrabold'>2+</h1>
            <h2>Year of Experience</h2>
          </div>
          <div className='border border-white m-2 '></div>
          <div>
            <h1 className='text-yellow-400 text-5xl font-extrabold'>10+</h1>
            <h2>project completed</h2>
          </div>
          <div className='border border-white m-2 '></div>
          <div>
            <h1 className='text-yellow-400 text-5xl font-extrabold'>99%</h1>
            <h2>client Satisfactions</h2>
          </div>
          <div className='border border-white m-2 '></div>
        </div>

      </div>
      <h1 className='px-12 text-lg font-medium first-letter:uppercase py-4'>My Skills</h1>
     
      <div className='flex justify-start px-14 flex-col md:flex-row md:gap-12'>
        <div>
        <h1 className='px-12 text-2xl font-semibold first-letter:uppercase mt-2'>Let’s Explore Popular </h1>
      <h1 className='px-14 text-2xl font-bold text-yellow-400 first-letter:uppercase '>Skills & Experience </h1>
      <p className='mt-6 py-6'>
      I have a bunch of skills in software development,<br/>
       from coding to teamwork. <br/>
       What makes me stand out is that I can learn new things pretty fast.<br/>
        So, if there's a new skill needed, I'm on it, <br/>
        making me quick and adaptable for any project.
      </p>
        </div>
        <div>
          <Card/>
        </div>
      </div>
    </div>
  )
}

export default Home
