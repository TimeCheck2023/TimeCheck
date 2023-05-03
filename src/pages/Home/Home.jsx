import React from "react";
import { BodyHome } from "../../components/Layout/BodyHome/BodyHome";
import { NavBarHome } from "../../components/Layout/NavBarHome/NavBarHome";
import { NavbarMobile } from "../../components/Layout/NavbarMobile/NavbarMobile";

export const Home = () => {
  return (
    <div className="flex w-full h-full">
      <NavBarHome homeActive={true} />
      <NavbarMobile />
      <BodyHome />
    </div>
  );
};
