import React, { useState } from "react";
import { LabelBtn } from "../../components/UI/LabelBtn/LabelBtn";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { NavbarMobile } from "../../components/Layout/NavbarMobile/NavbarMobile";

export const SingUp = () => {
  const [formValues, setFormValues] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    userType: "personal",
  });
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validaciones
    const newErrors = {};
    if (!formValues.fullName) {
      newErrors.fullName = "Debe ingresar su nombre completo";
    }
    if (!formValues.email) {
      newErrors.email = "Debe ingresar su correo electrónico";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      newErrors.email = "El correo electrónico no es válido";
    }
    if (!formValues.phone) {
      newErrors.phone = "Debe ingresar su número de teléfono";
    } else if (!/^[0-9]+$/.test(formValues.phone)) {
      newErrors.phone = "El número de teléfono debe contener solo números";
    }
    if (!formValues.password) {
      newErrors.password = "Debe ingresar una contraseña";
    } else if (formValues.password.length < 6) {
      newErrors.password = "La contraseña debe tener al menos 6 caracteres";
    }
    if (!formValues.confirmPassword) {
      newErrors.confirmPassword = "Debe confirmar la contraseña";
    } else if (formValues.password !== formValues.confirmPassword) {
      newErrors.confirmPassword = "Las contraseñas no coinciden";
    }
    setErrors(newErrors);
    if (
      newErrors.fullName ||
      newErrors.email ||
      newErrors.phone ||
      newErrors.password ||
      newErrors.confirmPassword
    ) {
      console.log(newErrors); // o mostrarlos de otra manera
    } else {
      console.log("El formulario es válido");
      console.log(formValues);
      // Aquí puedes enviar el formulario a través de una solicitud HTTP o hacer cualquier otra cosa que necesites hacer con los datos del formulario
    }
  };

  const handleSelectChange = (event) => {
    const { value } = event.target;
    setFormValues({ ...formValues, userType: value });
  };
  return (
    <div className="w-screen h-screen flex flex-row">
      <NavbarMobile />
      <div className="hidden lg:block w-1/2 h-full bg-violet-700">
        <div>
          <div className="relative left-24 top-20">
            <h1 className="text-white font-bold text-6xl leading-66 tracking-wider font-sans">
              ¡Registrate en <br></br>nuestra plataforma!
            </h1>
          </div>
          <div className="relative left-24 top-28 w-3/4">
            <p className="text-white font-sans text-justify text-xl">
              Si eres un usuario que va a asistir a eventos, podrás ver todos
              los eventos a los que estás registrado y confirmar tu asistencia.
              Si eres un usuario que va a crear eventos, podrás agregar nuevos
              eventos, gestionar la información del evento, enviar invitaciones
              y hacer un seguimiento de la asistencia de tus invitados.
            </p>
          </div>
        </div>
        <div className="relative left-24 top-40">
          <img
            src="/image1.webp"
            alt="img"
            className="w-4/5 lg:h-80 object-cover xl:h-96"
          />
        </div>
      </div>
      <div className="w-full lg:w-1/2 h-full ">
        <form action="" onSubmit={handleSubmit}>
          <div className="flex justify-center items-center flex-col">
            <h2 className="font-bold text-center lg:text-left text-5xl xl:text-6xl tracking-tight leading-1.19 font-sans text-base-02 mt-8">
              ¡Crear una cuenta {formValues.userType}!
            </h2>
            <p className="font-normal text-lg leading-1.67 font-sans text-gray-500 relative mt-5 px-5 lg:px-0">
              ¡Únete a nuestra comunidad de organizadores y asistentes de
              eventos hoy mismo!
            </p>
          </div>
          <div className="px-10 lg:px-0">
            <div className="flex flex-col my-10 mx-0 lg:mx-20 2xl:my-5">
              <label htmlFor="type_user" className="font-bold">
                Tipo de cuenta <strong className="text-red-600">*</strong>
              </label>
              <select
                onChange={handleSelectChange}
                id="type_user"
                name="type_user"
                className="bg-gray-100 shadow-md rounded-md lg:w-2/5 h-11 px-2 border border-gray-400 text-gray-500">
                <option value="personal">Personal</option>
                <option value="organizacion">Organización</option>
              </select>
            </div>
            <div className="flex flex-col lg:flex-row gap-5 mb-6 lg:mb-0 lg:my-10 lg:mx-20 justify-between">
              <div className="flex flex-col w-full ">
                <label htmlFor="fullName" className="font-bold">
                  Nombre Completo<strong className="text-red-600">*</strong>
                </label>
                <input
                  onChange={handleInputChange}
                  id="fullName"
                  name="fullName"
                  className={`bg-blue-gray-50 border border-gray-300 shadow-md rounded-xl h-12 lg:w-4/5 p-2 hover:border-gray-400 focus:border-gray-600 focus:outline-none`}
                  type="text"
                  placeholder="Nombre Completo..."
                />
                {errors.fullName && (
                  <p className="text-red-600 font-bold">{errors.fullName}</p>
                )}
              </div>{" "}
            </div>
            <div className="flex lg:my-10 flex-col lg:flex-row gap-5 justify-between w-full">
              <div className="flex relative lg:left-20 w-full">
                <div className="flex flex-col w-full ">
                  <label htmlFor="email" className="font-bold">
                    Correo electronico
                    <strong className="text-red-600">*</strong>
                  </label>
                  <input
                    onChange={handleInputChange}
                    id="email"
                    name="email"
                    className={`bg-blue-gray-50 border border-gray-300 shadow-md rounded-xl h-12 lg:w-4/5 p-2 hover:border-gray-400 focus:border-gray-600 focus:outline-none`}
                    type="email"
                    placeholder="correo@corre.com"
                  />
                  {errors.email && (
                    <p className="text-red-600 font-bold">{errors.email}</p>
                  )}
                </div>
              </div>{" "}
              <div className="flex w-full">
                <div className="flex flex-col w-full ">
                  <label htmlFor="phone" className="font-bold">
                    Telefono<strong className="text-red-600">*</strong>
                  </label>
                  <input
                    onChange={handleInputChange}
                    id="phone"
                    name="phone"
                    className={`bg-blue-gray-50 border border-gray-300 shadow-md rounded-xl h-12 lg:w-4/5 p-2 hover:border-gray-400 focus:border-gray-600 focus:outline-none`}
                    type="number"
                    placeholder="3211234567"
                  />
                  {errors.phone && (
                    <p className="text-red-600 font-bold">{errors.phone}</p>
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5 lg:gap-0 lg:flex-row mt-6 lg:mt-0 lg:my-10 lg:mx-20 justify-between">
              <div className="flex w-full">
                <div className="flex flex-col w-full ">
                  <label htmlFor="password" className="font-bold">
                    Contraseña<strong className="text-red-600">*</strong>
                  </label>
                  <input
                    onChange={handleInputChange}
                    id="password"
                    name="password"
                    className={`bg-blue-gray-50 border border-gray-300 shadow-md rounded-xl h-12 lg:w-4/5 p-2 hover:border-gray-400 focus:border-gray-600 focus:outline-none`}
                    type="password"
                    placeholder="Contraseña..."
                  />
                  {errors.password && (
                    <p className="text-red-600 font-bold">{errors.password}</p>
                  )}
                </div>
              </div>
              <div className="flex w-full">
                <div className="flex flex-col w-full ">
                  <label htmlFor="confirmPassword" className="font-bold">
                    Confirmar contraseña
                    <strong className="text-red-600">*</strong>
                  </label>
                  <input
                    onChange={handleInputChange}
                    id="confirmPassword"
                    name="confirmPassword"
                    className={`bg-blue-gray-50 border border-gray-300 shadow-md rounded-xl h-12 lg:w-4/5 p-2 hover:border-gray-400 focus:border-gray-600 focus:outline-none`}
                    type="password"
                    placeholder="Confirmar contraseña..."
                  />
                  {errors.confirmPassword && (
                    <p className="text-red-600 font-bold">
                      {errors.confirmPassword}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="footer mt-10 lg:mt-0 xl:mt-20 lg:my-20 mx-20 flex flex-col justify-center items-center ">
              <div className="flex flex-col md:flex-row gap-5 lg:gap-10 xl:gap-40">
                <button className=" p-4 w-72 md:w-40 lg:w-80 h-55  bg-purple-700 hover:bg-purple-900 rounded-lg text-white font-bold">
                  Registrarse
                </button>
                <button className=" p-4 w-72 lg:w-80 h-55  bg-purple-700 hover:bg-purple-900 rounded-lg text-white font-bold flex  gap-5 lg:gap-9">
                  <p className="text-2xl pl-7">
                    <FcGoogle />
                  </p>
                  <p>Registrate con Google</p>
                </button>
              </div>
              <div className="mt-8 xl:mt-20 gap-5 flex justify-center items-center flex-col ">
                <div className="flex flex-row">
                  {" "}
                  <p className="font-sans font-normal text-xl leading-6 flex items-center text-gray-500">
                    ¿Ya tines cuenta?{" "}
                  </p>
                  <strong className="text-purple-600 ml-3">
                    <Link className="hover:underline text-xl" to="/SingIn">
                      ¡Inicia sesión!
                    </Link>
                  </strong>
                </div>
                <Link
                  className=" w-40 h-14 my-5 mb-28 lg:my-0 lg:mt-0 xl:mt-10 bg-purple-700 hover:bg-purple-900 rounded-lg text-white font-bold flex gap-9 text-center justify-center items-center"
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
