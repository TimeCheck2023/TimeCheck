import React, { useState, useRef } from "react";
import { toast } from "react-toastify";

export const ModalEventAdd = ({ handleCloseModal, fetchEvents }) => {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  const [isUploading, setIsUploading] = useState();
  const [isDateValid, setIsDateValid] = useState(true);
  const [isStartDateValid, setIsStartDateValid] = useState(true);
  const [isNumberValid, setIsNumberValid] = useState(true);

  const [state, setState] = useState({
    nombreEvento: "",
    descripcion: "",
    imagen: "https://cdn-icons-png.flaticon.com/512/219/219254.png",
    fechaInicio: "",
    fechaFinal: "",
    lugar: "",
    aforo: 0,
    suborganizacionId: 53,
    tipoEventoId: 18,
  });

  const maxCharacters = 150;

  const handleInputsChange = (e) => {
    const { name, value } = e.target;

    // Verificar si el input es de tipo number y el valor ingresado es negativo
    if (e.target.type === "number" && Number(value) < 0) {
      setIsNumberValid(false);
    } else {
      setIsNumberValid(true);
    }

    // Validación de fechas
    if (name === "fechaInicio") {
      const startDate = new Date(value);
      const endDate = new Date(state.fechaFinal);
      const curerntDate = new Date();
      setIsDateValid(startDate <= endDate);
      const isStartDateValid = startDate >= curerntDate;
      setIsStartDateValid(isStartDateValid);
    } else if (name === "fechaFinal") {
      const startDate = new Date(state.fechaInicio);
      const endDate = new Date(value);
      setIsDateValid(startDate <= endDate);
    }

    setState((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const remainingCharacters = maxCharacters - state.descripcion.length;
  const isMaxLengthReached = remainingCharacters === 0;

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

    // Validar si la imagen predeterminada se está enviando
    if (state.imagen === "https://cdn-icons-png.flaticon.com/512/219/219254.png") {
      toast.error("Debes seleccionar una imagen antes de guardar el evento", {
        theme: "dark",
      });
      return; // Salir de la función sin guardar el evento
    }

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
    fetch(
      "https://time-check.azurewebsites.net/api/Event/Send?" +
        params.toString(),
      {
        method: "POST",
      }
    )
      .then((response) => {
        if (response.ok) {
          // Evento guardado con éxito
          toast.success("Evento guardado con éxito", {
            theme: "dark",
          });
          handleCloseModal();
          fetchEvents();
        } else {
          response.text().then((errorMessage) => {
            console.log(errorMessage);
            // Mostrar el mensaje de error en Toastify
            toast.error(errorMessage, {
              theme: "dark",
            });
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        // Error de red u otro tipo de error
        toast.error("Se produjo un error al procesar la solicitud", {
          theme: "dark",
        });
      });
  };

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
          <div className="w-full h-full px-4 flex flex-col">
            <div className="flex items-center justify-center mb-8">
              <h2 className="font-bold text-4xl text-purple-700">
                Crear Evento
              </h2>
            </div>
            <div className="w-full flex flex-col md:flex-row gap-5 md:gap-20 2xl:gap-20">
              <div className="w-full md:w-64 flex flex-col xl:relative xl:bottom-8">
                {isUploading ? (
                  <div class=" inset-0 z-50 flex items-center justify-center w-full ml-10 h-60 flex-col bg-black opacity-75">
                    <div class="w-10 h-10 border-4 border-gray-300 rounded-full animate-spin"></div>
                    <p class="text-white">Cargando imagen</p>
                  </div>
                ) : (
                  <img
                    className="md:ml-10 2xl:ml-14 w-full bg-cover object-cover max-h-80 md:max-h-64"
                    src={state.imagen}
                    alt="default"
                  />
                )}
                <div className="md:relative md:left-10 2xl:left-10 text-lg md:w-72 flex justify-center my-5">
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
              <div className="flex flex-col w-full relative md:top-8 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="title">Nombre del Evento</label>
                  <input
                    id="title"
                    className="border border-slate-200 py-1 px-3 xl:full rounded-md 2xl:w-11/12"
                    type="text"
                    placeholder="Nombre del evento..."
                    name="nombreEvento"
                    value={state.nombreEvento}
                    onChange={handleInputsChange}
                  />
                </div>
                <div className="flex flex-col md:flex-row w-full gap-10 xl:gap-2 2xl:gap-10">
                  <div className="flex flex-col gap-1">
                    <label htmlFor="date_initial">Fecha Inicial</label>
                    <input
                      id="date_initial"
                      type="datetime-local"
                      className={`md:w-72 xl:w-full text-slate-400 border border-slate-200 py-1 px-3 rounded-md w-full ${
                        !isStartDateValid ? "border-red-500" : ""
                      }`}
                      name="fechaInicio"
                      value={state.fechaInicio}
                      onChange={handleInputsChange}
                    />
                    {!isStartDateValid && (
                      <p className="text-red-500 text-sm">
                        La fecha de inicio no puede ser anterior a la fecha
                        actual.
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col gap-1">
                    <label htmlFor="date_finish">Fecha Final</label>
                    <input
                      id="date_finish"
                      type="datetime-local"
                      className={`md:w-72 xl:w-full text-slate-400 border border-slate-200 py-1 px-3 rounded-md w-full ${
                        !isDateValid ? "border-red-500" : ""
                      }`}
                      name="fechaFinal"
                      value={state.fechaFinal}
                      onChange={handleInputsChange}
                    />
                    {!isDateValid && (
                      <p className="text-red-500 text-sm">
                        La fecha final no puede ser anterior a la fecha inicial.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-1/2">
              <div className="flex flex-col md:px-16 2xl:py-0 pb-5">
                <label>Descripción del evento</label>
                <textarea
                  className={`border resize-none border-slate-200 px-3 py-1 rounded-md text-lg`}
                  placeholder="Descripción..."
                  rows="2"
                  name="descripcion"
                  value={state.descripcion}
                  onChange={handleInputsChange}
                  maxLength={maxCharacters}
                />
                <div
                  className={`text-sm ${
                    isMaxLengthReached ? "text-red-500" : "text-gray-500"
                  }`}>
                  Caracteres restantes: {remainingCharacters}
                </div>
              </div>
              <div className="flex justify-between md:px-16 flex-col md:flex-row">
                <div className="flex flex-col">
                  <label htmlFor="amount_of_people">
                    Cantidad de personas:
                  </label>
                  <input
                    id="amount_of_people"
                    className=" md:w-72 border border-slate-200 py-1 px-3 rounded-md"
                    type="number"
                    placeholder="100"
                    name="aforo"
                    value={state.aforo}
                    onChange={handleInputsChange}
                  />
                  {!isNumberValid && (
                    <p className="text-red-500 text-sm">
                      No se puede ingresar números negativos!
                    </p>
                  )}
                </div>
                <div className="flex flex-col">
                  <label htmlFor="cost_event">Precio del evento:</label>
                  <input
                    id="cost_event"
                    className="md:w-72 border border-slate-200 py-1 px-3 rounded-md"
                    type="number"
                    placeholder="Precio del evento..."
                  />
                </div>
              </div>
              <div className="flex justify-between md:px-16 flex-col md:flex-row">
                <div className="flex flex-col mt-3 xl:mt-5">
                  <label htmlFor="amount_of_people">
                    Lugar/Dirección del evento
                  </label>
                  <input
                    id="amount_of_people"
                    className="md:w-72 border border-slate-200 py-1 px-3 rounded-md"
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
                    className="md:w-72 border border-slate-200 py-1 px-3 rounded-md"
                    name="tipoEventoId"
                    value={state.tipoEventoId}
                    onChange={handleInputsChange}>
                    <option value="18">Social</option>
                    <option value="19">Deportivo</option>
                    <option value="20">Cultural</option>
                    <option value="21">Educativo</option>
                    <option value="22">Religioso</option>
                    <option value="23">Musical</option>
                    <option value="24">Festival</option>
                    <option value="25">Exposiciones</option>
                  </select>
                </div>
              </div>
              <div className="footer flex md:relative md:bottom-14 pb-10 md:pb-0 xl:bottom-0  2xl:bottom-0 2xl:mt-10 justify-center items-center w-full my-10 2xl:my-0">
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
      </div>
    </div>
  );
};
