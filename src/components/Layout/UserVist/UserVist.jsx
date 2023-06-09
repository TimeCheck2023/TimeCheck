import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { CardEventUser } from "../../UI/CardEventUser/CardEventUser";
import { Footer } from "../Footer/Footer";
import { LoaderEventsGet } from "../../UI/LoaderEventsGet/LoaderEventsGet";
import NoEventsMessage from "../../UI/NotEventsMessage/NotEventsMessage";
import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthContext";

const PAGE_SIZE = 8;

export const UserVist = () => {
  const [events, setEvents] = useState([]);
  const [page, setPage] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [openCategoria, setOpenCategoria] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [categories, setCategories] = useState([]);
  const [nroLikes, setNroLikes] = useState(null);
  const [option, setOption] = useState(1);

  const { socket, nroDocumento } = useContext(AuthContext);

  const fetchEvents1 = () => {
    fetch("https://time-check.azurewebsites.net/api/Event/List")
      .then((response) => response.json())
      .then((data) => {
        setEvents(data.response);
        // console.log(data.response)
        setLoading(false);
      });
    setOption(1);
  };

  const fetchEvents3 = () => {
    fetch(
      `https://time-check.azurewebsites.net/api/Event/PendingEvents/${nroDocumento}`
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setEvents(data.response);
        setLoading(false);
      });

    setOption(2);
  };

  useEffect(() => {
    fetch("https://time-check.azurewebsites.net/api/Event/List")
      .then((response) => response.json())
      .then((data) => {
        setEvents(data.response);
        // console.log(data.response)
        setLoading(false);
      });
  }, []);

  const handleFetchEvents = () => {
    fetch("https://time-check.azurewebsites.net/api/Event/List")
      .then((response) => response.json())
      .then((data) => {
        setEvents(data.response);
        setLoading(false);
      });
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch(
        "https://time-check.azurewebsites.net/api/Event/get_event_types"
      );
      const data = await response.json();
      // console.log(data.response);

      setCategories(data.response); // Actualiza el estado con los tipos de eventos obtenidos
      // console.log(categories);
    } catch (error) {
      console.error("Error al obtener los tipos de eventos:", error);
    }
  };

  useEffect(() => {}, [socket]);

  useEffect(() => {
    fetchCategories();
    // console.log(categories.tipoEvento)
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

  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredEvents = events.filter(
    (event) =>
      (selectedCategory === null || event.tipoEvento === selectedCategory) &&
      (searchQuery === "" ||
        event.nombreEvento.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const totalPages = Math.ceil(filteredEvents.length / PAGE_SIZE);
  const startIndex = page * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const visibleEvents = filteredEvents.slice(startIndex, endIndex);
  // const shouldShowPaginator = visibleEvents.length > PAGE_SIZE && events.length > PAGE_SIZE;

  return (
    <>
      <div className="sm:pl-20 flex flex-col gap-10 2xl:gap-14 xl:gap-16 mb-20">
        <header className="mt-2 text-center">
          {nroDocumento && (
            <nav className="flex justify-center gap-4">
              <button
                onClick={fetchEvents1}
                className={`px-4 py-2 rounded ${
                  option === 1 ? "bg-violet-600 text-white" : ""
                }`}>
                Ver todos los eventos
              </button>
              <button
                onClick={fetchEvents3}
                className={`px-4 py-2 rounded ${
                  option === 1 ? "" : "bg-violet-600 text-white"
                }`}>
                Ver eventos pendientes
              </button>
            </nav>
          )}
        </header>
        <div className="w-full flex justify-center">
          <div className="flex flex-col">
            <button
              onClick={() => {
                setOpenCategoria(!openCategoria);
              }}
              className="flex justify-center items-center gap-2 px-4 py-2 w-36 md:w-40 bg-violet-800 hover:bg-violet-700 font-normal text-white">
              Categorias <BiChevronDown className="text-2xl" />
            </button>
            {!openCategoria && (
              <div className="absolute mt-10 w-36 md:w-40 px-4 py-2 z-50 bg-violet-600 text-white">
                <ul className="flex flex-col gap-2">
                  <li
                    className={`${
                      selectedCategory === null ? "bg-violet-900" : ""
                    } hover:bg-violet-900 px-4 py-2 rounded-sm border-y border-white`}
                    onClick={() => {
                      setSelectedCategory(null);
                    }}>
                    Todos
                  </li>
                  {categories.map((category, index) => (
                    <li
                      key={index}
                      className={`${
                        selectedCategory === category.tipoEvento
                          ? "bg-violet-900"
                          : ""
                      } hover:bg-violet-900 px-4 py-2 rounded-sm border-b border-white cursor-pointer`}
                      onClick={() => {
                        setSelectedCategory(category.tipoEvento);
                      }}>
                      {category.tipoEvento}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <input
            type="search"
            className="bg-slate-300 cursor-pointer py-2 focus:outline-none focus:border focus:border-gray-400 h-10 rounded-r-md md:w-1/4 w-1/2 text-zinc-500 text-base px-4"
            placeholder="Busca un evento"
            value={searchQuery}
            onChange={handleSearchQueryChange}
          />
          <div className="absolute right-12 mr-6 top-20 xl:top-28 xl:mt-2 xl:text-2xl 2xl:top-24 2xl:right-80 2xl:mr-72 2xl:pr-2 2xl:mt-4 xl:right-1/3 xl:mr-0 lg:right-1/4 lg:mr-24 md:right-1/4 md:mr-16 sm:mr-28 mt-3 text-2xl">
            <AiOutlineSearch />
          </div>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-3 place-items-center content-center justify-center items-center  place-content-center gap-5 pb-0 xl:mb-0 2xl:justify-center 2xl:items-center 2xl:text-center">
          {loading ? (
            <LoaderEventsGet />
          ) : events.length === 0 ? (
            <div className="w-screen h-full flex justify-center items-center">
              <NoEventsMessage />
            </div>
          ) : (
            visibleEvents.map((event) => (
              <CardEventUser
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
                idEvento={event.idEvento}
                cuposDisponibles={event.cuposDisponibles}
                fetchEvents={handleFetchEvents} // Agrega esta prop
                nroLikes={nroLikes}
              />
            ))
          )}
        </div>
        {totalPages > 1 && (
          <div className="flex gap-2 justify-center items-center my-10 xl:my-20">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => handlePageChange(i)}
                className={`px-4 py-2 rounded-md font-medium border
                  ${
                    page === i
                      ? "bg-violet-600 text-white"
                      : "bg-white text-gray-700 hover:bg-violet-100"
                  }`}>
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>
      <Footer style={`${visibleEvents.length <= 4 && "absolute bottom-0"}`} />
    </>
  );
};
