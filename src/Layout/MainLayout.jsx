import React, { useState } from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import { Outlet } from 'react-router-dom'


const MainLayout = () => {
  
  return (
    <div>
        <Header  />          
        <div className='h-[calc(100vh-11vh)]'>
           <Outlet />       
          </div>     
        <Footer />
    </div>
  )
}

export default MainLayout