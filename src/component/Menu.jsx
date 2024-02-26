import React from 'react'
import { MdOutlineFileDownload } from 'react-icons/md';


const Link = ({page, selectedPage, setSelectedPage}) => {
  const lowerCasePage = page.toLowerCase();
  return (<div 
  className={`${selectedPage === lowerCasePage ? "text-primary" : "text-slate-400"} 
  hover:text-primary transition duration-500 cursor-pointer hover:bg-primary/10 text-xl mb-10 py-2`}
  href={`#${lowerCasePage}`}
  onClick={()=>setSelectedPage(lowerCasePage)}
  >
{page}
  </div>)
}
const Menu = ({selectedPage, setSelectedPage}) => {
  return (
    <div className="p-5">
    
    <ul className="mt-4">
      <li className="mb-2">
      <Link page="Home"
            setSelectedPage={setSelectedPage}
            selectedPage={selectedPage}
            />
      </li>
     
      <li className="mb-2">
      <Link page="About"
            setSelectedPage={setSelectedPage}
            selectedPage={selectedPage}
            />
      </li>
      
      <li className="mb-2">
      <Link page="Skills"
            setSelectedPage={setSelectedPage}
            selectedPage={selectedPage}
            />
      </li>
      
      <li className="mb-2">
      <Link page="Projects"
            setSelectedPage={setSelectedPage}
            selectedPage={selectedPage}
            />
      </li>
      <li>
      <a className=' text-white px-2 py-3 font-light bg-primary flex justify-center items-center gap-2'
        href="../assets/Resume of Bayzid.pdf" download="../assets/Resume of Bayzid.pdf">
        Resume <MdOutlineFileDownload className='text-xl' />
        </a>
      </li>
    </ul>
  </div>
  )
}

export default Menu