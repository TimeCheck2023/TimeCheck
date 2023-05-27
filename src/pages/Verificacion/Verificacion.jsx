import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const Verificacion = () => {
  const { codigo } = useParams();
  const codigoNumero = codigo.split("=")[1];

  useEffect(() => {
    const verificarCorreo = async () => {
      try {
        const response = await fetch(
          "https://timecheck.up.railway.app/Auth/verificacion",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ codigo: codigoNumero }),
          }
        )
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            if (data.error) {
              toast.error(`Error: ${data.error}`, {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
              });
            } else {
              toast.success("Tu correo ha sido verificado exitosamente!", {
                position: "top-center",
                theme: "dark",
                hideProgressBar: false,
                progress: false,
                onClose: () => {
                  setTimeout(() => {
                    navigate("/SingIn");
                  }, 3000); // Redireccionar después de 3 segundos (3000 milisegundos)
                },
              });
            }
          });
      } catch (error) {
        console.log("Error al verificar el correo:", error);
      }
    };

    verificarCorreo();
    // console.log(codigoNumero); // Aquí se imprimirá el valor correcto de 'codigo'
  }, [codigo]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-bold mb-4">Verificación de Correo</h1>
        <p className="mb-4">
          Estamos verificando tu correo electrónico. Por favor, espera un
          momento...
        </p>
        <div className="flex justify-center">
          <svg
            className="animate-spin h-10 w-10 text-purple-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24">
            <path
              className="opacity-80"
              fill="#9333ea"
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8-8-3.59-8-8zm7-6h2v7h-2zm1 9h1v1h-1v-1zm-1-3h1v2h-0v-2z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Verificacion;
