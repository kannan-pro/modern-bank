import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Stats from './Components/Stats'
import Features from './Components/Features'
import Billing from './Components/Billing'
import Card from './Components/Card'
import Feed from './Components/Feed'
import Feedback from './Components/Testimonial'
import Clients from './Components/Clients'
import CTA from './Components/CTA'
import Footer from './Components/Footer'


const App = () => {
  return (
    <div className='bg-primary min-h-screen text-white w-full overflow-hidden poppins'>

      <div className='w-full sm:px-16 px-6'>
        <Navbar />
      </div>

      <div className='w-full sm:px-16 px-6 sm:py-16 py-6'>
        <Hero />
      </div>

      <div className='w-full sm:px-16 px-6 '>
        <Stats />
      </div>

      <div className='w-full sm:px-16 px-6'>
        <Features />
      </div>

      <div className='w-full sm:px-16 px-6'>
        <Billing />

      </div>


      <div className='w-full sm:px-16 px-6'>
        <Card />

      </div>
      
      <div className='w-full sm:px-16 px-6'>
        <Feed />

      </div>
      
   
      <div className='w-full sm:px-16 px-6'>
        <Feedback />

      </div>

      <div className='w-full sm:px-16 px-6'>
        <Clients />
      </div>
      
      <div className='w-full sm:px-16 px-6'>
        <CTA />
      </div>

      <div className='w-full sm:px-16 px-6'>
        <Footer />
      </div>




    </div>
  )
}

export default App