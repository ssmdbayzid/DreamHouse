import React, { useState } from 'react';

import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import Menu from './Menu';
import { MdOutlineFileDownload } from "react-icons/md";

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



const Header = ({setSelectedPage, selectedPage}) => {
  const [scroll, setScroll] = useState(false);
  const [menuToggle, setMenuToggle] = useState(false)
  // change nav color when scroll
  const onChange = () => {
    if (window.scrollY >= 90) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  window.addEventListener('scroll', onChange);
  return (
    
    <div
      className={`  fixed top-0 left-0 z-[999] w-full transform duration-200 flex items-center md:px-0 px-2 md:py-2 py-3 `}
    >
      <div className=" max-w-[1170px]  w-full flex flex-wrap items-center justify-between mx-auto">
        <p className="flex items-center space-x-3 rtl:space-x-reverse">          
          <a href='/'
           className="flex items-center self-center text-2xl font-semibold whitespace-nowrap ">
            <p className="text-4xl h-12 font-bold mr-2 text-white ps-5 md:ps-0">
              Bayzid
            </p>
          </a>
        </p>
        {/* -------- Menu button ---------- */}
        <div
            onClick={()=> setMenuToggle(!menuToggle)}
            className=' md:hidden text-white rounded-sm p-0.5 '>
            <IoMenu className='text-3xl' />
            </div>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex items-center flex-col p-4 md:p-0 mt-4 border  rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
            <Link page="Home"
            className="text-primary"
            setSelectedPage={setSelectedPage}
            selectedPage={selectedPage}
            />
            </li>
            <li>
            <Link page="About"
            setSelectedPage={setSelectedPage}
            selectedPage={selectedPage}
            />
            </li>
            <li>
            <Link page="Skills"
            setSelectedPage={setSelectedPage}
            selectedPage={selectedPage}
            />
            </li>
            <li>
            <Link page="Projects"
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
            <a className='px-4 py-1.5 font-light  flex items-center gap-2'
        href="../assets/Resume of Bayzid.pdf" download="../assets/Resume of Bayzid.pdf">
        Resume <MdOutlineFileDownload className='text-xl' />
        </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={`md:hidden absolute  left-0 top-0 h-screen bg-slate-700 w-96 overflow-y-auto transition-transform transform ${menuToggle ? "translate-x-0" : "-translate-x-full"} ease-in-out duration-300`}>
  <div className="flex justify-between items-center">
    {/* -------- Logo ------- */}
  <p className="flex items-center space-x-3 rtl:space-x-reverse">          
          <a href='/'
           className="flex items-center self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            <p className="text-4xl h-12 font-bold mr-2 bg-gradient-to-r from-indigo-600  to-pink-200 text-transparent bg-clip-text ps-5 md:ps-0">
              Bayzid 
            </p>
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
