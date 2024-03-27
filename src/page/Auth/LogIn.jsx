import React, { useState } from 'react'
import logo from '../../assets/logo 2.png'
import { useFormik } from 'formik'
import { loginSchema } from '../../schema'
import { useLoginMutation } from '../../app/features/propertiesApiSlice'



const initialValues = {
  email: "",
  password: ""
}

const LogIn = () => {
  const [login] = useLoginMutation()
  const [loading, setLoading] = useState(false)
const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
  initialValues: initialValues,
  validationSchema: loginSchema,
  onSubmit: async(values) => {
    console.log("🚀 ~ LogIn ~ value:", values)    
    setLoading(true)
    try {
      const result = await login(values)
      console.log(result)
      setLoading(false)
    } catch (error) {
      console.log(error?.message)
    }

  }
})


  return (
    <section className='h-[85vh] bg-gradient-to-br from-blue-400 via-slate-200 to-green-400 md:px-0 px-5 flex items-center justify-center  '>
      <div className="mx-auto w-full max-w-[500px] rounded-2xl border bg-white/50 px-5 py-3  shadow-primaryColor/50  shadow-xl">
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
  <div className="my-5 flex items-center justify-between gap-3">
    <hr className="h-0.5 w-1/3 bg-slate-300" />
    <span>or</span>
    <hr className="h-0.5 w-1/3 bg-slate-300" />
  </div>
  <p className="flex items-center justify-center gap-3 border-purple-300 border-2 bg-slate-200 py-2 text-center text-2xl font-light">
    <span className="inline-block bg-gradient-to-tr from-purple-500 to-blue-600 bg-clip-text text-3xl font-semibold text-transparent">
      G
    </span>{" "}
    Google
  </p>
</div>

    </section>
  )
}

export default LogIn