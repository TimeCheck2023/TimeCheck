import React, { useState, useRef } from "react";
import { Link, Navigate } from "react-router-dom";
import { toast } from "react-toastify";

export const CodeVerification = () => {
  const [codigo, setCodigo] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredCode = codigo.join("");

    if (enteredCode === localStorage.getItem("codigo")) {
      toast.success("Código válido. ¡Puedes restablecer la contraseña!", {
        theme: "dark",
      });
      setRedirect(true);
      localStorage.removeItem("codigo");
      // Aquí puedes agregar la lógica adicional para restablecer la contraseña
    } else {
      toast.error("Código inválido. Inténtalo de nuevo.", {
        theme: "dark",
      });
    }
  };

  if (redirect) {
    return <Navigate to="/ResetPassword" />;
  }

  const handleChange = (index, value) => {
    const updatedCodigo = [...codigo];
    updatedCodigo[index] = value;
    setCodigo(updatedCodigo);

    if (value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleBackspace = (index, e) => {
    if (e.key === "Backspace" && !codigo[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-violet-950">
      <div className="w-1/4 h-auto bg-white p-8 rounded-md">
        <h1 className="text-2xl font-bold mb-4">Restablecer contraseña</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center p-4">
          <div className="flex justify-between gap-4">
            {codigo.map((digit, index) => (
              <input
                key={index}
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleBackspace(index, e)}
                className="border border-gray-300 rounded-md py-2 px-4 w-12 text-center"
                ref={(ref) => (inputRefs.current[index] = ref)}
              />
            ))}
          </div>
          <div className="flex justify-between gap-10 mt-4">
            <Link
              to="/ForgotPassword"
              className="bg-violet-500 hover:bg-violet-600 text-white font-semibold py-2 px-4 rounded-md">
              Volver
            </Link>
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
