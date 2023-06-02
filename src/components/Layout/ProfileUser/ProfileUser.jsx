import React, { useEffect, useState } from "react";
import { SlideBarUser } from "../SlideBarUser/SlideBarUser";
import { NavbarMobileUser } from "../NavbarMobileUser/NavbarMobileUser";
import { Navigate, useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { BodyProfileUser } from "../BodyProfileUser/BodyProfileUser";
import { SlideBar } from "../SlideBar/SlideBar";

export const ProfileUser = () => {
  const [nroDocumento, setNroDocumento] = useState(null);
  const [idOrg, setIdOrg] = useState(null);
  const [typeUser, setTypeUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token_login");
    if (!token) {
      navigate("/"); // Redirigir al usuario a la página de inicio de sesión
    } else {
      const decoded = jwtDecode(token);
      // console.log(decoded);
      setIdOrg(decoded.payload.id_organización);
      setNroDocumento(decoded.payload.nro_documento_usuario);
      setTypeUser(decoded.payload.EsUsuario);
      // console.log(nroDocumento);
    }
  }, [nroDocumento]);

  const user = localStorage.getItem("token_login");

  return (
    <div className="flex w-full h-full">
      {typeUser == 1 ? (
        <SlideBarUser activeProfile={true} />
      ) : (
        <SlideBar activeProfile={true} />
      )}

      <NavbarMobileUser />
      <BodyProfileUser
        nroDocumento={nroDocumento}
        idOrg={idOrg}
        typeUser={typeUser}
      />
    </div>
  );
};
