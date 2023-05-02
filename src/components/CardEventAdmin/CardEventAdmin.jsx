import React, { useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { ModalEventEdit } from "../ModalEventEdit/ModalEventEdit";

export const CardEventAdmin = (props) => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <div className="w-80 xl:h-5/6 2xl:h-full lg:h-full border border-black hover:shadow-xl hover:shadow-neutral-500 rounded-md transform transition-transform hover:scale-110">
        <div>
          <img
            src={props.image}
            alt="event"
            className="rounded-t-md"
            width={320}
          />
        </div>
        <div className="px-3 py-5">
          <p className="font-bold text-xl">{props.title}</p>
          <p className="font-semibold text-slate-600 ">{props.tipo_evento}</p>
        </div>
        <div>
          <p className="px-3 text-sm">{props.description}</p>
        </div>
        <div className="flex justify-between px-3 py-6">
          <p className="text-slate-400 font-normal">
            {props.price !== 0 ? `$${props.price}` : "GRATIS"}
          </p>
          <p className="text-slate-400 font-normal">{`0/${props.aforo}`}</p>
        </div>
        <div className="flex justify-between px-3 gap-4 mt-2 mb-4">
          <button className="flex items-center px-3 bg-slate-100 rounded-md font-bold text-xl text-purple-600 gap-2">
            <AiFillLike className="text-purple-600" />
            10
          </button>
          <button
            onClick={handleOpenModal}
            className="hover:bg-purple-800 px-14 bg-purple-600 text-white font-medium py-1 rounded-md shadow-lg">
            {" "}
            EDITAR
          </button>
        </div>
      </div>
      {openModal && (
        <ModalEventEdit
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
        />
      )}
    </>
  );
};
