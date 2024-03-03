import React from 'react'
import { Link } from 'react-router-dom'
// Import Swiper React components
import { BsFillTagFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoBedOutline } from "react-icons/io5";
import { MdOutlineSoupKitchen } from "react-icons/md";
import { PiGarage } from "react-icons/pi";
import { PiGridNineLight } from "react-icons/pi";
import { propertyData } from '../../assets/data';








const PopularProperties = () => {
  return (
    <section className='section bg-white'>
    <div className="container ">      
    <p className='text-primaryColor text-center'>Our Popular Properties For Sale and Rent</p>
      <p className='heading text-center '>Popular Properties</p>      
      <span className='flex w-28 mt-5 mb-10 mx-auto'>
      <hr className='h-2 bg-black w-1/2' /> <hr className='h-2  bg-primaryColor w-1/2'/>
      </span> 

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 grid-8">

      {propertyData && propertyData.map((item, index)=>
      <div key={index} className='bg-slate-100 my-5 md:my-0 hover:shadow-2xl '>   
       <div className="relative h-72">
         <img src="https://homepress.stylemixthemes.com/main/wp-content/uploads/sites/3/2021/03/alberto-castillo-q-mx4mSkK9zeo-unsplash-min-min-760x510.jpg" alt="" className='object-cover h-full w-full' />

         <div class="absolute top-0 flex justify-between w-full">
          <p class="bg-primaryColor/50  text-white text-md px-3 py-2 rounded-br-md">Hot Offer</p>
          <p class="bg-primaryColor/50  text-white text-md px-3 py-2 rounded-bl-md">{item.status}</p>
        </div>
        <div className='absolute bottom-0 w-full'>
        <p class="w-1/3 text-white ml-auto py-3  text-center rounded-tl-xl blur-[0.5px] bg-black/70">${item.rent} <span class="text-red-600">/ {item.postfix}</span></p>
        <div class="flex  justify-between bg-black/50 blur-[0.3px] px-3 py-2 text-white">
            <span className='flex gap-2 items-center text-sm'><BsFillTagFill className='text-primaryColor'/> {item.propertyType}</span>
            <span className='flex gap-2 items-center text-sm'> <FaUserAlt className='text-primaryColor'/> {item.propertyAgent}</span>
            <span className='flex gap-2 items-center text-sm'> <FaRegCalendarAlt className='text-primaryColor'/>{item.propertyDate}</span>
          </div>
        </div>
       
       </div>
         <div className="px-3 pb-3 ">
             {/* --------- Product Content ---------- */}
         <div className="">
             <p className="whitespace-nowrap overflow-hidden text-ellipsis font-bold text-xl mt-3">{item.title}</p>
             <p className="text-primaryColor py-3 font-semibold">{item.location}</p>
             <p className="text-md text-slate-500 text-justify mt-auto">{item.description}</p>
             {/* <p className="text-md font-semibold">{item.title}</p> */}
             <div className="flex justify-between mt-5">
              
             <span className="text-md font-bold flex items-center gap-1 text-slate-500">
             < IoBedOutline className='text-lg'/> {item.bed}
             </span>
             <span className="text-md font-bold flex items-center gap-1 text-slate-500">
             < MdOutlineSoupKitchen className='text-lg'/> {item.kitchen}
             </span>
             <span className="text-md font-bold flex items-center gap-1 text-slate-500">
             < PiGarage className='text-lg'/> {item.garage}
             </span>
             <span className="text-md font-bold flex items-center gap-1 text-slate-500">
             < PiGridNineLight className='text-lg'/> {item.sqFt} SqFt
             </span>
             
             </div>
         
         </div>             
         </div>          
      </div>)}
     
      </div>
     
      </div>
      </section>
  )
}

export default PopularProperties