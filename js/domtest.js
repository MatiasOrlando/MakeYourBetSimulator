const h1 = document.querySelector("#mainTitle");
h1.innerText = "MAKE YOUR BET";

h1.classList.add("h1");

const mainImgDiv = document.createElement("div");
mainImgDiv.classList.add("contenedorDos");

const mainImg = document.createElement("img");
mainImg.classList.add("onlineGames");

mainImg.src =
  "https://mir-s3-cdn-cf.behance.net/project_modules/fs/0fbb2e62997361.5f9eb4955a2b1.png";

h1.insertAdjacentElement("afterend", mainImgDiv);
mainImgDiv.appendChild(mainImg);

const mainText = document.querySelector(".textoInicial");

mainText.style.fontSize = "18px";

// Evento apuestas evento futbol

let desplegarMenuFutbol = true;

const buttonFutbol = document.querySelector("#buttonFutbol1");

buttonFutbol.addEventListener("click", () => apuestasFutbolEvento());

function apuestasFutbolEvento() {
  if (desplegarMenuFutbol) {
    const futbolEvent = document.querySelector(".perfilCentrado1");
    const futbolBet = document.createElement("div");
    futbolBet.setAttribute("id", "soccerBet");
    const futbolBetTitle = document.createElement("h3");
    const futbolBetParagraph = document.createElement("p");
    const futbolBetList = document.createElement("ul");
    const futbolBetOptions1 = document.createElement("li");
    const futbolBetOptions2 = document.createElement("li");
    const futbolBetOptions3 = document.createElement("li");

    futbolBet.classList.add("divsJuegos");
    futbolBetTitle.classList.add("h3Juegos");
    futbolBetTitle.innerHTML =
      "Champions League Match 22:00, Apuestas desde $500 hasta $3000";
    futbolBetParagraph.innerHTML =
      "Elija el valor de su apuesta para el evento, una vez confirmada no podra cancelarla.";
    futbolBetOptions1.innerHTML = "$500";
    futbolBetOptions2.innerHTML = "$1500";
    futbolBetOptions3.innerHTML = "$3000";

    futbolBetList.appendChild(
      futbolBetOptions1,
      futbolBetOptions2,
      futbolBetOptions3
    );

    futbolBet.appendChild(futbolBetTitle);
    futbolBetTitle.appendChild(futbolBetParagraph);
    futbolBetParagraph.appendChild(futbolBetOptions1);
    futbolBetParagraph.appendChild(futbolBetOptions2);
    futbolBetParagraph.appendChild(futbolBetOptions3);
    futbolEvent.insertAdjacentElement("afterend", futbolBet);
    buttonFutbol.innerText = "Ver menos";
    desplegarMenuFutbol = false;
  } else {
    const divFutbol = document.querySelector("#soccerBet");
    divFutbol.remove();
    buttonFutbol.innerText = "Ver mas";
    desplegarMenuFutbol = true;
  }
}

// Evento apuestas evento caballos

let desplegarMenuCaballos = true;

const caballosButton = document.querySelector("#buttonCaballos1");

caballosButton.addEventListener("click", apuestasCaballosEvento);

function apuestasCaballosEvento(e) {
  if (desplegarMenuCaballos) {
    const caballosEvent = document.querySelector(".perfilCentrado3");
    const caballosBet = document.createElement("div");
    caballosBet.setAttribute("id", "caballosBet");
    const caballosBetTitle = document.createElement("h3");
    const caballosBetParagraph = document.createElement("p");
    const caballosBetList = document.createElement("ul");
    const caballosBetOptions1 = document.createElement("li");
    const caballosBetOptions2 = document.createElement("li");
    const caballosBetOptions3 = document.createElement("li");

    caballosBetTitle.innerHTML =
      "Horseback riding Leagues 19:00, Apuestas desde $300 hasta $2000";
    caballosBetParagraph.innerHTML =
      "Elija el valor de su apuesta para el evento, una vez confirmada no podra cancelarla.";
    caballosBetOptions1.innerHTML = "$300";
    caballosBetOptions2.innerHTML = "$1000";
    caballosBetOptions3.innerHTML = "$2000";

    caballosBetList.appendChild(
      caballosBetOptions1,
      caballosBetOptions2,
      caballosBetOptions3
    );

    caballosBet.classList.add("divsJuegos");
    caballosBetTitle.classList.add("h3Juegos");
    caballosBet.appendChild(caballosBetTitle);
    caballosBetTitle.appendChild(caballosBetParagraph);
    caballosBetParagraph.appendChild(caballosBetOptions1);
    caballosBetParagraph.appendChild(caballosBetOptions2);
    caballosBetParagraph.appendChild(caballosBetOptions3);
    caballosEvent.insertAdjacentElement("afterend", caballosBet);
    caballosButton.innerText = "Ver menos";
    desplegarMenuCaballos = false;
  } else {
    const divCaballos = document.querySelector("#caballosBet");
    divCaballos.remove();
    caballosButton.innerText = "Ver mas";
    desplegarMenuCaballos = true;
  }
}

