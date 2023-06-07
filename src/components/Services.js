import React from 'react'
import Service from './Service'
import Design from '../../public/design.png'
import Code from '../../public/code.png'
import Consulting from '../../public/consulting.png'

const Services = () => {
  const services = [
    {
      title: 'Beautiful UI/UX Designs',
      img: Design,
      desc: "Creating elegant designs suitable for your needs following core design theory.",
      tools: ['Figma', 'Photoshop', 'Illustrator']
    },
    {
      title: 'Web Development',
      img: Code,
      desc: "Expert web development for responsive and interactive websites. Full-stack proficiency.",
      tools: ['VS Code', 'React', 'NextJs']
    },
    {
      title: 'Consulting',
      img: Consulting,
      desc: "Expert advice and guidance to optimize your business strategy and operations.",
      tools: ['Google Analytics', 'Trello', 'Zoom']
    },
  ]
  return (
    <section className='ctn-mx'>
        <div className='max-w-4xl text-center mx-auto mb-10'>
            <h3 className='text-3xl py-1 font-medium'>Services I offer</h3>
            <p className=''>Since the beginning of my journey as a freelance designer and developer, I have done remote work for <span className='text-teal-500'>agencies</span>, consulted for <span className='text-teal-500'>startups</span> and collaborated with talented people to create digital products for both business and consumer use. </p>
            <p>
                I offer a wide variety of services, including brand design, programming and teaching. <br/>Interested in working together? <span className='text-teal-500'>Get in touch</span>
            </p>
        </div>
        <div className='flex flex-col gap-4 md:flex-row md:flex-wrap md:justify-center lg:flex-row '>
          {
            services.map((service, index) =>{
              return <Service key={index} service={service} />
            })
          }
        </div>
    </section>
  )
}

export default Services