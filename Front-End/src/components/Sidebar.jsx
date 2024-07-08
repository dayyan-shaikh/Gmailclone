import React from 'react'
import { LuPencil } from "react-icons/lu";

const Sidebar = () => {
  return (
    <div className='w-[15%]'>
      <div className='p-3'>
        <button className='flex items-center gap-5 px-8 py-5 bg-[#C2E7FF] rounded-2xl hover:shadow-md'>
          <LuPencil size={'22px'}/>
          Compose
        </button>
      </div>
      
    </div>
  )
}

export default Sidebar
