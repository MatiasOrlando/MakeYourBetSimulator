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

const futbolEvent = document.querySelector(".perfilCentrado1");
const futbolBet = document.createElement("div");
const futbolBetTitle = document.createElement("h3");
const futbolBetParagraph = document.createElement("p");
const futbolBetList = document.createElement("ul");
const futbolBetOptions1 = document.createElement("li");
const futbolBetOptions2 = document.createElement("li");
const futbolBetOptions3 = document.createElement("li");

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

const caballosEvent = document.querySelector(".perfilCentrado3");
const caballosBet = document.createElement("div");
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

caballosBet.appendChild(caballosBetTitle);
caballosBetTitle.appendChild(caballosBetParagraph);
caballosBetParagraph.appendChild(caballosBetOptions1);
caballosBetParagraph.appendChild(caballosBetOptions2);
caballosBetParagraph.appendChild(caballosBetOptions3);
caballosEvent.insertAdjacentElement("afterend", caballosBet);

const pokerEvent = document.querySelector(".perfilCentrado2");
const pokerBet = document.createElement("div");
const pokerBetTitle = document.createElement("h3");
const pokerBetParagraph = document.createElement("p");
const pokerBetList = document.createElement("ul");
const pokerBetOptions1 = document.createElement("li");
const pokerBetOptions2 = document.createElement("li");
const pokerBetOptions3 = document.createElement("li");

pokerBetTitle.innerHTML =
  "Poker in Vegas 20:00 , Apuestas desde $1500 to $5000";
pokerBetParagraph.innerHTML =
  "Elija el valor de su apuesta para el evento, una vez confirmada no podra cancelarla.";
pokerBetOptions1.innerHTML = "$1500";
pokerBetOptions2.innerHTML = "$3500";
pokerBetOptions3.innerHTML = "$5000";

pokerBetList.appendChild(pokerBetOptions1, pokerBetOptions2, pokerBetOptions3);

pokerBet.appendChild(pokerBetTitle);
pokerBetTitle.appendChild(pokerBetParagraph);
pokerBetParagraph.appendChild(pokerBetOptions1);
pokerBetParagraph.appendChild(pokerBetOptions2);
pokerBetParagraph.appendChild(pokerBetOptions3);
pokerEvent.insertAdjacentElement("afterend", pokerBet);

futbolBet.classList.add("divsJuegos");
caballosBet.classList.add("divsJuegos");
pokerBet.classList.add("divsJuegos");

futbolBetTitle.classList.add("h3Juegos");
caballosBetTitle.classList.add("h3Juegos");
pokerBetTitle.classList.add("h3Juegos");
