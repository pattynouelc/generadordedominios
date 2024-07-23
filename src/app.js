/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["el", "pequeño"];
let noun = ["babuino", "mapache", "pinguino"];
let dominio = pronoun + adj + noun;

const generarDominio = longitud => {
  let dominioGenerado = "";
  for (let x = 0; x < longitud; x++) {
    let aleatorio = Math.floor(Math.random() * dominio.length);
    dominioGenerado += dominio.charAt(aleatorio);
  }

  return dominioGenerado;
};

for (let x = 0; x < 3; x++) {
  console.log(generarDominio(10));
}
