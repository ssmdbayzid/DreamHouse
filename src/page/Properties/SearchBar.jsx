import React from 'react'


const SearchBar = ({setQuery}) => {
  return (
    <div className="ml-auto mr-20 w-full md:w-2/3 "> 
    <form className="relative mx-auto flex md:w-full  items-center justify-between rounded-md border shadow-sm"> 
      <svg className="absolute left-2 block h-5 w-5 md:w-8 md:h-8 text-gray-400" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" className=""></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65" className=""></line>
      </svg>
      <input 
      type="name" 
      name="search"
      onChange={(e)=>setQuery(e.target.value)}
      className=" rounded-md py-2 pl-8 w-full md:pl-12 md:pr-40 md:text-lg text-sm  outline-none focus:ring-2" placeholder="Search " />
     
    </form>    
  </div>
  )
}

export default SearchBar