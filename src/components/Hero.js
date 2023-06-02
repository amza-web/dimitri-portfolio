import React from 'react'
import {AiFillTwitterCircle, AiFillGithub, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai'
import Image from 'next/image'

import heroImg from '../../public/dev-ed-wave.png' 

const Hero = () => {
  return (
    <>
    <div className=' text-center'>
        <h2 className=" text-teal-600 text-5xl font-medium py-2">Dimitri Marco</h2>
        <h3  className='text-2xl py-2'>Developer and Designer</h3>
        <p className="text-md px-10 py-5 leading-8 text-gray-800">
            I'm a developer and designer based in the Philippines. I specialize in building websites, applications, and everything in between.
        </p>
    </div>
    <div className=' text-5xl flex justify-center gap-6 text-gray-600'>
      <AiFillTwitterCircle />
      <AiFillGithub />
      <AiFillLinkedin />
      <AiFillYoutube />
    </div>
    <Image src={heroImg} />
    </>
  )
}

export default Hero