import React, { useState } from "react";
import { AiFillLike, AiOutlineDelete } from "react-icons/ai";
import { ModalEventEdit } from "../../Layout/ModalEventEdit/ModalEventEdit";
import { toast } from "react-toastify";

export const CardEventAdmin = (props) => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  const handleDeleteEvent = () => {
    fetch(`https://time-check.azurewebsites.net/api/Event/Delete/${props.id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          // El evento se eliminó correctamentec
          toast.success("El evento se eliminó correctamente", {
            theme: "dark",
          });
          props.fetchEvents(); // Llamar a la función fetchEvents
          // Realizar cualquier otra acción necesaria, como actualizar la lista de eventos
        } else {
          // Manejar el caso en que la eliminación no fue exitosa
          toast.error("Error al eliminar el evento", {
            theme: "dark",
          });
        }
      })
      .catch((error) => {
        // Manejar errores de red u otros errores de solicitud
        console.error("Error en la solicitud:", error);
      });
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <div className="w-80 mx-auto xl:h-full 2xl:h-full lg:h-full border border-black hover:shadow-xl hover:shadow-neutral-500 rounded-md transform transition-transform hover:scale-105 justify-between flex flex-col">
        <div>
          <p
            onClick={handleDeleteEvent}
            className="absolute right-0 text-red-600 font-bold p-3 cursor-pointer text-xl hover:scale-150">
            <AiOutlineDelete />
          </p>
          <img
            src={props.image}
            alt="event"
            className="rounded-t-md w-full object-cover bg-cover max-h-64"
          />
        </div>
        <div className="px-3 py-5">
          <p className="font-bold text-xl truncate">{props.title}</p>
          <p className="font-semibold text-slate-600 ">{props.tipo_evento}</p>
        </div>
        <div>
          <p className="px-3 text-sm truncate whitespace-pre-wrap line-clamp-0 text-justify">
            {props.description}
          </p>
        </div>
        <div className="flex justify-between px-3 py-6">
          <p className="text-slate-400 font-normal">
            {props.price !== 0 ? `$${props.price}` : "GRATIS"}
          </p>
          <p className="text-slate-400 font-normal">{`${props.cupos_disponibles}/${props.aforo}`}</p>
        </div>
        <div className="flex justify-between px-3 gap-4 mt-2 mb-4 2xl:mb-4">
          {/* <button className="flex items-center px-3 bg-slate-100 rounded-md font-bold text-xl text-purple-600 gap-2">
            <AiFillLike className="text-purple-600" />
            {props.likes}
          </button> */}
          <button
            onClick={handleOpenModal}
            className="hover:bg-purple-800 px-14 bg-purple-600 text-white font-medium py-1 rounded-md shadow-lg">
            Ver más
          </button>
        </div>
      </div>
      {openModal && (
        <ModalEventEdit
          handleCloseModal={handleCloseModal}
          idEvent={props.id}
          initialTitle={props.title}
          initialDescription={props.description}
          initialImage={props.image}
          initialFechaInicio={props.fecha_inicio}
          initialFechaFinal={props.fecha_final}
          initialLugar={props.lugar}
          initialAforo={props.aforo}
          initialValorTotal={props.price}
          initialTipoEvento={props.tipo_evento}
          fetchEvents={props.fetchEvents}
        />
      )}
    </>
  );
};
