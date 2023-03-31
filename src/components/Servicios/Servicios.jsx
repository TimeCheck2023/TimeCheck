import React from "react";
import styles from "./Servicios.module.css";

export const Servicios = () => {
  return (
    <div className=" w-full bg-slate-500 h-3/5 mt-0">
      <div>
        <h2 className="text-purple-600 text-3xl px-16 py-5 font-sans font-semibold">
          Servicios
        </h2>
      </div>
      <div>
        <p className="px-16 text-black">
          Puedes crear grupos dentro de tu propia empresa para crear eventos en
          el momento que quieras
        </p>
      </div>
      <div className="flex flex-row h-2/3 mt-10 ">
        {/* Primera Columna */}
        <div className={`bg-cover bg-center w-1/2 ml-16 h-full ${styles.img}`}>
          Columna 1
        </div>

        {/* Segunda Columna */}
        <div className="w-1/4 h-full flex flex-col ml-2  gap-2">
          <div className={`bg-cover bg-center h-1/2 ${styles.img3}`}>
            Fila 1
          </div>
          <div className={`bg-cover bg-center h-1/2 ${styles.img4}`}>
            Fila 2
          </div>
        </div>

        {/* Tercera Columna */}
        <div className="w-1/4 h-full flex flex-col ml-2 mr-2 gap-2">
          <div className={`bg-cover bg-center h-1/2 ${styles.img5}`}>
            Fila 1
          </div>
          <div className={`bg-cover bg-center h-1/2 ${styles.img6}`}>
            Fila 2
          </div>
        </div>
      </div>
    </div>
  );
};
