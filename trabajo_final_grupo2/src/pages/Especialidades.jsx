import React from "react";
import { Link , Routes , Route , Router, BrowserRouter } from 'react-router-dom';

function Especialidades() {
  return (
    <>
     
    
    <div className='flex-col container-fluid container   justify-center'>
      <div className=' container container-fluid'>
        <h2 className=" container-fluid right-20 font-serif text-black bg-no-repeat bg-no-center bg-cover justify-start flex align-middle items-center  text-5xl pt-20  bottom-6 pb-5 mb-10 relative overflow-hidden font-medium"
        style={{
          width: 3000
          
          
        }}
      >  NUESTROS SERVICIOS</h2>
      </div>

    <body className=" w-full h-full flex justify-center  " id=''>
      <div className='flex-col justify-start items-start'>
    
          <ul> <Link to= "/especialidades/" className=' bg-blue-500 font-semibold right-8 pr-10 relative flex justify-center  p-7 text-xl text-white rounded-br-full rounded-full rounded-tr-none ' id='button' >  Implantes Dentales </Link></ul>
          <ul> <Link to="/especialidades/rehabilitacion-oral" className=' bg-blue-500 font-semibold right-8 pr-10 relative top-3  flex justify-center  p-7 text-xl text-white rounded-br-full rounded-full rounded-tr-none ' id='button2' href="">  Rehabilitacion Oral</Link></ul>
          <ul> <Link to="/especialidades/brackets" className=' bg-blue-500 font-semibold right-8 pr-10 relative top-6 flex justify-center  p-7 text-xl text-white rounded-br-full rounded-full rounded-tr-none' href="" id='button3'>  Brackets</Link> </ul>
          <ul> <Link id='button4' href="" className=' bg-blue-500 font-semibold right-8 relative top-9 pr-10 flex justify-center  p-7 text-xl text-white rounded-br-full rounded-full rounded-tr-none'>
          Odontologia <br />
          Restauradora y estetica
            </Link>
          </ul>
          <ul> <Link id='button5' className=' bg-blue-500 font-semibold right-8  relative top-12 pr-10 flex justify-center  p-7 text-xl text-white rounded-br-full rounded-full rounded-tr-none' href="">Periodoncia </Link></ul>

      </div>

      <div className=' bg-white flex flex-col columns-3 border h-screen bg-#f6fafd rounded-3xl w-10/12' id='main_wrapper  '>
        <div className='flex justify-start'>
          <div className='flex'>
          <h2 className="text-6xl relative left-14 flex justify-start text-blue-900 font-medium mt-14">Implantes Dentales</h2>
          </div>
          <div className='flex'>
            <img src="/src/assets/123.webp" className="absolute rounded-br-3xl rounded-tr-2x1 rounded-tl-2xl  right-48 border-4" alt="2" />
          </div>
        </div>
        <div className='flex justify-start'>
        <h2 className='flex text-3xl p-5 relative left-9 text-blue-900 font-semibold'>Pertenece a la especialidad de la implantología la cual está  <br />encargada de la sustitución estructural,  funcional y estética <br /> de las piezas dentarias perdidas o ausentes.</h2>
        </div>
        <div className='flex justify-start text-2xl relative left-14 '>
        <p>Al perder un diente, las formas convencionales de sustitución <br /> de dientes siempre fue realizada por la colocación  de un puente <br /> fijo o prótesis removible,  ahora la implantología oral integrada es  <br />capaz de restituir ese diente perdido por uno nuevo y sin  <br />sacrificio de dientes ni incómodos aparatos removibles.</p>
        </div>

        <div className=' flex justify-start '>
          <h2 className="text-4xl font-sans pt-20 pb-10 left-14 relative  underline font-semibold text-blue-900">Preguntas Frecuentes:</h2>
        </div>

        <div className='flex-col justify-center p-8 relative left-16 border w-11/12 border-stone-500 bg-color[-s]  ' id='frequent'>
        < h2 className='  text-xl pb-4 font-semibold text-blue-600'>¿QUE ES UN IMPLANTE?</h2>
        <p className=' text-lg font-semibold'>Son dispositivos de titanio con capacidad de osteointegración, sustituyen las raíces de los dientes ausentes siendo soporte de futuras prótesis fijas, permite masticar con total comodidad, sonreír, hablar con la misma seguridad que con nuestros propios dientes brindando confort y estética.</p>
        <img className=' relative left-96' src="/src/assets/ab.webp" alt="" />
        </div>
      </div>

    </body>
    </div>
  
    </>
  );
}

export default Especialidades;
