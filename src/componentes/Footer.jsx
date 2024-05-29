import React from "react";

function Footer() {
  return (
    <footer className="bg-teal-500 p-4 text-center w-full ">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
              <img src="#" className="h-8 me-3" alt="logo" /> {/*logo */}
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Logo
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Condiciones servicio
              </h2>
              <ul className="text-gray-800 dark:text-gray-800 font-medium">
                <li className="mb-4">
                  <a href="https://youtu.be/DtSsyxvaVqQ" className="hover:underline">
                    Recomendaciones embalaje
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Cobertura
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Siguenos
              </h2>
              <ul className="text-gray-800 dark:text-gray-800">
                <li className="mb-4">
                  <a href="#" className="hover:underline ">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-800 dark:text-gray-800">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Condiciones de privacidad
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terminos &amp; Condiciones
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-800 dark:text-gray-800 sm:text-center">
            © 2024{" "}
            <a href="#" className="hover:underline">
              aaaa™
            </a>
            . Todos los derechos reservados.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
