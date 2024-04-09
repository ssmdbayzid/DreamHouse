import React from 'react'

const MobileFilterMenu = ({setOpenFilterMenu, openFilterMenu, handleChange, onChangeSort}) => {
  return (
    <div>
         <div className="relative  z-40 " role="dialog" aria-modal="true">
      
      <div  className="fixed inset-0 z-[999] bg-black/60"></div>

      <div   className="fixed z-[999] top-14  inset-0   flex">
     
        <div className="relative  ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
          <div className="flex items-center justify-between px-4">
            <h2 className="text-lg font-medium text-gray-900">Filters</h2>
            <button
            onClick={()=> setOpenFilterMenu(!openFilterMenu)}
            type="button" className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400">
              <span className="sr-only">Close menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* <!-- Filters --> */}
          <form className="mt-4 border-t border-gray-200 ">          
            <div className="border-t border-gray-200 px-4 py-6">
             
              {/* <!-- Filter section, show/hide based on section state. --> */}
           
             <div  className="pt-3" id="filter-section-mobile-1">
                <div className="space-y-6">
                  <div
                  onClick={()=> setOpenFilterMenu(!openFilterMenu)}                  
                  className="flex items-center">
                    <input
                    onChange={handleChange}
                    value="for rent" 
                    id="filter-mobile-category-0" name="category[]"  type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                    <label htmlFor="filter-mobile-category-0" className="ml-3 min-w-0 flex-1 text-gray-500">Rent</label>
                  </div>
                  
                </div>
              </div>
             <div  className="pt-3" id="filter-section-mobile-1">
                <div className="space-y-6">
                  <div
                  onClick={()=> setOpenFilterMenu(!openFilterMenu)}
                  className="flex items-center">
                  
                    <input
                    onChange={handleChange}
                    value="for sale" 
                    id="filter-mobile-category-0" name="category[]"  type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                    <label htmlFor="filter-mobile-category-0" className="ml-3 min-w-0 flex-1 text-gray-500">Sale</label>
                  </div>
                  
                </div>
              </div>
             <div  className="pt-3" id="filter-section-mobile-1">
                <div className="space-y-6">
                  <div
                  onClick={()=> setOpenFilterMenu(!openFilterMenu)}
                  className="flex items-center">
                  
                    <input
                    onChange={handleChange}
                    value="" 
                    id="filter-mobile-category-0" name="category[]"  type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                    <label htmlFor="filter-mobile-category-0" className="ml-3 min-w-0 flex-1 text-gray-500">Rent &amp; Sale</label>
                  </div>
                  
                </div>
              </div>
             <div  className="pt-3" id="filter-section-mobile-1">
                <div className="space-y-6">
                  {/* <div className="flex items-center">
                    <input
                    onChange={handleChange}
                    value="" 
                    id="filter-mobile-category-0" name="category[]"  type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                    <label htmlFor="filter-mobile-category-0" className="ml-3 min-w-0 flex-1 text-gray-500">Rent &amp; Sale</label>
                  </div> */}
                   <div className=" ">
    <p>Short :</p>
    <select  
    onChange={(event) => 
      {onChangeSort(event);setOpenFilterMenu(!openFilterMenu)}} 
    // onChange={onChangeSort, setOpenFilterMenu(!openFilterMenu)}  
    name="" id="" className="w-full px-2 py-2 border-2">
      <option      
      value=""          
       className="w-full px-2 py-2 border-2 mb-3">
       Select
      </option>
      <option      
      value="L2H"          
       className="w-full px-2 py-2 border-2 mb-3">
        Low to high rate
      </option>
      <option         
      value="H2L"      
       className="w-full px-2 py-2 border-2">
        High to low rate
      </option>
    </select>

  </div> 
                </div>
              </div>
            </div>
           
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default MobileFilterMenu