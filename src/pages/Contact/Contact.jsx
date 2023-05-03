import React from "react";
import { NavBarHome } from "../../components/NavBarHome/NavBarHome";
import { BodyContactUs } from "../../components/BodyContactUs/BodyContactUs";
import { NavbarMobile } from "../../components/NavbarMobile/NavbarMobile";

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
