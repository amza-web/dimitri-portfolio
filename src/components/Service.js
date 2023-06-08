import React from 'react'
import Image from 'next/image'



const Service = ({service}) => {
  return (
    <div className='card md:basis-1/3 md:grow '>
        <Image width={100} src={service.img} alt={`${service.title} Image`}/>
        <h3 className='text-2xl'>{service.title}</h3>
        <p>{service.desc}</p>
        <div>
          <h4 className='text-xl'>Design tools I use</h4>
          <ul className=' flex-wrap service-item text-teal-700 flex gap-2'>
            {service.tools.map((tool, i) => {
              return <li key={i}>{tool}</li>
            })
              
            }
          </ul>
        </div>
    </div>
  )
}

export default Service