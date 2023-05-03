import React from 'react'
import { SlideBar } from '../../components/Layout/SlideBar/SlideBar'
import { StatisticsView } from '../../components/UI/StatisticsView/StatisticsView'

export const Statistics = () => {
  return (
    <div className='w-full h-screen'>
    <SlideBar activeEvent={false} activeConfig={false} activeGroup={false} activeNotify={false} activeStats={true}/>
    <StatisticsView/>
    </div>
  )
}
