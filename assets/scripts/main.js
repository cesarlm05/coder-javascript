//@ts-ignore
const btn = document.querySelector(".btn");
// buton click event
btn.addEventListener("click", () => {
  // alert para mostrar mensajes en pantalla
  // @ts-ignore
  alert("Hola mundo");
});
// @ts-ignore
let menuToggle = document.querySelector(".menuToggle");
// @ts-ignore
let toggleMenu = document.querySelector(".toggleMenu");

menuToggle.addEventListener("click", () => {
  toggleMenu.classList.toggle("active");
});

// @ts-ignore
const btn1 = document.getElementById("btn1"),
  // @ts-ignore
  btn2 = document.getElementById("btn2"),
  // @ts-ignore
  btn3 = document.getElementById("btn3"),
  // @ts-ignore
  btn4 = document.getElementById("btn4"),
  // @ts-ignore
  btn5 = document.getElementById("btn5"),
  // @ts-ignore
  btn6 = document.getElementById("btn6"),
  // @ts-ignore
  btn7 = document.getElementById("btn7"),
  // @ts-ignore
  btn8 = document.getElementById("btn8"),
  // @ts-ignore
  btn9 = document.getElementById("btn9"),
  // @ts-ignore
  btn0 = document.getElementById("btn0"),
  // @ts-ignore
  btnSum = document.getElementById("btn_suma"),
  // @ts-ignore
  btnRes = document.getElementById("btn_resta"),
  // @ts-ignore
  btnMul = document.getElementById("btn_multiplica"),
  // @ts-ignore
  btnDiv = document.getElementById("btn_divide"),
  // @ts-ignore
  btnIgual = document.getElementById("btn_igual"),
  // @ts-ignore
  btnClear = document.getElementById("btn_clear");

// @ts-ignore
let display = document.getElementById("display");

btnClear.addEventListener("click", () => {
  clearDisplay();
});
function clearDisplay() {
  //console.log("clear");
  let clean = "";
  display.value = clean;
}

btn1.addEventListener("click", () => {
  let valor1 = display.value;
  let valor2 = btn1.value;
  display.value = valor1 + valor2;
});
btn2.addEventListener("click", () => {
  let valor1 = display.value;
  let valor2 = btn2.value;
  display.value = valor1 + valor2;
});
btn3.addEventListener("click", () => {
  let valor1 = display.value;
  let valor2 = btn3.value;
  display.value = valor1 + valor2;
});
btn4.addEventListener("click", () => {
  let valor1 = display.value;
  let valor2 = btn4.value;
  display.value = valor1 + valor2;
});
btn5.addEventListener("click", () => {
  let valor1 = display.value;
  let valor2 = btn5.value;
  display.value = valor1 + valor2;
});
btn6.addEventListener("click", () => {
  let valor1 = display.value;
  let valor2 = btn6.value;
  display.value = valor1 + valor2;
});
btn7.addEventListener("click", () => {
  let valor1 = display.value;
  let valor2 = btn7.value;
  display.value = valor1 + valor2;
});
btn8.addEventListener("click", () => {
  let valor1 = display.value;
  let valor2 = btn8.value;
  display.value = valor1 + valor2;
});
btn9.addEventListener("click", () => {
  let valor1 = display.value;
  let valor2 = btn9.value;
  display.value = valor1 + valor2;
});
btn0.addEventListener("click", () => {
  let valor1 = display.value;
  let valor2 = btn0.value;
  display.value = valor1 + valor2;
});
btnSum.addEventListener("click", () => {
  let valor1 = display.value;
  let valor2 = btnSum.value;
  display.value = valor1 + valor2;
});
btnRes.addEventListener("click", () => {
  let valor1 = display.value;
  let valor2 = btnRes.value;
  display.value = valor1 + valor2;
});
btnMul.addEventListener("click", () => {
  let valor1 = display.value;
  let valor2 = btnMul.value;
  display.value = valor1 + valor2;
});
btnDiv.addEventListener("click", () => {
  let valor1 = display.value;
  let valor2 = btnDiv.value;
  display.value = valor1 + valor2;
});

