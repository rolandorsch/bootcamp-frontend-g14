
let preguntas = [
  "¿Cuál es el equipo peruano más goleado de la Copa Libertadores?",
  "¿Cuantas maneras de aplicar CSS a nuestro sitio web existen?",
  "¿Que palabra se usa para declarar una constante en javascript",
];

let respuestas = [
  [
    "Cienciano",
    "Alianza Lima",
    "San Martin",
    "Melgar",
  ],
  ["1", "3", "2", "0"],
  ["var", "let", "cons", "Ninguna de las anteriores"],
];

/*let indice_aleatorio=Math.floor(Math.random()*preguntas.length)
let  respuestas_posibles=respuestas[indice_aleatorio]*/

/*alert(indice_aleatorio)*/


for (i in respuestas) {
    console.log()
    let txtrpta = "";
  for (ii in respuestas[i]) {
    txtrpta +=
      `<label><input type="radio" name="alternativas${i}" onclick="verificar(event,${i},${ii})">${respuestas[i][ii]}</label><br>`;
      /*`<label><input type="radio" name="alternativas${i}" onclick="alert('hola')">${respuestas[i][ii]}</label><br>`;*/
      /*"<label><input type='radio' name='alternativas"+i+"' onclick='alert("+ '"click"'+ ")'> " + respuestas[i][ii] + "</label><br>";*/
  }

  /*alert(Number(i))
  
  alert("pregunta"+(Number(i)+1))
  */
  document.getElementById("pregunta"+(Number(i)+1)).innerHTML = preguntas[i]
  
  document.getElementById("alternativa"+(Number(i)+1)).innerHTML = txtrpta;
  
  function verificar(evento, index, indexa)
  {
/*console.log(evento)*/
/*console.log(index)*/
/*console.log(indexa)*/

  }

  /*
  switch (i) {
    case "0":
      document.getElementById("pregunta1").innerHTML = preguntas[0];
      document.getElementById("alternativa1").innerHTML = txtrpta;
      break;
    case "1":
      document.getElementById("pregunta2").innerHTML = preguntas[1];
      document.getElementById("alternativa2").innerHTML = txtrpta;
      break;
    case "2":
      document.getElementById("pregunta3").innerHTML = preguntas[2];
      document.getElementById("alternativa3").innerHTML = txtrpta;
      break;
  }
  */
}

//document.getElementById("pregunta1").innerHTML = preguntas[0];

