import React from 'react'

const 
PropertyDetails = () => {
  return (
    <section className='section'>
    <div className='container'>
        
  <div className="md:px-0 px-4 mb-5 flex items-center justify-between">
    <div className="">
      <h1 className="text-2xl font-bold">Mountain View Retreat in Alpine</h1>
      <p className="text-slate-400">222 Serenity Lane, Alpine, CA 91901</p>
    </div>
    <div className="">
      <h1 className="text-2xl font-bold">$5000 / Week</h1>
      <p className="text-right text-slate-400">Price</p>
    </div>
  </div>
  <div className=" md:px-0 px-4 flex  max-w-[1170px] flex-col gap-3 md:flex-row">
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
  <div className="flex md:flex-row flex-col items-center gap-3">
    <div className="w-full md:w-2/3 md:px-0 px-4">
      <h1 className="text-3xl font-semibold mb-4">Description</h1>
      <p className="text-justify">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt illo
        delectus voluptate libero nulla enim veritatis ex iusto sed, molestias a
        nobis blanditiis perspiciatis consectetur et veniam quia eaque
        provident.
      </p>
      <div className="py-5 grid grid-cols-2 md:grid-cols-4 gap-5">
        <div>
          <p className="text-lg mb-3">&gt; Property Type</p>
          <h3 className="text-xl font-bold">Villa</h3>
        </div>
        <div>
          <p>&gt; Agent</p>
          <h3 className="text-xl font-bold">Aya Magdy</h3>
        </div>
        <div>
          <p>&gt; Listed</p>
          <h3 className="text-xl font-bold">7 Years Ago</h3>
        </div>
        <div>
          <p>&gt; Rent</p>
          <h3 className="text-xl font-bold">$410,000 / week</h3>
        </div>
        <div>
          <p>&gt; Bed</p>
          <h3 className="text-xl font-bold">2</h3>
        </div>
        <div>
          <p>&gt; Kitche</p>
          <h3 className="text-xl font-bold">1</h3>
        </div>
        <div>
          <p>&gt; Ware House</p>
          <h3 className="text-xl font-bold">1</h3>
        </div>
        <div>
          <p>&gt; Area</p>
          <h3 className="text-xl font-bold">6000 SqFt</h3>
        </div>
      </div>
    </div>
    <div className="w-full border  py-5 md:w-1/3 md:px-0 px-4">
      <h3 className="text-center text-3xl mb-3 font-bold text-blue-500">
        Schedule A Tour
      </h3>
      <form action="" className="px-4">
        <input
          type="text"
          placeholder="name"
          className="mb-3 w-full border px-3 py-3"
        />
        <input
          type="email"
          placeholder="email"
          className="mb-3 w-full border px-3 py-3"
        />
        <input
          type="number"
          minLength={5}
          placeholder="phone"
          className="mb-3 w-full border px-3 py-3"
        />
        <input
          type="text"
          placeholder="name"
          className="mb-3 w-full border px-3 py-3"
        />
        <button className="w-full rounded-md bg-blue-500 py-3 text-white">
          Schedule A Tour
        </button>
      </form>
    </div>
  </div>
    </div>
    </section>
  )
}

export default 
PropertyDetails