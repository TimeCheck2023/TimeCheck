import React from "react";

import noEventsIllustration from "/notFoundEvents.svg";

const NoEventsMessage = () => {
  return (
    <div className="flex flex-col items-center text-center justify-center py-20 ">
      <img
        src={noEventsIllustration}
        alt="No hay eventos registrados"
        className="w-64 mb-10"
      />
      <p className="text-gray-500 text-2xl text-center">
        Aún no hay eventos registrados.
      </p>
    </div>
  );
};

export default NoEventsMessage;
