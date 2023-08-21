import { useState } from "react";

import AppointmentsForm from "../components/appointments/AppointmentsForm";
import AppointmentsList from "../components/appointments/AppointmentsList";
import AppointmentsFormModal from "../components/appointments/AppointmentsFormModal";

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [appointmentSelected, setAppointmentSelected] = useState({});
  const [activo, setActivo] = useState(false);
  


  const handleSaveAppointment = (form, ope) => {
    if (ope == "act") {
      let newData = appointments.map((elemento) =>
        elemento.id === form.id ? form : elemento
      );
      setAppointments(newData);
    } else {
      setAppointments([...appointments, form]);
    }
    /*setAppointments([])*/
  };

  const handleRemove = (id) => {
    console.log("handleRemove", id);
    alert("remover");
    const newAppointmentss = appointments.filter(
      (appointmentsa) => appointmentsa.id !== id
    );
    setAppointments(newAppointmentss);
  };

  const handleEdit = (appointments) => {
    setAppointmentSelected(appointments);
  };
  const handleEditModal1 = (activo) => {
    //alert("handleEditModal", {x});
    //console.log(x);
    //let activar = true;
   // setActivo(true);
  }

  const handleEditModal = (activo) => {
    //alert("handleEditModal", {activo});
    //console.log(x);
    //let activar = true;
    setActivo(activo);
    /*setAppointmentSelected(appointments);*/

    //alert("activo",activo)
    //console.log("activo",activo)
    /*
    if (activo){
      setActivo(false);
    }else
    {setActivo(true)}
    alert(activo)*/
  };

  return (
    <>
      <AppointmentsFormModal 
      onActivo={handleEditModal} 
      visible={activo} />

      <AppointmentsForm
        onSaveAppointment={handleSaveAppointment}
        editReg={appointmentSelected}
      />
      <AppointmentsList
        appointments={appointments}
        onRemove={handleRemove}
        onEdit={handleEdit}
        onEditModal={handleEditModal}
      />
    </>
  );
};

export default Appointments;
