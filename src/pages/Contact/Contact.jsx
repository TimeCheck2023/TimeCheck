import React from "react";
import { NavBarHome } from "../../components/Layout/NavBarHome/NavBarHome";
import { BodyContactUs } from "../../components/Layout/BodyContactUs/BodyContactUs";
import { NavbarMobile } from "../../components/Layout/NavbarMobile/NavbarMobile";

export const Contact = () => {
  return (
    <div className="flex w-full h-full">
      <NavBarHome
        homeActive={false}
        AboutUsActive={false}
        ContactUsActive={true}
      />
      <NavbarMobile />
      <BodyContactUs />
    </div>
  );
};
