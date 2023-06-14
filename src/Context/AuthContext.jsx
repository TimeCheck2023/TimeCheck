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
  const [image, setImage] = useState(null);
  const [emailUser, setEmailUser] = useState(null);
  const [nroUsuario, setNroUsuario] = useState(null);
  // const [nameOrg, setNameOrg] = useState(null);

  // const token = localStorage.getItem("token_login");

  // useEffect(() => {
  //   console.log("Número de documento actualizado:", nroDocumento);
  // }, [nroDocumento]);

  useEffect(() => {
    const token = localStorage.getItem("token_login");
    if (token) {
      const decoded = jwtDecode(token);
      setNroDocumento(decoded.payload.nro_documento_usuario); // Actualizar el número de documento primero
      setIdOrg(decoded.payload.id_organización);
      setIdSubOrg(decoded.payload.id_suborganizacion);
      setUserType(decoded.payload.EsUsuario);
      setRol(decoded.payload.rol);
      setCorreo(decoded.payload.correo);
      setImage(decoded.payload.image_url);
      // console.log(decoded.payload);
      setEmailUser(decoded.payload.correo);
      setNroUsuario(decoded.payload.nro_documento_usuario);

      // setNameOrg(data.message.nombre_organizacion);
    } else {
      // No hay token
    }
  }, []);

  const updateNroDocumento = (newNroDocumento) => {
    setNroDocumento(newNroDocumento);
  };

  const updateIdOrg = (newIdOrg) => {
    setIdOrg(newIdOrg);
  };

  const updateIdSubOrg = (newIdSubOrg) => {
    setIdSubOrg(newIdSubOrg);
  };

  const updateUserInfo = (newImageURL) => {
    setImage(newImageURL);
  };

  useEffect(() => {
    socket.on("connect", () => {
      // console.log("Conectado al servidor");
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        idOrg,
        idSubOrg,
        userType,
        rol,
        nroDocumento,
        socket,
        correo,
        updateNroDocumento,
        updateIdOrg,
        updateIdSubOrg,
        image,
        emailUser,
        nroUsuario,
        updateUserInfo,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
