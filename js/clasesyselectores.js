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
  constructor(id, valor, categoria, hora) {
    this.id = id;
    this.valor = valor;
    this.categoria = categoria;
    this.hora = hora;
    idApuesta++;
  }
}

// Clase que indica el horario
class Reloj {
  constructor(hora) {
    this.hora = hora;
  }
  estaAbierto = () => {
    return parseInt(this.hora) >= 6 && parseInt(this.hora) <= 24;
  };
}

// Variables  Globales
let idApuesta = 0;
let datosApostador;
const priceDiscount = 150;
const usuarioApostador = [];
let listaApostadores = [];
let registroValido = false;
let montoTotalPagar = 0;
let desplegarMenuFutbol = true;
let desplegarMenuCaballos = true;
let desplegarMenuPoker = true;
let apuestasOnGameStorage = [];
let onlineBet = [];
let nodoTop5;
let top5Winners = true;
let infoHorses = true;

// Variables Globales Datos Personales
let nombre;
let apellido;
let edad;
let mail;
let ciudad;
let pais;
let hora;

// Selectores
const buttonFutbol = document.querySelector("#buttonFutbol1");
const caballosButton = document.querySelector("#buttonCaballos1");
const pokerButton = document.querySelector("#buttonPoker1");
const formUsuario = document.querySelector("#formUsuarioApostador");
const buttonForm = document.querySelector("#buttonForm1");
const futbolBetButton = document.querySelector("#apuestasFutbol1");
const pokerBetButton = document.querySelector("#apuestasPoker1");
const caballosBetButton = document.querySelector("#apuestasCaballos1");
const filterButton = document.querySelector("#filterButton");
const top5week = document.querySelector("#top5");
const botonCaballosCompetencia = document.querySelector("#caballosCompetencia");
const valorDelDolar = document.querySelector("#valorDolarPesos");
const valorBtc = document.querySelector("#valorDolarBtc");
const dark = document.querySelector("#darkMode");
