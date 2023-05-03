import React, { useState } from "react";
import { MdGroups, MdContactSupport } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";
import { IoIosPersonAdd } from "react-icons/io";
import { Link } from "react-router-dom";

export const NavBarHome = (props) => {
  const [openNavBar, setOpenNavBar] = useState(false);
  const [isDarkModeOn, setIsDarkModeOn] = useState(false);

  const toggleNavBar = () => setOpenNavBar(!openNavBar);
  return (
    <div
      onMouseEnter={toggleNavBar}
      onMouseLeave={toggleNavBar}
      className={`bg-zinc-900 hidden sm:flex h-screen fixed ${
        openNavBar
          ? "w-72 z-50 transition-all duration-300 ease-in-out "
          : "transition-all duration-300 ease-in w-32"
      }  items-center flex flex-col `}>
      <div className="header flex flex-row justify-center items-center my-4">
        {openNavBar ? (
          <div className="relative right-5">
            <Link to={"/"}>
              <img
                src="/LOGO TIME CHECK A COLOR.webp"
                alt=""
                width={180}
                height={50}
              />
            </Link>
          </div>
        ) : (
          <div className="rounded-full w-20 h-20 ml-4">
            <Link to={"/"}>
              <img
                src="/LOGOTIPO TIME CHECK.webp"
                alt="Logotipo TimeCheck"
                width={70}
                height={50}
              />
            </Link>
          </div>
        )}
      </div>
      <div className="menu text-white">
        <div className="relative top-24">
          <h3
            className={`${
              openNavBar ? "text-slate-300 px-4" : "text-slate-300"
            }`}>
            Menú
          </h3>
          <div className="my-5 relative xl:top-10 top-3">
            <div
              className={`flex flex-col gap-5${
                openNavBar ? " transition-all duration-100 ease-out px-4" : ""
              }`}>
              <Link to="/" aria-label="Ir al inicio principal">
                <div
                  className={`my-5 xl:my-0 gap-4 flex items-center ${
                    props.homeActive
                      ? "bg-neutral-700"
                      : "hover:bg-neutral-800 "
                  } ${openNavBar ? "w-60" : " w-full "} py-2 pl-2 rounded-sm`}>
                  <div className="text-2xl">
                    <AiFillHome />
                  </div>
                  {openNavBar ? <p>Inicio</p> : ""}
                </div>
              </Link>
              <Link to="/SingIn" aria-label="Ve a iniciar sesión">
                <div
                  className={`my-5 flex gap-4 items-center  w-full py-2 pl-2 rounded-sm hover:bg-neutral-800`}>
                  {" "}
                  <div className="text-2xl">
                    <FiLogIn />
                  </div>
                  {openNavBar ? <p>Inicia Sesión</p> : ""}
                </div>
              </Link>
              <Link
                to="/SingUp"
                aria-label="Registrate para poder acceder a todos los servicios">
                <div className="my-5 flex gap-4 items-center  w-full py-2 pl-2 rounded-sm hover:bg-neutral-800">
                  <div className="text-2xl">
                    <IoIosPersonAdd />
                  </div>
                  {openNavBar ? <p>Registrate</p> : ""}
                </div>
              </Link>
              <Link
                to="/AboutUs"
                aria-label="Observa quienes son el equipo de trabajo y más sobre TimeCheck">
                <div
                  className={`my-5 flex gap-4 items-center ${
                    props.AboutUsActive
                      ? "bg-neutral-700"
                      : "hover:bg-neutral-800"
                  } w-full py-2 pl-2 rounded-sm `}>
                  <div className="text-2xl">
                    <MdGroups />
                  </div>
                  {openNavBar ? <p> Sobre Nosotros</p> : ""}
                </div>
              </Link>
              <Link
                to="/ContactUs"
                aria-label="Dejanos tus comentarios o dudas que tengas!">
                <div
                  className={`my-5 flex gap-4 items-center ${
                    props.ContactUsActive
                      ? "bg-neutral-700"
                      : "hover:bg-neutral-800"
                  } w-full py-2 pl-2 rounded-sm hover:bg-neutral-800`}>
                  {" "}
                  <div className="text-2xl">
                    <MdContactSupport />
                  </div>
                  {openNavBar ? <p>Contáctanos</p> : ""}
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="footer relative top-60 lg:top-96 my-8 right-3 "></div>
    </div>
  );
};
