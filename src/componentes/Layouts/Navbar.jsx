import React, { useState } from "react";
import { Modal } from "./Modal";
import ModalLogin from "../Home/ModalLogin";
import logo1 from "../assets/images/logo1.png";
import logo2 from "../assets/images/logo2.png";
import logo3 from "../assets/images/logo3.png";

function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const toggleLoginModal = () => {
    setShowLoginModal(!showLoginModal);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="bg-teal-500/90 border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            itpCargo
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="text-white focus:outline-none font-medium rounded-lg px-4 py-2 text-center"
            onClick={toggleLoginModal}
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
                className="block py-2 px-3 md:p-0 text-white  rounded hover:bg-gray-100 md:hover:bg-transparent dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700rounded md:bg-transparent "
                aria-current="page"
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 rounded hover:bg-gray-100 md:hover:bg-transparent text-white "
                onClick={toggleModal}
              >
                Sobre nosotros
              </a>
            </li>
            <li className="relative">
              <button
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                onClick={toggleDropdown}
                className=" font-medium text-center inline-flex items-center  py-2 px-3 md:p-0 rounded hover:bg-gray-100 md:hover:bg-transparent text-white "
                type="button"
              >
                Servicios
                <svg
                  className="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {showDropdown && (
                <div
                  id="dropdown"
                  className="z-10 absolute divide-y divide-gray-100 rounded-lg w-44 bg-white shadow"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-300"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-teal-500/90 dark:hover:text-white"
                      >
                        Envio documentos
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-teal-500/90 dark:hover:text-white"
                      >
                        Envio paquetes
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-teal-500/90 dark:hover:text-white"
                      >
                        Envio express
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li>
              <a
                href="/contacto"
                className="block py-2 px-3 md:p-0 rounded hover:bg-gray-100 md:hover:bg-transparent dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent "
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
      {showModal && (
        <Modal open={showModal} onClose={toggleModal}>
          <div className="p-2">
            <div className="bg-white rounded-lg shadow-xl">
              <div className="px-6 py-5">
                <div className="text-center">
                  <h1 className="text-4xl font-bold text-gray-800">
                    ¿Quiénes somos?
                  </h1>
                  <h2 className="mt-2 text-2xl font-semibold text-gray-700">
                    Sobre Nosotros
                  </h2>
                </div>
                <div className="mt-8 text-base text-gray-700 leading-relaxed">
                  <p>
                    Una empresa dedicada a la distribución nacional,
                    internacional, almacenaje y logística. Los más de 40 años en
                    el mercado nos han permitido especializarnos y convertirnos
                    en una de las empresas con mayor portafolio de productos.
                    Buscamos mantener y mejorar tu experiencia de forma
                    permanente.
                  </p>
                  <p className="mt-4">
                    Enfocados en las necesidades del cliente, la atención
                    personalizada es prioridad para nosotros.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
      <ModalLogin open={showLoginModal} onClose={toggleLoginModal} />
    </nav>
  );
}

export default Navbar;
