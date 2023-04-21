import React, { useState } from "react";
import {AiFillLike} from "react-icons/ai"
import { ModalEventEdit } from "../ModalEventEdit/ModalEventEdit";

export const CardEventAdmin = () => {

  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = () =>{
    setOpenModal(!openModal)
  }

  const handleCloseModal = () =>{
    setOpenModal(false)
  }

  return (
<>
<div className="w-80 h-full lg:h-full border border-black hover:shadow-xl hover:shadow-neutral-500 rounded-md transform transition-transform hover:scale-110">
      <div>
        <img src="/image1.webp" alt="event" className="rounded-t-md" width={320} />
      </div>
      <div className="px-3 py-5">
        <p className="font-bold text-xl">Conferencia QA</p>
        <p className="font-semibold text-slate-600 ">Charla</p>
      </div>
      <div>
        <p className="px-3 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde placeat
          rerum expedita! Necessitatibus in maiores laborum ipsam corporis
          accusantium quia quae voluptates totam? Deleniti ratione consequuntur
          laboriosam, cum laborum tempora!
        </p>
      </div>
      <div className="flex justify-between px-3 py-6">
        <p className="text-slate-400 font-normal">GRATIS</p>
        <p className="text-slate-400 font-normal">87/100</p>
      </div>
      <div className="flex justify-between px-3 gap-4 mt-2 mb-4">
        <button className="flex items-center px-3 bg-slate-100 rounded-md font-bold text-xl text-purple-600 gap-2"><AiFillLike className="text-purple-600"/>10</button>
        <button onClick={handleOpenModal} className="hover:bg-purple-800 px-14 bg-purple-600 text-white font-medium py-1 rounded-md shadow-lg"> EDITAR</button>
      </div>
    </div>
    {openModal && <ModalEventEdit handleCloseModal={handleCloseModal}/>}
    </>
  );
};
