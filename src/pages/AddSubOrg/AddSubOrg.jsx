import React from 'react'
import { SlideBar } from '../../components/Layout/SlideBar/SlideBar'
import { StatisticsView } from '../../components/UI/StatisticsView/StatisticsView'
import { NavbarMobileUser } from '../../components/Layout/NavbarMobileUser/NavbarMobileUser'
import { BodyAddSubOrg } from '../../components/Layout/BodyAddSubOrg/BodyAddSubOrg'

export const AddSubOrg = () => {
  return (
    <div className="w-full h-screen">
      <SlideBar
        activeEvent={false}
        activeConfig={false}
        activeGroup={true}
        activeNotify={false}
        activeStats={false}
      />
      <BodyAddSubOrg/>
      <NavbarMobileUser />
    </div>
  )
}
