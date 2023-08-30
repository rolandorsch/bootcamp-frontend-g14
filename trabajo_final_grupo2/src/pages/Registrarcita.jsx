
import { createPortal } from 'react-dom';
import ModalContent from '../pages/ModalContent';
import { useState } from 'react';

 function Registrarcita({datos, recargarDatos}) {
  const [showModal, setShowModal] = useState(false);

  console.log("Datos",datos)
  return (
    <>
      <button onClick={() => setShowModal(true)}>
        Registrar Cita
      </button>
      {showModal && createPortal(
        <ModalContent onClose={() => setShowModal(false) } datos={datos} recargarDatos={recargarDatos}/>,
        document.body
      )}
    </>
  );
}

export default Registrarcita;