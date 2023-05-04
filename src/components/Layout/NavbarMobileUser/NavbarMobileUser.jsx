import React, { useState, useEffect, useRef } from "react";
import { FiLogIn } from "react-icons/fi";
import { AiOutlineUserSwitch, AiOutlineMenu, AiFillHome } from "react-icons/ai";
import {
  MdOutlineContactMail,
  MdOutlineContentPasteSearch,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
// import "./navbarMobile.css"; // importar archivo CSS con estilos personalizados

export const NavbarMobileUser = () => {
  const [openNav, setOpenNav] = useState(false);
  const menuRef = useRef(null); // Crear una referencia para el menú

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenNav(false); // cerrar menú si se hace clic fuera de él
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <div>
      <div className="w-full md:hidden h-20 bg-white fixed bottom-0 z-50 flex justify-between  px-8 sm:px-16 items-center">
        <Link
          to="/"
          className="text-center flex-col text-purple-600 flex justify-center items-center">
          <FiLogIn className="text-4xl" />
          <p className="text-sm">Cerrar sesión</p>
        </Link>
          <div
            onClick={() => {
              setOpenNav(!openNav);
            }}
            className="text-center flex-col text-white p-3 mr-9 rounded-full bg-purple-600 flex justify-center items-center">
            <AiOutlineMenu className="text-4xl" />
          </div>
        <Link
          to="/SingUp"
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
            <Link
              to="/ContactUs"
              className="bg-purple-600 rounded-full h-16 w-16 mx-2 text-center flex justify-center items-center text-3xl text-white">
              <MdOutlineContactMail />
            </Link>
            <Link
              to="/"
              className="bg-purple-600 rounded-full h-16 w-16 mx-2 mb-16 text-center flex justify-center items-center text-3xl">
              <AiFillHome className="text-white" />
            </Link>
            <Link
              to="/AboutUs"
              className="bg-purple-600 rounded-full h-16 w-16 mx-2 text-center flex justify-center items-center text-3xl text-white">
              <MdOutlineContentPasteSearch />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
