import React from 'react'

const FilterMenu = ({handleChange}) => {
  return (
    <div className='bg-white px-3'>
<div className="mt-10">
     <h1 className='text-xl text-center font-bold'>Filter Properties</h1>
  <div className=" py-10">
    <p>Type :</p>
    <div className="flex gap-5 mb-3 items-center pl-2">
      <input
      onChange={handleChange}
      type="checkbox" name="" id="" className="" />
      <p className="pl-4">Rent</p>
    </div>
    <div className="flex gap-5 mb-3 items-center pl-2">
      <input
      onChange={handleChange}      
      type="checkbox" name="" id="" className="" />
      <p className="pl-4">Sale</p>
    </div>
    <div className="flex gap-5 mb-3 items-center pl-2">
      <input
      onChange={handleChange}      
      type="checkbox" name="" id="" className="" />
      <p className="pl-4">Rent &amp; Sale</p>
    </div>
  </div>
  <div className=" ">
    <p>Short :</p>
    <select name="" id="" className="w-full px-2 py-2 border-2">
      <option value="" className="w-full px-2 py-2 border-2 mb-3">
        Low to high rate
      </option>
      <option value="" className="w-full px-2 py-2 border-2">
        High to low rate
      </option>
    </select>
  </div>  
</div>

    </div>
  )
}

export default FilterMenu