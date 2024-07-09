import React from "react";
import { IoMdArrowBack, IoMdMore } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { BiArchiveIn } from "react-icons/bi";
import { MdOutlineAddTask, MdOutlineDriveFileMove, MdOutlineEmail , MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight, MdOutlineReport, MdOutlineWatchLater } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";

const Mail = () => {
  const naviagte = useNavigate();

  return (
    <div className="flex-1 bg-white rounded-xl mx-5">
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center text-gray-700 py-4 gap-2">
          <div
            onClick={() => naviagte("/")}
            className="p-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
            <IoMdArrowBack size={"22px"} />
          </div>
          <div
            className="p-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
            <BiArchiveIn size={"22px"} />
          </div>
          <div
            className="p-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
            <MdOutlineReport size={"22px"} />
          </div>
          <div
            className="p-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
            <MdDeleteOutline size={"22px"} />
          </div>
          <div
            className="p-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
            <MdOutlineEmail size={"22px"} />
          </div>
          <div
            className="p-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
            <MdOutlineWatchLater size={"22px"} />
          </div>
          <div
            className="p-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
            <MdOutlineAddTask size={"22px"} />
          </div>
          <div
            className="p-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
            <MdOutlineDriveFileMove size={"22px"} />
          </div>
          <div
            className="p-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
            <IoMdMore size={"22px"} />
          </div>
        </div>
        <div className="flex gap-3">
          <span className="text-gray-500 text-sm">1 to 50</span>
          <MdOutlineKeyboardArrowLeft size={"22px"} />
          <MdOutlineKeyboardArrowRight size={"22px"} />
        </div>
      </div>
    </div>
  );
};

export default Mail;
