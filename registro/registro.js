let UserId = document.getElementById("contraseñaUnica");
let numericoContraseña = document.querySelector(".cont-numerico-contraseña");
let repeatClave = document.getElementById("repeatClave");
let numericoContraseñaRepeat = document.querySelector(".cont-numerico-repeat")
let containerCard = document.querySelector(".container-card");

UserId.addEventListener("click", function () {
  numericoContraseña.classList.remove("no-display")
  numericoContraseñaRepeat.classList.add("no-display")
  containerCard.style.padding = "2em"
})


repeatClave.addEventListener("click", function () {
  numericoContraseñaRepeat.classList.remove("no-display")
  numericoContraseña.classList.add("no-display")
  containerCard.style.padding = "2em"
})