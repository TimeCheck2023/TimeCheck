import React from "react";

export const ModalAddMember = ({
  filteredMembers,
  selectedRole,
  selectedUser,
  handleUserSelect,
  handleAddMember,
  handleCloseModal,
  handleRoleSelect,
  handleUserSearch,
}) => {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg w-4/5 xl:w-2/5 p-4 flex flex-col gap-5">
        <h3 className="text-2xl font-semibold mb-4 text-center">
          Agregar miembro
        </h3>

        <div className="w-full flex flex-col items-center">
          <input
            type="text"
            placeholder="Buscar usuario"
            onChange={(e) => handleUserSearch(e.target.value)}
            className="border border-gray-300 px-3 py-2 mb-2 rounded-md w-4/5"
          />

          {/* Lista de usuarios filtrada */}
          <ul className="max-h-40 overflow-y-scroll mb-2">
            {filteredMembers.map((user) => (
              <li
                key={user.idUsuario}
                className={`py-2 px-2 cursor-pointer hover:bg-gray-100 ${
                  selectedUser === user.idUsuario ? "bg-blue-100" : ""
                }`}
                onClick={() => handleUserSelect(user)}>
                {/* Mostrar información relevante del usuario */}
                <span className="font-semibold">{user.nombreUsuario}</span>
                <span className="text-gray-500"> - {user.emailUsuario}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full flex flex-col items-center">
          <select
            value={selectedRole}
            onChange={(e) => handleRoleSelect(e.target.value)}
            className="border border-gray-300 px-2 py-1 mb-2 rounded-md w-3/5 xl:w-3/12">
            {/* Opciones de selección de rol */}
            <option value="Admin">Admin</option>
            <option value="Member">Miembro</option>
            {/* Agrega más opciones de rol si es necesario */}
          </select>
        </div>

        <div className="flex gap-10 items-center justify-center">
          <button
            onClick={handleAddMember}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700">
            Agregar
          </button>
          <button
            onClick={handleCloseModal}
            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-900">
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};