btnIgual.addEventListener("click", () => {
  //console.log("igual");
  let suma = display.value.indexOf("+");
  let resta = display.value.indexOf("-");
  let multiplica = display.value.indexOf("*");
  let divide = display.value.indexOf("/");
  if (suma > 0) {
    let valor = display.value.split("+", 2);
    let resultado = parseInt(valor[0]) + parseInt(valor[1]);
    display.value = resultado;
  } else if (resta > 0) {
    let valor = display.value.split("-", 2);
    let resultado = parseInt(valor[0]) - parseInt(valor[1]);
    display.value = resultado;
  } else if (multiplica > 0) {
    let valor = display.value.split("*", 2);
    let resultado = parseInt(valor[0]) * parseInt(valor[1]);
    display.value = resultado;
  } else if (divide > 0) {
    let valor = display.value.split("/", 2);
    let resultado = parseInt(valor[0]) / parseInt(valor[1]);
    display.value = resultado;
  }
});

//Peso en la Luna = (Peso en la Tierra/9,81m/s2) * 1,622m/s2
//Peso en la Tierra = (Peso en la Luna/1,622m/s2) * 9,81m/s2

//Peso en Marte= (Peso en la Tierra/9.81m/s2) * 3.711m/s2
//Peso en Tierra = (Peso en Marte/3.711m/s2) * 9.81m/s2

//Peso en Júpiter= (Peso en la Tierra/9.81m/s2) * 24.79m/s2
//Peso en Tierra = (Peso en Júpiter/24.79m/s2) * 9.81m/s2

//Peso en Saturno= (Peso en la Tierra/9.81m/s2) * 10.44m/s2
//Peso en Tierra = (Peso en Saturno/10.44m/s2) * 9.81m/s2

//Peso en Urano= (Peso en la Tierra/9.81m/s2) * 8.69m/s2
//Peso en Tierra = (Peso en Urano/8.69m/s2) * 9.81m/s2

//Peso en Neptuno= (Peso en la Tierra/9.81m/s2) * 11.15m/s2
//Peso en Tierra = (Peso en Neptuno/11.15m/s2) * 9.81m/s2

//Peso en Pluton= (Peso en la Tierra/9.81m/s2) * 0.858m/s2
//Peso en Tierra = (Peso en Pluton/0.858m/s2) * 9.81m/s2

// @ts-ignore
const nombre = document.getElementById("nombre");
// @ts-ignore
const apellido = document.getElementById("apellido");
// @ts-ignore
const btnPeso = document.getElementById("btnPeso");
// @ts-ignore
const btnLimpiar = document.getElementById("btnLimpiar");
// @ts-ignore
let pesoTierra = document.getElementById("peso");
// @ts-ignore
let respuesta = document.getElementById("respuesta");

btnPeso.addEventListener("click", () => {
  // @ts-ignore
  let nombre = document.getElementById("nombre").value;
  // @ts-ignore
  let apellido = document.getElementById("apellido").value;
  if (validation()) {
    respuesta.innerHTML =
      "Hola! terricola... " +
      `${nombre} ${apellido}` +
      " " +
      "tu peso en la Luna es: " +
      pesoLunar() +
      "kg";
  } else {
    // @ts-ignore
    alert("Ingrese su nombre y apellido en su planeta!");
  }
});
// @ts-ignore
function pesoLunar() {
  let peso = pesoTierra.value;
  //Peso en la Luna = (Peso en la Tierra/9,81m/s2) * 1,622m/s2
  let pesoLunar = (peso / 9.81) * 1.622;
  return pesoLunar.toFixed(2); //Redondea el resultado a 2 decimales
}

// @ts-ignore
function validation() {
  // @ts-ignore
  let nombre = document.getElementById("nombre").value;
  // @ts-ignore
  let apellido = document.getElementById("apellido").value;
  // @ts-ignore
  let pesoTierra = document.getElementById("peso").value;
  if (nombre !== "" && apellido !== "" && pesoTierra !== "") {
    return true;
  }
  return false;
}

btnLimpiar.addEventListener("click", () => {
  // @ts-ignore
  document.getElementById("nombre").value = "";
  // @ts-ignore
  document.getElementById("apellido").value = "";
  // @ts-ignore
  document.getElementById("peso").value = "";
  respuesta.innerHTML = "";
  pesoTierra.value = "";
});

