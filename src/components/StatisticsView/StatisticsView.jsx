import React from 'react'
import { Footer } from '../Footer/Footer'

export const StatisticsView = () => {
  return (
    <div className='w-full h-full flex items-center flex-col gap-12'>
    <div className='mt-2'>
      <h1 className='pl-20 text-2xl lg:text-5xl font-semibold'>Estadisticas de los eventos</h1>
    </div>
   <div className='pl-14 w-full relative top-3/4'>
   <Footer/>
   </div>
  </div>
  )
}
