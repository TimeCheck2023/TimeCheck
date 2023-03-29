import React from "react";

export const LabelBtn = (props) => {
  return (
    <div className="flex flex-col ">
      <label htmlFor={props.id} className="font-bold">
        {props.label} <strong className="text-red-600">*</strong>
      </label>
      <input
        id={props.id}
        className={`bg-blue-gray-50 border border-blue-gray-300 shadow-md rounded-xl h-12 w-${props.width} p-2 hover:border-gray-400 focus:border-gray-600 focus:outline-none`}
        type="text"
      />
    </div>
  );
};
