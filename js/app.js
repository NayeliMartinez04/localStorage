const btnSave = document.getElementById("btnSave");
const btnMostrar = document.getElementById("btnMostrar");
const btnDelete = document.getElementById("btnDelete");
const name = document.getElementById("name");
const textDisplay = document.getElementById("textDisplay2");

btnSave.onclick = guardar;
btnMostrar.onclick = mostrar;
btnDelete.onclick = borrar;

const people = [];

function limpiar() {
  name.value = "";
}

function guardar() {
  if (name.value == "") return;

  people.push(name.value);
  localStorage.setItem("people", JSON.stringify(people));
  limpiar();
}

function mostrar() {
  textDisplay.innerHTML = "";
  let ls = localStorage.getItem("people");

  if (!ls) return;

  let lsPeople = JSON.parse(ls);

  for (let x = 0; x < lsPeople.length; x++) {
    textDisplay.innerHTML += "<br>" + (x + 1) + "- " + lsPeople[x];
  }
}

function borrar() {
  localStorage.removeItem("people");
}
