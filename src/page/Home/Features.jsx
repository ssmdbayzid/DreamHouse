import React from 'react'
import { AiFillSafetyCertificate } from "react-icons/ai";
import { TbAirConditioning } from "react-icons/tb";
import { LuTrees } from "react-icons/lu";
import { IoCarSportOutline } from "react-icons/io5";
import { LuSofa } from "react-icons/lu";
import { FaPersonSwimming } from "react-icons/fa6";

const Features = () => {
  return (
    <section className='section bg-accent'>
    <div className='container'>
        <div className='w-[570px] mx-auto'>
    <p className='text-primaryColor text-center'> Elevate Your Lifestyle with Unparalleled Amenities.</p>
        <h1 className='heading text-center'>Property Featured</h1> 
            <span className='flex w-28 mt-3 mb-10 mx-auto'>
            <hr className='h-2 bg-black w-1/2' /> <hr className='h-2  bg-primaryColor w-1/2'/>
            </span> 
        </div>
        
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="bg-white px-8 py-10">
        <div class="flex h-16 w-16 items-center justify-center bg-slate-100 text-primaryColor border text-5xl"> <AiFillSafetyCertificate /></div>
        <h2 class="pt-3 text-2xl font-bold">100% Security</h2>
        <p class="text-para text-justify">
        Experience peace of mind with our cutting-edge security system, ensuring a safe haven with 24/7 surveillance and controlled access points.</p>
        </div>
        <div class="bg-white px-8 py-10">
        <div class="flex h-16 w-16 items-center justify-center bg-slate-100 text-primaryColor border text-5xl"> <TbAirConditioning /> </div>
        <h2 class="pt-3 text-2xl font-bold">100% Security</h2>
        <p class="text-para text-justify">
        Indulge in year-round comfort with our centralized air conditioning, offering customizable settings and modern, energy-efficient technology.</p>
        </div>
        <div class="bg-white px-8 py-10">
        <div class="flex h-16 w-16 items-center justify-center bg-slate-100 text-primaryColor border text-5xl"> <LuTrees /> </div>
        <h2 class="pt-3 text-2xl font-bold">100% Security</h2>
        <p class="text-para text-justify">
        Escape to our meticulously landscaped garden oasis, providing a serene outdoor retreat for relaxation and leisure.</p>
        </div>
        <div class="bg-white px-8 py-10">
        <div class="flex h-16 w-16 items-center justify-center bg-slate-100 text-primaryColor border text-5xl"> <IoCarSportOutline /> </div>
        <h2 class="pt-3 text-2xl font-bold">100% Security</h2>
        <p class="text-para text-justify">Enjoy hassle-free living with ample and easily accessible parking spaces, ensuring convenient access to your residence.</p>
        </div>
        <div class="bg-white px-8 py-10">
        <div class="flex h-16 w-16 items-center justify-center bg-slate-100 text-primaryColor border text-5xl"> <FaPersonSwimming /> </div>
        <h2 class="pt-3 text-2xl font-bold">100% Security</h2>
        <p class="text-para text-justify">
          Dive into relaxation in our sparkling community swimming pool, a well-maintained haven for both leisure and socializing.</p>
        </div>
        <div class="bg-white px-8 py-10">
        <div class="flex h-16 w-16 items-center justify-center bg-slate-100 text-primaryColor border text-5xl"> <LuSofa /> </div>
        <h2 class="pt-3 text-2xl font-bold">100% Security</h2>
        <p class=" text-para text-justify">
        Unwind in style on plush sofas within your living space, blending comfort, style, and durability for a welcoming home atmosphere.</p>
        </div>
  </div>
        

    </div>
    </section>
  )
}

export default Features