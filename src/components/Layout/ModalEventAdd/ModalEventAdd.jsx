import React, { useState, useRef } from "react";

export const ModalEventAdd = ({ handleCloseModal }) => {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  const [isUploading, setIsUploading] = useState();
  const [state, setState] = useState({
    nombreEvento: "",
    descripcion: "",
    imagen: "https://cdn-icons-png.flaticon.com/512/219/219254.png",
    fechaInicio: "",
    fechaFinal: "",
    lugar: "",
    aforo: 0,
    suborganizacionId: 1,
    tipoEventoId: 1,
  });

  const handleInputsChange = (e) => {
    const { name, value } = e.target;
    setState((prevValues) => ({ ...prevValues, [name]: value }));
  };

  //Funcion para subir la imagen a cloudinary y guardar el url en el state
  const handleSelectImage = async (e) => {
    setIsUploading(true);
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "time_check");
    formData.append("cloud_name", "centroconveciones");
    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/centroconveciones/image/upload`,
        {
          method: "POST",
          body: formData,
          headers: { "X-Requested-With": "XMLHttpRequest" },
        }
      );
      const data = await res.json();
      setState((prevValues) => ({ ...prevValues, imagen: data.secure_url }));
    } catch (error) {
      console.error(error);
    } finally {
      setIsUploading(false);
    }
  };

  //Funcion para enviar todos los datos al backend para guardarlo en la DB
  const handleSubmit = (e) => {
    e.preventDefault();

    // Preparar datos para enviar en la solicitud POST
    const data = {
      nombreEvento: state.nombreEvento,
      descripcion: state.descripcion,
      imagen: state.imagen,
      fecha_inicio: state.fechaInicio,
      fecha_final: state.fechaFinal,
      lugar: state.lugar,
      aforo: state.aforo,
      id_suborganizacion: state.suborganizacionId,
      id_tipo_evento: state.tipoEventoId,
    };

    const params = new URLSearchParams();
    for (const [key, value] of Object.entries(data)) {
      params.append(key, value);
    }

    // Enviar solicitud POST al endpoint
    fetch("http://timecheck.somee.com/api/Event/Send?" + params.toString(), {
      method: "POST",
    })
      .then((response) => {
        if (response.ok) {
          console.log("Evento guardado con éxito");
          handleCloseModal();
        } else {
          throw new Error(response.Message);
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div
      className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50 w-full"
      onClick={handleBackdropClick}>
      <div className="bg-white rounded-md shadow-md w-1/2 h-3/4 xl:h-4/5 flex flex-col">
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
              <h2 className="font-bold text-4xl text-purple-700">
                Crear Evento
              </h2>
            </div>
            <div className="w-full flex gap-20">
              <div className="w-64 xl:relative xl:bottom-8">
                {isUploading ? (
                  <div class=" inset-0 z-50 flex items-center justify-center w-full ml-10 h-60 flex-col bg-black opacity-75">
                    <div class="w-10 h-10 border-4 border-gray-300 rounded-full animate-spin"></div>
                    <p class="text-white">Cargando imagen</p>
                  </div>
                ) : (
                  <img
                    className="ml-10 w-full bg-cover object-cover max-h-64"
                    src={state.imagen}
                    alt="default"
                  />
                )}
                <div className="relative left-20">
                  <label htmlFor="input-file" className="cursor-pointer">
                    <strong className="text-purple-600">Agregar</strong> imagen
                    del evento
                  </label>
                  <input
                    id="input-file"
                    type="file"
                    className="hidden"
                    name="imagen"
                    onChange={handleSelectImage}></input>
                </div>
              </div>
              <div className="flex flex-col w-1/2 relative top-8 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="title">Nombre del Evento</label>
                  <input
                    id="title"
                    className="border border-slate-200 py-1 px-3 rounded-md"
                    type="text"
                    placeholder="Nombre del evento..."
                    name="nombreEvento"
                    value={state.nombreEvento}
                    onChange={handleInputsChange}
                  />
                </div>
                <div className="flex flex-row w-full gap-10">
                  <div className="flex flex-col gap-1">
                    <label htmlFor="date_initial">Fecha Inicial</label>
                    <input
                      id="date_initial"
                      type="datetime-local"
                      className="text-slate-400 border border-slate-200 py-1 px-3 rounded-md w-full"
                      name="fechaInicio"
                      value={state.fechaInicio}
                      onChange={handleInputsChange}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="date_finish">Fecha Final</label>
                    <input
                      id="date_finish"
                      type="datetime-local"
                      className="text-slate-400 border border-slate-200 py-1 px-3 rounded-md w-full"
                      name="fechaFinal"
                      value={state.fechaFinal}
                      onChange={handleInputsChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-1/2">
              <div className="flex  flex-col px-16 py-5">
                <label>Descripción del evento</label>
                <textarea
                  className="border resize-none border-slate-200 px-3 rounded-md"
                  placeholder="Descripción..."
                  id=""
                  rows="4"
                  name="descripcion"
                  value={state.descripcion}
                  onChange={handleInputsChange}
                />
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
                    name="aforo"
                    value={state.aforo}
                    onChange={handleInputsChange}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="cost_event">Precio del evento:</label>
                  <input
                    id="cost_event"
                    className="w-72 border border-slate-200 py-1 px-3 rounded-md"
                    type="number"
                    placeholder="Precio del evento..."
                  />
                </div>
              </div>
              <div className="flex justify-between px-16">
                <div className="flex flex-col mt-3 xl:mt-5">
                  <label htmlFor="amount_of_people">
                    Lugar/Dirección del evento
                  </label>
                  <input
                    id="amount_of_people"
                    className="w-72 border border-slate-200 py-1 px-3 rounded-md"
                    type="text"
                    placeholder="Lugar del evento..."
                    name="lugar"
                    value={state.lugar}
                    onChange={handleInputsChange}
                  />
                </div>
                <div className="flex flex-col mt-3 xl:mt-5">
                  <label htmlFor="">Tipo de evento:</label>
                  <select
                    id="type_event"
                    className="w-72 border border-slate-200 py-1 px-3 rounded-md"
                    name="tipoEventoId"
                    value={state.tipoEventoId}
                    onChange={handleInputsChange}>
                    <option value="1">Educativo</option>
                    <option value="2">Religioso</option>
                    <option value="3">Social</option>
                    <option value="4">Musical</option>
                    <option value="5">Deportivo</option>
                    <option value="6">Festival</option>
                    <option value="7">Feria</option>
                    <option value="8">Exposiciones</option>
                    <option value="9">Cultural</option>
                  </select>
                </div>
              </div>
              {/* <div className="flex justify-center mt-5">
                <div className="border  w-52 flex justify-center items-center gap-8 border-slate-200 py-2 px-3 rounded-md">
                  <p>Evento privado</p>
                  <input
                    type="checkbox"
                    className="appearance-none border border-neutral-400 p-2 rounded-full checked:bg-purple-600"
                  />
                </div>
              </div> */}
            </div>
          </div>
          <div className="footer flex relative bottom-14 xl:bottom-24  2xl:bottom-14 justify-center items-center w-full">
            <button
              className="hover:bg-purple-700 bg-purple-500 text-white font-bold py-2 px-8 rounded mr-4"
              onClick={handleCloseModal}>
              Volver
            </button>
            <button
              onClick={handleSubmit}
              className="hover:bg-purple-700 bg-purple-500 text-white font-bold py-2 px-8 rounded">
              Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
