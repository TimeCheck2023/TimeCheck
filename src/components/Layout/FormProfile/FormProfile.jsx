import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

export const FormProfile = ({ userData }) => {
  const [fullName, setFullName] = useState(
    userData.nombre_completo_usuario || ""
  );
  const [tipoPoblacion, setTipoPoblacion] = useState(
    userData.tipo_poblacion_usuario || ""
  );
  const [tipoDocumento, setTipoDocumento] = useState(
    userData.tipo_documento_usuario || ""
  );
  const [documentNumber, setDocumentNumber] = useState(
    userData.nro_documento_usuario || ""
  );
  const [direccion, setDireccion] = useState(userData.direccion_usuario || "");
  const [correoElectronico, setCorreoElectronico] = useState(
    userData.correo_usuario || ""
  );
  const [telefono, setTelefono] = useState(userData.telefono_usuario || "");

  useEffect(() => {
    setFullName(userData.nombre_completo_usuario || "");
    setTipoPoblacion(userData.tipo_poblacion_usuario || "");
    setTipoDocumento(userData.tipo_documento_usuario || "");
    setDocumentNumber(userData.nro_documento_usuario || "");
    setDireccion(userData.direccion_usuario || "");
    setCorreoElectronico(userData.correo_usuario || "");
    setTelefono(userData.telefono_usuario || "");
  }, [userData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Realizar la lógica de actualización del perfil aquí
    // Puedes usar las variables de estado fullName, tipoPoblacion, tipoDocumento, etc.
    try {
      const response = await fetch(
        `https://timecheck.up.railway.app/user/update/${documentNumber}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullName,
            documentType: tipoDocumento,
            emailAddress: correoElectronico,
            address: direccion,
            typeofpopulation: tipoPoblacion,
            device: "pc",
            image_url:"https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png"
          }),
        }
      ).then((response) => response.json())
      .then((data) => {

        if(data.error){
          toast.error("Error al actualizar el perfil", {
            theme: "dark",
          });
        }else{
          console.log(data)
          toast.success("Perfil actualizado exitosamente", {
            theme: "dark",
            autoClose: 1500, // Duración de la alerta en milisegundos (3 segundos en este caso)
          });
          // setTimeout(() => {
          //   window.location.reload();
          // }, 1500); // Retraso de 3 segundos antes de recargar la página
        }

      })
    } catch (error) {
      // Ocurrió un error durante la solicitud, puedes mostrar una notificación de error o realizar alguna acción adicional
      console.error("Error al realizar la solicitud", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border gap-1 h-5/6 border-neutral-300 mx-2 my-2">
      <div className="flex flex-col gap-2 py-2 px-2">
        <label htmlFor="fullName">Nombre completo:</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="border rounded-sm text-sm py-3 md:py-2 px-2"
          placeholder="Yuliam Andrey Osorio Puerta"
          required
        />
      </div>
      <div className="flex flex-col gap-2 py-2 px-2">
        <label htmlFor="tipoPoblacion">Tipo de Población:</label>
        <select
          id="tipoPoblacion"
          name="tipoPoblacion"
          value={tipoPoblacion}
          onChange={(e) => setTipoPoblacion(e.target.value)}
          className="border rounded-sm text-sm py-3 md:py-2 px-2"
          required>
          <option value="Indigena">Indigena</option>
          <option value="Víctima">Víctima</option>
          <option value="Afro">Afro</option>
          <option value="Desplazado">Desplazado</option>
          <option value="LGBTI">LGBTI</option>
          <option value="Discapacitado">Discapacitado</option>
          <option value="Ninguno">Ninguno</option>
        </select>
      </div>
      <div className="flex flex-col gap-2 py-2 px-2">
        <label htmlFor="tipoDocumento">Tipo de documento:</label>
        <select
          id="tipoDocumento"
          name="tipoDocumento"
          value={tipoDocumento}
          onChange={(e) => setTipoDocumento(e.target.value)}
          className="border rounded-sm text-sm py-3 md:py-2 px-2"
          required>
          <option value="Cédula de ciudadania">Cédula de ciudadania</option>
          <option value="Tarjeta de identidad">Tarjeta de identidad</option>
          <option value="Cédula de extranjeria">Cédula de extranjeria</option>
        </select>
      </div>
      <div className="flex flex-col gap-2 py-2 px-2">
        <label htmlFor="documentNumber">Número de documento:</label>
        <input
          type="number"
          id="documentNumber"
          name="documentNumber"
          value={documentNumber}
          onChange={(e) => setDocumentNumber(e.target.value)}
          className="border rounded-sm text-sm py-3 md:py-2 px-2"
          placeholder="1091884362"
          required
        />
      </div>
      <div className="flex flex-col gap-2 py-2 px-2">
        <label htmlFor="direccion">Dirección de residencia:</label>
        <input
          type="text"
          id="direccion"
          name="direccion"
          value={direccion}
          onChange={(e) => setDireccion(e.target.value)}
          className="border rounded-sm text-sm py-3 md:py-2 px-2"
          placeholder="Dirección Residencial"
          required
        />
      </div>
      <div className="flex flex-col gap-2 py-2 px-2">
        <label htmlFor="correoElectronico">Correo Electrónico:</label>
        <input
          type="email"
          id="correoElectronico"
          name="correoElectronico"
          value={correoElectronico}
          onChange={(e) => setCorreoElectronico(e.target.value)}
          className="border rounded-sm text-sm py-3 md:py-2 px-2"
          placeholder="yuliamwow@gmail.com"
          required
        />
      </div>
      <div className="flex justify-center mt-4 xl:mt-12 mb-32">
        <button
          type="submit"
          className="px-20 py-2 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700">
          Actualizar
        </button>
      </div>
    </form>
  );
};
