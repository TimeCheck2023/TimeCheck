import React from "react";
import { NavBarHome } from "../../components/Layout/NavBarHome/NavBarHome";
import { BodyAboutUs } from "../../components/Layout/BodyAboutUs/BodyAboutUs";
import { NavbarMobile } from "../../components/Layout/NavbarMobile/NavbarMobile";
import { SlideBarUser } from "../../components/Layout/SlideBarUser/SlideBarUser";
import { NavbarMobileUser } from "../../components/Layout/NavbarMobileUser/NavbarMobileUser";

export const AboutUs = () => {
  const user = localStorage.getItem("token_login");

  return (
    <div className="flex w-full h-full">
      {user ? <SlideBarUser activeAboutUs={true} /> : <NavBarHome />}
      {user ? <NavbarMobileUser /> : <NavbarMobile />}
      <BodyAboutUs />
    </div>
  );
};
