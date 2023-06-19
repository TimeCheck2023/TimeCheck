import React, { useContext, useEffect, useState } from "react";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { AuthContext } from "../../../Context/AuthContext";
import io from "socket.io-client";

export const BtnLike = (props) => {
  const [likes, setLikes] = useState([]);
  const [nroLikes, setNroLikes] = useState();

  // console.log(props.eventId);

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

  // const isYourLike = nroLikes.length > 0 && nroLikes[0].id_evento === props.eventId;

  // console.log(props.eventId)

  useEffect(() => {
    socket.emit("getCountLikes", props.eventId);

    socket.on("Countlikes", (data) => {
      setNroLikes(data);
      // console.log(data)
      // console.log(data?.[""])
      // console.log(data.id_evento5);
      // console.log(data);
    });

    socket.on("likes", (getLikes) => {
      setLikes(getLikes);
      // console.log(getLikes)
      //   console.log(getLikes);
    });

    // Evento de error
    socket.on("error", (error) => {
      console.log("Error en la conexión del socket:", error);
    });
  }, [socket]);

  const resultLikes = likes.some(
    (like) =>
      like.nro_documento_usuario3 === nroDocumento &&
      like.id_evento5 === props.eventId
  );

  // const countLikes = likes.some(
  //   (like) =>
  //     like.nro_documento_usuario3 === nroDocumento &&
  //     like.id_evento5 === props.eventId
  // );

  // let countLikes = 0;

  // if(nroLikes === null || nroLikes?.[""] === undefined){
  //   countLikes = 0;
  // }else if(nroLikes?.id_evento5 === props.eventId ){
  //   countLikes = nroLikes[""]
  // }

  // const isYourLike = nroLikes.id_evento5 === props.eventId && nroLikes[""];

  return (
    <button
      onClick={() => {
        resultLikes ? DeleteLikes(props.eventId) : CreateLikes(props.eventId);
      }}
      className="flex flex-row items-center border w-14 text-center justify-center border-slate-300 rounded-md hover:bg-violet-600 hover:text-white text-violet-600 p-1 gap-1 xl:gap-1">
      {resultLikes ? (
        <AiFillLike className="text-base" />
      ) : (
        <AiOutlineLike className="text-base" />
      )}
      {/* {countLikes} */}
    </button>
  );
};
