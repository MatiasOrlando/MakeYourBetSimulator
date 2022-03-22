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
      (parseInt(this.hora) >= 9 && parseInt(this.hora) <= 12) ||
      (parseInt(this.hora) >= 13 && parseInt(this.hora) <= 24)
    );
  };
}

// Variables  Globales
let datosApostador;
const priceDiscount = 50;
let horario;
let priceFinalDiscount;
const usuarioApostador = [];
let listaApostadores = [];
let registroValido = false;
let montoTotalPagar = 0;
let desplegarMenuFutbol = true;
let desplegarMenuCaballos = true;
let desplegarMenuPoker = true;
let apuestasOnGameStorage = [];
let onlineBet = [];

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
