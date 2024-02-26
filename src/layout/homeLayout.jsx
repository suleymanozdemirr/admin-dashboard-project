import React from "react"
import { Outlet } from "react-router-dom"
import Navbar from "../components/navbar/Navbar"
import Sidebar from "../components/sidebar/Sidebar"

export default function homeLayout() {
  return (
    <div className=' flex basis-[12%]'>
      <Sidebar />
      <div className='bg-[#f7f3f8] basis-[88%]'>
        <Navbar />
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
