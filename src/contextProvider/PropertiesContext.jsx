import React, { createContext, useContext, useState } from 'react'
import { useGetAllPropertiesQuery } from '../app/features/propertiesApiSlice'

const propertiesContext = createContext()

const PropertiesProvider = ({children}) => {
    const [loading, setLoading] = useState(false)
    const [data, isLoading] = useGetAllPropertiesQuery()
    const [properties, setProperties] = useState(null)
    const [error, setError] = useState("")


    const getProperties = async () => {
        try {
            const result = await useGetAllPropertiesQuery();
            console.log(result)
        } catch (error) {
            console.log(error.message)
            setError(error.message)
        }        
    }
     
  return (
    <propertiesContext.Provider value={getProperties}>
        {children}
    </propertiesContext.Provider>
  )
}

export default PropertiesProvider;


// export const useProperties = useContext(propertiesContext)