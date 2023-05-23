import React, { useState } from "react";
import { RiErrorWarningLine } from "react-icons/ri";
import { AiOutlineLoading } from "react-icons/ai";
import { toast } from "react-toastify";
import jwtDecode from "jwt-decode";
import { Link, useNavigate } from "react-router-dom";

export const BodyAddSubOrg = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [nameError, setNameError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Agregamos estado para controlar el estado de carga
  const navigate = useNavigate(); // Agrega el hook useNavigate

  const token = localStorage.getItem("token_login");
  const decoded = jwtDecode(token);
  const idOrg = decoded.payload.id_organización;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      setNameError("Por favor, ingresa el nombre de la suborganización");
    } else if (!description) {
      setDescriptionError(
        "Por favor, ingresa la descripción de la suborganización"
      );
    } else {
      setIsLoading(true); // Activamos el estado de carga
      const requestBody = {
        name_organization: name,
        description_organization: description,
      };
      fetch(
        `https://timecheck.up.railway.app/SubOrg/register/${idOrg}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      )
        .then((response) => {
          if (response.ok) {
            // Suborganización creada exitosamente
            toast.success("Suborganización creada");
            // Reiniciar los valores del formulario si es necesario
            setName("");
            setDescription("");
            // Establece el estado de redirección después de 2 segundos
            setTimeout(() => {
              navigate("/ViewSubOrg"); // Navegación a "/ViewSubOrg"
            }, 2000);
          } else {
            // Manejar el error de la solicitud
            throw new Error("No se pudo crear la suborganización");
            toast.error("No se pudo crear la suborganización");
          }
        })
        .catch((error) => {
          console.error(error);
          // Manejar el error de la solicitud
        })
        .finally(() => {
          setIsLoading(false); // Desactivamos el estado de carga
        });
    }
    
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameError("");
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
    setDescriptionError("");
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-3">
      <h1 className="absolute -z-50 top-0 text-xl md:text-3xl md:text-purple-700 pt-10 md:my-10 mb-20 bg-purple-600 w-full text-center h-40 text-white md:bg-transparent">
        Crear una nueva suborganización
      </h1>
      <div className="relative bg-white z-50 w-11/12 md:w-3/5 h-2/3 shadow-lg shadow-neutral-500 rounded-md border md:ml-24">
        <form
          onSubmit={handleSubmit}
          className="h-full flex flex-col justify-center gap-20 md:gap-32">
          <div className="flex items-center flex-col justify-center gap-1 md:gap-0">
            <label htmlFor="name" className="w-11/12 md:w-2/5 ">
              Nombre de la suborganización
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className={`w-11/12 md:w-2/5 py-2 border border-black rounded-md px-2 ${
                nameError ? "border-red-500" : ""
              }`}
              placeholder="Ingrese el Nombre de la suborganización"
              value={name}
              onChange={handleNameChange}
            />
            {nameError && (
              <p className="text-red-500">
                <RiErrorWarningLine className="inline-block mr-1" />
                {nameError}
              </p>
            )}
          </div>
          <div className="flex items-center flex-col justify-center gap-1 md:gap-0">
            <label htmlFor="description" className="w-11/12 md:w-2/5 ">
              Descripción de la suborganización
            </label>
            <input
              id="description"
              name="description"
              type="text"
              className={`w-11/12 md:w-2/5 py-2 border border-black rounded-md px-2 ${
                descriptionError ? "border-red-500" : ""
              }`}
              placeholder="Ingrese la descripción de la suborganización"
              value={description}
              onChange={handleDescriptionChange}
            />
            {descriptionError && (
              <p className="text-red-500">
                <RiErrorWarningLine className="inline-block mr-1" />
                {descriptionError}
              </p>
            )}
          </div>
          <div className="flex items-center flex-col justify-center gap-5">
            <button
              type="submit"
              className="w-56 hover:bg-purple-950 bg-purple-600 text-white flex justify-center py-2 text-center rounded-md font-semibold"
              disabled={isLoading}>
              {isLoading ? (
                <AiOutlineLoading className="animate-spin mr-2" />
              ) : (
                "Crear"
              )}
            </button>
            <Link
              to={"/ViewSubOrg"}
              className="w-56 hover:bg-purple-950 bg-purple-600 text-white flex justify-center py-2 text-center rounded-md font-semibold">
              Volver
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
