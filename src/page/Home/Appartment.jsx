import React from 'react'

const Appartment = () => {
  return (
    <section className='section'>
 <div className='container'>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10">
    <div className="flew overflow-hidden h-full">
      <div className="mb-5  md:h-1/2 h-full flex flex-col items-start justify-center">
      <h1 className='heading md:mr-auto mx-auto md:mx-0 '>Resident</h1> 
            <div className='flex w-28 mt-3 md:mb-5 mx-auto md:mx-0 justify-center md:justify-start'>
            <hr className='h-1 bg-black w-1/2' /> <hr className='h-1  bg-primaryColor w-1/2'/>
            </div> 
        <p className='text-center md:text-start text-para md:pr-3'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incidi dunt
        </p>
      </div>
      <div className="md:h-1/2 h-full relative">
        <img
          src="https://demo01.houzez.co/wp-content/uploads/2016/02/038-1170x785.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute top-0 h-full w-full bg-black/50 hover:bg-black/20">
  <div className="absolute top-5 mb-auto">
    <p className="pl-3 text-sm font-light text-white">13 Property</p>
    <p className="pl-3 text-xl font-normal text-white">13 Property</p>
  </div>
  <div className="absolute bottom-10">
    <p className="mt-5 pl-3 text-sm font-light text-white">13 Property</p>
    <p className="pl-3 text-xl font-normal text-white">13 Property</p>
  </div>
</div>

      </div>
    </div>
    <div className="h-full relative">
      <img
        src="https://demo01.houzez.co/wp-content/uploads/2016/02/038-1170x785.jpg"
        alt=""
        className="h-full object-cover"
      />
      <div className="absolute top-0 h-full w-full bg-black/50 hover:bg-black/20">
  <div className="absolute top-5 mb-auto">
    <p className="pl-3 text-sm font-light text-white">13 Property</p>
    <p className="pl-3 text-xl font-normal text-white">13 Property</p>
  </div>
  <div className="absolute bottom-5">
    <p className="mt-5 pl-3 text-sm font-light text-white">13 Property</p>
    <p className="pl-3 text-xl font-normal text-white">13 Property</p>
  </div>
</div>

    </div>
    <div className="flew">
      <div className="mb-5 relative">
        <img
          src="https://demo01.houzez.co/wp-content/uploads/2016/02/038-1170x785.jpg"
          alt=""
        />

<div className="absolute top-0 h-full w-full bg-black/50 hover:bg-black/20">
  <div className="absolute top-5 mb-auto">
    <p className="pl-3 text-sm font-light text-white">13 Property</p>
    <p className="pl-3 text-xl font-normal text-white">13 Property</p>
  </div>
  <div className="absolute bottom-5">
    <p className="mt-5 pl-3 text-sm font-light text-white">13 Property</p>
    <p className="pl-3 text-xl font-normal text-white">13 Property</p>
  </div>
</div>

      </div>
      <div className="relative">
        <img
          src="https://demo01.houzez.co/wp-content/uploads/2016/03/045-758x564.jpg"
          alt=""
        />
        <div className="absolute top-0 h-full w-full bg-black/50 hover:bg-black/20">
  <div className="absolute top-5 mb-auto">
    <p className="pl-3 text-sm font-light text-white">13 Property</p>
    <p className="pl-3 text-xl font-normal text-white">13 Property</p>
  </div>
  <div className="absolute bottom-5">
    <p className="mt-5 pl-3 text-sm font-light text-white">13 Property</p>
    <p className="pl-3 text-xl font-normal text-white">13 Property</p>
  </div>
</div>

      </div>
    </div>
    <div className=" flex flex-col items-start justify-center">
      <h1 className='heading md:mr-auto mx-auto md:mx-0 '>Resident</h1> 
            <div className='flex w-28 mt-3 mb-10 mx-auto md:mx-0 justify-center md:justify-start'>
            <hr className='h-1 bg-black w-1/2' /> <hr className='h-1  bg-primaryColor w-1/2'/>
            </div> 
        <p className='text-para md:text-start text-center md:pr-3'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incidi dunt
        </p>
      </div>
      <div className="relative">
        <img
          src="https://demo01.houzez.co/wp-content/uploads/2016/02/038-1170x785.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute top-0 h-full w-full bg-black/50 hover:bg-black/20">
  <div className="absolute top-5 mb-auto">
    <p className="pl-3 text-sm font-light text-white">13 Property</p>
    <p className="pl-3 text-xl font-normal text-white">13 Property</p>
  </div>
  <div className="absolute bottom-10">
    <p className="mt-5 pl-3 text-sm font-light text-white">13 Property</p>
    <p className="pl-3 text-xl font-normal text-white">13 Property</p>
  </div>
</div>
      </div>
      <div className="relative">
        <img
          src="https://demo01.houzez.co/wp-content/uploads/2016/02/038-1170x785.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute top-0 h-full w-full bg-black/50 hover:bg-black/20">
  <div className="absolute top-5 mb-auto">
    <p className="pl-3 text-sm font-light text-white">13 Property</p>
    <p className="pl-3 text-xl font-normal text-white">13 Property</p>
  </div>
  <div className="absolute bottom-10">
    <p className="mt-5 pl-3 text-sm font-light text-white">13 Property</p>
    <p className="pl-3 text-xl font-normal text-white">13 Property</p>
  </div>
</div>
      </div>
  </div>
  </div>
  </section>
  )
}

export default Appartment