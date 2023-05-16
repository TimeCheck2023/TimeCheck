import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { CardEventUser } from "../../UI/CardEventUser/CardEventUser";
import { Footer } from "../Footer/Footer";
import { LoaderEventsGet } from "../../UI/LoaderEventsGet/LoaderEventsGet";
import NoEventsMessage from "../../UI/NotEventsMessage/NotEventsMessage";

const PAGE_SIZE = 8;

export const  UserVist = () => {
  const [events, setEvents] = useState([]);
  const [page, setPage] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [openCategoria, setOpenCategoria] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);

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

  const totalPages = Math.ceil(events.length / PAGE_SIZE);
  const startIndex = page * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const visibleEvents = events
    .filter(
      (event) =>
        selectedCategory === null || event.tipoEvento === selectedCategory
    )
    .slice(startIndex, endIndex);
  // const shouldShowPaginator = visibleEvents.length > PAGE_SIZE && events.length > PAGE_SIZE;

  return (
    <div className="sm:pl-20 flex flex-col gap-10 2xl:gap-14 xl:gap-16">
      <div className="w-full flex justify-center mt-10">
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
          className="bg-slate-300 cursor-pointer py-2 focus:outline-none focus:border focus:border-gray-400 h-10 rounded-r-md md:w-1/4 w-1/2 text-zinc-500 text-base px-4"
          placeholder="Busca un evento"
        />
        <div className="absolute right-10 mr-6 top-12 xl:top-12 2xl:top-12 2xl:right-80 2xl:mr-72 2xl:pr-2 xl:right-1/3 xl:mr-0 lg:right-1/4 lg:mr-24 md:right-1/4 md:mr-16 sm:mr-28 mt-1 text-lg">
          <AiOutlineSearch />
        </div>
      </div>
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 place-items-center content-center justify-center items-center place-content-center  gap-5 pb-10 xl:mb-0">
        {loading ? (
          <LoaderEventsGet />
        ) : (
          <>
            {events.length === 0 ? (
              <NoEventsMessage />
            ) : (
              <>
                {visibleEvents.map((event) => (
                  <CardEventUser
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
                    idEvento={event.idEvento}
                    cuposDisponibles={event.cuposDisponibles}
                    likes={event.likes}
                  />
                ))}
              </>
            )}
          </>
        )}
      </div>
      {totalPages > 1 && (
        <div className="flex gap-2 mt-0 justify-center items-center my-10 xl:my-0">
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
      <Footer />
    </div>
  );
};
