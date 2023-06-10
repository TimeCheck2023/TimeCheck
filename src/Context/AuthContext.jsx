import React, { createContext, useState, useEffect } from "react";
import io from "socket.io-client";
import jwtDecode from "jwt-decode";
import { Navigate, useNavigate } from "react-router-dom";

const socket = io("https://timecheck.up.railway.app");

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [idOrg, setIdOrg] = useState(null);
  const [idSubOrg, setIdSubOrg] = useState(null);
  const [userType, setUserType] = useState(null);
  const [rol, setRol] = useState(null);
  const [nroDocumento, setNroDocumento] = useState(null);
  const [correo, setCorreo] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token_login");
    if (token) {
      const decoded = jwtDecode(token);
      setIdOrg(decoded.payload.id_organización);
      setIdSubOrg(decoded.payload.id_suborganizacion);
      // console.log(decoded.payload.id_suborganizacion);
      setUserType(decoded.payload.EsUsuario);
      setRol(decoded.payload.rol);
      setCorreo(decoded.payload.correo);
      setNroDocumento(decoded.payload.nro_documento_usuario);
    } else {
      // console.log("no hay token");
    }
  }, []);

  useEffect(() => {
    socket.on("connect", () => {
      // console.log("Conectado al servidor");
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{ idOrg, idSubOrg, userType, rol, nroDocumento, socket, correo }}>
      {children}
    </AuthContext.Provider>
  );
};
