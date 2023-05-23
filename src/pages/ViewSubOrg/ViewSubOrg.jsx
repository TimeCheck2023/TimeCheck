import React, { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FaDog } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import { CardSubOrganization } from "../../components/UI/CardSubOrganization/CardSubOrganization";
import { NavbarMobileUser } from "../../components/Layout/NavbarMobileUser/NavbarMobileUser";
import { SlideBar } from "../../components/Layout/SlideBar/SlideBar";

export const ViewSubOrg = () => {
  const navigate = useNavigate();
  const [idOrg, setIdOrg] = useState(null);
  const [subOrganizations, setSubOrganizations] = useState([]);
  const [nameOrg, setNameOrg] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Estado de carga

  useEffect(() => {
    const token = localStorage.getItem("token_login");

    if (!token) {
      navigate("/"); // Redirigir al usuario a la página de inicio de sesión
    } else {
      const decoded = jwtDecode(token);
      setIdOrg(decoded.payload.id_organización);
      console.log(decoded.payload);
      setNameOrg(decoded.payload.correo);

      const hasShownToast = localStorage.getItem("hasShownToast");
      if (hasShownToast) {
        localStorage.setItem("hasShownToast", "true");
      }

      setIsLoading(true); // Iniciar la carga

      fetch(
        `https://timecheckbacknodejs-production.up.railway.app/SubOrg/${decoded.payload.id_organización}`
      )
        .then((response) => response.json())
        .then((data) => {
          // Aquí puedes realizar cualquier operación con los datos obtenidos
          setSubOrganizations(data.message);
          console.log(data.message);
        })
        .catch((error) => {
          // Manejo de errores en caso de que la solicitud falle
          console.error(error);
        })
        .finally(() => {
          setIsLoading(false); // Finalizar la carga
        });
    }
  }, [navigate]);

  return (
    <>
      <SlideBar activeGroup={true} />
      {isLoading ? (
        // Mostrar el loader o spinner mientras se carga
        <div className="flex items-center justify-center h-screen flex-col">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
          <p className="text-2xl text-indigo-800">Cargando...</p>
        </div>
      ) : (
        <div className="w-full h-full xl:h-screen bg-slate-50 flex flex-col md:pl-20">
          <div className="py-10">
            <h1 className="text-center text-3xl xl:text-5xl font-semibold text-purple-700">
              Sub Organizaciones
            </h1>
          </div>
          <div className="flex-grow">
            {subOrganizations && subOrganizations.length === 0 ? (
              <div className="flex items-center justify-center h-full">
                <div className="text-center flex flex-col justify-center items-center gap-2">
                  <img
                    src="/notFoundEvents.svg"
                    alt="Not found SubOrganizations"
                    className="w-52"
                  />
                  <p className="text-lg text-gray-600">
                    No hay suborganizaciones disponibles en este momento.
                  </p>
                </div>
              </div>
            ) : (
              <div className="grid place-items-center xl:grid-cols-3 gap-4 mb-20 md:mb-0">
                {subOrganizations.map((subOrg, index) => (
                  <CardSubOrganization
                    key={index}
                    id={subOrg.id_suborganizacion}
                    title={subOrg.nombre_suborganizacion}
                    organization={nameOrg}
                    description={subOrg.descripcion_suborganizacion}
                  />
                ))}
              </div>
            )}
          </div>
          {subOrganizations.length < 5 && (
            <div className="addSubOrg flex justify-center items-center mb-40">
              <Link
                to={"/AddSubOrg"}
                className="flex rounded-md items-center gap-2 py-2 justify-center text-center w-80 bg-purple-600 text-white font-semibold hover:bg-purple-900 text-xl">
                <AiOutlinePlus className="text-2xl font-extrabold" /> Añadir Sub
                Organizaciones
              </Link>
            </div>
          )}
        </div>
      )}
      <NavbarMobileUser />
    </>
  );
};
