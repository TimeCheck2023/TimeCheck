import React from "react";

export const FormUser = ({ handleInputChange, errors }) => {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-5 mb-6 lg:mb-0 lg:my-10 lg:mx-20 justify-between">
        <div className="flex flex-col w-full ">
          <label htmlFor="fullName" className="font-bold">
            Nombre Completo<strong className="text-red-600">*</strong>
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
        </div>{" "}
      </div>
      <div className="flex lg:my-10 flex-col lg:flex-row gap-5 justify-between w-full">
        <div className="flex relative lg:left-20 w-full">
          <div className="flex flex-col w-full ">
            <label htmlFor="documentType" className="font-bold">
              Tipo de documento:
              <strong className="text-red-600">*</strong>
            </label>
            <select
              name="documentType"
              id="documentType"
              onChange={handleInputChange}
              defaultValue="Cédula de ciudadania"
              className={`bg-blue-gray-50 border border-gray-300 shadow-md rounded-xl h-12 lg:w-4/5 p-2 hover:border-gray-400 focus:border-gray-600 focus:outline-none`}>
              <option value="Cédula de ciudadania">Cédula de ciudadania</option>
              <option value="Tarjeta de identidad">Tarjeta de identidad</option>
              <option value="Cédula de extranjeria">
                Cédula de extranjeria
              </option>
            </select>
          </div>
        </div>{" "}
        <div className="flex w-full">
          <div className="flex flex-col w-full ">
            <label htmlFor="documentNumber" className="font-bold">
              Número de identidad<strong className="text-red-600">*</strong>
            </label>
            <input
              onChange={handleInputChange}
              id="documentNumber"
              name="documentNumber"
              className={`bg-blue-gray-50 border border-gray-300 shadow-md rounded-xl h-12 lg:w-4/5 p-2 hover:border-gray-400 focus:border-gray-600 focus:outline-none`}
              type="number"
              placeholder="número de documento..."
            />
            {errors.documentNumber && (
              <p className="text-red-600 font-bold">{errors.documentNumber}</p>
            )}
          </div>
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
      <div className="flex flex-col gap-5 lg:gap-0 lg:flex-row mt-6 lg:mt-0 lg:my-10 lg:mx-20 justify-between">
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
