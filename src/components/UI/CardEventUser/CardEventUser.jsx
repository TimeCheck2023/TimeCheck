import React, { useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { ModalEventInfo } from "../../Layout/ModalEventInfo/ModalEventInfo";

export const CardEventUser = () => {

  const [openModal, setOpenModal] = useState(false);

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <div className="w-4/5 h-full border border-slate-300 rounded-lg ">
      <div className="flex justify-between px-2 py-1 text-sm">
        <p className="font-bold">Organización</p>
        <p className="text-slate-400 font-medium">Público</p>
      </div>
      <div className="p-3 flex justify-center">
        <img
          src="https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="imagen"
          className="rounded-md w-64 h-40 object-cover"
        />
      </div>
      <div className="px-3 py-3">
        <p className="text-sm text-purple-600 font-bold">
          Carrera Via la tebaida
        </p>
        <p className="text-xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus, elit
          nibh et nisl, pellentesque scelerisque faucibus facilisis at. Placerat
          morbi sem viverra diam lectus odio orci...
        </p>
      </div>
      <div className="flex flex-row justify-between px-8 py-4">
        <button className="flex flex-row items-center border px-4 border-slate-300 rounded-md hover:bg-purple-600 hover:text-white text-purple-600 p-1 gap-1">
          <AiOutlineLike className=" text-xl" />
          <p className="font-bold">10</p>
        </button>
        <button
          onClick={() => {
            setOpenModal(!openModal);
          }}
          className="flex flex-row items-center border px-4 border-slate-300 rounded-md hover:bg-purple-600 hover:text-white text-purple-600 p-1 gap-1 font-semibold">
          <p>Ver más</p>
        </button>
      </div>
      {openModal && (<ModalEventInfo handleCloseModal={handleCloseModal}/>
      )}
    </div>
  );
};
