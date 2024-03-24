import React from 'react'
import { FaStar } from 'react-icons/fa'

const ReviewSection = () => {
  return (
    <div className='mb-10'>
        <div class="flex justify-between py-10">
    <div class="font-semibold flex items-center gap-1">
      <p>12 Reviews </p>
     <p className='flex text-md gap-1'>{
     [...Array(5).keys()].map((_, index)=> {
      index += 1
      return (<FaStar key={index} className='text-yellow-500'/>)
      }) 
    }</p>   
    <span class="font-light">  (2.58 out of 5)</span>       
    </div>
    <button class="bg-blue-600 px-4 py-2 text-white font-light">Leave a Review</button>
  </div>
        <div class="flex gap-4">
      <img src="https://demo01.houzez.co/wp-content/themes/houzez/img/profile-avatar.png" alt="" class="w-16 h-16 rounded-full"/>
      <div class="">
        <div className="flex gap-2 items-center">
        <h3>Lol</h3>
        <p className='flex text-md gap-1'>{
     [...Array(5).keys()].map((_, index)=> {
      index += 1
      return (<FaStar key={index} className='text-yellow-500'/>)
      }) 
    }</p> 
            </div> 
            
        <p>7 months ago</p>
        <p>lmao</p>
      </div>
    </div>
    </div>
  )
}

export default ReviewSection