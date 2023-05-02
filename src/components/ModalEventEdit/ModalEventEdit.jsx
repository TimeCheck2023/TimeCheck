import React, { useState } from "react";

export const ModalEventEdit = ({
  handleCloseModal,
  title,
  description,
  image,
  fecha_inicio,
  fecha_final,
  lugar,
  aforo,
  valor_total,
  tipo_evento,
}) => {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  const [selectedImage, setSelectedImage] = useState(image);

  function handleSelectImage(event) {
    if (event.target.files && event.target.files[0]) {
      setSelectedImage(URL.createObjectURL(event.target.files[0]));
    } else {
      setSelectedImage(image);
    }
  }

  return (
    <div
      className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50 w-full"
      onClick={handleBackdropClick}>
      <div className="bg-white rounded-md shadow-md w-1/2 h-3/4 xl:h-5/6 flex flex-col">
        <div className="flex justify-end px-4 py-2 rounded-t-md bg-neutral-100">
          <button
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={handleCloseModal}>
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <title>Close</title>
              <path
                d="M14.348 14.849a1 1 0 01-1.414 0L10 11.414l-2.93 2.93a1 1 0 01-1.414-1.414l2.93-2.93-2.93-2.93a1 1 0 011.414-1.414l2.93 2.93 2.93-2.93a1 1 0 011.414 1.414l-2.93 2.93 2.93 2.93a1 1 0 010 1.414z"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="h-full">
          <div className="w-full h-full px-4">
            <div className="flex items-center justify-center mb-8">
              <h2 className="font-bold text-4xl text-center text-purple-700">
                Editar Evento
              </h2>
            </div>
            <div className="w-full flex gap-20">
              <div>
                <img
                  className="ml-10"
                  src={selectedImage}
                  alt="default"
                  width={200}
                />
                <div className="relative left-20">
                  <label for="input-file" class="cursor-pointer">
                    <strong className="text-purple-600">Agregar</strong> imagen
                    del evento
                  </label>
                  <input
                    id="input-file"
                    type="file"
                    class="hidden"
                    onChange={handleSelectImage}></input>
                </div>
              </div>
              <div className="flex flex-col w-1/2 relative right-5 top-8 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="title">{title}</label>
                  <input
                    id="title"
                    className="border border-slate-200 py-1 px-3 rounded-md"
                    type="text"
                    placeholder="Conferencia QA"
                  />
                </div>
                <div className="flex flex-row w-full gap-1">
                  <div className="flex flex-col gap-1">
                    <label htmlFor="date_initial">Fecha Inicial</label>
                    <input
                      id="date_initial"
                      type="datetime-local"
                      className="text-slate-400 border border-slate-200 py-1 px-3 rounded-md w-full"
                      value={fecha_inicio}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="date_finish">Fecha Final</label>
                    <input
                      id="date_finish"
                      type="datetime-local"
                      className="text-slate-400 border border-slate-200 py-1 px-3 rounded-md w-full"
                      value={fecha_final}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-1/2 flex flex-col">
              <div className="flex  flex-col px-16 py-3">
                <label>Descripción del evento</label>
                <textarea
                  className="border resize-none border-slate-200 px-3 rounded-md"
                  placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde placeat rerum expedita! Necessitatibus in maiores laborum ipsam corporis accusantium quia quae voluptates totam? Deleniti ratione consequuntur laboriosam, cum laborum tempora!"
                  name=""
                  id=""
                  rows="4">
                  {description}
                </textarea>
              </div>
              <div className="flex justify-between px-16">
                <div className="flex flex-col">
                  <label htmlFor="amount_of_people">
                    Cantidad de personas:
                  </label>
                  <input
                    id="amount_of_people"
                    className="w-72 border border-slate-200 py-1 px-3 rounded-md"
                    type="number"
                    placeholder="100"
                    value={aforo}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="cost_event">Precio del evento:</label>
                  <input
                    id="cost_event"
                    className="w-72 border border-slate-200 py-1 px-3 rounded-md"
                    type="text"
                    value={valor_total}
                  />
                </div>
              </div>
              <div className="flex justify-between px-16">
                <div className="flex flex-col mt-3">
                  <label htmlFor="amount_of_people">
                    Lugar/Dirección del evento
                  </label>
                  <input
                    id="amount_of_people"
                    className="w-72 border border-slate-200 py-1 px-3 rounded-md"
                    type="text"
                    placeholder="100"
                    value={lugar}
                  />
                </div>
                <div className="flex flex-col mt-3">
                  <label htmlFor="">Tipo evento:</label>
                  <select
                    name="tipe_event"
                    id="type_event"
                    className="w-72 border border-slate-200 py-1 px-3 rounded-md">
                    <option value={tipo_evento}>{tipo_evento}</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-center mt-5">
                <div className="border  w-52 flex justify-center items-center gap-8 border-slate-200 py-2 px-3 rounded-md">
                  <p>Evento privado</p>
                  <input
                    type="checkbox"
                    className="appearance-none border border-neutral-400 p-2 rounded-full checked:bg-purple-600"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="footer flex relative bottom-14  justify-center items-center w-full">
            <button
              className="hover:bg-purple-700 bg-purple-500 text-white font-bold py-2 px-8 rounded mr-4"
              onClick={handleCloseModal}>
              Volver
            </button>
            <button className="hover:bg-purple-700 bg-purple-500 text-white font-bold py-2 px-8 rounded">
              Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
