import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
import { setOpen } from '../redux/appSlice';

const SendEmail = () => {
 
  const {open} = useSelector((store=>store.app));
  const dispatch = useDispatch();

  return (
    <div className={` ${open ? 'block' : 'hidden'} bg-white max-w-6xl shadow-xl shadow-slate-600 rounded-t-md`}>
      <div className='flex items-center justify-between px-2 py-2 bg-[#F2F6FC] hover:cursor-pointer'>
        <h1>New Message</h1>
        <div onClick={()=>dispatch(setOpen(false))} className='hover:bg-gray-200 rounded-sm p-1'>
        <RxCross2 />
        </div>
      </div>
      <form className='flex flex-col p-2 gap-2'>
        <input type="text" placeholder='To' className='outline-none py-1'/>
        <input type="text" placeholder='Subject' className='outline-none py-1'/>
        <textarea cols={30} rows={10} className='outline-none'></textarea>
      </form>
    </div>
  )
}

export default SendEmail
