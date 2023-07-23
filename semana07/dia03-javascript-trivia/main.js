const rptCorrecta = document.querySelector(".rpt__correcta");
const rptInCorrecta = document.querySelector(".rpt__incorrecta");
const btn__next = document.querySelector(".btn__next");
const btn_inicio = document.querySelector(".btn_inicio");

let contadorPreguntas = 0;
let respuestasArray = [];
let contadorCorrectas = 0;
let contadorInCorrectas = 0;

let preguntas = [
  "¿Cuál es el equipo peruano más goleado de la Copa Libertadores?",
  "¿Cuantas maneras de aplicar CSS a nuestro sitio web existen?",
  "¿Que palabra se usa para declarar una constante en javascript",
];

let respuestas = [
  ["Cienciano", "Alianza Lima", "San Martin", "Melgar"],
  ["1", "3", "2", "0"],
  ["var", "let", "cons", "Ninguna de las anteriores"],
];

function rptaCorrectaButton() {
  //actualiza el botón de correctas con el contador
  rptCorrecta.innerHTML = "Respuesta correcta " + contadorCorrectas;
}

function rptaInCorrectaButton() {
  //actualiza el botón de incorrectas con el contador

  rptInCorrecta.innerHTML = "Respuesta incorrecta " + contadorInCorrectas;
}

//radioButtons[i].addEventListener("click", function (event) {
let radioButtons = document.querySelectorAll(".task__Radio");

function inicio() {
  contadorPreguntas = 0;
  respuestasArray = [];
  contadorCorrectas = 0;
  contadorInCorrectas = 0;
  rptInCorrecta.innerHTML = "Respuesta incorrecta 0";
  rptCorrecta.innerHTML = "Respuesta correcta 0";

  let txtrpta = "";
  document.getElementById("pregunta1").innerHTML = preguntas[contadorPreguntas];
  for (ii in respuestas[contadorPreguntas]) {
    txtrpta += `<button class="task__Radio text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-left mr-2 mb-2 w-full  type="button" name="alternativas${contadorPreguntas}" >${respuestas[contadorPreguntas][ii]}</button><br>`;
  }
  document.getElementById("alternativa1").innerHTML = txtrpta;
  contadorPreguntas++;
  radioButtons = document.querySelectorAll(".task__Radio");
  btn__next.disabled = true;
  btn__next.style = "background:white;color:gainsboro";
  eventospintar();
}

btn_inicio.addEventListener("click", function (event) {
  
   // Form cancel button closes the dialog box
   var favDialog = document.getElementById("favDialog");
    favDialog.close();
    inicio();
  
});

btn__next.addEventListener("click", function (event) {
  // console.log(event);
  //alert(btn__next.disabled);
  if (btn__next.disabled) {
    alert("seleccion respuesta");
  }
  if (contadorPreguntas == 3) {
    return;
  }

  let txtrpta = "";
  document.getElementById("pregunta1").innerHTML = preguntas[contadorPreguntas];
  for (ii in respuestas[contadorPreguntas]) {
    txtrpta += `<button class="task__Radio text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-left mr-2 mb-2 w-full  type="button" name="alternativas${contadorPreguntas}" >${respuestas[contadorPreguntas][ii]}</button><br>`;
  }
  document.getElementById("alternativa1").innerHTML = txtrpta;
  contadorPreguntas++;
  radioButtons = document.querySelectorAll(".task__Radio");
  //console.log(radioButtons.length);
  btn__next.disabled = true;
  btn__next.style = "background:white;color:gainsboro";
  eventospintar();
});

