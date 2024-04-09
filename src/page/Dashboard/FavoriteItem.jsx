import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFavoriteItem } from '../../app/features/favoriteItemSlice'
import { BsFillTagFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoBedOutline } from "react-icons/io5";
import { MdOutlineSoupKitchen } from "react-icons/md";
import { PiGarage } from "react-icons/pi";
import { PiGridNineLight } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa6";
import Loader from '../../hooks/Loader';


const FavoriteItem = () => {
  const  [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const favoriteItems = useSelector((state)=>state.favoriteItem.favoriteItems)
  console.log(favoriteItems?.length)

  useEffect(()=>{
    setLoading(true)
    if(favoriteItems){
      setLoading(false)
    }
  },[favoriteItems])

  return (
    <div className='min-h-[90dvh]'>
      <h2 className='bg-gradient-to-bl from-primaryColor/5 to-white text-center text-2xl bg-green-200 py-5'>Favorite Property</h2>
      
      {loading ? <Loader />:      
      <div className="grid p-4 grid-cols-1 md:grid-cols-2  md:gap-5 grid-8">

    {favoriteItems && favoriteItems.map((item, index)=>
    <div to={`/property/${item._id}`} key={index} className='bg-slate-100 my-5 md:my-0 hover:shadow-2xl '>   
     <div className="relative h-72">
       <img src={item.images[0]} alt="" className='object-cover h-full w-full' />

       <div className="absolute top-0 flex justify-between w-full">
        <p className="bg-primaryColor/50  text-white text-md px-3 py-2 rounded-br-md">Hot Offer</p>
        <p className="bg-primaryColor/50  text-white text-md px-3 py-2 rounded-bl-md">{item.status}</p>
      </div>
     
      <div className='absolute bottom-0 w-full'>
        <div className="flex justify-between">
        <p title='Remove from favorite' className=" text-white py-3 px-4  text-center  blur-[0.5px] bg-black/80">
          <FaRegHeart className='cursor-pointer' onClick={()=>dispatch(removeFavoriteItem(item))} /></p>   
          
        <p className="w-1/3 text-white ml-auto py-3 text-sm text-center rounded-tl-xl blur-[0.5px] bg-black/80">${item.price} <span className="text-yellow-400">/ {item.rent_duration}</span></p>   
        </div>
     
      <div className="flex  justify-between bg-black/50 blur-[0.3px] px-3 py-2 text-white">
          <span className='flex gap-2 items-center text-sm'><BsFillTagFill className='text-primaryColor'/> {item.property_type}</span>
          <span className='flex gap-2 items-center text-sm'> <FaUserAlt className='text-primaryColor'/> {item.agent_name}</span>
          <span className='flex gap-2 items-center text-sm'> <FaRegCalendarAlt className='text-primaryColor'/>{item.listed_date}</span>
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
    </div>     
  )}  
    </div>}
    {favoriteItems?.length < 1 && 
<div className="w-72 mx-auto text-center">
  <img src="https://i.pinimg.com/originals/80/f8/7f/80f87f1b1c82ecfa224194e5d8532c60.gif" alt="" />
      <h1 className="text-2xl font-bold ">No favorite Items</h1>
<p className=' mb-10'>You cann add an items to your favorite item by clicking "Heart Icon"</p>
<a href='/properties' className=" py-2  bg-blue-600  rounded-full px-10 text-white">Go Back</a>
    </div>}
    </div>
  )
}

export default FavoriteItem