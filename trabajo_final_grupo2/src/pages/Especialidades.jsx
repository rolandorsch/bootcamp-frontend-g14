import React from "react";
import { Link , Routes , Route , Router, BrowserRouter } from 'react-router-dom';

function Especialidades() {
  return (
    <>
      
        <div className="">
          <h2
            className="text-white justify-center flex align-middle items-center text-5xl pt-40 pb-10 mb-20 relative overflow-hidden font-medium
     sm: bg-red "
            id="servicios"
          >
            {" "}
            NUESTROS SERVICIOS
          </h2>
        </div>

        <body className=" w-auto h-full flex justify-center  " id="">
          <div className="flex-col justify-start items-start">
            <ul>
              {" "}
              <Link
                className=" font-semibold right-8 pr-10 relative flex justify-center  p-7 text-xl text-white rounded-br-full rounded-full rounded-tr-none "
                id="button"
                to="/"
              >
                {" "}
                Implantes Dentales{" "}
              </Link>
            </ul>
            <ul>
              {" "}
              <Link
                className=" font-semibold right-8 pr-10 relative top-3  flex justify-center  p-7 text-xl text-white rounded-br-full rounded-full rounded-tr-none "
                id="button2"
                href=""
              >
                {" "}
                Rehabilitacion Oral
              </Link>
            </ul>
            <ul>
              {" "}
              <Link
                className=" font-semibold right-8 pr-10 relative top-6 flex justify-center  p-7 text-xl text-white rounded-br-full rounded-full rounded-tr-none"
                href=""
                id="button3"
              >
                {" "}
                Brackets
              </Link>{" "}
            </ul>
            <ul>
              {" "}
              <Link
                id="button4"
                href=""
                className="font-semibold right-8 relative top-9 pr-10 flex justify-center  p-7 text-xl text-white rounded-br-full rounded-full rounded-tr-none"
              >
                Odontologia <br />
                Restauradora y estetica
              </Link>
            </ul>
            <ul>
              {" "}
              <Link
                id="button5"
                className="font-semibold right-8  relative top-12 pr-10 flex justify-center  p-7 text-xl text-white rounded-br-full rounded-full rounded-tr-none"
                href=""
              >
                Periodoncia{" "}
              </Link>
            </ul>
          </div>

          <div
            className=" bg-white flex flex-col columns-3 border h-screen bg-#f6fafd rounded-3xl w-8/12"
            id="main_wrapper  "
          >
            <div className="flex justify-start">
              <div className="flex">
                <h2 className="text-6xl relative left-14 flex justify-start text-blue-900 font-medium mt-14">
                  Implantes Dentales
                </h2>
              </div>
              <div className="flex">
                <img
                  src="src/assets/Implantologia-Oral.webp"
                  className="absolute rounded-br-3xl rounded-tr-2x1 rounded-tl-2xl  right-64 border-4"
                  alt=""
                  clip-path= "polygon(0% 0%,100% 0%,100% 83%,49% 92%,0% 83%)"
                />
              </div>
            </div>
            <div className="flex justify-start">
              <h2 className="flex text-3xl p-5 relative left-9 text-blue-900 font-semibold">
                Pertenece a la especialidad de la implantología la cual está{" "}
                <br />
                encargada de la sustitución estructural, funcional y estética{" "}
                <br /> de las piezas dentarias perdidas o ausentes.
              </h2>
            </div>
            <div className="flex justify-start text-2xl relative left-14 ">
              <p>
                Al perder un diente, las formas convencionales de sustitución{" "}
                <br /> de dientes siempre fue realizada por la colocación de un
                puente <br /> fijo o prótesis removible, ahora la implantología
                oral integrada es <br />
                capaz de restituir ese diente perdido por uno nuevo y sin <br />
                sacrificio de dientes ni incómodos aparatos removibles.
              </p>
            </div>

            <div className=" flex justify-start ">
              <h2 className="text-4xl font-sans pt-20 pb-10 left-14 relative  underline font-semibold text-blue-900">
                Preguntas Frecuentes:
              </h2>
            </div>

            <div
              className="flex-col justify-start p-8 relative left-14 border "
              id="frequent"
            >
              <h2 className="  text-xl pb-4 font-semibold text-blue-600">
                ¿QUE ES UN IMPLANTE?
              </h2>
              <p className=" text-lg font-semibold">
                Son dispositivos de titanio con capacidad de osteointegración,
                sustituyen las raíces de los dientes ausentes siendo soporte de
                futuras prótesis fijas, permite masticar con total comodidad,
                sonreír, hablar con la misma seguridad que con nuestros propios
                dientes brindando confort y estética.
              </p>
              <img
                className=" relative left-96"
                src="/src/assets/ab.webp"
                alt=""
              />
            </div>
          </div>
        </body>
    </>
  );
}

export default Especialidades;
