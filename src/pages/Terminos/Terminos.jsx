import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const Terminos = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="flex flex-col justify-center items-center px-20 text-justify gap-10">
      <h1 className="py-5 font-bold text-4xl">
        Términos y Condiciones de TimeCheck.
      </h1>
      <ul className="flex flex-col gap-4 text-xl">
        <li>
          {" "}
          Aceptas cumplir y estar sujeto a estos Términos y Condiciones. Si no
          estás de acuerdo con alguno de los términos establecidos aquí, no
          podrás utilizar la aplicación.
        </li>{" "}
        <li>
          Uso de la aplicación: TimeCheck es una herramienta en línea destinada
          a los organizadores de eventos para llevar un registro de los
          asistentes y gestionar el proceso de registro de manera automatizada.
          Los usuarios pueden registrarse en línea para el evento y los
          organizadores pueden monitorear la asistencia en tiempo real, generar
          informes de asistencia y calificar el nivel de satisfacción del
          evento.
        </li>
        <li>
          Responsabilidad del usuario: Eres responsable de mantener la
          confidencialidad de tu cuenta y de la información de registro
          proporcionada. Toda la información que proporciones debe ser precisa y
          actualizada. No debes compartir tu cuenta con terceros ni utilizar la
          aplicación de manera indebida o para fines ilegales.
        </li>
        <li>
          Privacidad: TimeCheck recopila y utiliza información personal de
          acuerdo con su Política de Privacidad. Al utilizar la aplicación,
          aceptas el uso de tus datos personales de acuerdo con dicha política.
        </li>
        <li>
          Propiedad intelectual: Todos los derechos de propiedad intelectual
          relacionados con TimeCheck, incluyendo, pero no limitado a, software,
          diseño, logotipos, gráficos y contenido, son propiedad exclusiva de
          los propietarios de la aplicación. No se otorga ninguna licencia o
          derecho sobre estos derechos de propiedad intelectual sin el
          consentimiento previo por escrito de los propietarios.
        </li>
        <li>
          Limitación de responsabilidad: La aplicación TimeCheck se proporciona
          "tal cual" y los propietarios no se hacen responsables de ningún daño
          directo, indirecto, incidental, especial o consecuente que pueda
          surgir del uso de la aplicación.
        </li>
        <li>
          Modificaciones: Los propietarios de TimeCheck se reservan el derecho
          de modificar o interrumpir la aplicación en cualquier momento, sin
          previo aviso ni responsabilidad hacia los usuarios.
        </li>
        <li>
          Jurisdicción: Estos Términos y Condiciones se rigen por las leyes del
          país en el que se encuentren los propietarios de TimeCheck, y
          cualquier disputa relacionada con estos términos estará sujeta a la
          jurisdicción exclusiva de los tribunales de dicha jurisdicción. Al
          utilizar la aplicación TimeCheck, confirmas que has leído, comprendido
          y aceptado estos Términos y Condiciones. Si no estás de acuerdo con
          alguno de ellos, no debes utilizar la aplicación.
        </li>
      </ul>
      <button
        onClick={handleGoBack}
        className=" text-center w-60 rounded-md bg-violet-600 hover:bg-violet-950 text-white font-semibold px-4 py-2">
        Volver
      </button>
    </div>
  );
};
