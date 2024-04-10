import React, {useState, useEffect} from 'react'
import { useFormik } from "formik"
import {propertySchema} from "../../schema"
import ImageUpload from '../../utility/ImageUpload'

import {uploadToCludinary} from '../../hooks/uploadToCludinary'
import { useAddPropertyMutation } from '../../app/features/propertiesApiSlice'
import {useSelector} from 'react-redux'

const checkboxData = 
[
  {
    value: "air-condotioning",
    display: "Air Conditioning"
  },
  {
    value: "barbeque",
    display: "Barbeque"
  },
  {
    value: "dryer",
    display: "Dryer"
  },
  {
    value: "gym",
    display: "Gym"
  },
  {
    value: "laundry",
    display: "Laundry"
  },
  {
    value: "lawn",
    display: "Lawn"
  },
  {
    value: "microwave",
    display: "Microwave"
  },
  {
    value: "outdoor-shower",
    display: "Outdoor Shower"
  },
  {
    value: "refrigerator",
    display: "Refrigerator"
  },
  {
    value: "sauna",
    display: "Sauna"
  },
  {
    value: "swimming-pool",
    display: "Swimming Pool"
  },
  {
    value: "tv-cable",
    display: "TV Cable"
  },
  {
    value: "washer",
    display: "Washer"
  },
  {
    value: "wifi",
    display: "wifi"
  },
  {
    value: "window-coverings",
    display: "Window Coverings"
  },
]

