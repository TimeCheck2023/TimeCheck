import React, { useState } from "react";
import { MdGroups, MdContactSupport } from "react-icons/md";
import { BiGroup } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";
import { IoIosPersonAdd } from "react-icons/io";
import { Link } from "react-router-dom";

export const NavBarHome = () => {
  const [isDarkModeOn, setIsDarkModeOn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className="bg-zinc-900 h-screen w-1/6 flex flex-col"
      onClick={toggleMenu}>
      <div className="header flex flex-row justify-center items-center my-8">
        <div className="rounded-full w-20 h-20">
          <div className="h-16 w-16 bg-slate-600 rounded-full"></div>
        </div>
        <div className="pb-5">
          <h2 className=" font-manrope font-bold text-3xl leading-10 text-purple-600">
            Time Check
          </h2>
        </div>
      </div>
      <hr />
      <div className="menu text-white ml-8 ">
        <div className="relative top-20">
          <h3 className="text-slate-500 ">Menú</h3>
          <div className="my-5 relative top-3">
            <ul className="">
              <li className="my-5 flex gap-4 items-center bg-neutral-700 w-4/5 py-2 pl-2 rounded-sm">
                <div className="text-2xl">
                  <AiFillHome />
                </div>
                Inicio
              </li>
              <li className="my-5 flex gap-4 items-center  w-4/5 py-2 pl-2 rounded-sm hover:bg-neutral-800">
                <div className="text-2xl">
                  <MdGroups />
                </div>
                Sobre Nosotros
              </li>
              <li className="my-5 flex gap-4 items-center  w-4/5 py-2 pl-2 rounded-sm hover:bg-neutral-800">
                {" "}
                <div className="text-2xl">
                  <MdContactSupport />
                </div>
                Contáctanos
              </li>
              <Link to="/SingIn">
                <li className="my-5 flex gap-4 items-center  w-4/5 py-2 pl-2 rounded-sm hover:bg-neutral-800">
                  {" "}
                  <div className="text-2xl">
                    <FiLogIn />
                  </div>
                  <p>Inicia Sesión</p>
                </li>
              </Link>
              <Link to="/SingUp">
                <li className="my-5 flex gap-4 items-center  w-4/5 py-2 pl-2 rounded-sm hover:bg-neutral-800">
                  <div className="text-2xl">
                    <IoIosPersonAdd />
                  </div>
                  <p>Registrate</p>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer relative top-96 my-16 ">
        <div className="flex item-center justify-center">
          <div className="relative">
            <input
              type="checkbox"
              className="sr-only"
              id="toggle"
              checked={isDarkModeOn}
              onChange={() => setIsDarkModeOn(!isDarkModeOn)}
            />
            <label
              htmlFor="toggle"
              className="block bg-gray-600 w-16 h-8 rounded-full dark:bg-gray-400"></label>
            <div
              className={`dot absolute left-2 top-1 bg-white w-6 h-6 rounded-full transition ${
                isDarkModeOn ? "transform translate-x-full" : ""
              }`}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
