import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillGithub,
  AiFillFacebook,
} from "react-icons/ai";

export const Footer = ({ style }) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div
      className={`bg-slate-200 h-96 md:h-72 lg:h-36 w-full pb-10 sm:pb-0 flex flex-col justify-center md:pl-14 ${style}`}>
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="relative md:left-14 flex justify-center items-center">
          <span className="text-violet-600 text-3xl sm:text-4xl font-bold">
            Time Check
          </span>
        </div>
        <div className="mt-5 md:mt-2">
          <ul className="flex flex-col md:flex-row gap-4 sm:gap-10 md:relative md:left-8 lg:gap-20 text-base font-semibold justify-center items-center lg:justify-normal lg:items-start">
            <li className="hover:text-slate-600">
              <Link
                className="hover:underline"
                to={{
                  pathname: "/Terminos y Condiciones",
                  state: { prevLocation: location },
                }}>
                Terminos y Condiciones
              </Link>
            </li>
            <li className="hover:text-slate-600">
              <Link
                className="hover:underline"
                to={{
                  pathname: "/Politicas de Privacidad",
                  state: { prevLocation: location },
                }}>
                Politicas de Privacidad
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-row text-3xl sm:text-4xl gap-2 relative lg:right-20 justify-center mt-3 lg:justify-normal lg:mt-0">
          <div className="flex rounded-full  text-slate-950 justify-center items-center h-10 w-10">
            <AiFillTwitterCircle />
          </div>
          <div className="flex rounded-full  text-slate-950 justify-center items-center h-10 w-10">
            <AiFillFacebook />{" "}
          </div>
          <div className="flex rounded-full  text-slate-950 justify-center items-center h-10 w-10">
            <AiFillInstagram />
          </div>
          <div className="flex rounded-full  text-slate-950 justify-center items-center h-10 w-10">
            <AiFillGithub />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <hr className="mt-4 md:mt-10 text-black bg-neutral-500 h-0.5 w-4/5 " />
      </div>
      <div className="flex justify-center items-center mt-4 pb-10 lg:pb-0 text-center md:text-left md:mt-3">
        <p className="font-sans font-semibold text-neutral-600">
          &copy; 2023, Todos los derechos reservados por{" "}
          <strong>Time Check</strong>
        </p>
      </div>
    </div>
  );
};
