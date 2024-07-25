/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["el", "nuestros", "los"];
let adj = ["gran", "maravilloso", "inigualable"];
let noun = ["babuino", "mapache", "pinguino"];

for (let x = 0; x < pronoun.length; x++) {
  for (let y = 0; y < adj.length; y++) {
    for (let z = 0; z < noun.length; z++) {
      console.log(pronoun[x] + adj[y] + noun[z] + ".com");
    }
  }
}
