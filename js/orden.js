// Orden de Ejecución Eventos

formUsuario.addEventListener("submit", (e) => {
  e.preventDefault();
  leerDatos();
  registroValido = validarRegistro();
  if (registroValido) {
    welcome();
    bonoBienvenida();
  }
});

futbolBetButton.addEventListener("click", () => {
  desplegarApuestas(
    "U$S500",
    "U$S1500",
    "U$S3000",
    "Champions League Match 22:00  Apuestas desde $500 hasta $3000 ",
    "Futbol"
  );
});

pokerBetButton.addEventListener("click", () => {
  desplegarApuestas(
    "U$S1500",
    "U$S3500",
    "U$S5000",
    "Poker in Vegas 20:00 Apuestas desde $1500 to $5000",
    "Poker"
  );
});

caballosBetButton.addEventListener("click", () => {
  desplegarApuestas(
    "U$S300",
    "U$S1000",
    "U$S2000",
    "Horseback riding Leagues 19:00  Apuestas desde $300 hasta $2000",
    "Caballos"
  );
});

buttonFutbol.addEventListener("click", apuestasFutbolEvento);
caballosButton.addEventListener("click", apuestasCaballosEvento);
pokerButton.addEventListener("click", apuestasPokerEvento);

//Eventos que solicitan APIS
checkDolarValue.addEventListener("click", () => dolarValue());
checkBitcoinValue.addEventListener("click", () => bitcoinValue());
top5week.addEventListener("click", () => top5());
caballosCompetencia.addEventListener("click", () => infoCarreraCaballos());
