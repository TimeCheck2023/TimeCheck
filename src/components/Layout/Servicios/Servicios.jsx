import React from "react";
import styles from "./Servicios.module.css";

export const Servicios = () => {
  return (
    <div className=" w-full h-full mb-48 sm:mb-0">
      <div>
        <h2 className="text-purple-600 text-4xl px-16 py-5 text-center md:text-left font-sans font-bold">
          Servicios
        </h2>
      </div>
      <div>
        <p className="px-10  md:px-16 text-black text-xl text-justify md:text-left">
        Puedes crear grupos dentro de tu propia empresa para organizar eventos en el momento que desees.
        </p>
      </div>
      <div className="flex flex-col md:flex-row h-screen mt-5 md:mt-10">
        {/* Primera Columna */}
        <div
          className={`bg-cover bg-center w-4/5 md:w-1/2 ml-10 md:ml-16 h-1/2 ${styles.img1}`}></div>

        {/* Segunda Columna */}
        <div className="w-4/5 md:w-1/4 h-full flex flex-col ml-10 gap-5 md:ml-2 md:gap-2">
          <div
            className={`bg-cover bg-center  h-52 md:h-1/4 ${styles.img3}`}></div>
          <div
            className={`bg-cover bg-center  h-40 md:h-1/4 ${styles.img4}`}></div>
        </div>

        {/* Tercera Columna */}
        <div className="w-4/5 md:w-1/4 h-full flex flex-col ml-10 md:ml-2 mr-2 gap-5 md:gap-2">
          <div
            className={`bg-cover bg-center h-40 md:h-1/4 ${styles.img5}`}></div>
          <div
            className={`bg-cover bg-center  h-40 md:h-1/4 ${styles.img6}`}></div>
        </div>
      </div>
    </div>
  );
};
