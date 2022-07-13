/* eslint-disable */
import "bootstrap";
import "./style.css";

let pronoun = ["el", "nuestro", "su", "una", "un"];
let adj = ["gran", "genial", "super"];
let noun = ["cat", "corredor", "decorador"];

function domainGenerator(pronoun, adj, noun) {
  for (let a = 0; a < pronoun.length; a++) {
    for (let b = 0; b < adj.length; b++) {
      for (let c = 0; c < noun.length; c++) {
        let a = Math.floor(Math.random() * pronoun.length);
        let b = Math.floor(Math.random() * adj.length);
        let c = Math.floor(Math.random() * noun.length);
        let nuevoNombre = document.createTextNode(
          pronoun[a] + adj[b] + noun[c] + ".com"
        );
        let lista = document.getElementById("domainList");
        let elemento = document.createElement("div");
        elemento.className = "alert alert-dark";
        lista.appendChild(elemento);
        elemento.appendChild(nuevoNombre);
        let seleccionador = document.createElement("input");
        seleccionador.className = "form-check-input";
        seleccionador.setAttribute("type", "radio");
        seleccionador.setAttribute("name", "opcion");
        seleccionador.setAttribute("value", nuevoNombre.textContent);
        elemento.appendChild(seleccionador);
      }
    }
  }

  const selectores = document.querySelectorAll("input");
  for (let i = 0; i < selectores.length; i++) {
    selectores[i].addEventListener("input", function() {
      if (selectores[i].checked) {
        let elegido = selectores[i].value;
        let titulo = document.querySelector("#titulo");
        titulo.innerHTML = elegido;
      }
    });
  }
}

document.querySelector("#boton").addEventListener("click", function() {
  domainGenerator(pronoun, adj, noun);
  document.querySelector("#boton").style.display = "none";
});
