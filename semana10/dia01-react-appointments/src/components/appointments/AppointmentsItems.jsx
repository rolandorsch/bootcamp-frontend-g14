const AppointmentsItems = ({ appointments, onRemove, onEdit, onEditModal }) => {
  return (
    <>
      {appointments.map((appointment) => {
        return (
          <tbody>
            <tr
              key={appointment.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-green-300 dark:hover:bg-gray-600"
            >
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    key={appointment.petName}
                  />
                  <label htmlFor="checkbox-table-search-1" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>

              <td>{appointment.petName}</td>
              <td>{appointment.petAge}</td>
              <td>{appointment.ownerName}</td>
              <td>{appointment.appointmentDate}</td>
              <td>{appointment.appointmentTime}</td>
              <td>{appointment.symptoms}</td>
              <td>
                <input
                  className="border p-2 bg-green-800 text-white rounded-md cursor-pointer"
                  type="submit"
                  value="Editar"
                  onClick={() => onEdit(appointment)}
                />
              </td>
              <td>
                <input
                  className="border p-2 bg-red-800 text-white rounded-md cursor-pointer"
                  type="submit"
                  value="Eliminar"
                  onClick={() => onRemove(appointment.id)}
                />
              </td>
              <td>
                <button
                  className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => onEditModal(true)}
                >
                  Open regular modal
                </button>
                {/* <input
                  className="border p-2 bg-red-800 text-white rounded-md cursor-pointer"
                  type="submit"
                  value="Editar Modal"
                  onClick={() => onEditModal(appointment.id)}
                />
                 */}
              </td>
            </tr>
          </tbody>
        );
      })}
    </>
  );
};

export default AppointmentsItems;
