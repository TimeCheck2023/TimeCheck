import React from "react";
import { Footer } from "../Footer/Footer";

export const BodyContactUs = () => {
  return (
    <div className="w-full overflow-scroll h-full bg-slate-100">
      <div className="w-full h-full flex flex-row">
        <div className="w-2/5 bg-black h-full"></div>
        <div className="w-3/5 h-full">
          <div className="w-full h-80 ">
            <div className="p-10 flex flex-col gap-5 items-center">
              <h1 className="text-bold text-5xl text-purple-600">
                Contáctanos{" "}
              </h1>
              <p className="text-xl w-4/5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus,
                elit nibh et nisl, pellentesque scelerisque faucibus facilisis
                at. Placerat morbi sem viverra diam lectus odio orci...{" "}
              </p>
            </div>
          </div>
          <div className="w-full h-2/5 flex flex-row justify-center">
            <div className="w-full flex flex-col relative bottom-16 gap-14 items-center">
              <div className="">
                <h2 className="text-3xl font-normal text-purple-600">
                  {" "}
                  Solicitud de información
                </h2>
              </div>
              <form
                action=""
                className="flex flex-col gap-3 w-full items-center">
                <div className="flex flex-col w-full items-center">
                  <label htmlFor="name">Nombre Completo</label>
                  <input
                    className="border bg-gray-100 border-gray-300 rounded-md p-2 w-2/5 focus:outline-none focus:ring focus:ring-purple-800"
                    type="text"
                    id="name"
                    placeholder="Ingrese su nombre completo..."
                  />
                </div>
                <div className="flex flex-col w-full items-center">
                  <label htmlFor="email">Correo Electronico:</label>
                  <input
                    className="border bg-gray-100 border-gray-300 rounded-md p-2 w-2/5 focus:outline-none focus:ring focus:ring-purple-800"
                    type="email"
                    id="email"
                    placeholder="Ingrese su correo electronico..."
                  />
                </div>
                <div className="flex flex-col w-full items-center">
                  <label htmlFor="mensaje">Mensaje:</label>
                  <textarea
                    className="h-40 px-4 py-2 bg-gray-100 border w-2/5 border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-purple-800"
                    placeholder="Escribe tu mensaje aquí"
                    name="mensaje"
                    id="mensaje"
                    cols="30"
                    rows="8"></textarea>
                </div>
                <div className="relative left-20 w-80 ">
                  <button className="bg-purple-700 py-3 px-2 w-40 rounded-md text-white text-xl font-semibold hover:bg-purple-600">
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full h-72 "></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
