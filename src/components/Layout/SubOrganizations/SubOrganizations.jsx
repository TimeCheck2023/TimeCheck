import React, { useState, useEffect } from "react";
import { CardSubOrganization } from "../../UI/CardSubOrganization/CardSubOrganization";

export const SubOrganizations = () => {
  const [subOrganizations, setSubOrganizations] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(3);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://timecheck.up.railway.app/SubOrg"
        );
        if (response.ok) {
          const data = await response.json();
          setSubOrganizations(data.message);
          // console.log(data.message);
        } else {
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  // Calcular índices para la página actual

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = subOrganizations.slice(
    indexOfFirstCard,
    indexOfLastCard
  );

  // Cambiar de página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="border w-full flex gap-1 justify-center flex-col items-center h-full xl:h-4/5 border-neutral-300 mx-2 xl:mx-0 my-2 mb-10 pb-10">
      <h2 className="text-center py-2 text-2xl xl:text-4xl text-purple-800 font-semibold">
        Suborganizaciones
      </h2>
      <div className="w-full h-full xl:h-1/2 grid place-items-center md:grid-cols-2 xl:grid-cols-3  ">
        {currentCards.map((subOrg, index) => (
          <CardSubOrganization
            key={index}
            id={subOrg.SUB_ORGANIZACION_ID}
            title={subOrg.SUB_ORGANIZACION_NOMBRE}
            organization={subOrg.ORGANIZACION_NOMBRE}
            description={subOrg.SUB_ORGANIZACION_DESCRIPCION}
          />
        ))}
      </div>
      <div className="flex justify-center">
        {subOrganizations.length > cardsPerPage && (
          <nav className="pagination mt-4 mb-20">
            {Array.from(
              Array(Math.ceil(subOrganizations.length / cardsPerPage)),
              (_, i) => (
                <button
                  key={i}
                  className={`pagination-item ${
                    currentPage === i + 1 ? "active" : ""
                  } bg-purple-500 text-white px-4 py-2 rounded-md mx-1`}
                  onClick={() => paginate(i + 1)}>
                  {i + 1}
                </button>
              )
            )}
          </nav>
        )}
      </div>
    </div>
  );
};
