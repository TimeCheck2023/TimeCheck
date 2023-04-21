import React from 'react'
import { SlideBar } from '../../components/SlideBar/SlideBar'
import { EventsVist } from '../../components/EventsVist/EventsVist'

export const Events = () => {
  return (
    <div className='w-full h-screen'>
    <SlideBar activeEvent={true} activeConfig={false} activeGroup={false} activeNotify={false} activeStats={false}/>
    <EventsVist/>
    </div>
  )
}
