import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import web1 from '@/../public/web1.png'
import web2 from '@/../public/web2.png'
import web3 from '@/../public/web3.png'
import web4 from '@/../public/web4.png'
import web5 from '@/../public/web5.png'
import web6 from '@/../public/web6.png'
import PortfolioItem from './PortfolioItem'


const Portfolio = () => {
  const portfolioItems = [
    {
      title: 'Nike Air',
      description: 'A website showcasing Nike Air shoes',
      image: web1,
    },
    {
      title: 'Ofsp_ce ',
      description: 'A website for a business selling nail hygiene products',
      image: web2,
    },
    {
      title: "Dropnow",
      description: "A SAAS website for creating onscreen guides for clients",
      image: web3,
    },
    {
      title: "Gardy",
      description: "A website for a business selling flower bouquets",
      image: web4,
    },
    {
      title: "Aimm",
      description: "The new UI design system powering the world best experiences",
      image: web5,
    },

  ]
  
  return (
    <section className='ctn-mx'>
        <div className='max-w-4xl text-center mx-auto'>
            <h3 className='text-3xl py-1 font-medium'>Portfolio</h3>
            <p>Throughout my career as a freelance designer and developer, I have had the privilege of working on a diverse range of projects. From collaborating with established agencies to partnering with startups, I have created impactful digital solutions for businesses and individuals.</p>

            <p>
                My portfolio showcases a wide array of work, including brand design, web development, and interactive experiences. Each project represents my passion for crafting visually stunning and user-friendly digital products.<br/>
                Curious to see my work? Explore my <spam className="text-teal-500">portfolio</spam> and get inspired.
            </p>
        </div>
        <div>
          <ul className='list-none grid grid-cols-1 gap-4 md:grid-cols-2 mt-10 lg:grid-cols-3'>
            {
              portfolioItems.map((item, index) => {
                return (
                  <PortfolioItem key={index} item={item} />
                )
              })
            }
          </ul>
        </div>
    </section>
  )
}

export default Portfolio