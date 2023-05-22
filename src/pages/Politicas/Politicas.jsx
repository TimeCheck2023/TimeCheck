import React from "react";
import { Link } from "react-router-dom";

export const Politicas = () => {
  return (
    <div className="flex flex-col justify-center items-center px-20 text-justify gap-10">
      <h1 className="py-5 font-bold text-4xl">
        Política de Privacidad de TimeCheck.
      </h1>
      <p className="text-2xl">
        La privacidad de nuestros usuarios es de suma importancia para nosotros.
        Esta Política de Privacidad describe cómo se recopila, utiliza, almacena
        y protege la información personal de los usuarios que utilizan la
        aplicación TimeCheck. Al utilizar la aplicación, aceptas el
        procesamiento de tu información personal de acuerdo con esta Política de
        Privacidad.
      </p>
      <ul className="flex flex-col gap-4 text-xl">
        <li>
          1. Información recopilada: TimeCheck recopila información personal
          proporcionada por los usuarios al registrarse en la aplicación, como
          nombre, dirección de correo electrónico, número de teléfono y
          cualquier otra información necesaria para el proceso de registro de
          eventos. También podemos recopilar información de manera automática,
          como direcciones IP, datos de ubicación, tipo de dispositivo y
          navegador utilizado.
        </li>
        <li>
          2. Uso de la información: La información recopilada se utiliza para
          proporcionar los servicios de la aplicación, incluyendo el registro de
          eventos, la gestión de asistencia, la generación de informes de
          asistencia y la calificación de la satisfacción del evento. También
          podemos utilizar la información para mejorar la aplicación, enviar
          comunicaciones relacionadas con los servicios y para fines de
          investigación y análisis internos.
        </li>
        <li>
          3. Compartir información: TimeCheck no venderá, alquilará ni
          compartirá tu información personal con terceros, excepto en los
          siguientes casos: (a) cuando sea necesario para cumplir con la ley,
          una orden judicial o un proceso legal; (b) para proteger nuestros
          derechos, propiedad o seguridad, o los derechos, propiedad o seguridad
          de otros usuarios; (c) con proveedores de servicios de confianza que
          nos ayudan en la operación de la aplicación y están sujetos a
          obligaciones de confidencialidad.
        </li>
        <li>
          4. Seguridad de la información: Se toman medidas razonables para
          proteger la información personal de los usuarios contra pérdida, mal
          uso, acceso no autorizado o divulgación. Sin embargo, no podemos
          garantizar la seguridad absoluta de la información transmitida a
          través de Internet.
        </li>
        <li>
          5. Enlaces a terceros: La aplicación TimeCheck puede contener enlaces
          a sitios web de terceros. Esta Política de Privacidad no se aplica a
          esos sitios y no somos responsables de las prácticas de privacidad de
          esos terceros. Se recomienda revisar las políticas de privacidad de
          esos sitios antes de proporcionar cualquier información personal.
        </li>
        <li>
          6. Menores de edad: TimeCheck no está dirigido a menores de edad y no
          recopilamos intencionalmente información personal de niños menores de
          13 años. Si tienes conocimiento de que un niño menor de 13 años nos ha
          proporcionado información personal, contáctanos y tomaremos las
          medidas necesarias para eliminar esa información.
        </li>
        <li>
          7. Cambios en la Política de Privacidad: Nos reservamos el derecho de
          actualizar o modificar esta Política de Privacidad en cualquier
          momento. Se te notificará cualquier cambio importante a través de la
          aplicación o por otros medios. Se recomienda revisar periódicamente
          esta Política de Privacidad para estar al tanto de las prácticas
          actuales de privacidad.
        </li>
      </ul>
      <p>
        Si tienes alguna pregunta o inquietud sobre esta Política de Privacidad,
        puedes contactarnos a través de los canales proporcionados en la
        aplicación.
      </p>
      <Link
        to={"/SingUp"}
        className=" text-center w-60 mb-16 rounded-md bg-purple-600 hover:bg-purple-950 text-white font-semibold px-4 py-2">
        Volver
      </Link>
    </div>
  );
};
