//Funcion para guardar datos en localStorage
const guardarLocal = (categoria, valor) => {
  localStorage.setItem(categoria, valor);
};

// Funcion que me permite obtener los datos de los apostadores registrados almacenados en LocalStorage
function obtenerLocal() {
  listaApostadores = JSON.parse(localStorage.getItem("Informacion cliente: "));
  if (listaApostadores === null) {
    listaApostadores = [];
  }
}

function obtenerLocalApuestas() {
  apuestasOnGameStorage = JSON.parse(
    localStorage.getItem("Informacion apuestas: ")
  );
  if (apuestasOnGameStorage === null) {
    apuestasOnGameStorage = [];
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
  obtenerLocalApuestas();

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
  if (
    nombre.trim() === "" ||
    apellido.trim() === "" ||
    mail.trim() === "" ||
    ciudad.trim() === "" ||
    pais.trim() === ""
  ) {
    const invalidData = document.createElement("h2");
    invalidData.classList.add("tituloWelcomeInvalidAge");
    invalidData.innerText = "Debe completar todos los campos";
    tituloFormRegistro.remove();
    formUsuarioApostador.remove();
    formRegistro.appendChild(invalidData);
    return false;
  }
  const sosMayor = datosApostador.esMayor();
  if (sosMayor) {
    const todayTime = new Date();
    let realHours = todayTime.getHours();
    horario = new Reloj(hora);
    let horarioIngresado = Number(hora);
    const horarioHabilitado = horario.estaAbierto();
    if (!horarioHabilitado) {
      const invalidTime = document.createElement("h2");
      invalidTime.classList.add("tituloWelcomeInvalidAge");
      invalidTime.innerText =
        "Para apostar solo en horarios habilitados: 8-12 & 14-23";
      tituloFormRegistro.remove();
      formUsuarioApostador.remove();
      formRegistro.appendChild(invalidTime);

      return false;
    }
    if (horarioIngresado != realHours) {
      const invalidTime = document.createElement("h2");
      invalidTime.classList.add("tituloWelcomeInvalidAge");
      invalidTime.innerText = "Debe ingresar el horario en punto actual";
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

// Funcion que le permite al usuario realizar sus apuestas de acuerdo a las categorias elegidas
function desplegarApuestas(valor1, valor2, valor3, titulo, categoria) {
  if (!registroValido) {
    swal("Debe estar registrado para continuar");
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

    // Funcion que permite borrar apuestas al usuario
    function deleteBet() {
      let apuestaElegidaBorrar = datosApostador.apuestas.find(
        (x) => x.valor === valorFinalDeApuesta
      );

      if (apuestaElegidaBorrar) {
        const index = datosApostador.apuestas.indexOf(apuestaElegidaBorrar);

        datosApostador.apuestas.splice(index, 1);

        let futFil = filterFutbol().map(function (bet) {
          return ` Categoria: ${bet.categoria}, Monto: $${bet.valor}, Horario de Apuesta: ${bet.hora}\n`;
        });

        let cabFil = filterCaballos().map(function (bet) {
          return ` Categoria: ${bet.categoria}, Monto: $${bet.valor}, Horario de Apuesta: ${bet.hora}\n`;
        });
        let pokFil = filterPoker().map(function (bet) {
          return ` Categoria: ${bet.categoria}, Monto: $${bet.valor}, Horario de Apuesta: ${bet.hora}\n`;
        });

        futbolBetting.innerText = futFil;
        caballosBetting.innerText = cabFil;
        pokerBetting.innerText = pokFil;
      }
      montoTotalPagar -= valorFinalDeApuesta;
      apuestasRealizadasValor.innerText = montoTotalPagar;
      apuestaNueva.remove();
    }

    botonBorrarApuesta.addEventListener("click", () => deleteBet());

    const futbolBetting = document.querySelector("#g-01");
    const caballosBetting = document.querySelector("#g-02");
    const pokerBetting = document.querySelector("#g-03");

    let futFilter = filterFutbol().map(function (bet) {
      return `Categoria: ${bet.categoria}, Monto: $${bet.valor}, Horario de Apuesta: ${bet.hora}\n`;
    });

    let cabFilter = filterCaballos().map(function (bet) {
      return `Categoria: ${bet.categoria}, Monto: $${bet.valor}, Horario de Apuesta: ${bet.hora}\n`;
    });

    let pokFilter = filterPoker().map(function (bet) {
      return `Categoria: ${bet.categoria}, Monto: $${bet.valor}, Horario de Apuesta: ${bet.hora}\n`;
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

    // Funcion que me permite borrar todas las apuestas
    function deleteAllBets() {
      datosApostador.apuestas = [];
      montoTotalPagar = 0;
      apuestasRealizadasValor.innerText = montoTotalPagar;
      apuestaNueva.remove();
    }

    const deleteAll = document.querySelector("#deleteAll");
    deleteAll.addEventListener("click", () => deleteAllBets());

    function confirmAllBets() {
      if (datosApostador.apuestas.length >= 1) {
        swal({
          title: "Estas seguro?",
          text: "Una vez confirmadas tus apuestas no podras regresar",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        }).then((willConfirm) => {
          if (willConfirm) {
            swal("Felicitaciones, tus apuestas han sido confirmadas", {
              icon: "success",
            });
          } else {
            swal("Apuestas canceladas");
          }
        });
      } else {
        return false;
      }
    }
    const confirmBet = document.querySelector("#confirmBet");
    confirmBet.addEventListener("click", () => confirmAllBets());
  }
  divApuesta.style.display = "block";
}

// Funcion estilo dropdown +info Evento futbol
function apuestasFutbolEvento() {
  if (desplegarMenuFutbol) {
    const futbolEvent = document.querySelector(".perfilCentrado1");
    const futbolBet = document.createElement("div");
    futbolBet.setAttribute("id", "soccerBet");
    const futbolBetParagraph = document.createElement("p");
    futbolBetParagraph.setAttribute("class", "soccerBetPrediction");
    const futImg = document.createElement("img");
    futImg.src = "img/futbol.jpg";

    futbolBet.classList.add("divsJuegos");
    futbolBetParagraph.innerHTML =
      "Los fanáticos del fútbol español encontrarán un juego increíblemente interesante. Los rivales están en movimiento ahora y podría ser un El Clásico realmente emocionante. Es poco probable prescindir de los goles aquí, los equipos tienen como objetivo ganar. Desde el punto de vista de la tabla azulgrana es aún más necesario, pero el Real Madrid no va a dejar ir la copa y mucho menos con un rival como el Barcelona.";

    futbolBet.appendChild(futbolBetParagraph);
    futbolBet.appendChild(futImg);
    futImg.style.borderRadius = "20px";
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
    const caballosBetParagraph = document.createElement("p");
    caballosBetParagraph.setAttribute("class", "caballosBetPrediction");
    const cabImg = document.createElement("img");
    cabImg.src = "img/caballos.jpg";
    cabImg.style.borderRadius = "20px";
    caballosBetParagraph.innerHTML =
      "Segundo día de competición en la pista de hierba del Hipódromo de San Francisco. Pista blanda (3,8). Seis carreras interesantes comienzan con la disputa del premio AKELARRE sobre 1.400 metros. Se presenta la ganadora en Francia de 3 carreras, hablamos de SAMEDI RIEN, comprada por la Yeguada Rocío con vistas a las pruebas importantes sobre la velocidad. Junto a ella un ramillete de buenos caballos como BRIBON, ganador de 3 carreras a 2 años, INCREDIT, ganadora del Carlos Sobrino y BLACK VOICE, ganadora en Madrid y corredora en GIII.";

    caballosBet.classList.add("divsJuegos");
    caballosBet.appendChild(caballosBetParagraph);
    caballosBet.appendChild(cabImg);
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
    const pokerBetParagraph = document.createElement("p");
    pokerBetParagraph.setAttribute("class", "pokerBetPrediction");
    const pokImg = document.createElement("img");
    pokImg.src = "img/poker.jpg";
    pokImg.style.borderRadius = "20px";

    pokerBet.classList.add("divsJuegos");

    pokerBetParagraph.innerHTML =
      "Fijando este buy in, todo apunta a que el Super High Roller Bowl será el torneo de mayor entrada del año, como sucedió un año atrás, y superará así el Super High Roller Manila, el cual tiene un costo de $250.000 para cada uno de sus participantes. De esta manera queda conformada una bolsa de premios que asciende a 15 millones de dólares (se añaden $300.000 de los sponsors). Habra figuras de talla mundial, como lo son: Antonio Esfandiari, Phil Hellmuth, Erik Seidel y Daniel Negreanu.";

    pokerBet.appendChild(pokerBetParagraph);
    pokerBet.appendChild(pokImg);
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

// Funcion Dark mode
function myDarkmode() {
  let element = document.body;
  element.classList.toggle("dark-mode");
}

const dark = document.querySelector("#darkMode");
dark.addEventListener("click", myDarkmode);
