import React from "react";
import { SlideBarUser } from "../../components/Layout/SlideBarUser/SlideBarUser";
import { NavbarMobileUser } from "../../components/Layout/NavbarMobileUser/NavbarMobileUser";
import { BodyNotifications } from "../../components/Layout/BodyNotifications/BodyNotifications";

export const Notifications = () => {
  return (
    <div className="flex w-full h-full">
      <SlideBarUser activeNotify={true} />

      <NavbarMobileUser />
      <BodyNotifications />
    </div>
  );
};
