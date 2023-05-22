import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";

const ChangePasswordForm = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();

    // Realizar las validaciones aquí
    if (newPassword !== confirmPassword) {
      // Las contraseñas no coinciden, muestra una alerta o mensaje de error
      return;
    }

    // Realizar la lógica de cambio de contraseña aquí
    // Puedes usar las variables de estado currentPassword, newPassword, confirmPassword
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
      <div className="flex justify-center">
        <button
          type="submit"
          className="px-4 py-2 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700">
          Cambiar contraseña
        </button>
      </div>
    </form>
  );
};

export default ChangePasswordForm;
