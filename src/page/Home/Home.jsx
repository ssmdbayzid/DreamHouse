import React from 'react'
// import HeroSection2 from './HeroSection2'
import PopularProperties from './PopularProperties'
import HeroSection from './HeroSection'

import Testimonial from './Testimonial'
import WhyChooseUs from './WhyChooseUs'
import AboutUs from './AboutUs'
import Features from './Features'

const Home = () => {
  return (
    <div className=''>        
       {/* <HeroSection2 /> */}
       <HeroSection />
       <WhyChooseUs />
       <PopularProperties />
       <Features />
       <AboutUs />
       <Testimonial />
    </div>
  )
}

export default Home