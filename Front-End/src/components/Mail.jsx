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
      <div className="h-[90vh] overflow-y-auto p-4">
        <div className="flex justify-between items-center bg-white gap-1">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-medium">Subject</h1>
            <span className="text-gray-700 text-sm bg-gray-200 px-2 rounded-md">inbox</span>
          </div>
          <div>
            <p className="text-gray-500 text-sm">1hr ago</p>
          </div>
        </div>
        <div>
          <h1 className="text-sm">dayyanshaikh20@gamil.com</h1>
          <span>to me</span>
        </div>
        <div className="my-10">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore at iusto similique voluptas rem minima.</p>
        </div>
      </div>
    </div>
  );
};

export default Mail;
