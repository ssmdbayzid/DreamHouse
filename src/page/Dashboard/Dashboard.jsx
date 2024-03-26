import React from 'react'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'


const Dashboard = () => {
  return (
    <div className="max-w-[1170px] mx-auto">
    <div className='flex w-full'>
      <div className="">
      <SideBar className="md:w-1/3" />
      </div>
      <Outlet className="w-2/3" />
      </div>
      </div>
  )
}

export default Dashboard