import React from 'react'
import { MdOutlineFileDownload } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import {  useSelector, useDispatch } from 'react-redux';


const navLinks = [
  {
  path: '/home',
  display: "Home",
},
{
  path: '/about',
  display: "About",
},
{
  path: '/properties',
  display: "Properties",
},
{
  path: '/contact',
  display: "Contact",
}, 
{
  path: '/dashboard',
  display: "Dashboard",
}, 
]

  const Menu = ({setMenuToggle, menuToggle}) => {
  
  const user = useSelector(state=>state.user.user);  
  const dispatch = useDispatch()

  return (
    <div className="relative p-5">
     <ul className="font-medium rounded-lg  flex flex-col gap-8 rtl:space-x-reverse "> 
          {
            navLinks && navLinks.map(link=> 
            <NavLink onClick={()=>setMenuToggle(!menuToggle)} key={link.display} to={link.path}
            className={navClass => navClass.isActive ? "text-primaryColor transition duration-500 cursor-pointer font-semibold text-lg"
            : "text-slate-400 hover:text-primaryColor transition duration-500 cursor-pointer text-lg"}
            >{link.display}</NavLink>
              )
          }
      </ul>

      {user ?
          <div className="relative">            
            <button onClick={()=>{
              dispatch(logOut()); setMenuToggle(!menuToggle)}}  className='btn w-full bg-primaryColor text-white'>Logout</button>
          </div>
           :
   <ul className='mt-10 w-full'>
   <li  
   onClick={()=>setMenuToggle(!menuToggle)}>
      <a href='/log-in' className='bg-primaryColor text-white rounded-full mb-2 py-2 text-lg flex justify-center items-center '
       >
        Log In
        </a>
      </li>
      <li
      onClick={()=>setMenuToggle(!menuToggle)}>
      <a
      href='/signup'
      className='bg-primaryColor text-white rounded-full py-2 text-lg flex justify-center items-center '
       >
        Sign Up
        </a>
      </li>
   </ul>}
  </div>
  )
}

export default Menu