function solicitudServidor(consulta, callback){
    setTimeout(function(){
      var respuesta = consulta + "lleno!";
      callback(respuesta);
    },5000);
  }
  
  
  function obtenerResultados(resultados){
    console.log("Respuesta del servidor: " + resultados);
  }
  
  solicitudServidor("El vaso está medio  ", obtenerResultados);