import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { ImPlus } from "react-icons/im";
import { CardEventAdmin } from "../../UI/CardEventAdmin/CardEventAdmin";
import { Footer } from "../Footer/Footer";
import { ModalEventAdd } from "../ModalEventAdd/ModalEventAdd";
import NoEventsMessage from "../../UI/NotEventsMessage/NotEventsMessage";
import { LoaderEventsGet } from "../../UI/LoaderEventsGet/LoaderEventsGet";

const PAGE_SIZE = 4;

export const EventsVist = () => {
  const [events, setEvents] = useState([]);
  const [page, setPage] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [openCategoria, setOpenCategoria] = useState(true);

  useEffect(() => {
    fetch("http://timecheck.somee.com/api/Event/List")
      .then((response) => response.json())
      .then((data) => {
        setEvents(data.response);
        setLoading(false);
      });
  }, []);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };



  const totalPages = Math.ceil(events.length / PAGE_SIZE);
  const startIndex = page * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const visibleEvents = events.slice(startIndex, endIndex);
  return (
    <div className="w-full h-full flex items-center flex-col gap-12">
      <div className="mt-2">
        <h1 className="pl-20 text-2xl lg:text-5xl font-semibold">
          Historial de Eventos
        </h1>
      </div>
      <div className="w-full flex justify-center">
        <div className="flex flex-col">
          <button
            onClick={() => {
              setOpenCategoria(!openCategoria);
            }}
            className="flex justify-center items-center gap-2 px-4 py-2 w-40 bg-purple-600 hover:bg-purple-700 font-normal text-white">
            Categorias <BiChevronDown className="text-2xl" />
          </button>
          {!openCategoria && (
            <div className="absolute mt-10 w-40 px-4 py-2 z-50 bg-purple-600 text-white">
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
          className="bg-slate-300 cursor-pointer py-2 focus:outline-none focus:border focus:border-gray-400 h-10 rounded-r-md w-1/4 text-zinc-500 text-base px-4"
          placeholder="Busca un evento"
        />
        <div className="absolute right-1/3 mr-5 top-28 mt-1 text-lg">
          <AiOutlineSearch />
        </div>
      </div>
      <div className="w-full h-full flex justify-center gap-12 mb-2">
      {loading ? (
  <LoaderEventsGet />
) : (
  <>
    {events.length === 0 ? (
      <NoEventsMessage/>
    ) : (
      <>
        {visibleEvents.map((event) => (
          <CardEventAdmin
            key={event.idEvento}
            price={event.valorTotalEvento}
            title={event.nombreEvento}
            description={event.descripcionEvento}
            aforo={event.aforoEvento}
            image={event.imagenEvento}
            tipo_evento={event.tipoEvento}
            fecha_final={event.fechaFinalEvento}
            fecha_inicio={event.fechaInicioEvento}
            lugar={event.lugarEvento}
          />
        ))}
      </>
    )}
  </>
)}

      </div>
      {totalPages > 1 && (
        <div className="flex gap-2 mt-0">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i)}
              className={`px-4 py-2 rounded-md font-medium border
                ${
                  page === i
                    ? "bg-purple-600 text-white"
                    : "bg-white text-gray-700 hover:bg-purple-100"
                }`}>
              {i + 1}
            </button>
          ))}
        </div>
      )}
      <div
        onClick={handleOpenModal}
        className="absolute rounded-full bg-slate-200 p-5 text-2xl text-purple-600 bottom-44 right-10 transform transition-transform hover:scale-125 hover:bg-slate-300">
        <ImPlus />
      </div>
      {openModal && <ModalEventAdd handleCloseModal={handleCloseModal} />}
      <div className="pl-14 w-full">
        <Footer />
      </div>
    </div>
  );
};
