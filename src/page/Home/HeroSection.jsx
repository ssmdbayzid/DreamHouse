import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const HeroSection = () => {
  return (
    <div >
        
        
        <div className='relative h-screen'>
          {/* --------------- Forward Arrow -------------- */}
        {/* <div className=" swiper-button image-swiper-button-next">
        <IoIosArrowForward />
      </div> */}

          {/*--------------- Backwar Arrow --------------*/}
      {/* <div className="swiper-button image-swiper-button-prev">
        <IoIosArrowBack />
      </div> */}
      <Swiper      
        slidesPerView={1}
        // spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,          
        }}
        
        // speed={1200}
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: false,
        // }}
        navigation={{
          nextEl: ".image-swiper-button-next",
          prevEl: ".image-swiper-button-prev",
          disabledClass: "swiper-button-disabled"
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-full h-screen"
      >
        <SwiperSlide className=' relative bg-cover bg-center'>
          <img src="https://homepress.stylemixthemes.com/main/wp-content/uploads/sites/3/2021/03/property-img-1.jpg" alt="" srcSet="" className='block w-full'/>
          <div  className="absolute bg-black/20 py-4 px-6 w-2/3  top-1/2 transform -translate-y-1/2 translate-x-[25%]    ">
        <h1 className="text-6xl text-center font-semibold text-white">Awesome Family Home</h1>
        <p className='text-white text-2xl mt-8 text-center'>Ideal theme for any construction buiness you nedd
          <br />
          With Visual Composer, Revoulation Slider and other awesome <br />
          features, just got batter, With new options you can't go wrong.
        </p>
      </div>
          </SwiperSlide>
          <SwiperSlide className=' relative bg-cover bg-center'>
          <img src="https://homepress.stylemixthemes.com/main/wp-content/uploads/sites/3/2021/03/shutterstock_436573321-min-1.jpg" alt="" srcSet="" className='block w-full'/>
          <div  className="absolute bg-black/20 py-4 px-6 w-2/3  top-1/2 transform -translate-y-1/2 translate-x-[25%]    ">
        <h1 className="text-6xl text-center font-semibold text-white">Constriction Its Best</h1>
        <p className='text-white text-2xl mt-8 text-center'>Ideal theme for any construction buiness you nedd
          <br />
          With Visual Composer, Revoulation Slider and other awesome <br />
          features, just got batter, With new options you can't go wrong.
        </p>
      </div>
          </SwiperSlide>
       
      </Swiper>
    </div>
        
    </div>
  )
}

export default HeroSection