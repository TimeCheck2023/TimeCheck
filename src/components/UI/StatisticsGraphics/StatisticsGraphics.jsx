import React from "react";
import { Footer } from "../../Layout/Footer/Footer";
import { VictoryChart, VictoryBar, VictoryTheme, VictoryAxis } from "victory";
import { SlideBar } from "../../Layout/SlideBar/SlideBar";
import { NavbarMobileUser } from "../../Layout/NavbarMobileUser/NavbarMobileUser";
import { useLocation, useParams } from "react-router-dom";
import { useEffect } from "react";



const colorScale = ["#7032DD", "#E697FF"];



// useEffect(() => {
//   const fetchSubsOrg = async () => {
//     try {
//       const response = await fetch(
//         `https://timecheck.up.railway.app/SubOrg/${id}`
//       );
//       const data = await response.json();
//       console.log(data)
//       // setEvents(data.message);
//       // console.log(data.message);
//       // console.log(data.message[0]);
//       // setNombreOrg(data.message[0].nombre_suborganizacion);
//       // setDescripcionSubOrg(data.message[0].descripcion_suborganizacion);
//       // setIdSubOrg(data.message[0].id_suborganizacion);
//       console.log(data.message[0].id_suborganizacion);
//       // console.log(data.message);
//       // setUserData(data.message);

//       // setImage(data.message.image_url);
//       // setLoading(false);
//     } catch (error) {
//       console.log(error);
//       // setLoading(false);
//     }
//   };

//   // if () {
//   //   fetchSubsOrg();
//   // }
// }, []);

// useEffect(() => {
//   console.log(id);
// }, [id]);

const data = [
  {
    month: 1,
    earnings: 950,
  },
  {
    month: 2,
    earnings: 500,
  },
];

export const StatisticsGraphics = () => {

  const { id } = useParams();


  console.log(id)

  return (
    <>
      <SlideBar />
      <NavbarMobileUser />

      <div className="md:ml-24">
        <h1 className="text-slate-950 text-3xl text-center font-bold">
          Estadisticas de los Eventos
        </h1>
        <div className="w-4/5 flex flex-col justify-center items-center md:w-2/5 h-1.3 z-20 my-4 mx-5 shadow-lg border-violet-500">
          <h1 className="ml-8 mt-8 text-violet-500 text-4xl font-bold">
            Presentación de proyectos
          </h1>
          {/* <h2 className="ml-8 text-3xl font-bold">500</h2> */}
          <h2 className="ml-8 text-slate-950 text-2xl font-bold">Asistentes</h2>
          <VictoryChart
            theme={VictoryTheme.material}
            domainPadding={{ x: 100 }}
          >
            <VictoryBar
              style={{
                data: {
                  fill: ({ index }) => colorScale[index % colorScale.length], // Asigna colores personalizados a cada barra
                },
              }}
              barWidth={15}
              cornerRadius={{ top: 5, bottom: 5 }}
              animate={{
                duration: 3000,
                onLoad: {
                  duration: 3000,
                },
              }}
              horizontal
              data={data}
              x="month"
              y="earnings"
            />
          </VictoryChart>
        </div>
      </div>
      <div className="md:pl-14 w-full relative top-3/4">
        <Footer />
      </div>
    </>
  );
};
