// Simulador de apuestas online Make your bet

// Clase Apostador
class Apostador {
  constructor(nombre, apellido, edad, mail, ciudad, pais) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.mail = mail;
    this.ciudad = ciudad;
    this.pais = pais;
    this.apuestas = [];
  }

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
class Reloj {
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
let horario;
let apuestaTotal = 0;
let priceFinalDiscount;
let apuesta;
let valorApuestaBorrada;
let apuestaElegida;
let tituloBienvenida;
let fraseBienvenida;
const usuarioApostador = [];
let listaApostadores = [];
let registroValido = false;

//Funcion para guardar datos en localStorage
const guardarLocal = (categoria, valor) => {
  localStorage.setItem(categoria, valor);
};

// Funcion Datos Personales

let nombre;
let apellido;
let edad;
let mail;
let ciudad;
let pais;
let hora;

function leerDatos() {
  nombre = document.querySelector("#inputName1").value;
  apellido = document.querySelector("#inputLastName1").value;
  edad = document.querySelector("#inputAge1").value;
  mail = document.querySelector("#inputEmail1").value;
  ciudad = document.querySelector("#inputState1").value;
  pais = document.querySelector("#inputCountry1").value;
  hora = document.querySelector("#inputTime1").value;
  datosApostador = new Apostador(nombre, apellido, edad, mail, ciudad, pais);
  usuarioApostador.push(datosApostador);

  console.log(usuarioApostador);
}

function obtenerLocal() {
  listaApostadores = JSON.parse(localStorage.getItem("Informacion cliente: "));
  if (listaApostadores === null) {
    listaApostadores = [];
  }
}

// Funcion Bienvenida
function welcome() {
  obtenerLocal();

  for (const datos of usuarioApostador) {
    listaApostadores.push(datos);
  }

  guardarLocal("Informacion cliente: ", JSON.stringify(listaApostadores));

  const formContacto = document.querySelector(".formContacto");
  const tituloForm = document.querySelector(".estiloTituloDos");
  formContacto.remove();
  tituloForm.remove();

  const divBienvenida = document.createElement("div");
  fraseBienvenida = document.createElement("p");
  const registro = document.querySelector(".registro");
  tituloBienvenida = document.createElement("h2");

  tituloBienvenida.innerText = `BIENVENIDO A MAKE YOUR BET`;
  fraseBienvenida.innerText = `Nombre Completo: ${nombre} ${apellido}
        Edad: ${edad}
        Mail: ${mail}
        Ciudad: ${ciudad}
        País: ${pais}
        Gracias por registrarte, es hora de jugar.`;

  fraseBienvenida.classList.add("presentation");
  tituloBienvenida.classList.add("tituloWelcome");
  divBienvenida.style.paddingTop = "30px";
  divBienvenida.style.paddingLeft = "10px";
  divBienvenida.appendChild(tituloBienvenida);
  divBienvenida.appendChild(fraseBienvenida);
  registro.appendChild(divBienvenida);
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
  alert("Poker in Vegas 20:00  \n" + "Apuestas desde $1500 to $5000");
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
        apuesta = new Apuesta(
          priceFinalDiscount,
          categoriaDeApuesta,
          horario.hora
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
  priceFinalDiscount = restaDescuentoPromocional(priceWithTax, priceDiscount);
  alert("Debes abonar: $" + priceFinalDiscount + " " + "Precio Final");
}

// Funcion que permite ordenar las apuestas filtradas segun su valor
function ordenarApuestas() {
  let orden = datosApostador.apuestas.sort(function (a, b) {
    return a.valor - b.valor;
  });
  console.log(orden);
}

// Funcion que permite borrar al usuario una apuesta realizada.

function borrarApuesta() {
  let borrarApuesta = prompt(
    "Desea eliminar alguna apuesta realizada? \n" + "1. Si \n" + "2. No"
  );

  switch (borrarApuesta) {
    case "1": {
      valorApuestaBorrada = parseInt(
        prompt("Ingrese el valor de la apuesta que desea eliminar")
      );

      apuestaElegida = datosApostador.apuestas.find(
        (x) => x.valor === valorApuestaBorrada
      );

      if (apuestaElegida) {
        const index = datosApostador.apuestas.indexOf(apuestaElegida);

        datosApostador.apuestas.splice(index, 1);
      } else {
        borrarApuestaErrorUsuario();
      }
      break;
    }
    case "2":
    default:
      break;
  }
}

// Funcion que le permite reingresar al usuario el valor de la apuesta en caso de cometer un Error en el valor ingresado
function borrarApuestaErrorUsuario() {
  while (!apuestaElegida) {
    alert("Apuesta NO EXISTE");
    valorApuestaBorrada = parseInt(
      prompt("Ingrese nuevamente el valor de la apuesta que desea eliminar")
    );

    apuestaElegida = datosApostador.apuestas.find(
      (x) => x.valor === valorApuestaBorrada
    );

    if (apuestaElegida) {
      const index = datosApostador.apuestas.indexOf(apuestaElegida);

      datosApostador.apuestas.splice(index, 1);
    }
  }
}

// Funcion para calcular el valor total de todas las apuestas realizadas.
function valorApuestaTotal() {
  for (const bet of datosApostador.apuestas) {
    apuestaTotal += bet.valor;
  }
  alert(
    `El monto total de sus apuestas a pagar es de $${apuestaTotal} (taxes incluidos). Gracias por participar lo esperamos pronto`
  );
}

// Funcion que le permite al usuario filtrar apuestas realizadas por categoria o valor.
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
      break;
    }
    case "2": {
      let valores = prompt(
        "Valores: \n" + "1. Menores a $1000 \n" + "2. Mayores a $1500"
      );
      switch (valores) {
        case "1": {
          const lowBets = datosApostador.apuestas.filter((x) => x.valor < 1000);
          console.log(lowBets);
          break;
        }
        case "2": {
          const highBets = datosApostador.apuestas.filter(
            (x) => x.valor > 1500
          );
          console.log(highBets);
          break;
        }
        default: {
          alert("Opcion Invalida, vuelva a intentarlo");
          break;
        }
      }
    }
    case "3":
    default:
      {
        alert("Gracias por participar, Hasta la próxima");
      }
      break;
  }
}

//Orden de Ejecución
// welcome();
// datosApostador.mostrarDatos();
// const sosMayor = datosApostador.esMayor();
// if (sosMayor) {
//   ingresarHorario();
//   const horarioHabilitado = horario.estaAbierto();
//   if (horarioHabilitado) {
//     respuestaMenuDos = prompt(
//       "Menú: \n" + "1. Quieres Apostar? \n" + "2. Salir \n"
//     );
//     quieroApostar();
//     borrarApuesta();
//     filtro();
//     ordenarApuestas();
//     valorApuestaTotal();
//   } else {
//     alert("Para apostar solo en horarios habilitados: 8-12 & 15-23");
//   }
// } else if (isNaN(edad)) {
//   alert("Debes ingresar valores númericos para indicar tu edad");
// } else {
//   alert("Debes ser +18 años para apostar");
// }

//Informacion de las apuestas realizadas a guardar en localStorage

// guardarLocal("Apuestas realizadas: ", JSON.stringify(datosApostador.apuestas));
