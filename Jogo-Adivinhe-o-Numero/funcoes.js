var numAleatorio = Math.floor(Math.random() * 100) + 1;

var campoPalpite = document.querySelector(".campoPalpite");
var enviarPalpite = document.querySelector(".envioPalpite");
var palpites = document.querySelector(".palpites");
var ultimoResultado = document.querySelector(".ultimoResultado");
var baixoOuAlto = document.querySelector(".baixoOuAlto");

var numTurno = 1;
var btnReinicio;

function enviar() {
  if (numTurno === 1 || numTurno <= 10) {
    console.log(campoPalpite.value);
    if (Number(campoPalpite.value) == numAleatorio) {
      ultimoResultado.textContent = "Parabéns";
      ultimoResultado.style.backgroundColor = "green";
      baixoOuAlto.textContent = "";
    }
    numTurno++;
  } else {
    ultimoResultado.innerHTML = "ja chega";
    ultimoResultado.style.color = "red";
  }
}
//teste