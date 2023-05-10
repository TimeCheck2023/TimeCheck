import { SlideBar } from "../../components/Layout/SlideBar/SlideBar";
import { EventsVist } from "../../components/Layout/EventsVist/EventsVist";
import { UserVist } from "../../components/Layout/UserVist/UserVist";
import { NavbarMobileUser } from "../../components/Layout/NavbarMobileUser/NavbarMobileUser";
import { SlideBarUser } from "../../components/Layout/SlideBarUser/SlideBarUser";
import React, { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";

export const Dashboard = () => {
  const [userType, setUserType] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token_login");
    if (!token) {
      window.location.href = "/"; // Redirigir al usuario a la página de inicio de sesión
    } else {
      const decoded = jwtDecode(token);
      setUserType(decoded.payload.esUsuario);
    }
  }, [history]);

  if (userType === 1) {
    return (
      <div className="w-full h-screen">
        <SlideBarUser
          activeHome={true}
          activeAboutUs={false}
          activeContactUs={false}
          activeNotify={false}
        />
        <UserVist />
        <NavbarMobileUser />
      </div>
    );
  } else if (userType === 2) {
    return (
      <div className="w-full h-screen">
        <h2>Vista de organización</h2>
      </div>
    );
  } else {
    return null; // Mostrar pantalla de carga mientras se comprueba el token
  }
};
