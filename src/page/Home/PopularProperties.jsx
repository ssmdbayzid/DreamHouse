import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// Import Swiper React components
import { BsFillTagFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoBedOutline } from "react-icons/io5";
import { MdOutlineSoupKitchen } from "react-icons/md";
import { PiGarage } from "react-icons/pi";
import { PiGridNineLight } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa6";

import getAllProperties from '../../hooks/getAllProperties';
import Loader from '../../hooks/Loader';
import { propertiesData } from '../../assets/data/PropertiesData';
import { useDispatch } from 'react-redux';
import { addToFavorite } from '../../app/features/favoriteItemSlice';


const PopularProperties = () => {
const [propertyData, setPropertyData] = useState(null)
const {properties, loading} = getAllProperties()
  const dispatch = useDispatch()
  useEffect(()=>{
    if(properties){
      
      setPropertyData(properties.slice(0,6))          
    }
  },[properties])


  return (
    <section className='section bg-white'>
    <div className="container ">      
    <p className='text-primaryColor text-center'>Our Popular Properties For Sale and Rent</p>
      <p className='heading text-center'>Popular Properties</p>      
      <span className='flex w-28 mt-5 mb-10 mx-auto'>
      <hr className='h-2 bg-black w-1/2' /> <hr className='h-2  bg-primaryColor w-1/2'/>
      </span> 
    {loading ? <Loader />: 
    <> 
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 grid-8">

    {propertyData && propertyData.map((item, index)=>
      <div  key={index} className='relative bg-slate-100 my-5 md:my-0 hover:shadow-2xl '>   
      <div  className="relative block h-72">
        <img src={item.images[0]} alt="" className='object-cover h-full w-full' />
 
        <div className="absolute top-0 flex justify-between w-full">
         <p className="bg-primaryColor/50  text-white text-md px-3 py-2 rounded-br-md">Hot Offer</p>
         <p className="bg-primaryColor/50  text-white text-md px-3 py-2 rounded-bl-md">{item.status}</p>
       </div>
      
       <div className='absolute bottom-0 w-full'>
         <div className="flex justify-between">
         <p className=" text-white py-3 px-2 cursor-pointer  text-center  blur-[0.5px] bg-black/80">
           <FaRegHeart onClick={()=>dispatch(addToFavorite(item))} /></p>   
           
         <p className="w-1/3 text-white ml-auto py-3 text-sm text-center rounded-tl-xl blur-[0.5px] bg-black/80">${item.price} <span className="text-yellow-400">/ {item.rent_duration}</span></p>   
         </div>
      
       <div className="flex  justify-between bg-black/50 blur-[0.3px] px-3 py-2 text-white">
           <span className='flex gap-2 items-center text-sm text-nowrap'><BsFillTagFill className='text-primaryColor '/> {item.property_type}</span>
           <span className='flex gap-2 items-center text-sm text-nowrap'> <FaUserAlt className='text-primaryColor '/> {item.agent_name}</span>
           <span className='flex gap-2 items-center text-sm text-nowrap'> <FaRegCalendarAlt className='text-primaryColor '/>{item.listed_date}</span>
         </div>
       </div>
      
      </div>
        <Link to={`/property/${item._id}`}  className=" block px-3 pb-10 ">
            {/* --------- Product Content ---------- */}
        <div className="  ">
            <p className="whitespace-nowrap overflow-hidden text-ellipsis font-bold text-xl mt-3">{item.title}</p>
            <p className="text-primaryColor py-3 font-semibold">{item.street} {""} {item.city}</p>
            <p className="text-md text-slate-500 text-justify mt-auto">{item.description}</p>
            {/* <p className="text-md font-semibold">{item.title}</p> */}                        
        </div> 
        <div className="absolute left-1/2 translate-x-[-50%] bottom-2 px-5 mx-auto  w-full flex justify-between ">
             
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
        </Link>          
     </div>)}  
    </div></>}          
      </div>
      </section>
  )
}

export default PopularProperties