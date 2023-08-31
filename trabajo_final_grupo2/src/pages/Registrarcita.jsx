
import { createPortal } from 'react-dom';
import ModalContent from '../pages/ModalContent';
import { useState } from 'react';

 function Registrarcita({datos, recargarDatos, titulo, colordefondo , borde}) {
  const [showModal, setShowModal] = useState(false);

  console.log("Datos",datos)
  
  return (
    <>
      <button onClick={() => setShowModal(true)}  className={` ${borde}  ${colordefondo} text-white rounded-md cursor-pointer`}>
        {titulo}
      </button>
      {showModal && createPortal(
        <ModalContent onClose={() => setShowModal(false) } datos={datos} recargarDatos={recargarDatos}/>,
        document.body
      )}
    </>
  );
}

export default Registrarcita;