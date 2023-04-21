import React from 'react'
import { SlideBar } from '../../components/SlideBar/SlideBar'
import { StatisticsView } from '../../components/StatisticsView/StatisticsView'

export const Statistics = () => {
  return (
    <div className='w-full h-screen'>
    <SlideBar activeEvent={false} activeConfig={false} activeGroup={false} activeNotify={false} activeStats={true}/>
    <StatisticsView/>
    </div>
  )
}
