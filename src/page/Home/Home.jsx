import React from 'react'
// import HeroSection2 from './HeroSection2'
import Featured from './Featured'
import HeroSection from './HeroSection'
import AgentContact from './AgentContact'
import Testimonial from './Testimonial'
import WhyChooseUs from './WhyChooseUs'

const Home = () => {
  return (
    <div className=''>        
       {/* <HeroSection2 /> */}
       <HeroSection />
       <Featured />
       <WhyChooseUs />
       <AgentContact />
       <Testimonial />
    </div>
  )
}

export default Home