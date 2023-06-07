import Navigation from '@/components/Navigation'
import Image from 'next/image'
import web1 from '@/../public/web1.png'

export default async function PortfolioItemPage ({params}) {
    const portfolioItems = [
        {
            title: 'Sneacker Company',
            content: 'A nsbdjk ljdfksjf ksljfk sjlnkjdg gn gmdg k',
            image: web1,
        },
    ]
    const content = portfolioItems.find(item => item.title === params.slug)

    return (
        <div>
            <main>
                <Navigation />
                {content ? (
                    <>
                    <div>
                        <Image 
                        src={content.image}
                        alt={content.title}
                        fill
                        />

                    </div>
                    <div>
                        {content.content}
                    </div>
                </>
                ) : (
                    <h1>Page not in Database</h1>
                )}
            </main>
        </div>
    )
}
