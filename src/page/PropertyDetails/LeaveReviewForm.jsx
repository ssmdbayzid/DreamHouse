import React from 'react'

const LeaveReviewForm = () => {
  return (
    <div className='bg-white px-4 md:px-10 py-10'>
      <p className='text-xl font-light pb-5'>Leave A Review</p>
      <hr />

      <form action="" className='mt-4'>
       <div className=" mb-2">
       <label htmlFor="email" className='font-light text-lg'>Email</label>
        <input type="text" name="" id="email" className='w-full  bg-accent/80 py-2 px-4 mt-4 outline outline-1'/>
       </div>
       <div className="flex justify-between gap-5">
       <div className="w-full">
       <label htmlFor="email" className='font-light text-lg'>Title</label>
        <input type="text" name="" id="email" className='w-full  bg-accent/80 py-2 px-4 mt-4 outline outline-1'/>
       </div>

       <div className="w-full">
       <label htmlFor="email" className='font-light text-lg'>Rating</label>
        <input type="text" name="" id="email" className='w-full  bg-accent/80 py-2 px-4 mt-4 outline outline-1'/>
       </div>       
       </div>
       <div className=" my-2">
       <label htmlFor="email" className='font-light text-lg'>Review</label>
        <textarea row={15} type="text" name="" id="email" className='w-full  bg-accent/80 py-2 px-4 mt-4 outline outline-1'/>
       </div>
      
      <button className='bg-primaryColor bg-opacity-80 text-lg px-4 py-2 rounded-md text-white font-light'>Submit Review</button>
        
      </form>
    </div>
  )
}

export default LeaveReviewForm