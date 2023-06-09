import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { NavbarMobile } from "../../components/Layout/NavbarMobile/NavbarMobile";
import { toast } from "react-toastify";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { AiOutlineLoading } from "react-icons/ai";
import jwtDecode from "jwt-decode";

export const SingIn = () => {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [formError, setFormError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const url = import.meta.env.VITE_URL;
  // console.log(url);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token_login");

    if (token) {
      navigate("/Dashboard"); // Redirigir al usuario a la página de inicio de sesión
    } else {
    }
  }, [navigate]);

  const handleEmailChange = (e) => {
    // Actualiza el estado del correo electrónico
    setEmailAddress(e.target.value);
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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailAddress || !password) {
      setFormError("Por favor, completa todos los campos");
    } else if (emailError || passwordError) {
      setFormError("Por favor, corrige los errores en el formulario");
    } else {
      setFormError("");
      setIsLoading(true); // Activar el estado de carga

      fetch("https://timecheck.up.railway.app/Auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          emailAddress: emailAddress,
          password: password,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          // console.log(data.error);s
          setIsLoading(false); // Desactivar el estado de carga

          if (data.error) {
            toast.error(`Error: ${data.error}`, {
              position: "bottom-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          } else {
            localStorage.setItem("hasShownToast", false);
            localStorage.setItem("token_login", data.message);

            navigate(`/Dashboard`);
          }
        })
        .catch((error) => {
          setIsLoading(false); // Desactivar el estado de carga
          console.error("Error al enviar la solicitud:", error);
        });
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
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
            hacer un seguimiento de la asistencia de tus invitados!
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
            <p className="font-normal text-lg lg:text-base xl:text-xl font-sans text-gray-500 pt-5 md:pt-14 pl-10 pr-7 w-full lg:w-11/12 2xl:text-xl">
              Para acceder a tu cuenta, por favor verifica tu correo
              electrónico. Te hemos enviado un mensaje de verificación a tu
              dirección de correo electrónico. Sigue las instrucciones en el
              correo para completar el proceso de verificación.
              <br />
              <br />
              Una vez que hayas verificado tu cuenta, podrás ingresar tus
              credenciales y acceder a todas las funciones de nuestra plataforma
              de gestión de eventos.
            </p>
          </div>
          <div className="mt-10 lg:mt-0 xl:mt-5 w-full flex flex-col justify-center items-center">
            <div className="flex lg:my-8 lg:mx-32 relative justify-center items-center lg:left-14 xl:w-4/5 w-5/6 2xl:w-5/6">
              <div className="flex flex-col items-center md:items-start w-full lg:w-11/12 2xl:w-11/12 gap-3">
                <label htmlFor="emailAddress" className="font-bold text-left">
                  Correo electrónico:
                </label>
                <input
                  id="emailAddress"
                  name="emailAddress"
                  className={`bg-blue-gray-50 border border-gray-300 shadow-md rounded-xl h-12 w-4/5 p-2 hover:border-gray-400 focus:border-gray-600 focus:outline-none`}
                  type="emailAddress"
                  value={emailAddress}
                  onChange={handleEmailChange}
                />
                {emailError && <p className="text-red-500">{emailError}</p>}
              </div>
            </div>

            <div className="flex lg:mx-32 relative justify-center items-center lg:left-14 xl:w-4/5 w-5/6 2xl:w-5/6">
              <div className="flex flex-col items-center md:items-start w-full mt-5 lg:mt-0 md:mt-0 lg:w-11/12 2xl:w-11/12 gap-2">
                <label htmlFor="password" className="font-bold">
                  Contraseña:
                </label>
                <input
                  id="password"
                  name="password"
                  className={`bg-blue-gray-50 border border-gray-300 shadow-md rounded-xl h-12 w-4/5 p-2  ${
                    passwordError ? "border-red-500" : ""
                  }`}
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={handlePasswordChange}
                />
                <div
                  className="absolute  inset-y-16 right-14 lg:right-40 mt-1 md:mt-0 md:inset-y-12 sm:right-28 md:right-60 xl:right-48 2xl:right-48 cursor-pointer"
                  onClick={toggleShowPassword}>
                  {showPassword ? (
                    <BsEyeSlashFill className="text-gray-400" />
                  ) : (
                    <BsEyeFill className="text-gray-400" />
                  )}
                </div>
                {passwordError && (
                  <p className="text-red-500">{passwordError}</p>
                )}
              </div>
            </div>
            <div className="relative mt-5 text-center left-16 lg:mt-0 lg:left-1/4 xl:left-60 w-60 xl:my-7 2xl:left-64 2xl:mt-3">
              <p className="font-sans font-normal text-lg leading-6 flex items-center relative right-14 text-violet-600">
                <Link to="/ForgotPassword" className="hover:underline">
                  ¿Olvidaste tu contraseña?
                </Link>
              </p>
            </div>
            {formError && (
              <p className="text-red-500 font-bold mt-2">{formError}</p>
            )}

            <div className="footer my-10 mx-20 flex flex-col justify-center items-center ">
              <div className="flex gap-2 lg:gap-28 xl:gap-16 flex-col md:flex-row">
                <button
                  type="submit"
                  className="p-4 w-56 h-14 flex justify-center bg-violet-700 hover:bg-violet-900 rounded-lg text-white font-bold"
                  placeholder="Iniciar Sesión"
                  value={"Iniciar Sesión"}
                  disabled={isLoading}>
                  {isLoading ? (
                    <AiOutlineLoading className="animate-spin mr-2 text-2xl" />
                  ) : (
                    "Iniciar sesión"
                  )}
                </button>
                {/* <button className=" p-4 w-56 h-14  bg-violet-700 hover:bg-violet-900 rounded-lg text-white font-bold flex gap-4">
                  <p className="text-2xl pl-3">
                    <FcGoogle />
                  </p>
                  <p>Iniciar con Google</p>
                </button> */}
              </div>
              <div className="mt-16 lg:mt-6 xl:mt-16 flex justify-center items-center flex-col">
                <p className="font-sans font-normal text-xl leading-6 flex flex-col md:flex-row gap-1 items-center text-gray-500">
                  ¿No tienes cuenta?
                  <strong className="text-violet-600 ml-3">
                    <Link className="hover:underline" to="/SingUp">
                      ¡Crea una ahora!
                    </Link>
                  </strong>
                </p>

                <Link
                  className="p-4 w-40 h-14 mt-6 xl:mt-12 mb-20 md:mb-0 bg-violet-900 hover:bg-violet-600 rounded-lg text-white font-bold flex gap-9 text-center justify-center items-center"
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
