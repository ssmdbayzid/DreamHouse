import React, { useEffect, useState } from 'react'
import { BsFillTagFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoBedOutline } from "react-icons/io5";
import { MdOutlineSoupKitchen } from "react-icons/md";
import { PiGarage } from "react-icons/pi";
import { PiGridNineLight } from "react-icons/pi";
import { FaDollarSign } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import { useGetPropertyQuery } from '../../app/features/propertiesApiSlice';
import Loader from '../../hooks/Loader';
import Map from '../../component/Map';
import { IoIosArrowDropright } from "react-icons/io";
import ScheduleForm from './ScheduleForm';

import LeaveReviewForm from './LeaveReviewForm';
import ReviewSection from './ReviewSection';
const PropertyDetails = () => {
  const {id} = useParams()
  const [loading, setLoading] = useState(false);
  const [property, setProperty] = useState(null)
  const {data, isLoading} = useGetPropertyQuery(id)


  

  

  useEffect(()=>{
   
    if(isLoading){
      setLoading(true)
    } if(data){
      console.log(data?.data)
      setProperty(data?.data)    
      setLoading(false)
    }
},[data])
  


  return (
    <section className='section bg-accent'>
    <div className='container'>
    {
      loading ? <Loader /> 
      : 
      <>
    <div className="px-4 md:py-5 mb-5 bg-white rounded-md  flex items-center justify-between">
    <div className="">
      <h1 className="text-2xl font-bold">{property?.title}</h1>
      <p className="text-slate-400">{property?.location}</p>
    </div>
    <div className="">
      <h1 className="text-2xl font-bold capitalize">${property?.rent} / {property?.postfix}</h1>
      <p className="text-right text-slate-400">Price</p>
    </div>
  </div>
  <div className=" md:px-0 px-4 flex  flex-col gap-3 md:flex-row">
    <div className="w-full  md:w-2/3">
      <img
        src="https://housing.com/news/wp-content/uploads/2022/11/shutterstock_1715891752-1200x700-compressed.jpg"
        className="h-full w-full object-center"
        alt=""
      />
    </div>
    <div className="flex h-24 flex-row gap-3 md:h-full md:w-1/3 md:flex-col">
      <img
        src="https://assets-news.housing.com/news/wp-content/uploads/2020/05/04190400/17-fabulous-bedroom-decor-ideas-FB-1200x700-compressed.jpg"
        className="h-full w-1/2 object-center md:w-full"
        alt=""
      />
      <img
        src="https://i.pinimg.com/originals/0c/74/f9/0c74f93ab8b1b2df7b12eea64693a2a5.png"
        className="h-full w-1/2 object-center md:w-full"
        alt=""
      />
    </div>
  </div>
  <div className="flex md:flex-row flex-col mt-10 gap-3">
    <div className="w-full md:w-2/3 md:px-0 px-4">
    <div className="bg-white px-5 py-10 rounded-md">
      <div className="flex items-center justify-between ">
        <h3 className='text-lg font-bold'>Overview</h3>
        <p className='font-bold'>Property ID: <span className='font-normal'>{property?._id}</span> </p>
      </div>
    <div className="py-5 grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-5">
        <div className=''>
          <p className="flex items-center text-slate-500 gap-2 text-md  mb-2"><BsFillTagFill /> Property Type</p>
          <h3 className="text-md text-slate-600 font-bold pl-5 capitalize">{property?.propertyType}</h3>
        </div>
        <div className=''>
          <p className='flex items-center gap-2 mb-4 text-slate-500 text-md '><FaUserAlt /> Agent</p>
          <h3 className="text-md text-slate-600 font-semibold pl-5">{property?.propertyAgent}</h3>
        </div>
        <div className=''>
          <p className='flex items-center gap-2 mb-4 text-slate-500 text-md '><FaRegCalendarAlt /> Listed</p>
          <h3 className="text-md text-slate-600 font-semibold pl-5">{property?.propertyDate}</h3>
        </div>
        <div className=''>
          <p className='flex items-center gap-2 mb-4 text-slate-500 text-md '><FaDollarSign /> Rent</p>
          <h3 className="text-md text-slate-600 font-semibold pl-5">${property?.rent} / {property?.postfix}</h3>
        </div>
        <div className=''>
          <p className='flex items-center gap-2 mb-4 text-slate-500 text-md '><IoBedOutline /> Bed</p>
          <h3 className="text-md text-slate-600 font-semibold pl-5">{property?.bed}</h3>
        </div>
        <div className=''>
          <p className='flex items-center gap-2 mb-4 text-slate-500 text-md '><MdOutlineSoupKitchen /> Kitche</p>
          <h3 className="text-md text-slate-600 font-semibold pl-5">{property?.kitchen}</h3>
        </div>
        <div className=''>
          <p className='flex items-center gap-2 mb-4 text-slate-500 text-md '><PiGarage /> Ware House</p>
          <h3 className="text-md text-slate-600 font-semibold pl-5">1</h3>
        </div>
        <div className=''>
          <p className='flex items-center gap-2 mb-4 text-slate-500 text-md '><PiGridNineLight /> Area</p>
          <h3 className="text-md text-slate-600 font-semibold pl-5">{property?.sqFt} SqFt</h3>
        </div>
      </div>
      </div>  
      <div className="px-5 py-5 bg-white rounded-md mt-10">
      <h1 className="text-xl font-semibold mb-4">Description</h1>
      <p className="text-justify font-light">
      {property?.description}  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt illo
        delectus voluptate libero nulla enim veritatis ex iusto sed, molestias a
        nobis blanditiis perspiciatis consectetur et veniam quia eaque
        provident.
      </p>   
      </div>
     
     <div className="mt-10 px-5 py-5 bg-white">
      <div className="flex items-center justify-between pb-5">
        <h1 className='text-xl'>Address:</h1>
        <button className='bg-primaryColor py-2 px-4 text-white'>Google Map</button>
      </div>
      <hr className='h-2'/>
      <div className="flex  flex-col md:flex-row justify-between gap-5">
        <div className="w-full md:w-1/2">
          <div className="mb-2 flex items-center justify-between">
          <h2 className='font-bold'>Address</h2>
          <p className='font-light'>8100 S Ashland Ave</p>          
          </div>
          <hr />
          <div className="mb-2 flex items-center justify-between">
          <h2 className='font-bold'>City</h2>
          <p className='font-light'>Chicago</p>
          </div>
          <hr />

          <div className="mb-2 flex items-center justify-between">
          <h2 className='font-bold'>State/county</h2>
          <p className='font-light'>Illinois</p>
          </div>       
          <hr />

        </div>
        <div className="w-full md:w-1/2">
        
          <div className="mb-2 flex items-center justify-between">
          <h2 className='font-bold'>Zip/Postal Code</h2>
          <p className='font-light'>60620</p>
          </div>
          <hr />

          <div className="mb-2 flex items-center justify-between">
          <h2 className='font-bold'>Area</h2>
          <p className='font-light'>Beverly</p>
          </div>
          <hr />

          <div className="mb-2 flex items-center justify-between">
          <h2 className='font-bold'>Country</h2>
          <p className='font-light'>United States</p>
          </div>         
          <hr />
        </div>
        </div>
      </div>     

      <div className="bg-white mt-10 px-5 py-5 rounded-md">
      <p className='text-xl  mb-5'>Features</p> 
    <div class="flex flex-wrap items-center justify-start md:justify-between  w-full">
    <div>
    <p className='flex items-center gap-2 mb-4 text-slate-500'> <IoIosArrowDropright className='text-xl' /> Air Conditioning</p>
    <p className='flex items-center gap-2 mb-4 text-slate-500'> <IoIosArrowDropright className='text-xl' /> Barbeque</p>
    <p className='flex items-center gap-2 mb-4 text-slate-500'> <IoIosArrowDropright className='text-xl' /> Dryer</p>
    <p className='flex items-center gap-2 mb-4 text-slate-500'> <IoIosArrowDropright className='text-xl' /> Gym</p>
    <p className='flex items-center gap-2 mb-4 text-slate-500'> <IoIosArrowDropright className='text-xl' /> Washer</p>

    </div>
    <div class="">
    <p className='flex items-center gap-2 mb-4 text-slate-500'> <IoIosArrowDropright className='text-xl' /> Laundry</p>
    <p className='flex items-center gap-2 mb-4 text-slate-500'> <IoIosArrowDropright className='text-xl' /> Lawn</p>
    <p className='flex items-center gap-2 mb-4 text-slate-500'> <IoIosArrowDropright className='text-xl' /> Microwave</p>
    <p className='flex items-center gap-2 mb-4 text-slate-500'> <IoIosArrowDropright className='text-xl' /> Outdoor Shower</p>
    <p className='flex items-center gap-2 mb-4 text-slate-500'> <IoIosArrowDropright className='text-xl' /> WiFi</p>
    </div>
    <div class="">
    <p className='flex items-center gap-2 mb-4 text-slate-500'> <IoIosArrowDropright className='text-xl' /> Refrigerator</p>
    <p className='flex items-center gap-2 mb-4 text-slate-500'> <IoIosArrowDropright className='text-xl' /> Sauna</p>
    <p className='flex items-center gap-2 mb-4 text-slate-500'> <IoIosArrowDropright className='text-xl' /> Swimming Pool</p>
    <p className='flex items-center gap-2 mb-4 text-slate-500'> <IoIosArrowDropright className='text-xl' /> TV Cable</p>
    <p className='flex items-center gap-2 mb-4 text-slate-500'> <IoIosArrowDropright className='text-xl' /> Window Coverings</p>
    </div>
    </div>    
      </div>
      <ReviewSection />
      
  <LeaveReviewForm />
    </div>
    <div className="w-full py-5 border md:w-1/3 md:px-0 px-4">
          
     <ScheduleForm />
    </div>
  </div>
      </>
    }  
    {/* <Map location="sasdfsdf" city="city" country="country" /> */}
    </div>
    </section>
  )
}

export default 
PropertyDetails