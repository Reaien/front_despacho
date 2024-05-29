import { useState, useEffect } from "react";
import React from "react";
import { Modal } from "./Modal";
import { FormDespacho } from "./FormDespacho";

export const TableCompras = () => {
  const [ventas, setVentas] = useState([]);

  const compras = async () => {
    const response = await fetch(
      "https://my-json-server.typicode.com/tih4r3-chan/Despacho/Ventas"
    );
    const data = await response.json();
    console.log(data);
    setVentas(data);
  };
  // Llamada a la función para obtener los datos cuando el componente se monta
  useEffect(() => {
    compras();
  }, []);

  //state que controla el modal
  const [openModal, setOpenModal] = useState(false);

  //state que abre el modal junto con la data del id seleccionado
  const [ventaSeleccionada, setVentaSeleccionada] = useState(null);
  const handleAbrirModal = (venta) => {
    setVentaSeleccionada(venta);
    setOpenModal(true);
  };

  return (
    <>
      <section className="grid text-center grid-cols-12 mb-8">
        <div className="col-span-12 flex justify-center">
          <div className="col-span-10 p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-white h-full overflow-hidden">
            <table className="table-fixed">
              <thead>
                <tr className="py-10">
                  <th className="pr-10">Orden de compra</th>
                  <th className="pr-10">direccion</th>
                  <th className="pr-10">fecha de compra</th>
                  <th className="pr-10">valor total</th>
                  <th className="pr-10"></th>
                </tr>
              </thead>
              <tbody>
                {ventas.map((venta) => (
                  <tr key={venta.id}>
                    <td className="pr-10 py-10 items-center">{venta.id}</td>
                    <td className="pr-10 py-10  items-center">
                      {venta.direccion_compra}
                    </td>
                    <td className="pr-10 py-10  items-center">
                      {venta.fecha_compra}
                    </td>
                    <td className="pr-10 py-10  items-center">
                      ${venta.valor_compra}
                    </td>
                    <td>
                      <button
                        onClick={() => handleAbrirModal(venta)}
                        className="py-1 bg-orange-200 px-8 rounded-xl shadow-md hover:bg-orange-300/70 transition-all duration-300 "
                      >
                        Generar Despacho
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <Modal
        onClose={() => {
          setOpenModal(false);
        }}
        open={openModal}
      >
        {ventaSeleccionada && (
          <FormDespacho
            venta={ventaSeleccionada}
            onClose={() => setOpenModal(false)}
          />
        )}
      </Modal>
    </>
  );
};
