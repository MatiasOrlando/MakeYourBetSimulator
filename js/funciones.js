// Modificaciones estáticas del HTML a traves del DOM
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

//Funcion para guardar datos en localStorage
const guardarLocal = (categoria, valor) => {
  localStorage.setItem(categoria, valor);
};

//Funcion que me permite obtener los datos de los apostadores registrados almacenados en LocalStorage
function obtenerLocal() {
  listaApostadores = JSON.parse(localStorage.getItem("Informacion cliente: "));
  if (listaApostadores === null) {
    listaApostadores = [];
  }
}

// Funcion que recoge Datos del Usuario Registrado
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
  let fraseBienvenida = document.createElement("p");
  let registro = document.querySelector(".registro");
  let tituloBienvenida = document.createElement("h2");

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

// Funcion que valida la informacion ingresada en el formulario para poder apostar
function validarRegistro() {
  const sosMayor = datosApostador.esMayor();
  if (sosMayor) {
    horario = new Reloj(hora);
    const horarioHabilitado = horario.estaAbierto();
    if (!horarioHabilitado) {
      const invalidTime = document.createElement("h2");
      invalidTime.classList.add("tituloWelcomeInvalidAge");
      invalidTime.innerText =
        "Para apostar solo en horarios habilitados: 8-12 & 15-23";
      tituloFormRegistro.remove();
      formUsuarioApostador.remove();
      formRegistro.appendChild(invalidTime);

      return false;
    }
    return true;
  } else if (isNaN(datosApostador.edad)) {
    const tituloInvalidAge = document.createElement("h2");
    tituloInvalidAge.classList.add("tituloWelcomeInvalidAge");
    tituloInvalidAge.innerText = "INGRESE UNA EDAD VÁLIDA PARA APOSTAR";
    tituloFormRegistro.remove();
    formUsuarioApostador.remove();
    formRegistro.appendChild(tituloInvalidAge);
    return false;
  } else {
    const tituloUnderAge = document.createElement("h2");
    tituloUnderAge.classList.add("tituloWelcomeUnderAge");
    tituloUnderAge.innerText = "DEBES SER MAYOR DE 18 AÑOS PARA APOSTAR";
    tituloFormRegistro.remove();
    formUsuarioApostador.remove();
    formRegistro.appendChild(tituloUnderAge);
    return false;
  }
}

// Funcion que le permite al usuario realizar sus apuestas de acuerdo a las categorias elegidas
function desplegarApuestas(valor1, valor2, valor3, titulo, categoria) {
  if (!registroValido) {
    alert("Debe estar registrado para continuar");
    return false;
  }
  const divApuesta = document.querySelector("#categoriaApuesta");
  let valorApuesta1 = document.querySelector("#apuestaValor1");
  let valorApuesta2 = document.querySelector("#apuestaValor2");
  let valorApuesta3 = document.querySelector("#apuestaValor3");

  const tituloApuesta = document.querySelector("#tituloApuesta");

  valorApuesta1.innerText = valor1;
  valorApuesta2.innerText = valor2;
  valorApuesta3.innerText = valor3;
  tituloApuesta.innerText = titulo;

  valorApuesta1.outerHTML = valorApuesta1.outerHTML;
  valorApuesta2.outerHTML = valorApuesta2.outerHTML;
  valorApuesta3.outerHTML = valorApuesta3.outerHTML;

  valorApuesta1 = document.querySelector("#apuestaValor1");
  valorApuesta2 = document.querySelector("#apuestaValor2");
  valorApuesta3 = document.querySelector("#apuestaValor3");

  valorApuesta1.addEventListener("click", clickvalor);

  valorApuesta2.addEventListener("click", clickvalor);

  valorApuesta3.addEventListener("click", clickvalor);
  function clickvalor() {
    const divApuestasRealizadas = document.querySelector("#apuestasRealizadas");
    divApuestasRealizadas.style.display = "block";
    const listaApuestas = document.querySelector("#listaApuestasRealizadas");
    const apuestaNueva = document.createElement("li");
    const botonBorrarApuesta = document.createElement("button");
    botonBorrarApuesta.innerText = "Borrar";
    botonBorrarApuesta.setAttribute("class", "btn btn-danger");

    const valorFinalDeApuesta = calcularPrecioFinal(
      this.innerText.replace("$", "")
    );
    montoTotalPagar += valorFinalDeApuesta;
    apuestaNueva.innerText = `Categoría: ${categoria}, Monto ${this.innerText}, Horario: ${hora}. El monto final a pagar con impuestos incluidos es $${valorFinalDeApuesta}`;

    datosApostador.apuestas.push(
      new Apuesta(valorFinalDeApuesta, categoria, hora)
    );
    const apuestasRealizadasValor = document.querySelector(
      "#montoTotalApuestas"
    );
    apuestasRealizadasValor.innerText = `$${montoTotalPagar}`;

    apuestaNueva.appendChild(botonBorrarApuesta);
    listaApuestas.appendChild(apuestaNueva);

    botonBorrarApuesta.addEventListener("click", () => {
      montoTotalPagar -= valorFinalDeApuesta;
      apuestasRealizadasValor.innerText = montoTotalPagar;
      apuestaNueva.remove();
    });

    const futbolBetting = document.querySelector("#g-01");
    const caballosBetting = document.querySelector("#g-02");
    const pokerBetting = document.querySelector("#g-03");
    const cabBet = filterCaballos();
    const futBet = filterFutbol();
    const pokBet = filterPoker();

    let futFilter = futBet.map(function (bet) {
      return `Categoria: ${bet.categoria}, Monto: $${bet.valor}, Horario de Apuesta: ${bet.hora}`;
    });

    let cabFilter = cabBet.map(function (bet) {
      return `Categoria: ${bet.categoria}, Monto: $${bet.valor}, Horario de Apuesta: ${bet.hora}`;
    });

    let pokFilter = pokBet.map(function (bet) {
      return `Categoria: ${bet.categoria}, Monto: $${bet.valor}, Horario de Apuesta: ${bet.hora}`;
    });

    futbolBetting.innerText = futFilter;
    caballosBetting.innerText = cabFilter;
    pokerBetting.innerText = pokFilter;

    let filter = true;

    function filtrarApuestas() {
      if (filter) {
        listaApuestas.remove();
        filterButton.innerText = "Ver todas las apuestas";
        filter = false;
      } else {
        filterButton.innerText = "Filtrar por Categoría";
        divApuestasRealizadas.appendChild(listaApuestas);
        filter = true;
      }
    }

    const filterButton = document.querySelector("#filterButton");
    filterButton.addEventListener("click", () => filtrarApuestas());
  }
  divApuesta.style.display = "block";
}

