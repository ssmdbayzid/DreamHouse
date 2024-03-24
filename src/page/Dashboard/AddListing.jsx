import React from 'react'

const AddListing = () => {
  return (
    <div>AddListing
      <div className="flex items-center justify-center p-12">
  {/* Author: FormBold Team */}
  {/* Learn More: https://formbold.com */}
  <div className="mx-auto w-full  bg-white">
    <form action="https://formbold.com/s/FORM_ID" method="POST">
      <div className="mb-5">
        <label
          htmlFor="property_name"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Property Name
        </label>
        <input
          type="text"
          name="property_name"
          id="property_name"
          placeholder="Enter property name"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="property_type"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Property Type
        </label>
        <select
          name="property_type"
          id="property_type"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        >
          <option value="" disabled="" selected="">
            Select property type
          </option>
          <option value="house">House</option>
          <option value="apartment">Apartment</option>
          <option value="condo">Condo</option>
          <option value="land">Land</option>
        </select>
      </div>
      <div className="mb-5">
        <label
          htmlFor="price"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Price
        </label>
        <input
          type="text"
          name="price"
          id="price"
          placeholder="Enter price"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div className="-mx-3 flex flex-wrap">
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
            <label
              htmlFor="bedrooms"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Bedrooms
            </label>
            <input
              type="number"
              name="bedrooms"
              id="bedrooms"
              placeholder="Enter number of bedrooms"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
            <label
              htmlFor="bathrooms"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Bathrooms
            </label>
            <input
              type="number"
              name="bathrooms"
              id="bathrooms"
              placeholder="Enter number of bathrooms"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
      </div>
      <div className="mb-5 pt-3">
        <label className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
          Address Details
        </label>
        <div className="-mx-3 flex flex-wrap">
          <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
              <input
                type="text"
                name="area"
                id="area"
                placeholder="Enter area"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
          <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
              <input
                type="text"
                name="city"
                id="city"
                placeholder="Enter city"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
          <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
              <input
                type="text"
                name="state"
                id="state"
                placeholder="Enter state"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
          <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
              <input
                type="text"
                name="post-code"
                id="post-code"
                placeholder="Post Code"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <button className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
          Add Property
        </button>
      </div>
    </form>
  </div>
</div>

    </div>
  )
}

export default AddListing