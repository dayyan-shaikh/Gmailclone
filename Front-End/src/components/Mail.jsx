import React from "react";
import { IoMdArrowBack, IoMdMore } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import { BiArchiveIn } from "react-icons/bi";
import { MdOutlineAddTask, MdOutlineDriveFileMove, MdOutlineEmail , MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight, MdOutlineReport, MdOutlineWatchLater } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { useSelector } from "react-redux";
import axios from "axios";
import toast from "react-hot-toast";

const Mail = () => {
  const navigate = useNavigate();
  const {SelectedEmail} = useSelector(store=>store.app)
  const params = useParams()
  const deletehandler = async () => {
    try {
      const res = await axios.delete(`http://localhost:8080/api/v1/email/${params.id}`, { withCredentials: true });
      if (res.status === 200) {
        toast.success(res.data.message);
        navigate("/");
      } else {
        throw new Error("Failed to delete email");
      }
    } catch (error) {
      console.log("Error deleting email:", error);
      toast.error("Failed to delete email");
    }
  }
  return (
    <div className="flex-1 bg-white rounded-xl mx-5">
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center text-gray-700 py-4 gap-2">
          <div
            onClick={() => navigate("/")}
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
          <div onClick={deletehandler}
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
            <h1 className="text-xl font-medium">{SelectedEmail?.subject}</h1>
            <span className="text-gray-700 text-sm bg-gray-200 px-2 rounded-md">inbox</span>
          </div>
          <div>
            <p className="text-gray-500 text-sm">1hr ago</p>
          </div>
        </div>
        <div>
          <h1 className="text-sm">dayyanshaikh20@gamil.com</h1>
          <span>{SelectedEmail?.to}</span>
        </div>
        <div className="my-10">
          <p>{SelectedEmail?.message}</p>
        </div>
      </div>
    </div>
  );
};

export default Mail;
