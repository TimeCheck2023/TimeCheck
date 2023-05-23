import React from "react";
import { Link } from "react-router-dom";

export const CardSubOrganization = ({
  id,
  title,
  organization,
  description,
}) => {
  return (
    <Link
      to={`/suborganization/${id}`} // URL con el ID de la suborganización
      className="border w-4/5 flex flex-col gap-1 text-center h-52 rounded-md shadow-md shadow-neutral-400 px-2 py-2 mb-4 bg-slate-100 hover:scale-110 hover:cursor-pointer">
      <h3 className="text-xl text-purple-600 font-semibold">{title}</h3>
      <p className="text-sm font-bold mb-2">{organization}</p>
      <p>{description}</p>
    </Link>
  );
};
