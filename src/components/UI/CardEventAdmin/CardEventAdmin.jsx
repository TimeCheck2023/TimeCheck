import React, { useState } from "react";
import { AiFillLike, AiOutlineDelete, AiOutlineLike } from "react-icons/ai";
import { ModalEventEdit } from "../../Layout/ModalEventEdit/ModalEventEdit";
import { toast } from "react-toastify";
import CommentModal from "../../Layout/CommentModal/CommentModal";

export const CardEventAdmin = (props) => {
  const [openModal, setOpenModal] = useState(false);
  const [openCommentModal, setOpenCommentModal] = useState(false);

  const handleCloseCommentModal = () => {
    setOpenCommentModal(false);
  };

  const formatPrice = (price) => {
    if (price === 0) {
      return "Gratis";
    } else {
      const formattedPrice = new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
      }).format(price);
      return formattedPrice;
    }
  };

  // const handleDeleteEvent = () => {
  //   fetch(`https://time-check.azurewebsites.net/api/Event/Delete/${props.id}`, {
  //     method: "DELETE",
  //   })
  //     .then((response) => {
  //       if (response.ok) {
  //         // El evento se eliminó correctamentec
  //         toast.success("El evento se eliminó correctamente", {
  //           theme: "dark",
  //         });
  //         props.fetchEvents(); // Llamar a la función fetchEvents
  //         // Realizar cualquier otra acción necesaria, como actualizar la lista de eventos
  //       } else {
  //         // Manejar el caso en que la eliminación no fue exitosa
  //         toast.error("Error al eliminar el evento", {
  //           theme: "dark",
  //         });
  //       }
  //     })
  //     .catch((error) => {
  //       // Manejar errores de red u otros errores de solicitud
  //       console.error("Error en la solicitud:", error);
  //     });
  // };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <div className="w-96 h-full border border-slate-300 rounded-lg ">
        <div className="flex justify-between px-2 py-1 text-sm">
          <p className="font-bold">
            {props.cupos_disponibles}/{props.aforo}
          </p>
          <p className="text-slate-400 font-medium">{props.tipo_evento}</p>
        </div>
        <div className="p-3 flex justify-center">
          <img
            src={props.image}
            alt="imagen"
            className="rounded-md w-fit max-h-52 object-cover"
          />
        </div>
        <div className="px-3 py-3 flex justify-between">
          <div className="w-52 truncate ">
            <p className="text-base text-purple-600 font-bold truncate">
              {props.title}
            </p>
            <p className="text-xs truncate">{props.description}</p>
          </div>
          <div>
            <p className="text-purple-600 font-medium">
              {formatPrice(props.price)}
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-between px-8 py-4">
          <button className="flex flex-row items-center border w-14 text-center justify-center border-slate-300 rounded-md hover:bg-purple-600 hover:text-white text-purple-600 p-1 gap-1 xl:gap-1">
            <AiOutlineLike className=" text-base" />
            <p className="font-bold">{props.likes}</p>
          </button>
          <button
            onClick={() => {
              setOpenCommentModal(!openCommentModal);
            }}
            className="flex flex-row items-center border w-32 text-center px-4 lg:px-5 border-slate-300 rounded-md hover:bg-purple-600 hover:text-white text-purple-600 p-1 gap-1 font-semibold">
            <p>Comentarios</p>
          </button>
          <button
            onClick={() => {
              setOpenModal(!openModal);
            }}
            className="flex flex-row items-center border px-4 lg:px-5 xl:px-8 border-slate-300 rounded-md hover:bg-purple-600 hover:text-white text-purple-600 p-1 gap-1 font-semibold">
            <p>Ver más</p>
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
          initialTipoEventoId={props.id_tipo_evento}
          fetchEvents={props.fetchEvents}
        />
      )}
      {openCommentModal && (
        <CommentModal handleCloseCommentModal={handleCloseCommentModal} />
      )}
    </>
  );
};
