import React from 'react'
import {AiFillTwitterCircle, AiFillGithub, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai'
import Image from 'next/image'

import heroImg from '../../public/dev-ed-wave.png' 

const Hero = () => {
  return (
    <section className='pb-5 ctn-mx dark:bg-gray-900'>
    <div className=' text-center'>
        <h2 className=" text-teal-600 text-5xl font-medium py-2">Dimitri Marco</h2>
        <h3  className='text-2xl py-2 dark:text-white'>Developer and Designer</h3>
        <p className="px-10 py-5 mx-auto max-w-2xl">
            Freelancer providing services for programming and design content needs. Join me down below and lets start cracking!
        </p>
    </div>
    <div className=' text-5xl flex justify-center gap-6 text-gray-600 dark:text-gray-400'>
      <AiFillTwitterCircle />
      <AiFillGithub />
      <AiFillLinkedin />
      <AiFillYoutube />
    </div>
    <div className="mt-20 relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mx-auto overflow-hidden" >
      <Image 
        className="object-cover"
        src={heroImg} 
        fill alt='Hero Image'
        placeholder='blur'
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
    </div>
    </section>
  )
}

export default Hero