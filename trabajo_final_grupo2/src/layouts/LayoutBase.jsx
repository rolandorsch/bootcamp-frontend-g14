import { useContext } from "react"

import { Link } from 'react-router-dom'

import { useNavigate } from 'react-router-dom'

// import useAuth from "../hooks/useAuth"

import { UserContext } from "../context/UserContext"
import { useState } from "react";
import RegistrarCita from "../pages//Registrarcita";


/*
export default function PortalExample() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button onClick={() => setShowModal(true)}>
        Mostrar modal con uso de portal
      </button>
      {showModal && createPortal(
        <ModalContent onClose={() => setShowModal(false)} />,
        document.body
      )}
    </>
  );
}
*/
const LayoutBase = (props) => {
  //const { logout,isAuth } = useAuth();
  const { user, cleanUser } = useContext(UserContext);
  const [activo, setActivo] = useState(false);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  //console.log('showModal',showModal)
  const handleLogout = () => {
    //logout();
    //alert("hola");
    //console.log("handlelog",user)
    cleanUser();
    navigate("/login");
  };
  //console.log("user",user)
  //alert('showModal',showModal)

  
  const onClose = () => {
    alert("onClose");
    <PortalExample />
   console.log('showModal',showModal)
    if (showModal) {
      setShowModal(false);
    } else {
      setShowModal(true);
    }
  };
 
  return (
    <>
      <header className="bg-indigo-700 py-4 px-6">
        <div className="container mx-auto flex justify-between">
          <h1 className="font-bold text-stone-100">Odontologia</h1>
          <nav className="flex gap-3 text-stone-100">
            {user?.usuario  && (
              <>
               
                <Link to="/conocenos">Usuarios</Link>
                
                <Link to="/laboratorio">Clientes</Link>
                <Link to="/contacto" >Citas</Link>
                <button onClick={handleLogout}>Logout</button>
              </>
            )}

            {!user?.usuario  && (
              <>
               <Link to="/" id="Inicio">
                  Inicio
                </Link>
              <Link to="/especialidades">Especialidades</Link>
                <Link to="/login">Iniciar Sesión</Link>
                <Link to="/registrarcita"><RegistrarCita datos={''}  titulo={'Registrar Cita'} colordefondo={'red'} recargarDatos={''}/></Link>
                
                
              </>
              
            )}
          </nav>
        </div>
      </header>
      
      <main className="my-6">
        <div className="container mx-auto">{props.children}</div>
      </main>

     {/*  {showModal? 
      <p>hola</p>
        :<p>holax</p>
        
      } */}
  
    </>
    
  );
};

export default LayoutBase;

