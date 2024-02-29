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


const propertyData = [
  {
    "title": "Mountain View Retreat in Alpine",
    "location": "222 Serenity Lane, Alpine, CA 91901",
    "img": "https://example.com/mountain-retreat-image.jpg",
    "description": "Escape to this peaceful mountain retreat featuring five bedrooms, a spacious deck, and stunning views of the surrounding natural beauty.",
    "rent": 2800,
    "postfix": "week",
    "propertyType": "house",
    "propertyAgent": "Daniel Walker",
    "propertyDate": "5 years ago",
    "bed": 5,
    "kitchen": 3,
    "garage": 2,
    "sqFt": 700
  },
  {
    "title": "Cozy Townhouse in Pacific Beach",
    "location": "789 Shoreline Lane, Pacific Beach, CA 92108",
    "img": "https://example.com/townhouse-image.jpg",
    "description": "Charming townhouse with a private patio, updated kitchen, and easy access to the vibrant Pacific Beach scene. Perfect for those seeking a relaxed coastal lifestyle.",
    "rent": 2200,
    "postfix": "week",
    "propertyType": "townhouse",
    "propertyAgent": "Emily White",
    "propertyDate": "6 years ago",
    "bed": 2,
    "kitchen": 1,
    "garage": 1,
    "sqFt": 600
  },
  {
    "title": "Penthouse Living in Downtown San Diego",
    "location": "555 Skyline Tower, San Diego, CA 92102",
    "img": "https://example.com/penthouse-image.jpg",
    "description": "Experience the epitome of luxury in this stunning penthouse with floor-to-ceiling windows, modern amenities, and breathtaking skyline views.",
    "rent": 4500,
    "postfix": "week",
    "propertyType": "penthouse",
    "propertyAgent": "Carlos Martinez",
    "propertyDate": "1 year ago",
    "bed": 3,
    "kitchen": 2,
    "garage": 2,
    "sqFt": 1000
  },
  {
    "title": "Spacious Beachfront House in La Jolla",
    "location": "101 Ocean Drive, La Jolla, CA 92037",
    "img": "https://example.com/beachfront-house-image.jpg",
    "description": "Enjoy the ultimate coastal lifestyle in this spacious beachfront house. Panoramic ocean views, private beach access, and a gourmet kitchen make this home truly exceptional.",
    "rent": 5000,
    "postfix": "week",
    "propertyType": "house",
    "propertyAgent": "Olivia Garcia",
    "propertyDate": "4 years ago",
    "bed": 6,
    "kitchen": 4,
    "garage": 3,
    "sqFt": 800
  },
  {
    "title": "Modern Condo with City Views",
    "location": "789 Urban Avenue, San Diego, CA 92104",
    "img": "https://example.com/modern-condo-image.jpg",
    "description": "Contemporary condo offering stunning city views, high-end appliances, and a luxurious living experience. Urban living at its finest.",
    "rent": 2800,
    "postfix": "week",
    "propertyType": "condo",
    "propertyAgent": "Elena Rodriguez",
    "propertyDate": "2 years ago",
    "bed": 2,
    "kitchen": 1,
    "garage": 1,
    "sqFt": 600
  },
  {
    "title": "Charming Family Home in Downtown San Diego",
    "location": "456 Downtown Street, San Diego, CA 92103",
    "img": "https://example.com/charming-home-image.jpg",
    "description": "Lovely family home featuring a cozy atmosphere, three bedrooms, and a spacious backyard. Perfect for creating lasting memories.",
    "rent": 1800,
    "postfix": "week",
    "propertyType": "house",
    "propertyAgent": "John Johnson",
    "propertyDate": "3 years ago",
    "bed": 3,
    "kitchen": 2,
    "garage": 1,
    "sqFt": 400
  },
  {
    "title": "Luxury Villa with Ocean View",
    "location": "123 Oceanfront Drive, San Diego, CA 92101",
    "img": "https://example.com/luxury-villa-image.jpg",
    "description": "Experience luxury living in this exquisite villa overlooking the ocean. Spacious rooms, modern kitchen, and breathtaking views await you.",
    "rent": 3500,
    "postfix": "week",
    "propertyType": "villa",
    "propertyAgent": "Grace Thompson",
    "propertyDate": "5 years ago",
    "bed": 4,
    "kitchen": 2,
    "garage": 3,
    "sqFt": 700
  },
  {
    "title": "Villa in 2639 Grand Ave San Diego",
    "location": "2639 Grand Ave San Diego, CA 92109",
    "img": "https://homepress.stylemixthemes.com/main/wp-content/uploads/sites/3/2021/03/alberto-castillo-q-mx4mSkK9zeo-unsplash-min-min-760x510.jpg",
    "description": "Pantastic One Bedroom Facing East In This Amazing Trump Place Doorman Building. There Is A Large Kitchen, Washer And Dryer, Great Light.",
    "rent": 2000,
    "postfix": "week",
    "propertyType": "villa",
    "propertyAgent": "Aye Magdy",
    "propertyDate": "7 years ago",
    "bed": 5,
    "kitchen": 3,
    "garage": 2,
    "sqFt": 500
  }    
]





const Featured = () => {
  return (
    <section className='section bg-white'>
    <div className="container ">      
    <p className='text-primaryColor text-center'>Our Featured Properties For Sale and Rent</p>
      <p className='heading text-center '>Properties For Sale & Rent</p>      
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
          <p class="bg-primaryColor/50  text-white text-md px-3 py-2 rounded-bl-md">For Sale</p>
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

export default Featured