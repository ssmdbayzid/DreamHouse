import React, { useState } from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  const [selectedPage, setSelectedPage] = useState("home")
  
  return (
    <div>
        <Header setSelectedPage={setSelectedPage} selectedPage={selectedPage} />  
        <div className='flex-1'>
           <Outlet />       
          </div>     
        <Footer />
    </div>
  )
}

export default MainLayout