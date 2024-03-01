import React from 'react'
import { BsHousesFill } from "react-icons/bs";


import { PiHandshake } from "react-icons/pi";
import { BsCashStack } from "react-icons/bs";
import { GrMapLocation } from "react-icons/gr";
import { BsHouses } from "react-icons/bs";


const WhyChooseUs = () => {
  return (
    <section className='section bg-accent'>
        <div className="container">
          <div className='md:w-[500px] mx-auto'>
          <p className='text-primaryColor text-center'>Ehhancing the human experience</p>
          <p className='heading text-center '>Why Choose Us</p>      
          <span className='flex w-28 mt-5 mb-10 mx-auto'>
          <hr className='h-2 bg-black w-1/2' /> <hr className='h-2  bg-primaryColor w-1/2'/>
          </span> 
          </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className='bg-white px-8 pt-10'>
                <BsHouses className='text-8xl text-center inline-block w-full  text-primaryColor' />
                <h3 className='text-lg text my-5 text-center text-headingColor font-bold'>Wide Range Of Properties</h3>
                <p className='text-lg text-center mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque blanditiis non perferendis ea consequuntur dignissimos nobis labore.</p>
                </div>
                <div className='bg-white px-8 pt-10'>
                <PiHandshake className='text-8xl text-center inline-block w-full  text-primaryColor' />
                <h3 className='text-lg text my-5 text-center text-headingColor font-bold'>Trusted by thousands</h3>
                <p className='text-lg text-center mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque blanditiis non perferendis ea consequuntur dignissimos nobis labore.</p>
                </div>
                <div className='bg-white px-8 pt-10'>
                <BsCashStack className='text-8xl text-center inline-block w-full  text-primaryColor' />
                <h3 className='text-lg text my-5 text-center text-headingColor font-bold'>Financing made easy</h3>
                <p className='text-lg text-center mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque blanditiis non perferendis ea consequuntur dignissimos nobis labore.</p>
                </div>
                <div className='bg-white px-8 pt-10'>
                <GrMapLocation className='text-8xl text-center inline-block w-full  text-primaryColor' />
                <h3 className='text-lg text my-5 text-center text-headingColor font-bold'>We are here near you</h3>
                <p className='text-lg text-center mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque blanditiis non perferendis ea consequuntur dignissimos nobis labore.</p>
                </div>
            </div>
        </div>

    </section>
  )
}

export default WhyChooseUs