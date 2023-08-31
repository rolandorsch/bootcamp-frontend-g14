import Registrarcita from "../../pages/Registrarcita";
const TablaFilas = ({
  datos,
  onRemove,
  recargarDatos,
  lastIndex,
  firstIndex,
}) => {
  //console.log("lastindex", { lastIndex });
  return (
    <>
      <tbody>
        {datos
          .map((cita) => {
            {
              console.log("id", cita.id);
            }
            return (
              <tr
                key={cita.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-green-300 dark:hover:bg-gray-600"
              >
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      key={cita.nombre}
                    />
                    <label
                      htmlFor="checkbox-table-search-1"
                      className="sr-only"
                    >
                      checkbox
                    </label>
                  </div>
                </td>
                <td>{cita.id}</td>
                <td>{cita.nombre}</td>
                <td>{cita.edad}</td>
                <td>{cita.fecha}</td>
                <td>{cita.hora}</td>
                <td>{cita.sintomas}</td>
                <td>
                  <Registrarcita
                    datos={cita}
                    recargarDatos={recargarDatos}
                    titulo="Editar"
                    colordefondo={"bg-green-800"}
                    borde={"border p-2"}
                  />
                  {/* <input
                  className="border p-2 bg-green-800 text-white rounded-md cursor-pointer"
                  type="submit"
                  value="Editar"
                  onClick={() => onEdit(appointment)}
                /> */}
                </td>
                <td>
                  <input
                    className="border p-2 bg-red-800 text-white rounded-md cursor-pointer"
                    type="submit"
                    value="Eliminar"
                    onClick={() => onRemove(cita.id)}
                  />
                </td>

                {/* <td> */}
                {/* <button
                  className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => onEditModal(true)}
                >
                  Open regular modal
                </button> */}
                {/*  <Registrarcita datos={""} recargarDatos={recargarDatos} titulo="Nuevo" colordefondo={"bg-blue-800"}  borde={"border p-2"}/> */}
                {/* <input
                  className="border p-2 bg-red-800 text-white rounded-md cursor-pointer"
                  type="submit"
                  value="Editar Modal"
                  onClick={() => onEditModal(appointment.id)}
                />
                 */}
                {/* </td> */}
              </tr>
            );
          })
          .slice(firstIndex, lastIndex)}
      </tbody>
    </>
  );
};

export default TablaFilas;
