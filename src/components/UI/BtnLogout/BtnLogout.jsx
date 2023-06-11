import React, { useContext } from "react";
import { BiLogOut } from "react-icons/bi";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthContext";

export const BtnLogout = ({ openNavBar }) => {
  const navigate = useNavigate();
  const { updateNroDocumento } = useContext(AuthContext);

  const handleLogout = () => {
    // Eliminar el token de sesión del almacenamiento local
    localStorage.removeItem("token_login");
    localStorage.removeItem("hasShownToast");
    // Actualizar el número de documento a null
    updateNroDocumento(null);
    // Redirigir al usuario a la página de inicio de sesión
    navigate(`/`);
  };

  return (
    <div
      onClick={handleLogout}
      className={`hover:bg-neutral-300 p-2 flex justify-center items-center rounded-md mb-4 cursor-pointer ${
        openNavBar &&
        "flex flex-row gap-3 justify-center items-center text-center relative left-8 px-5 font-semibold cursor-pointer"
      }`}>
      <BiLogOut className="text-2xl cursor-pointer" />
      {openNavBar && <p className="cursor-pointer">Cerrar Sesión</p>}
    </div>
  );
};
