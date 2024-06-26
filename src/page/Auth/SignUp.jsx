import React, { useState } from 'react'
import logo from '../../assets/logo 2.png'
import { useFormik } from 'formik'
import { signUpSchema } from '../../schema'
import { useSignupMutation } from '../../app/features/propertiesApiSlice'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import GoogleSignIn from '../../component/GoogleSignIn'



const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: ""
}
const SignUp = () => {
const  [signup] = useSignupMutation()
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()
  const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: async(values) => {
      console.log("🚀 ~ SignUp ~ values:", values)
      const {confirm_password, ...rest} = values;
      try {
        const result = await signup(rest)
        console.log(result?.data)        
        setLoading(false)
        navigate("/log-in")
        setLoading(false)
      } catch (error) {
        console.log(error?.message)
      }
      
    }
  })

  const user= useSelector(state=>state.user.user)
  
  console.log(user)
  return (
    <section className=' h-[85vh] bg-gradient-to-br from-blue-400 via-slate-200 to-green-400 md:px-0 px-5 flex items-center justify-center  '>
      <div className="mx-auto w-full max-w-[500px] rounded-2xl border bg-white/50  shadow-primaryColor/50 px-5 py-8 shadow-xl">
  <div className="h-10 w-14 my-2 mx-auto overflow-hidden ">
    <img
      src={logo}
      className="h-full  w-full object-cover"
      alt=""
    />
  </div>
  <h2 className=" text-xl text-center font-bold">
    Sign Up
  </h2>
  <form onSubmit={handleSubmit}>
    <input
      type="text"
      className=" px-2 w-full border-b bg-transparent border-blue-300 py-2 text-slate-700"
      placeholder="Name"
      autoComplete="off"
      name='name'
      onChange={handleChange}
      value={values.name}
      onBlur={handleBlur}
    />
    {errors.name && touched.name && <p className='text-red-600 text-sm'>{errors.name}</p>}
    <input
      type="email"
      className="my-2 px-2 w-full border-b bg-transparent border-blue-300 py-2 text-slate-700"
      autoComplete="off"
      name='email'
      placeholder="Email"
      onChange={handleChange}
      value={values.email}
      onBlur={handleBlur}
    />
    {errors.email &&  touched.email && <p className='text-red-600 text-sm'>{errors.email}</p>}

    <input
      type="password"
      className="my-2 px-2 w-full border-b bg-transparent border-blue-300 py-2 text-slate-700"
      placeholder="Password"
      autoComplete="off"
      name='password'
      value={values.password}
      onChange={handleChange}
      onBlur={handleBlur}
    />
    {errors.password &&  touched.password && <p className='text-red-600 text-sm'>{errors.password}</p>}

    <input
      type="password"
      className="my-2 px-2 w-full border-b bg-transparent border-blue-300 py-2 text-slate-400"
      placeholder="Confirm Password"
      autoComplete="off"
      name='confirm_password'
      value={values.confirm_password}
      onChange={handleChange}
      onBlur={handleBlur}
    />
    {errors.confirm_password && touched.confirm_password && <p className='text-red-600 text-sm pb-1'>{errors.confirm_password}</p>}

    <button className="w-full rounded-full bg-gradient-to-tr from-primaryColor to-slate-200 py-2 mt-5 text-xl  text-white font-semilight">
      {loading && "loading "}Join
    </button>
  </form>
  
  <GoogleSignIn />
</div>

    </section>
  )
}

export default SignUp