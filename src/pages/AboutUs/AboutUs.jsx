import React from "react";
import { NavBarHome } from "../../components/NavBarHome/NavBarHome";
import { BodyAboutUs } from "../../components/BodyAboutUs/BodyAboutUs";
import { NavbarMobile } from "../../components/NavbarMobile/NavbarMobile";

export const AboutUs = () => {
  return (
    <div className="flex w-full h-full">
      <NavBarHome
        homeActive={false}
        AboutUsActive={true}
        ContactUsActive={false}
      />
      <NavbarMobile />
      <BodyAboutUs />
    </div>
  );
};
