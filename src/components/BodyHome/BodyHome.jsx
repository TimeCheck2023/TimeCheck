import React, { useState } from "react";
import styles from "./BodyHome.module.css";
import { AiFillLike } from "react-icons/ai";
import { Servicios } from "../Servicios/Servicios";
import { Footer } from "../Footer/Footer";

export const BodyHome = () => {
  const [hovered, setHovered] = useState(false);
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);

  const toggleHover = () => setHovered(!hovered);
  const toggleHover1 = () => setHovered1(!hovered1);
  const toggleHover2 = () => setHovered2(!hovered2);
  const toggleHover3 = () => setHovered3(!hovered3);

  return (
    <div className="w-full overflow-scroll h-full">
      <div className={` bg-cover bg-center h-80 w-full ${styles.img}`}>
        <div className="text-white font-bold text-5xl font-sans relative left-20 top-16 w-2/3">
          <h1>Los Mejores Eventos</h1>
        </div>
        <div className="text-slate-100 relative font-sans left-20 top-20 w-1/3">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus, elit
            nibh et nisl, pellentesque scelerisque faucibus facilisis at.
            Placerat morbi sem viverra diam lectus odio orci...
          </p>
        </div>
      </div>
      <div>
        <div className="relative left-20 top-28 w-4/5">
          <div className="text-purple-600 text-4xl xl:text-3xl font-semibold font-sans">
            <h1>Algunos de Nuestros Eventos</h1>
          </div>
          <div className="w-1/3 relative top-5">
            <p className="font-sans">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus,
              elit nibh et nisl, pellentesque scelerisque faucibus facilisis at.
              Placerat morbi sem viverra diam lectus odio orci...{" "}
            </p>
          </div>
        </div>
        <div className="imagenes flex flex-row justify-end relative right-20 gap-5 bottom-0 ">
          <div
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
            className="shadow-2xl rounded-md relative">
            <div
              className={`arriba bg-cover bg-center h-80 w-60 rounded-md ${styles.img3}  hover:relative hover:bottom-24 rounded-md`}></div>
            {hovered ? (
              <div className="abajo absolute top-56 p-2 flex flex-col">
                <div className="font-semibold text-slate-500">
                  <p>Montenegro/pueblo tapao</p>
                  <p className="font-bold">GRATIS</p>
                </div>
                <div className="flex flex-row items-center gap-3">
                  <div className="text-purple-600 font-bold">
                    <p>Carrera de Atletismo</p>
                  </div>
                  <div className="text-purple-600 font-extrabold flex flex-row items-center w-14 text-center pl-1 h-7 mt-1 gap-2 bg-slate-200 shadow-md rounded-md">
                    <AiFillLike />8
                  </div>
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div
            onMouseEnter={toggleHover1}
            onMouseLeave={toggleHover1}
            className="shadow-2xl rounded-md">
            <div
              className={`bg-cover bg-center h-80 w-60 rounded-md ${styles.img4} hover:relative hover:bottom-24 rounded-md`}></div>
            {hovered1 ? (
              <div className="abajo absolute top-56 p-2 flex flex-col">
                <div className="font-semibold text-slate-500">
                  <p>Bogotá</p>
                  <p className="font-bold">GRATIS</p>
                </div>
                <div className="flex flex-row items-center gap-3">
                  <div className="text-purple-600 font-bold">
                    <p>Concierto de Morat</p>
                  </div>
                  <div className="text-purple-600 font-extrabold flex flex-row items-center w-14 text-center pl-1 h-7 mt-1 gap-2 bg-slate-200 shadow-md rounded-md">
                    <AiFillLike />
                    30
                  </div>
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div
            onMouseEnter={toggleHover2}
            onMouseLeave={toggleHover2}
            className="shadow-2xl rounded-md">
            <div
              className={`bg-cover bg-center h-80 w-60 rounded-md ${styles.img5} hover:relative hover:bottom-24 rounded-md`}></div>
            {hovered2 ? (
              <div className="abajo absolute top-56 p-2 flex flex-col">
                <div className="font-semibold text-slate-500">
                  <p>Armenia</p>
                  <p className="font-bold">GRATIS</p>
                </div>
                <div className="flex flex-row items-center gap-3">
                  <div className="text-purple-600 font-bold">
                    <p>Obra de Teatro</p>
                  </div>
                  <div className="text-purple-600 font-extrabold flex flex-row items-center w-14 text-center pl-1 h-7 mt-1 gap-2 bg-slate-200 shadow-md rounded-md">
                    <AiFillLike />
                    11
                  </div>
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div
            onMouseEnter={toggleHover3}
            onMouseLeave={toggleHover3}
            className="shadow-2xl rounded-md">
            <div
              className={`bg-cover bg-center h-80 w-60 rounded-md ${styles.img6} hover:relative hover:bottom-24 rounded-md`}></div>
            {hovered3 ? (
              <div className="abajo absolute top-56 p-2 flex flex-col">
                <div className="font-semibold text-slate-500">
                  <p>Armenia - Sena</p>
                  <p className="font-bold">GRATIS</p>
                </div>
                <div className="flex flex-row items-center gap-3">
                  <div className="text-purple-600 font-bold">
                    <p>Charla QA</p>
                  </div>
                  <div className="text-purple-600 font-extrabold flex flex-row items-center w-14 text-center pl-1 h-7 mt-1 gap-2 bg-slate-200 shadow-md rounded-md">
                    <AiFillLike />
                    21
                  </div>
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
      <hr className="mt-10"/>
      <Servicios/>
      <Footer/>
    </div>
  );
};
