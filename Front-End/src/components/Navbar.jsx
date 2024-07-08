import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { FaRegQuestionCircle } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
import Avatar from 'react-avatar';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between mx-3 h-16">
      <div className="flex items-center gap-10 px-5">
        <div className="flex items-center gap-3">
          <div className="p-1 hover:bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center">
            <RxHamburgerMenu size={'20'}/>
          </div>
          <img
            className="w-8"
            src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png"
            alt="logo"
          />
          <h1 className="text-2xl">Gmail</h1>
        </div>
      </div>
      <div className="w-[40%] mr-60">
        <div className="flex items-center bg-[#EAF1FB] px-2 py-3 rounded-full">
          <CiSearch size={"24px"} className="text-gray-700" />
          <input
            type="text"
            placeholder="Search Email"
            className="rounded-full w-full bg-transparent outline-none px-1"
          />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="p-3 rounded-full hover:bg-gray-200">
          <FaRegQuestionCircle size={'24px'}/>
        </div>
        <div className="p-3 rounded-full hover:bg-gray-200">
          <IoMdSettings size={'24px'}/>
        </div>
        <div className="p-3 rounded-full hover:bg-gray-200">
          <TbGridDots size={'24px'}/>
        </div>
        <Avatar src="https://img.freepik.com/free-vector/user-circles-set_78370-4704.jpg?size=626&ext=jpg&ga=GA1.1.426541757.1691821798&semt=sph" size="45" round={true} />
      </div>
    </div>
  );
};

export default Navbar;
