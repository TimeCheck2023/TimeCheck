import { useEffect, useState } from "react";
import {
  AiOutlineClose,
  AiOutlineSend,
  AiOutlineEllipsis,
} from "react-icons/ai";
import { BsChatDots } from "react-icons/bs";



const CommentModal = ({ handleCloseCommentModal, getComments }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [showOptions, setShowOptions] = useState([]);
  const [selectedCommentIndex, setSelectedCommentIndex] = useState(null);

  const closeModal = () => {
    handleCloseCommentModal();
  };

  console.log(getComments)



  const handleSubmit = (e) => {
    e.preventDefault();
    setComments([...comments, newComment]);
    setNewComment("");
  };

  const handleOptionsClick = (index) => {

  };

  const handleDeleteComment = (index) => {

  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white absolute h-3/4 w-1/2 mx-4 rounded-lg overflow-hidden gap-16 flex flex-col">
        <div className="flex justify-between items-center p-6 bg-purple-600 text-white">
          <h2 className="text-xl font-bold">Comentarios</h2>
          <button onClick={closeModal}>
            <AiOutlineClose className="text-2xl" />
          </button>
        </div>

        <div className="p-4 h-full overflow-y-scroll scrollbar-thumb-purple-900 scrollbar-track-transparent scrollbar-thin">
          {getComments.length === 0 ? (
            <p className="text-center text-gray-500 mt-10">
              No hay comentarios aún.
            </p>
          ) : (
            <ul className="space-y-4 flex flex-col justify-end items-end">
              {getComments.map((comment,index) => (
                <li key={index} className="flex items-start w-1/2 gap-5">
                  <div
                    className={`flex items-start w-full space-x-4 py-2 px-3 rounded-b-xl rounded-l-xl border shadow-md`}
                  >
                    <div className="relative flex items-center">
                      <button onClick={() => handleOptionsClick(index)}>
                        <AiOutlineEllipsis className="text-gray-500 text-xl" />
                      </button>
                    </div>
                    <div className="flex-grow">
                      <p className="font-semibold text-right">
                      {comment.correo_usuario}
                      </p>
                      <p className="text-sm text-gray-500 text-right">
                        {comment.comentario}
                      </p>
                    </div>
                    {/* {showOptions[index] && (
                      <div className="absolute  mt-2 ml-2 bg-white shadow-md shadow-stone-500 rounded-t-xl rounded-r-xl border border-neutral-950 py-1 px-2">
                        <button
                          className="block w-full text-left rounded-md py-2 px-4 hover:bg-purple-600 hover:text-white"
                          onClick={() => handleDeleteComment(index)}
                        >
                          Eliminar
                        </button>
                      </div>
                    )} */}
                  </div>
                  <div
                    className={`flex items-center justify-center bg-purple-600 rounded-full h-14 w-16 text-white`}
                  >
                    {/* Aquí puedes reemplazar el icono de usuario */}
                    <BsChatDots className="text-xl" />
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="px-2 py-6 bg-slate-100">
          <form onSubmit={handleSubmit}>
            <input
              className="w-11/12 h-14 px-10 border text-lg border-gray-300 rounded-md p-4 focus:outline-none"
              placeholder="Escribe un comentario"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <button
              className="bg-purple-600 text-white py-5 px-5 rounded-md absolute right-5"
              type="submit"
            >
              <AiOutlineSend />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CommentModal;
