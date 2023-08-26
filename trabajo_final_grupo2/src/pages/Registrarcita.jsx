
import { createPortal } from 'react-dom';
import ModalContent from '../pages/ModalContent';
import { useState } from 'react';

 function Registrarcita() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button onClick={() => setShowModal(true)}>
        Registrar Cita
      </button>
      {showModal && createPortal(
        <ModalContent onClose={() => setShowModal(false)} />,
        document.body
      )}
    </>
  );
}

export default Registrarcita;