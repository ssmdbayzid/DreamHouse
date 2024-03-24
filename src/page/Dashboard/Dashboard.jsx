import React from 'react'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'


const Dashboard = () => {
  return (
    <div className='flex'>
      <SideBar />
      <Outlet />
    </div>
  )
}

export default Dashboard