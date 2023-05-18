import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const ModalEventEdit = ({
  handleCloseModal,
  initialTitle,
  initialDescription,
  initialImage,
  initialFechaInicio,
  initialFechaFinal,
  initialLugar,
  initialAforo,
  initialValorTotal,
  initialTipoEvento,
}) => {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  const [eventTypes, setEventTypes] = useState([])
  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);
  const [image, setImage] = useState(initialImage);
  const [fechaInicio, setFechaInicio] = useState(initialFechaInicio);
  const [fechaFinal, setFechaFinal] = useState(initialFechaFinal);
  const [lugar, setLugar] = useState(initialLugar);
  const [aforo, setAforo] = useState(initialAforo);
  const [valorTotal, setValorTotal] = useState(initialValorTotal);
  const [tipoEvento, setTipoEvento] = useState(initialTipoEvento);

  const [isUploading, setIsUploading] = useState();
  const [isDateValid, setIsDateValid] = useState(true);
  const [isStartDateValid, setIsStartDateValid] = useState(true);
  const [isNumberValid, setIsNumberValid] = useState(true);

  const [selectedImage, setSelectedImage] = useState(image);

  function handleSelectImage(event) {
    if (event.target.files && event.target.files[0]) {
      setSelectedImage(URL.createObjectURL(event.target.files[0]));
    } else {
      setSelectedImage(image);
    }
  }


  useEffect(() => {
    fetch("https://time-check.azurewebsites.net/api/Event/get_event_types")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.response.map(type=> type.tipoEvento))
        setEventTypes(data.response.map(type=> type.tipoEvento));
      });
  
  }, [])
  

  const handleInputChange = (event) => {
    const { name, value } = event.target;

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

    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "description":
        setDescription(value);
        break;
      case "fecha_inicio":
        setFechaInicio(value);
        break;
      case "fecha_final":
        setFechaFinal(value);
        break;
      case "lugar":
        setLugar(value);
        break;
      case "aforo":
        setAforo(value);
        break;
      case "valor_total":
        setValorTotal(value);
        break;
      case "tipo_evento":
        setTipoEvento(value);
        break;
      default:
        break;
    }
  };

  const handleUpdateEvent = () => {
    // Construir objeto FormData con los datos del evento
    const formData = new FormData();
    formData.append("nombreEvento", title);
    formData.append("descripcion", description);
    formData.append("imagen", selectedImage);
    formData.append("fecha_inicio", fecha_inicio);
    formData.append("fecha_final", fecha_final);
    formData.append("lugar", lugar);
    formData.append("aforo", aforo);
    formData.append("id_tipo_evento", tipo_evento);

    // Realizar la solicitud PUT al endpoint de actualización
    fetch(`/api/Update/${eventId}`, {
      method: "PUT",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        // Manejar la respuesta del servidor
        console.log(data); // Hacer algo con la respuesta, por ejemplo, mostrar un mensaje de éxito
        toast.success("El evento se actualizó con exito!", {
          theme: "dark",
        });
      })
      .catch((error) => {
        // Manejar errores
        console.error(error);
        toast.error(`Hubo un error: ${error}`);
      });
  };

  return (
    <div
      className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50 w-full"
      onClick={handleBackdropClick}>
      <form className="bg-white rounded-md shadow-md w-11/12 md:w-1/2 h-3/4 xl:h-4/5 flex flex-col overflow-scroll md:overflow-auto">
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
                {isUploading ? (
                  <div class=" inset-0 z-50 flex items-center justify-center w-full ml-10 h-60 flex-col bg-black opacity-75">
                    <div class="w-10 h-10 border-4 border-gray-300 rounded-full animate-spin"></div>
                    <p class="text-white">Cargando imagen</p>
                  </div>
                ) : (
                  <img
                    className="md:ml-10 2xl:ml-14 w-full bg-cover object-cover max-h-80 md:max-h-64"
                    src={selectedImage}
                    alt="default"
                  />
                )}
                <div className="md:relative md:left-10 2xl:left-10 text-lg md:w-72 flex justify-center my-5">
                  <label htmlFor="input-file" className="cursor-pointer">
                    <strong className="text-purple-600">Cambiar</strong> imagen
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
                  <label htmlFor="title">Nombre del evento</label>
                  <input
                    id="title"
                    className="border border-slate-200 py-1 px-3 xl:full rounded-md 2xl:w-11/12"
                    type="text"
                    placeholder="Conferencia QA"
                    value={title}
                    onChange={handleInputChange}
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
                      value={fechaInicio}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="date_finish">Fecha Final</label>
                    <input
                      id="date_finish"
                      type="datetime-local"
                      className="md:w-72 text-slate-400 border border-slate-200 py-1 px-3 rounded-md w-full"
                      value={fechaFinal}
                      onChange={handleInputChange}
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
                  rows="2"
                  defaultValue={description}
                  onChange={handleInputChange}></textarea>
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
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="cost_event">Precio del evento:</label>
                  <input
                    id="cost_event"
                    className="md:w-72 border border-slate-200 py-1 px-3 rounded-md"
                    type="text"
                    value={valorTotal}
                    onChange={handleInputChange}
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
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex flex-col mt-3">
                  <label htmlFor="">Tipo evento:</label>
                  <select
                    name="tipe_event"
                    id="type_event"
                    onChange={handleInputChange}
                    value={tipoEvento} // Asegúrate de establecer el valor seleccionado correctamente
                    className="md:w-72 border border-slate-200 py-1 px-3 rounded-md">
                    {eventTypes.map((type) => (
    <option key={type} value={type}>
      {type}
    </option>
  ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="footer flex md:relative md:bottom-14 xl:bottom-0  2xl:bottom-14  justify-center items-center w-full my-44 md:my-10 mb-40 2xl:my-0 2xl:mb-0">
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
      </form>
    </div>
  );
};
