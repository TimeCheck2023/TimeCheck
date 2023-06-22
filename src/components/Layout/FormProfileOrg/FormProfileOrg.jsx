import React, { useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../../Context/AuthContext";
import { useContext } from "react";

export const FormProfileOrg = ({ orgData, image, imageUrl, fetchUserData }) => {
  const [idOrg, setIdOrg] = useState(orgData.id_organización || 0);

  const [organizationName, setOrganizationName] = useState(
    orgData.nombre_organizacion || ""
  );
  const [organizationAddress, setOrganizationAddress] = useState(
    orgData.direccion_organizacion || ""
  );
  const [phoneNumber, setPhoneNumber] = useState(orgData.numero_telefono || "");
  const [email, setEmail] = useState(orgData.correo_organizacion || "");

  const { updateUserInfo } = useContext(AuthContext);

  const imageValid = imageUrl === null ? image : imageUrl;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `https://timecheck.up.railway.app/org/update/${idOrg}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            organization_name: organizationName,
            address_organization: organizationAddress,
            email_organization: email,
            numero_telefono: phoneNumber,
            device: "pc",
            image_url: imageValid,
          }),
        }
      );

      const data = await response.json();
      console.log(data);
      if (data.error) {
        toast.error("Error al actualizar el perfil", {
          theme: "dark",
        });
      } else {
        // setEmailUpdate(data.data.recordsets[0][0].mensaje);
        // console.log(data.data.recordsets[0][0].mensaje);
        updateUserInfo(imageValid);
        // console.log(imageValid);
        toast.success("Perfil actualizado exitosamente", {
          theme: "dark",
          autoClose: 100, // Duración de la alerta en milisegundos (3 segundos en este caso)
        });
        fetchUserData();

        if (data.data.recordsets[0][0].mensaje === "cambiado") {
          toast.info("Necesitas volver a iniciar sesión!", {
            autoClose: 2000,
            theme: "dark",
          });
          // setTimeout(() => {
          //   localStorage.removeItem("token_login");

          //   // Redirigir al usuario a la página de inicio de sesión
          //   navigate(`/SingIn`);
          // }, 2000);
        }
      }
    } catch (error) {
      console.error("Error al realizar la solicitud", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border flex flex-col xl:gap-10 xl:px-20 xl:pt-8 h-5/6 border-neutral-300 mx-2 my-2">
      <div className="flex flex-col gap-2 py-2 px-2">
        <label htmlFor="organizationName">Nombre de la Organización:</label>
        <input
          type="text"
          id="organizationName"
          name="organizationName"
          value={organizationName}
          onChange={(e) => setOrganizationName(e.target.value)}
          className="border rounded-sm text-sm py-3 md:py-2 px-2"
          placeholder="Nombre de la organización..."
          required
        />
      </div>
      <div className="flex flex-col gap-2 py-2 px-2">
        <label htmlFor="organizationAddress">
          Dirección de la Organización:
        </label>
        <input
          type="text"
          id="organizationAddress"
          name="organizationAddress"
          value={organizationAddress}
          onChange={(e) => setOrganizationAddress(e.target.value)}
          className="border rounded-sm text-sm py-3 md:py-2 px-2"
          placeholder="Dirección de la organización..."
          required
        />
      </div>
      <div className="flex flex-col gap-2 py-2 px-2">
        <label htmlFor="phoneNumber">Número de teléfono:</label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="border rounded-sm text-sm py-3 md:py-2 px-2"
          placeholder="Número de teléfono..."
          required
        />
      </div>
      <div className="flex flex-col gap-2 py-2 px-2">
        <label htmlFor="email">Correo electrónico de la Organización:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border rounded-sm text-sm py-3 md:py-2 px-2"
          placeholder="ejemplo@ejemplo.com"
          required
        />
      </div>
      <div className="flex justify-center mt-4 xl:mt-12 mb-32">
        <button
          type="submit"
          className="px-20 py-2 bg-violet-600 text-white font-semibold rounded-md hover:bg-violet-700">
          Actualizar
        </button>
      </div>
    </form>
  );
};
