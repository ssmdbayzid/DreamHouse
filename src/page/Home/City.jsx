import React from 'react'

const City = () => {
  return (
    <section className="section bg-accent">
      <div className='container'>
  <grid className=" grid md:grid-cols-4 items-center gap-6 px-4">
    <div className="">
    <div className='text-center md:text-left '>
            <h1 className='heading'>Resident</h1> 
            <div className='flex w-28 mt-3 mb-10 mx-auto md:mx-0 justify-center md:justify-start'>
            <hr className='h-1 bg-black w-1/2' /> <hr className='h-1  bg-primaryColor w-1/2'/>
            </div> 
           
            </div>
      <p className="font-light text-xl text-justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incidi dunt
      </p>
    </div>
    <div className="relative h-full w-full">
      <img
        src="https://images.adsttc.com/media/images/5235/006a/e8e4/4eef/7900/002e/medium_jpg/empire.jpg?1379205215"
        className="h-full w-full object-cover hover:saturate-200"
        alt=""
        srcSet=""
      />
      <div className="absolute top-0 w-full bg-gradient-to-b from-black/10">
        <p className="pt-5 text-center font-light text-white">13 Properties</p>
        <h3 className="text-center text-2xl font-light text-white">Cicago</h3>
      </div>
      <div className="absolute bottom-0 flex w-full items-center justify-between bg-gradient-to-t from-black/80 px-10 pb-2">
        <p className="text-center text-2xl font-light text-white">Details</p>
        <h3 className="text-center text-2xl font-light text-white w-12 bg-blue-600 flex items-center justify-center">
          {" "}
          &gt;&gt;
        </h3>
      </div>
    </div>
    <div className="relative h-full w-full">
      <img
        src="https://images.adsttc.com/media/images/5235/006a/e8e4/4eef/7900/002e/medium_jpg/empire.jpg?1379205215"
        className="h-full w-full object-cover hover:saturate-200"
        alt=""
        srcSet=""
      />
      <div className="absolute top-0 w-full bg-gradient-to-b from-black/10">
        <p className="pt-5 text-center font-light text-white">13 Properties</p>
        <h3 className="text-center text-2xl font-light text-white">Cicago</h3>
      </div>
      <div className="absolute bottom-0 flex w-full items-center justify-between bg-gradient-to-t from-black/80 px-10 pb-2">
        <p className="text-center text-2xl font-light text-white">Details</p>
        <h3 className="text-center text-2xl font-light text-white w-12 bg-blue-600 flex items-center justify-center">
          {" "}
          &gt;&gt;
        </h3>
      </div>
    </div>
    <div className="relative h-full w-full">
      <img
        src="https://images.adsttc.com/media/images/5235/006a/e8e4/4eef/7900/002e/medium_jpg/empire.jpg?1379205215"
        className="h-full w-full object-cover hover:saturate-200"
        alt=""
        srcSet=""
      />
      <div className="absolute top-0 w-full bg-gradient-to-b from-black/10">
        <p className="pt-5 text-center font-light text-white">13 Properties</p>
        <h3 className="text-center text-2xl font-light text-white">Cicago</h3>
      </div>
      <div className="absolute bottom-0 flex w-full items-center justify-between bg-gradient-to-t from-black/80 px-10 pb-2">
        <p className="text-center text-2xl font-light text-white">Details</p>
        <h3 className="text-center text-2xl font-light text-white w-12 bg-blue-600 flex items-center justify-center">
          {" "}
          &gt;&gt;
        </h3>
      </div>
    </div>
  </grid>
  </div>
</section>

  )
}

export default City