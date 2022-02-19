// Simulador de apuestas online Make your bet

// Variables  Globales
const priceDiscount = 50;
let categoriaDeApuesta;
let respuestaMenuDos;
let valoresApuesta;
let local;
let edad;

// Función Bienvenida
function welcome() {
  const nombre = prompt("Ingrese su nombre");
  const apellido = prompt("Ingrese su apellido");
  edad = prompt("Ingrese su edad (Valores númericos)");

  alert(
    "Bienvenido a Make your Bet: " +
      nombre +
      " " +
      apellido +
      "\n" +
      "Edad: " +
      edad +
      "\n"
  );
}

// Funcion Solicita Horario para verificar que las mesas esten abiertas a la hora de apostar

function ingresarHorario() {
  const hora = parseInt(prompt("Ingrese horario en punto para APOSTAR"));
  alert("Usted ha elegido el siguiente horario: " + hora);
  return (
    (parseInt(hora) >= 8 && parseInt(hora) <= 12) ||
    (parseInt(hora) >= 15 && parseInt(hora) <= 23)
  );
}

// Funcion que valida si el usuario es +18 para Apostar

function esMayor() {
  return parseInt(edad) >= 18;
}

// Función Contenedora de los valores para las apuestas de la Categoría Futbol
function apuestasFutbol() {
  alert(
    "Champions League Match 22:00   \n" + "Apuestas desde $500 hasta $3000"
  );
  valoresApuesta = prompt("Menú: \n" + "$500 \n" + "$1500 \n" + "$3000 \n");
  if (parseInt(valoresApuesta) == 500) {
    alert("Apuesta $500 (Descuento Promocional $50)+ Taxes ");
  } else if (parseInt(valoresApuesta) == 1500) {
    alert("Apuesta $1500 (Descuento Promocional $50) + Taxes");
  } else if (parseInt(valoresApuesta) == 3000) {
    alert("Apuesta $3000 (Descuento Promocional $50) + Taxes");
  } else {
    alert("Datos Ingresados Invalidos");
  }
}

// Función Contenedora de los valores para las apuestas de la Categoría Caballos.
function apuestasCaballos() {
  alert(
    "Horseback riding Leagues 19:00  \n" + "Apuestas desde $300 hasta $2000"
  );
  valoresApuesta = prompt("Menú: \n" + "$300 \n" + "$1000 \n" + "$2000 \n");
  if (parseInt(valoresApuesta) == 300) {
    alert("Apuesta $300 (Descuento Promocional $50) + Taxes");
  } else if (parseInt(valoresApuesta) == 1000) {
    alert("Apuesta $1000 (Descuento Promocional $50) + Taxes");
  } else if (parseInt(valoresApuesta) == 2000) {
    alert("Apuesta $2000 (Descuento Promocional $50) + Taxes");
  } else {
    alert("Datos Ingresados Invalidos");
  }
}

// Función Contenedora de los valores para las apuestas de la Categoría Poker.
function apuestasPoker() {
  alert("Poker in Vegas 20:00  \n" + "Apuesta from $1500 to $5000");
  valoresApuesta = prompt("Menú: \n" + "$1500 \n" + "$3500 \n" + "$5000 \n");
  if (parseInt(valoresApuesta) == 1500) {
    alert("Apuesta $1500 (Descuento Promocional $50) + Taxes");
  } else if (parseInt(valoresApuesta) == 3500) {
    alert("Apuesta $3500 (Descuento Promocional $50) + Taxes");
  } else if (parseInt(valoresApuesta) == 5000) {
    alert("Apuesta $5000 (Descuento Promocional $50) + Taxes");
  } else {
    alert("Datos Ingresados Invalidos");
  }
}

// Funcion que indica si el usuario quiere seguir apostando
function continuarApostando() {
  return confirm("Desea continuar apostando?");
}

//  Funcion donde se evalua si el usuario quiere apostar
function quieroApostar() {
  switch (respuestaMenuDos) {
    case "1":
      {
        categoriaApuestas();
        mostrarPrecio();

        if (continuarApostando()) {
          quieroApostar();
        } else {
          alert("Gracias por participar, hasta la próxima");
        }
      }
      break;

    case "2": {
      alert("Exit Game");

      break;
    }
  }
}

// Función que presenta las 3 categorías para apostar
function categoriaApuestas() {
  let menuTres = prompt(
    "Categorias: \n" + "1. Futbol \n" + "2. Caballos \n" + "3. Poker"
  );

  switch (menuTres) {
    case "1": {
      apuestasFutbol();
      break;
    }
    case "2": {
      apuestasCaballos();
      break;
    }
    case "3": {
      apuestasPoker();

      break;
    }
  }
}

//  Funciones para calcular el precio final de apuestas
const taxPrice = (x) => x * 0.21;
const suma = (a, b) => Number(a) + Number(b);
const restaDescuentoPromocional = (a, b) => a - b;

//  Funcion que indica el precio final a pagar de la apuesta con sus respectivos descuentos y taxes aplicados
function mostrarPrecio() {
  const priceOfTax = taxPrice(parseInt(valoresApuesta));
  const priceWithTax = suma(valoresApuesta, priceOfTax);
  const priceFinalDiscount = restaDescuentoPromocional(
    priceWithTax,
    priceDiscount
  );
  alert("Debes abonar: $" + priceFinalDiscount + " " + "Precio Final");
}

//Orden de Ejecución
welcome();
const sosMayor = esMayor();
if (sosMayor) {
  const horarioHabilitado = ingresarHorario();
  if (horarioHabilitado) {
    respuestaMenuDos = prompt(
      "Menú: \n" + "1. Quieres Apostar? \n" + "2. Salir \n"
    );
    quieroApostar();
  } else {
    alert("Para apostar solo en horarios habilitados: 8-12 & 15-23");
  }
} else if (isNaN(edad)) {
  alert("Ingrese valores númericos para indicar su edad");
} else {
  alert("Debes ser +18 años para apostar");
}
