import React from "react";
import { NavBarHome } from "../../components/NavBarHome/NavBarHome";
import { BodyContactUs } from "../../components/BodyContactUs/BodyContactUs";

export const Contact = () => {
  return (
    <div className="flex w-screen h-screen">
      <NavBarHome
        homeActive={false}
        AboutUsActive={false}
        ContactUsActive={true}
      />
      <BodyContactUs />
    </div>
  );
};
