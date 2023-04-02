import React from "react";
import { Link } from "react-router-dom";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillGithub,
  AiFillFacebook,
} from "react-icons/ai";

export const Footer = () => {
  return (
    <div className="bg-gray-200 h-44 w-full flex flex-col justify-center mt-20 md:mt-0">
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="relative md:left-14 flex justify-center items-center">
          <span className="text-purple-600 text-4xl font-bold">Time Check</span>
        </div>
        <div className="mt-5 md:mt-0">
          <ul className="flex flex-col md:flex-row gap-10 md:relative md:left-8 md:14 lg:gap-20 text-xl font-semibold justify-center items-center lg:justify-normal lg:items-start">
            <li className="hover:text-slate-600">
              <Link>Terminos y Condiciones</Link>
            </li>
            <li className="hover:text-slate-600">
              <Link>Politicas de Privacidad</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-row text-4xl gap-2 relative lg:right-20 justify-center mt-3 lg:justify-normal lg:mt-0">
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
        <hr className="mt-4 md:mt-10 text-black bg-black h-1 w-4/5 " />
      </div>
      <div className="flex justify-center items-center mt-4 pb-10 lg:pb-0 text-center md:text-left md:mt-7">
        <p className="font-sans font-semibold text-neutral-600">
          &copy; Copyright 2022, Todos los derechos reservados por{" "}
          <strong>Time Check</strong>
        </p>
      </div>
    </div>
  );
};
