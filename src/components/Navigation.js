import React from 'react'
import { BsFillMoonStarsFill } from 'react-icons/bs'


const Navigation = () => {
  return (
    <section className='bg-white'>
        <nav className=' p-10 px-4 flex justify-between'>
          <h1 className='text-xl font-burtons'>developedbyamza</h1>
          <ul className='flex items-center gap-8'>
            <li>
              <BsFillMoonStarsFill className='cursor-pointer text-xl'/>
            </li>
            <li><a
             className='bg-gradient-to-r from-cyan-500 to-teal-500 transition-all duration-1000 text-white px-4 py-2 rounded-md'
             href="#">Resume</a></li>
             

          </ul>
        </nav>
      </section>
  )
}
export default Navigation;
