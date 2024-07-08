import React from "react";
import { LuPencil } from "react-icons/lu";
import { MdInbox, MdMore, MdOutlineDrafts, MdOutlineKeyboardArrowDown, MdOutlineWatchLater,} from "react-icons/md";
import { IoMdStarOutline } from "react-icons/io";
import { TbSend2 } from "react-icons/tb";

const sidebarItems = [
  {
    icon: <MdInbox size={"22px"} />,
    text: "Inbox",
  },
  {
    icon: <IoMdStarOutline size={"22px"} />,
    text: "Starred",
  },
  {
    icon: <MdOutlineWatchLater size={"22px"} />,
    text: "Snoozed",
  },
  {
    icon: <TbSend2 size={"22px"} />,
    text: "Sent",
  },
  {
    icon: <MdOutlineDrafts size={"22px"} />,
    text: "Drafts",
  },
  {
    icon: <MdOutlineKeyboardArrowDown size={"22px"} />,
    text: "More",
  },
];

const Sidebar = () => {
  return (
    <div className="w-[15%]">
      <div className="p-3">
        <button className="flex items-center gap-5 px-8 py-5 bg-[#C2E7FF] rounded-2xl hover:shadow-md">
          <LuPencil size={"22px"} />
          Compose
        </button>
      </div>
      <div className="text-gray-600">
        {sidebarItems.map((item, index) => {
          return (
            <div className="flex items-center px-10 gap-6 my-3 rounded-r-full hover:cursor-pointer hover:bg-gray-300">
              {item.icon}
              {item.text}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
