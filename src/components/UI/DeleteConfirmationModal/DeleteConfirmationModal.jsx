import { useState } from "react";
import { AiFillDelete, AiOutlineClose } from "react-icons/ai";

export const DeleteConfirmationModal = ({ onDeleteConfirm, onCancel }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleConfirm = () => {
    setIsDeleting(true);
    onDeleteConfirm();
    setIsDeleting(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-80">
        <h2 className="text-lg font-semibold mb-4">Confirmar eliminación</h2>
        <p className="mb-4">
          ¿Estás seguro de que deseas eliminar este miembro?
        </p>
        <div className="flex justify-end">
          <button
            className="mr-2 px-4 py-2 rounded-lg bg-red-600 text-white"
            onClick={handleConfirm}
            disabled={isDeleting}>
            {isDeleting ? "Eliminando..." : "Confirmar"}
          </button>
          <button
            className="px-4 py-2 rounded-lg bg-gray-200 text-gray-800"
            onClick={onCancel}
            disabled={isDeleting}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};
