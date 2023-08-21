import React from "react";
import { useState, useEffect } from "react";

const AppointmentsFormModal = ({ onActivo ,  visible }) => {
  const [showModal, setShowModal] = useState(false);
  console.log("visble1",visible)
  const setShowModal1 = (valor) => {
    alert("onactivomodal");
    //visible=false;
   // console.log("visble",visible)
    setShowModal(false);
    onActivo(false);
    
  };

  if (visible && !showModal) 
  {console.log("visble",visible)
    alert("visiblemodal");
    setShowModal(true);
  }

  useEffect(() => {
    alert("eff")
    if (visible && !showModal) 
    {console.log("visble",visible)
      alert("visiblemodal");
      setShowModal(true);
    }
  }, [visible]);

  /*
  alert("onactivomodal", { veractivo });

  useEffect(() => {
    if (veractivo && !showModal) {
      alert("ssddd");
      setShowModal(veractivo);
      veractivo = false;
    }
  }, [veractivo]);
*/
  //{console.log("onactivo",{onActivo})}
  /*
  const setShowModal= (valor) => {
    //cada que presiono una tecla o cambia el input
    // const name = event.target.name
    // const value = event.target.value
    alert('hola')
    
    veractivo=false;
    //onActivo(valor);
    setShowModal2(valor);
  
    alert(veractivo)
    

  };
*/

  return (
    <>
      {console.log("entro")}
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Modal Title</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal1(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves! They're slowed down by their perception of
                    themselves. If you're taught you can’t do anything, you
                    won’t do anything. I was taught I could do everything.
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal1(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default AppointmentsFormModal;
