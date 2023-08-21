import { useContext } from "react"

import { Link } from 'react-router-dom'

import { useNavigate } from 'react-router-dom'

// import useAuth from "../hooks/useAuth"

import { UserContext } from "../context/UserContext"

const LayoutBase = (props) => {
  //const { logout,isAuth } = useAuth();
  const { user, cleanUser } = useContext(UserContext)
  const navigate = useNavigate();

  const handleLogout = () => {
    //logout();
    cleanUser();
    navigate("/login");
  };
  console.log("user",user)

  return (
    <>
      <header className="bg-indigo-700 py-4 px-6">
        <div className="container mx-auto flex justify-between">
          <h1 className="font-bold text-stone-100">React router</h1>
          <nav className="flex gap-3 text-stone-100">
            {user?.usuario  && (
              <>
                <Link to="/" id="Inicio">
                  Inicio
                </Link>
                <Link to="/conocenos">Conócenos</Link>
                <Link to="/especialidades">Especialidades</Link>
                <Link to="/laboratorio">Laboratorio Dental</Link>
                <Link to="/contacto">Contacto</Link>
                <button onClick={handleLogout}>Logout</button>
              </>
            )}

            {!user?.usuario  && (
              <>
                <Link to="/login">Iniciar Sesión</Link>
                <Link to="/register">Registrar</Link>
                
              </>
            )}
          </nav>
        </div>
      </header>
      <main className="my-6">
        <div className="container mx-auto">{props.children}</div>
      </main>
    </>
  );
};

export default LayoutBase;
