import React from "react";
import { Footer } from "../../Layout/Footer/Footer";
import { Link } from "react-router-dom";
import { StatisticsGraphics } from "../StatisticsGraphics/StatisticsGraphics";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthContext";
import { useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";

export const StatisticsView = () => {
  const { idOrg, socket } = useContext(AuthContext);

  const [events, setEvents] = useState([]);
  const [eventId, setEventId] = useState([]);




  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(
          `https://time-check.azurewebsites.net/api/Event/GetEventsOrg?OrganizacionId=${idOrg}`
        );
        const data = await response.json();

        // setEventId(data[1].idEvento);
        setEvents(data);
        // console.log(data.idEvento)
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    if (idOrg) {
      fetchEvents();
    }
  }, [idOrg]);



  const getColor = (datum) => colorPalette[datum.x];

  return (
    <div className="w-full h-screen flex items-center flex-col gap-12">
        <h1 className="md:pl-20 text-3xl lg:text-5xl font-semibold">
          Eventos y Estadisticas
        </h1>

      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center">
      {events.map((event,index) => (
      <Link
      to={`/StatisticsGraphics/${event.idEvento}`}
      key={index}
    >
         <div className="w-72 h-72 z-30 my-4 bg-purple-500 flex gap-5 flex-col justify-center items-center rounded-md shadow-md border border-gray-500">
           <h2 className="text-white text-center text-2xl font-bold">
             {event.nombreEvento}
           </h2>
           <h3 className="text-white font-medium text-justify px-2">
             {event.descripcionEvento}
           </h3>
         </div>
       </Link>
        ))}

      </div>

      <div className="md:pl-14 w-full relative top-3/5">
        <Footer />
      </div>
    </div>
  );
};
