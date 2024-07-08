import React from "react";
import { MdCropSquare } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";
import { IoMdRefresh } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";

const Inbox = () => {
  return (
    <div className="flex-1 bg-white rounded-xl mx-5">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 ">
          <MdCropSquare size={"22px"} className="rounded-full hover:bg-gray-200 hover:cursor-pointer"/>
          <FaCaretDown size={"22px"} className="rounded-full hover:bg-gray-200 hover:cursor-pointer"/>
        </div>
        <div className="p-2 rounded-full hover:bg-gray-200 hover:cursor-pointer">
          <IoMdRefresh size={"22px"} />
        </div>
        <div className="p-2 rounded-full hover:bg-gray-200 hover:cursor-pointer">
          <BsThreeDotsVertical />
        </div>
      </div>
    </div>
  );
};

export default Inbox;
