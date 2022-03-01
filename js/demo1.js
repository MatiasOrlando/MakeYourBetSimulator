// Simulador de apuestas online Make your bet

// Clase Apostador
class Apostador {
  constructor(nombre, apellido, edad, mail) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.mail = mail;
    this.apuestas = [];
  }
  mostrarDatos = () => {
    alert(
      "Bienvenido a Make your Bet: " +
        this.nombre +
        " " +
        this.apellido +
        "\n" +
        "Edad: " +
        this.edad +
        "\n" +
        "Mail: " +
        this.mail
    );
  };
  esMayor = () => {
    return parseInt(this.edad) >= 18;
  };
  agregarApuesta = (apuesta) => {
    this.apuestas.push(apuesta);
  };
}

// Clase Informacion de la Apuesta
class Apuesta {
  constructor(valor, categoria, hora) {
    this.valor = valor;
    this.categoria = categoria;
    this.hora = hora;
  }
}

// Clase que indica el horario
class Tienda {
  constructor(hora) {
    this.hora = hora;
  }
  mostrarHora = () => {
    alert("Usted ha elegido el siguiente horario: " + this.hora);
  };
  estaAbierto = () => {
    return (
      (parseInt(this.hora) >= 8 && parseInt(this.hora) <= 12) ||
      (parseInt(this.hora) >= 15 && parseInt(this.hora) <= 23)
    );
  };
}

// Variables  Globales
let categoriaDeApuesta;
let datosApostador;
let respuestaMenuDos;
const priceDiscount = 50;
let valoresApuesta;
let local;
let edad;
let apuestaTotal = 0;

// Funcion Bienvenida
function welcome() {
  const usuarioApostador = [];
  const nombre = prompt("Ingrese su nombre");
  const apellido = prompt("Ingrese su apellido");
  const edad = prompt("Ingrese su edad (Valores númericos)");
  const mail = prompt("Ingrese su mail");

  datosApostador = new Apostador(nombre, apellido, edad, mail);
  usuarioApostador.push(datosApostador);

  console.log(usuarioApostador);
}

// Funcion Solicita Horario para verificar que las mesas esten abiertas a la hora de apostar

