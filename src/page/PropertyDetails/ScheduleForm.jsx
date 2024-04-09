import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { bookingSchema } from '../../schema';
import { useBookingPropertyMutation } from '../../app/features/propertiesApiSlice';
import { useFormik } from 'formik';
import {useSelector} from 'react-redux'
import {toast} from "react-toastify"


const initialValues = {
  name: '',
  email: '',
  phone: '',
  date: ''
};
const ScheduleForm = () => {
  const [bookingProperty] = useBookingPropertyMutation()
  const [loading, setLoading] = useState(false)
  const {id} = useParams()
 
  const user = useSelector(state=>state.user.user);
  const navigate = useNavigate()
  
  const {values, errors, touched, setValues, handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues: initialValues,
    validationSchema: bookingSchema,
    onSubmit: async (values) => {
      if(!user){
        toast.error("Log in first")
        return navigate("/log-in")

      } 
      console.log("🚀 ~ onSubmit:async ~ values:", values)      
      setLoading(true)
      try {
        const result = await bookingProperty({...values, id, userId: user?._id})
        console.log("🚀 ~ onSubmit:async ~ result:", result)
        setLoading(false)
      } catch (error) {
        console.log("🚀 ~ onSubmit:async ~ error:", error.message)      
        setLoading(false)
      } 
    }
  })

  
  useEffect(()=>{
    if(user){
      setValues({...values, name: user?.name, email: user?.email})
    }
  },[user])
 


  return (
    <div>
         <h3 className="text-center text-3xl mb-3 font-bold text-blue-500">
        Schedule A Tour
      </h3>
      <form onSubmit={handleSubmit} className="px-4">
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="name"
          className="mb-3 w-full border px-3 py-3"
        />
         {errors.name && touched.name && 
     <p className='text-red-600 text-sm pb-1'>{errors.name}</p>}
        <input
          type="email"  
          name="email"        
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="email"
          className="mb-3 w-full border px-3 py-3"
        />
          {errors.email && touched.email && 
     <p className='text-red-600 text-sm pb-1'>{errors.email}</p>}
        <input
          type="number"
          name="phone"
          
          value={values.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="phone"
          className="mb-3 w-full border px-3 py-3"
        />
          {errors.phone && touched.phone && 
     <p className='text-red-600 text-sm pb-1'>{errors.phone}</p>}
        <input
          type="date"
          name="date"
          value={values.date}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="name"
          className="mb-3 w-full border px-3 py-3"
        />
         {errors.date && touched.date && 
     <p className='text-red-600 text-sm pb-1'>{errors.date}</p>}
        <button 
        type='submit'
        className="w-full rounded-md bg-blue-500 py-3 text-white">
          {loading && "loading.. "}Schedule A Tour
        </button>
      </form>
    </div>
  )
}

export default ScheduleForm