import React, { useState } from "react";
import { AiFillLike } from "react-icons/ai";

export default function ImageEventsInfo(props) {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);
  return (
    <div
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      className="shadow-2xl rounded-md relative p-5 md:p-0">
      <div
        className={`${props.imageEvent} arriba bg-cover bg-center h-80  md:w-60 rounded-md hover:relative  hover:bottom-28 md:hover:bottom-24 shadow-2xl relative p-5 md:p-0`}></div>
      {hovered ? (
        <div className="abajo absolute -z-50 top-56 pt-2 right-1 md:p-2 flex flex-col w-full ">
          <div className="font-semibold text-slate-500 text-center md:text-left">
            <p>{props.placeEvent}</p>
            <p className="font-bold">{props.priceEvent}</p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-1 md:gap-3 ">
            <div className="text-purple-600 font-bold ">
              <p>{props.typeEvent}</p>
            </div>
            <div className="text-purple-600 font-extrabold flex flex-row justify-center items-center  w-14 text-center md:pl-1 h-7 mt-1 gap-2 bg-slate-200 shadow-md rounded-md">
              <AiFillLike />
              {props.likesEvent}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