function eventospintar() {
  for (var i = 0; i < radioButtons.length; i++) {
    /*console.log("radioButtons");*/
    radioButtons[i].addEventListener("click", function (event) {
      const found = respuestasArray.findIndex(
        (element) => element.pregunta === event.target.name
      );
      console.log("found==>" + found);

      if (found >= 0) {
        /*alert("ya existe");*/
        return;
      }

      let respuesta = {
        pregunta: event.target.name,
        respuesta: event.target.innerHTML,
        puntaje: 0,
      };

      let clicked = event.target;

      /*alert(clicked.innerHTML);*/
      switch (clicked.name) {
        case "alternativas0": //pregunta1
          switch (clicked.innerHTML) {
            case "Alianza Lima":
              respuesta.puntaje = 10;
              respuestasArray.push(respuesta);
              ++contadorCorrectas;
              rptaCorrectaButton();
              clicked.style =
                "cursor:default; background:rgb(22 163 74); color:white";
              btn__next.disabled = false;
              btn__next.style = "background:white";
              break;
            default:
              clicked.style =
                "cursor:default; background:rgb(220 38 38); color:white";
              contadorInCorrectas++;
              rptaInCorrectaButton();
              respuestasArray.push(respuesta);
              btn__next.disabled = false;
              btn__next.style = "background:white";
              break;
          }
          break;
        case "alternativas1": //pregunta2
          switch (clicked.innerHTML) {
            case "3":
              respuesta.puntaje = 10;
              respuestasArray.push(respuesta);
              ++contadorCorrectas;
              rptaCorrectaButton();
              clicked.style =
                "cursor:default; background:rgb(22 163 74); color:white";
              btn__next.disabled = false;
              btn__next.style = "background:white";
              break;
            default:
              clicked.style =
                "cursor:default; background:rgb(220 38 38); color:white";
              contadorInCorrectas++;
              rptaInCorrectaButton();
              respuestasArray.push(respuesta);
              btn__next.disabled = false;
              btn__next.style = "background:white";
              break;
          }
          break;
        case "alternativas2": //pregunta3
          switch (clicked.innerHTML) {
            case "Ninguna de las anteriores":
              respuesta.puntaje = 10;
              respuestasArray.push(respuesta);
              ++contadorCorrectas;
              rptaCorrectaButton();
              clicked.style =
                "cursor:default; background:rgb(22 163 74); color:white";
              //btn__next.disabled = false;
              btn__next.style = "background:white";
              break;
            default:
              clicked.style =
                "cursor:default; background:rgb(220 38 38); color:white";
              contadorInCorrectas++;
              rptaInCorrectaButton();
              respuestasArray.push(respuesta);
              //btn__next.disabled = false;
              //btn__next.style="background:white";
              break;
          }
          
          let favDialog = document.getElementById("favDialog");

          
          let mensaje_resultado = document.getElementById("mensaje_resultado");
          let mensaje_resultado_total = document.getElementById("mensaje_resultado_total");
          let mensaje_resultado_puntaje = document.getElementById("mensaje_resultado_puntaje");
          let mensaje_resultado_img = document.getElementById("mensaje_resultado_img");
          let mensaje = document.getElementById("mensaje");

          
          
          //console.log(contadorCorrectas);
          //console.log(contadorInCorrectas);
          if (contadorCorrectas>contadorInCorrectas){
            mensaje_resultado.innerHTML='¡GANASTE!'
            mensaje_resultado_total.innerHTML=`Respondiste ${contadorCorrectas} de 3`;
            mensaje_resultado_puntaje.innerHTML='Y este es tu puntaje:'+ contadorCorrectas*10;
            mensaje_resultado_img.innerHTML="&#128512";
            mensaje.style="background:rgb(22, 16,3 74)";

            
          }else if(contadorCorrectas<contadorInCorrectas){
            mensaje_resultado.innerHTML='¡PERDISTE!';
            mensaje_resultado_total.innerHTML=`Respondiste ${contadorCorrectas} de 3`;
            mensaje_resultado_puntaje.innerHTML='Y este es tu puntaje:'+ contadorCorrectas*10;
            mensaje_resultado_img.innerHTML="&#128542";
            mensaje.style="background:rgb(220, 38, 38 )";
          }

          
          /*
          respuestasArray.forEach(o =>  {
            if (o.puntaje==10){}
            console.log(o.pregunta, o.puntaje)
          });         
*/

          favDialog.showModal();
          break;
      }
    });
  }
}

inicio();
/*
function modalResultado() {
   var cancelButton = document.getElementById("cancel");
  var favDialog = document.getElementById("favDialog");

  // Update button opens a modal dialog
  updateButton.addEventListener("click", function () {
    favDialog.showModal();
  });

  // Form cancel button closes the dialog box
  cancelButton.addEventListener("click", function () {
    favDialog.close();
  });
}

modalResultado();
*/