//  Funciones para calcular el precio final de apuestas
const taxPrice = (x) => x * 0.21;
const suma = (a, b) => Number(a) + Number(b);
const restaDescuentoPromocional = (a, b) => a - b;

//Funcion que calcula el precio final
function calcularPrecioFinal(precio) {
  const priceOfTax = taxPrice(parseInt(precio));
  const priceWithTax = suma(precio, priceOfTax);
  priceFinalDiscount = restaDescuentoPromocional(priceWithTax, priceDiscount);
  return priceFinalDiscount;
}

// Funcion estilo dropdown +info Evento futbol
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
    futbolBetTitle.innerHTML = "xxx";
    futbolBetParagraph.innerHTML = "xxx";
    futbolBetOptions1.innerHTML = "xxx";
    futbolBetOptions2.innerHTML = "xxx";
    futbolBetOptions3.innerHTML = "xxx";

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

// Funcion estilo dropdown +info Evento Caballos
function apuestasCaballosEvento() {
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

    caballosBetTitle.innerHTML = "xxxx";
    caballosBetParagraph.innerHTML = "xxx";
    caballosBetOptions1.innerHTML = "xxx";
    caballosBetOptions2.innerHTML = "xxx";
    caballosBetOptions3.innerHTML = "xxx";

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

// Funcion estilo dropdown +info Evento Poker

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
    pokerBetTitle.innerHTML = "xxx";
    pokerBetParagraph.innerHTML = "xxx";
    pokerBetOptions1.innerHTML = "xxx";
    pokerBetOptions2.innerHTML = "xxx";
    pokerBetOptions3.innerHTML = "xxx";

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

// Funcion que me permite devolver valores de acuerdo al filtro categorias checkbox seleccinado
function test(o) {
  var g = document.getElementById(o.value);
  if (o.checked) {
    g.style.display = "block";
  } else {
    g.style.display = "none";
  }
}

//Funcion filtrar apuestas realizadas Categoria Futbol
function filterFutbol() {
  return datosApostador.apuestas.filter(
    (apuesta) => apuesta.categoria == "Futbol"
  );
}

//Funcion filtrar apuestas realizadas Categoria Caballos
function filterCaballos() {
  return datosApostador.apuestas.filter(
    (apuesta) => apuesta.categoria == "Caballos"
  );
}

//Funcion filtrar apuestas realizadas Categoria Poker
function filterPoker() {
  return datosApostador.apuestas.filter(
    (apuesta) => apuesta.categoria == "Poker"
  );
}
