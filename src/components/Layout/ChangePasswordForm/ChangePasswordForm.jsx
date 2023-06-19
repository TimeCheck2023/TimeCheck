import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { toast } from "react-toastify";

const ChangePasswordForm = ({ nroDocumento, typeUser, correo }) => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Nuevo estado para controlar el loader
  const [errorMessage, setErrorMessage] = useState("");
  // console.log(correo);

  const handleCurrentPasswordChange = (e) => {
    setCurrentPassword(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Realizar las validaciones aquí
    if (newPassword !== confirmPassword) {
      toast.error("Las contraseñas deben coincidir");
      setErrorMessage("Las contraseñas no coinciden");
      return;
    }

    try {
      let url = "";
      let requestBody = {};

      // Validar el tipo de usuario y asignar la URL y el cuerpo de la solicitud en consecuencia
      if (typeUser === 1) {
        url =
          "https://time-check.azurewebsites.net/api/password/UpdatePasswordUser";
        requestBody = {
          id: nroDocumento,
          contraseñaActual: currentPassword,
          contraseñaNueva: newPassword,
        };
      } else if (typeUser === 2) {
        url =
          "https://time-check.azurewebsites.net/api/password/UpdatePasswordOrg";
        requestBody = {
          Correo: correo,
          contraseñaActual: currentPassword,
          contraseñaNueva: newPassword,
        };
      }

      setIsLoading(true); // Mostrar el loader

      // Realizar la llamada al endpoint del backend para actualizar la contraseña
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.text();

      if (!response.ok) {
        toast.error(data);
        // console.log(data);
        setErrorMessage("");
      } else {
        // Contraseña actualizada correctamente
        setConfirmPassword("");
        setNewPassword("");
        setCurrentPassword("");
        setErrorMessage("");
        toast.success(data);
      }
    } catch (error) {
      // Error al actualizar la contraseña
      console.error(error);
      setErrorMessage("Error al actualizar la contraseña");
    } finally {
      setIsLoading(false); // Ocultar el loader
    }
  };

  return (
    <form
      className="max-w-md mx-auto mt-8 xl:mt-40 mb-32"
      onSubmit={handleSubmit}>
      <div className="my-10">
        <label htmlFor="currentPassword" className="font-bold mb-2">
          Contraseña actual
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            id="currentPassword"
            name="currentPassword"
            value={currentPassword}
            onChange={handleCurrentPasswordChange}
            className="border rounded-sm text-sm py-2 px-4 w-full"
            placeholder="Contraseña actual"
            required
          />
          <span
            className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
            onClick={toggleShowPassword}>
            {showPassword ? (
              <AiOutlineEyeInvisible size={20} />
            ) : (
              <AiOutlineEye size={20} />
            )}
          </span>
        </div>
      </div>
      <div className="my-10">
        <label htmlFor="newPassword" className="font-bold mb-2">
          Nueva contraseña
        </label>
        <input
          type={showPassword ? "text" : "password"}
          id="newPassword"
          name="newPassword"
          value={newPassword}
          onChange={handleNewPasswordChange}
          className="border rounded-sm text-sm py-2 px-4 w-full"
          placeholder="Nueva contraseña"
          required
        />
      </div>
      <div className="my-10">
        <label htmlFor="confirmPassword" className="font-bold mb-2">
          Confirmar contraseña
        </label>
        <input
          type={showPassword ? "text" : "password"}
          id="confirmPassword"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          className="border rounded-sm text-sm py-2 px-4 w-full"
          placeholder="Confirmar contraseña"
          required
        />
      </div>
      {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}
      <div className="flex justify-center">
        <button
          type="submit"
          disabled={isLoading} // Deshabilitar el botón mientras se realiza la petición
          className="relative px-4 py-2 w-60 h-10 bg-violet-600 text-white font-semibold rounded-md hover:bg-violet-700">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white" />
            </div>
          )}
          {!isLoading && "Cambiar contraseña"}{" "}
        </button>
      </div>
    </form>
  );
};

export default ChangePasswordForm;
