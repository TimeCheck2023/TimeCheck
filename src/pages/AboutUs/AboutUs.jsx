import React from "react";
import { NavBarHome } from "../../components/Layout/NavBarHome/NavBarHome";
import { BodyAboutUs } from "../../components/Layout/BodyAboutUs/BodyAboutUs";
import { NavbarMobile } from "../../components/Layout/NavbarMobile/NavbarMobile";

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
