import React, { useState } from "react";
import { Modal } from "./Modal"; 

function Navbar() {
  const [showModal, setShowModal] = useState(false); 

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  

  return (
    <nav className="bg-teal-600 border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="" className="h-8" alt="acavaellogo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Despacho
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="text-white   md:dark:hover:text-gray-800  f
           focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 text-center "
          >
            Iniciar Sesión
          </button>
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Abrir menu principal</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 text-white  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700  md:dark:hover:text-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700rounded md:bg-transparent "
                aria-current="page"
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700  md:dark:hover:text-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                onClick={toggleModal}
              >
                Sobre nosotros
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Servicios
              </a>
            </li>
            <li>
              <a
                href="/contacto"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
      {showModal && (
        <Modal open={showModal} onClose={toggleModal}>
          <div className="p-3">
            <div className="bg-white rounded-lg shadow-xl">
              <div className="px-6 py-8">
                <div className="text-center">
                  <h1 className="text-4xl font-bold text-gray-800">¿Quiénes somos?</h1>
                  <h2 className="mt-2 text-2xl font-semibold text-gray-700">Sobre Nosotros</h2>
                </div>
                <div className="mt-8 text-base text-gray-700 leading-relaxed">
                  <p>
                    Una empresa dedicada a la distribución nacional, internacional, almacenaje y logística. Los más de 40 años en el 
                    mercado nos han permitido especializarnos y convertirnos en una de las empresas con mayor portafolio de productos. 
                    Buscamos mantener y mejorar tu experiencia de forma permanente.
                  </p>
                  <p className="mt-4">
                    Enfocados en las necesidades del cliente, la atención personalizada es prioridad para nosotros.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </nav>
  );
}

export default Navbar;
