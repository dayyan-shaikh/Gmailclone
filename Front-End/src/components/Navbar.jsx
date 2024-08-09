import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { FaRegQuestionCircle } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
import Avatar from "react-avatar";
import { useDispatch, useSelector } from "react-redux";
import {setAuthUser, setSearchText} from "../redux/appSlice"
import axios from "axios";
import toast from "react-hot-toast";

const Navbar = () => {
  const [text,setText] = useState("");
  const {user} = useSelector(store => store.app);
  const dispatch = useDispatch();
  const logouthandler = async () => {
    try {
      const res = await axios.get('http://localhost:8080/api/v1/user/logout');
      console.log(res);
      toast.success(res.data.message)
      dispatch(setAuthUser(null))
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(()=>{
    dispatch(setSearchText(text))
  },[text]);
  return (
    <div className="flex items-center justify-between mx-3 h-16">
      <div className="flex items-center gap-10 px-5">
        <div className="flex items-center gap-3">
          <div className="p-1 hover:bg-gray-200 hover:*:cursor-pointer rounded-full w-10 h-10 flex items-center justify-center">
            <RxHamburgerMenu size={"20"} />
          </div>
          <img
            className="w-8"
            src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png"
            alt="logo"
          />
          <h1 className="text-2xl">Gmail</h1>
        </div>
      </div>
      {user && (
        <>
          <div className="w-[50%] mr-64">
            <div className="flex items-center bg-[#EAF1FB] px-2 py-3 rounded-full">
              <CiSearch
                size={"24px"}
                className="text-gray-700 hover:cursor-pointer"
              />
              <input
                type="text"
                value={text}
                onChange={(e)=>setText(e.target.value)}
                placeholder="Search mail"
                className="rounded-full w-full bg-transparent outline-none px-1"
              />
            </div>
          </div>
          <div className="flex items-center gap-2 hover:cursor-pointer">
            <div className="p-3 rounded-full hover:bg-gray-200">
              <FaRegQuestionCircle size={"24px"} />
            </div>
            <div className="p-3 rounded-full hover:bg-gray-200">
              <IoMdSettings size={"24px"} />
            </div>
            <div className="p-3 rounded-full hover:bg-gray-200">
              <TbGridDots size={"24px"} />
            </div>
            <span onClick={logouthandler} className="underline cursor-pointer">Logout</span>
            <Avatar
              src={user.profilePhoto}
              size="45"
              round={true}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
