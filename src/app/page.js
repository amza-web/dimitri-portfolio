
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';


export const metadata = {
  title: "Dimitri | Home",
}
export default function Home() {

  return (
    <div>
      

      <main className='min-h-screen bg-white'>
        <Navigation />
        <Hero />
        <Services />
        <Portfolio />
      </main> 
    </div>
  )
}
