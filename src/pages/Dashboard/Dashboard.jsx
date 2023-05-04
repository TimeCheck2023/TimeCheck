import React from 'react'
import { SlideBar } from '../../components/Layout/SlideBar/SlideBar';
import { EventsVist } from '../../components/Layout/EventsVist/EventsVist';
import { UserVist } from '../../components/Layout/UserVist/UserVist';
import { NavbarMobileUser } from '../../components/Layout/NavbarMobileUser/NavbarMobileUser';
import { SlideBarUser } from '../../components/Layout/SlideBarUser/SlideBarUser';

export const Dashboard = () => {
  return (
    <div className='w-full h-screen'>
    {/* <SlideBar activeEvent={true} activeConfig={false} activeGroup={false} activeNotify={false} activeStats={false}/> */}
    <SlideBarUser activeHome={true} activeAboutUs={false} activeContactUs={false} activeNotify={false} />
    {/* <EventsVist/>  */}
    <UserVist/>
    <NavbarMobileUser/>
    </div>
  )
}
