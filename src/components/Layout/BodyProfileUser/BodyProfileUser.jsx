import React from "react";
import { FormProfile } from "../FormProfile/FormProfile";

export const BodyProfileUser = () => {
  return (
    <div className="flex w-full flex-row justify-center ">
      <div className="w-full h-40 bg-purple-600"></div>
      <div className="w-11/12 h-5/6 flex flex-col md:flex-row z-30 gap-5 absolute md:ml-24 center mt-16 ">
        <div className=" w-full md:w-1/4 bg-slate-50 h-5/6 md:h-full shadow-lg shadow-neutral-500">
          <div className="flex justify-center items-center flex-col py-8">
            <div className="h-36 w-36 bg-black rounded-full"></div>
            <p className="text-xl font-medium">Carolina Rivera</p>
          </div>
          <div className="flex flex-col justify-between gap-28 mt-10">
            <div className="flex flex-col">
              <div className="border-y py-5 border-neutral-300 px-7 flex flex-row justify-between">
                <p>Eventos asistidos</p>
                <p className="text-green-600 font-bold">36</p>
              </div>
              <div className="border-y py-5 border-neutral-300 px-7 flex flex-row justify-between">
                <p>Eventos no asistidos</p>
                <p className="text-red-600 font-bold">14</p>
              </div>
              <div className="border-y py-5 border-neutral-300 px-7 flex flex-row justify-between">
                <p>Eventos pendientes</p>
                <p className="text-purple-600 font-bold">10</p>
              </div>
            </div>
            <div className="flex justify-center items-center h-32 pb-32 md:pb-0">
              <button className="hover:bg-slate-200 px-12 py-2 border border-slate-200 text-purple-500 font-bold bg-slate-100 shadow-md rounded-md">
                Compartir perfil
              </button>
            </div>
          </div>
        </div>
        <div className="pt-1 border w-full h-full md:w-4/5  bg-slate-50 shadow-lg shadow-neutral-500 ">
          <div className="flex  justify-around border-b border-neutral-300 py-2 text-sm">
            <button className="px-4 py-2 bg-slate-200 rounded-md">
              Configuración
            </button>
            <button className="px-4 py-2 hover:bg-slate-200 rounded-md">
              Cambiar clave
            </button>
            <button className="px-4 py-2 hover:bg-slate-200 rounded-md">
              Suborganizaciones
            </button>
          </div>
          <FormProfile />
        </div>
      </div>
    </div>
  );
};
