import React, { useEffect, useState } from "react";
import { MdGroups, MdContactSupport } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";
import { IoIosPersonAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { CgOpenCollective } from "react-icons/cg";
import { BiGroup, BiLogOut } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io";
import {
  AiOutlineSetting,
  AiOutlineCaretUp,
  AiOutlineCaretDown,
} from "react-icons/ai";
import jwtDecode from "jwt-decode";
import { BtnLogout } from "../../UI/BtnLogout/BtnLogout";

export const SlideBarUser = ({
  activeHome,
  activeAboutUs,
  activeContactUs,
  activeNotify,
}) => {
  const [openNavBar, setOpenNavBar] = useState(false);
  const [lower, setLower] = useState(false);
  const [isDarkModeOn, setIsDarkModeOn] = useState(false);

  const token = localStorage.getItem("token_login");
  const decoded = jwtDecode(token);
  const emailUser = decoded.payload.correo;

  const toggleNavBar = () => {
    setIsDarkModeOn(false);
    setOpenNavBar(!openNavBar);
  };

  const toggleDarkMode = () => {
    setIsDarkModeOn(!isDarkModeOn);
  };

  const lowerGroup = () => {
    setLower(!lower);
  };

  useEffect(() => {
    if (!openNavBar) {
      setLower(false);
    }
  }, [openNavBar]);

  return (
    <div
      onMouseEnter={toggleNavBar}
      onMouseLeave={toggleNavBar}
      className={`h-full hidden md:block z-50 bg-slate-50 fixed border-r border-neutral-400 ${
        openNavBar
          ? " w-72 transition-all duration-500 ease-in-out"
          : "w-24 transition-all duration-300 ease-in"
      }`}>
      <div className="h-30 mb-14  w-full flex justify-center items-center ">
        <Link to={"/Events"} className={`${openNavBar && "mb-20"}`}>
          {openNavBar ? (
            <img
              src="/LOGO TIME CHECK A COLOR.webp"
              alt="logotipo TimeCheck"
              width={300}
              className="absolute bottom-3/4 mb-24 left-1"
            />
          ) : (
            <img
              src="/LOGOTIPO TIME CHECK.webp"
              alt="logotipo TimeCheck"
              width={70}
            />
          )}
        </Link>
      </div>
      <div
        className={`flex flex-col h-3/5 w-full mt-4 gap-8 ${
          openNavBar ? "items-start text-right mx-7" : "items-center"
        }`}>
        <p className="text-slate-500 text-base">Menú</p>
        <div
          className={`flex justify-between flex-col h-full ${
            openNavBar && "w-full"
          }`}>
          <div className="flex flex-col gap-10 text-2xl justify-start">
            <div
              className={`${
                activeHome ? "bg-slate-300" : "hover:bg-neutral-300"
              } p-2 rounded-md flex flex-row gap-3 ${
                openNavBar
                  ? "w-4/5 justify-start items-start"
                  : "justify-center items-center"
              }`}>
              <Link to={"/Dashboard"} className="flex gap-3">
                <AiFillHome />
                {openNavBar ? (
                  <p className="text-lg font-medium">Inicio</p>
                ) : (
                  ""
                )}
              </Link>
            </div>
            <div
              className={`${
                activeAboutUs ? "bg-slate-300" : "hover:bg-neutral-300"
              } p-2 rounded-md flex flex-row gap-3 text-lef ${
                openNavBar
                  ? "w-4/5 justify-start items-start"
                  : "justify-center items-center"
              }`}>
              <Link to="/Statistics" className="flex flex-row gap-3">
                <MdGroups />
                {openNavBar ? (
                  <p className="text-lg font-medium">Sobre nosotros</p>
                ) : (
                  ""
                )}
              </Link>
            </div>
            <div
              className={`${
                activeContactUs ? "bg-slate-300" : "hover:bg-neutral-300"
              } p-2 rounded-md flex flex-row gap-3 text-lef ${
                openNavBar
                  ? "w-4/5 justify-start items-start"
                  : "justify-center items-center"
              }`}>
              <Link to="/Statistics" className="flex flex-row gap-3">
                <MdContactSupport />
                {openNavBar ? (
                  <p className="text-lg font-medium">Contáctanos</p>
                ) : (
                  ""
                )}
              </Link>
            </div>
          </div>
          <div className="text-2xl flex flex-col gap-2">
            <div
              className={`${
                activeNotify ? "bg-slate-300" : "hover:bg-neutral-300"
              } p-2 rounded-md flex flex-row gap-3 text-lef ${
                openNavBar
                  ? "w-4/5 justify-start items-start"
                  : "justify-center items-center"
              }`}>
              <IoIosNotificationsOutline />
              {openNavBar ? (
                <p className="text-lg font-medium">Notificaciones</p>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
      <hr className="mx-4 my-5 border-neutral-600" />
      <div
        className={`flex flex-col justify-around h-48 ${
          openNavBar ? "items-start px-6" : "items-center"
        }`}>
        <p className="text-slate-500 text-base ">Cuenta</p>
        <div className={`flex flex-row ${openNavBar && "gap-3"}`}>
          <div className="w-12 h-12 bg-slate-400 rounded-full mb-4"></div>
          <div>
            {openNavBar && (
              <p className="font-semibold truncate">Alcaldia - Armenia</p>
            )}
            {openNavBar && (
              <p className="transition-all duration-500 ease-in-out font-medium text-sm text-slate-400 truncate ">
                {emailUser}
              </p>
            )}
          </div>
        </div>
        <BtnLogout openNavBar={openNavBar} />
      </div>
    </div>
  );
};