function ingresarHorario() {
  const hora = parseInt(prompt("Ingrese horario en punto para APOSTAR"));
  alert("Usted ha elegido el siguiente horario: " + hora);
  local = new Tienda(hora);
  return (
    (parseInt(hora) >= 8 && parseInt(hora) <= 12) ||
    (parseInt(hora) >= 15 && parseInt(hora) <= 23)
  );
}
// Función Contenedora de los valores para las apuestas de la Categoría Futbol
function apuestasFutbol() {
  alert(
    "Champions League Match 22:00   \n" + "Apuestas desde $500 hasta $3000"
  );
  valoresApuesta = parseInt(
    prompt("Menú: \n" + "$500 \n" + "$1500 \n" + "$3000 \n")
  );
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
  valoresApuesta = parseInt(
    prompt("Menú: \n" + "$300 \n" + "$1000 \n" + "$2000 \n")
  );
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
  valoresApuesta = parseInt(
    prompt("Menú: \n" + "$1500 \n" + "$3500 \n" + "$5000 \n")
  );
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

// Funcion donde se evalua si el usuario quiere apostar
function quieroApostar() {
  switch (respuestaMenuDos) {
    case "1":
      {
        categoriaApuestas();
        mostrarPrecio();
        const apuesta = new Apuesta(
          valoresApuesta,
          categoriaDeApuesta,
          local.hora
        );
        datosApostador.apuestas.push(apuesta);
        if (continuarApostando()) {
          quieroApostar();
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
      categoriaDeApuesta = "Futbol";
      apuestasFutbol();
      break;
    }
    case "2": {
      categoriaDeApuesta = "Caballos";
      apuestasCaballos();
      break;
    }
    case "3": {
      categoriaDeApuesta = "Poker";
      apuestasPoker();

      break;
    }
  }
}

//  Funciones para calcular el precio final de apuestas
const taxPrice = (x) => x * 0.21;
const suma = (a, b) => Number(a) + Number(b);
const restaDescuentoPromocional = (a, b) => a - b;

// Funcion que indica el precio final a pagar de la apuesta con sus respectivos descuentos y taxes aplicados
function mostrarPrecio() {
  const priceOfTax = taxPrice(parseInt(valoresApuesta));
  const priceWithTax = suma(valoresApuesta, priceOfTax);
  const priceFinalDiscount = restaDescuentoPromocional(
    priceWithTax,
    priceDiscount
  );
  alert("Debes abonar: $" + priceFinalDiscount + " " + "Precio Final");
}

// Funcion que permite ordenar las apuestas filtradas segun su valor
function ordenarApuestas() {
  let orden = datosApostador.apuestas.sort(function (a, b) {
    return a.valor - b.valor;
  });
  console.log(orden);
}

function valorApuestaTotal() {
  for (const bet of datosApostador.apuestas) {
    apuestaTotal += bet.valor;
  }
  alert(
    `El monto total de sus apuestas a pagar (Sin taxes incluidos) es de $${apuestaTotal}. Gracias por participar lo esperamos pronto`
  );
}

function filtro() {
  let revisionApuestas = prompt(
    "Antes de finalizar, desea revisar sus apuestas por categoria o por valor? \n" +
      "1. Categoría \n" +
      "2. Valor \n" +
      "3. Salir"
  );

  switch (revisionApuestas) {
    case "1": {
      let categorias = prompt(
        "Categorias: \n" + "1. Futbol \n" + "2. Caballos \n" + "3. Poker"
      );
      switch (categorias) {
        case "1": {
          const categoriasFiltradoFutbol = datosApostador.apuestas.filter(
            (x) => x.categoria == "Futbol"
          );
          categoriasFiltradoFutbol.forEach((element) =>
            alert(
              `Valor: $${element.valor}, Categoria: ${element.categoria}, Hora: ${element.hora}`
            )
          );
          break;
        }
        case "2": {
          const categoriasFiltradoCaballos = datosApostador.apuestas.filter(
            (x) => x.categoria == "Caballos"
          );
          categoriasFiltradoCaballos.forEach((element) =>
            alert(
              `Valor: $${element.valor}, Categoria: ${element.categoria}, Hora: ${element.hora}`
            )
          );
          break;
        }
        case "3": {
          const categoriasFiltradoPoker = datosApostador.apuestas.filter(
            (x) => x.categoria == "Poker"
          );
          categoriasFiltradoPoker.forEach((element) =>
            alert(
              `Valor: $${element.valor}, Categoria: ${element.categoria}, Hora: ${element.hora}`
            )
          );
          break;
        }
        default: {
          alert("Opcion Invalida, vuelva a intentarlo");
          break;
        }
      }
    }
    case "2": {
      let valores = prompt(
        "Valores: \n" + "1. Menores a $1000 \n" + "2. Mayores a $1500"
      );
      switch (valores) {
        case "1": {
          const lowBets = datosApostador.apuestas.filter((x) => x.valor < 1000);
          alert(lowBets);
          break;
        }
        case "2": {
          const highBets = datosApostador.apuestas.filter(
            (x) => x.valor > 1500
          );
          alert(highBets);
          break;
        }
        default: {
          alert("Opcion Invalida, vuelva a intentarlo");
          break;
        }
      }
    }
    case "3":
      break;
    default:
      break;
  }
}

//Orden de Ejecución
welcome();
datosApostador.mostrarDatos();
const sosMayor = datosApostador.esMayor();
if (sosMayor) {
  ingresarHorario();
  const horarioHabilitado = local.estaAbierto();
  if (horarioHabilitado) {
    respuestaMenuDos = prompt(
      "Menú: \n" + "1. Quieres Apostar? \n" + "2. Salir \n"
    );
    quieroApostar();
    filtro();
    ordenarApuestas();
    valorApuestaTotal();
  } else {
    alert("Para apostar solo en horarios habilitados: 8-12 & 15-23");
  }
} else if (isNaN(edad)) {
  alert("Debes ingresar valores númericos para indicar tu edad");
} else {
  alert("Debes ser +18 años para apostar");
}
