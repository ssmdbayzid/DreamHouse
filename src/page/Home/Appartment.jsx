import React from 'react'
import { IoArrowForwardOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';


const Appartment = () => {
  return (
    <section className='section'>
 <div className='container'>
  <div className="grid grid-cols-1  lg:grid-cols-3 gap-5 md:gap-10">
    <div className="flew overflow-hidden h-full">
      <div className="mb-5  md:h-1/2 h-full flex flex-col items-start justify-center">
      <h1 className='font-light text-4xl md:mr-auto mx-auto md:mx-0 '>Resident</h1> 
            <div className='flex w-28 mt-3 md:mb-5 mx-auto md:mx-0 justify-center md:justify-start'>
            <hr className='h-1 bg-black w-1/2' /> <hr className='h-1  bg-primaryColor w-1/2'/>
            </div> 
        <p className='text-center md:text-start text-para md:pr-3'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incidi dunt
        </p>
      </div>
      <Link to={`/properties?type=apartment`} >
       <div className="md:h-1/2 h-full relative">       
        <img
          src="https://demo01.houzez.co/wp-content/uploads/2020/03/205-1024x683.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute top-0 h-full w-full bg-black/50 hover:bg-black/20">
  <div className="absolute top-5 mb-auto">
    <p className="pl-3 text-sm font-light text-white">13 Property</p>
    <p className="pl-3 text-xl font-normal text-white">Appartment</p>
  </div>
  <div className="absolute px-5 bottom-10 flex w-full  items-center justify-between">
    <p className=" text-lg font-light text-white">More Details</p>
    <p className=" text-2xl font-normal text-white"><IoArrowForwardOutline /></p>
  </div>
    </div>
    </div>
      </Link>
    </div>

    <Link to={`/properties?type=studio`}>
    <div className="h-full relative">
      <img
        src="https://demo01.houzez.co/wp-content/uploads/2016/03/023-1024x768.jpg"
        alt=""
        className="h-full object-cover"
      />
      <div className="absolute top-0 h-full w-full bg-black/50 hover:bg-black/20">
  <div className="absolute top-5 mb-auto">
    <p className="pl-3 text-sm font-light text-white">13 Property</p>
    <p className="pl-3 text-xl font-normal text-white">Studio</p>
  </div>
  <div className="absolute px-5 bottom-5 flex w-full  items-center justify-between">
    <p className=" text-lg font-light text-white">More Details</p>
    <p className=" text-2xl font-normal text-white"><IoArrowForwardOutline /></p>
  </div>
</div>

    </div>
    </Link>
    <div className="flew">
      <div className="mb-5 relative">
        <img
          src="https://demo01.houzez.co/wp-content/uploads/2016/02/038-1170x785.jpg"
          alt=""
        />

  <Link  to={`/properties?type=single-family`}>
  <div className="absolute top-0 h-full w-full bg-black/50 hover:bg-black/20">
  <div className="absolute top-5 mb-auto">
    <p className="pl-3 text-sm font-light text-white">13 Property</p>
    <p className="pl-3 text-xl font-normal text-white">Single Family Home</p>
  </div>
  <div className="absolute px-5 bottom-5 flex w-full  items-center justify-between">
    <p className=" text-lg font-light text-white">More Details</p>
    <p className=" text-2xl font-normal text-white"><IoArrowForwardOutline /></p>
  </div>
</div>
</Link>
      </div>
    <Link to={`/properties?type=villa`}>
    <div className="relative">
        <img
          src="https://demo01.houzez.co/wp-content/uploads/2016/03/045-758x564.jpg"
          alt=""
        />
        <div className="absolute top-0 h-full w-full bg-black/50 hover:bg-black/20">
  <div className="absolute top-5 mb-auto">
    <p className="pl-3 text-sm font-light text-white">13 Property</p>
    <p className="pl-3 text-xl font-normal text-white">Villa</p>
  </div>
  <div className="absolute px-5 bottom-10 flex w-full  items-center justify-between">
    <p className=" text-lg font-light text-white">More Details</p>
    <p className=" text-2xl font-normal text-white"><IoArrowForwardOutline /></p>
  </div>
</div>

      </div>
      </Link>
    </div>
    <div className=" flex flex-col items-start justify-center">
    <h1 className='font-light text-4xl md:mr-auto mx-auto md:mx-0 '>Commercial</h1> 
            <div className='flex w-28 mt-3 mb-10 mx-auto md:mx-0 justify-center md:justify-start'>
            <hr className='h-1 bg-black w-1/2' /> <hr className='h-1  bg-primaryColor w-1/2'/>
            </div> 
        <p className='text-para md:text-start text-center md:pr-3'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incidi dunt
        </p>
      </div>
      <Link to={`/properties?type=office`}>
      <div className="relative">
        <img
          src="https://demo01.houzez.co/wp-content/uploads/2016/03/206-1024x683.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute top-0 h-full w-full bg-black/50 hover:bg-black/20">
  <div className="absolute top-5 mb-auto">
    <p className="pl-3 text-sm font-light text-white">13 Property</p>
    <p className="pl-3 text-xl font-normal text-white">Office</p>
  </div>
  <div className="absolute px-5 bottom-5 flex w-full  items-center justify-between">
    <p className=" text-lg font-light text-white">More Details</p>
    <p className=" text-2xl font-normal text-white"><IoArrowForwardOutline /></p>
  </div>
</div>
      </div>
      </Link>
     
     <Link to={`/properties?type=market`}>
      <div className="relative">
        <img
          src="https://demo01.houzez.co/wp-content/uploads/2016/03/203-1024x683.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
    <div className="absolute top-0 h-full w-full bg-black/50 hover:bg-black/20">
  <div className="absolute top-5 mb-auto">
    <p className="pl-3 text-sm font-light text-white">13 Property</p>
    <p className="pl-3 text-xl font-normal text-white">Market</p>
  </div>
  <div className="absolute px-5 bottom-5 flex w-full  items-center justify-between">
    <p className=" text-lg font-light text-white">More Details</p>
    <p className=" text-2xl font-normal text-white"><IoArrowForwardOutline /></p>
  </div>
</div>
      </div>
      </Link>
  </div>
  </div>
  </section>
  )
}

export default Appartment