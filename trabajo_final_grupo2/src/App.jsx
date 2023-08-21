import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from './context/UserContext'

import Home from "./pages/Home";
import Conocenos from "./pages/Conocenos";
import Especialidades from "./pages/Especialidades";
import Laboratorio from "./pages/Laboratorio";
import Contacto from "./pages/Contacto";

import Register from "./pages/Register";
import Login from "./pages/Login";
import LayoutBase from "./layouts/LayoutBase";
import Character from "./pages/Character";

function App() {
  return (
    <>
    <UserProvider>
      <BrowserRouter>
         <div className="bg-[url('././src/assets/slider-1.jpg')] w-full h-full bg-cover bg-center bg-no-repeat mb-8 md:h-[650px] "> 
        <LayoutBase>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/conocenos" element={<Conocenos />} />
            <Route path="/especialidades" element={<Especialidades />} />
            <Route path="/laboratorio" element={<Laboratorio />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/character/:id" element={<Character />} />
          </Routes>
        </LayoutBase>

         </div> 
       
      </BrowserRouter>
      
      </UserProvider>     
    </>
  );
}

export default App;
