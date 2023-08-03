// TODO: Necesitamos crear un componente para listar las citas. Uno llamado ApointmentItem y mejorar los estilos.
import AppointmentsItems  from "./AppointmentsItems"
const AppointmentsList = ({ appointments }) => {
  return (
    <section>
      <h2 className="text-2xl text-center mb-4">Listado de Pacientes</h2>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div class="pb-4 bg-white dark:bg-gray-900">
          <label for="table-search" class="sr-only">
            Search
          </label>
          <div class="relative mt-1">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="table-search"
              class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for items"
            />
          </div>
        </div>
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-100 uppercase bg-green-600 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="p-4">
                <div class="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-all-search" class="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" class="px-6 py-3">
                Nombre
              </th>
              <th scope="col" class="px-6 py-3">
                Edad
              </th>
              <th scope="col" class="px-6 py-3">
                Dueño
              </th>
              <th scope="col" class="px-6 py-3">
                Hora
              </th>
              <th scope="col" class="px-6 py-3">
                Síntomas
              </th>
            </tr>
          </thead>
                <AppointmentsItems appointments={appointments}  />  
 
{/* 
          {appointments.map((appointment) => {
            return (
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-green-300 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                  <div class="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label for="checkbox-table-search-1" class="sr-only">
                      checkbox
                    </label>
                  </div>
                </td>
                <td key={appointment.petName}>{appointment.petName}</td>
                <td key={appointment.petAge}>{appointment.petAge}</td>
                <td key={appointment.ownerName}>{appointment.ownerName}</td>
                <td key={appointment.appointmentDate}>
                  {appointment.appointmentDate}
                </td>
                <td key={appointment.appointmentTime}>
                  {appointment.appointmentTime}
                </td>
                <td key={appointment.symptoms}>{appointment.symptoms}</td>
              </tr>
            );
          })}
 */}        </table>
      </div>      
    </section>
  );
};

export default AppointmentsList;
