import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

function NewPage({name}) {
  return (
    <div className='w-full min-h-svh flex flex-col relative '>
      <Navbar />
      {/* Wrapper */}
      <div className='flex items-start justify-between gap-5 w-full h-full relative text-dark-text font-medium  '>
        <Sidebar />
        <div className='w-full flex-col pl-[330px] pt-7 pr-7 pb-7 space-y-2'>
        <h1 className='text-main-color text-sm font-medium capitalize'>{name}</h1>

         
        </div>
      </div>
    </div>
  )
}

export default NewPage