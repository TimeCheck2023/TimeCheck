import React, { useState, useEffect, useRef } from "react";
import { FiLogIn } from "react-icons/fi";
import {
  AiOutlineUserSwitch,
  AiOutlineMenu,
  AiFillHome,
  AiOutlineCaretDown,
} from "react-icons/ai";
import {
  MdOutlineContactMail,
  MdOutlineContentPasteSearch,
} from "react-icons/md";
import { CgOpenCollective, CgProfile } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { BtnsNavMobile } from "../../UI/BtnsNavMobile/BtnsNavMobile";

export const NavbarMobileUser = () => {
  const [openNav, setOpenNav] = useState(false);
  const [userType, setUserType] = useState(null);
  const [showModal, setShowModal] = useState(false); // Estado para controlar la visibilidad del modal
  const menuRef = useRef(null); // Crear una referencia para el menú
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token_login");

    if (!token) {
      navigate("/"); // Redirigir al usuario a la página de inicio de sesión
    } else {
      const decoded = jwtDecode(token);

      setUserType(decoded.payload.EsUsuario);
      const hasShownToast = localStorage.getItem("hasShownToast");
      if (hasShownToast) {
        localStorage.setItem("hasShownToast", "true");
      }
    }
  }, [navigate]);

  const handleLogout = () => {
    // Eliminar el token de sesión del almacenamiento local
    localStorage.removeItem("token_login");
    localStorage.removeItem("hasShownToast");
    // Redirigir al usuario a la página de inicio de sesión
    navigate(`/`);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
    setOpenNav(false);
  };

  return (
    <div>
      <div className="w-full md:hidden h-20 bg-white fixed bottom-0 z-50 flex justify-between  px-8 sm:px-16 items-center">
        <div
          onClick={handleLogout}
          className="text-center flex-col text-purple-600 flex justify-center items-center">
          <FiLogIn className="text-4xl" />
          <p className="text-sm">Cerrar sesión</p>
        </div>
        <div
          onClick={() => {
            setOpenNav(!openNav);
            setShowModal(false);
          }}
          className="text-center flex-col text-white p-3 mr-9 rounded-full bg-purple-600 flex justify-center items-center">
          <AiOutlineMenu className="text-4xl" />
        </div>
        <div
          onClick={toggleModal}
          className="text-center flex-col text-purple-600 flex justify-center items-center relative" // Agregar la clase "relative" para poder posicionar el modal correctamente
        >
          <CgProfile className="text-4xl" />
          <p className="text-sm">Perfil</p>
          {showModal && ( // Mostrar el modal solo cuando "showModal" es true
            <div className="absolute bottom-16 right-0 bg-white rounded-md shadow-md px-4 py-3">
              <ul className="flex flex-col gap-4 text-lg font-semibold">
                <li className="px-3 hover:bg-purple-500 hover:text-white rounded-md py-1">
                  <Link to="/Profile">Perfil</Link>
                </li>
                <li className="px-3 hover:bg-purple-500 hover:text-white rounded-md py-1">
                  <Link to="/Notifications">Notificaciones</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      {openNav && <BtnsNavMobile menuRef={menuRef} userType={userType} />}
    </div>
  );
};
