/* eslint-disable */
import "bootstrap";
import "./style.css";

let pronoun = ["el", "nuestro", "su", "una", "un"];
let adj = ["gran", "genial", "super"];
let noun = ["cat", "corredor", "decorador"];

function domainGenerator(pronoun, adj, noun) {
  let a = Math.floor(Math.random() * pronoun.length);
  let b = Math.floor(Math.random() * adj.length);
  let c = Math.floor(Math.random() * noun.length);

  return pronoun[a] + " " + adj[b] + " " + noun[c] + "" + ".com ";
}

window.onload = function() {
  //write your code here
  var domain = document.getElementById("domain");
  domain.innerHTML = domainGenerator(pronoun, adj, noun);
};

window.onload = onload;
