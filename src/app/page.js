
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Footer from '@/components/Footer';


export const metadata = {
  title: "Dimitri | Home",
}
export default function Home() {

  return (
    <div>
      

      <main className='min-h-screen bg-white dark:bg-gray-900'>
        <Navigation />
        <Hero />
        <Services />
        <Portfolio />
        <Footer />
      </main> 
    </div>
  )
}
