import React, { useContext, useState } from "react";
import { Footer } from "../../Layout/Footer/Footer";
import {
  VictoryChart,
  VictoryBar,
  VictoryAxis,
  VictoryGroup,
  VictoryLabel,
} from "victory";
import { SlideBar } from "../../Layout/SlideBar/SlideBar";
import { NavbarMobileUser } from "../../Layout/NavbarMobileUser/NavbarMobileUser";
import { Link, useLocation, useParams } from "react-router-dom";
import { useEffect } from "react";
import { AuthContext } from "../../../Context/AuthContext";
import {
  AiFillHeart,
  AiOutlineArrowLeft,
  AiOutlineFilePdf,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import { FaCommentAlt } from "react-icons/fa";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export const StatisticsGraphics = () => {
  const [confirmadas, setConfirmadas] = useState();
  const [pendientes, setPendientes] = useState();
  const [canceladas, setCanceladas] = useState();
  const [events, setEvents] = useState();
  const [nroLikes, setNroLikes] = useState();
  const [comments, setComments] = useState();
  const [aforo, setAforo] = useState();
  const [nameEvent, setNameEvent] = useState();
  const [asistentes, setAsistentes] = useState();
  const [usersPending, setUsersPending] = useState([]);
  const [usersConfirm, setUsersConfirm] = useState([]);
  const [usersNotAssisted, setUsersNotAssisted] = useState([]);

  const { id } = useParams();

  const { socket } = useContext(AuthContext);
  useEffect(() => {
    socket.emit("getAsistencia", id);

    socket.on("Asistencias", (data) => {
      // console.log(data);
      setConfirmadas(data.asistencias_confirmadas);
      setPendientes(data.asistencias_pendientes);
      setCanceladas(data.asistencias_canceladas);
    });

    socket.emit("getCountLikes", id);

    socket.on("Countlikes", (data) => {
      setNroLikes(data.countLikes);
      console.log(data);
    });

    socket.emit("getCountComments", id);

    socket.on("CountComment", (data) => {
      setComments(data);
      console.log(data);
    });
  }, []);

  useEffect(() => {
    try {
      fetch(`https://time-check.azurewebsites.net/api/Event/Consult/${id}`)
        .then((response) => response.json())
        .then((data) => {
          // console.log(data.response)
          setEvents(data.response);
          setAforo(data.response.aforoEvento);
          setNameEvent(data.response.nombreEvento);
          console.log(data.response);
          setAsistentes(data.response.cuposDisponibles);
          // console.log(data.response.nombreEvento)
        });

      fetch(
        `https://time-check.azurewebsites.net/api/Attendance/GetPendingAttendees?idEvento=${id}`
      )
        .then((response) => response.json())
        .then((data) => {
          setUsersPending(data);
        });

      fetch(
        `https://time-check.azurewebsites.net/api/Attendance/GetConfirmedAttendees?idEvento=${id}`
      )
        .then((response) => response.json())
        .then((data) => {
          setUsersConfirm(data);
        });

      fetch(
        `https://time-check.azurewebsites.net/api/Attendance/GetNonAttendingAttendees?idEvento=${id}`
      )
        .then((response) => response.json())
        .then((data) => {
          setUsersNotAssisted(data);
        });
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  const handleGoBack = () => {
    location.state?.from
      ? history.replace(location.state.from)
      : history.goBack();
  };

  const exportToPDF = () => {
    const input = document.getElementById("export-to-pdf");

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      // Verificar si el contenido excede el tamaño de la página del PDF
      if (pdfHeight > pdf.internal.pageSize.getHeight()) {
        pdf.addPage(); // Agregar una nueva página al PDF
      }

      // Agregar margen al PDF
      const margin = 10; // Puedes ajustar el valor del margen según tus necesidades
      const adjustedWidth = pdfWidth - margin * 2;
      const adjustedHeight = pdfHeight - margin * 2;

      pdf.addImage(
        imgData,
        "PNG",
        margin,
        margin,
        adjustedWidth,
        adjustedHeight
      );
      pdf.save(`${nameEvent}/Estadisticas.pdf`);
    });
  };

  return (
    <div className="flex flex-col justify-between items-center gap-20 mb-20">
      <div className="w-full bg-gray-200 flex justify-between py-2">
        <div className="flex items-center justify-end py-2 px-4">
          <Link
            className="bg-violet-600 px-6 py-2  text-white rounded-md flex items-center justify-around hover:bg-violet-800"
            onClick={() => window.history.back()}>
            <AiOutlineArrowLeft className="text-lg" />
            <span className="ml-2">Volver</span>
          </Link>
        </div>

        <div className="flex items-center justify-end py-2 px-4">
          <button
            className="bg-violet-600 text-white px-4 py-2 rounded-md flex items-center justify-center space-x-2 hover:bg-violet-800"
            onClick={exportToPDF}>
            <AiOutlineFilePdf className="text-lg" />
            <span>Exportar a PDF</span>
          </button>
        </div>
      </div>
      <div
        className="flex flex-col justify-center items-center mx-10"
        id="export-to-pdf">
        <div className="mb-10">
          <h1 className="text-slate-950 text-5xl text-center font-bold my-5">
            Estádisticas del evento
          </h1>
        </div>

        <div className="CardGraphics w-full md:w-4/6 h-full border bg border-gray-400 shadow-lg shadow-neutral-500 rounded-2xl flex flex-col md:flex-row py-10 justify-around gap-20 md:gap-0">
          <div className="h-full mx-3 md:mx-0 px-2 rounded-2xl border py-2">
            <div className="flex justify-between px-4 ">
              <div className="px-0">
                <h2 className="font-semibold text-slate-500 text-xl">
                  {events?.nombreEvento}
                </h2>
                <div className="flex text-3xl font-bold text-violet-700">
                  <p>{aforo}</p>
                </div>
                <div className="text-violet-400 text-xl font-semibold">
                  <p>Cupos del evento</p>
                </div>
              </div>
              <div className="text-3xl relative text-slate-400 top-1 h-8 hover:text-neutral-600">
                <AiOutlineInfoCircle />
              </div>
            </div>
            <hr className="relative top-4" />
            {confirmadas === 0 && pendientes === 0 && canceladas === 0 ? (
              <div className="mt-5 h-40 w-96 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-10 w-10 text-gray-500">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                <p className="text-lg font-semibold text-gray-500">
                  No hay registros
                </p>
              </div>
            ) : (
              <VictoryChart domainPadding={40}>
                <VictoryAxis />
                <VictoryAxis dependentAxis />
                <VictoryGroup colorScale={["#22c55e", "#4338ca", "#dc2626"]}>
                  <VictoryBar
                    data={[
                      { x: "Confirmadas", y: confirmadas, color: "#7032DD" },
                    ]}
                    labels={({ datum }) => datum.y}
                    labelComponent={<VictoryLabel dy={0} />}
                  />
                  <VictoryBar
                    data={[
                      { x: "Pendientes", y: pendientes, color: "#E697FF" },
                    ]}
                    labels={({ datum }) => datum.y}
                    labelComponent={<VictoryLabel dy={0} />}
                  />
                  <VictoryBar
                    data={[
                      { x: "Cancelados", y: canceladas, color: "#FFC800" },
                    ]}
                    labels={({ datum }) => datum.y}
                    labelComponent={<VictoryLabel dy={0} />}
                  />
                </VictoryGroup>
              </VictoryChart>
            )}
          </div>
          <div className="w-full md:w-2/5 rounded-2xl flex flex-col justify-center md:justify-between items-center gap-10 md:gap-0">
            <div className="w-72 h-32 border border-violet-400 rounded-2xl flex flex-row justify-around items-center px-2">
              <div className="w-20 h-20 rounded-full border border-violet-300 text-center flex items-center justify-center">
                <FaCommentAlt className="text-violet-600 text-4xl" />
              </div>
              <div className="text-center flex flex-col gap-2">
                <h2 className="font-semibold text-xl">Comentarios</h2>
                <p className="text-lg font-semibold">{comments}</p>
              </div>
            </div>

            <div className="w-72 h-32 border border-violet-400 rounded-2xl flex flex-row justify-around items-center px-2">
              <div className="w-20 h-20 rounded-full border border-violet-300 text-center flex items-center justify-center">
                <AiFillHeart className="text-violet-600 text-6xl" />
              </div>
              <div className="text-center flex flex-col gap-2">
                <h2 className="font-semibold text-xl">Likes</h2>
                <p className="text-lg font-semibold">{nroLikes}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mt-10 mx-10">
          <h2 className="text-xl font-bold mb-4">Usuarios pendientes</h2>
          <div className="overflow-x-auto">
            <table className="w-full table-fixed">
              <thead>
                <tr className="bg-gray-200">
                  <th className="py-2 px-4 text-left">Correo electronico</th>
                  <th className="py-2 px-4 text-left">Número de documento</th>
                  <th className="py-2 px-4 text-left">Nombre completo</th>
                  <th className="py-2 px-4 text-left">Tipo de documento</th>
                </tr>
              </thead>
              <tbody>
                {usersPending.map((user) => (
                  <tr key={user.email} className="border-b">
                    <td className="py-2 px-4 truncate">{user.email}</td>
                    <td className="py-2 px-4 truncate">
                      {user.documentNumber}
                    </td>
                    <td className="py-2 px-4 truncate">{user.fullName}</td>
                    <td className="py-2 px-4 truncate">{user.documentType}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="w-full mt-10 mx-10">
          <h2 className="text-xl font-bold mb-4">Usuarios confirmados</h2>
          <div className="overflow-x-auto">
            <table className="w-full table-fixed">
              <thead>
                <tr className="bg-gray-200">
                  <th className="py-2 px-4 text-left">Correo electronico</th>
                  <th className="py-2 px-4 text-left">Número de documento</th>
                  <th className="py-2 px-4 text-left">Nombre completo</th>
                  <th className="py-2 px-4 text-left">Tipo de documento</th>
                </tr>
              </thead>
              <tbody>
                {usersConfirm.map((user) => (
                  <tr key={user.email} className="border-b">
                    <td className="py-2 px-4 truncate">{user.email}</td>
                    <td className="py-2 px-4 truncate">
                      {user.documentNumber}
                    </td>
                    <td className="py-2 px-4 truncate">{user.fullName}</td>
                    <td className="py-2 px-4 truncate">{user.documentType}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="w-full mt-10 mx-10">
          <h2 className="text-xl font-bold mb-4">Usuarios que no asistieron</h2>
          <div className="overflow-x-auto">
            <table className="w-full table-fixed">
              <thead>
                <tr className="bg-gray-200">
                  <th className="py-2 px-4 text-left">Correo electronico</th>
                  <th className="py-2 px-4 text-left">Número de documento</th>
                  <th className="py-2 px-4 text-left">Nombre completo</th>
                  <th className="py-2 px-4 text-left">Tipo de documento</th>
                </tr>
              </thead>
              <tbody>
                {usersNotAssisted.map((user) => (
                  <tr key={user.email} className="border-b">
                    <td className="py-2 px-4 truncate">{user.email}</td>
                    <td className="py-2 px-4 truncate">
                      {user.documentNumber}
                    </td>
                    <td className="py-2 px-4 truncate">{user.fullName}</td>
                    <td className="py-2 px-4 truncate">{user.documentType}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
