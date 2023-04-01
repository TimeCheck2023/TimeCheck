import React from "react";
import { NavBarHome } from "../../components/NavBarHome/NavBarHome";
import { BodyAboutUs } from "../../components/BodyAboutUs/BodyAboutUs";

export const AboutUs = () => {
  return (
    <div className="flex w-screen h-screen">
      <NavBarHome />
      <BodyAboutUs />
    </div>
  );
};
