import React from 'react'
import logo from '../../assets/logo 2.png'
import { useFormik } from 'formik'
import { signUpSchema } from '../../schema'



const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: ""
}
const SignUp = () => {
  const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      console.log("🚀 ~ SignUp ~ values:", values)
      
    }
  })
  
  console.log("🚀 ~ SignUp ~ errors:", errors)
  return (
    <section className='section md:px-0 px-5 flex items-center justify-center  '>
      <div className="mx-auto w-full max-w-[500px] rounded-2xl border bg-white px-5 py-3 shadow-xl">
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
      className=" px-2 w-full border-b border-blue-300 pb-2 text-slate-400"
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
      className="my-2 px-2 w-full border-b border-blue-300 pb-2 text-slate-400"
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
      className="my-2 px-2 w-full border-b border-blue-300 py-2 text-slate-400"
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
      className="my-2 px-2 w-full border-b border-blue-300 py-2 text-slate-400"
      placeholder="Confirm Password"
      autoComplete="off"
      name='confirm_password'
      value={values.confirm_password}
      onChange={handleChange}
      onBlur={handleBlur}
    />
    {errors.confirm_password && touched.confirm_password && <p className='text-red-600 text-sm pb-1'>{errors.confirm_password}</p>}

    <button className="w-full rounded-full bg-gradient-to-tr from-primaryColor to-slate-200 py-2 text-xl  text-white font-bold">
      Join
    </button>
  </form>
  <div className="my-1 flex items-center justify-between gap-3">
    <hr className="h-0.5 w-1/3 bg-slate-300" />
    <span>or</span>
    <hr className="h-0.5 w-1/3 bg-slate-300" />
  </div>
  <p className="flex items-center justify-center gap-3 border-purple-300 border-2 bg-slate-200 py-1 text-center text-xl font-light">
    <span className="inline-block bg-gradient-to-tr from-purple-500 to-blue-600 bg-clip-text text-2xl font-semibold text-transparent">
      G
    </span>{" "}
    Google
  </p>
</div>

    </section>
  )
}

export default SignUp