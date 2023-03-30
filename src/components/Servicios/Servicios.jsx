import React from "react";

export const Servicios = () => {
  return (
    <div className=" w-full bg-slate-500 h-3/5 mt-0">
      <div>
        <div>
          <h2 className="text-purple-600 text-3xl px-16 py-5 font-sans font-semibold">
            Servicios
          </h2>
        </div>
        <div>
          <p className="px-16 text-black">
            Puedes crear grupos dentro de tu propia empresa para crear eventos
            en el momento que quieras
          </p>
        </div>
      </div>
      <div className="flex flex-row h-80 mt-10">
  {/* Primera Columna */}
  <div className={`w-1/2 h-full`}>Columna 1</div>

  {/* Segunda Columna */}
  <div className="w-1/4 h-full flex flex-col ml-2  gap-2">
    <div className={`h-1/2 `}>Fila 1</div>
    <div className={`h-1/2`}>Fila 2</div>
  </div>

  {/* Tercera Columna */}
  <div className="w-1/4 h-full flex flex-col ml-2 mr-2 gap-2">
    <div className={`h-1/2`}>Fila 1</div>
    <div className={`h-1/2`}>Fila 2</div>
  </div>
</div>
    </div>
  );
};
