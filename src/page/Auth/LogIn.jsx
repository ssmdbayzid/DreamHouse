import React, { useState } from 'react'
import logo from '../../assets/logo 2.png'
import { useFormik } from 'formik'
import { loginSchema } from '../../schema'
import { useLoginMutation } from '../../app/features/propertiesApiSlice'
import { useDispatch } from 'react-redux'
import { setUser } from '../../app/features/userSlice'

import { useNavigate } from 'react-router-dom'
import GoogleSignIn from '../../component/GoogleSignIn'



const initialValues = {
  email: "",
  password: ""
}

const LogIn = () => {
  const [login] = useLoginMutation()
  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch()
  const navigate = useNavigate()
const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
  initialValues: initialValues,
  validationSchema: loginSchema,
  onSubmit: async(values) => {
    console.log("🚀 ~ LogIn ~ value:", values)    
    setLoading(true)
    try {
      const result = await login(values)
      console.log(result?.data)
      dispatch(setUser(result?.data?.user))
      setLoading(false)
      navigate("/")
    } catch (error) {
      console.log(error?.message)
    }

  }
})


  return (
    <section className='min-h-screen bg-gradient-to-br from-blue-400 via-slate-200 to-green-400 md:px-0 px-5 flex items-center justify-center  '>
      <div className="mx-auto w-full max-w-[500px] rounded-2xl border bg-white/50 px-5 my-4 py-4  shadow-primaryColor/50  shadow-xl">
  <div className="h-10 w-14 my-2 mx-auto overflow-hidden ">
    <img
      src={logo}
      className="h-full  w-full object-cover"
      alt=""
    />
  </div>
  <h2 className=" text-xl text-center font-bold mb-4">
    Hello! Welcome <span>Back</span>
  </h2>
  <form onSubmit={handleSubmit}>
    <input
      type="email"
      className="mb-5 w-full border-b bg-transparent border-blue-300 py-2 text-slate-900 px-2"
      placeholder="Email"
      autoComplete="off"
      name="email"
      value={values.email}
      onChange={handleChange}
      onBlur={handleBlur}
    />
     {errors.email && touched.email && 
     <p className='text-red-600 text-sm pb-1'>{errors.email}</p>}
    <input
      type="password"
      className="mb-5 w-full border-b bg-transparent border-blue-300 py-2 text-slate-900 px-2"
      placeholder="Password"
      autoComplete="off"
      name='password'
      value={values.password}
      onChange={handleChange}
      onBlur={handleBlur}
    />
      {errors.password && touched.password && <p className='text-red-600 text-sm pb-1'>{errors.password}</p>}
    <button  className="w-full rounded-full bg-gradient-to-tr from-primaryColor to-white py-2 text-xl  text-white font-bold">
     {loading && "loading..."} Log In
    </button>
  </form>
  <GoogleSignIn />
</div>

    </section>
  )
}

export default LogIn
