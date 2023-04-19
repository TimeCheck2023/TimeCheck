import React from "react";
import { LabelBtn } from "../../components/LabelBtn/LabelBtn";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

export const SingIn = () => {
  return (
    <div className="w-screen h-screen flex flex-row">
      <div className="hidden lg:block w-1/2 h-full bg-violet-700">
        <div>
          <div className="relative left-24 top-20">
            <h1 className="text-white font-bold text-6xl leading-66 tracking-wider font-sans">
              ¡Comienza en <br></br>nuestra plataforma!
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
          <h2 className="font-bold text-6xl tracking-tight leading-1.19 font-sans text-base-02 mt-8">
            ¡Bienvenido!
          </h2>
          <p className="font-normal text-lg font-sans text-gray-500 mt-10 w-4/5 lg:w-3/4 ">
            Bienvenido a nuestra plataforma de gestión de eventos. Por favor,
            ingresa tus credenciales para acceder a tu cuenta.
          </p>
        </div>
        <div className="mt-10 lg:mt-20 w-full ">
          <div className="flex lg:my-10 lg:mx-32 relative left-10 lg:left-20">
            <div className="flex flex-col w-full ">
              <label htmlFor="" className="font-bold">
                Correo electronico:
              </label>
              <input
                id=""
                className={`bg-blue-gray-50 border border-gray-300 shadow-md rounded-xl h-12 w-4/5 p-2 hover:border-gray-400 focus:border-gray-600 focus:outline-none`}
                type="email"
              />
            </div>
          </div>

          <div className="flex  mt-5 lg:mt-0 lg:my-10 lg:mx-32 relative left-10 lg:left-20">
            <div className="flex flex-col w-full ">
              <label htmlFor="" className="font-bold">
                Contraseña:
              </label>
              <input
                id=""
                className={`bg-blue-gray-50 border border-gray-300 shadow-md rounded-xl h-12 w-4/5 p-2 hover:border-gray-400 focus:border-gray-600 focus:outline-none`}
                type="password"
              />
            </div>
          </div>
          <div className="relative mt-5 left-36 lg:mt-0 lg:left-1/2 w-60">
            <p className="font-sans font-normal text-lg leading-6 flex items-center relative left-24 text-purple-600">
              <Link to="" className="hover:underline">
                ¿Se te olvidó la contaseña?
              </Link>
            </p>
          </div>

          <div className="footer my-20 mx-20 flex flex-col justify-center items-center ">
            <div className="flex gap-2 lg:gap-28 xl:gap-16">
              <button className=" p-4 w-56 h-14   bg-purple-700 hover:bg-purple-900 rounded-lg text-white font-bold">
                Iniciar Sesion
              </button>
              <button className=" p-4 w-56 h-14  bg-purple-700 hover:bg-purple-900 rounded-lg text-white font-bold flex gap-4">
                <p className="text-2xl pl-3">
                  <FcGoogle />
                </p>
                <p>Iniciar con Google</p>
              </button>
            </div>
            <div className="mt-16 lg:mt-24 flex justify-center items-center flex-col">
              <p className="font-sans font-normal text-xl leading-6 flex items-center text-gray-500">
                ¿No tienes cuenta?
                <strong className="text-purple-600 ml-3">
                  <Link className="hover:underline" to="/SingUp">
                    ¡Crea una ahora!
                  </Link>
                </strong>
              </p>

              <Link
                className=" p-4 w-40 h-14 mt-10 bg-purple-900 hover:bg-purple-600 rounded-lg text-white font-bold flex gap-9 text-center justify-center items-center"
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
