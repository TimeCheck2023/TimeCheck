import React from "react";

export const FormProfile = () => {
  return (
    <form action="" className="border gap-1 h-5/6 border-neutral-300 mx-2 my-2">
      <div className="flex flex-col gap-2 py-2 px-2">
        <label htmlFor="fullName">Nombre completo:</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          className="border rounded-sm text-sm py-3 md:py-2 px-2"
          placeholder="Yuliam Andrey Osorio Puerta"
        />
      </div>
      <div className="flex flex-col gap-2 py-2 px-2">
        <label htmlFor="fullName">Tipo de Población:</label>
        <select
          type="text"
          id="fullName"
          name="fullName"
          className="border rounded-sm text-sm py-3 md:py-2 px-2"
          placeholder="Yuliam Andrey Osorio Puerta">
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
        <select
          type="text"
          id="fullName"
          name="fullName"
          className="border rounded-sm text-sm py-3 md:py-2 px-2"
          placeholder="Yuliam Andrey Osorio Puerta">
          <option value="Cédula de ciudadania">Cédula de ciudadania</option>
          <option value="Tarjeta de identidad">Tarjeta de identidad</option>
          <option value="Cédula de extranjeria">Cédula de extranjeria</option>
        </select>
      </div>
      <div className="flex flex-col gap-2 py-2 px-2">
        <label htmlFor="DocumentNumber">Número de documento:</label>
        <input
          type="number"
          id="DocumentNumber"
          name="DocumentNumber"
          className="border rounded-sm text-sm py-3 md:py-2 px-2"
          placeholder="1091884362"
        />
      </div>
      <div className="flex flex-col gap-2 py-2 px-2">
        <label htmlFor="DocumentNumber">Dirección de residencia:</label>
        <input
          type="text"
          id="DocumentNumber"
          name="DocumentNumber"
          className="border rounded-sm text-sm py-3 md:py-2 px-2"
          placeholder="Bro Colon Cll21A #10-08 Montengro - Quindio"
        />
      </div>
      <div className="flex flex-col gap-2 py-2 px-2">
        <label htmlFor="fullName">Correo Electronico:</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          className="border rounded-sm text-sm py-3 md:py-2 px-2"
          placeholder="Yuliam Andrey Osorio Puerta"
        />
      </div>
      <div className="flex flex-col gap-2 pt-2 px-2">
        <label htmlFor="fullName">Télefono celular:</label>
        <input
          type="number"
          id="fullName"
          name="fullName"
          className="border rounded-sm text-sm py-3 md:py-2 px-2"
          placeholder="3218604426"
        />
      </div>
      <div className="flex justify-center mt-4 mb-80">
        <button className="px-20 py-2 bg-purple-600 text-white font-semibold rounded-md mb-24 hover:bg-purple-700">
          Actualizar
        </button>
      </div>
    </form>
  );
};
