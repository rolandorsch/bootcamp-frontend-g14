import { useState, useContext } from "react";

import { useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";


//import useAuth from "../hooks/useAuth"

import { UserContext } from "../context/UserContext";

const MySwal = withReactContent(Swal);

const Login = () => {
  const { storeUser } = useContext(UserContext);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  // const { setAuth } = useAuth()

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = form.email;
    const password = form.password;

    //console.log (email)
   // console.log (password)

    const url = `https://64e27946ab00373588190644.mockapi.io/api/v1/usuarios?usuario=${email}&clave=${password}`;

    const response = await fetch(url);

    const data = await response.json();

    
    //console.log(data);

    setForm({ email: "", password: "" });
    console.log(data.length)
    if (data.length === 1) {
      const cloneData = { ...data[0] };

      delete cloneData.password;

      // localStorage.setItem('auth', JSON.stringify(cloneData))2
      // setAuth(cloneData)
      storeUser(cloneData);

      navigate("/");
    } else {
      MySwal.fire({
        icon: "error",
        title: "Credenciales incorrectas!",
      });
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen items-center">
      <div className=" lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
        <div id="axis" className="eight">
          <img
            id="img1"
            className="object car largerx"
            src="/src/assets/imagen_odo.png"
          />
          <img
            id="img2"
            className="object car largerx"
            src="/src/assets/dental-ore.png"
          />
        </div>
      </div>

      <div
        className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3  px-6 lg:px-16 xl:px-12
          flex items-center justify-center"
      >
        <div className="w-full h-100">
          <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
            Ingresar a su Cuenta
          </h1>

          <form className="mt-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700">Usuario</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Email Address"
                class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                autofocus
                autocomplete
                required
                onChange={handleChange}
                value={form?.email}
              />
            </div>

            <div className="mt-4">
              <label className="block text-gray-700">Contraseña</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter Password"
                minlength="3"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                  focus:bg-white focus:outline-none"
                required
                onChange={handleChange}
                value={form?.password}
              />
            </div>

            {/*   <div className="text-right mt-2">
              <a
                href="#"
                className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
              >
                Recordar Contraseña?
              </a>
            </div>
 */}
            <button
              type="submit"
              className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
                px-4 py-3 mt-6"
            >
              Ingresar
            </button>
          </form>

          <hr class="my-6 border-gray-300 w-full" />

          {/* 
          <p className="mt-8">
            Necesitas una cuentaaccount?{" "}
            <a href="#" class="text-blue-500 hover:text-blue-700 font-semibold">
              Crear una account
            </a>
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
