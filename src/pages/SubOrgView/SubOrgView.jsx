import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  AiFillPlusCircle,
  AiFillDelete,
  AiOutlineEdit,
  AiOutlineCaretLeft,
} from "react-icons/ai";
import { toast } from "react-toastify";
import jwtDecode from "jwt-decode";

export const SubOrgView = () => {
  const { id } = useParams(); // Obtener el ID de la suborganización desde la URL
  const navigate = useNavigate(); // Para navegar de vuelta a la página anterior

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState("");
  const [typeUser, setTypeUser] = useState(null);

  const [selectedRole, setSelectedRole] = useState("Admin");

  const [availableMembers, setAvailableMembers] = useState([]);
  const [filteredMembers, setFilteredMembers] = useState([]);
  const [members, setMembers] = useState([]);
  const [selectedMembers, setSelectedMembers] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token_login");

    if (!token) {
      navigate("/"); // Redirigir al usuario a la página de inicio de sesión
    } else {
      const decoded = jwtDecode(token);
      setTypeUser(decoded.payload.EsUsuario);

      const hasShownToast = localStorage.getItem("hasShownToast");
      if (hasShownToast) {
        localStorage.setItem("hasShownToast", "true");
      }
    }
  }, []);

  // Volver a la página anterior
  const handleGoBack = () => {
    navigate(-1); // Navegar de vuelta a la página anterior
  };

  const fetchUsersSinSubOrg = () => {
    fetch(
      `https://time-check.azurewebsites.net/api/User/UsuariosSinSuborganizacion/${id}`
    )
      .then((response) => response.json())
      .then((data) => {
        setFilteredMembers([]);
        setAvailableMembers(data);
      });
  };
  useEffect(() => {
    // Obtener los miembros de la suborganización
    fetch(
      `https://timecheckbacknodejs-production.up.railway.app/user/SubOrgMiembro/${id}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          setMembers(data.message);
        }
      })
      .catch((error) => console.log(error));

    // Obtener los miembros que no están en la suborganización
    fetch(
      `https://time-check.azurewebsites.net/api/User/UsuariosSinSuborganizacion/${id}`
    )
      .then((response) => response.json())
      .then((data) => {
        setAvailableMembers(data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  const handleDeleteMember = (id) => {
    console.log(id);
  };

  const handleEditMember = (id) => {
    console.log(id);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedRole("");
  };

  const handleUserSearch = (searchQuery) => {
    if (!searchQuery) {
      setFilteredMembers(availableMembers); // Mostrar todos los miembros si no hay una consulta de búsqueda
    } else {
      const filteredMembers = availableMembers.filter((member) => {
        const fullName = member.nombreUsuario.toLowerCase();
        const email = member.emailUsuario.toLowerCase();
        const query = searchQuery.toLowerCase();
        return fullName.includes(query) || email.includes(query);
      });
      setFilteredMembers(filteredMembers);
    }
  };

  const handleMemberSelect = (member) => {
    if (selectedMembers.includes(member.nro_documento_usuario)) {
      setSelectedMembers((prevSelectedMembers) =>
        prevSelectedMembers.filter((id) => id !== member.nro_documento_usuario)
      );
    } else {
      setSelectedMembers((prevSelectedMembers) => [
        ...prevSelectedMembers,
        member.nro_documento_usuario,
      ]);
    }
  };

  const handleSelectAll = () => {
    if (selectedMembers.length === members.length) {
      setSelectedMembers([]); // Deseleccionar todos los miembros
    } else {
      setSelectedMembers(members.map((member) => member.nro_documento_usuario)); // Seleccionar todos los miembros
    }
  };

  const handleUserSelect = (user) => {
    setSelectedUser(user.idUsuario);
  };

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
  };

  const handleAddMember = (e) => {
    e.preventDefault();

    if (selectedUser && selectedRole) {
      const body = JSON.stringify({
        id_suborganizacion2: parseInt(id),
        nro_documento_usuario1: selectedUser,
        rol: selectedRole === "Admin" ? "0" : "1",
      });

      fetch("https://time-check.azurewebsites.net/api/User/NuevoMiembro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: body,
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error al agregar el usuario");
          }
        })
        .then((data) => {
          setFilteredMembers([]);
          fetchUsersSinSubOrg();
          toast.success("Se agregó correctamente el usuario!");
          handleCloseModal();
          // Actualizar la lista de miembros
          // fetch(
          //   `https://time-check.azurewebsites.net/api/User/MiembrosSuborganizacion/${id}`
          // )
          //   .then((response) => response.json())
          //   .then((data) => {
          //     setMembers(data);
          //   })
          //   .catch((error) => console.log(error));
        })
        .catch((error) => {
          toast.error("Error al agregar el usuario: " + error.message);
          console.log(error);
        });
    } else {
      toast.error("Por favor selecciona un usuario y un rol");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-semibold mb-4 text-center">
        Miembros de la suborganización
      </h2>

      {typeUser === 2 && (
        <div className="flex items-center justify-between my-6">
          <div>
            <button
              onClick={handleGoBack}
              className="flex items-center justify-center rounded-full bg-purple-600 text-white w-11 py-2 hover:bg-purple-900">
              <AiOutlineCaretLeft className="text-2xl" />
            </button>
          </div>

          <button
            onClick={handleOpenModal}
            className="flex items-center gap-3 bg-purple-600 text-white px-5 py-2 rounded-md hover:bg-purple-900">
            <AiFillPlusCircle className="text-lg" />
            <span>Agregar miembro</span>
          </button>
        </div>
      )}

      <div className="overflow-x-auto">
        {members.length === 0 ? (
          <div className="flex items-center justify-center h-full flex-col mt-52">
            <p className="text-gray-500 text-2xl">
              No hay miembros en la suborganización.
            </p>
            <img
              src="/notFoundEvents.svg"
              alt="NotFoundMembers"
              className="w-52"
            />
          </div>
        ) : (
          <table className="w-full bg-white border border-gray-300">
            <thead>
              <tr>
                {typeUser === 2 && (
                  <th className="bg-gray-100 px-4 py-2">
                    {" "}
                    <input
                      type="checkbox"
                      checked={selectedMembers.length === members.length}
                      onChange={handleSelectAll}
                    />
                  </th>
                )}
                <th className="bg-gray-100 px-4 py-2">Nombre</th>
                <th className="bg-gray-100 px-4 py-2">Correo</th>
                <th className="bg-gray-100 px-4 py-2">Rol</th>
                {typeUser === 2 && (
                  <th className="bg-gray-100 px-4 py-2">Acciones</th>
                )}
              </tr>
            </thead>
            <tbody>
              {members.map((member) => (
                <tr key={member.idUsuario}>
                  {typeUser === 2 && (
                    <td className="border px-4 py-2 text-center">
                      <input
                        type="checkbox"
                        checked={selectedMembers.includes(
                          member.nro_documento_usuario
                        )}
                        onChange={() => handleMemberSelect(member)}
                        key={`${member.nro_documento_usuario}`}
                      />
                    </td>
                  )}
                  <td className="border px-4 py-2">
                    {member.nombre_completo_usuario}
                  </td>
                  <td className="border px-4 py-2">{member.correo_usuario}</td>
                  <td className="border px-4 py-2">{member.role}</td>
                  {typeUser === 2 && (
                    <td className="border px-4 py-2">
                      <div className="flex gap-2 justify-around">
                        <button
                          onClick={() =>
                            handleDeleteMember(member.nro_documento_usuario)
                          }
                          className="text-red-600 hover:text-red-800 text-xl">
                          <AiFillDelete />
                        </button>
                        <button
                          onClick={() =>
                            handleEditMember(member.nro_documento_usuario)
                          }
                          className="text-purple-600 hover:text-purple-800 text-xl">
                          <AiOutlineEdit />
                        </button>
                      </div>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {isModalOpen && (
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
                    <span className="text-gray-500">
                      {" "}
                      - {user.emailUsuario}
                    </span>
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
      )}
    </div>
  );
};

export default SubOrgView;
