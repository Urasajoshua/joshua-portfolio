import React from 'react'
import { skills } from '../constants'
import Image from 'next/image'

const Card = () => {
    return (
        <div className=' grid grid-cols-5 '>
            {skills.map((item) => (
                <div className=' p-2 m-2 space-y-3 border rounded-3xl py-2 mt-2 items-center flex flex-col justify-center'>
                    <Image key={item.name} src={item.image} width={70} height={70} className='object-cover mt-2' />
                    <p className='text-center'>{item.name}</p>
                    <p className='px-6 bg-gray-900 text-center rounded-2xl py-3'>{item.percent}%</p>
                </div>

            ))}
        </div>
    )
}

export default Card