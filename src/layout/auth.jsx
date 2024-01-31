import React from "react"
import login from "../assets/20547283_6310507.jpg"

export default function LoginLayout({ children }) {
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0'>
        <div className='relative'>
          <img
            src={login}
            alt=''
            className='w-[500px] h-full hidden rounded-r-2xl md:block object-cover'
          />
        </div>
        <div>{children}</div>
      </div>
    </div>
  )
}