// Evento apuestas evento poker

let desplegarMenuPoker = true;

const pokerButton = document.querySelector("#buttonPoker1");

pokerButton.addEventListener("click", apuestasPokerEvento);

function apuestasPokerEvento() {
  if (desplegarMenuPoker) {
    const pokerEvent = document.querySelector(".perfilCentrado2");
    const pokerBet = document.createElement("div");
    pokerBet.setAttribute("id", "pokerBet");
    const pokerBetTitle = document.createElement("h3");
    const pokerBetParagraph = document.createElement("p");
    const pokerBetList = document.createElement("ul");
    const pokerBetOptions1 = document.createElement("li");
    const pokerBetOptions2 = document.createElement("li");
    const pokerBetOptions3 = document.createElement("li");
    pokerBet.classList.add("divsJuegos");
    pokerBetTitle.classList.add("h3Juegos");
    pokerBetTitle.innerHTML =
      "Poker in Vegas 20:00 , Apuestas desde $1500 to $5000";
    pokerBetParagraph.innerHTML =
      "Elija el valor de su apuesta para el evento, una vez confirmada no podra cancelarla.";
    pokerBetOptions1.innerHTML = "$1500";
    pokerBetOptions2.innerHTML = "$3500";
    pokerBetOptions3.innerHTML = "$5000";

    pokerBetList.appendChild(
      pokerBetOptions1,
      pokerBetOptions2,
      pokerBetOptions3
    );

    pokerBet.appendChild(pokerBetTitle);
    pokerBetTitle.appendChild(pokerBetParagraph);
    pokerBetParagraph.appendChild(pokerBetOptions1);
    pokerBetParagraph.appendChild(pokerBetOptions2);
    pokerBetParagraph.appendChild(pokerBetOptions3);
    pokerEvent.insertAdjacentElement("afterend", pokerBet);
    pokerButton.innerText = "Ver menos";
    desplegarMenuPoker = false;
  } else {
    const divPoker = document.querySelector("#pokerBet");
    divPoker.remove();
    pokerButton.innerText = "Ver mas";
    desplegarMenuPoker = true;
  }
}

// Eventos Bienvenida Completar

const usuario = document.querySelector("#formUsuarioApostador");
const buttonForm = document.querySelector("#buttonForm1");

buttonForm.addEventListener("click", () => {
  leerDatos();
  registroValido = validarRegistro();
  if (registroValido) {
    welcome();
  }
});

function validarRegistro() {
  const sosMayor = datosApostador.esMayor();
  if (sosMayor) {
    horario = new Reloj(hora);
    const horarioHabilitado = horario.estaAbierto();
    if (!horarioHabilitado) {
      alert("Para apostar solo en horarios habilitados: 8-12 & 15-23");
      return false;
    }
    return true;
  } else if (isNaN(datosApostador.edad)) {
    alert("Debes ingresar valores númericos para indicar tu edad");
    return false;
  } else {
    alert("Debes ser +18 años para apostar");
    return false;
  }
}

const futbolBetButton = document.querySelector("#apuestasFutbol1");
const pokerBetButton = document.querySelector("#apuestasPoker1");

function desplegarApuestas(valor1, valor2, valor3, titulo) {
  // if (!registroValido) {
  //   alert("Debe estar registrado para continuar");
  //   return false;
  // }
  const divApuesta = document.querySelector("#categoriaApuesta");
  let valorApuesta1 = document.querySelector("#apuestaValor1");
  const valorApuesta2 = document.querySelector("#apuestaValor2");
  const valorApuesta3 = document.querySelector("#apuestaValor3");
  const tituloApuesta = document.querySelector("#tituloApuesta");

  valorApuesta1.innerText = valor1;
  valorApuesta2.innerText = valor2;
  valorApuesta3.innerText = valor3;
  tituloApuesta.innerText = titulo;

  valorApuesta1.outerHTML = valorApuesta1.outerHTML;

  valorApuesta1 = document.querySelector("#apuestaValor1");
  valorApuesta1.addEventListener("click", clickvalor1);
  function clickvalor1() {
    alert("holaaaa");
  }
  divApuesta.style.display = "block";
}

futbolBetButton.addEventListener("click", () => {
  desplegarApuestas(
    "$500",
    "$1500",
    "$3000",
    "Champions League Match 22:00  Apuestas desde $500 hasta $3000 "
  );
});

pokerBetButton.addEventListener("click", () => {
  desplegarApuestas(
    "$1500",
    "$3500",
    "$5000",
    "Poker in Vegas 20:00 Apuestas desde $1500 to $5000"
  );
});

caballosBetButton.addEventListener("click", () => {
  desplegarApuestas(
    "$300",
    "$1000",
    "$2000",
    "Horseback riding Leagues 19:00  Apuestas desde $300 hasta $2000"
  );
});
