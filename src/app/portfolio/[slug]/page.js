import Navigation from '@/components/Navigation'
import Image from 'next/image'
import web1 from '@/../public/web1.png'
import web2 from '@/../public/web2.png'
import web3 from '@/../public/web3.png'
import web4 from '@/../public/web4.png'
import web5 from '@/../public/web5.png'
import Footer from '@/components/Footer'

export async function generateMetadata({ params }) {
    const slug = decodeURIComponent(params.slug)

    return {
        title: `Portfolio | ${slug}`,
    }
}

export default function PortfolioItemPage ({params}) {
    const slug = decodeURIComponent(params.slug)
    const portfolioItems = [
        {
          title: 'Nike Air',
          description: "I had the opportunity to work on an exciting project where I created a captivating website showcasing the iconic Nike Air shoes. The goal was to create an immersive and visually experience that highlights the unique features and design of Nike Air footwear.",
          image: web1,
          features: [
            'Stunning Visuals',
            "Interactive Product Gallery",
            "Seamless User Experience",
            "Social Integration",
            "Contact and Inquiry Form",
          ],
          conclusion: "Overall, this project provided me with an excellent opportunity to combine my passion for web design and my admiration for the Nike brand. Through careful attention to detail and a focus on creating an immersive experience, the website effectively showcases the iconic Nike Air shoes, captivating shoe enthusiasts and potential customers alike.",
          conclusion2: <p>Feel free to explore the <a className='link' href="#">live website</a> to witness the beauty and innovation of Nike Air shoes</p>
        },
        {
            title: 'Ofsp_ce',
            description: 'I am thrilled to present my latest project, Ofsp_ce, a dynamic website for a business dedicated to selling high-quality nail hygiene products. The goal was to create an engaging and user-friendly platform that educates visitors about the importance of nail hygiene and showcases a range of innovative products designed to promote healthy and beautiful nails.',
            image: web2,
            features: [
                'Clean and Modern Design',
                "Product Catalogue",
                "Educational Resources",
                "Secure E-commerce Integration",
                "Customer Reviews and Testimonials",
                "Newsletter Subscription",
                "Contact and Support",
            ],
            conclusion: "The Ofsp_ce website represents a culmination of my passion for web design and my dedication to promoting healthy nail hygiene practices. Through an intuitive user interface, captivating visuals, and an extensive product range, the website serves as a valuable resource for customers seeking top-quality nail hygiene products.",
            conclusion2: <p>Feel free to explore the <a className='link' href="#">live website</a> and discover the range of innovative products available at Ofsp_ce.</p>
            
        },
        {
          title: "Dropnow",
          description: "I had the opportunity to work on an exciting project called Dropnow, which involved the development of a powerful SAAS (Software as a Service) website. The primary purpose of Dropnow is to provide a platform for creating interactive onscreen guides for clients, enhancing their user experience and improving product adoption.",
          image: web3,
          features: [
            "Intuitive User Interface",
            "Interactive Guide Creation",
            "Customizable Design",
            "Targeted Audience Segmentation",
            "Real-time Analytics",
            "Collaboration and Feedback",
            "Easy Integration",
            "Scalability and Security",
          ],
          conclusion:"Overall, Dropnow empowers businesses to create compelling onscreen guides that improve user onboarding, reduce support requests, and enhance overall user satisfaction. It is a powerful SAAS solution that simplifies the process of creating interactive guides, enabling businesses to deliver exceptional user experiences and drive success.",
          conclusion2: <p>Feel free to explore the <a className='link' href="#">live Dropnow website</a> to witness the capabilities and impact it can bring to your business and clients.</p>

        },
        {
          title: "Gardy",
          description: "I had the privilege of working on an exciting project called Gardy, where I had the opportunity to design and develop a captivating website for a business specializing in selling exquisite flower bouquets. The goal was to create a visually stunning and user-friendly platform that showcases the beauty and artistry of their floral arrangements.",
          image: web4,
            features: [
                "Striking Visual Design",
                "Product Catalogue",
                "Online Ordering",
                "Customization Options",
                "Occasion-based Recommendations",
                "Responsive Design",
                "Customer Reviews and Testimonials",
                "Contact and Support",
            ],
            conclusion: "Gardy's website serves as a captivating virtual storefront, where users can immerse themselves in the world of beautiful flower arrangements and conveniently order bouquets for any occasion. With its stunning visuals, intuitive user interface, and customization options, the website offers an exceptional experience to flower enthusiasts and potential customers.",
            conclusion2: <p>Explore <a href="#" className="link">Gardy&apos;'s website</a> today to discover the artistry and elegance of their floral creations, and embrace the beauty of nature through their exquisite flower bouquets.</p>
        },
        {
          title: "Aimm",
          description: "I had the incredible opportunity to work on a groundbreaking project called Aimm, a revolutionary UI design system that is powering some of the world's best digital experiences. The aim of this project was to create a cutting-edge and highly versatile design system that empowers designers and developers to create stunning and intuitive user interfaces across various platforms and devices.",
          image: web5,
            features: [
                "Seamless Integration",
                "Highly Customizable",
                "Versatile Design",
                "Intuitive User Interface",
                "Responsive Design",
                "Scalability and Security",
                "Real-time Analytics",
                "Collaboration and Feedback",
            ],
            conclusion: "The Aimm project pushed the boundaries of UI design, providing a robust and flexible solution for creating world-class digital experiences. Through extensive research, iterative design, and collaboration with a talented team, we were able to create a design system that empowers designers and developers to deliver exceptional user experiences across various industries.By adopting Aimm, businesses and individuals can unlock the potential to create immersive, intuitive, and visually stunning interfaces that captivate users and drive engagement. The new UI design system is set to revolutionize the way we approach digital design and pave the way for the next generation of user experiences.",
            conclusion2: <p>Experience the power of <a href="#" className="link">Aimm </a>and join the growing community of designers and developers who are shaping the future of digital experiences.</p>
        },
    
      ]
    const content = portfolioItems.find(item => item.title === slug)

    return (
        <div className=' dark:bg-gray-900'>
            <Navigation />
            <main className='ctn-mx px-2'>
                {content ? (
                <>
                    <div>
                        <Image 
                        src={content.image}
                        alt={content.title}
                        sizes='(max-width: 768px) 80vw, (max-width: 1024px) 80vw, 100vw'
                        />

                    </div>
                    <div className='py-10 dark:text-white'>
                        <h1 className='text-5xl'>{content.title}</h1>
                        <hr className='my-6 bg-gray-800 h-0.5' />
                        <div className="grid grid-cols-1">
                            <div className='text-xl text-slate-700'>
                                <p>{content.description}</p>
                            </div>
                            <div className='pt-5 dark:text-white'>
                                <h2 className='text-3xl'>Key Features</h2>
                                <ol className='text-xl text-teal-600 list-decimal pl-5 ml-2'>
                                    {content.features.map((feature, index) => {
                                        return (
                                            <li className='py-2' key={index}>{feature}</li>
                                        )
                                    })
                                    
                                    }
                                </ol>
                            </div>
                            <p className='pt-5 text-xl'>
                                {content.conclusion}
                            </p>
                            {content.conclusion2}
                        </div>
                    </div>
                </>
                ) : (
                    <h1 className='text-7xl text-center m-10 '>Page not in Database</h1>
                )}
            </main>
            <Footer />
        </div>
    )
}
