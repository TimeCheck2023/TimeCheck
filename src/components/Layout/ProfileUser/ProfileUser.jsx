import React, { useEffect } from "react";
import { SlideBarUser } from "../SlideBarUser/SlideBarUser";
import { NavbarMobileUser } from "../NavbarMobileUser/NavbarMobileUser";
import { Navigate, useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { BodyProfileUser } from "../BodyProfileUser/BodyProfileUser";

export const ProfileUser = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token_login");
    if (!token) {
      navigate("/"); // Redirigir al usuario a la página de inicio de sesión
    } else {
      const decoded = jwtDecode(token);
    }
  }, [navigate]);

  const user = localStorage.getItem("token_login");

  return (
    <div className="flex w-full h-full">
      <SlideBarUser activeProfile={true} />

      <NavbarMobileUser />
      <BodyProfileUser />
    </div>
  );
};
