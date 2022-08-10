let UserId = document.getElementById("contraseñaUnica");
let numericoContraseña = document.querySelector(".cont-numerico-contraseña");
let repeatClave = document.getElementById("repeatContraseña");
let numericoContraseñaRepeat = document.querySelector(".cont-numerico-repeat")
UserId.addEventListener("click", function () {
  numericoContraseña.classList.remove("hidden")
  numericoContraseñaRepeat.classList.add("hidden")
})
repeatClave.addEventListener("click", function () {
  numericoContraseñaRepeat.classList.remove("hidden")
  numericoContraseña.classList.add("hidden")

})


