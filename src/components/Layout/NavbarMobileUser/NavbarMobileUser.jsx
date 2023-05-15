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
import { BiGroup } from "react-icons/bi";
import jwtDecode from "jwt-decode";

export const NavbarMobileUser = () => {
  const [openNav, setOpenNav] = useState(false);
  const [userType, setUserType] = useState(null);
  const menuRef = useRef(null); // Crear una referencia para el menú
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token_login");

    if (!token) {
      navigate("/"); // Redirigir al usuario a la página de inicio de sesión
    } else {
      const decoded = jwtDecode(token);

      setUserType(decoded.payload.esUsuario);
      const hasShownToast = localStorage.getItem("hasShownToast");
      if (hasShownToast) {
        localStorage.setItem("hasShownToast", "true");
      }
    }
  }, [navigate]);

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (menuRef.current && !menuRef.current.contains(event.target)) {
  //       setOpenNav(false); // cerrar menú si se hace clic fuera de él
  //     }
  //   };

  //   document.addEventListener("mousedown", handleClickOutside);

  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [menuRef]);

  const handleLogout = () => {
    // Eliminar el token de sesión del almacenamiento local
    localStorage.removeItem("token_login");
    localStorage.removeItem("hasShownToast");
    // Redirigir al usuario a la página de inicio de sesión
    navigate(`/`);
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
          }}
          className="text-center flex-col text-white p-3 mr-9 rounded-full bg-purple-600 flex justify-center items-center">
          <AiOutlineMenu className="text-4xl" />
        </div>
        <Link
          to="/Profile"
          className="text-center flex-col text-purple-600 flex justify-center items-center">
          <CgProfile className="text-4xl" />
          <p className="text-sm">Perfil</p>
        </Link>
      </div>
      {openNav && (
        <div
          className="fixed bottom-16 left-1/2 transform -translate-x-1/2 z-50 menu-container"
          ref={menuRef}>
          <div className="btns-menu flex justify-center items-center">
            {userType == 1 ? (
              <Link
                to="/ContactUs"
                className="bg-purple-600 rounded-full h-16 w-16 mx-2 text-center flex justify-center items-center text-3xl text-white">
                <MdOutlineContactMail />
              </Link>
            ) : (
              <Link
                to="/Statistics"
                className="bg-purple-600 rounded-full h-16 w-16 mx-2 text-center flex justify-center items-center text-3xl text-white">
                <CgOpenCollective />
              </Link>
            )}
            <Link
              to="/Dashboard"
              className="bg-purple-600 rounded-full h-16 w-16 mx-2 mb-16 text-center flex justify-center items-center text-3xl">
              <AiFillHome className="text-white" />
            </Link>
            {userType == 1 ? (
              <Link
                to="/AboutUs"
                className="bg-purple-600 rounded-full h-16 w-16 mx-2 text-center flex justify-center items-center text-3xl text-white">
                <MdOutlineContentPasteSearch />
              </Link>
            ) : (
              <Link
                to="/AboutUs"
                className="bg-purple-600 rounded-full h-16 w-16 mx-2 text-center flex justify-center items-center text-3xl text-white">
                <BiGroup />
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
