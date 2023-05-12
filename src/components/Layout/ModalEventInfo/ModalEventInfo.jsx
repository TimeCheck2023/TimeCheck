import React, { useState, useRef, useEffect } from "react";
import { BtnModalInfo } from "../../UI/BtnModalInfo/BtnModalInfo";
import moment from "moment";
import "moment/locale/es";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";

export const ModalEventInfo = ({
  handleCloseModal,
  title,
  description,
  image,
  fecha_inicio,
  fecha_final,
  lugar,
  aforo,
  valor_total,
  tipo_evento,
  idEvento,
}) => {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  const [correoUser, setCorreoUser] = useState();
  const [attendance, setAttendance] = useState();

  useEffect(() => {
    const token = localStorage.getItem("token_login");
    const decoded = jwtDecode(token);

    const email = decoded.payload.correo;

    setCorreoUser(email);

    const data = {
      idEvento: idEvento,
      correo: email,
    };

    const params = new URLSearchParams();
    for (const [key, value] of Object.entries(data)) {
      params.append(key, value);
    }

    fetch(
      `https://localhost:7025/api/Attendance/CheckAttendance?${params.toString()}`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setAttendance(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSubmitAttendance = (e) => {
    e.preventDefault();

    const requestBody = {
      eventId: idEvento,
      userEmail: correoUser,
    };

    fetch("https://time-check.azurewebsites.net/api/Attendance/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => response.text()) // Obtener la respuesta como texto
      .then((data) => {
        toast.success("Tu asistencia ha sido exitosa!", {
          theme: "dark",
        });
        handleCloseModal();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDeleteAttendace = (e) => {
    e.preventDefault();
    
  };

  console.log(correoUser);

  // console.log(correoUser);
  moment.locale("es"); // aca ya esta en es

  return (
    <div
      className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50 xl:h-full w-full pt-5 pb-10 mb-14 2xl:h-full"
      onClick={handleBackdropClick}>
      <div className="bg-white rounded-md shadow-md w-11/12 xl:w-1/2 2xl:w-1/3 overflow-y-scroll xl:overflow-auto 2xl:overflow-auto h-full xl:h-4/5 flex flex-col">
        <div className="flex justify-end px-4 py-2 rounded-t-md bg-neutral-100">
          <button
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={handleCloseModal}>
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <title>Close</title>
              <path
                d="M14.348 14.849a1 1 0 01-1.414 0L10 11.414l-2.93 2.93a1 1 0 01-1.414-1.414l2.93-2.93-2.93-2.93a1 1 0 011.414-1.414l2.93 2.93 2.93-2.93a1 1 0 011.414 1.414l-2.93 2.93 2.93 2.93a1 1 0 010 1.414z"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="text-center my-2">
          <h1 className="text-2xl text-purple-600">{title}</h1>
        </div>
        <div className="flex flex-col justify-center items-center my-5 gap-10 xl:gap-4">
          <img
            src={image}
            alt=""
            className="p-3 max-h-64 object-cover xl:max-h-72 xl:max-w-sm"
          />
          <p className="text-lg px-4">{description}</p>
        </div>
        <div className="grid px-4 grid-cols-1 gap-4 my-2 xl:grid-cols-2 2xl:grid-cols-2 2xl:gap-5 xl:gap-5">
          <BtnModalInfo text={tipo_evento}></BtnModalInfo>
          <BtnModalInfo text={lugar}></BtnModalInfo>
          <BtnModalInfo
            text={moment(fecha_inicio).format("LLLL")}></BtnModalInfo>
          <BtnModalInfo
            text={moment(fecha_final).format("LLLL")}></BtnModalInfo>
        </div>
        <div className="flex flex-row justify-between px-5 py-5">
          <p className="text-slate-400 font-normal">{`0/${aforo}`}</p>
          <p className="text-slate-400 font-normal">
            {valor_total !== 0 ? `$${valor_total}` : "GRATIS"}
          </p>
        </div>
        <div className="flex flex-row justify-between px-10 mt-3 mb-10 xl:px-40">
          <button
            onClick={handleCloseModal}
            className="bg-purple-600 text-white px-7 xl:px-24 xl:py-3 2xl:px-20 py-2 rounded-lg hover:bg-purple-800 hover:font-semibold">
            Volver
          </button>
          {attendance ? (
            <button
              onClick={handleDeleteAttendace}
              className="bg-purple-600 text-white px-7 xl:px-24 xl:py-3 2xl:px-20 py-2 rounded-lg hover:bg-purple-800 hover:font-semibold text-sm">
              Caneclar asistencia
            </button>
          ) : (
            <button
              onClick={handleSubmitAttendance}
              className="bg-purple-600 text-white px-7 xl:px-24 xl:py-3 2xl:px-20 py-2 rounded-lg hover:bg-purple-800 hover:font-semibold">
              Asistir
            </button>
          )}{" "}
        </div>
      </div>
    </div>
  );
};
