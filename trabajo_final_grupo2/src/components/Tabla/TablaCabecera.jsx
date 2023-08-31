// TODO: Necesitamos crear un componente para listar las citas. Uno llamado ApointmentItem y mejorar los estilos.
import { useEffect, useState } from "react";
import TablaFilas from "./TablaFilas";
import Registrarcita from "../../pages/Registrarcita";

let valor = "";
const TablaCabecera = ({ datos, onRemove,recargarDatos,lastIndex,firstIndex }) => {
  const [datalist, setlistpacientes] = useState(datos);
  const [search, setSearch] = useState("");
  //console.log("lastindexList",{lastIndex});
  
  useEffect(() => {
      setlistpacientes(datos);
  },[datos]);

  const handleSearch = (event) => {
    valor = event.target.value;
    setSearch(event.target.value);
    const datafiltrada = datos.filter((item) => {
      const datafilter = item.nombre.includes(event.target.value);
      return datafilter;
    });
    setlistpacientes(datafiltrada);
  };

  const handleRemove = (id) => {
    const newAppointmentss = datalist.filter(
      (datafiltrada) => datafiltrada.id !== id
    );
    //console.log("list-remover-newAppointmentss",newAppointmentss)
    setlistpacientes(newAppointmentss);
    //console.log("list--remover-datalist-eliminado",datalist)
    onRemove(id);
  };



  return (
    <section>
      <h2 className="text-2xl text-center mb-4 text-gray-50">Listado de Pacientes</h2>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        
        <div className=" flex justify-between   pb-4 bg-white dark:bg-gray-900">
          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
          <div className="relative mt-1">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="table-search"
              className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for items"
              onChange={handleSearch}
            />
          </div>
          <div>
          <Registrarcita datos={""} recargarDatos={recargarDatos} titulo="Nuevo" colordefondo={"bg-blue-800"}  borde={"border p-2"}/>
          </div>
        </div>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-100 uppercase bg-green-600 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                Nombre
              </th>
              <th scope="col" className="px-6 py-3">
                Edad
              </th>
           
              <th scope="col" className="px-6 py-3">
                Fecha
              </th>
              <th scope="col" className="px-6 py-3">
                Hora
              </th>
              <th scope="col" className="px-6 py-3">
                Síntomas
              </th>
              <th scope="col" className="px-6 py-3"></th>
              <th scope="col" className="px-6 py-3"></th>
              
            </tr>
          </thead>

          <TablaFilas
            datos={datalist}
            onRemove={handleRemove}
            recargarDatos={recargarDatos}
            lastIndex={lastIndex}
            firstIndex={firstIndex}
          />
        </table>
      </div>
    </section>
  );
};

export default TablaCabecera;
