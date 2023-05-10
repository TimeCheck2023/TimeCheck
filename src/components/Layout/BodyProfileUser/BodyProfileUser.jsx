import React from "react";

export const BodyProfileUser = () => {
  return (
    <div className="flex flex-row justify-center ">
      <div className="w-screen h-40 bg-purple-600"></div>
      <div className="w-11/12 h-full absolute z-30 bg-slate-50 shadow-lg shadow-neutral-500 center my-10 ">
          <div className="flex justify-center items-center flex-col py-8">
            <div className="h-24 w-24 bg-black rounded-full"></div>
            <p className="text-xl font-medium">Carolina Rivera</p>
          </div>
          <div className="flex flex-col justify-between gap-24 mt-10">
            <div className="flex flex-col">
              <div className="border-y py-4 border-neutral-300 px-7 flex flex-row justify-between">
                <p>Eventos asistidos</p>
                <p className="text-green-600 font-bold">36</p>
              </div>
              <div className="border-y py-4 border-neutral-300 px-7 flex flex-row justify-between">
                <p>Eventos no asistidos</p>
                <p className="text-red-600 font-bold">14</p>
              </div>
              <div className="border-y py-4 border-neutral-300 px-7 flex flex-row justify-between">
                <p>Eventos pendientes</p>
                <p className="text-purple-600 font-bold">10</p>
              </div>
            </div>
            <div className="flex justify-center items-center h-24">
              <button className="hover:bg-slate-200 px-12 py-2 border border-slate-200 text-purple-500 font-bold bg-slate-100 shadow-md rounded-md">
                Compartir perfil
              </button>
            </div>
          </div>
          <hr className="my-14 bg-white"/>
          <div className="h-full pt-1 border border-neutral-200 bg-slate-50 shadow-lg shadow-neutral-500 mb-40 pb-40">
            <div className="flex  justify-around border-b border-neutral-300 py-2 text-sm">
              <button className="px-4 py-2 bg-slate-200 rounded-md">Configuración</button>
              <button className="px-4 py-2 hover:bg-slate-200 rounded-md">Organización</button>
            </div>
            <form action="" className="border gap-1 h-full border-neutral-300 mx-2 my-2">
                <div className="flex flex-col gap-2 py-2 px-2">
                  <label htmlFor="fullName">Nombre completo:</label>
                  <input type="text" id="fullName" name="fullName" className="border rounded-sm text-sm py-1 px-2" placeholder="Yuliam Andrey Osorio Puerta" />
                </div>
                <div className="flex flex-col gap-2 py-2 px-2">
                  <label htmlFor="fullName">Tipo de Población:</label>
                  <select type="text" id="fullName" name="fullName" className="border rounded-sm text-sm py-1 px-2" placeholder="Yuliam Andrey Osorio Puerta" >
                    <option value="Indigena">Indigena</option>
                    <option value="Víctima">Víctima</option>
                    <option value="Afro">Afro</option>
                    <option value="Desplazado">Desplazado</option>
                    <option value="LGBTI">LGBTI</option>
                    <option value="Discapacitado">Discapacitado</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2 py-2 px-2">
                  <label htmlFor="fullName">Tipo de documento:</label>
                  <select type="text" id="fullName" name="fullName" className="border rounded-sm text-sm py-1 px-2" placeholder="Yuliam Andrey Osorio Puerta" >
                    <option value="Cédula de ciudadania">Cédula de ciudadania</option>
                    <option value="Tarjeta de identidad">Tarjeta de identidad</option>
                    <option value="Cédula de extranjeria">Cédula de extranjeria</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2 py-2 px-2">
                  <label htmlFor="DocumentNumber">Número de documento:</label>
                  <input type="number" id="DocumentNumber" name="DocumentNumber" className="border rounded-sm text-sm py-1 px-2" placeholder="1091884362" />
                </div>
                <div className="flex flex-col gap-2 py-2 px-2">
                  <label htmlFor="DocumentNumber">Dirección de residencia:</label>
                  <input type="text" id="DocumentNumber" name="DocumentNumber" className="border rounded-sm text-sm py-1 px-2" placeholder="Bro Colon Cll21A #10-08 Montengro - Quindio" />
                </div>
                <div className="flex flex-col gap-2 py-2 px-2">
                  <label htmlFor="fullName">Correo Electronico:</label>
                  <input type="text" id="fullName" name="fullName" className="border rounded-sm text-sm py-1 px-2" placeholder="Yuliam Andrey Osorio Puerta" />
                </div>
                <div className="flex flex-col gap-2 pt-2 px-2">
                  <label htmlFor="fullName">Télefono celular:</label>
                  <input type="number" id="fullName" name="fullName" className="border rounded-sm text-sm py-1 px-2" placeholder="3218604426" />
                </div>
                <div className="flex justify-center mt-4 mb-80">
                <button className="px-5 py-2 bg-purple-600 text-white font-semibold rounded-md mb-24 hover:bg-purple-700">
                  Actualizar
                </button>
                </div>
            </form>
          </div>
      </div>
    </div>
  );
};
