import React from "react";
import { Footer } from "../../Layout/Footer/Footer";
import { Link } from "react-router-dom";
import { StatisticsGraphics } from "../StatisticsGraphics/StatisticsGraphics";

export const StatisticsView = () => {
  return (
    <div className="w-full h-full flex items-center flex-col gap-12">
      <div className="mt-2">
        <h1 className="md:pl-20 text-3xl lg:text-5xl font-semibold">
          Panel de Estadisticas
        </h1>
      </div>
      <Link to={StatisticsGraphics}>
        <div className="w-72 h-72 z-30 my-4 bg-purple-500 flex flex-col justify-center items-center rounded-md shadow-md border border-gray-500" onClick={() => (window.location.href = '/StatisticsGraphics')}>
          <h2 className='text-white text-center text-2xl font-bold'>Sena</h2>
          <h3 className='text-white text-center px-8 mt-4 font-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, a quisquam unde nobis ex excepturi quam assumenda in molestiae dolorem blanditiis dolore amet saepe tempore et vero, nihil id. Tempore?</h3>
        </div>
      </Link>
      <div className="md:pl-14 w-full relative top-3/4">
        <Footer />
      </div>
    </div>
  );
};
