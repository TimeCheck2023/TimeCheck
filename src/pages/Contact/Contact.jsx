import React from "react";
import { NavBarHome } from "../../components/Layout/NavBarHome/NavBarHome";
import { BodyContactUs } from "../../components/Layout/BodyContactUs/BodyContactUs";
import { NavbarMobile } from "../../components/Layout/NavbarMobile/NavbarMobile";
import { SlideBarUser } from "../../components/Layout/SlideBarUser/SlideBarUser";
import { NavbarMobileUser } from "../../components/Layout/NavbarMobileUser/NavbarMobileUser";

export const Contact = () => {
  const user = localStorage.getItem("token_login");

  return (
    <div className="flex w-full h-full flex-col">
      {user ? <SlideBarUser activeContactUs={true} /> : <NavBarHome />}
      {user ? <NavbarMobileUser /> : <NavbarMobile />}
      <BodyContactUs />
    </div>
  );
};
