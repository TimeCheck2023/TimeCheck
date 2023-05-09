import React from "react";

export const FormOrg = ({ handleInputChange, errors }) => {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-5 mb-6 lg:mb-0 lg:my-10 lg:mx-20 justify-between">
        <div className="flex flex-col w-full ">
          <label htmlFor="fullName" className="font-bold">
            Nombre de la Organización<strong className="text-red-600">*</strong>
          </label>
          <input
            onChange={handleInputChange}
            id="fullName"
            name="fullName"
            className={`bg-blue-gray-50 border border-gray-300 shadow-md rounded-xl h-12 lg:w-4/5 p-2 hover:border-gray-400 focus:border-gray-600 focus:outline-none`}
            type="text"
            placeholder="Nombre Completo..."
          />
          {errors.fullName && (
            <p className="text-red-600 font-bold">{errors.fullName}</p>
          )}
        </div>
        <div className="flex flex-col w-full ">
          <label htmlFor="address" className="font-bold">
            Dirreción de la Organización
            <strong className="text-red-600">*</strong>
          </label>
          <input
            onChange={handleInputChange}
            id="address"
            name="address"
            className={`bg-blue-gray-50 border border-gray-300 shadow-md rounded-xl h-12 lg:w-4/5 p-2 hover:border-gray-400 focus:border-gray-600 focus:outline-none`}
            type="text"
            placeholder="Cra. 18 #7-58, Armenia, Quindío"
          />
          {errors.address && (
            <p className="text-red-600 font-bold">{errors.address}</p>
          )}
        </div>
      </div>

      <div className="flex lg:my-10 flex-col lg:flex-row gap-5 justify-between w-full">
        <div className="flex relative lg:left-20 w-full">
          <div className="flex flex-col w-full ">
            <label htmlFor="emailAddress" className="font-bold">
              Correo electronico
              <strong className="text-red-600">*</strong>
            </label>
            <input
              onChange={handleInputChange}
              id="emailAddress"
              name="emailAddress"
              className={`bg-blue-gray-50 border border-gray-300 shadow-md rounded-xl h-12 lg:w-4/5 p-2 hover:border-gray-400 focus:border-gray-600 focus:outline-none`}
              type="emailAddress"
              placeholder="correo@corre.com"
            />
            {errors.emailAddress && (
              <p className="text-red-600 font-bold">{errors.emailAddress}</p>
            )}
          </div>
        </div>{" "}
        <div className="flex w-full">
          <div className="flex flex-col w-full ">
            <label htmlFor="phone" className="font-bold">
              Telefono<strong className="text-red-600">*</strong>
            </label>
            <input
              onChange={handleInputChange}
              id="phone"
              name="phone"
              className={`bg-blue-gray-50 border border-gray-300 shadow-md rounded-xl h-12 lg:w-4/5 p-2 hover:border-gray-400 focus:border-gray-600 focus:outline-none`}
              type="number"
              placeholder="3211234567"
            />
            {errors.phone && (
              <p className="text-red-600 font-bold">{errors.phone}</p>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 lg:gap-0 lg:flex-row mt-6 lg:mt-10 lg:my-10 lg:mx-20 justify-between">
        <div className="flex w-full">
          <div className="flex flex-col w-full ">
            <label htmlFor="password" className="font-bold">
              Contraseña<strong className="text-red-600">*</strong>
            </label>
            <input
              onChange={handleInputChange}
              id="password"
              name="password"
              className={`bg-blue-gray-50 border border-gray-300 shadow-md rounded-xl h-12 lg:w-4/5 p-2 hover:border-gray-400 focus:border-gray-600 focus:outline-none`}
              type="password"
              placeholder="Contraseña..."
            />
            {errors.password && (
              <p className="text-red-600 font-bold">{errors.password}</p>
            )}
          </div>
        </div>
        <div className="flex w-full">
          <div className="flex flex-col w-full ">
            <label htmlFor="confirmPassword" className="font-bold">
              Confirmar contraseña
              <strong className="text-red-600">*</strong>
            </label>
            <input
              onChange={handleInputChange}
              id="confirmPassword"
              name="confirmPassword"
              className={`bg-blue-gray-50 border border-gray-300 shadow-md rounded-xl h-12 lg:w-4/5 p-2 hover:border-gray-400 focus:border-gray-600 focus:outline-none`}
              type="password"
              placeholder="Confirmar contraseña..."
            />
            {errors.confirmPassword && (
              <p className="text-red-600 font-bold">{errors.confirmPassword}</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
