import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png'
import logo2 from '../assets/logo 2.png'
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import Menu from './Menu';
import { MdOutlineFileDownload } from "react-icons/md";
import { NavLink } from 'react-router-dom';

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
  const [user, setUser] = useState(false)


  // change nav color when scroll
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
  
  // path && path !== "home"
  return (
    
    <div
      className={`${scroll  ? "fixed shadow-lg" : "relative"} z-[9999]  top-0 bg-gradient-to-b from-primaryColor via-slate-200 to-white  w-full transform duration-200 flex items-center  `}
    >
      <div className=" max-w-[1170px] md:px-0 px-4 md:py-4 py-3 w-full flex flex-wrap items-center justify-between mx-auto">
        <p className="flex items-center space-x-3 rtl:space-x-reverse">          
          <a href='/'
           className="flex items-center self-center text-2xl font-semibold whitespace-nowrap ">
            <img src={logo2} alt="" className='w-[70px]' />
           
          </a>
        </p>
        {/* -------- Menu button ---------- */}
        <div
            onClick={()=> setMenuToggle(!menuToggle)}
            className=' md:hidden text-white rounded-sm p-0.5 '>
            <IoMenu className='text-3xl' />
            </div>

        <div className="hidden w-full md:w-auto md:flex items-center gap-5 " id="navbar-default">
          <ul className="font-medium flex items-center rounded-lg  flex-row md:space-x-8 rtl:space-x-reverse "> 
          {
            navLinks && navLinks.map(link=> 
            <NavLink key={link.display} to={link.path}
            className={navClass => navClass.isActive ? "text-primaryColor transition duration-500 cursor-pointer font-bold"
            : "text-slate-400 hover:text-primaryColor transition duration-500 cursor-pointer"}
            >{link.display}</NavLink>
              )
          }
          </ul>

          <ul className='font-medium flex items-center rounded-lg  flex-row md:space-x-8 rtl:space-x-reverse'>
          <NavLink to="/log-in" className={navClass => navClass.isActive ? "text-primaryColor transition duration-500 cursor-pointer font-bold"
            : "text-slate-400 hover:text-primaryColor transition duration-500 cursor-pointer"}>Log In</NavLink>
          <NavLink  to="/sign-up" className={navClass => navClass.isActive ? "px-4 py-1.5 bg-primaryColor text-white transition duration-500 cursor-pointer font-bold"
            : " hover:text-slate-200 transition duration-500 cursor-pointer px-4 py-1.5 bg-primaryColor text-white"} >Join</NavLink>
          </ul>
         
          {/* <ul className="font-medium flex items-center rounded-lg  flex-row md:space-x-8 rtl:space-x-reverse bg-transparent">
            <li>
            <Link page="Home"
            className="text-primary"
            setSelectedPage={setSelectedPage}
            selectedPage={selectedPage}
            />
            </li>
           
            <li>
            <Link page="Contact"
            setSelectedPage={setSelectedPage}
            selectedPage={selectedPage}
            />
            </li>
            <li>
            <Link page="Properties"
            setSelectedPage={setSelectedPage}
            selectedPage={selectedPage}
            />
            </li>
           {user && <li>
            <Link page="Log In"
            setSelectedPage={setSelectedPage}
            selectedPage={selectedPage}
            />
            </li>}
            <li>
            <Link page="Sign Up"
            setSelectedPage={setSelectedPage}
            selectedPage={selectedPage}
            />
            </li>
            <li>
            <a className='px-4 py-1.5 font-light  flex items-center gap-2'
        href="../assets/Resume of Bayzid.pdf" download="../assets/Resume of Bayzid.pdf">
        Resume <MdOutlineFileDownload className='text-xl' />
        </a>
            </li>
          </ul> */}
        </div>
      </div>
      <div className={`md:hidden  absolute top-0 h-screen bg-slate-200 w-4/5 overflow-y-auto transition-transform transform ${menuToggle ? "translate-x-0" : "-translate-x-full"} ease-in-out duration-300`}>
  <div className="flex justify-between items-center">
    {/* -------- Logo ------- */}
  <p className="flex items-center space-x-3 rtl:space-x-reverse">          
          <a href='/'
           className="flex items-center self-center text-2xl font-semibold whitespace-nowrap ">
            {/* <p className="text-4xl h-12 font-bold mr-2 bg-gradient-to-r from-indigo-600  to-pink-200 text-transparent bg-clip-text ps-5 md:ps-0">
              Bayzid 
            </p> */}
             <a href='/'
           className="flex items-center ml-4 self-center text-3xl font-semibold whitespace-nowrap ">
            <img src={logo2} alt="" className='w-[50px]' />
            <p className='text-primaryColor pl-2'   > Dream House</p>
          </a>
          </a>
        </p>

  {/* ------------ Closing Button -------------- */}
  <div onClick={()=> setMenuToggle(!menuToggle)}
 className="ml-auto  text-center w-10 m-3 p-2 bg-primary cursor-pointer">
  <RxCross2 className='text-2xl text-white' />
</div>
  </div>

<Menu selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
</div>
    </div>
  
    
  );
};

export default Header;
