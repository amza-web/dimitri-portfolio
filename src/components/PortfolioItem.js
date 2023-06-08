import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const PortfolioItem = ({item}) => {
  return (
    <li  className='relative bg-slate-900 w-full bg-opacity-40 ' >
        <Link className='group block h-full' href={`/portfolio/${item.title}`}>
            <picture className='z-0 h-full block'>
            <Image 
            className='h-full'
            alt='Image 1' 
            src={item.image} 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            </picture>
            
            <div className='w-full h-full bg-gradient-to-br from-transparent to-95% to-slate-700 bg-opacity-30 pointer-events-none absolute top-0   lg:opacity-0 group-hover:opacity-100 transition-opacity duration-200'>
                
            </div>
            <div className="z-10 absolute text-right bottom-0 right-0 p-10 text-white        lg:opacity-0 lg:translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <h4 className='text-2xl font-medium'>{item.title}</h4>
                <p className='text-slate-200 pl-14'>{item.description}</p>
            </div>
            
        </Link>
    </li>
  )
}

export default PortfolioItem