import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate(); // Cambio en el hook de navegación

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(email);

    if (email === "") {
      setErrorMessage("Por favor ingrese un correo electrónico!");
      setSuccessMessage("");
      return;
    } else {
      setErrorMessage("");
      fetch("https://timecheck.up.railway.app/Auth/verificacionEmail", {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);

          if (data.error) {
            toast.error(error, {
              theme: "dark",
            });
          } else {
            toast.success("Se envío el correo de recuperación con exito!");
            localStorage.setItem("codigo", data.message.codigo);
            localStorage.setItem(
              "nroDocumento",
              data.message.nro_documento_usuario
            );
            navigate("/CodeVerification");
          }
        });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-violet-950">
      <div className="w-1/4 h-auto bg-white p-8 rounded-md">
        <h1 className="text-2xl font-bold mb-4">Restablecer contraseña</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center p-4">
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded-md py-2 px-4 mb-4 w-full"
          />
          <div className="flex justify-between gap-10">
            <Link
              to="/SingIn"
              type="submit"
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
        {successMessage && (
          <p className="text-green-500 mt-4">{successMessage}</p>
        )}
        {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default ForgotPassword;
