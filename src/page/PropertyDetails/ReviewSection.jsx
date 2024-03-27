import React from 'react'
import { FaStar } from 'react-icons/fa'

const ReviewSection = ({reviews}) => {
  return (
    <div className='my-10 '>
      <p className='text-xl pb-5'>Reviews</p>
        <div class="flex justify-between pb-10">
    <div class="font-semibold flex md:flex-row flex-col items-center gap-1">
      <p>12 Reviews </p>
     <p className='flex text-md gap-1'>{
     [...Array(5).keys()].map((_, index)=> {
      index += 1
      return (<FaStar key={index} className='text-yellow-500'/>)
      }) 
    }</p>   
    <span class="font-light">  (2.58 out of 5)</span>       
    </div>
    
  </div>
          {reviews && reviews.map((review, index)=>
          <div key={index} class="flex gap-4 mb-5">
          <img src="https://demo01.houzez.co/wp-content/themes/houzez/img/profile-avatar.png" alt="" class="w-16 h-16 rounded-full"/>
          <div class="">
            <div className="flex md:flex-row gap-2 items-center">
            <h3 className='font-semibold'>{review.name}</h3>
            <p className='flex text-md gap-1'>{
        [...Array(review.rating).keys()].map((_, index)=> {
          index += 1
          return (<FaStar key={index} className='text-yellow-500'/>)
          }) 
        }</p> 
            </div>             
        <p>7 months ago</p>
        <p>{review.review}</p>
      </div>
    </div>)}
    </div>
  )
}

export default ReviewSection