const initialValues = {
  title: '',
  agent_name: '',
  property_type: '',
  price: "",
  rent_duration: "",
  bedrooms: "",
  kitchen: "",
  garage: "",
  description: "",
  property_area: "",  
  post_office: '',
  city: '',
  police_station: '',
  post_code: "",
  country: '',
  street :"",
  features: [],  
};
const AddListing = () => {
  
  const [checkedValues, setCheckedValues] = useState([])  
  const [inputFiles, setInputFiles] = useState(null)
  const [inputFilesError, setInputFilesError] = useState("")
  const [addProperty] = useAddPropertyMutation()
  
  const [loading, setLoading] = useState(false)
  const user = useSelector(state=>state?.user?.user)

  if(!user)setLoading(true)
  const {values, setValues, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues: initialValues,        
    validationSchema: propertySchema,
    onSubmit: async(values) => {
      if(user){
      // --------- Image Uploading to Cloudinary      
      const images = [];
      if(!inputFiles?.length) return   setInputFilesError("Photo is required")    
      for(let i = 0; i < inputFiles?.length; i++){      
        const data = await uploadToCludinary(inputFiles[i])
        images.push(data?.secure_url)         
      }      
      setLoading(true)
      try {
        const result = await addProperty({...values, images: images, userId:user?._id})        
        console.log(result)
      setLoading(false)
      } catch (error) {
        console.log(result?.error)        
      }          
    }
  }
  })
  
 
  
    
  const handleCheckboxChange = (event) => {
    const {name, checked} = event.target;

    if(checked){
    setCheckedValues([...checkedValues, name])
  }
    else{
      setCheckedValues(checkedValues.filter(value => value !== name));
    }
  }

  useEffect(()=>{
    setValues({
      ...values,
      features: checkedValues,
    })
  },[checkedValues])
    
  return (
    <div className="">
      <div className="flex items-center justify-center p-12">
  
  <div className="mx-auto w-full  bg-white">
    <form onSubmit={handleSubmit}>
      <div className="mb-5">
        <label
          htmlFor="title"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Property Name
        </label>
        <input
          type="text"
          name="title"
          value={values.title}
          onChange={handleChange}
          onBlur={handleBlur}
          autoComplete="off"
          id="title"          
          placeholder="Enter Title"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
        {errors?.title && touched?.title && 
        <p className='text-red-600 text-sm pb-1'>{errors.title}</p>}
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
          value={values.property_type}
          onChange={handleChange}
          onBlur={handleBlur}
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        >
          <option value="" disabled="" selected="">
            Select property type
          </option>
          <option value="house">House</option>
          <option value="apartment">Villa</option>
          <option value="apartment">Apartment</option>
          <option value="condo">Condo</option>
          <option value="land">Land</option>          
        </select>
        {errors?.property_type && touched?.property_type && 
        <p className='text-red-600 text-sm pb-1'>{errors.property_type}</p>}
      </div>             
      <div className="mb-5">
      <label
          htmlFor="agent_name"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Agent Name
        </label>
        <input
          type="text"
          name="agent_name"
          id="agent_name"
          value={values.agent_name}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter agent name"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
         {errors?.agent_name && touched?.agent_name && 
        <p className='text-red-600 text-sm pb-1'>{errors.agent_name}</p>}
      </div>             
      <div className="-mx-3 flex flex-wrap">
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
            <label
              htmlFor="Price"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Price
            </label>
            <input
              type="number"
              name="price"
              value={values.price}
              onChange={handleChange}
              onBlur={handleBlur}
              id="price"
              placeholder="Enter number of price"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          {errors?.price && touched?.price && 
        <p className='text-red-600 text-sm pb-1'>{errors.price}</p>}
        </div>
        <div className="mb-5 md:w-1/2">
        <label
          htmlFor="property_type"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Rent Duration
        </label>
        <select
          name="rent_duration"
          value={values.rent_duration}
          onChange={handleChange}
          onBlur={handleBlur}
          id="rent_duration"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        >
          <option value="" disabled="" selected="">
            Select rent_duration
          </option>
          <option value="month">Month</option>
          <option value="week">Week</option>
          <option value="year">Year</option>          
        </select>
        {errors?.rent_duration && touched?.rent_duration && 
        <p className='text-red-600 text-sm pb-1'>{errors.rent_duration}</p>}
      </div>
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
              value={values.bedrooms}
              onChange={handleChange}
              onBlur={handleBlur}
              id="bedrooms"
              placeholder="Enter number of bedrooms"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
             {errors?.bedrooms && touched?.bedrooms && 
        <p className='text-red-600 text-sm pb-1'>{errors.bedrooms}</p>}
          </div>
        </div>
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
            <label
              htmlFor="kitchen"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Kitchen
            </label>
            <input
              type="number"
              name="kitchen"
              value={values.kitchen}
              onChange={handleChange}
              onBlur={handleBlur}
              id="kitchen"
              placeholder="Enter number of kitchen"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
                {errors?.kitchen && touched?.kitchen && 
        <p className='text-red-600 text-sm pb-1'>{errors.kitchen}</p>}
          </div>
        </div>
      </div>
      <div className="-mx-3 flex flex-wrap">
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
            <label
              htmlFor="garage"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Garage
            </label>
            <input
              type="number"
              name="garage"
              value={values.garage}
              onChange={handleChange}
              onBlur={handleBlur}
              id="ware-house"
              placeholder="Enter number of garage"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
             {errors?.garage && touched?.garage && 
        <p className='text-red-600 text-sm pb-1'>{errors.garage}</p>}
          </div>
        </div>
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
            <label
              htmlFor="property_area"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Property Area 
            </label>
            <input
              type="number"
              name="property_area"
              value={values.property_area}
              onChange={handleChange}
              onBlur={handleBlur}
              id="property_area"
              placeholder="Area in SqFt"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
              {errors?.property_area && touched?.property_area && 
              <p className='text-red-600 text-sm pb-1'>{errors.property_area}</p>}
          </div>
        </div>
      </div>
      <div className="mb-5">
      <label
          htmlFor="description"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Property Description
        </label>
        <input
          type="text"
          name="description"
          id="description"
          value={values.description}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Property Description"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
         {errors?.description && touched?.description && 
        <p className='text-red-600 text-sm pb-1'>{errors.description}</p>}
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
                name="street"
                value={values.street}
                onChange={handleChange}
                onBlur={handleBlur}
                id="street"
                placeholder="Enter street"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
                 {errors?.street && touched?.street && 
              <p className='text-red-600 text-sm pb-1'>{errors.street}</p>}
            </div>
          </div>
          <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
              <input
                type="text"
                name="city"
                value={values.city}
                onChange={handleChange}
                onBlur={handleBlur}
                id="city"
                placeholder="Enter city"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
                 {errors?.city && touched?.city && 
              <p className='text-red-600 text-sm pb-1'>{errors.city}</p>}
            </div>
          </div>
          <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
              <input
                type="text"
                name="post_office"
                value={values.post_office}
                onChange={handleChange}
                onBlur={handleBlur}
                id="post_office"
                placeholder="Enter post office"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
               {errors?.post_office && touched?.post_office && 
              <p className='text-red-600 text-sm pb-1'>{errors.post_office}</p>}
            </div>
          </div>
          <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
              <input
                type="text"
                name="post_code"
                value={values.post_code}
                onChange={handleChange}
                onBlur={handleBlur}
                id="post-code"
                placeholder="Post Code"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
                  {errors?.post_code && touched?.post_code && 
              <p className='text-red-600 text-sm pb-1'>{errors.post_code}</p>}
            </div>
          </div>
          <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
              <input
                type="text"
                name="police_station"
                value={values.police_station}
                onChange={handleChange}
                onBlur={handleBlur}
                id="police_station"
                placeholder="Police Station"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
               {errors?.police_station && touched?.police_station && 
              <p className='text-red-600 text-sm pb-1'>{errors.police_station}</p>}
            </div>
          </div>
          <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
              <input
                type="text"
                name="country"
                value={values.country}
                onChange={handleChange}
                onBlur={handleBlur}
                id="country"
                placeholder="country"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
               {errors?.country && touched?.country && 
              <p className='text-red-600 text-sm pb-1'>{errors.country}</p>}
            </div>
          </div>
        </div>
      </div>
      <div className="mb-5 pt-3">
        <label className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
          Features
        </label>
        <div className="grid grid-cols-1 md:grid-cols-3">         
            {checkboxData && checkboxData.map((data, index)=>
            <div key={index} className="mb-5 flex justify-start items-center">            
              <input
                type="checkbox"
                name={data?.value}
                value={data?.value}
                id={data?.value}               
                onChange={handleCheckboxChange} 
                placeholder="Enter street"
                className=" rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
              <label htmlFor={data?.value} className='text-nowrap ms-2'>{data?.display}</label>              
            </div>   )}                 
        </div>
        {errors?.features && touched?.features &&
              <p className='text-red-600 text-sm pb-1'>{errors.features}</p>}
      </div>
        <ImageUpload setInputFiles={setInputFiles} inputFiles={inputFiles} />

        
        {inputFilesError && inputFiles.length < 1 &&
              <p className='text-red-600 text-sm pb-1'>{inputFilesError}</p>}
        <button type="submit" className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
         {loading && "loading...."} Add Property
        </button>      
    </form>  
  </div>
</div>
    </div>
  )
}

export default AddListing