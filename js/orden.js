// Orden de Ejecución Eventos

formUsuario.addEventListener("submit", (e) => {
  e.preventDefault();
  leerDatos();
  registroValido = validarRegistro();
  registroValido && welcome();
});

futbolBetButton.addEventListener("click", () => {
  desplegarApuestas(
    "$500",
    "$1500",
    "$3000",
    "Champions League Match 22:00  Apuestas desde $500 hasta $3000 ",
    "Futbol"
  );
});

pokerBetButton.addEventListener("click", () => {
  desplegarApuestas(
    "$1500",
    "$3500",
    "$5000",
    "Poker in Vegas 20:00 Apuestas desde $1500 to $5000",
    "Poker"
  );
});

caballosBetButton.addEventListener("click", () => {
  desplegarApuestas(
    "$300",
    "$1000",
    "$2000",
    "Horseback riding Leagues 19:00  Apuestas desde $300 hasta $2000",
    "Caballos"
  );
});

buttonFutbol.addEventListener("click", apuestasFutbolEvento);
caballosButton.addEventListener("click", apuestasCaballosEvento);
pokerButton.addEventListener("click", apuestasPokerEvento);
