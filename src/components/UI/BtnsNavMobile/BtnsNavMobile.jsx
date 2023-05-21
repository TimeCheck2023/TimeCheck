import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BiGroup } from "react-icons/bi";
import { CgOpenCollective } from "react-icons/cg";
import { MdOutlineContactMail, MdOutlineContentPasteSearch } from "react-icons/md";
import { Link } from "react-router-dom";

export const BtnsNavMobile = ({ menuRef, userType }) => {
  return (
    <div
      className="fixed bottom-16 left-1/2 transform -translate-x-1/2 z-50 menu-container"
      ref={menuRef}>
      <div className="btns-menu flex justify-center items-center">
        {userType == 1 ? (
          <Link
            to="/ContactUs"
            className="bg-purple-600 rounded-full h-16 w-16 mx-2 text-center flex justify-center items-center text-3xl text-white">
            <MdOutlineContactMail />
          </Link>
        ) : (
          <Link
            to="/Statistics"
            className="bg-purple-600 rounded-full h-16 w-16 mx-2 text-center flex justify-center items-center text-3xl text-white">
            <CgOpenCollective />
          </Link>
        )}
        <Link
          to="/Dashboard"
          className="bg-purple-600 rounded-full h-16 w-16 mx-2 mb-16 text-center flex justify-center items-center text-3xl">
          <AiFillHome className="text-white" />
        </Link>
        {userType == 1 ? (
          <Link
            to="/AboutUs"
            className="bg-purple-600 rounded-full h-16 w-16 mx-2 text-center flex justify-center items-center text-3xl text-white">
            <MdOutlineContentPasteSearch />
          </Link>
        ) : (
          <Link
            to="/AddSubOrg"
            className="bg-purple-600 rounded-full h-16 w-16 mx-2 text-center flex justify-center items-center text-3xl text-white">
            <BiGroup />
          </Link>
        )}
      </div>
    </div>
  );
};
