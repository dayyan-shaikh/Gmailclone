import React, { useState } from "react";
import {
  MdCropSquare,
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { FaCaretDown, FaUserFriends } from "react-icons/fa";
import { MdInbox } from "react-icons/md";
import { IoMdRefresh } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GoTag } from "react-icons/go";
import Emails from "./Emails";

const mailType = [
  {
    icons: <MdInbox size={"22px"} />,
    text: "Primary",
  },
  {
    icons: <GoTag size={"22px"} />,
    text: "Promotions",
  },
  {
    icons: <FaUserFriends size={"22px"} />,
    text: "Socials",
  },
];

const Inbox = () => {
  const [selected, setselected] = useState(0);

  return (
    <div className="flex-1 bg-white rounded-xl mx-5">
      <div className="flex items-center justify-between px-4 my-2">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 ">
            <MdCropSquare
              size={"22px"}
              className="rounded-full hover:bg-gray-200 hover:cursor-pointer"
            />
            <FaCaretDown
              size={"22px"}
              className="rounded-full hover:bg-gray-200 hover:cursor-pointer"
            />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-200 hover:cursor-pointer">
            <IoMdRefresh size={"22px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-200 hover:cursor-pointer">
            <BsThreeDotsVertical />
          </div>
        </div>
        <div className="flex gap-3">
          <span className="text-gray-500 text-sm">1 to 50</span>
          <MdOutlineKeyboardArrowLeft size={"22px"} />
          <MdOutlineKeyboardArrowRight size={"22px"} />
        </div>
      </div>
      <div className="h-90vh overflow-y-auto">
        <div className="flex items-center gap-1">
          {mailType.map((item, index) => {
            return (
              <button
                onClick={() => setselected(index)}
                className={`${
                  selected == index
                    ? "border-b-4 border-b-blue-400 text-blue-400"
                    : "border-b-4 border-b-transparent"
                } flex items-center gap-5 px-4 py-5 w-52 hover:bg-gray-100`}
              >
                {item.icons}
                <span>{item.text}</span>
              </button>
            );
          })}
        </div>
        <Emails />
      </div>
    </div>
  );
};

export default Inbox;
