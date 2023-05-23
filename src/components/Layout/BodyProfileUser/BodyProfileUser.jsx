import React, { useEffect, useState } from "react";
import { FormProfile } from "../FormProfile/FormProfile";
import { SubOrganizations } from "../SubOrganizations/SubOrganizations";
import { ImSpinner9 } from "react-icons/im";
import { FormProfileOrg } from "../FormProfileOrg/FormProfileOrg";
import ChangePasswordForm from "../ChangePasswordForm/ChangePasswordForm";

export const BodyProfileUser = ({ nroDocumento, typeUser, idOrg }) => {
  const [activeTab, setActiveTab] = useState("profile");
  const [userData, setUserData] = useState([]);
  const [orgData, setOrgData] = useState([]);
  const [loading, setLoading] = useState(true);

  if (typeUser == 1) {
    useEffect(() => {
      const fetchUserData = async () => {
        try {
          const response = await fetch(
            `https://timecheck.up.railway.app/user/${nroDocumento}`
          );
          const data = await response.json();
          console.log(data.message);
          setUserData(data.message);
          setLoading(false);
        } catch (error) {
          console.log(error);
          setLoading(false);
        }
      };

      if (nroDocumento) {
        fetchUserData();
      }
    }, [nroDocumento]);
  } else {
    useEffect(() => {
      const fetchOrgData = async () => {
        try {
          const response = await fetch(
            `https://timecheck.up.railway.app/org/${idOrg}`
          );
          const data = await response.json();
          console.log(data.message);
          setOrgData(data.message);
          setLoading(false);
        } catch (error) {
          console.log(error);
          setLoading(false);
        }
      };

      if (idOrg) {
        fetchOrgData();
      }
    }, [idOrg]);
  }

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const renderContent = () => {
    if (loading) {
      return (
        <div className="flex flex-col items-center justify-center h-full">
          <ImSpinner9 className="animate-spin text-4xl text-purple-950" />
          <p className="ml-2">Cargando...</p>
        </div>
      ); // Mostrar un indicador de carga mientras se obtiene el dato
    }

    if (!userData) {
      return <p>Error: Failed to fetch user data.</p>; // Mostrar un mensaje de error si no se pudo obtener el dato
    }

    if (activeTab === "profile") {
      if (typeUser === 1) {
        return <FormProfile userData={userData} />;
      } else {
        return <FormProfileOrg orgData={orgData} />;
      }
    } else if (activeTab === "changePassword") {
      return <ChangePasswordForm />;
    } else if (activeTab === "suborganizations") {
      return <SubOrganizations />;
    }
  };

  /*
  confirmados: 0
  correo_usuario: "yuliamwow@gmail.com"
  direccion_usuario: null
  nombre_completo_usuario: "yuliam andrey osorio puerta"
  nro_documento_usuario: "1091884361"
  pendientes: 0
  tipo_documento_usuario: "Cédula de ciudadania"
  tipo_poblacion_usuario: null 
  */

  return (
    <div className="flex w-full flex-row justify-center ">
      <div className="w-full h-40 bg-purple-900"></div>
      <div className="w-11/12 h-5/6 flex flex-col md:flex-row z-30 gap-5 absolute md:ml-24 center mt-16 ">
        <div className=" w-full md:w-1/4 bg-slate-50 h-5/6 md:h-full shadow-lg shadow-neutral-500">
          <div className="flex justify-center items-center flex-col py-8">
            <div className="h-36 w-36 bg-black rounded-full"></div>
            <p className="text-xl font-medium">
              {typeUser === 1
                ? userData.nombre_completo_usuario
                : orgData.nombre_organizacion}
            </p>
          </div>
          <div className="flex flex-col justify-between gap-28 mt-10">
            <div className="flex flex-col">
              <div className="border-y py-5 border-neutral-300 px-7 flex flex-row justify-between">
                <p>Eventos asistidos</p>
                <p className="text-green-600 font-bold">
                  {userData.confirmados}
                </p>
              </div>
              <div className="border-y py-5 border-neutral-300 px-7 flex flex-row justify-between">
                <p>Eventos no asistidos</p>
                <p className="text-red-600 font-bold">14</p>
              </div>
              <div className="border-y py-5 border-neutral-300 px-7 flex flex-row justify-between">
                <p>Eventos pendientes</p>
                <p className="text-purple-600 font-bold">
                  {userData.pendientes}
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center h-32 pb-32 md:pb-0">
              <button className="hover:bg-slate-200 px-12 py-2 border border-slate-200 text-purple-500 font-bold bg-slate-100 shadow-md rounded-md">
                Compartir perfil
              </button>
            </div>
          </div>
        </div>
        <div className="pt-1 border w-full h-screen xl:h-full md:w-4/5 bg-slate-50 shadow-lg  shadow-neutral-500">
          <div className="flex justify-around border-b  border-neutral-300 py-2 text-sm">
            <button
              className={`px-4 py-2 rounded-md hover:bg-slate-100  ${
                activeTab === "profile" ? "bg-slate-200" : ""
              }`}
              onClick={() => handleTabChange("profile")}>
              Configuración
            </button>
            <button
              className={`px-4 py-2 rounded-md hover:bg-slate-100  ${
                activeTab === "changePassword" ? "bg-slate-200" : ""
              }`}
              onClick={() => handleTabChange("changePassword")}>
              Cambiar clave
            </button>
            {typeUser !== 2 && (
              <button
                className={`px-4 py-2 rounded-md hover:bg-slate-100  ${
                  activeTab === "suborganizations" ? "bg-slate-200" : ""
                }`}
                onClick={() => handleTabChange("suborganizations")}>
                Suborganizaciones
              </button>
            )}
          </div>
          {renderContent()}
        </div>
      </div>
    </div>
  );
};
