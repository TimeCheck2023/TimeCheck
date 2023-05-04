import React, { useState } from "react";
import { LabelBtn } from "../../components/UI/LabelBtn/LabelBtn";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { NavbarMobile } from "../../components/Layout/NavbarMobile/NavbarMobile";

export const SingUp = () => {
  const [selectedOption, setSelectedOption] = useState("Personal");
  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };
  return (
    <div className="w-screen h-screen flex flex-row">
      <NavbarMobile />
      <div className="hidden lg:block w-1/2 h-full bg-violet-700">
        <div>
          <div className="relative left-24 top-20">
            <h1 className="text-white font-bold text-6xl leading-66 tracking-wider font-sans">
              ¡Registrate en <br></br>nuestra plataforma!
            </h1>
          </div>
          <div className="relative left-24 top-28 w-3/4">
            <p className="text-white font-sans text-justify text-xl">
              Si eres un usuario que va a asistir a eventos, podrás ver todos
              los eventos a los que estás registrado y confirmar tu asistencia.
              Si eres un usuario que va a crear eventos, podrás agregar nuevos
              eventos, gestionar la información del evento, enviar invitaciones
              y hacer un seguimiento de la asistencia de tus invitados.
            </p>
          </div>
        </div>
        <div className="relative left-24 top-40">
          <img src="/image1.webp" alt="img" width={600} />
        </div>
      </div>
      <div className="w-full lg:w-1/2 h-full ">
        <div className="flex justify-center items-center flex-col">
          <h2 className="font-bold text-center lg:text-left text-5xl xl:text-6xl tracking-tight leading-1.19 font-sans text-base-02 mt-8">
            ¡Crear una cuenta {selectedOption}!
          </h2>
          <p className="font-normal text-lg leading-1.67 font-sans text-gray-500 relative mt-5 px-5 lg:px-0">
            ¡Únete a nuestra comunidad de organizadores y asistentes de eventos
            hoy mismo!
          </p>
        </div>
        <div className="px-10 lg:px-0">
          <div className="flex flex-col my-16 mx-0 lg:mx-20">
            <label htmlFor="" className="font-bold">
              Tipo de cuenta <strong className="text-red-600">*</strong>
            </label>
            <select
              onChange={handleSelectChange}
              id="tipo-usuario"
              name="tipo-usuario"
              className="bg-gray-100 shadow-md rounded-md lg:w-2/5 h-11 px-2 border border-gray-400 text-gray-500">
              <option value="personal">Personal</option>
              <option value="organizacion">Organización</option>
            </select>
          </div>
          <div className="flex flex-col lg:flex-row gap-5 mb-6 lg:mb-0 lg:my-10 lg:mx-20 justify-between">
          <div className="flex flex-col w-full ">
                <label htmlFor="" className="font-bold">
                  Nombre Completo<strong className="text-red-600">*</strong>
                </label>
                <input
                  id=""
                  className={`bg-blue-gray-50 border border-gray-300 shadow-md rounded-xl h-12 lg:w-4/5 p-2 hover:border-gray-400 focus:border-gray-600 focus:outline-none`}
                  type="text"
                  placeholder="Nombre Completo..."
                />
              </div>          </div>
          <div className="flex lg:my-10 flex-col lg:flex-row gap-5 justify-between w-full">
            <div className="flex relative lg:left-20 w-full">
              <div className="flex flex-col w-full ">
                <label htmlFor="" className="font-bold">
                  Correo electronico<strong className="text-red-600">*</strong>
                </label>
                <input
                  id=""
                  className={`bg-blue-gray-50 border border-gray-300 shadow-md rounded-xl h-12 lg:w-4/5 p-2 hover:border-gray-400 focus:border-gray-600 focus:outline-none`}
                  type="email"
                  placeholder="correo@corre.com"
                />
              </div>
            </div>{" "}
            <div className="flex w-full">
              <div className="flex flex-col w-full ">
                <label htmlFor="" className="font-bold">
                  Telefono<strong className="text-red-600">*</strong>
                </label>
                <input
                  id=""
                  className={`bg-blue-gray-50 border border-gray-300 shadow-md rounded-xl h-12 lg:w-4/5 p-2 hover:border-gray-400 focus:border-gray-600 focus:outline-none`}
                  type="number"
                  placeholder="3211234567"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 lg:gap-0 lg:flex-row mt-6 lg:mt-0 lg:my-10 lg:mx-20 justify-between">
            <div className="flex w-full">
              <div className="flex flex-col w-full ">
                <label htmlFor="" className="font-bold">
                  Contraseña<strong className="text-red-600">*</strong>
                </label>
                <input
                  id=""
                  className={`bg-blue-gray-50 border border-gray-300 shadow-md rounded-xl h-12 lg:w-4/5 p-2 hover:border-gray-400 focus:border-gray-600 focus:outline-none`}
                  type="password"
                  placeholder="Contraseña..."
                />
              </div>
            </div>
            <div className="flex w-full">
              <div className="flex flex-col w-full ">
                <label htmlFor="" className="font-bold">
                  Confirmar contraseña
                  <strong className="text-red-600">*</strong>
                </label>
                <input
                  id=""
                  className={`bg-blue-gray-50 border border-gray-300 shadow-md rounded-xl h-12 lg:w-4/5 p-2 hover:border-gray-400 focus:border-gray-600 focus:outline-none`}
                  type="password"
                  placeholder="Confirmar contraseña..."
                />
              </div>
            </div>
          </div>
          <div className="footer mt-10 lg:mt-0 lg:my-20 mx-20 flex flex-col justify-center items-center ">
            <div className="flex flex-col md:flex-row gap-5 lg:gap-56 xl:gap-40">
              <button className=" p-4 w-72 md:w-40 lg:w-80 h-55  bg-purple-700 hover:bg-purple-900 rounded-lg text-white font-bold">
                Registrarse
              </button>
              <button className=" p-4 w-72 lg:w-80 h-55  bg-purple-700 hover:bg-purple-900 rounded-lg text-white font-bold flex  gap-5 lg:gap-9">
                <p className="text-2xl pl-7">
                  <FcGoogle />
                </p>
                <p>Registrate con Google</p>
              </button>
            </div>
            <div className="mt-10 gap-5 flex justify-center items-center flex-col">
              <p className="font-sans font-normal text-xl leading-6 flex items-center text-gray-500">
                ¿Ya tines cuenta?{" "}
              </p>
              <strong className="text-purple-600 ml-3">
                <Link className="hover:underline text-xl" to="/SingIn">
                  ¡Inicia sesión!
                </Link>
              </strong>
              <Link
                className=" w-40 h-14 my-5 mb-28 lg:my-0 lg:mt-10 bg-purple-700 hover:bg-purple-900 rounded-lg text-white font-bold flex gap-9 text-center justify-center items-center"
                to="/">
                Volver
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
