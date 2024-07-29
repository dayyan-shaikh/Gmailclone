import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
import { setEmails, setOpen } from '../redux/appSlice';
import toast from "react-hot-toast";
import axios from "axios";
import { string } from 'i/lib/util';

const SendEmail = () => {
  
  const {open,emails} = useSelector((store=>store.app));
  const dispatch = useDispatch();

  const [formdata,setformdata]=useState({
    to:"",
    subject:"",
    message:""
  });

  const changehandler = (e) => {
    setformdata({...formdata,[e.target.name]:e.target.value});
  }

  const submithandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/v1/email/create",formdata,{
        headers:{
          "Content-Type":"application/json"
        },
        withCredentials:true
      });
      dispatch(setEmails([...emails, res.data.email]))
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message)
    }
    dispatch(setOpen(false));
  }

  return (
    <div className={` ${open ? 'block' : 'hidden'} bg-white max-w-6xl shadow-xl shadow-slate-600 rounded-t-md`}>
      <div className='flex items-center justify-between px-2 py-2 bg-[#F2F6FC] hover:cursor-pointer'>
        <h1>New Message</h1>
        <div onClick={()=>dispatch(setOpen(false))} className='hover:bg-gray-200 rounded-sm p-1'>
        <RxCross2 />
        </div>
      </div>
      <form onSubmit={submithandler} className='flex flex-col p-2 gap-2'>
        <input onChange={changehandler} value={formdata.to} name='to' type="text" placeholder='To' className='outline-none py-1'/>
        <input onChange={changehandler} value={formdata.subject} name='subject' type="text" placeholder='Subject' className='outline-none py-1'/>
        <textarea onChange={changehandler} value={formdata.message} name='message' cols={30} rows={10} className='outline-none'></textarea>
        <button type='submit' className='mb-3 w-28 text-lg bg-blue-700 px-2 py-1 rounded-full text-white'>send</button>
      </form>
    </div>
  )
}

export default SendEmail
