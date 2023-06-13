import React, { useState, useEffect, Link } from "react";
import { Footer } from "../Footer/Footer";
import styles from "./BodyContactUs.module.css";

export const BodyContactUs = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.addEventListener("load", () => {
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="sm:ml-24">
          <img
            src="/FondoContactanos.webp"
            alt=""
            className="absolute -z-50 h-full w-99p object-cover"
          />
      <div className="w-2/3 flex items-center justify-center mx-auto py-4">
        <div className="w-full md:w-3/5 h-full bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg border border-gray-200 rounded-lg shadow-2xl">
          <div className="w-full h-80">
            <div className="md:p-10 flex flex-col gap-5 items-center ">
              <h1 className="text-bold text-5xl text-purple-600 font-bold">
                Contáctanos{" "}
              </h1>
              <p className="text-xl px-2 md:px-0 md:w-4/5 text-slate-950">
                ¿Tienes alguna pregunta o consulta? ¡No dudes en contactarnos!
                Estamos aquí para ayudarte. Completa el formulario de contacto o
                envíanos un correo electrónico, y te responderemos lo antes
                posible. ¡Esperamos saber de ti pronto!
              </p>
            </div>
          </div>
          <div className="w-full h-2/4 flex flex-row justify-center">
            <div className="w-2/3 flex flex-col relative bottom-16 gap-14 items-center">
              <div className="">
                <h2 className="text-3xl font-bold text-purple-600 mt-3">
                  {" "}
                  Solicitud de información
                </h2>
              </div>
              <form
                action=""
                className="flex flex-col gap-3 w-full items-center">
                <div className="flex flex-col w-full items-center">
                  <label className="font-bold " htmlFor="name">
                    Nombre Completo
                  </label>
                  <input
                    className="border bg-gray-100 border-gray-300 rounded-md p-2 w-4/5 md:w-2/5 2xl:w-2/3 focus:outline-none focus:ring focus:ring-purple-800"
                    type="text"
                    id="name"
                    placeholder="Ingrese su nombre completo..."
                  />
                </div>
                <div className="flex flex-col w-full items-center">
                  <label className="font-bold bottom-auto" htmlFor="email">
                    Correo Electronico:
                  </label>
                  <input
                    className="border bg-gray-100 border-gray-300 rounded-md p-2 w-4/5 md:w-2/5 2xl:w-2/3 focus:outline-none focus:ring focus:ring-purple-800"
                    type="email"
                    id="email"
                    placeholder="Ingrese su correo electronico..."
                  />
                </div>
                <div className="flex flex-col w-full items-center">
                  <label className="font-bold" htmlFor="mensaje">
                    Mensaje:
                  </label>
                  <textarea
                    className="h-40 px-4 py-2 bg-gray-100 resize-none border w-2/5 md:w-2/5 2xl:w-2/3 border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-purple-800"
                    placeholder="Escribe tu mensaje aquí"
                    name="mensaje"
                    id="mensaje"
                    cols="30"
                    rows="8"
                    ></textarea>
                </div>
                <div className="flex justify-center md:left-20 w-80 ">
                  <button className="bg-purple-700 py-3 px-2 w-64 rounded-md text-white text-xl font-semibold hover:bg-purple-600">
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    
  );
};

  

