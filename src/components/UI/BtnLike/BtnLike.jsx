import React, { useContext, useEffect, useState } from "react";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { AuthContext } from "../../../Context/AuthContext";
import io from "socket.io-client";

export const BtnLike = (props) => {
  const [likes, setLikes] = useState([]);
  const [nroLikes, setNroLikes] = useState([]);

  //   console.log(props.id)

  const { socket, nroDocumento } = useContext(AuthContext);

  // Función para dar like
  const CreateLikes = (id) => {
    const objeto = new Object({
      id_evento: id,
      likes: 1,
      nro_documento_usuario: nroDocumento,
    });
    socket.emit("createLikes", objeto);
  };

  const DeleteLikes = (id) => {
    const objeto = new Object({
      id_evento: id,
      nro_documento_usuario: nroDocumento,
    });
    socket.emit("deleteLikes", objeto);
  };

  useEffect(() => {
    socket.emit("getCountLikes", props.eventId);

    socket.emit("getLikes", nroDocumento);

    socket.on("Countlikes", (data) => {
      setNroLikes(data);
      console.log(data);
    });

    socket.on("likes", (getLikes) => {
      setLikes(getLikes);
      //   console.log(getLikes);
    });

    // Evento de error
    socket.on("error", (error) => {
      console.log("Error en la conexión del socket:", error);
    });

    socket.emit("getLikes", nroDocumento);
  }, [socket]);

  const resultLikes = likes.some(
    (like) =>
      like.nro_documento_usuario3 === nroDocumento &&
      like.id_evento5 === props.eventId
  );

  return (
    <button
      onClick={() => {
        resultLikes ? DeleteLikes(props.eventId) : CreateLikes(props.eventId);
      }}
      className="flex flex-row items-center border w-14 text-center justify-center border-slate-300 rounded-md hover:bg-purple-600 hover:text-white text-purple-600 p-1 gap-1 xl:gap-1">
      {resultLikes ? (
        <AiFillLike className="text-base" />
      ) : (
        <AiOutlineLike className="text-base" />
      )}
      {/* {nroLikes} */}
    </button>
  );
};
