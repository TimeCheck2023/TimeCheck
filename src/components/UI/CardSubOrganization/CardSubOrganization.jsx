import React from "react";
import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import { BsPeopleFill, BsBuilding, BsInfoCircleFill } from "react-icons/bs";

export const CardSubOrganization = ({
  id,
  title,
  organization,
  description,
}) => {
  return (
    <Link
      to={`/suborganization/${id}`}
      className="flex flex-col gap-7 w-96 bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
      <div className="p-4 flex flex-col gap-1">
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600">
          <BsBuilding className="inline-block mr-2" />
          {organization}
        </p>
        <p className="text-gray-700 mt-3">{description}</p>
      </div>
      <div className="flex items-center justify-between p-4 bg-gray-100">
        <p className="text-xs text-gray-600 flex items-center">
          <BsInfoCircleFill className="inline-block mr-1" />
          Ver más detalles
        </p>
        <FiChevronRight className="text-gray-600" />
      </div>
    </Link>
  );
};
