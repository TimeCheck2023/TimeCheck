import React from 'react'
import { SlideBar } from '../../components/Layout/SlideBar/SlideBar'
import { EventsVist } from '../../components/Layout/EventsVist/EventsVist'
import { UserVist } from '../../components/Layout/UserVist/UserVist'
import { NavbarMobile } from "../../components/Layout/NavbarMobile/NavbarMobile";
import { NavbarMobileUser } from '../../components/Layout/NavbarMobileUser/NavbarMobileUser';

export const Dashboard = () => {
  return (
    <div className='w-full h-screen'>
    <SlideBar activeEvent={true} activeConfig={false} activeGroup={false} activeNotify={false} activeStats={false}/>
    {/* <EventsVist/>  */}
    <UserVist/>
    {/* <NavbarMobile /> */}
    <NavbarMobileUser/>
    </div>
  )
}
