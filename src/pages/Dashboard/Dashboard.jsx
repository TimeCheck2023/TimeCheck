import { SlideBar } from "../../components/Layout/SlideBar/SlideBar";
import { EventsVist } from "../../components/Layout/EventsVist/EventsVist";
import { UserVist } from "../../components/Layout/UserVist/UserVist";
import { NavbarMobileUser } from "../../components/Layout/NavbarMobileUser/NavbarMobileUser";
import { SlideBarUser } from "../../components/Layout/SlideBarUser/SlideBarUser";
import React, { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";

export const Dashboard = () => {
  const [userType, setUserType] = useState(null);
  const [idOrg, setIdOrg] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [rol, setRol] = useState(null);
  const [idSubOrg, setIdSubOrg] = useState(null);

  const navigate = useNavigate();

  const { updateNroDocumento, updateIdOrg, updateIdSubOrg } =
    useContext(AuthContext);

  useEffect(() => {
    const token = localStorage.getItem("token_login");

    if (!token) {
      navigate("/"); // Redirigir al usuario a la página de inicio de sesión
    } else {
      const decoded = jwtDecode(token);
      console.log(decoded.payload)
      setIdOrg(decoded.payload.id_organización);
      setIdSubOrg(decoded.payload.id_suborganizacion);
      setUserType(decoded.payload.EsUsuario);
      setRol(decoded.payload.rol);
      updateNroDocumento(decoded.payload.nro_documento_usuario);
      updateIdOrg(decoded.payload.id_organización);
      updateIdSubOrg(decoded.payload.id_suborganizacion);

      const hasShownToast = localStorage.getItem("hasShownToast");
      if (hasShownToast) {
        setShowToast(true);
        localStorage.setItem("hasShownToast", "true");
      }
    }
  }, [navigate]);

  useEffect(() => {
    if (showToast) {
      toast.success(
        "¡Bienvenido de nuevo! Has iniciado sesión correctamente.",
        {
          theme: "dark",
        }
      );
      localStorage.removeItem("hasShownToast");
      setShowToast(false);
    }
  }, [showToast]);

  if (userType === 1) {
    if (rol === 0) {
      return (
        <div className="w-full h-screen">
          <SlideBarUser
            activeHome={true}
            activeAboutUs={false}
            activeContactUs={false}
            activeNotify={false}
          />
          <EventsVist userType={userType} idSubOrg={idSubOrg} />
          <NavbarMobileUser />
        </div>
      );
    } else {
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
    }
  } else if (userType === 2) {
    return (
      <div className="w-full h-screen">
        <SlideBar
          activeConfig={false}
          activeEvent={true}
          activeGroup={false}
          activeNotify={false}
          activeStats={false}
        />
        <EventsVist userType={userType} idOrg={idOrg} />
        <NavbarMobileUser />
      </div>
    );
  } else {
    return null; // Mostrar pantalla de carga mientras se comprueba el token
  }
};
