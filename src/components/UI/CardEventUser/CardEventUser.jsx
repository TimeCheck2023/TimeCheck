import React, { useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { ModalEventInfo } from "../../Layout/ModalEventInfo/ModalEventInfo";

export const CardEventUser = (props) => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <div className="w-4/5 h-full border border-slate-300 rounded-lg ">
      <div className="flex justify-between px-2 py-1 text-sm">
        <p className="font-bold">
          {props.cuposDisponibles}/{props.aforo}
        </p>
        <p className="text-slate-400 font-medium">{props.tipo_evento}</p>
      </div>
      <div className="p-3 flex justify-center">
        <img
          src={props.image}
          alt="imagen"
          className="rounded-md w-fit max-h-52 object-cover"
        />
      </div>
      <div className="px-3 py-3">
        <p className="text-base text-purple-600 font-bold">{props.title}</p>
        <p className="text-xs truncate">{props.description}</p>
      </div>
      <div className="flex flex-row justify-between px-8 py-4">
        <button className="flex flex-row items-center border px-4 xl:px-8 border-slate-300 rounded-md hover:bg-purple-600 hover:text-white text-purple-600 p-1 gap-1 xl:gap-2">
          <AiOutlineLike className=" text-xl" />
          <p className="font-bold">{props.likes}</p>
        </button>
        <button
          onClick={() => {
            setOpenModal(!openModal);
          }}
          className="flex flex-row items-center border px-4 lg:px-5 xl:px-8 border-slate-300 rounded-md hover:bg-purple-600 hover:text-white text-purple-600 p-1 gap-1 font-semibold">
          <p>Ver más</p>
        </button>
      </div>
      {openModal && (
        <ModalEventInfo
          handleCloseModal={handleCloseModal}
          title={props.title}
          description={props.description}
          image={props.image}
          fecha_inicio={props.fecha_inicio}
          fecha_final={props.fecha_final}
          lugar={props.lugar}
          aforo={props.aforo}
          valor_total={props.price}
          tipo_evento={props.tipo_evento}
          idEvento={props.idEvento}
          cuposDisponibles={props.cuposDisponibles}
          fetchEvents={props.fetchEvents}
        />
      )}
    </div>
  );
};
