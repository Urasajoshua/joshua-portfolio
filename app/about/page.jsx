"use client"
import Image from 'next/image'
import React from 'react'
import { Icon } from '@iconify/react';


const About = () => {
    return (
        <div className='bg-opacity-70'>
            <h1 className='text-center md:text-start text-4xl font-medium p-4'>About Me</h1>
            <div className='flex flex-col md:flex-row px-4 md:px-2 md:justify-around' >
                <div className='flex flex-col space-y-4  py-8 md:w-1/2'>
                    <h1 className='text-3xl  md:text-4xl'>
                        Professional <span className='text-yellow-400 font-extrabold '>Problem Solutions</span> For Digital Products
                    </h1>
                    <p className='py-8 text-base font-light '>
                        Hello there! I'm a software developer passionate about turning challenges into clever solutions. I have a knack for writing clean and efficient code, always paying attention to the little details. Teamwork is key to me, and I thrive on collaborating with others to bring ideas to life. I enjoy staying on top of the latest tech trends and love learning new things. Fixing technical puzzles is my forte, and I'm all about making users happy with the results. Thanks for stopping by, and feel free to reach out if you want to chat tech or collaborate on something awesome!
                    </p>
                    <div className='grid md:grid-cols-2'>
                        <div>
                            <div className='flex md:justify-center md:items-center gap-2 text-start'>
                            <Icon icon="mdi:tick" color='yellow' className='inline' width={40} height={40} />
                                <h1>Web Development</h1>
                            </div>
                        </div>

                       <div>
                            <div className='flex md:justify-center md:items-center gap-2'>
                            <Icon icon="mdi:tick" color='yellow' className='inline' width={40} height={40} />
                                <h1>Mobile App Development</h1>
                            </div>
                        </div>

                        <div>
                            <div className='flex md:justify-center md:items-center gap-2'>
                            <Icon icon="mdi:tick" color='yellow' className='inline' width={40} height={40} />
                                <h1>Product Design</h1>
                            </div>
                        </div>


                       <div>
                            <div className='flex md:justify-center md:items-center gap-2'>
                            <Icon icon="mdi:tick" color='yellow' className='inline' width={40} height={40} />
                                <h1>Web & Mobile app Design</h1>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row md:justify-around border shadow-md shadow-white md:space-x-8 bg-gray-900  py-6 space-y-4 md:space-y-0 md:px-12 rounded-2xl md:mx-8'>
                        <div className='flex gap-2 md:justify-between items-center px-2 md:px-0'>
                            <div className='px-4 py-4 rounded-full bg-yellow-400'>
                            <Icon icon="fontisto:email" color='black' />
                            </div>
                            <div>
                                <h1 className='text-gray-300'>Email</h1>
                                <p className='text-white font-bold md:text-xl'>urasajoshuag@gmail.com</p>
                            </div>
                        </div>
                        <div className='flex md:justify-between px-2 md:px-0 gap-2 items-center'>
                        <div className='px-4 py-4 rounded-full bg-yellow-400'>
                            <Icon icon="fontisto:email" color='black' />
                            </div>
                            <div>
                                <h1 className='text-gray-300'>Make A Call</h1>
                                <p className='text-white font-bold md:text-xl'>+255779764577</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='md:w-1/2 px-14'>
                    <Image src={'/gamer.png'} width={450} height={80} className='rounded-full' />
                </div>
            </div>
        </div>
    )
}

export default About