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
    <div className="bg-slate-100 h-44 w-full flex flex-col justify-center">
      <div className="flex flex-row justify-between">
        <div className="relative left-14">
          <span className="text-purple-600 text-4xl font-bold">Time Check</span>
        </div>
        <div>
          <ul className="flex flex-row gap-20 text-xl font-semibold">
            <li className="hover:text-slate-600">
              <Link>Terminos y Condiciones</Link>
            </li>
            <li className="hover:text-slate-600">
              <Link>Politicas de Privacidad</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-row text-4xl gap-2 relative right-14">
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
        <hr className="mt-10 text-black bg-black h-1 w-4/5 " />
      </div>
      <div className="flex justify-center  items-center mt-7">
        <p className="font-sans font-semibold text-neutral-600">
          &copy; Copyright 2022, Todos los derechos reservados por{" "}
          <strong>Time Check</strong>
        </p>
      </div>
    </div>
  );
};
