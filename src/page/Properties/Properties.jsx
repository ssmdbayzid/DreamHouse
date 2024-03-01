import React, { useEffect, useState } from 'react'
import { propertyData } from '../../assets/data'
import PropertiesList from './PropertiesList'
import FilterMenu from './FilterMenu'
import SearchBar from './SearchBar'




const Properties = () => {
  const [properties, setProperties] = useState(null)
  const [selectType, setSelectType] = useState(null)
  
  const [query, setQuery] = useState("")

  useEffect(()=>{
    if(propertyData){
        setProperties(propertyData)
    }
  },[])

  const handleChange = event => {
    if(event.targe.checked){
        setSelectType(event.targe.checked)
    }else {
        setSelectType(null)
    }
  }
    // ------------- Filter System --------------

    let filteredItems;
    if(properties){
        filteredItems = properties.filter(
        property => property.title.toLowerCase().includes(query.toLowerCase()) 
        || property.location.toLowerCase().includes(query.toLowerCase())
        )
    }

    console.log(filteredItems)

    return (
    <section className='section '>
        <div className="container">
            <div className='mb-5'>
            <SearchBar setQuery={setQuery} />
            </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-4 lg:grid-cols-5">
        <div className="md:col-span-2 lg:col-span-1 h-screen">
        <form className='space-y-4 border border-gray-200 pb-6 text-sm font-medium text-gray-900 px-5'>
        <FilterMenu handleChange={handleChange} />
        </form>
        </div>
        <div className="md:col-span-3 lg:col-span-4 bg-green-500">
        {properties && 
        <PropertiesList  properties={properties}/>}
        </div>
       
        </div>
        </div>
    </section>
  )
}

export default Properties