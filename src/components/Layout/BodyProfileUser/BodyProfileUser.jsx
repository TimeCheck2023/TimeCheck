import React, { useState } from "react";
import { FormProfile } from "../FormProfile/FormProfile";
import { SubOrganizations } from "../SubOrganizations/SubOrganizations";
// import { ChangePassword } from "../ChangePassword/ChangePassword";
// import { Suborganizations } from "../Suborganizations/Suborganizations";

export const BodyProfileUser = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const renderContent = () => {
    if (activeTab === "profile") {
      return <FormProfile />;
    } else if (activeTab === "changePassword") {
      return "holac";
    } else if (activeTab === "suborganizations") {
      return <SubOrganizations />;
    }
  };

  return (
    <div className="flex w-full flex-row justify-center ">
      <div className="w-full h-40 bg-purple-900"></div>
      <div className="w-11/12 h-5/6 flex flex-col md:flex-row z-30 gap-5 absolute md:ml-24 center mt-16 ">
        <div className=" w-full md:w-1/4 bg-slate-50 h-5/6 md:h-full shadow-lg shadow-neutral-500">
          <div className="flex justify-center items-center flex-col py-8">
            <div className="h-36 w-36 bg-black rounded-full"></div>
            <p className="text-xl font-medium">Carolina Rivera</p>
          </div>
          <div className="flex flex-col justify-between gap-28 mt-10">
            <div className="flex flex-col">
              <div className="border-y py-5 border-neutral-300 px-7 flex flex-row justify-between">
                <p>Eventos asistidos</p>
                <p className="text-green-600 font-bold">36</p>
              </div>
              <div className="border-y py-5 border-neutral-300 px-7 flex flex-row justify-between">
                <p>Eventos no asistidos</p>
                <p className="text-red-600 font-bold">14</p>
              </div>
              <div className="border-y py-5 border-neutral-300 px-7 flex flex-row justify-between">
                <p>Eventos pendientes</p>
                <p className="text-purple-600 font-bold">10</p>
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
            <button
              className={`px-4 py-2 rounded-md hover:bg-slate-100  ${
                activeTab === "suborganizations" ? "bg-slate-200" : ""
              }`}
              onClick={() => handleTabChange("suborganizations")}>
              Suborganizaciones
            </button>
          </div>
          {renderContent()}
        </div>
      </div>
    </div>
  );
};
