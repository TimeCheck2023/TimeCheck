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
      <div className="bg-white rounded-md shadow-md w-11/12 md:w-1/2 h-3/4 xl:h-4/5 flex flex-col overflow-scroll md:overflow-auto">
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
            <div className="w-full flex flex-col md:flex-row gap-5 md:gap-20">
              <div className="w-full md:w-64 flex flex-col xl:relative xl:bottom-8">
                <img
                  className="md:ml-10 w-full bg-cover object-cover max-h-80 md:max-h-64"
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
              <div className="flex flex-col w-full relative right-5 top-8 gap-10 ml-5">
                <div className="flex flex-col">
                  <label htmlFor="title">Nombre del evento</label>
                  <input
                    id="title"
                    className="border border-slate-200 py-1 px-3 rounded-md"
                    type="text"
                    placeholder="Conferencia QA"
                    value={title}
                  />
                </div>
                <div className="flex flex-col md:flex-row w-full gap-10 mb-10">
                  <div className="flex flex-col gap-1">
                    <label htmlFor="date_initial">Fecha Inicial</label>
                    <input
                      id="date_initial"
                      type="datetime-local"
                      className="md:w-72 text-slate-400 border border-slate-200 py-1 px-3 rounded-md w-full"
                      value={fecha_inicio}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="date_finish">Fecha Final</label>
                    <input
                      id="date_finish"
                      type="datetime-local"
                      className="md:w-72 text-slate-400 border border-slate-200 py-1 px-3 rounded-md w-full"
                      value={fecha_final}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-1/2 mb-20 md:mb-0">
              <div className="flex  flex-col md:px-16 py-5">
                <label>Descripción del evento</label>
                <textarea
                  className="border resize-none border-slate-300 px-3 py-2 rounded-md text-lg"
                  placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde placeat rerum expedita! Necessitatibus in maiores laborum ipsam corporis accusantium quia quae voluptates totam? Deleniti ratione consequuntur laboriosam, cum laborum tempora!"
                  name=""
                  id=""
                  rows="2">
                  {description}
                </textarea>
              </div>
              <div className="flex justify-between md:px-16 flex-col md:flex-row gap-5 md:gap-0">
                <div className="flex flex-col">
                  <label htmlFor="amount_of_people">
                    Cantidad de personas:
                  </label>
                  <input
                    id="amount_of_people"
                    className="md:w-72 border border-slate-200 py-1 px-3 rounded-md"
                    type="number"
                    placeholder="100"
                    value={aforo}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="cost_event">Precio del evento:</label>
                  <input
                    id="cost_event"
                    className="md:w-72 border border-slate-200 py-1 px-3 rounded-md"
                    type="text"
                    value={valor_total}
                  />
                </div>
              </div>
              <div className="flex justify-between md:px-16 flex-col md:flex-row gap-5 md:gap-0 ">
                <div className="flex flex-col mt-3">
                  <label htmlFor="amount_of_people">
                    Lugar/Dirección del evento
                  </label>
                  <input
                    id="amount_of_people"
                    className="md:w-72 border border-slate-200 py-1 px-3 rounded-md"
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
                    className="md:w-72 border border-slate-200 py-1 px-3 rounded-md">
                    <option value={tipo_evento}>{tipo_evento}</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="footer flex md:relative md:bottom-14 xl:bottom-0  2xl:bottom-14 justify-center items-center w-full my-10 mb-40">
              <button
                className="hover:bg-purple-700 mb-10 bg-purple-500 text-white font-bold py-2 px-8 rounded mr-4"
                onClick={handleCloseModal}>
                Volver
              </button>
              <button className="hover:bg-purple-700 mb-10 bg-purple-500 text-white font-bold py-2 px-8 rounded">
                Guardar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
