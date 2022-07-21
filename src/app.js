/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  var pronoun = ["el", "la", "los", "las", "un", "una", "unos", "unas"];
  var adj = [
    "maravillosa",
    "grande",
    "gran",
    "espectacular",
    "tenebrosa",
    "tenebroso",
    "maravilloso"
  ];
  var noun = [
    "caminante",
    "rata",
    "raton",
    "tipo",
    "tipa",
    "chico",
    "chica",
    "mundo"
  ];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let x = 0; x < noun.length; x++) {
        console.log(pronoun[i], adj[j], noun[x], ".cl");
      }
    }
  }
};
