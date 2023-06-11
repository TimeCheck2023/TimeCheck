import React from "react";
import { Footer } from "../../Layout/Footer/Footer";
import { VictoryChart, VictoryBar, VictoryTheme, VictoryAxis } from "victory";
import { SlideBar } from "../../Layout/SlideBar/SlideBar";
import { NavbarMobileUser } from "../../Layout/NavbarMobileUser/NavbarMobileUser";

const colorScale = ["#7032DD", "#E697FF"];

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
            Charla Soft
          </h1>
          <h2 className="ml-8 text-3xl font-bold">500</h2>
          <h2 className="ml-8 text-slate-950 text-2xl font-bold">Asistentes</h2>
          <VictoryChart
            theme={VictoryTheme.material}
            domainPadding={{ x: 100 }}>
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

{
}
