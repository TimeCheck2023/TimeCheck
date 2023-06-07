import React from "react";
import { Footer } from "../../Layout/Footer/Footer";
import { VictoryChart, VictoryBar,VictoryTheme, VictoryAxis } from "victory";

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

export const StatisticsGraphics = () =>{
  return(
    <div>
        <h1 className="text-slate-950 text-3xl text-center font-bold">Estadisticas de los Eventos</h1>
        <div className="w-2/5 h-1.3 z-20 my-4 mx-5 shadow-md border-violet-500">
          <h1 className="text-violet-500 text-4xl font-bold">Charla Soft</h1>
          <h2 className="text-color1 text-3xl font-bold">500</h2>
          <VictoryChart theme={VictoryTheme.material} domainPadding={{ x: 100 }}>
            <VictoryBar style={{
              data: {
                fill: ({ index }) => colorScale[index % colorScale.length], // Asigna colores personalizados a cada barra
              },
            }}
            barWidth={15}
            cornerRadius={{ top: 5, bottom: 5 }}
            animate={{
              duration:3000,
              onLoad:{
              duration:3000,
              },
            }}
            horizontal data={data} x='month' y='earnings' />
          </VictoryChart>
        </div>
        <div className="md:pl-14 w-full relative top-3/4">
        <Footer />
      </div>
    </div>
  )
}

{/* <VictoryChart theme={VictoryTheme.material} width={190} height={150} padding={{ top:20, bottom:50, left:40, right:50}}  >
            <VictoryBar 
               style={{
                data: {
                  fill: ({ index }) => colorScale[index % colorScale.length], // Asigna colores personalizados a cada barra
                  },
                  }}
                  horizontal
                  data={data}
                  
                  x="month"
                  y="earnings"
                  
            />
          </VictoryChart> */}