// @ts-ignore
const nombreCumple = document.getElementById("nombre-cumple");
// @ts-ignore
const apellidoCumple = document.getElementById("apellido-cumple");
// @ts-ignore
const fechaCumple = document.getElementById("fecha-cumple");
// @ts-ignore
const btnCumple = document.getElementById("btn-cumple");
// @ts-ignore
const btnLimpiarCumple = document.getElementById("btn-limpiar-cumple");
// @ts-ignore
let respuestaCumple = document.getElementById("respuesta-cumple");
// @ts-ignore
let datoCumple = document.getElementById("dato-cumple");

btnCumple.addEventListener("click", () => {
  // @ts-ignore
  let nombre = nombreCumple.value;
  // @ts-ignore
  let apellido = apellidoCumple.value;
  if (validationCumple()) {
    respuestaCumple.innerHTML =
      "Hola " +
      `${nombre} ${apellido}` +
      "! " +
      "tu edad es " +
      edad() +
      " años.";
    dato(edad())
    timeCountDown();
  } else {
    // @ts-ignore
    alert("Ingrese su nombre, apellido y fecha de nacimiento.");
  }
});

// @ts-ignore
function edad() {
  let fecha = fechaCumple.value;
  let cumple = new Date(fecha);
  let cumpleaños = cumple.getFullYear();
  let edad = new Date().getFullYear() - cumpleaños;
  return edad;
}

// @ts-ignore
const time = document.getElementById("time");
// @ts-ignore
const dayNode = document.getElementById("day");
// @ts-ignore
const hourthNode = document.getElementById("hour");
// @ts-ignore
const minuteNode = document.getElementById("minute");
// @ts-ignore
const secondNode = document.getElementById("second");
// @ts-ignore
const nextCumple = () => new Date.getFullYear() + edad();
// @ts-ignore
const yearCumple = () => new Date('January 01' + nextCumple);
// @ts-ignore
const formatDate = (time) => (time > 10 ? time : "0" + time);

// @ts-ignore
const timeCountDown = () => {
  let fecha = fechaCumple.value;
  const currentDate = new Date();
  // @ts-ignore
  const nextCumple = new Date(fecha);
  // @ts-ignore
  const timeDifference = (currentDate - nextCumple) / 1000;
  const days = Math.floor(timeDifference / 3600 / 24);
  const hours = Math.floor(timeDifference / 3600) % 24;
  const minutes = Math.floor(timeDifference / 60) % 60;
  const seconds = Math.floor(timeDifference) % 60;
  //console.log(days, hours, minutes, seconds);
  time.innerHTML = "Tu edad en " + formatDate(days) + " días, " + formatDate(hours) + " horas, " + formatDate(minutes) + " minutos y " + formatDate(seconds) + " segundos!";
  //dayNode.innerHTML = days;
  //hourthNode.innerHTML = hours;
  //minuteNode.innerHTML = minutes;
  //secondNode.innerHTML = seconds;
}

//setInterval(timeCountDown, 1000);


function validationCumple() {
  // @ts-ignore
  let nombre = nombreCumple.value;
  // @ts-ignore
  let apellido = apellidoCumple.value;
  // @ts-ignore
  let fecha = fechaCumple.value;
  if (nombre !== "" && apellido !== "" && fecha !== "") {
    return true;
  }
  return false;
}

btnLimpiarCumple.addEventListener("click", () => {
  // @ts-ignore
  nombreCumple.value = "";
  // @ts-ignore
  apellidoCumple.value = "";
  // @ts-ignore
  fechaCumple.value = "";
  respuestaCumple.innerHTML = "";
  datoCumple.innerHTML = "";
  time.innerHTML = "";
});

// @ts-ignore
function dato(num) {
  let comentario;
  let contador = 0;
  if (num % 2 == 0) {
    contador = pares(num);
    comentario =
      "</br>Tu cumpleaños es numero par y fueron " + contador + " pares!";
  } else if (num % 2 !== 0) {
    contador = impares(num);
    comentario =
      "</br>Tu cumpleaños es numero impar y fueron " + contador + " impares!";
  }
  //console.log(comentario);
  datoCumple.innerHTML = comentario;
}

// cuantos numeros pares hay entre 1 y 100
// @ts-ignore
function pares(edad) {
  let contador = 0;
  for (let i = 1; i <= edad; i++) {
    if (i % 2 == 0) {
      contador++;
    }
  }
  return contador;
}
// @ts-ignore
function impares(edad) {
  let contador = 0;
  for (let i = 1; i <= edad; i++) {
    if (i % 2 !== 0) {
      contador++;
    }
  }
  return contador;
}
