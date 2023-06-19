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
import { ModalAddMember } from "../../components/UI/ModalAddMember/ModalAddMember";
import { DeleteConfirmationModal } from "../../components/UI/DeleteConfirmationModal/DeleteConfirmationModal";

export const SubOrgView = () => {
  const { id } = useParams(); // Obtener el ID de la suborganización desde la URL

  const navigate = useNavigate(); // Para navegar de vuelta a la página anterior

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState("");
  const [typeUser, setTypeUser] = useState(null);
  const [rol, setRol] = useState(null);
  const [nroDocumento, setNroDocumento] = useState(null);

  const [deleteMemberId, setDeleteMemberId] = useState(null);
  const [deleteSubOrgId, setDeleteSubOrgId] = useState(null);

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

  useEffect(() => {
    // Obtener los miembros de la suborganización
    fetch(`https://timecheck.up.railway.app/user/SubOrgMiembro/${id}`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        if (data.error) {
          console.log(data.error);
        } else {
          // console.log(data.message);
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

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleUserSelect = (user) => {
    setSelectedUser(user.idUsuario);
  };

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
  };

  const handleDeleteMember = (id) => {
    setSelectedUser(id);
    setIsModalDeleteOpen(true);
  };

  const handleConfirmDelete = () => {
    // Aquí puedes realizar la eliminación del miembro
    console.log("Eliminando miembro con ID:", selectedUser);
    setIsModalDeleteOpen(false);
  };

  const handleCancelDelete = () => {
    setSelectedUser("");
    setIsModalDeleteOpen(false);
  };

  const handleUsers = () => {
    // console.log("obteniendo");
    try {
      fetch(`https://timecheck.up.railway.app/user/SubOrgMiembro/${id}`)
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          if (data.error) {
            console.log(data.error);
          } else {
            // console.log(data.message);
            setMembers(data.message);
          }
        });
    } catch (error) {
      setMembers([]);
    }
  };

  const fetchUsersSinSubOrg = () => {
    fetch(
      `https://time-check.azurewebsites.net/api/User/UsuariosSinSuborganizacion/${id}`
    )
      .then((response) => response.json())
      .then((data) => {
        setFilteredMembers([]);
        setAvailableMembers(data);

        // Realizar el fetch de los miembros de la organización después de obtener los miembros sin organización
        handleUsers();
      })
      .catch((error) => console.log(error));
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
        })
        .catch((error) => {
          toast.error("Error al agregar el usuario: " + error.message);
          console.log(error);
        });
    }
  };

  const handleEditMember = () => {
    const body = {
      id_suborganizacion2: id, // ID de la suborganización correspondiente
      nro_documento_usuario1: nroDocumento, // Número de documento del usuario seleccionado
      rol: rol, // El valor del rol seleccionado
    };

    fetch("https://time-check.azurewebsites.net/api/Member/EditMemberRole", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        setFilteredMembers([]);
        fetchUsersSinSubOrg();
        toast.success("Miembro actualizado correctamente!");
        setIsModalEditOpen(false);

        // Realizar las acciones necesarias después de la actualización/editar exitosa del miembro
        // Por ejemplo, mostrar una notificación o actualizar la lista de miembros
      })
      .catch((error) => {
        console.log(error);
        toast.error("Hubo un error!");
        // Manejar cualquier error que ocurra durante la solicitud
      });
  };

  const onDeleteConfirm = (deleteMemberId, deleteSubOrgId) => {
    const url = `https://time-check.azurewebsites.net/api/Member/DeleteMember?nroDocumentoUsuario=${deleteMemberId}&idSuborganizacion=${deleteSubOrgId}`;

    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al eliminar el usuario");
        }
      })
      .then((data) => {
        console.log(data);
        fetchUsersSinSubOrg();
        setFilteredMembers([]);
        handleUsers();
        setIsModalDeleteOpen(false);
        toast.success(
          "Se eliminó correctamente el miembro de la suborganización!"
        );
      })
      .catch((error) => {
        // Manejo de errores
        toast.error("Hubo un error: " + error);
        console.log(error);
      });
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-semibold mb-4 text-center">
        Miembros de la suborganización
      </h2>

      <div className="flex items-center justify-between my-6">
        <div>
          <button
            onClick={handleGoBack}
            className="flex items-center justify-center rounded-full bg-violet-600 text-white w-11 py-2 hover:bg-violet-900">
            <AiOutlineCaretLeft className="text-2xl" />
          </button>
        </div>

        {typeUser === 2 && (
          <button
            onClick={handleOpenModal}
            className="flex items-center gap-3 bg-violet-600 text-white px-5 py-2 rounded-md hover:bg-violet-900">
            <AiFillPlusCircle className="text-lg" />
            <span>Agregar miembro</span>
          </button>
        )}
      </div>

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
                {/* {typeUser === 2 && (
                  <th className="bg-gray-100 px-4 py-2">
                    {" "}
                    <input
                      type="checkbox"
                      checked={selectedMembers.length === members.length}
                      onChange={handleSelectAll}
                    />
                  </th>
                )} */}
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
                  {/* {typeUser === 2 && (
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
                  )} */}
                  <td className="border px-4 py-2">
                    {member.nombre_completo_usuario}
                  </td>
                  <td className="border px-4 py-2">{member.correo_usuario}</td>
                  <td className="border px-4 py-2">
                    {member.rol === 0 ? "Administrador" : "Miembro"}
                  </td>
                  {typeUser === 2 && (
                    <td className="border px-4 py-2">
                      <div className="flex gap-2 justify-around">
                        <button
                          onClick={() => {
                            setIsModalDeleteOpen(true);
                            setDeleteMemberId(member.nro_documento_usuario);
                            setDeleteSubOrgId(member.id_suborganizacion);
                          }}
                          className="text-red-600 hover:text-red-800 text-xl">
                          <AiFillDelete />
                        </button>
                        <button
                          onClick={() => {
                            setRol(member.rol);
                            setNroDocumento(member.nro_documento_usuario);
                            // console.log(member.rol);
                            setIsModalEditOpen(true);
                          }}
                          className="text-violet-600 hover:text-violet-800 text-xl">
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
      {isModalDeleteOpen && (
        <DeleteConfirmationModal
          onCancel={handleCancelDelete}
          onDeleteConfirm={() =>
            onDeleteConfirm(deleteMemberId, deleteSubOrgId)
          }
        />
      )}

      {isModalEditOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-80 flex flex-col items-center gap-4">
            <h2 className="text-lg font-semibold mb-4 text-center">
              Cambiar Rol
            </h2>
            <select
              value={rol}
              name="rol"
              id="rol"
              className="flex justify-center items-center text-center border px-3 py-1 rounded-md"
              onChange={(e) => setRol(e.target.value)}>
              {" "}
              <option value="0">Administrador</option>
              <option value="1">Miembro</option>
            </select>
            <div className="flex justify-end">
              <button
                className="mr-2 px-4 py-2 rounded-lg bg-blue-600 text-white"
                onClick={() => {
                  handleEditMember();
                }}>
                Cambiar
              </button>
              <button
                className="px-4 py-2 rounded-lg bg-gray-200 text-gray-800"
                onClick={() => {
                  setIsModalEditOpen(false);
                }}>
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

      {isModalOpen && (
        <ModalAddMember
          filteredMembers={filteredMembers}
          selectedRole={selectedRole}
          handleAddMember={handleAddMember}
          handleCloseModal={handleCloseModal}
          handleRoleSelect={handleRoleSelect}
          handleUserSearch={handleUserSearch}
          selectedUser={selectedUser}
          handleUserSelect={handleUserSelect}
        />
      )}
    </div>
  );
};

export default SubOrgView;
