import React from "react";
import styles from "./BodyAboutUs.module.css";
import { ContactTeam } from "../ContactTeam/ContactTeam";
import { Footer } from "../Footer/Footer";

export const BodyAboutUs = () => {
  return (
    <div className="w-full h-full bg-white sm:ml-24">
      <div
        className={` font-sans w-full h-96 flex flex-col justify-center items-center pt-16 lg:pt-0 gap-3 lg:gap-16 pb-20 bg-cover bg-center  ${styles.img1}`}>
        <h1 className="font-bold  text-white text-4xl lg:text-5xl p-4 lg:p-0">
          Sobre Nosotros
        </h1>
        <p className="font-semibold text-white text-lg w-4/5 text-justify xl:text-justify lg:w-5/12 lg:text-center">
          TimeCheck es una innovadora herramienta en línea diseñada para
          facilitar la gestión de eventos y mejorar la experiencia para los
          organizadores como para los participantes. Nuestra plataforma ofrece
          un sistema automatizado de registro de asistentes que permite a los
          organizadores llevar un control eficiente de la asistencia en tiempo
          real.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row w-full mb-0 lg:mb-0 2xl:mt-10 2xl:mb-32 xl:mb-40">
        <div className="flex flex-col px-16 md:w-2/3  gap-20 md:gap-32 2xl:gap-20 justify-center items-center mt-5 md:mt-0 xl:my-14 2xl:my-8">
          <div className="flex flex-col w-full 2xl:w-4/5 gap-5 justify-center items-center text-center">
            <h2 className="text-4xl font-semibold text-purple-600 w-80">
              Nuestra Misión
            </h2>
            <p className="text-xl  w-full 2xl:w-full text-justify lg:pl-9">
              Proporcionar una herramienta eficaz y eficiente para la gestión de
              eventos que permita a los organizadores llevar un registro de los
              asistentes de manera automatizada, en línea y en tiempo real. Nos
              esforzamos por ofrecer un servicio de calidad, innovador y
              confiable para garantizar la satisfacción de nuestros clientes.
            </p>
          </div>
          <div className="flex flex-col w-full 2xl:w-4/5 gap-5 justify-center items-center text-center">
            <h2 className="text-4xl font-semibold text-purple-600 w-80">
              Nuestra Visión
            </h2>
            <p className="text-xl  w-full 2xl:w-full text-justify lg:pl-9">
              Ser la herramienta de gestión de eventos en línea más reconocida y
              confiable a nivel mundial, ofreciendo la mejor experiencia de
              usuario y tecnología avanzada en la gestión de eventos. Queremos
              ayudar a los organizadores de eventos a simplificar el proceso de
              registro y seguimiento de asistencia, logrando que sus eventos
              sean más exitosos y satisfactorios para los asistentes.
            </p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 mb-60 lg:mb-0">
          <div className="flex flex-col w-full gap-10 h-80 p-20">
            <div className="w-full flex flex-col lg:flex-row gap-10">
              <div
                className={`bg-cover bg-center ${styles.img3}  w-full lg:w-1/2 h-52`}></div>
              <div
                className={`bg-cover bg-center ${styles.img2} w-full lg:w-1/2 h-52`}></div>
            </div>
            <div className="w-full flex flex-row gap-10">
              <div
                className={`bg-cover bg-center ${styles.img4} w-full h-52`}></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full ">
        <div className="flex flex-col mt-80 md:mt-0 w-full justify-center items-center gap-3">
          <h2 className="text-3xl lg:text-4xl font-bold text-purple-600">
            Conoce a Nuestro Equipo{" "}
          </h2>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col lg:flex-row w-1/2 justify-center items-center">
            <ContactTeam name="Yuliam A. Osorio P." image="/Osorio.jpeg" />
            <ContactTeam name="Juan Pablo Aranda H." image="/aranda.jpeg" />
            <ContactTeam name="Carolina Rivera Garcia" image="/calorina.jpg" />
          </div>
          <div className="flex flex-col lg:flex-row w-1/2 justify-center items-center">
            <ContactTeam name="Jose Daniel Aldana" image="" />
            <ContactTeam name="Yvette Daniela Campo" image="/yvette.jpg" />
            <ContactTeam name="Mateo H. Mahecha" image="/mateo.jpg" />
          </div>
          <div className="flex flex-col lg:flex-row w-1/2 justify-center items-center">
            <ContactTeam name="Sara Valentina Russi" image="/sara.jpg" />
            <ContactTeam name="Juan David Galindo " image="/galindo.jpeg" />
            <ContactTeam name="Carlos Alberto Malambo" image="/malambo.jpg" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
