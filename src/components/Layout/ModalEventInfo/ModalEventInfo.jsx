import React, { useState, useRef } from "react";

export const ModalEventInfo = ({ handleCloseModal }) => {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  //Funcion para enviar todos los datos al backend para guardarlo en la DB

  return (
    <div
      className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50 w-full pt-5 pb-10 mb-14"
      onClick={handleBackdropClick}>
      <div className="bg-white rounded-md shadow-md w-11/12 h-full xl:h-4/5 flex flex-col">
        <div className="text-center my-2">
          <h1 className="text-2xl text-purple-600">Festival</h1>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt=""
            className="p-4"
          />
          <p className="text-sm px-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus, elit
            nibh et nisl, pellentesque scelerisque faucibus facilisis at.
            Placerat morbi sem viverra diam lectus odio orci... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Purus, elit nibh et
            nisl, pellentesque scelerisque faucibus facilisis at. Placerat morbi
            sem viverra diam lectus odio orci... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Purus, elit nibh et nisl, pellentesque
            scelerisque faucibus facilisis at. Placerat morbi sem viverra diam
            lectus odio orci...
          </p>
        </div>
        <div>
          <button className="text-purple-600 border px-6 rounded-md py-2">Cultural</button>
        </div>
      </div>
    </div>
  );
};
