let UserId = document.getElementById("contraseñaUnica");
let numericoContraseña = document.querySelector(".cont-numerico-contraseña")
UserId.addEventListener("click", function () {
  numericoContraseña.classList.remove("no-display")
  numericoContraseñaRepeat.classList.add("no-display")
})

let repeatClave = document.getElementById("repeatClave");
let numericoContraseñaRepeat = document.querySelector(".cont-numerico-repeat")
repeatClave.addEventListener("click", function () {
  numericoContraseñaRepeat.classList.remove("no-display")
  numericoContraseña.classList.add("no-display")
})