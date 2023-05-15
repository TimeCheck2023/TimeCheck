import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { ImPlus } from "react-icons/im";
import { CardEventAdmin } from "../../UI/CardEventAdmin/CardEventAdmin";
import { Footer } from "../Footer/Footer";
import { ModalEventAdd } from "../ModalEventAdd/ModalEventAdd";
import NoEventsMessage from "../../UI/NotEventsMessage/NotEventsMessage";
import { LoaderEventsGet } from "../../UI/LoaderEventsGet/LoaderEventsGet";

const PAGE_SIZE = 3;

export const EventsVist = () => {
  const [events, setEvents] = useState([]);
  const [page, setPage] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [openCategoria, setOpenCategoria] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const totalPages = Math.ceil(events.length / PAGE_SIZE);
  const startIndex = page * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const visibleEvents = events
    .filter(
      (event) =>
        selectedCategory === null || event.tipoEvento === selectedCategory
    )
    .slice(startIndex, endIndex);

  const fetchEvents = () => {
    fetch("https://time-check.azurewebsites.net/api/Event/List")
      .then((response) => response.json())
      .then((data) => {
        setEvents(data.response);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetch("https://time-check.azurewebsites.net/api/Event/List")
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

  // const shouldShowPaginator = visibleEvents.length > PAGE_SIZE && events.length > PAGE_SIZE;
  return (
    <div className="w-full h-full flex items-center flex-col gap-12">
      <div className="mt-2 text-center">
        <h1 className=" md:pl-20 text-2xl lg:text-5xl font-semibold">
          Historial de Eventos
        </h1>
      </div>
      <div className="w-full flex justify-center">
        <div className="flex flex-col md:mb-0 sm:mb-0">
          <button
            onClick={() => {
              setOpenCategoria(!openCategoria);
            }}
            className="flex justify-center items-center gap-2 px-4 py-2 w-36 md:w-40 bg-purple-600 hover:bg-purple-700 font-normal text-white">
            Categorias <BiChevronDown className="text-2xl" />
          </button>
          {!openCategoria && (
            <div className="absolute mt-10 w-36 md:w-40 px-4 py-2 z-50 bg-purple-600 text-white">
              <ul className="flex flex-col gap-2">
                <li
                  className={`${
                    selectedCategory === null ? "bg-purple-900" : ""
                  } hover:bg-purple-900 px-4 py-2 rounded-sm border-y border-white`}
                  onClick={() => {
                    setSelectedCategory(null);
                  }}>
                  Todos
                </li>
                <li
                  className={`${
                    selectedCategory === "Educativo" ? "bg-purple-900" : ""
                  } hover:bg-purple-900 px-4 py-2 rounded-sm border-b border-white`}
                  onClick={() => {
                    setSelectedCategory("Educativo");
                  }}>
                  Educativo
                </li>
                <li
                  className={`${
                    selectedCategory === "Religioso" ? "bg-purple-900" : ""
                  } hover:bg-purple-900 px-4 py-2 rounded-sm border-b border-white`}
                  onClick={() => {
                    setSelectedCategory("Religioso");
                  }}>
                  Religioso
                </li>
                <li
                  className={`${
                    selectedCategory === "Social" ? "bg-purple-900" : ""
                  } hover:bg-purple-900 px-4 py-2 rounded-sm border-b border-white`}
                  onClick={() => {
                    setSelectedCategory("Social");
                  }}>
                  Social
                </li>
                <li
                  className={`${
                    selectedCategory === "Cultural" ? "bg-purple-900" : ""
                  } hover:bg-purple-900 px-4 py-2 rounded-sm border-b border-white`}
                  onClick={() => {
                    setSelectedCategory("Cultural");
                  }}>
                  Cultural
                </li>
                <li
                  className={`${
                    selectedCategory === "Musical" ? "bg-purple-900" : ""
                  } hover:bg-purple-900 px-4 py-2 rounded-sm border-b border-white`}
                  onClick={() => {
                    setSelectedCategory("Musical");
                  }}>
                  Musical
                </li>
                <li
                  className={`${
                    selectedCategory === "Deportivo" ? "bg-purple-900" : ""
                  } hover:bg-purple-900 px-4 py-2 rounded-sm border-b border-white`}
                  onClick={() => {
                    setSelectedCategory("Deportivo");
                  }}>
                  Deportivo
                </li>
                <li
                  className={`${
                    selectedCategory === "Festival" ? "bg-purple-900" : ""
                  } hover:bg-purple-900 px-4 py-2 rounded-sm border-b border-white`}
                  onClick={() => {
                    setSelectedCategory("Festival");
                  }}>
                  Festival
                </li>
                <li
                  className={`${
                    selectedCategory === "Feria" ? "bg-purple-900" : ""
                  } hover:bg-purple-900 px-4 py-2 rounded-sm border-b border-white`}
                  onClick={() => {
                    setSelectedCategory("Feria");
                  }}>
                  Feria
                </li>
                <li
                  className={`${
                    selectedCategory === "Exposición" ? "bg-purple-900" : ""
                  } hover:bg-purple-900 px-4 py-2 rounded-sm border-b border-white`}
                  onClick={() => {
                    setSelectedCategory("Exposición");
                  }}>
                  Exposición
                </li>
              </ul>
            </div>
          )}
        </div>
        <input
          type="text"
          className="bg-slate-300 cursor-pointer py-2 focus:outline-none focus:border focus:border-gray-400 h-10 rounded-r-md w-1/2 md:w-1/4 text-zinc-500 text-base px-4"
          placeholder="Busca un evento"
        />
        <div className="absolute right-5 top-24 md:right-1/3 mr-5 md:top-28 mt-1 text-lg">
          <AiOutlineSearch />
        </div>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 place-items-center gap-y-5 pb-10 xl:mt-0 xl:mb-0 lg:ml-0 mb-0 sm:mb-0">
        {loading ? (
          <LoaderEventsGet />
        ) : (
          <>
            {events.length === 0 ? (
              <NoEventsMessage />
            ) : (
              <>
                {visibleEvents.map((event) => (
                  <CardEventAdmin
                    key={event.idEvento}
                    id={event.idEvento}
                    price={event.valorTotalEvento}
                    title={event.nombreEvento}
                    description={event.descripcionEvento}
                    aforo={event.aforoEvento}
                    image={event.imagenEvento}
                    tipo_evento={event.tipoEvento}
                    fecha_final={event.fechaFinalEvento}
                    fecha_inicio={event.fechaInicioEvento}
                    lugar={event.lugarEvento}
                    cupos_disponibles={event.cuposDisponibles}
                  />
                ))}
              </>
            )}
            <div
              onClick={handleOpenModal}
              className="fixed bottom-40 rounded-full bg-slate-200 p-5 text-2xl text-purple-600  right-5 md:right-10 transform transition-transform hover:scale-125 hover:bg-slate-300">
              <ImPlus />
            </div>
          </>
        )}
      </div>
      {totalPages > 1 && (
        <div className="flex gap-2 md:pt-0 sm:mt-0">
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
      <div className="h-full lg:relative lg:bottom-0 lg:left-1/2"></div>
      {openModal && (
        <ModalEventAdd
          handleCloseModal={handleCloseModal}
          fetchEvents={fetchEvents}
        />
      )}
      <div className=" md:pl-14 w-full">
        <Footer />
      </div>
    </div>
  );
};
