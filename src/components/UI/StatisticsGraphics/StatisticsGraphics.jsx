import React, { useContext, useState } from "react";
import { Footer } from "../../Layout/Footer/Footer";
import { VictoryChart, VictoryBar, VictoryAxis, VictoryGroup, VictoryLabel } from "victory";
import { SlideBar } from "../../Layout/SlideBar/SlideBar";
import { NavbarMobileUser } from "../../Layout/NavbarMobileUser/NavbarMobileUser";
import { Link, useLocation, useParams } from "react-router-dom";
import { useEffect } from "react";
import { AuthContext } from "../../../Context/AuthContext";
import { AiFillHeart, AiOutlineArrowLeft, AiOutlineInfoCircle } from "react-icons/ai";
import { FaCommentAlt } from "react-icons/fa";

export const StatisticsGraphics = () => {

  const [confirmadas, setConfirmadas] = useState();
  const [pendientes, setPendientes] = useState();
  const [canceladas, setCanceladas] = useState();
  const [events, setEvents] = useState()
  const [nroLikes, setNroLikes] = useState()
  const [comments, setComments] = useState()
  const [aforo, setAforo] = useState()
  const [asistentes, setAsistentes] = useState()

  const { id } = useParams();

  const {  socket } = useContext(AuthContext);
    useEffect(() => {
    socket.emit("getAsistencia", id);

    socket.on("Asistencias", (data) => {
      // console.log(data);
      setConfirmadas(data.asistencias_confirmadas)
      setPendientes(data.asistencias_pendientes)
      setCanceladas(data.asistencias_canceladas)
    });

    socket.emit("getCountLikes", id);

    socket.on("Countlikes", (data) => {
      setNroLikes(data.countLikes);
      console.log(data);
    });

    socket.emit('getCountComments', id)

    socket.on('CountComment', (data) => {
      setComments(data);
      console.log(data)
    })

  }, []);

  useEffect(() => {

      try {
       fetch(
          `https://time-check.azurewebsites.net/api/Event/Consult/${id}`
        ).then((response) => response.json())
        .then((data) => {
          // console.log(data.response)
        setEvents(data.response);
        setAforo(data.response.aforoEvento)
        console.log(data.response)
        setAsistentes(data.response.cuposDisponibles)
        // console.log(data.response.nombreEvento)
        });
      } catch (error) {
        console.log(error);
      }
  
  }, [id]);

  const handleGoBack = () => {
    location.state?.from ? history.replace(location.state.from) : history.goBack();
  };

  return (
      <div className="md:ml-24 flex flex-col justify-between items-center gap-20">
        <div>
          <h1 className="text-slate-950 text-5xl text-center font-bold my-5">
            Estádistica del evento
          </h1>
        </div>
        <div className="w-full md:w-4/6 h-full border bg border-gray-400 shadow-lg shadow-neutral-500 rounded-2xl flex flex-col md:flex-row py-10 justify-around gap-20 md:gap-0">
          <div className="h-full mx-3 md:mx-0 px-2 rounded-2xl border py-2">
            <div className="flex justify-between px-4 ">
              <div className="px-0">
                <h2 className="font-semibold text-slate-500 text-xl">
                  {events?.nombreEvento}
                </h2>
                <div className="flex text-3xl font-bold text-purple-700">
                <p>{aforo}</p>
                </div>
                <div className="text-purple-400 text-xl font-semibold">
                  <p>Cupos del evento</p>
                </div>
              </div>
              <div className="text-3xl relative text-slate-400 top-1 h-8 hover:text-neutral-600">
                <AiOutlineInfoCircle />
              </div>
            </div>
            <hr className="relative top-4" />
          {confirmadas === 0 && pendientes === 0 && canceladas === 0 ? <div className="mt-5 h-40 w-96 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-10 w-10 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              <p className="text-lg font-semibold text-gray-500">No hay registros</p>
            </div> :   <VictoryChart domainPadding={40}>
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
                  data={[{ x: "Pendientes", y: pendientes, color: "#E697FF" }]}
                  labels={({ datum }) => datum.y}
                    labelComponent={<VictoryLabel dy={0} />}
                />
                <VictoryBar
                  data={[{ x: "Cancelados", y: canceladas, color: "#FFC800" }]}
                  labels={({ datum }) => datum.y}
                    labelComponent={<VictoryLabel dy={0} />}
                />
              </VictoryGroup>
            </VictoryChart>}
          </div>
          <div className="w-full md:w-2/5 rounded-2xl flex flex-col justify-center md:justify-between items-center gap-10 md:gap-0">
            <div className="w-72 h-32 border border-purple-400 rounded-2xl flex flex-row justify-around items-center px-2">
              <div className="w-20 h-20 rounded-full border border-purple-300 text-center flex items-center justify-center">
                <FaCommentAlt className="text-purple-600 text-4xl" />
              </div>
              <div className="text-center flex flex-col gap-2">
                <h2 className="font-semibold text-xl">Comentarios</h2>
                <p className="text-lg font-semibold">{comments}</p>
              </div>
            </div>

            <div className="w-72 h-32 border border-purple-400 rounded-2xl flex flex-row justify-around items-center px-2">
              <div className="w-20 h-20 rounded-full border border-purple-300 text-center flex items-center justify-center">
                <AiFillHeart className="text-purple-600 text-6xl" />
              </div>
              <div className="text-center flex flex-col gap-2">
                <h2 className="font-semibold text-xl">Likes</h2>
                <p className="text-lg font-semibold">{nroLikes}</p>
              </div>
            </div>
          </div>
        </div>
        <Link
        className="bg-purple-600 w-28 px-2 py-2 text-white rounded-md flex items-center justify-center my-5"
        onClick={() => window.history.back()}
      >
        <AiOutlineArrowLeft className="text-lg" />
        <span className="ml-2">Volver</span>
      </Link>
    </div>
  );
};