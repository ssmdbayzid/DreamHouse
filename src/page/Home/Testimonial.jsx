import React, { useCallback, useRef } from 'react'
import style from './Testimonial.module.css'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { IoCaretBackSharp, IoCaretForwardSharp } from "react-icons/io5";


import { Autoplay,  Navigation } from 'swiper/modules';


const Testimonial = () => {

    const sliderRef = useRef(null);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
      }, []);

      const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
      }, []);
    
  return (
    <section className='section bg-white'>
    <div className='container'>
        <div className="lg-[470px] mx-auto">
        <p className='text-primaryColor text-center'>We collect reviews from our customers.</p>
      <p className='heading text-center '>Clients Testimonials</p>      
      <span className='flex w-28 mt-5 mb-10 mx-auto'>
      <hr className='h-2 bg-black w-1/2' /> <hr className='h-2  bg-primaryColor w-1/2'/>
      </span> 
        </div>
        <div>
        <Swiper
        ref={sliderRef}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
       speed={1100}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        modules={[ Autoplay, Navigation]}
        className={style.swiper}
        breakpoints={{
            640: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        }}
      >
        <SwiperSlide className={style.swiper}>
        <div className="relative w-full bg-slate-200 px-[53px] pb-[55px] pt-[44px] after:absolute after:bottom-14 after:right-10 after:h-14 after:w-20 after:bg-[url('https://code-theme.com/html/findhouses/images/icons/quoe.png')] after:bg-cover after:bg-no-repeat after:bg-center">
    
    <p className="text-para text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore gna a. Ut enim ad minim veniam</p>
    <div className="flex items-center mt-10">
      
    <img src="https://code-theme.com/html/findhouses/images/testimonials/ts-1.jpg" alt="" className=" h-16 w-16 mr-6 rounded-full outline outline-red-400"/>
        
      <div>
        <p className="text-lg font-bold">Lisa Smith</p>
        <p className="text-md">New York</p>
      </div>
    </div>
  
       </div>
        </SwiperSlide>
       
        <SwiperSlide className={style.swiper}>
        <div className="relative w-full bg-slate-200 px-[53px] pb-[55px] pt-[44px] after:absolute after:bottom-14 after:right-10 after:h-14 after:w-20 after:bg-[url('https://code-theme.com/html/findhouses/images/icons/quoe.png')] after:bg-cover after:bg-no-repeat after:bg-center">
  
  <p className="text-para text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore gna a. Ut enim ad minim veniam</p>
  <div className="flex items-center mt-10">
    
  <img src="https://code-theme.com/html/findhouses/images/testimonials/ts-6.jpg" alt="" className=" h-16 w-16 mr-6 rounded-full outline outline-red-400"/>
      
    <div>
      <p className="text-lg font-bold">Lisa Smith</p>
      <p className="text-md">New York</p>
    </div>
  </div>

    </div>
        </SwiperSlide>

        <SwiperSlide className={style.swiper}>
        <div className="relative w-full bg-slate-200 px-[53px] pb-[55px] pt-[44px] after:absolute after:bottom-14 after:right-10 after:h-14 after:w-20 after:bg-[url('https://code-theme.com/html/findhouses/images/icons/quoe.png')] after:bg-cover after:bg-no-repeat after:bg-center">
  
  <p className="text-para text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore gna a. Ut enim ad minim veniam</p>
  <div className="flex items-center mt-10">
    
  <img src="https://code-theme.com/html/findhouses/images/testimonials/ts-2.jpg" alt="" className=" h-16 w-16 mr-6 rounded-full outline outline-red-400"/>
      
    <div>
      <p className="text-lg font-bold">Lisa Smith</p>
      <p className="text-md">New York</p>
    </div>
  </div>

     </div>
        </SwiperSlide>

        <SwiperSlide className={style.swiper}>
        <div className="relative w-full bg-slate-200 px-[53px] pb-[55px] pt-[44px] after:absolute after:bottom-14 after:right-10 after:h-14 after:w-20 after:bg-[url('https://code-theme.com/html/findhouses/images/icons/quoe.png')] after:bg-cover after:bg-no-repeat after:bg-center">
  
  <p className="text-para text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore gna a. Ut enim ad minim veniam</p>
  <div className="flex items-center mt-10">
    
  <img src="https://code-theme.com/html/findhouses/images/testimonials/ts-3.jpg" alt="" className=" h-16 w-16 mr-6 rounded-full outline outline-red-400"/>
      
    <div>
      <p className="text-lg font-bold">Lisa Smith</p>
      <p className="text-md">New York</p>
    </div>
  </div>

     </div>
        </SwiperSlide>

        <SwiperSlide className={style.swiper}>
        <div className="relative w-full bg-slate-200 px-[53px] pb-[55px] pt-[44px] after:absolute after:bottom-14 after:right-10 after:h-14 after:w-20 after:bg-[url('https://code-theme.com/html/findhouses/images/icons/quoe.png')] after:bg-cover after:bg-no-repeat after:bg-center">
  
  <p className="text-para text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore gna a. Ut enim ad minim veniam</p>
  <div className="flex items-center mt-10">
    
  <img src="https://code-theme.com/html/findhouses/images/testimonials/ts-5.jpg" alt="" className=" h-16 w-16 mr-6 rounded-full outline outline-red-400"/>
      
    <div>
      <p className="text-lg font-bold">Lisa Smith</p>
      <p className="text-md">New York</p>
    </div>
  </div>

     </div>
        </SwiperSlide>
        </Swiper>    
        <div className='flex justify-center mt-8 gap-8'>
        <button className='w-10 h-10 flex justify-center items-center border-2 rounded-full border-primaryColor text-primaryColor' onClick={handlePrev}>
            <IoCaretBackSharp />
        </button>
        <button className='w-10 h-10 flex justify-center items-center border-2 rounded-full border-primaryColor text-primaryColor' onClick={handleNext}>
        <IoCaretForwardSharp />
            
        </button>
      </div>     
        </div>
    </div>
    </section>
  )
}

export default Testimonial