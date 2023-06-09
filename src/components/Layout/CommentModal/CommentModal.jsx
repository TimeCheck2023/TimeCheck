import React, { useEffect, useState } from "react";
import {
  AiOutlineClose,
  AiOutlineSend,
  AiOutlineEllipsis,
} from "react-icons/ai";
import { BsChatDots } from "react-icons/bs";
import { AuthContext } from "../../../Context/AuthContext";
import { useContext } from "react";

const CommentModal = ({
  handleCloseCommentModal,
  getComments,
  nroDocumento,
  eventId,
  socket,
}) => {
  const [firstLetter, setFirstLetter] = useState(null);
  const [newComment, setNewComment] = useState("");
  const [isLoadingComments, setIsLoadingComments] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [commentId, setCommentId] = useState(null);

  //loading para saber si están comentando
  const [isLoadings, setisLoadings] = useState(null);

  const { correo } = useContext(AuthContext);

  const closeModal = () => {
    handleCloseCommentModal();
  };

  useEffect(() => {
    getComments.map((comment) => {
      // console.log(comment);
    });
  }, [getComments]);

  useEffect(() => {
    // socket.on('connect', () => {
    socket.on("activo", (activo) => {
      setisLoadings(activo);
    });

    socket.on("desactivo", (desactivo) => {
      setisLoadings(desactivo);
    });

    socket.on("likes", (getLikes) => {
      // console.log(getLikes);
    });

    // Evento de error
    socket.on("error", (error) => {
      console.log("Error en la conexión del socket:", error);
    });

    socket.on("delete", (getComments) => {
      console.log(getComments);
      // setModalVisible(false);
    });
    socket.emit("getLikes", nroDocumento);
    // });
  }, [socket]);

  const handleInputChange = (e) => {
    setNewComment(e.target.value);
    if (e.target.value === "") {
      socket.emit("desactivo");
    } else if (isLoadings === null) {
      socket.emit("activo");
    }
  };

  const onDelete = () => {
    socket.emit("deleteComment", {
      commentId,
      id_evento4: eventId,
    });
    setShowDeleteModal(false); // Oculta la modal de eliminación
  };

  const submitComment = (e) => {
    e.preventDefault();

    if (newComment !== "") {
      setIsLoadingComments(true);
      const objeto = {
        comentario: newComment,
        id_evento4: eventId,
        nro_documento_usuario: nroDocumento,
      };

      socket.emit("addComment", objeto);
      socket.emit("desactivo");
    }
    setNewComment("");
    setIsLoadingComments(false); // Agrega esta línea
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white absolute h-4/5 w-1/2 mx-4 rounded-lg overflow-hidden gap-16 flex flex-col">
        <div className="flex justify-between items-center p-6 bg-purple-600 text-white">
          <h2 className="text-2xl font-bold">Comentarios</h2>
          <button onClick={closeModal}>
            <AiOutlineClose className="text-2xl" />
          </button>
        </div>

        <div className="p-4 mx-10 shadow-md bg-slate-50 shadow-neutral-400 rounded-md h-full overflow-y-scroll scrollbar-thumb-purple-900 scrollbar-track-transparent scrollbar-thin">
          {getComments.length === 0 ? (
            <p className="text-center text-gray-500 mt-10">
              No hay comentarios aún.
            </p>
          ) : (
            <ul className="space-y-4 flex flex-col justify-center items-center text-center ">
              {getComments.map((comment, index) => (
                <li
                  key={index}
                  className={`flex items-center w-4/5 gap-5 shadow-sm ${
                    comment.correo_usuario === correo ? "" : "flex-row-reverse"
                  }`}>
                  <div
                    className={`flex items-start w-full space-x-4 py-2 px-3  border shadow-md shadow-neutral-400 ${
                      comment.correo_usuario === correo
                        ? "rounded-t-2xl rounded-l-2xl"
                        : "flex-row-reverse rounded-t-2xl rounded-r-2xl"
                    }`}>
                    {comment.correo_usuario === correo && (
                      <div className="relative">
                        <button
                          onClick={() => {
                            setCommentId(comment.id_comentario); // Almacena el comentario que se va a eliminar
                            setShowDeleteModal(true); // Muestra la modal de eliminación
                          }}>
                          <AiOutlineEllipsis className="text-gray-500 text-xl" />
                        </button>
                      </div>
                    )}
                    <div className="flex-grow">
                      <p
                        className={`font-semibold ${
                          comment.correo_usuario === correo
                            ? "text-right"
                            : "text-left"
                        }`}>
                        {comment.correo_usuario}
                      </p>
                      <p
                        className={`text-sm text-gray-500 ${
                          comment.correo_usuario === correo
                            ? "text-right"
                            : "text-left"
                        }`}>
                        {comment.comentario}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center bg-purple-600 rounded-full h-14 w-16 text-white text-2xl">
                    {comment.nombre_completo_usuario?.charAt(0)?.toUpperCase()}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="px-2 py-6 bg-slate-100">
          {isLoadings && <p>Alguien está escribiendo...</p>}
          <form onSubmit={submitComment}>
            <input
              className="w-11/12 h-14 px-10 border text-lg border-gray-300 rounded-md p-4 focus:outline-none"
              placeholder="Escribe un comentario"
              value={newComment}
              onChange={handleInputChange}
            />
            <button
              className="bg-purple-600 text-white py-5 px-5 rounded-md absolute right-5"
              type="submit"
              disabled={isLoadingComments}>
              {isLoadingComments ? (
                <div className="spinner"></div>
              ) : (
                <AiOutlineSend />
              )}
            </button>
          </form>
        </div>
      </div>
      {showDeleteModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-xl font-bold">Eliminar comentario</h3>
            <p>¿Estás seguro de que deseas eliminar este comentario?</p>
            <div className="flex justify-end mt-6">
              <button
                className="text-gray-500 mr-4"
                onClick={() => setShowDeleteModal(false)}>
                Cancelar
              </button>
              <button className="text-red-500" onClick={onDelete}>
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommentModal;
