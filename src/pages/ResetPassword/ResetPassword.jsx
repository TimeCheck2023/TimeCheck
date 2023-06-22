import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nroDocumento, setNroDocumento] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    setNroDocumento(localStorage.getItem("nroDocumento"));

    if (newPassword === "" || confirmPassword === "") {
      toast.error("Por favor, completa todos los campos.", {
        theme: "dark",
      });
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("Las contraseñas no coinciden. Inténtalo de nuevo.", {
        theme: "dark",
      });
      return;
    }

    if (newPassword.length <= 5 || confirmPassword.length <= 5) {
      toast.error("La contraseña debe ser mayor a 6 digitos!", {
        theme: "dark",
      });
      return;
    }

    console.log(nroDocumento);

    fetch("https://timecheck.up.railway.app/Auth/CambioPassword", {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password: newPassword,
        nro_documento_usuario: nroDocumento,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.error) {
          toast.error(data.error);
        } else {
          toast.success("Se cambió la contraseña exitosamente!", {
            theme: "dark",
          });
          localStorage.removeItem("nroDocumento");
          setInterval(() => {
            navigate("/SingIn");
          }, 5000);
        }
      });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-violet-950">
      <div className="w-1/4 h-auto bg-white p-8 rounded-md">
        <h1 className="text-2xl font-bold mb-4">Restablecer contraseña</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center p-4">
          <input
            type="password"
            placeholder="Nueva contraseña"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="border border-gray-300 rounded-md py-2 px-4 mb-4 w-full"
          />
          <input
            type="password"
            placeholder="Confirmar contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="border border-gray-300 rounded-md py-2 px-4 mb-4 w-full"
          />
          <div className="flex justify-between gap-10">
            <button
              type="submit"
              className="bg-violet-500 hover:bg-violet-600 text-white font-semibold py-2 px-4 rounded-md">
              Restablecer contraseña
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
