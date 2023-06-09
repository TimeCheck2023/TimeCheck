import React, { useContext, useEffect, useState } from "react";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { ModalEventInfo } from "../../Layout/ModalEventInfo/ModalEventInfo";
import { AuthContext } from "../../../Context/AuthContext";
import io from "socket.io-client";
import CommentModal from "../../Layout/CommentModal/CommentModal";
import moment from "moment";
import { BtnLike } from "../BtnLike/BtnLike";

export const CardEventUser = (props) => {
  const [openModal, setOpenModal] = useState(false);
  const [openCommentModal, setOpenCommentModal] = useState(false);
  const [getComments, setGetComments] = useState([]);
  const [likes, setLikes] = useState([]);
  // const [nroLikes, setNroLikes] = useState();
  const [likesCount, setLikesCount] = useState(0);

  // const [itsOnTime, setItsOnTime] = useState(false);
  // const [nroLikes, setNroLikes] = useState(null);
  // const [eventLikes, setEventLikes] = useState({});

  const { socket, nroDocumento } = useContext(AuthContext);

  const currentDatetime = moment().format("YYYY-MM-DDTHH:mm:ss");
  // console.log(currentDatetime);
  // console.log(props.fecha_final);

  // Función para validar si la fecha final es igual o pasó la fecha actual
  // const isPastOrEqual = () => {
  const fechaFinal = moment(props.fecha_final, "YYYY-MM-DDTHH:mm:ss");
  const itsOnTime = fechaFinal.isSameOrBefore(currentDatetime);
  // console.log(setItsOnTime);
  // };

  // console.log(props.id
  // console.log(props.nroLikes)
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

  // useEffect(() => {}, [socket, props.id]);

  useEffect(() => {
    socket.on("resultComments", (getComments) => {
      setGetComments(getComments);
    });

    /*{countLikes: 3, likesDetails: Array(3)} */

    socket.on("Countlikes", (data) => {
      const eventLikes = data.likesDetails.find(
        (item) => item.id_evento5 === props.id
      );

      // console.log(eventLikes);
      if (eventLikes) {
        setLikesCount(data.countLikes);
      }
    });

    socket.on("likes", (getLikes) => {
      setLikes(getLikes);
      // console.log(getLikes);
    });

    // Evento de error
    socket.on("error", (error) => {
      console.log("Error en la conexión del socket:", error);
    });

    socket.emit("getCountLikes", props.id);

    socket.emit("getLikes", nroDocumento);
  }, [socket, props.id]);

  const resultLikes = likes.some(
    (like) =>
      like.nro_documento_usuario3 === nroDocumento &&
      like.id_evento5 === props.id
  );

  // console.log(resultLikes);

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
        className={`xl:w-4/5 2xl:w-3/5 w-96 h-full border border-slate-300 bg-gray-100 rounded-lg ${
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
        <div className="w-full px-3 py-3 flex flex-col">
          <div className="w-full truncate flex justify-between">
            <p className="text-base text-violet-600 font-bold truncate">
              {props.title}
            </p>
            <p className="text-violet-600 font-medium">
              {formatPrice(props.price)}
            </p>
          </div>
          <div className="text-left">
            <p className="text-xs truncate">{props.description}</p>
          </div>
        </div>
        <div className="flex flex-row justify-between px-8 py-4">
          <button
            onClick={() => {
              resultLikes ? DeleteLikes(props.id) : CreateLikes(props.id);
            }}
            className="flex flex-row items-center border w-14 text-center justify-center border-slate-300 rounded-md hover:bg-violet-600 hover:text-white text-violet-600 p-1 gap-1 xl:gap-1">
            {resultLikes ? (
              <AiFillLike className="text-base" />
            ) : (
              <AiOutlineLike className="text-base" />
            )}
            {likesCount}
          </button>
          <button
            onClick={() => {
              handleOpenModal(props.id);
            }}
            className="flex flex-row items-center border w-32 text-center px-4 lg:px-5 border-slate-300 rounded-md hover:bg-violet-600 hover:text-white text-violet-600 p-1 gap-1 font-semibold">
            <p>Comentarios</p>
          </button>
          <button
            onClick={() => {
              setOpenModal(!openModal);
            }}
            className="flex flex-row items-center border px-4 lg:px-5 xl:px-5  2xl:w-32 text-center 2xl:justify-center border-slate-300 rounded-md hover:bg-violet-600 hover:text-white text-violet-600 p-1 gap-1 font-semibold">
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
