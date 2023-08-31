import { useState, useEffect } from "react";

import TablaCabecera from "./TablaCabecera";
import { fetchCitas } from "../../services/citas";
import Paginacion from "../Paginacion";
import Paginacion1 from "../Paginacion1";

const Tabla = () => {
  const [recargar, setRecargar] = useState(0);
  const [datos, setCitas] = useState([]);
  /***Paginacion***/
  const totalDatos = datos.length;
  const [datosPerPage, setdatosPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);

  const lastIndex = currentPage * datosPerPage;
  const firstIndex = lastIndex - datosPerPage;

  //alert("appointm 1");

  useEffect(() => {
    // alert("effec");
    fetchCitas().then((data) => setCitas(data));
  }, [recargar]);

  const handleRemove = (id) => {
    //console.log("handleRemove", id);
    //alert("remover");
    const newAppointmentss = appointments.filter(
      (appointmentsa) => appointmentsa.id !== id
    );
    setAppointments(newAppointmentss);
  };

  const recargarDatos = (x) => {
    setRecargar(recargar + x);
  };

  return (
    <>
      {
        <Paginacion1
          datosPerPage={datosPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalDatos={totalDatos}
          lastIndex={lastIndex}
          firstIndex={firstIndex}
        />
      }
    {/*   {
        <Paginacion
          datosPerPage={datosPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalDatos={totalDatos}
        />
      } */}
      {
        <TablaCabecera
          datos={datos}
          onRemove={handleRemove}
          recargarDatos={recargarDatos}
          lastIndex={lastIndex}
          firstIndex={firstIndex}
        />
      }
    </>
  );
};

export default Tabla;
