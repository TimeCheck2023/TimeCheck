import React from "react";
import { Link } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { CgOpenCollective } from "react-icons/cg";
import { BiGroup,BiLogOut } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { AiOutlineSetting } from "react-icons/ai";

export const SlideBar = () => {
  return (
    <div className="h-full bg-slate-50 w-24 fixed border-r border-black">
      <div className="h-30 mb-14  w-full flex justify-center items-center ">
        <Link to={"/Events"}>
          <img
            src="/LOGOTIPO TIME CHECK.webp"
            alt="logotipo TimeCheck"
            width={70}
          />
        </Link>
      </div>
      <div className="flex flex-col  items-center h-3/5 mt-4 gap-8">
        <p className="text-slate-500 text-base">Menú</p>
        <div className="flex justify-between flex-col h-full">
          <div className="flex flex-col gap-10 text-2xl">
            <div className="bg-slate-300 p-2 rounded-md">
              <RxDashboard />
            </div>
            <div className="hover:bg-neutral-300 p-2 rounded-md">
              <CgOpenCollective />
            </div>
            <div className="hover:bg-neutral-300 p-2 rounded-md">
              <BiGroup />
            </div>
          </div>
          <div className="text-2xl flex flex-col gap-2">
            <div className="hover:bg-neutral-300 p-2 rounded-md">
              <IoIosNotificationsOutline />
            </div>
            <div className="hover:bg-neutral-300 p-2 rounded-md">
              <AiOutlineSetting />
            </div>
          </div>
        </div>
      </div>
      <hr className="mx-4 my-5 border-neutral-600" />
      <div className="flex flex-col items-center justify-around h-48">
        <p className="text-slate-500 text-base ">Cuenta</p>
        <div className="w-12 h-12 bg-slate-400 rounded-full mb-4"></div>
        <div className="hover:bg-neutral-300 p-2 rounded-md mb-4 text-2xl">
              <BiLogOut />
        </div>
        <div className="w-5 h-5 bg-yellow-300 rounded-full"></div>
      </div>
    </div>
  );
};
