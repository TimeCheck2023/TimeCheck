import React, { useState } from "react";
import { AiFillLike } from "react-icons/ai";

export const ImageEventsInfo = (props) => {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);
  return (
    <div
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      className="shadow-2xl rounded-md relative">
      <div
        className={`arriba bg-cover bg-center h-80 w-60 rounded-md ${props.imageEvent}  hover:relative hover:bottom-24 rounded-md`}></div>
      {hovered ? (
        <div className="abajo absolute top-56 p-2 flex flex-col">
          <div className="font-semibold text-slate-500">
            <p>{props.placeEvent}</p>
            <p className="font-bold">{props.priceEvent}</p>
          </div>
          <div className="flex flex-row items-center gap-3">
            <div className="text-purple-600 font-bold">
              <p>{props.typeEvent}</p>
            </div>
            <div className="text-purple-600 font-extrabold flex flex-row items-center w-14 text-center pl-1 h-7 mt-1 gap-2 bg-slate-200 shadow-md rounded-md">
              <AiFillLike />
              {props.likesEvent }
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
