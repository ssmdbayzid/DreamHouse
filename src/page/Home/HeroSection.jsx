import React from 'react'

const HeroSection = () => {
  return (
    <div className="relative">
 {/* ------------- Hero Section Start ---------------- */}
 <section className="relative bg-[url('https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=pexels-binyamin-mellish-186077.jpg&fm=jpg')] bg-cover bg-center bg-no-repeat">
    <div className="min-h-[90vh] w-full bg-black/40 flex flex-col  items-center justify-center">
     
      {/* ------------- Hero Section End ---------------- */}
 
    </div>
    <div className="absolute  -bottom-5 md:bottom-[15%] lg:bottom-[20%] translate-x-[-50%] left-1/2 w-full md:w-4/5  lg:w-3/5 mx-auto  p-8">
    <div className="">
       
        <h1 className="heading text-center text-white">
        Luxury Residence here <br />
          <span className="">Your Perfect Home</span>
        </h1>
        <p className='text-para  text-slate-200' >Whether you're looking to sell or let your home. we really are the people  for you to come to.</p>
      </div>
    <form
      action=""
      className=" bg-slate-200 mt-5 flex lg:flex-row p-4 lg:p-2 flex-col justify-canter gap-5 items-center  shadow-2xl rounded-md"
    >
      <div className="flex flex-col w-full lg::w-2/5">
        <label className="font-bold mb-2" htmlFor="location">
          Location
        </label>
        <input
          id="location"
          type="text"
          className="focus:outline focus:outline-slate-200 px-3 rounded-md py-2 text-md"
          placeholder="Enter an address, state, city, area or zip code"
        />
      </div>
      <div className="flex flex-col w-full lg:max-w-40">
        <label className="font-bold mb-2" htmlFor="type">
          Type
        </label>
        <select
          name="type"
          id="type"
          className="px-3 py-3 bg-slate-100 rounded-md border-none"
        >
          <option value="">Property type</option>
          <option value="retals">Retals</option>
          <option value="sales">Sales</option>
        </select>
      </div>
      <div className="flex flex-col w-full lg:max-w-40">
        <label className="font-bold mb-2" htmlFor="category">
          Category
        </label>
        <select
          name="category"
          id="category"
          className="px-3 py-3 bg-slate-100 rounded-md border-none"
        >
          <option value="">Category</option>
          <option value="apartment">Apartment</option>
          <option value="condos">Condos</option>
          <option value="duplexes">Duplexes</option>
          <option value="houses">Houses</option>
          <option value="villa's">Villa's</option>
        </select>
      </div>
      <button className="bg-primaryColor mt-auto w-full lg:w-1/3  py-3.5 rounded-full text-white font-semibold">
        Submit
      </button>
    </form>
   
  </div>
  </section>
  
  </div>
  )
}

export default HeroSection