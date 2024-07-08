import React from 'react'
import { FaRegSquare } from "react-icons/fa";
import { RxDragHandleDots2 } from "react-icons/rx";
import { IoIosStarOutline } from "react-icons/io";

const Email = () => {
  return (
    <div className='flex items-center justify-between border-b border-gray-200 px-4 py-3 text-sm hover:cursor-pointer hover:shadow-md'>
      <div className='flex items-center gap-3'>
        <div className='text-gray-400'>
          <FaRegSquare size={'15px'} />
        </div>
        <div className='text-gray-400'>
          <IoIosStarOutline size={'15px'} />
        </div>
        <div>
          <h1 className='font-semibold'>Internships</h1>
        </div>
      </div>

      {/* <div>
        <IoIosStarOutline />
      </div> */}
      <div className='flex-1 ml-4'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, unde.</p>
      </div>
      <div className='font-bold flex-none'>
        <p>11:20 PM</p>
      </div>
    </div>
  )
}

export default Email
