import React, { useState, useEffect } from "react";
import { BtnModalInfo } from "../../UI/BtnModalInfo/BtnModalInfo";
import moment from "moment";
import "moment/locale/es";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";
import { MdClose, MdEvent, MdLocationOn, MdAccessTime } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { BsCheckCircle, BsXCircle } from "react-icons/bs";

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
  cuposDisponibles,
  fetchEvents,
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
      `https://time-check.azurewebsites.net/api/Attendance/CheckAttendance?${params.toString()}`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setAttendance(data);
      })
      .catch((error) => {
        toast.error(error);
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
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ya no hay cupo para este evento!");
        }
        return response.text();
      })
      .then((data) => {
        console.log(data);
        toast.success("Tu asistencia ha sido exitosa!", {
          theme: "dark",
        });
        handleCloseModal();
        fetchEvents();
        // props.fetchEvents(); // Llama a la función fetchEvents
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message, {
          theme: "dark",
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDeleteAttendance = (e) => {
    e.preventDefault();

    const data = {
      correoUsuario: correoUser,
      idEvento: idEvento,
    };

    const params = new URLSearchParams();
    for (const [key, value] of Object.entries(data)) {
      params.append(key, value);
    }

    fetch(
      `https://time-check.azurewebsites.net/api/Attendance/CancelAttendance?${params.toString()}`,
      {
        method: "DELETE",
      }
    )
      .then((response) => {
        if (response.ok) {
          toast.success("Se canceló la asistencia con éxito!", {
            theme: "dark",
          });
          fetchEvents();
          // props.fetchEvents(); // Llama a la función fetchEvents

          handleCloseModal();
        } else {
          // Hubo un error en la solicitud
          throw new Error("Error al eliminar la asistencia");
        }
      })
      .catch((error) => {
        // Manejar el error de la solicitud
        console.error(error);
      });
  };

  moment.locale("es"); // aca ya esta en es

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50 xl:h-full w-full pt-5 pb-10 mb-14 2xl:h-full">
      <div className="bg-white rounded-md shadow-md w-11/12 xl:w-2/5 2xl:w-1/3 overflow-y-scroll xl:overflow-hidden 2xl:overflow-auto h-full xl:h-2/3 2xl:h-3/4 flex flex-col">
        <div className="flex justify-end px-4 py-2 rounded-t-md bg-neutral-100">
          <button
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={handleCloseModal}>
            <MdClose className="h-6 w-6" />
          </button>
        </div>
        <div className="text-center ">
          <h1 className="text-2xl text-purple-600 font-bold">{title}</h1>
        </div>
        <div className="flex flex-col justify-center items-center my-5 xl:my-0 xl:mb-4 xl:gap-3 gap-5">
          <img
            src={image}
            alt={title}
            className="p-3 max-h-64 object-cover xl:max-h-72 xl:max-w-sm"
          />
          <p className="text-lg px-4 xl:px-10">{description}</p>
        </div>
        <div className="grid px-4 grid-cols-1 gap-4 my-2 xl:grid-cols-2 2xl:grid-cols-2 2xl:gap-5 xl:gap-5">
          <div className="flex items-center">
            <MdEvent className="h-5 w-5 text-purple-600 mr-2" />
            <span>{tipo_evento}</span>
          </div>
          <div className="flex items-center">
            <MdLocationOn className="h-5 w-5 text-purple-600 mr-2" />
            <span>{lugar}</span>
          </div>
          <div className="flex items-center">
            <MdAccessTime className="h-5 w-5 text-purple-600 mr-2" />
            <span>{moment(fecha_inicio).format("LLLL")}</span>
          </div>
          <div className="flex items-center">
            <MdAccessTime className="h-5 w-5 text-purple-600 mr-2" />
            <span>{moment(fecha_final).format("LLLL")}</span>
          </div>
        </div>
        <div className="flex flex-row justify-between px-5 xl:px-12 py-5">
          <p className="text-slate-400 font-normal">
            {`${cuposDisponibles}/${aforo}`}
          </p>
          <p className="text-slate-400 font-normal">
            {valor_total !== 0 ? `$${valor_total}` : "GRATIS"}
          </p>
        </div>
        <div className="flex flex-row justify-between px-10 mt-3 mb-10 xl:px-40 2xl:px-20">
          <button
            onClick={handleCloseModal}
            className="bg-purple-600 text-white px-7 xl:px-16 xl:py-3 2xl:px-20 py-2 rounded-lg hover:bg-purple-800 hover:font-semibold">
            Volver
          </button>
          {(attendance && attendance.tipoAsistencia === "cancelado") ||
          !attendance?.exists ? (
            <button
              onClick={handleSubmitAttendance}
              className="bg-purple-600 text-white px-7 xl:px-16 xl:py-3 2xl:px-20 py-2 rounded-lg hover:bg-purple-800 hover:font-semibold">
              Asistir
            </button>
          ) : (
            attendance &&
            attendance.tipoAsistencia === "pendiente" &&
            attendance.exists && (
              <button
                onClick={handleDeleteAttendance}
                className="bg-purple-600 text-white px-7 xl:px-5 xl:py-3 2xl:px-8 py-2 rounded-lg hover:bg-purple-800 hover:font-semibold">
                Cancelar asistencia
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ModalEventInfo;
