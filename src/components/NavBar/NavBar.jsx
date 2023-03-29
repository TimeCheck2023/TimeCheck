import React, { useState } from "react";
import { HiSquares2X2 } from "react-icons/hi2";
import { TbCalendarStats } from "react-icons/tb";
import { BiGroup } from "react-icons/bi";
import { IoIosNotificationsOutline, IoIosArrowRoundBack } from "react-icons/io";

export const NavBar = () => {
  const [isDarkModeOn, setIsDarkModeOn] = useState(false);
  return (
    <div className="bg-zinc-900 h-screen w-72 flex flex-col">
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
      <div className="menu text-white ml-8 ">
        <div>
          <h3 className="text-slate-500">Menú</h3>
          <div className=" my-5">
            <ul>
              <li className="my-5 flex gap-4 items-center bg-neutral-700 w-4/5 py-2 pl-2 rounded-sm">
                {" "}
                <div className="text-2xl">
                  <HiSquares2X2 />
                </div>
                Eventos
              </li>
              <li className="my-5 flex gap-4 items-center  w-4/5 py-2 pl-2 rounded-sm hover:bg-neutral-800">
                {" "}
                <div className="text-2xl">
                  <TbCalendarStats />
                </div>
                Estadisiticas
              </li>
              <li className="my-5 flex gap-4 items-center  w-4/5 py-2 pl-2 rounded-sm hover:bg-neutral-800">
                {" "}
                <div className="text-2xl">
                  <BiGroup />
                </div>
                Grupos
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="subFooter ml-8 text-white relative top-56">
        <div>
          <ul>
            <li className="my-5 flex gap-4 items-center  w-4/5 py-2 pl-2 rounded-sm hover:bg-neutral-800">
              {" "}
              <div className="text-2xl">
                <IoIosNotificationsOutline />
              </div>
              Notificaciones
              <div className="bg-purple-700 py-1 px-2 rounded-md font-bold">
                {" "}
                10
              </div>
            </li>
          </ul>
        </div>
      </div>
      <hr className="relative top-60 " />
      <div className="footer relative top-60 ml-5 my-8 ">
        <span className="text-slate-500">Cuenta</span>
        <div className="mt-5 flex">
          <div>
            <div className="h-12 w-12 bg-slate-500 rounded-full"></div>
          </div>
          <div className="ml-2">
            <p className="text-white font-bold">Alcaldia - Armenia</p>
            <p className="text-slate-500">alcaldiaarmenia@gmail.com</p>
          </div>
        </div>
        <div className="flex justify-center my-14 text-white text-lg font-semibold items-center rounded-sm hover:bg-slate-800 gap-2 pr-8">
          <div className="text-2xl">
            <IoIosArrowRoundBack />
          </div>
          <p>Cerrar Sesión</p>
        </div>
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
              className="block bg-gray-600 w-14 h-8 rounded-full dark:bg-gray-400"></label>
            <div
              className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${
                isDarkModeOn ? "transform translate-x-full" : ""
              }`}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
