import React, { useContext, useEffect, useState } from "react";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { ModalEventInfo } from "../../Layout/ModalEventInfo/ModalEventInfo";
import { AuthContext } from "../../../Context/AuthContext";
import io from "socket.io-client";
import CommentModal from "../../Layout/CommentModal/CommentModal";
import moment from "moment";

export const CardEventUser = (props) => {
  const [openModal, setOpenModal] = useState(false);
  const [openCommentModal, setOpenCommentModal] = useState(false);
  const [getComments, setGetComments] = useState([]);
  const [likes, setLikes] = useState([]);
  // const [itsOnTime, setItsOnTime] = useState(false);

  const { socket, nroDocumento } = useContext(AuthContext);

  const currentDatetime = moment().format("YYYY-MM-DDTHH:mm:ss");
  console.log(currentDatetime);
  console.log(props.fecha_final);

  // Función para validar si la fecha final es igual o pasó la fecha actual
  // const isPastOrEqual = () => {
  const fechaFinal = moment(props.fecha_final, "YYYY-MM-DDTHH:mm:ss");
  const itsOnTime = fechaFinal.isSameOrBefore(currentDatetime);
  // console.log(setItsOnTime);
  // };

  // console.log(nroDocumento);

  // funcion pra mostar el Modal de comentarios
  const handleOpenModal = (eventId) => {
    setOpenCommentModal(!openCommentModal);
    // console.log(eventId);
    // Evento para obtener los registros del servidor al cargar la aplicación
    socket.emit("getComments", eventId);
  };

  //Funcion para dar like
  const CreateLikes = (id) => {
    const objeto = new Object({
      id_evento: id,
      likes: 1,
      nro_documento_usuario: nroDocumento,
    });
    socket.emit("createLikes", objeto);
    // console.log("enviar");
  };

  const DeleteLikes = (id) => {
    const objeto = new Object({
      id_evento: id,
      nro_documento_usuario: nroDocumento,
    });
    socket.emit("deleteLikes", objeto);
  };

  useEffect(() => {
    socket.on("resultComments", (getComments) => {
      setGetComments(getComments);
    });
    socket.on("likes", (getLikes) => {
      setLikes(getLikes);
      // console.log(getLikes);
      // console.log(getLikes);
    });
    // Evento de error
    socket.on("error", (error) => {
      console.log("Error en la conexión del socket:", error);
    });

    socket.emit("getLikes", nroDocumento);
    // });
  }, [socket]);

  const resultLikes = likes.some(
    (like) =>
      like.nro_documento_usuario3 === nroDocumento &&
      like.id_evento5 === props.id
  );

  const handleCloseCommentModal = () => {
    setOpenCommentModal(false);
  };

  const updateComments = (newComments) => {
    setGetComments(newComments);
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

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <>
      <div
        className={`w-4/5 h-full border border-slate-300 rounded-lg ${
          itsOnTime ? "hidden" : ""
        }`}>
        <div className="flex justify-between px-2 py-1 text-sm">
          <p className="font-bold">
            {props.cuposDisponibles}/{props.aforo}
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
          <button
            onClick={() => {
              resultLikes ? DeleteLikes(props.id) : CreateLikes(props.id);
            }}
            className="flex flex-row items-center border w-14 text-center justify-center border-slate-300 rounded-md hover:bg-purple-600 hover:text-white text-purple-600 p-1 gap-1 xl:gap-1">
            {resultLikes ? (
              <AiFillLike className=" text-base" />
            ) : (
              <AiOutlineLike className=" text-base" />
            )}
          </button>
          <button
            onClick={() => {
              handleOpenModal(props.id);
            }}
            className="flex flex-row items-center border w-32 text-center px-4 lg:px-5 border-slate-300 rounded-md hover:bg-purple-600 hover:text-white text-purple-600 p-1 gap-1 font-semibold">
            <p>Comentarios</p>
          </button>
          <button
            onClick={() => {
              setOpenModal(!openModal);
            }}
            className="flex flex-row items-center border px-4 lg:px-5 xl:px-5 border-slate-300 rounded-md hover:bg-purple-600 hover:text-white text-purple-600 p-1 gap-1 font-semibold">
            <p>Ver más</p>
          </button>
        </div>
      </div>
      {openModal && (
        <ModalEventInfo
          handleCloseModal={handleCloseModal}
          title={props.title}
          description={props.description}
          image={props.image}
          fecha_inicio={props.fecha_inicio}
          fecha_final={props.fecha_final}
          lugar={props.lugar}
          aforo={props.aforo}
          valor_total={props.price}
          tipo_evento={props.tipo_evento}
          idEvento={props.idEvento}
          cuposDisponibles={props.cuposDisponibles}
          fetchEvents={props.fetchEvents} // Pasa la prop aquí
        />
      )}
      {openCommentModal && (
        <CommentModal
          handleCloseCommentModal={handleCloseCommentModal}
          getComments={getComments}
          nroDocumento={nroDocumento}
          eventId={props.id}
          socket={socket}
          updateComments={updateComments}
        />
      )}
    </>
  );
};
