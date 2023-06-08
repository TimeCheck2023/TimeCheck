import React, { createContext, useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io('https://timecheck.up.railway.app')

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  
    useEffect(() => {

    socket.on("connect", () => {
      console.log("Conectado al servidor");
    });

    // Cierre de la conexión del socket cuando se desmonta el componente
    // return () => {
    //   socket.disconnect();
    // };
  }, []);

  return (
    <AuthContext.Provider value={{ socket }}>{children}</AuthContext.Provider>
  );
};
