import { useFormik } from 'formik';
import React, { useState } from 'react'
import { reviewSchema } from '../../schema';
import { useAddCommentMutation } from '../../app/features/propertiesApiSlice';
import { useParams } from 'react-router-dom';



const initialValues = {
  name: '',
  email: '',
  rating: '',
  review: ''
};
const LeaveReviewForm = () => {
const [loading, setLoading] = useState(false);
const [addComment ] = useAddCommentMutation()

const {id} = useParams()

const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
  initialValues: initialValues,
  validationSchema: reviewSchema,
  onSubmit: async (values) => {
    console.log("🚀 ~ onSubmit:async ~ values:", values)      
    setLoading(true)
    try {
      const result = await addComment({...values, id})
      console.log("🚀 ~ onSubmit:async ~ result:", result)
      setLoading(false)
    } catch (error) {
      console.log("🚀 ~ onSubmit:async ~ error:", error.message)      
      setLoading(false)
    } 
  }
})

  return (
    <div className='sticky bg-white px-4 md:px-10 py-10'>
      <p className='text-xl text-slate-900 font-semibold pb-5'>Leave A Review</p>
      <hr />

      <form onSubmit={handleSubmit} className='mt-4'>
       <div className=" mb-2">
       <label htmlFor="name" className='font-light text-lg'>Name</label>
        <input 
        type="text" 
        name="name" 
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder='Your Name'
        id="name" className='w-full  bg-accent/80 py-2 px-4 mt-4 outline outline-1'/>
         {errors.name && touched.name && 
     <p className='text-red-600 text-sm pb-1'>{errors.name}</p>}
       </div>
       <div className=" mb-2">
       <label htmlFor="email" className='font-light text-lg'>Email</label>
        <input 
        type="email" 
        name="email" 
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder='Your Email'
        id="email" className='w-full  bg-accent/80 py-2 px-4 mt-4 outline outline-1'/>
         {errors.email && touched.email && 
     <p className='text-red-600 text-sm pb-1'>{errors.email}</p>}
       </div>
       
       <div className="w-full">
       <label htmlFor="rating" className='font-light text-lg'>Rating</label>
       
        <select 
        type="number" 
        name="rating" 
        value={values.rating}
        onChange={handleChange}
        onBlur={handleBlur}
        id="rating" 
        placeholder='Number of Rating'
        className='w-full  bg-accent/80 py-2 px-4 mt-4 outline outline-1'>
        <option value="" disabled="" selected="">
            Select rating
          </option>
          <option value={1}>1 Rating - Poor</option>
          <option value={2}>2 Rating - Fair</option>
          <option value={3}>3 Rating - Average</option>
          <option value={4}>4 Rating - Good</option>
          <option value={5}>5 Rating - Excellent</option>              
        </select>
        {errors.rating && touched.rating && 
     <p className='text-red-600 text-sm pb-1'>{errors.rating}</p>}
       </div>    

       <div className=" my-2">
       <label htmlFor="review" className='font-light text-lg'>Review</label>
        <textarea row={15} 
        type="text" 
        name="review" 
        value={values.review}
        onChange={handleChange}
        onBlur={handleBlur}
        id="review" 
        placeholder='Your Review'
        className='w-full  bg-accent/80 py-2 px-4 mt-4 outline outline-1'/>
         {errors.review && touched.review && 
     <p className='text-red-600 text-sm pb-1'>{errors.review}</p>}
       </div>
      
      <button 
      type='submit'
      className='bg-primaryColor bg-opacity-80 text-lg px-4 py-2 rounded-md text-white font-light'>
        {loading && "loading... "}Submit Review</button>
        
      </form>
    </div>
  )
}

export default LeaveReviewForm