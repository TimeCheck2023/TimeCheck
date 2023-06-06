import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BsChatDots } from 'react-icons/bs';

const CommentModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');


  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Agregar lógica para enviar el nuevo comentario al servidor
    // y actualizar el estado de los comentarios
    setComments([...comments, newComment]);
    setNewComment('');
  };

  return (

        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white absolute w-96 mx-4 rounded-lg overflow-hidden">
            <div className="flex justify-between items-center p-4 bg-purple-600 text-white">
              <h2 className="text-xl font-bold">Comentarios</h2>
              <button onClick={closeModal}>
                <AiOutlineClose className="text-2xl" />
              </button>
            </div>

            <div className="p-4">
              <ul className="space-y-4">
                {comments.map((comment, index) => (
                  <li key={index}>{comment}</li>
                ))}
              </ul>
            </div>

            <div className="p-4">
              <form onSubmit={handleSubmit}>
                <textarea
                  className="w-full h-20 border border-gray-300 rounded-md p-2 mb-4"
                  placeholder="Escribe un comentario"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                ></textarea>
                <button
                  className="bg-purple-600 text-white py-2 px-4 rounded-md"
                  type="submit"
                >
                  Enviar comentario
                </button>
              </form>
            </div>
          </div>
        </div>

  );
};

export default CommentModal;
