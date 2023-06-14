import React, { useContext, useEffect, useState } from "react";
import { AiFillLike, AiOutlineDelete, AiOutlineLike } from "react-icons/ai";
import { ModalEventEdit } from "../../Layout/ModalEventEdit/ModalEventEdit";
import { toast } from "react-toastify";
import CommentModal from "../../Layout/CommentModal/CommentModal";
import io from "socket.io-client";
import { AuthContext } from "../../../Context/AuthContext";
import ModalEventInfo from "../../Layout/ModalEventInfo/ModalEventInfo";
import moment from "moment";

export const CardEventAdmin = (props) => {
  const [openModal, setOpenModal] = useState(false);
  const [openCommentModal, setOpenCommentModal] = useState(false);
  const [getComments, setGetComments] = useState([]);
  const [likes, setLikes] = useState([]);

  const { socket, nroDocumento, idSubOrg, idOrg } = useContext(AuthContext);

  const currentDatetime = moment().format("YYYY-MM-DDTHH:mm:ss");
  // console.log(currentDatetime);
  // console.log(props.fecha_final);

  const isOrg = nroDocumento === undefined;

  const fechaFinal = moment(props.fecha_final, "YYYY-MM-DDTHH:mm:ss");
  const itsOnTime = fechaFinal.isSameOrBefore(currentDatetime);

  // console.log(props.idSubOrg);
  // console.log(idSubOrg);
  // console.log(idSubOrg);

  const itsAdminHere = idSubOrg === props.idSubOrg;

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

  // funcion pra mostar el Modal de comentarios
  const handleOpenModal = (eventId) => {
    setOpenCommentModal(!openCommentModal);
    // console.log(eventId);
    // Evento para obtener los registros del servidor al cargar la aplicación
    socket.emit("getComments", eventId);
  };

  useEffect(() => {
    socket.on("resultComments", (getComments) => {
      setGetComments(getComments);
    });
    socket.on("likes", (getLikes) => {
      setLikes(getLikes);
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

  // const handleLikeButtonClick = () => {
  //   if (likes.length === 0) {
  //     CreateLikes(props.id);
  //   } else {
  //     DeleteLikes(props.id);
  //   }
  // };

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

  const mostrar = !itsAdminHere && itsOnTime;

  return (
    <>
      <div
        className={`${mostrar ? "hidden" : ""} w-96 h-full border  rounded-lg ${
          itsOnTime ? "border-red-300" : "border-slate-300"
        } `}>
        <div className="flex justify-between px-2 py-1 text-sm">
          <p className="font-bold">
            {props.cupos_disponibles}/{props.aforo}
          </p>
          {idOrg && (
            <button
              onClick={handleDeleteEvent}
              className="px-3 py-1 text-white bg-red-500 rounded-md text-xl hover:bg-red-800 font-semibold">
              <AiOutlineDelete />
            </button>
          )}
          {itsAdminHere && (
            <button
              onClick={handleDeleteEvent}
              className="px-3 py-1 text-white bg-red-500 rounded-md text-xl hover:bg-red-800 font-semibold">
              <AiOutlineDelete />
            </button>
          )}
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
            disabled={true}
            onClick={() => {
              resultLikes ? DeleteLikes(props.id) : CreateLikes(props.id);
            }}
            className={`flex flex-row items-center border w-14 text-center justify-center border-slate-300 rounded-md hover:bg-purple-600 hover:text-white text-purple-600 p-1 gap-1 xl:gap-1 `}>
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
            className="flex flex-row items-center border px-4 lg:px-5 xl:px-8 border-slate-300 rounded-md hover:bg-purple-600 hover:text-white text-purple-600 p-1 gap-1 font-semibold">
            <p>Ver más</p>
          </button>
        </div>
      </div>
      {idOrg
        ? openModal && (
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
          )
        : itsAdminHere
        ? openModal && (
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
          )
        : openModal && (
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
              idEvento={props.id}
              cuposDisponibles={props.cuposDisponibles}
              fetchEvents={props.fetchEvents}
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
