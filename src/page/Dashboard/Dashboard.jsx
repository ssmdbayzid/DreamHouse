import React from 'react'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'


const Dashboard = () => {
  return (
    <div className="max-w-[1170px] w-full mx-auto">
    <div className='md:flex flex-row w-full'>
      <div className="md:block hidden  md:w-1/3">
      <SideBar className=" bg-green-200 md:w-1/3" />
      </div>
      <div className="w-full">
      <Outlet  />
      </div>
      </div>
      </div>
  )
}

export default Dashboard