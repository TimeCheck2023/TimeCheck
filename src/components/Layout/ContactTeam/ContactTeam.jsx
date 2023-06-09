import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export const ContactTeam = (props) => {
  // console.log(props.image);
  return (
    <div className="w-full flex flex-col justify-center items-center my-10">
      <div className="">
        {props.image === "" ? (
          <div className="rounded-full w-40 h-40 bg-black"></div>
        ) : (
          <img
            src={props.image}
            alt={props.name}
            className="w-40 h-40 rounded-full object-cover"
          />
        )}
        <div className="flex justify-center items-center my-4">
          <h3>{props.name}</h3>
        </div>
        <div className="flex flex-row text-4xl justify-center items-center">
          <AiFillLinkedin />
          <AiFillGithub />
        </div>
      </div>
    </div>
  );
};
