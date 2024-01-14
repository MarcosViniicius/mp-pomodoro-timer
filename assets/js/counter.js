var modality = "25"; // Valor padrão
var time;
var alarm = new Audio("./assets/sounds/clock-alarm-8761.mp3");

function pegarValor(selectedModality) {
  modality = selectedModality;
  if (modality === "5") {
    time = 5 * 60;
    document.getElementById("counter").innerHTML = `05:00`;
    document.getElementById("5").classList.add("active-button");
    document.getElementById("15").classList.remove("active-button");
    document.getElementById("25").classList.remove("active-button");
  } else if (modality === "15") {
    time = 15 * 60;
    document.getElementById("counter").innerHTML = `15:00`;
    document.getElementById("15").classList.add("active-button");
    document.getElementById("5").classList.remove("active-button");
    document.getElementById("25").classList.remove("active-button");
  } else if (modality === "25") {
    time = 25 * 60;
    document.getElementById("counter").innerHTML = `25:00`;
    document.getElementById("25").classList.add("active-button");
    document.getElementById("15").classList.remove("active-button");
    document.getElementById("5").classList.remove("active-button");
  }
}

function startTimer(duration, display) {
  var timer = duration,
    minutes,
    seconds;

  var intervalId = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      clearInterval(intervalId);
      timer = duration;
      habilitarBotoes(true); // Habilita os botões ao atingir o tempo final
      alarm.play(); // Reproduz o som
    }
  }, 1000);
}

function habilitarBotoes(enable) {
  document.getElementById("5").disabled = !enable;
  document.getElementById("15").disabled = !enable;
  document.getElementById("25").disabled = !enable;
  document.getElementById("start").disabled = !enable;
}

function iniciarPomodoro() {
  pegarValor(modality);
  var display = document.querySelector("#counter");
  habilitarBotoes(false); // Desabilita os botões ao iniciar
  startTimer(time, display);
}
