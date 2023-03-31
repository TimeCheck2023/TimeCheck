import React from "react";
import styles from "./Servicios.module.css";

export const Servicios = () => {
  return (
    <div className=" w-full h-3/5 mt-0">
      <div>
        <h2 className="text-purple-600 text-4xl px-16 py-5 font-sans font-bold">
          Servicios
        </h2>
      </div>
      <div>
        <p className="px-16 text-black text-xl">
          Puedes crear grupos dentro de tu propia empresa para crear eventos en
          el momento que quieras!
        </p>
      </div>
      <div className="flex flex-row h-2/3 mt-10 ">
        {/* Primera Columna */}
        <div
          className={`bg-cover bg-center w-1/2 ml-16 h-full ${styles.img}`}></div>

        {/* Segunda Columna */}
        <div className="w-1/4 h-full flex flex-col ml-2  gap-2">
          <div className={`bg-cover bg-center h-1/2 ${styles.img3}`}>
            <p className="text-white font-semibold text-3xl relative top-40 left-5">
              Gerencia
            </p>
          </div>
          <div className={`bg-cover bg-center h-1/2 ${styles.img4}`}>
            <p className="text-white font-semibold text-3xl relative top-40 left-5">
              Desarrollo
            </p>
          </div>
        </div>

        {/* Tercera Columna */}
        <div className="w-1/4 h-full flex flex-col ml-2 mr-2 gap-2">
          <div className={`bg-cover bg-center h-1/2 ${styles.img5}`}>
            <p className="text-white font-semibold text-3xl relative top-40 left-5 w-40">
              Administración
            </p>
          </div>
          <div className={`bg-cover bg-center h-1/2 ${styles.img6}`}>
            <p className="text-white font-semibold text-3xl relative top-40 left-5 w-40">
              Servicio al cliente
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
