import React from "react";

export const SingUp = () => {
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
        <div className="relative left-56 top-52">
          <img src="/vite.svg" alt="img" width={400} />
        </div>
      </div>
      <div className="w-1/2 h-full ">
        <div>
          <h2>¡Crear una cuenta Personal!</h2>
          <p>¡Únete a nuestra comunidad de organizadores y asistentes de eventos hoy mismo!</p>
        </div>
        <div>
          <label htmlFor="">Tipo de cuenta <strong className="text-red-600">*</strong></label>
          <input type="text" />
        </div>
      </div>
    </div>
  );
};
