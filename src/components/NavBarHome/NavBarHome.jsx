import React, { useState } from "react";
import { MdGroups, MdContactSupport } from "react-icons/md";

import { AiFillHome } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";
import { IoIosPersonAdd } from "react-icons/io";
import { Link } from "react-router-dom";
export const NavBarHome = () => {
  const [openNavBar, setOpenNavBar] = useState(false);
  const [isDarkModeOn, setIsDarkModeOn] = useState(false);

  const toggleNavBar = () => setOpenNavBar(!openNavBar);
  return (
    <div
      onMouseEnter={toggleNavBar}
      onMouseLeave={toggleNavBar}
      className={`bg-zinc-900 h-screen ${
        openNavBar ? "w-72" : "w-32"
      }  items-center flex flex-col `}>
      <div className="header flex flex-row justify-center items-center my-8">
        <div className="rounded-full w-20 h-20 ml-4">
          <div className="h-16 w-16 bg-slate-600 rounded-full"></div>
        </div>
        {openNavBar ? (
          <div className="pb-5">
            <h2 className="font-sans font-bold text-3xl leading-10 text-purple-600">
              Time Check
            </h2>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <div className="menu text-white">
        <div className="relative top-20">
          <h3
            className={`${
              openNavBar ? "text-slate-300 px-4" : "text-slate-300"
            }`}>
            Menú
          </h3>
          <div className="my-5 relative xl:top-10 top-3">
            <div className={`${openNavBar ? "px-4" : ""}`}>
              <div
                className={`my-5 xl:my-0 gap-4 flex items-center bg-neutral-700 ${
                  openNavBar ? "w-60" : "w-full "
                } py-2 pl-2 rounded-sm`}>
                <div className="text-2xl">
                  <AiFillHome />
                </div>
                {openNavBar ? <p>Inicio</p> : ""}
              </div>
              <Link to="/SingIn" aria-label="Ve a iniciar sesión">
                <div className="my-5 flex gap-4 items-center  w-full py-2 pl-2 rounded-sm hover:bg-neutral-800">
                  {" "}
                  <div className="text-2xl">
                    <FiLogIn />
                  </div>
                  {openNavBar ? <p>Inicia Sesión</p> : ""}
                </div>
              </Link>
              <Link
                to="/SingUp"
                aria-label="Registrate para poder acceder a todos los servicios">
                <div className="my-5 flex gap-4 items-center  w-full py-2 pl-2 rounded-sm hover:bg-neutral-800">
                  <div className="text-2xl">
                    <IoIosPersonAdd />
                  </div>
                  {openNavBar ? <p>Registrate</p> : ""}
                </div>
              </Link>

              <div className="my-5 flex gap-4 items-center  w-full py-2 pl-2 rounded-sm hover:bg-neutral-800">
                <div className="text-2xl">
                  <MdGroups />
                </div>
                {openNavBar ? <p> Sobre Nosotros</p> : ""}
              </div>
              <div className="my-5 flex gap-4 items-center  w-full py-2 pl-2 rounded-sm hover:bg-neutral-800">
                {" "}
                <div className="text-2xl">
                  <MdContactSupport />
                </div>
                {openNavBar ? <p>Contáctanos</p> : ""}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer relative top-96 my-8 right-3 ">
        <div className="flex item-center justify-center">
          <div className="relative ">
            <input
              type="checkbox"
              className="sr-only"
              id="toggle"
              checked={isDarkModeOn}
              onChange={() => setIsDarkModeOn(!isDarkModeOn)}
            />

            {openNavBar ? (
              <label
                htmlFor="toggle"
                className="block bg-gray-600 w-16 h-8 rounded-full dark:bg-gray-400"></label>
            ) : (
              <></>
            )}

            {openNavBar ? (
              <div
                className={`dot absolute left-2 top-1 bg-white w-6 h-6 rounded-full transition ${
                  isDarkModeOn ? "transform translate-x-full" : ""
                }`}></div>
            ) : (
              <div
                className={`dot absolute top-1 bg-white w-6 h-6 rounded-full transition`}></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
