import React from 'react'
import { SlCallIn } from "react-icons/sl";
import { RiMailSendLine } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";



const AgentContact = () => {

    const handleForm = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const message = e.target.message.value;
        console.log(name, email, message)
    }

  return (
    <section className='section'>
    <div className="container flex items-center justify-between gap-8">
  <div className="flex w-2/3 items-center justify-start gap-8 pe-11">
    <img
      src="http://wp1.themexlab.com/old/homestate/wp-content/uploads/2016/05/team-image-1.jpg"
      alt=""
    />
    <div className="">
      <h3 className="text-2xl font-bold ">A H M Bahauddin</h3>
      <p className="text-red-600 mb-5">Senior Agent Of Dream Home</p>
      <p className="text-2">
        Mr. Bahauddin is a Certified Specialists with over 10th years experience
        of helping local residents sell homes. He achieve success due to his
        commitment
      </p>
      <div className="mb-5 flex items-center gap-3">
        <SlCallIn className='text-2xl text-slate-600' />
        <div>
          <p className="font-bold">Phone</p>
          <p className="text-gray-400">(880) 16546 788861</p>
        </div>
      </div>
      <div className="flex items-center gap-3">        
       <RiMailSendLine className='text-2xl text-slate-600' />
        <div>
          <p className="font-bold">Email</p>
          <p className="text-gray-400">contact@bahauddin.com</p>
        </div>
      </div>
      <div className="flex justify-start items-center gap-5 mt-10">
        <div className=" w-12 h-12 rounded-full bg-gray-200 shadow-xl flex items-center justify-center hover:text-primaryColor cursor-pointer">
          <FaFacebookF />
        </div>
        <div className=" w-12 h-12 rounded-full bg-gray-200 shadow-xl flex items-center justify-center hover:text-primaryColor cursor-pointer">
         <FaLinkedinIn  />
        </div>
        <div className=" w-12 h-12 rounded-full bg-gray-200 shadow-xl flex items-center justify-center hover:text-primaryColor cursor-pointer">
         <FaTwitter />
        </div>
      </div>
    </div>
  </div>
  <div className="w-1/3">
    <p className='text-lg'>For Inquiry</p>
    <p className="uppercase font-extrabold text-primaryColor text-3xl mb-5">
      Contact <span className="font-light text-black">Agent </span>{" "}
    </p>
    <form onSubmit={handleForm}> 
      <input
        className="w-full  p-3 border mb-3"
        type="text"
        name="name"
        placeholder="Full Name"
        autoComplete="false"
      />
      <input
        className="w-full  p-3 border mb-3"
        type="email"
        name="email"
        autoComplete="false"
        placeholder="Email Address"
      />
      <textarea
        id="message"
        name="message"
        rows={4}
        className="block mb-3 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Message"
        defaultValue={""}
      />
      <button className="btn ">Send</button>
    </form>
  </div>
</div>
</section>
  )
}

export default AgentContact