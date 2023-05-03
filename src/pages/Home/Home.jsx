import React from "react";
import { BodyHome } from "../../components/BodyHome/BodyHome";
import { NavBarHome } from "../../components/NavBarHome/NavBarHome";
import { NavbarMobile } from "../../components/NavbarMobile/NavbarMobile";

export const Home = () => {
  return (
    <div className="flex w-full h-full">
      <NavBarHome homeActive={true} />
      <NavbarMobile />
      <BodyHome />
    </div>
  );
};
