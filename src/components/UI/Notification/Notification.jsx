import React from "react";
import { AiFillNotification, AiOutlineCloseCircle } from "react-icons/ai";

export const Notification = () => {
  return (
    <div className="flex gap-6 items-center border w-11/12 rounded-md bg-slate-50 shadow-md shadow-neutral-400 border-neutral-900 py-3 px-5 hover:bg-slate-100 hover:border-purple-500 cursor-pointer">
      <div className="text-5xl text-purple-600">
        <AiFillNotification />
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="font-bold text-2xl">Sena</h2>
        <p className="font-normal text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus, us
          odio orci...
        </p>
      </div>
      <div className="text-3xl">
        <AiOutlineCloseCircle />
      </div>
    </div>
  );
};
