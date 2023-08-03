const AppointmentsItems = ({ appointments }) => {
  console.log(appointments);
  appointments.map((appointment) => {
    return (
      <>
      {console.log("hola")}
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
      </>
    );
  });
};
export default AppointmentsItems;
