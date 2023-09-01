import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

let lblTitulo = "";
let subTitulo = "";
export default function ModalContent({ onClose, datos, recargarDatos }) {
  /*const [cargardatos, setCargardatos] = useState(datos);*/
  const MySwal = withReactContent(Swal);
  const [form, setForm] = useState({
    nombre: "",
    edad: "0",
    fecha: "2023-08-25",
    hora: "00:00:00",
    sintomas: "",
  });

  
  /* Ingresa cada vez que da Datos tiene alún cambio*/
  useEffect(() => {
    if (Object.keys(datos).length > 0) {
      setForm(datos);
    }
  }, [datos]);

  if (Object.keys(datos).length > 0) {
    /*si hat Datos en la variable Datos llena el formulario y asigna un titulo y subitulo al formulario. Esto para edición*/
    lblTitulo = "Editar Cita";
    subTitulo = "Editando Cita";
  } else {
    lblTitulo = "Registrar Cita";
    subTitulo = "Nueva Cita";
  }

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (event) => {
    //debugger;
    event.preventDefault();

    if (form.edad<=0){
      MySwal.fire({
        icon: "error",
        title: "Edad tiene que ser mayor a 0!",
      });
      return;
    }

    if (form.nombre.length===0){
      MySwal.fire({
        icon: "error",
        title: "Ingrese el nombre del paciente!!!",
      });
      return;
    }

    switch (lblTitulo) {
      case "Editar Cita":
        const url = `https://64e27946ab00373588190644.mockapi.io/api/v1/clientes/${form.id}`;
        const options = {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        };
        console.log(JSON.stringify(form));
        const response = await fetch(url, options);
        const data = await response.json();
        //setCargardatos(1);
        onClose();
        recargarDatos(1);
        break;
      case "Registrar Cita":
        const urlPost = `https://64e27946ab00373588190644.mockapi.io/api/v1/clientes`;
        const optionsPost = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        };
        const responsePost = await fetch(urlPost, optionsPost);
        const dataPost = await responsePost.json();
        //setCargardatos(1);
        //recargarDatos(1);
        onClose();
        break;
    }
  };

  return (
    <div className="modal">
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">{lblTitulo}</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-100 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={onClose}
              >
                <span className="bg-transparent text-black opacity-100 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  X
                </span>
              </button>
            </div>
            {/*body*/}

            <section className="w-96 p-4">
              <h2 className="text-2xl text-center mb-4">{subTitulo}</h2>

              <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="nombre"
                  className="border p-2 shadow-md rounded-md"
                  placeholder="Nombre del Paciente"
                  value={form.nombre}
                  onChange={handleChange}
                />
                <input
                  type="number"
                  name="edad"
                  min="0"
                  max="50"
                  className="border p-2 shadow-md rounded-md"
                  placeholder="Edad del Paciente"
                  value={form.edad}
                  onChange={handleChange}
                />

                <input
                  type="date"
                  name="fecha"
                  className="border p-2 shadow-md rounded-md"
                  placeholder="Fecha de la cita"
                  value={form.fecha}
                  onChange={handleChange}
                />
                <input
                  type="time"
                  name="hora"
                  className="border p-2 shadow-md rounded-md"
                  placeholder="Hora de la cita"
                  value={form.hora}
                  onChange={handleChange}
                />
                <textarea
                  name="sintomas"
                  className="border p-2 shadow-md rounded-md"
                  placeholder="Síntomas"
                  rows={3}
                  value={form.sintomas}
                  onChange={handleChange}
                />
                <input
                  type="submit"
                  className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
                px-4 py-3 mt-6"
                  value="Guardar"
                  onClick={handleSubmit}
                />

                {/* 
                <input
                  className="border p-2 bg-green-800 text-white rounded-md cursor-pointer"
                  type="submit"
                  value="Guardar"
                  onClick={handleSubmit}
                /> */}
              </form>

              {/*JSON.stringify(form)*/}
            </section>
            {/*  <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves! They're slowed down by their perception of
                    themselves. If you're taught you can’t do anything, you
                    won’t do anything. I was taught I could do everything.
                  </p>
                </div> */}
            {/*footer*/}
            {/*  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={onClose}
              >
                Close
              </button>
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={onClose}
              >
                Save Changes
              </button>
            </div> */}
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>

      {/* <div>Soy una ventana modal</div>
        <button onClick={onClose}>Cerrar</button> */}
    </div>
  );
}
