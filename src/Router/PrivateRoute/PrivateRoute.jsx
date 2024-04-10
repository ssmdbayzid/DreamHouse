import React from 'react'
import {useLocation, Navigate} from 'react-router-dom'
const PrivateRoute = ({children}) => {
  const token = localStorage.getItem("accessToken")
   
  const location = useLocation()     
  
    
  const accessableRoute =  token ? children 
  :  <Navigate to="/login" state={{from: location}} replace />  
  return accessableRoute;
}

export default PrivateRoute