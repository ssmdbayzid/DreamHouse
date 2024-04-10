import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';


import { FaHeart, FaSignOutAlt } from "react-icons/fa";
import { GoChecklist } from "react-icons/go";
import { HiMiniUsers } from "react-icons/hi2";
import { MdDashboard } from "react-icons/md";
import {useSelector} from 'react-redux'
const SideBar = ({showSideBar, setShowSideBar}) => {
  const user = useSelector(state=>state.user.user)


  console.log(user)
  return (
    <aside
  id="sidebar-multi-level-sidebar"
  className={`relative bottom-0 left-0 z-40 w-64 md:h-[calc(100vh-11vh)] transition-transform ${!showSideBar ?"-translate-x-full" : "translate-x-0"} sm:translate-x-0 bg-white`}
  aria-label="Sidebar"
>
  <div className=" relative border h-full px-3 py-4 overflow-y-auto bg-gray-150 dark:bg-gray-800">
  <div 
  onClick={()=>setShowSideBar(!showSideBar)}
  className='absolute right-2 bg-blue-500 cursor-pointer md:hidden'>
        <IoIosArrowBack className='text-3xl text-white'/>
</div>
    <div className="">
      <div className="mb-6">
        <img 
        src={user.photo ? user?.photo : "https://as2.ftcdn.net/v2/jpg/03/49/49/79/1000_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg"} alt="" className='w-20 h-full mx-auto'/>
        {user && <p className='text-center font-semibold'>{user?.email}</p>}
      </div>
    </div>
    <ul className="space-y-2  font-medium">
    <li>
        <a
          href="/dashboard"
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <MdDashboard className='w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 '/>
     
          <span className="flex-1 ms-3 whitespace-nowrap">Dashboard</span>
        </a>
      </li>
      <li>
       <a
         href="/dashboard/booked-properties"
         className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
       >
         <svg
           className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
           aria-hidden="true"
           xmlns="http://www.w3.org/2000/svg"
           fill="currentColor"
           viewBox="0 0 18 20"
         >
           <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
         </svg>
         <span className="flex-1 ms-3 whitespace-nowrap">Booked Property</span>
       </a>
     </li>
      <li>
       <a
         href="/dashboard/add-listing"
         className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
       >
         <svg
           className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
           aria-hidden="true"
           xmlns="http://www.w3.org/2000/svg"
           fill="currentColor"
           viewBox="0 0 18 20"
         >
           <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
         </svg>
         <span className="flex-1 ms-3 whitespace-nowrap">Add Listing</span>
       </a>
     </li>
    
     <li>
       <a
         href="/dashboard/favorite-item"
         className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
       >
        < FaHeart className='h-6 w-6 text-gray-500 group-hover:text-gray-700' />
         <span className="flex-1 ms-3 whitespace-nowrap">Favorite Items</span>
       </a>
     </li>
     <li>
       <a
         href="/dashboard/my-properties"
         className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
       >
         <svg
           className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
           aria-hidden="true"
           xmlns="http://www.w3.org/2000/svg"
           fill="currentColor"
           viewBox="0 0 18 20"
         >
           <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
         </svg>
         <span className="flex-1 ms-3 whitespace-nowrap">My Properties</span>
       </a>
     </li>
  
      <li>
        <p
        onClick={()=>logOut()}
          className="flex items-center p-2 group cursor-pointer"
        >
        <FaSignOutAlt className='w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'/>
          <span className="flex-1 ms-3 whitespace-nowrap">Sign Out</span>
        </p>
      </li>
    </ul>
   
  </div>
    
</aside>

  )
}

export default SideBar