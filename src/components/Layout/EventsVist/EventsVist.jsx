import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { ImPlus } from "react-icons/im";
import { CardEventAdmin } from "../../UI/CardEventAdmin/CardEventAdmin";
import { Footer } from "../Footer/Footer";
import { ModalEventAdd } from "../ModalEventAdd/ModalEventAdd";
import NoEventsMessage from "../../UI/NotEventsMessage/NotEventsMessage";
import { LoaderEventsGet } from "../../UI/LoaderEventsGet/LoaderEventsGet";
import moment from "moment";

const PAGE_SIZE = 3;

export const EventsVist = ({ idOrg, userType, idSubOrg }) => {
  const [events, setEvents] = useState([]);
  const [page, setPage] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [openCategoria, setOpenCategoria] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [categories, setCategories] = useState([]);
  const [categoriesId, setCategoriesId] = useState([]);
  const [option, setOption] = useState(1);

  const fetchEvents1 = () => {
    fetch(`https://time-check.azurewebsites.net/api/Event/List`)
      .then((response) => response.json())
      .then((data) => {
        setEvents(data.response);
        setLoading(false);
      });
    setOption(1);
  };

  // console.log(idSubOrg);

  const fetchEvents2 = () => {
    fetch(
      `https://time-check.azurewebsites.net/api/Event/GetEventsOrg?OrganizacionId=${idOrg}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setEvents(data);
        console.log(data)
        setLoading(false);
      });
  };

  const fetchEvents3 = () => {
    fetch(
      `https://time-check.azurewebsites.net/api/Event/GetEventsBySuborganization/${idSubOrg}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setEvents(data.response);
        setLoading(false);
      });

    setOption(2);
  };

  const fetchEvents = userType === 1 ? fetchEvents1 : fetchEvents2;

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchEvents();
  }, [idSubOrg]);

  const filteredEvents = events.filter(
    (event) =>
      (selectedCategory === null || event.tipoEvento === selectedCategory) &&
      (searchQuery === "" ||
        event.nombreEvento.toLowerCase().includes(searchQuery.toLowerCase())) &&
      ((userType === 1 && moment(event.fechaFinalEvento).isAfter(moment())) ||
        userType !== 1)
  );

  const totalPages = Math.ceil(filteredEvents.length / PAGE_SIZE);
  const startIndex = page * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const visibleEvents = filteredEvents.slice(startIndex, endIndex);

  const fetchCategories = async () => {
    try {
      const response = await fetch(
        "https://time-check.azurewebsites.net/api/Event/get_event_types"
      );
      const data = await response.json();

      // Obtener los IDs de tipo de evento
      const categoriesIds = data.response.map((evento) => evento.idTipoEvento);

      // Obtener los tipos de evento
      const categories = data.response.map((evento) => evento.tipoEvento);

      // Actualizar los estados con los tipos de eventos y los IDs de tipo de evento obtenidos
      setCategoriesId(categoriesIds);
      setCategories(categories);
    } catch (error) {
      console.error("Error al obtener los tipos de eventos:", error);
    }
  };

  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div className="w-full h-full flex items-center flex-col gap-12">
      <header className="mt-2 text-center">
        {idSubOrg && (
          <nav className="flex justify-center gap-4">
            <button
              onClick={fetchEvents1}
              className={`px-4 py-2 rounded ${
                option === 1 ? "bg-purple-600 text-white" : ""
              }`}>
              Ver todos los eventos
            </button>
            <button
              onClick={fetchEvents3}
              className={`px-4 py-2 rounded ${
                option === 1 ? "" : "bg-purple-600 text-white"
              }`}>
              Ver eventos de tu suborganización
            </button>
          </nav>
        )}
        {!idSubOrg && (
          <h1 className="md:pl-20 text-2xl lg:text-5xl font-semibold">
            Historial de Eventos
          </h1>
        )}
      </header>
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
            <div className="absolute mt-10 w-36 md:w-40 px-4 py-2 z-50 bg-purple-600 text-white hover:cursor-pointer">
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
                {categories.map((category, index) => (
                  <li
                    key={index}
                    className={`${
                      selectedCategory === category ? "bg-purple-900" : ""
                    } hover:bg-purple-900 px-4 py-2 rounded-sm border-b border-white`}
                    onClick={() => {
                      setSelectedCategory(category);
                    }}>
                    {category}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <input
          type="text"
          className="bg-neutral-800 cursor-pointer text-slate-200 py-2 focus:outline-none focus:border focus:border-gray-400 h-10 rounded-r-md w-1/2 md:w-1/4  text-base px-4"
          placeholder="Busca un evento"
          value={searchQuery}
          onChange={handleSearchQueryChange}
        />
        <div className="absolute text-white right-12 top-24 md:right-1/3 mr-5 md:top-24 md:text-2xl md:mt-2 mt-1 text-lg 2xl:mt-4">
          <AiOutlineSearch />
        </div>
      </div>
      <div
        className={`w-full grid ${
          events.length <= 1
            ? ""
            : "grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3"
        } place-items-center gap-y-5 pb-10 xl:mt-0 xl:mb-0 lg:ml-96 xl:ml-0 mb-0 sm:mb-0`}>
        {loading ? (
          <LoaderEventsGet />
        ) : (
          <>
            {events.length === 0 ? (
              <div className="w-screen h-full flex justify-center items-center">
                <NoEventsMessage />
              </div>
            ) : (
              <>
                {visibleEvents.map((event) => (
                  <CardEventAdmin
                    key={event.idEvento}
                    id={event.idEvento}
                    idSubOrg={event.idSuborganizacion}
                    price={event.valorTotalEvento}
                    title={event.nombreEvento}
                    description={event.descripcionEvento}
                    aforo={event.aforoEvento}
                    image={event.imagenEvento}
                    tipo_evento={event.tipoEvento}
                    id_tipo_evento={categoriesId}
                    fecha_final={event.fechaFinalEvento}
                    fecha_inicio={event.fechaInicioEvento}
                    lugar={event.lugarEvento}
                    cupos_disponibles={event.cuposDisponibles}
                    // likes={event.likes}
                    fetchEvents={fetchEvents}
                  />
                ))}
              </>
            )}
            {userType === 1 && (
              <div
                onClick={handleOpenModal}
                className="fixed bottom-40 rounded-full bg-slate-200 p-5 text-2xl text-purple-600  right-5 md:right-10 transform transition-transform hover:scale-125 hover:bg-slate-300">
                <ImPlus />
              </div>
            )}
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
          idSubOrg={idSubOrg}
        />
      )}
      <div className=" md:pl-14 w-full">
        <Footer style={""} />
      </div>
    </div>
  );
};
