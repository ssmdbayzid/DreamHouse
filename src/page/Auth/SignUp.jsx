import React from 'react'
import logo from '../../assets/logo 2.png'

const SignUp = () => {
  return (
    <section className='section md:px-0 px-5 flex items-center justify-center h-[80vh] '>
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
  <form action="">
    <input
      type="text"
      className="mb-5 w-full border-b border-blue-300 pb-2 text-slate-400"
      placeholder="Name"
    />
    <input
      type="email"
      className="mb-5 w-full border-b border-blue-300 pb-2 text-slate-400"
      placeholder="Email"
    />
    <input
      type="password"
      className="mb-10 w-full border-b border-blue-300 py-2 text-slate-400"
      placeholder="Password"
    />
    <button className="w-full rounded-full bg-gradient-to-tr from-primaryColor to-slate-200 py-2 text-xl  text-white font-bold">
      Join
    </button>
  </form>
  <div className="my-3 flex items-center justify-between gap-3">
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

export default SignUp