import React, { useState } from "react";
import { LabelBtn } from "../../components/LabelBtn/LabelBtn";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";


export const SingUp = () => {
  const [selectedOption, setSelectedOption] = useState("Personal");
  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };
  return (
    <div className="w-screen h-screen flex flex-row">
      <div className="w-1/2 h-full bg-violet-700">
        <div>
          <div className="relative left-24 top-20">
            <h1 className="text-white font-bold text-6xl leading-66 tracking-wider font-poppins">
              ¡Registrate en <br></br>nuestra plataforma!
            </h1>
          </div>
          <div className="relative left-24 top-28 w-3/4">
            <p className="text-white font-poppins text-justify text-xl">
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
      <div className="w-1/2 h-full ">
        <div className="flex justify-center items-center flex-col">
          <h2 className="font-bold text-6xl tracking-tight leading-1.19 font-poppins text-base-02 mt-8">
            ¡Crear una cuenta {selectedOption}!
          </h2>
          <p className="font-normal text-lg leading-1.67 font-poppins text-gray-500 relative mt-5 ">
            ¡Únete a nuestra comunidad de organizadores y asistentes de eventos
            hoy mismo!
          </p>
        </div>
        <div>
          <div className="flex flex-col my-16 mx-20">
            <label htmlFor="" className="font-bold">
              Tipo de cuenta <strong className="text-red-600">*</strong>
            </label>
            <select
              onChange={handleSelectChange}
              id="tipo-usuario"
              name="tipo-usuario"
              className="bg-gray-100 shadow-md rounded-md w-2/5 h-11 px-2 border border-gray-400 text-gray-500">
              <option value="personal">Personal</option>
              <option value="organizacion">Organización</option>
            </select>
          </div>
          <div className="flex my-10 mx-20 justify-between">
            <LabelBtn label="Nombre" width="80" id="name" />
            <LabelBtn label="Primer Apellido" width="70" id="firstname" />
            <LabelBtn label="Segundo Apellido" width="70" id="secondname" />
          </div>
          <div className="flex my-10 mx-20 justify-between ">
            <LabelBtn label="Correo electronico" width="96" id="email" />
            <LabelBtn label="Teléfono" width="96" id="tel" />
          </div>
          <div className="flex my-10 mx-20 justify-between">
            <LabelBtn label="Contraseña" width="96" id="pass" />
            <LabelBtn label="Confirmar Contraseña" width="96" id="conpass" />
          </div>
          <div className="footer my-20 mx-20 flex flex-col justify-center items-center ">
            <div className="flex lg:gap-56 xl:gap-40">
              <button className=" p-4 w-80 h-55  bg-purple-700 hover:bg-purple-900 rounded-lg text-white font-bold">
                Registrarse
              </button>
              <button className=" p-4 w-80 h-55  bg-purple-700 hover:bg-purple-900 rounded-lg text-white font-bold flex gap-9">
                <p className="text-2xl pl-7">
                  <FcGoogle />
                </p>
                <p>Registrate con Google</p>
              </button>
            </div>
            <div className="mt-10 flex justify-center items-center flex-col">
              <p className="font-poppins font-normal text-xl leading-6 flex items-center text-gray-500">
                ¿Ya tines cuenta?{" "}
                <strong className="text-purple-600 ml-3">
                <Link className="hover:underline" to="/singIn">¡Inicia sesión!</Link>
                </strong>
              </p>
              <Link className=" w-40 h-14 mt-10 bg-purple-700 hover:bg-purple-900 rounded-lg text-white font-bold flex gap-9 text-center justify-center items-center" to="/">Volver</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
