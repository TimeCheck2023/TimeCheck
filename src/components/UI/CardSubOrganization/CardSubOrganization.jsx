import React from "react";

export const CardSubOrganization = ({ title, organization, description }) => {
  return (
    <div className="border w-4/5 flex flex-col gap-1 h-52 rounded-md shadow-md shadow-neutral-400 px-2 py-2 mb-4">
      <h3 className="text-xl text-purple-600 font-semibold">{title}</h3>
      <p className="text-sm font-bold mb-2">{organization}</p>
      <p>{description}</p>
    </div>
  );
};
