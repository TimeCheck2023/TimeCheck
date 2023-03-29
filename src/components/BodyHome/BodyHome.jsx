import React from "react";
import styles from "./BodyHome.module.css";

export const BodyHome = () => {
  return (
    <div className="w-full overflow-scroll h-full">
      <div className={` bg-cover bg-center h-80 w-full ${styles.img}`}>
        <div className="text-white font-bold text-5xl font-poppins relative left-20 top-16 w-2/3">
          <h1>Los Mejores Eventos</h1>
        </div>
        <div className="text-slate-100 relative font-thin left-20 top-20 w-1/3">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus, elit
            nibh et nisl, pellentesque scelerisque faucibus facilisis at.
            Placerat morbi sem viverra diam lectus odio orci...
          </p>
        </div>
      </div>
      <div>
        <div className="relative left-20 top-24 w-4/5">
          <div className="text-purple-500 text-3xl font-semibold">
            <h1>Algunos de Nuestros Eventos</h1>
          </div>
          <div className="w-1/3 relative top-5">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus,
              elit nibh et nisl, pellentesque scelerisque faucibus facilisis at.
              Placerat morbi sem viverra diam lectus odio orci...{" "}
            </p>
          </div>
        </div>
        <div className="imagenes flex flex-row justify-end relative right-20 gap-5 bottom-20">
          <div>
            <div
              className={`bg-cover bg-center h-80 w-60 rounded-md ${styles.img3}`}></div>
          </div>
          <div>
            <div
              className={`bg-cover bg-center h-80 w-60 rounded-md ${styles.img4}`}></div>
          </div>
          <div>
            <div
              className={`bg-cover bg-center h-80 w-60 rounded-md ${styles.img5}`}></div>
          </div>
          <div>
            <div
              className={`bg-cover bg-center h-80 w-60 rounded-md ${styles.img6}`}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
