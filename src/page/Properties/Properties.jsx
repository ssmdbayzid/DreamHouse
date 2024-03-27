import React, { useEffect, useState } from 'react'
import { propertyData } from '../../assets/data'
import PropertiesList from './PropertiesList'
import FilterMenu from './FilterMenu'
import SearchBar from './SearchBar'
import MobileFilterMenu from './MobileFilterMenu'
import getAllProperties from '../../hooks/getAllProperties'
import { useGetAllPropertiesQuery } from '../../app/features/propertiesApiSlice'
import Loader from '../../hooks/Loader'
import { useSearchParams } from 'react-router-dom'



const Properties = () => {
  
  const [openFilterMenu, setOpenFilterMenu] = useState(false)
  const [query, setQuery] = useState("")
  const [selectedType, setSelectedType] = useState("")
  
  const [propertiesData, setPropertiesData] = useState(null)
  
  const {properties, loading} = getAllProperties()


  useEffect(()=>{
    if(properties){
      setPropertiesData(properties)
    }
  },[properties])
  


  const handleChange = event => {    
    if(event.target.checked === true && event.target.value){
      setSelectedType(event.target.value)
    } else if(event.target.checked === false){
      setSelectedType(null)            
    }
  }


    // ------------- Filter System --------------

    let filteredItems;
    if(propertiesData){
        filteredItems = propertiesData?.filter(
        property => property.title.toLowerCase().includes(query.toLowerCase()) 
        || property.street.toLowerCase().includes(query.toLowerCase())
        || property.city.toLowerCase().includes(query.toLowerCase())
        || property.post_office.toLowerCase().includes(query.toLowerCase())
        || property.police_station.toLowerCase().includes(query.toLowerCase())
        || property.country.toLowerCase().includes(query.toLowerCase())        
        )
    }

    const  filterProperties = (propertiesData, selected, query) =>{
      let filteredProperties = propertiesData;

      if(query){
        filteredProperties = filteredItems
      }

      if(selected){
        console.log(selected)
        filteredProperties = filteredProperties.filter(
          property => property.status.toLowerCase() === selected
        )
      }

      return filteredProperties
    }

    const result = filterProperties(propertiesData, selectedType, query)
   
    console.log(propertiesData)
    // --------- Sort By H2L or L2H rent--------

    const onChangeSort = (e) =>{      
      if(e.target.value === "H2L"){
        const sorted = [...propertiesData].sort((a,b)=> b.price - a.price)
        setPropertiesData(sorted)
      }else if(e.target.value === "L2H"){
        const sorted = [...propertiesData].sort((a,b)=> a.price - b.price)
        setPropertiesData(sorted)
      }else if(e.target.value ===""){       
        if(propertyData) setPropertiesData(propertyData)
      }     
    }

    
         
    return (
    <section className='section '>
       {loading ? <>       
       <Loader />
       </>  :
        <div className="container">
          {openFilterMenu &&  <MobileFilterMenu 
          handleChange={handleChange} onChangeSort={onChangeSort}          
          setOpenFilterMenu={setOpenFilterMenu} openFilterMenu={openFilterMenu}/>
          }

            <div className='mb-5 flex items-center'>
            <SearchBar setQuery={setQuery} />

               {/* ---------- Filter Icon --------- */}
          <button
          onClick={()=> setOpenFilterMenu(!openFilterMenu)}
          type="button" className="  p-2 text-gray-400 hover:text-gray-500 sm:ml-6 ">
            <span className="sr-only">Filters</span>
            <svg className="h-5 w-5" aria-hidden="true" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 018 18.25v-5.757a2.25 2.25 0 00-.659-1.591L2.659 6.22A2.25 2.25 0 012 4.629V2.34a.75.75 0 01.628-.74z" clipRule="evenodd" />
            </svg>
          </button>
            </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-4 lg:grid-cols-5">
        <div className="hidden sticky md:block md:col-span-2 lg:col-span-1 h-screen">
        <form className=' space-y-4 border border-gray-200 pb-6 text-sm font-medium text-gray-900 px-5'>
        <FilterMenu handleChange={handleChange} onChangeSort={onChangeSort}
       />
        </form>
        </div>
        <div className="md:col-span-3 lg:col-span-4 ">
        {propertiesData && 
        <PropertiesList  properties={result} />}
        </div>
       
        </div>
        </div>}
    </section>
  )
}

export default Properties