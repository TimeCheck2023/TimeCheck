import React from "react";
import { LabelBtn } from "../../components/LabelBtn/LabelBtn";
import { FcGoogle } from "react-icons/fc";

export const SingIn = () => {
  return (
    <div className="w-screen h-screen flex flex-row">
      <div className="w-1/2 h-full bg-violet-700">
        <div>
          <div className="relative left-24 top-20">
            <h1 className="text-white font-bold text-6xl leading-66 tracking-wider font-poppins">
              ¡Comienza en <br></br>nuestra plataforma!
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
            ¡Bienvenido!
          </h2>
          <p className="font-normal text-lg leading-1.67 font-poppins text-gray-500 mt-10 w-3/4">
            Bienvenido a nuestra plataforma de gestión de eventos. Por favor,
            ingresa tus credenciales para acceder a tu cuenta.
          </p>
        </div>
        <div className="mt-20 w-full ">
          <div className="flex my-10 mx-32">
            <LabelBtn label="Correo electronico:" id="name" width={"96"} />
          </div>
          <div className="flex my-10 mx-32 ">
            <LabelBtn label="Contraseña" width="96" id="email" />
            <div className="mt-24 relative right-32">
              <p className="font-poppins font-normal text-lg leading-6 flex items-center text-purple-600">
                <a href="" className="hover:underline">
                  ¿Se te olvidó la contaseña?
                </a>
              </p>
            </div>
          </div>
          <div className="footer my-20 mx-20 flex flex-col justify-center items-center ">
            <div className="flex gap-28">
              <button className=" p-4 w-80 h-14   bg-purple-700 hover:bg-purple-900 rounded-lg text-white font-bold">
                Iniciar Sesion
              </button>
              <button className=" p-4 w-80 h-14  bg-purple-700 hover:bg-purple-900 rounded-lg text-white font-bold flex gap-9">
                <p className="text-2xl pl-7">
                  <FcGoogle />
                </p>
                <p>Iniciar con Google</p>
              </button>
            </div>
            <div className="mt-24">
              <p className="font-poppins font-normal text-2xl leading-6 flex items-center text-gray-500">
                ¿No tienes cuenta?
                <strong className="text-purple-600 ml-3">
                  <a href="/singUp" className="hover:underline">
                    ¡Crea una ahora!
                  </a>
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
