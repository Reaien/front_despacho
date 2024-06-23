import React, { useState, useEffect } from "react";
import axios from "axios";

export const TableDespachos = () => {
  const [despachos, setDespachos] = useState([]);

  const despacho = async () => {
    await axios.get("http://3.221.189.4:8000/despachos/").then((response) => {
      console.log(response.data.results);
      setDespachos(response.data.results);
    });
  };
  // Llamada a la función para obtener los datos cuando el componente se monta
  useEffect(() => {
    despacho();
  }, []);
  return (
    <>
      <section className="grid text-center grid-cols-12 mb-8">
        <div className="col-span-12 flex justify-center">
          <div className="col-span-10 p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-white h-full overflow-hidden">
            <table className="table-fixed">
              <thead>
                <tr className="py-10">
                  <th className="pr-10">Orden de despacho</th>
                  <th className="pr-10">Orden de compra</th>
                  <th className="pr-10">Dirección de entrega</th>
                  <th className="pr-10">Fecha despacho</th>
                  <th className="pr-10">Patente Camión</th>
                  <th className="pr-10">Entregado</th>
                  <th className="pr-10">Intentos de entrega</th>
                </tr>
              </thead>
              <tbody>
                {despachos.map((despacho) => (
                  <tr key={despacho.id}>
                    <td className="pr-10 py-10 items-center">{despacho.id}</td>
                    <td className="pr-10 py-10  items-center">
                      {despacho.id_compra}
                    </td>
                    <td className="pr-10 py-10  items-center">
                      {despacho.direccion_compra}
                    </td>
                    <td className="pr-10 py-10  items-center">
                      {despacho.fecha_despacho}
                    </td>
                    <td className="pr-10 py-10  items-center">
                      {despacho.patente_camion}
                    </td>
                    <td className="pr-10 py-10  items-center">
                      {despacho.entregado
                        ? "Despacho entregado"
                        : "Despacho pendiente"}
                    </td>
                    <td className="pr-10 py-10  items-center">
                      {despacho.intento}
                    </td>
                    <td>
                      <button className="py-1 bg-orange-200 px-8 rounded-xl shadow-md hover:bg-orange-300/70 transition-all duration-300 ">
                        Cerrar despacho
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};
