import React from "react";

export const BtnModalInfo = ({ text }) => {
  return (
    <>
      <button className="text-purple-600 border px-6 2xl:px-4 rounded-md py-2 shadow-md shadow-neutral-300">
        {text}
      </button>
    </>
  );
};
