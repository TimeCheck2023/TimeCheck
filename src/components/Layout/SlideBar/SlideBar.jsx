import React, { useEffect, useState } from "react";
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
import { BtnLogout } from "../../UI/BtnLogout/BtnLogout";
import jwtDecode from "jwt-decode";

export const SlideBar = ({
  activeEvent,
  activeStats,
  activeGroup,
  activeNotify,
}) => {
  const [openNavBar, setOpenNavBar] = useState(false);
  const [lower, setLower] = useState(false);

  const token = localStorage.getItem("token_login");
  const decoded = jwtDecode(token);
  const emailUser = decoded.payload.correo;

  const toggleNavBar = () => {
    setTimeout(() => setOpenNavBar(!openNavBar), 450);
  };
  const toggleNavBarClose = () => {
    setTimeout(() => setOpenNavBar(!openNavBar), 10);
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
      onMouseLeave={toggleNavBarClose}
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
                activeEvent ? "bg-slate-300" : "hover:bg-neutral-300"
              } p-2 rounded-md flex flex-row gap-3 ${
                openNavBar
                  ? "w-4/5 justify-start items-start"
                  : "justify-center items-center"
              }`}>
              <Link to={"/Dashboard"} className="flex gap-3">
                <RxDashboard />
                {openNavBar ? (
                  <p className="text-lg font-medium">Eventos</p>
                ) : (
                  ""
                )}
              </Link>
            </div>
            <div
              className={`${
                activeStats ? "bg-slate-300" : "hover:bg-neutral-300"
              } p-2 rounded-md flex flex-row gap-3 text-lef ${
                openNavBar
                  ? "w-4/5 justify-start items-start"
                  : "justify-center items-center"
              }`}>
              <Link to="/Statistics" className="flex flex-row gap-3">
                <CgOpenCollective />
                {openNavBar ? (
                  <p className="text-lg font-medium">Estadisticas</p>
                ) : (
                  ""
                )}
              </Link>
            </div>
            <div
              onClick={lowerGroup}
              className={`${
                activeGroup ? "bg-slate-300" : "hover:bg-neutral-300"
              } hover:cursor-pointer p-2 rounded-md flex flex-col gap-3 text-lef ${
                !lower && "hover:bg-neutral-300"
              } ${
                openNavBar
                  ? "w-4/5 justify-start items-start"
                  : "justify-center items-center"
              }`}>
              <div className="flex flex-row gap-3">
                <BiGroup />
                {openNavBar ? (
                  <p className="text-lg font-medium flex flex-row justify-center items-center gap-2">
                    Suborganizaciones{" "}
                    {!lower ? <AiOutlineCaretDown /> : <AiOutlineCaretUp />}{" "}
                  </p>
                ) : (
                  ""
                )}
              </div>
              {lower && (
                <div className="flex flex-col items-start text-left font-normal text-base ml-2 pl-7 border-l border-black gap-4">
                  {/* <ul className="flex flex-col gap-3">
                    <li className="hover:bg-neutral-300 px-3 rounded-sm">
                      Desarrolladores
                    </li>
                    <li className="hover:bg-neutral-300 px-3 rounded-sm">
                      Administradores
                    </li>
                    <li className="hover:bg-neutral-300 px-3 rounded-sm">
                      Gerencia
                    </li>
                  </ul>{" "} */}
                  <Link to="/AddSubOrg" className="bg-purple-600 rounded-md hover:bg-purple-900 px-8 py-1 text-white font-semibold">
                    Agregar
                  </Link>
                </div>
              )}
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
