import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

  let sujetos = ["Mi perro", "El vecino", "Mi novio", "Mi abuela"];
  let acciones = ["se comió", "rompió", "perdió", "escondió"];
  let que = ["mis deberes", "las llaves", "el informe", "mi teléfono"];
  let circunstancias = ["justo antes de venir","mientras dormía","cuando estaba en el baño","en medio de la tormenta"];
 
function numeroAleatorio (a,b) {
  return Math.floor(Math.random() * (b - a) + a);
}

function esAleatorio(AnyArray) {
  let max = AnyArray.length = 4;
  let min = 0;
  console.log(min, max, AnyArray)
  let Aleatorio = numeroAleatorio(min,max);
  return AnyArray[Aleatorio];
}

window.onload = function() {
  console.log();
document.querySelector("#titulo").innerHTML = esAleatorio(sujetos) + " " + esAleatorio(acciones) + " " + esAleatorio(que) + " " + esAleatorio(circunstancias);
};