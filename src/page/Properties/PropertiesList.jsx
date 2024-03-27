import React from 'react'
import { BsFillTagFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoBedOutline } from "react-icons/io5";
import { MdOutlineSoupKitchen } from "react-icons/md";
import { PiGarage } from "react-icons/pi";
import { PiGridNineLight } from "react-icons/pi";
import { Link } from 'react-router-dom';

const PropertiesList = ({properties}) => {

  return (
    <div className=''>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4 grid-8">
       {properties && properties.map((item, index)=>
         <Link to={`/property/${item._id}`} key={index} className='bg-slate-100 my-5 md:my-0 hover:shadow-2xl '>   
         <div className="relative h-72">
           <img src={item.images[0]} alt="" className='object-cover h-full w-full' />
    
           <div class="absolute top-0 flex justify-between w-full">
            <p class="bg-primaryColor/50  text-white text-md px-3 py-2 rounded-br-md">Hot Offer</p>
            <p class="bg-primaryColor/50  text-white text-md px-3 py-2 rounded-bl-md">{item.status}</p>
          </div>
          <div className='absolute bottom-0 w-full'>
          <p class="w-[50%] text-white  ml-auto py-3  text-center rounded-tl-xl blur-[0.5px]  bg-black/80">${item.price} <span class="text-yellow-400">/ {item.rent_duration}</span></p>
          <div class="flex gap-1 justify-between bg-black/50 blur-[0.3px] px-3 py-2 text-white">
              <span className='flex gap-2 items-center text-sm text-nowrap'><BsFillTagFill className='text-primaryColor'/> {item.property_type}</span>
              <span className='flex gap-2 items-center text-sm text-nowrap'> <FaUserAlt className='text-primaryColor'/> {item.agent_name}</span>
              <span className='flex gap-2 items-center text-sm text-nowrap'> <FaRegCalendarAlt className='text-primaryColor'/>{item.listed_date}</span>
            </div>
          </div>
         
         </div>
           <div className="px-3 pb-3 ">
               {/* --------- Product Content ---------- */}
           <div className="">
               <p className="whitespace-nowrap overflow-hidden text-ellipsis font-bold text-xl mt-3">{item.title}</p>
               <p className="text-primaryColor py-3 font-semibold">{item.street} {""} {item.city}</p>
               <p className="text-md text-slate-500 text-justify mt-auto">{item.description}</p>
               {/* <p className="text-md font-semibold">{item.title}</p> */}
               <div className="flex justify-between mt-5">
                
               <span className="text-md font-bold flex items-center gap-1 text-slate-500">
               < IoBedOutline className='text-lg'/> {item.bedrooms}
               </span>
               <span className="text-md font-bold flex items-center gap-1 text-slate-500">
               < MdOutlineSoupKitchen className='text-lg'/> {item.kitchen}
               </span>
               <span className="text-md font-bold flex items-center gap-1 text-slate-500">
               < PiGarage className='text-lg'/> {item.garage}
               </span>
               <span className="text-md font-bold flex items-center gap-1 text-slate-500">
               < PiGridNineLight className='text-lg'/> {item.property_area} SqFt
               </span>
               
               </div>
           
           </div>             
           </div>          
        </Link>)}  
        </div>
    </div>
  )
}

export default PropertiesList