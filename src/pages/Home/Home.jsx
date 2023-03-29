import React from "react";
import { BodyHome } from "../../components/BodyHome/BodyHome";
import { NavBarHome } from "../../components/NavBarHome/NavBarHome";

export const Home = () => {
  return (
    <div className="flex w-screen bg-slate-500">
      <NavBarHome />
      <BodyHome />
    </div>
  );
};
