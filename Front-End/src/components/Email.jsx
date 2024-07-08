import React from 'react'
import { FaRegSquare } from "react-icons/fa";
import { IoIosStarOutline } from "react-icons/io";
import { useNavigate } from 'react-router-dom'

const Email = () => {

  const navigate = useNavigate();
  const openMail = () => {
    navigate("/mail/1234");
  }

  return (
    <div onClick={openMail} className='flex items-center justify-between border-b border-gray-200 px-4 py-3 text-sm hover:cursor-pointer hover:shadow-md'>
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
