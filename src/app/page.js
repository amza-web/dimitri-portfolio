
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero';


export const metadata = {
  title: "Dimitri | Home",
}
export default function Home() {

  return (
    <div>
      

      <main className='min-h-screen bg-white'>
        <Navigation />
        <Hero />
      </main> 
    </div>
  )
}
