import React, { useEffect, useState } from 'react'
import { useGetAllPropertiesQuery } from '../app/features/propertiesApiSlice';

const getAllProperties = () => {
    const [properties, setProperties] = useState(null)
    const {data, isLoading} = useGetAllPropertiesQuery()
    const [loading, setLoading] = useState(false)
    
    useEffect(()=>{        
    if(isLoading){
        setLoading(true)
    }
        if(data){
            setProperties(data?.data)
            setLoading(false)
        }

    },[data])

    
  return {
    properties,
    loading
  }
}

export default getAllProperties