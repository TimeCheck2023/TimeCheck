import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { CardEventUser } from "../../UI/CardEventUser/CardEventUser";
import { Footer } from "../Footer/Footer";

export const UserVist = () => {
  const [openCategoria, setOpenCategoria] = useState(true);

  return (
    <div className="sm:pl-20">
      <div className="w-full flex justify-center py-10 md:py-20">
        <div className="flex flex-col">
          <button
            onClick={() => {
              setOpenCategoria(!openCategoria);
            }}
            className="flex justify-center items-center gap-2 px-1 md:px-4 py-2 w-28 md:w-40 bg-purple-600 hover:bg-purple-700 font-normal text-white">
            Categorias <BiChevronDown className="text-2xl" />
          </button>
          {!openCategoria && (
            <div className="absolute mt-10 w-28 md:w-40 md:px-4 py-0 md:py-2 z-50 bg-purple-600 text-white">
              <ul className="flex flex-col gap-2">
                <li className="hover:bg-purple-900 px-4 py-2 rounded-sm border-y border-white">
                  Educativo
                </li>
                <li className="hover:bg-purple-900 px-4 py-2 rounded-sm border-b border-white">
                  Religioso
                </li>
                <li className="hover:bg-purple-900 px-4 py-2 rounded-sm border-b border-white">
                  Social
                </li>
                <li className="hover:bg-purple-900 px-4 py-2 rounded-sm border-b border-white">
                  Cultural
                </li>
                <li className="hover:bg-purple-900 px-4 py-2 rounded-sm border-b border-white">
                  Musical
                </li>
                <li className="hover:bg-purple-900 px-4 py-2 rounded-sm border-b border-white">
                  Deportivo
                </li>
                <li className="hover:bg-purple-900 px-4 py-2 rounded-sm border-b border-white">
                  Festival
                </li>
                <li className="hover:bg-purple-900 px-4 py-2 rounded-sm border-b border-white">
                  Feria
                </li>
                <li className="hover:bg-purple-900 px-4 py-2 rounded-sm border-b border-white">
                  Exposición
                </li>
              </ul>
            </div>
          )}
        </div>
        <input
          type="text"
          className="bg-slate-200 cursor-pointer py-2 focus:outline-none focus:border focus:border-gray-400 h-10 rounded-r-md sm:w-0 md:w-1/2 text-zinc-500 text-base px-4"
          placeholder="Busca un evento..."
        />
        <div className="absolute right-10 top-12 md:right-24 md:top-12 md:mt-10 lg:right-1/3 lg:mr-5 lg:top-28 2xl:top-20 2xl:right-1/4 2xl:pr-32 2xl:mt-3 lg:mt-1 text-2xl lg:text-lg">
          <AiOutlineSearch />
        </div>
      </div>
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 place-items-center gap-5 pb-10">
        <CardEventUser />
        <CardEventUser />
        <CardEventUser />
        <CardEventUser />
        <CardEventUser />
        <CardEventUser />
        <CardEventUser />
        <CardEventUser />
        <CardEventUser />
        <CardEventUser />
        <CardEventUser />
        <CardEventUser />
      </div>
      <Footer />
    </div>
  );
};
