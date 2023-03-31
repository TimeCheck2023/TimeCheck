import React, { useState } from "react";
import styles from "./BodyHome.module.css";
import { Servicios } from "../Servicios/Servicios";
import { Footer } from "../Footer/Footer";
import { ImageEventsInfo } from "../ImageEventsInfo/ImageEventsInfo";

export const BodyHome = () => {
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
          <ImageEventsInfo
            typeEvent="Carrera de atletismo"
            imageEvent={styles.img3}
            placeEvent="Montenegro/Pueblo Tapao"
            priceEvent="GRATIS"
            likesEvent={10}
          />
          <ImageEventsInfo
            typeEvent="Concierto de Morat"
            imageEvent={styles.img4}
            placeEvent="Bogotá"
            priceEvent="GRATIS"
            likesEvent={30}
          />
          <ImageEventsInfo
            typeEvent="Obra de Teatro"
            imageEvent={styles.img5}
            placeEvent="Armenia"
            priceEvent="GRATIS"
            likesEvent={1}
          />
          <ImageEventsInfo
            typeEvent="Charla QA"
            imageEvent={styles.img6}
            placeEvent="Armenia - Sena"
            priceEvent="GRATIS"
            likesEvent={21}
          />
        </div>
      </div>
      <hr className="mt-10" />
      <Servicios />
      <Footer />
    </div>
  );
};
