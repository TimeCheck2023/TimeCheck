import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { NavbarMobile } from "../../components/Layout/NavbarMobile/NavbarMobile";

export const SingIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [formError, setFormError] = useState("");

  const handleEmailChange = (e) => {
    // Actualiza el estado del correo electrónico
    setEmail(e.target.value);
    // Verifica si el valor es un correo electrónico válido
    const validEmailRegex = /\S+@\S+\.\S+/;
    if (!validEmailRegex.test(e.target.value)) {
      setEmailError("Por favor, ingresa un correo electrónico válido");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (e) => {
    // Actualiza el estado de la contraseña
    setPassword(e.target.value);
    // Verifica si la contraseña es válida (tiene al menos 8 caracteres)
    if (e.target.value.length < 8) {
      setPasswordError("La contraseña debe tener al menos 8 caracteres");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setFormError("Por favor, completa todos los campos");
    } else if (emailError || passwordError) {
      setFormError("Por favor, corrige los errores en el formulario");
    } else {
      setFormError("");
      console.log("enviando...");
    }
  };
  return (
    <div className="w-full h-screen flex flex-row">
      <NavbarMobile />
      <div className="hidden lg:flex lg:flex-col gap-0 justify-center items-center w-1/2 h-full bg-violet-700 ">
        <div className="flex justify-center items-center">
          <h1 className="text-white font-bold text-6xl leading-66 tracking-wider font-sans w-full mt-3 2xl:text-left 2xl:w-full pl-24">
            ¡Bienvenidos a nuestra plataforma!
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center gap-5 py-10 lg:py-0">
          <p className="text-white font-sans text-justify text-xl px-24 mt-7">
            Si eres un usuario que va a asistir a eventos, podrás ver todos los
            eventos a los que estás registrado y confirmar tu asistencia. Si
            eres un usuario que va a crear eventos, podrás agregar nuevos
            eventos, gestionar la información del evento, enviar invitaciones y
            hacer un seguimiento de la asistencia de tus invitados.
          </p>
          <img
            src="/image1.webp"
            alt="img"
            className="w-3/5 lg:h-72 object-cover xl:h-96 my-20 "
          />
        </div>
      </div>
      <div className="w-full lg:w-1/2 h-full ">
        <form action="" onSubmit={handleSubmit}>
          <div className="flex justify-center items-center flex-col mt-10">
            <h2 className="font-bold text-5xl md:text-6xl tracking-tight leading-1.19 font-sans text-base-02">
              ¡Bienvenido!
            </h2>
            <p className="font-normal text-lg font-sans text-gray-500 pt-5 md:pt-14 pl-10 pr-7 w-full lg:w-3/4 2xl:text-2xl">
              Bienvenido a nuestra plataforma de gestión de eventos. Por favor,
              ingresa tus credenciales para acceder a tu cuenta.
            </p>
          </div>
          <div className="mt-10 lg:mt-10 xl:mt-20 w-full flex flex-col justify-center items-center">
            <div className="flex lg:my-10 lg:mx-32 relative justify-center items-center lg:left-14 xl:w-4/5 w-5/6 2xl:w-5/6">
              <div className="flex flex-col items-center md:items-start w-full lg:w-11/12 2xl:w-11/12 gap-3">
                <label htmlFor="email" className="font-bold text-left">
                  Correo electronico:
                </label>
                <input
                  id="email"
                  name="email"
                  className={`bg-blue-gray-50 border border-gray-300 shadow-md rounded-xl h-12 w-4/5 p-2 hover:border-gray-400 focus:border-gray-600 focus:outline-none`}
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                />
                {emailError && <p className="text-red-500">{emailError}</p>}
              </div>
            </div>

            <div className="flex lg:mx-32 relative justify-center items-center lg:left-14 xl:w-4/5 w-5/6 2xl:w-5/6">
              <div className="flex flex-col items-center md:items-start w-full lg:w-11/12 2xl:w-11/12 gap-2">
                <label htmlFor="password" className="font-bold">
                  Contraseña:
                </label>
                <input
                  id="password"
                  name="password"
                  className={`bg-blue-gray-50 border border-gray-300 shadow-md rounded-xl h-12 w-4/5 p-2 hover:border-gray-400 focus:border-gray-600 focus:outline-none`}
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
                {passwordError && (
                  <p className="text-red-500">{passwordError}</p>
                )}
              </div>
            </div>
            <div className="relative mt-5 text-center left-16 lg:mt-0 lg:left-1/4 xl:left-60 w-60 xl:my-7 2xl:left-72 2xl:mt-3">
              <p className="font-sans font-normal text-lg leading-6 flex items-center relative right-14 text-purple-600">
                <Link to="" className="hover:underline">
                  ¿Se te olvidó la contaseña?
                </Link>
              </p>
            </div>
            {setFormError && (
              <p className="text-red-500 font-bold mt-2">{formError}</p>
            )}

            <div className="footer my-10 mx-20 flex flex-col justify-center items-center ">
              <div className="flex gap-2 lg:gap-28 xl:gap-16 flex-col md:flex-row">
                <button
                  type="submit"
                  className=" p-4 w-56 h-14 bg-purple-700 hover:bg-purple-900 rounded-lg text-white font-bold"
                  placeholder="Iniciar Sesión"
                  value={"Iniciar Sesión"}>
                  Iniciar sesión
                </button>
                <button className=" p-4 w-56 h-14  bg-purple-700 hover:bg-purple-900 rounded-lg text-white font-bold flex gap-4">
                  <p className="text-2xl pl-3">
                    <FcGoogle />
                  </p>
                  <p>Iniciar con Google</p>
                </button>
              </div>
              <div className="mt-16 lg:mt-6 xl:mt-16 flex justify-center items-center flex-col">
                <p className="font-sans font-normal text-xl leading-6 flex flex-col md:flex-row gap-1 items-center text-gray-500">
                  ¿No tienes cuenta?
                  <strong className="text-purple-600 ml-3">
                    <Link className="hover:underline" to="/SingUp">
                      ¡Crea una ahora!
                    </Link>
                  </strong>
                </p>

                <Link
                  className=" p-4 w-40 h-14 mt-6 xl:mt-12 mb-20 md:mb-0 bg-purple-900 hover:bg-purple-600 rounded-lg text-white font-bold flex gap-9 text-center justify-center items-center"
                  to="/">
                  Volver
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
