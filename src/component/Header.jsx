import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png'
import logo2 from '../assets/logo 2.png'
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import Menu from './Menu';
import { MdOutlineFileDownload } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaRegUserCircle } from "react-icons/fa";
import { logOut } from '../app/features/userSlice';
import { useNavigate } from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa";

const Link = ({page, selectedPage, setSelectedPage}) => {
  const lowerCasePage = page.toLowerCase();
  return (<div 
  className={`${selectedPage === lowerCasePage ? "text-primary" : "text-slate-400"} 
  hover:text-primary transition duration-500 cursor-pointer`}
  href={`#${lowerCasePage}`}
  onClick={()=>setSelectedPage(lowerCasePage)}
  >
{page}
  </div>)
}

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
]

const Header = ({setSelectedPage, selectedPage}) => {
  const [scroll, setScroll] = useState(false);
  const [menuToggle, setMenuToggle] = useState(false)

  const user = useSelector(state=>state.user.user);
  const cartItems = useSelector(state => state.cart.cartItems);

  const dispatch = useDispatch()

  const onChange = () => {
    if (window.scrollY >= 100) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  window.addEventListener('scroll', onChange);  
  let path;
  useEffect(()=>{
    path = location.pathname.split("/")[1]
  },[path])
  
  const navigate = useNavigate()

  const handleLogOut = () =>{
    dispatch(logOut())
    navigate("/")
    window.location.reload()
  }

  return (
    <div className={`${scroll ? "fixed shadow-lg" : "relative"} z-[99] top-0 bg-gradient-to-b from-primaryColor via-slate-200 to-white w-full transform duration-200 flex items-center`}>
      <div className="max-w-[1170px] md:px-0 px-4 md:py-4 py-3 w-full flex flex-wrap items-center justify-between mx-auto">
        <p className="flex items-center space-x-3 rtl:space-x-reverse">          
          <a href='/' className="flex items-center self-center text-2xl font-semibold whitespace-nowrap">
            <img src={logo2} alt="" className='w-[70px]' />
          </a>
        </p>

        <div onClick={()=> setMenuToggle(!menuToggle)} className='md:hidden text-white rounded-sm p-0.5'>
          <IoMenu className='text-3xl' />
        </div>

        <div className="hidden w-full md:w-auto md:flex items-center gap-5" id="navbar-default">
          <ul className="font-medium flex items-center rounded-lg flex-row md:space-x-8 rtl:space-x-reverse">
            {navLinks.map(link => 
              <NavLink key={link.display} to={link.path}
                className={navClass => navClass.isActive ? "text-primaryColor transition duration-500 cursor-pointer font-semibold"
                : "text-slate-400 hover:text-primaryColor transition duration-500 cursor-pointer"}
              >{link.display}</NavLink>
            )}
          </ul>

          <div className="flex items-center gap-4">
            <NavLink to="/cart" className="relative">
              <FaShoppingCart className="text-2xl" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItems.length}
                </span>
              )}
            </NavLink>

            {user ? (
              <div className="relative font-medium">  
                <NavLink to="/dashboard" className={navClass => navClass.isActive ? "mr-5 text-primaryColor transition duration-500 cursor-pointer font-semibold"
                  : "text-slate-400 hover:text-primaryColor transition duration-500 cursor-pointer mr-5"}>Dashboard</NavLink>           
                <button onClick={handleLogOut} className='px-4 py-2 bg-primaryColor text-white'>Logout</button>
              </div>
            ) : (
              <ul className='font-medium flex items-center rounded-lg flex-row md:space-x-8 rtl:space-x-reverse'>
                <NavLink to="/log-in" className={navClass => navClass.isActive ? "text-primaryColor transition duration-500 cursor-pointer font-semibold"
                  : "text-slate-400 hover:text-primaryColor transition duration-500 cursor-pointer"}>Log In</NavLink>
                <NavLink to="/sign-up" className={navClass => navClass.isActive ? "px-4 py-1.5 bg-primaryColor text-white transition duration-500 cursor-pointer font-semibold"
                  : "hover:text-slate-200 transition duration-500 cursor-pointer px-4 py-1.5 bg-primaryColor text-white"}>Join</NavLink>
              </ul>
            )}
          </div>
        </div>
      </div>

      <div className={`md:hidden absolute top-0 h-screen bg-slate-800 w-4/5 overflow-y-auto transition-transform transform ${menuToggle ? "translate-x-0" : "-translate-x-full"} ease-in-out duration-300`}>
        <div className="flex justify-between items-center">
          <p className="flex items-center space-x-3 rtl:space-x-reverse">          
            <a href='/' className="flex items-center ml-4 self-center text-3xl font-semibold whitespace-nowrap">
              <img src={logo2} alt="" className='w-[50px]' />
              <p className='text-primaryColor pl-2'>Dream House</p>
            </a>
          </p>

          <div onClick={()=> setMenuToggle(!menuToggle)} className="ml-auto text-center w-10 m-3 p-2 bg-primary cursor-pointer">
            <RxCross2 className='text-2xl text-white' />
          </div>
        </div>

        <Menu setMenuToggle={setMenuToggle} menuToggle={menuToggle} />
      </div>
    </div>
  )
}

export default Header;