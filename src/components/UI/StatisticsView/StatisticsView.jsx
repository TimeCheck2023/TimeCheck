import React from "react";
import { Footer } from "../../Layout/Footer/Footer";
import { Link } from "react-router-dom";
import { StatisticsGraphics } from "../StatisticsGraphics/StatisticsGraphics";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthContext";
import { useState } from "react";

export const StatisticsView = () => {
  const [nombreOrg, setNombreOrg] = useState();
  const [descripcionSubOrg, setDescripcionSubOrg] = useState();
  const [idSubOrg, setIdSubOrg] = useState();
  const { idOrg } = useContext(AuthContext);
  const [events, setEvents] = useState([]);

  /*descripcion_suborganizacion
: 
"Grupo de desarrollo de software de el SENA"
id_organizacion2
: 
69
id_suborganizacion
: 
67
nombre_suborganizacion
: 
"Desarrolladores " */

  useEffect(() => {
    const fetchSubsOrg = async () => {
      try {
        const response = await fetch(
          `https://timecheck.up.railway.app/SubOrg/${idOrg}`
        );
        const data = await response.json();
        setEvents(data.message);
        console.log(data.message);
        console.log(data.message[0]);
        setNombreOrg(data.message[0].nombre_suborganizacion);
        setDescripcionSubOrg(data.message[0].descripcion_suborganizacion);
        setIdSubOrg(data.message[0].id_suborganizacion);
        console.log(data.message[0].id_suborganizacion);
        // console.log(data.message);
        // setUserData(data.message);

        // setImage(data.message.image_url);
        // setLoading(false);
      } catch (error) {
        console.log(error);
        // setLoading(false);
      }
    };

    if (idOrg) {
      fetchSubsOrg();
    }
  }, [idOrg]);
  
  events.map((event) => {
    console.log(event.nombre_suborganizacion);
  });

  useEffect(() => {}, []);

  return (
    <div className="w-full h-full flex items-center flex-col gap-12">
      <div className="mt-2">
        <h1 className="md:pl-20 text-3xl lg:text-5xl font-semibold">
          Panel de Estadisticas
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-10 place-content-center text-center content-center place-self-center justify-between">
        {" "}
        {events.map((event) => (
         <Link
         to={`/StatisticsGraphics/${event.id_suborganizacion}`}
       >
            <div className="w-72 h-72 z-30 my-4 bg-purple-500 flex gap-5 flex-col justify-center items-center rounded-md shadow-md border border-gray-500">
              <h2 className="text-white text-center text-2xl font-bold">
                {event.nombre_suborganizacion}
              </h2>
              <h3 className="text-white text-center font-semibold">
                {event.descripcion_suborganizacion}
              </h3>
            </div>
          </Link>
        ))}
      </div>

      <div className="md:pl-14 w-full relative top-3/4">
        <Footer />
      </div>
    </div>
  );
};
