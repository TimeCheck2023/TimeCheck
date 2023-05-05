import React, { useState, useEffect, lazy, Suspense } from "react";
import styles from "./BodyHome.module.css";
import { Servicios } from "../Servicios/Servicios";
import { Footer } from "../Footer/Footer";
import { LoadingCard } from "../../UI/LoadingCard/LoadingCard";

const ImageEventsInfo = lazy(() =>
  delayForDemo(import("../ImageEventsInfo/ImageEventsInfo"))
);

export const BodyHome = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.addEventListener("onload", () => {
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="w-full sm:ml-24 h-screen">
      <div
        className={`bg-cover bg-center h-80 md:h-80 w-full ${
          !isLoading ? "bg-gray-400 animate-pulse" : styles.img
        }`}>
        <div className="text-white font-bold text-3xl md:text-5xl font-sans relative left-2 md:left-20 top-16 w-4/5 md:w-2/3">
          <h1>Los Mejores Eventos</h1>
        </div>
        <div className="text-slate-100 relative font-sans left-2 md:left-20 top-20 w-96  md:w-1/3">
          <p className="text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus, elit
            nibh et nisl, pellentesque scelerisque faucibus facilisis at.
            Placerat morbi sem viverra diam lectus odio orci...
          </p>
        </div>
      </div>
      <div>
        <div className="relative left-5 md:left-20 top-28 w-4/5">
          <div className="text-purple-600 text-center  md:text-left text-3xl xl:text-4xl relative left-4 md:left-0 font-bold font-sans">
            <h1>Algunos de Nuestros Eventos</h1>
          </div>
          <div className="xl:w-2/5 w-full mb-60 lg:mb-0 lg:w-1/3 relative left-4 md:left-0 lg:left-0 top-5">
            <p className="font-sans text-lg text-justify lg:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus,
              elit nibh et nisl, pellentesque scelerisque faucibus facilisis at.
              Placerat morbi sem viverra diam lectus odio orci...{" "}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:content-center md:place-items-center gap-32 md:gap-20 lg:grid-cols-4 lg:mt-48 lg:gap-0">
          {isLoading && (
            <Suspense fallback={<LoadingCard />}>
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
            </Suspense>
          )}
        </div>
      </div>
      <hr className="mt-10" />
      <Servicios />
      <Footer />
    </div>
  );
};

function delayForDemo(promise) {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000);
  }).then(() => promise);
}
