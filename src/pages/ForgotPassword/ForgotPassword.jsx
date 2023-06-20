import React, { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if(email === ""){
        setErrorMessage("Por favor ingrese un correo electrónico!")
        setSuccessMessage("");

    }else if (email === "example@example.com") {
        setSuccessMessage("Se ha enviado un correo de restablecimiento de contraseña a tu dirección de correo electrónico.");
        setErrorMessage("");
      } else {
        setSuccessMessage("");
        setErrorMessage("El correo electrónico ingresado no es válido.");
      }

    // Aquí puedes implementar la lógica para enviar el correo de restablecimiento de contraseña

    // Ejemplo: Validar el correo electrónico y mostrar un mensaje de éxito o error
    
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-violet-950">
      <div className="w-1/4 h-auto bg-white p-8 rounded-md">
        <h1 className="text-2xl font-bold mb-4">Restablecer contraseña</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center p-4"
        >
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded-md py-2 px-4 mb-4 w-full"
          />
          <div className="flex justify-between gap-10">
            <Link to="/SignIn"
              type="submit"
              className="bg-violet-500 hover:bg-violet-600 text-white font-semibold py-2 px-4 rounded-md"
            >
              Volver
            </Link>

            <button
              type="submit"
              className="bg-violet-500 hover:bg-violet-600 text-white font-semibold py-2 px-4 rounded-md"
            >
              Restablecer contraseña
            </button>
          </div>
        </form>
        {successMessage && (
          <p className="text-green-500 mt-4">{successMessage}</p>
        )}
        {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default ForgotPassword;
