"use client"
import React from 'react'
import { Icon } from '@iconify/react';
import Image from 'next/image';
import Card from './components/Card';
import CountUp from 'react-countup';


const Home = () => {
  return (
    <div className=''>
      <div className='flex  flex-col justify-center items-center md:flex-row md:justify-between my-16 md:gap-14 text-white md:my-16 p-8'>
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


          <div className='flex flex-col md:flex-row justify-start gap-8'>
            <button className='bg-yellow-400 px-8 py-3 rounded-lg text-black flex justify-center items-center gap-2'>Hire Me
              <Icon className='inline ' icon="ooui:next-ltr" />
            </button>
            <button className='px-8 border border-white py-3 rounded-lg flex justify-center items-center gap-2'>Download Resume
              <Icon className='inline ' icon="ooui:next-ltr" />
            </button>
          </div>
        </div>
        <div className='w-1/2 flex justify-center items-center py-2'>
          <Image src={'/joshua.png'} width={450} className='rounded-full justify-center' height={70} />
        </div>
        <div className='w-1/5  shadow-2xl flex flex-col space-y-8 justify-center items-center text-center py-2 mt-2 md:mt-0'>
          <div>
            <h1 className='text-yellow-400 text-5xl font-extrabold'><CountUp start={0} end={2} delay={1} duration={2} />+</h1>
            <h2>Year of Experience</h2>
          </div>
          <div className='border border-white m-2 '></div>
          <div>
            <h1 className='text-yellow-400 text-5xl font-extrabold'><CountUp start={0} end={10} duration={2} />+</h1>
            <h2>project completed</h2>
          </div>
          <div className='border border-white m-2 '></div>
          <div>
            <h1 className='text-yellow-400 text-5xl font-extrabold'><CountUp start={0} end={99} duration={2} />%</h1>
            <h2>client Satisfactions</h2>
          </div>
          <div className='border border-white m-2 '></div>
        </div>

      </div>
      <h1 className='px-12 text-2xl font-medium first-letter:uppercase py-8 text-center'>My Skills</h1>

      <div className='flex justify-start px-14 flex-col md:flex-row md:gap-12'>
        <div>
          <h1 className='md:px-12 text-lg md:text-2xl text-left font-semibold first-letter:uppercase mt-2'>Let’s Explore Popular </h1>
          <h1 className='md:px-14 text-lg md:text-2xl font-bold text-yellow-400 first-letter:uppercase '>Skills & Experience </h1>
          <p className='mt-6 py-6 text-center'>
            I have a bunch of skills in software development,<br />
            from coding to teamwork. <br />
            What makes me stand out is that I can learn new things pretty fast.<br />
            So, if there's a new skill needed, I'm on it, <br />
            making me quick and adaptable for any project.
          </p>
        </div>
        <div>
          <Card />
        </div>
      </div>
      <h1 className='md:text-left md:px-20 text-center mt-10 md:mt-0 text-2xl md:text-4xl md:py-8'>Get in  Touch</h1>
      <div className='flex flex-col md:flex-row md:justify-around  py-4'>
        <div className='py-8 mt-8 flex-col flex'>
          <h1 className='text-yellow-400 font-extrabold text-3xl text-center'>Let’s Talk For your </h1>
          <h1 className='font-bold text-white text-3xl text-center'>Next Projects </h1>
        </div>
        <div className='px-2'>
          <form className='border rounded-2xl md:px-8 md:py-8'>
            <div className='grid md:grid-cols-2 '>
            <div className='flex flex-col px-4 md:py-4'>
              <label className='flex  gap-1 first-letter:uppercase text-lg py-4'>firstname
                <Icon icon="bitcoin-icons:star-filled" color='yellow' width={10} />
              </label>

              <input placeholder='joshua' required type='text' className='py-3 text-black rounded-2xl border px-6' />
            </div>

            <div className='flex flex-col px-4 md:py-4'>
              <label className='flex  gap-1 first-letter:uppercase text-lg py-4'>lastname
                <Icon icon="bitcoin-icons:star-filled" color='yellow' width={10} />
              </label>

              <input placeholder='urasa' type='text' required className='py-3 text-black rounded-2xl border px-6' />
            </div>

            <div className='flex flex-col px-4 md:py-4'>
              <label className='flex  gap-1 first-letter:uppercase text-lg py-4'>email
                <Icon icon="bitcoin-icons:star-filled" color='yellow' width={10} />
              </label>

              <input placeholder='urasajoshuag@gmail.com' type='email' required className='py-3 rounded-2xl border px-6' />
            </div>
            <div className='flex flex-col px-4 md:py-4'>
              <label className='flex  gap-1 first-letter:uppercase text-lg py-4'>phone
                <Icon icon="bitcoin-icons:star-filled" color='yellow' width={10} />
              </label>

              <input placeholder='0779767577' type='text' className='py-3 text-black rounded-2xl border px-6' />
            </div>

            <div className='flex flex-col px-4 md:py-4'>
              <label className='flex  gap-1 first-letter:uppercase text-lg py-4 text-center'>subject
                <Icon icon="bitcoin-icons:star-filled" color='yellow' width={10} />
              </label>

              <textarea className='py03 px-6 rounded-2xl text-black' required>write your subject</textarea>
            </div>
            </div>
            <div className='flex justify-center items-center'>
              <button className='bg-yellow-400 text-black px-10   py-3 rounded-3xl m-4 md:m-0'>Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Home
