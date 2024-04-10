import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
import Loader from '../../hooks/Loader'
import { FaRegCalendarAlt, FaRegHeart, FaUserAlt } from 'react-icons/fa'
import { BsFillTagFill } from 'react-icons/bs'
import { IoBedOutline } from 'react-icons/io5'
import { MdOutlineSoupKitchen } from 'react-icons/md'
import { PiGarage, PiGridNineLight } from 'react-icons/pi'
import { Link } from 'react-router-dom'
import { useGetSingleUserQuery } from '../../app/features/propertiesApiSlice'

const BookedProperty = () => {
    const [loading, setLoading] = useState(false)
    const [userData, setUserData] = useState(null)
    const user = useSelector(state=>state.user.user)
  const {data, isLoading} = useGetSingleUserQuery(user?._id)
    

  

    useEffect(()=>{
   
      if(isLoading){
        setLoading(true)
      } if(data){
        console.log(data?.data)
        setUserData(data?.data)    
        setLoading(false)
      }
  },[data, user])
    
  return (
    <div className='py-10'> BookedProperty
        {loading && !userData ? <Loader />
        : <>
        {userData?.name}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:gap-4 grid-2">
       {userData?.booking  && userData?.booking.map((item, index)=>
         <div  key={index} className='relative bg-slate-100 my-5 md:my-0 hover:shadow-2xl '>   
         <div  className="relative block h-72">
           <img src={item.property.images[0]} alt="" className='object-cover h-full w-full' />
    
           <div className="absolute top-0 flex justify-between w-full">
            <p className="bg-primaryColor/50  text-white text-md px-3 py-2 rounded-br-md">Hot Offer</p>
            <p className="bg-primaryColor/50  text-white text-md px-3 py-2 rounded-bl-md">{item.property.status}</p>
          </div>
         
          <div className='absolute bottom-0 w-full'>
            <div className="flex justify-between">
            <p className=" text-white py-3 px-2 cursor-pointer  text-center  blur-[0.5px] bg-black/80">
              <FaRegHeart onClick={()=>dispatch(addToFavorite(item))} /></p>   
              
            <p className="w-1/3 text-white ml-auto py-3 text-sm text-center rounded-tl-xl blur-[0.5px] bg-black/80">${item.property.price} <span className="text-yellow-400">/ {item.property.rent_duration}</span></p>   
            </div>
         
          <div className="flex  justify-between bg-black/50 blur-[0.3px] px-3 py-2 text-white">
              <span className='flex gap-2 items-center text-sm text-nowrap'><BsFillTagFill className='text-primaryColor '/> {item.property.property_type}</span>
              <span className='flex gap-2 items-center text-sm text-nowrap'> <FaUserAlt className='text-primaryColor '/> {item.property.agent_name}</span>
              <span className='flex gap-2 items-center text-sm text-nowrap'> <FaRegCalendarAlt className='text-primaryColor '/>{item.property.listed_date}</span>
            </div>
          </div>
         
         </div>
           <Link to={`/property/${item.property._id}`}  className=" block px-3 pb-10 ">
               
               <div className="  ">
               <p className="whitespace-nowrap overflow-hidden text-ellipsis font-bold text-xl mt-3">{item.property.title}</p>
               <p className="text-primaryColor py-3 font-semibold">{item.property.street} {""} {item.property.city}</p>
               <p className="text-md text-slate-500 text-justify mt-auto">{item.property.description}</p>
                                     
           </div> 
           <div className="absolute left-1/2 translate-x-[-50%] bottom-2 px-5 mx-auto  w-full flex justify-between ">
                
                <span className="text-md font-bold flex items-center gap-1 text-slate-500">
                < IoBedOutline className='text-lg'/> {item.property.bedrooms}
                </span>
                <span className="text-md font-bold flex items-center gap-1 text-slate-500">
                < MdOutlineSoupKitchen className='text-lg'/> {item.property.kitchen}
                </span>
                <span className="text-md font-bold flex items-center gap-1 text-slate-500">
                < PiGarage className='text-lg'/> {item.property.garage}
                </span>
                <span className="text-md font-bold flex items-center gap-1 text-slate-500">
                < PiGridNineLight className='text-lg'/> {item.property.property_area} SqFt
                </span>
                
                </div>            
           </Link>          
        </div>)}  
        </div>
        </>}
    </div>
  )
}

export default BookedProperty


/*

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4 grid-8">
       {properties && properties.map((item, index)=>
         <div  key={index} className='relative bg-slate-100 my-5 md:my-0 hover:shadow-2xl '>   
         <div  className="relative block h-72">
           <img src={item.property.images[0]} alt="" className='object-cover h-full w-full' />
    
           <div className="absolute top-0 flex justify-between w-full">
            <p className="bg-primaryColor/50  text-white text-md px-3 py-2 rounded-br-md">Hot Offer</p>
            <p className="bg-primaryColor/50  text-white text-md px-3 py-2 rounded-bl-md">{item.property.status}</p>
          </div>
         
          <div className='absolute bottom-0 w-full'>
            <div className="flex justify-between">
            <p className=" text-white py-3 px-2 cursor-pointer  text-center  blur-[0.5px] bg-black/80">
              <FaRegHeart onClick={()=>dispatch(addToFavorite(item))} /></p>   
              
            <p className="w-1/3 text-white ml-auto py-3 text-sm text-center rounded-tl-xl blur-[0.5px] bg-black/80">${item.property.price} <span className="text-yellow-400">/ {item.property.rent_duration}</span></p>   
            </div>
         
          <div className="flex  justify-between bg-black/50 blur-[0.3px] px-3 py-2 text-white">
              <span className='flex gap-2 items-center text-sm text-nowrap'><BsFillTagFill className='text-primaryColor '/> {item.property.property_type}</span>
              <span className='flex gap-2 items-center text-sm text-nowrap'> <FaUserAlt className='text-primaryColor '/> {item.property.agent_name}</span>
              <span className='flex gap-2 items-center text-sm text-nowrap'> <FaRegCalendarAlt className='text-primaryColor '/>{item.property.listed_date}</span>
            </div>
          </div>
         
         </div>
           <Link to={`/property/${item.property._id}`}  className=" block px-3 pb-10 ">
               
               <div className="  ">
               <p className="whitespace-nowrap overflow-hidden text-ellipsis font-bold text-xl mt-3">{item.property.title}</p>
               <p className="text-primaryColor py-3 font-semibold">{item.property.street} {""} {item.property.city}</p>
               <p className="text-md text-slate-500 text-justify mt-auto">{item.property.description}</p>
               {/* <p className="text-md font-semibold">{item.property.title}</p>                       
           </div> 
           <div className="absolute left-1/2 translate-x-[-50%] bottom-2 px-5 mx-auto  w-full flex justify-between ">
                
                <span className="text-md font-bold flex items-center gap-1 text-slate-500">
                < IoBedOutline className='text-lg'/> {item.property.bedrooms}
                </span>
                <span className="text-md font-bold flex items-center gap-1 text-slate-500">
                < MdOutlineSoupKitchen className='text-lg'/> {item.property.kitchen}
                </span>
                <span className="text-md font-bold flex items-center gap-1 text-slate-500">
                < PiGarage className='text-lg'/> {item.property.garage}
                </span>
                <span className="text-md font-bold flex items-center gap-1 text-slate-500">
                < PiGridNineLight className='text-lg'/> {item.property.property_area} SqFt
                </span>
                
                </div>            
           </Link>          
        </div>)}  
        </div>
        */
