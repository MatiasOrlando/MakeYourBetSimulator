//Funcion para guardar datos en localStorage
const guardarLocal = (categoria, valor) => {
  localStorage.setItem(categoria, valor);
};

// Funcion que me permite obtener los datos de los apostadores registrados almacenados en LocalStorage
function obtenerLocal() {
  listaApostadores = JSON.parse(localStorage.getItem("Informacion cliente: "));

  listaApostadores === null && (listaApostadores = []);
}

// Funcion que me permite obtener los datos de las apuestas confirmadas almacenadas en LocalStorage
function obtenerLocalApuestas() {
  apuestasOnGameStorage =
    JSON.parse(localStorage.getItem("Informacion Apuestas Confirmadas: ")) ||
    [];
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

  datosApostador = new Apostador(
    nombre,
    apellido,
    edad,
    mail,
    ciudad,
    pais,
    hora
  );

  usuarioApostador.push(datosApostador);
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

  tituloBienvenida.innerText = `Cargando datos`;
  fraseBienvenida.innerHTML = `<div id="floatingCirclesG">
	<div class="f_circleG" id="frotateG_01"></div>
	<div class="f_circleG" id="frotateG_02"></div>
	<div class="f_circleG" id="frotateG_03"></div>
	<div class="f_circleG" id="frotateG_04"></div>
	<div class="f_circleG" id="frotateG_05"></div>
	<div class="f_circleG" id="frotateG_06"></div>
	<div class="f_circleG" id="frotateG_07"></div>
	<div class="f_circleG" id="frotateG_08"></div>
</div>`;

  tituloBienvenida.classList.add("tituloWelcome");
  fraseBienvenida.style.marginTop = "50px";
  divBienvenida.appendChild(tituloBienvenida);
  divBienvenida.appendChild(fraseBienvenida);
  registro.appendChild(divBienvenida);

  setTimeout(() => Bienvenida(), 1900);

  function Bienvenida() {
    tituloBienvenida.innerText = `BIENVENIDO A MAKE YOUR BET`;
    fraseBienvenida.innerText = `Nombre Completo: ${nombre} ${apellido}
        Edad: ${edad}
        Mail: ${mail}
        Ciudad: ${ciudad}
        País: ${pais}
        Gracias por registrarte, es hora de jugar.`;
    fraseBienvenida.style.marginTop = "20px";
    fraseBienvenida.classList.add("presentation");
    tituloBienvenida.classList.add("tituloWelcome");
    divBienvenida.style.paddingTop = "30px";
    divBienvenida.style.paddingLeft = "10px";
    registro.appendChild(divBienvenida);
  }
}

// Funcion que valida la informacion ingresada en el formulario para poder apostar
function validarRegistro() {
  const { edad, mail } = datosApostador;
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
    let DateTime = luxon.DateTime;
    let localTime = DateTime.local();
    let localHour = localTime.toLocaleString(DateTime.TIME_24_SIMPLE);
    let horario = new Reloj(hora);
    const horarioHabilitado = horario.estaAbierto();
    if (!horarioHabilitado) {
      const invalidTime = document.createElement("h2");
      invalidTime.classList.add("tituloWelcomeInvalidAge");
      invalidTime.innerText = "Para apostar solo en horarios habilitados: 8-24";
      tituloFormRegistro.remove();
      formUsuarioApostador.remove();
      formRegistro.appendChild(invalidTime);
      return false;
    }
    if (hora != localHour) {
      const invalidTime = document.createElement("h2");
      invalidTime.classList.add("tituloWelcomeInvalidAge");
      invalidTime.innerText = "Debe ingresar el horario actual de la Argentina";
      tituloFormRegistro.remove();
      formUsuarioApostador.remove();
      formRegistro.appendChild(invalidTime);
      return false;
    }
    if (!validarCorreo(mail)) {
      const invalidMail = document.createElement("h2");
      invalidMail.classList.add("tituloWelcomeInvalidAge");
      invalidMail.innerText = "Debe ingresar un correo válido para apostar";
      tituloFormRegistro.remove();
      formUsuarioApostador.remove();
      formRegistro.appendChild(invalidMail);
      return false;
    }
    return true;
  } else if (isNaN(edad)) {
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

  // Funcion validar correo
  function validarCorreo(correo) {
    let expReg =
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    let correoValido = expReg.test(correo);
    if (!correoValido) {
      return false;
    } else {
      return true;
    }
  }
}

//  Funciones involucradas para calcular el precio final de apuestas
const taxPrice = (x) => x * 0.21;
const suma = (a, b) => Number(a) + Number(b);
const restaDescuentoPromocional = (a, b) => a - b;

//Funcion que calcula el precio final de las apuestas
function calcularPrecioFinal(precio) {
  const priceOfTax = taxPrice(parseInt(precio));
  const priceWithTax = suma(precio, priceOfTax);
  return priceWithTax;
}

// Funcion que me permite devolver valores de acuerdo al filtro categorias checkbox seleccinado
function test(o) {
  var g = document.getElementById(o.value);
  o.checked ? (g.style.display = "block") : (g.style.display = "none");
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
    Toastify({
      text: "Apuesta agregada",
      duration: 1500,
      newWindow: true,
      gravity: "top",
      position: "right",
      stopOnFocus: true,
      style: {
        background: "black",
      },
    }).showToast();
    const { apuestas } = datosApostador;
    const divApuestasRealizadas = document.querySelector("#apuestasRealizadas");
    divApuestasRealizadas.style.display = "block";
    const tablaApuestas = document.querySelector("#tableApuestas");
    tablaApuestas.setAttribute(
      "class",
      "table table-hover table-bordered table-dark"
    );
    const tbody1 = document.querySelector("#tBody");
    const apuestaNueva = document.createElement("tr");

    const valorFinalDeApuesta = calcularPrecioFinal(
      this.innerText.replace("U$S", "")
    );

    montoTotalPagar += valorFinalDeApuesta;

    apuestaNueva.innerHTML = `<td>${categoria}</td>
                      <td>${this.innerText}</td>
                      <td>U$S${valorFinalDeApuesta}</td>
                      <td>${hora}</td>
                      <td>
                      <button id="btnDelete${idApuesta}" class="btn btn-danger">
                            Eliminar
                      </button></td>`;
    let apuestaNew = new Apuesta(
      idApuesta,
      valorFinalDeApuesta,
      categoria,
      hora
    );
    apuestas.push(apuestaNew);
    const apuestasRealizadasValor = document.querySelector(
      "#montoTotalApuestas"
    );

    const subTotalApuestas = document.querySelector("#montoSubtotalApuestas");
    const bonoDiscount = document.querySelector("#priceDiscount");
    bonoDiscount.innerText = `Bono: - U$S150`;
    subTotalApuestas.innerText = `Subtotal: U$S${montoTotalPagar}`;
    apuestasRealizadasValor.innerText = `U$S${restaDescuentoPromocional(
      montoTotalPagar,
      priceDiscount
    )}`;

    tbody1.appendChild(apuestaNueva);
    tablaApuestas.appendChild(tbody1);

    const btnDeleteBet = document.querySelector(`#btnDelete${apuestaNew.id}`);

    btnDeleteBet.addEventListener("click", () => deleteBet(apuestaNew.id));

    // Funcion que permite borrar apuestas al usuario
    function deleteBet(idApuesta) {
      let apuestaElegidaBorrar = apuestas.find(
        (apuesta) => apuesta.id === idApuesta
      );

      if (apuestaElegidaBorrar) {
        const index = apuestas.indexOf(apuestaElegidaBorrar);

        apuestas.splice(index, 1);

        let futFil = filterFutbol().map(function (bet) {
          return ` Categoria: ${bet.categoria}, Monto: U$S${bet.valor}, Horario de Apuesta: ${bet.hora}\n`;
        });

        let cabFil = filterCaballos().map(function (bet) {
          return ` Categoria: ${bet.categoria}, Monto: U$S${bet.valor}, Horario de Apuesta: ${bet.hora}\n`;
        });
        let pokFil = filterPoker().map(function (bet) {
          return ` Categoria: ${bet.categoria}, Monto: U$S${bet.valor}, Horario de Apuesta: ${bet.hora}\n`;
        });

        futbolBetting.innerText = futFil;
        caballosBetting.innerText = cabFil;
        pokerBetting.innerText = pokFil;
      }
      montoTotalPagar -= valorFinalDeApuesta;
      subTotalApuestas.innerText = `Subtotal: U$S${montoTotalPagar}`;
      if (apuestas.length >= 1) {
        apuestasRealizadasValor.innerText = `U$S${restaDescuentoPromocional(
          montoTotalPagar,
          priceDiscount
        )}`;
      } else {
        apuestasRealizadasValor.innerText = `U$S${montoTotalPagar}`;
      }
      apuestaNueva.remove();
    }

    const futbolBetting = document.querySelector("#g-01");
    const caballosBetting = document.querySelector("#g-02");
    const pokerBetting = document.querySelector("#g-03");

    let futFilter = filterFutbol().map(function (bet) {
      return `Categoria: ${bet.categoria}, Monto: U$S${bet.valor}, Horario de Apuesta: ${bet.hora}\n`;
    });

    let cabFilter = filterCaballos().map(function (bet) {
      return `Categoria: ${bet.categoria}, Monto: U$S${bet.valor}, Horario de Apuesta: ${bet.hora}\n`;
    });

    let pokFilter = filterPoker().map(function (bet) {
      return `Categoria: ${bet.categoria}, Monto: U$S${bet.valor}, Horario de Apuesta: ${bet.hora}\n`;
    });

    futbolBetting.innerText = futFilter;
    caballosBetting.innerText = cabFilter;
    pokerBetting.innerText = pokFilter;

    //Funcion filtrar apuestas realizadas Categoria Futbol
    function filterFutbol() {
      return apuestas.filter((apuesta) => apuesta.categoria == "Futbol");
    }

    function filterFutbol2() {
      return datosApostador.apuestas.filter(
        (apuesta) => apuesta.categoria == "Futbol"
      );
    }

    //Funcion filtrar apuestas realizadas Categoria Caballos
    function filterCaballos() {
      return apuestas.filter((apuesta) => apuesta.categoria == "Caballos");
    }

    function filterCaballos2() {
      return datosApostador.apuestas.filter(
        (apuesta) => apuesta.categoria == "Caballos"
      );
    }

    //Funcion filtrar apuestas realizadas Categoria Poker
    function filterPoker() {
      return apuestas.filter((apuesta) => apuesta.categoria == "Poker");
    }

    function filterPoker2() {
      return datosApostador.apuestas.filter(
        (apuesta) => apuesta.categoria == "Poker"
      );
    }
    const filterButton = document.querySelector("#filterButton");
    filterButton.addEventListener("click", () => filtrarApuestas());

    let filter = true;
    const montosApuestas = document.querySelector("#montosApuestas");

    function filtrarApuestas() {
      if (filter) {
        tablaApuestas.remove();
        filterButton.innerText = "Ver todas las apuestas";
        filter = false;
      } else {
        filterButton.innerText = "Filtrar por Categoría";
        montosApuestas.insertAdjacentElement("beforebegin", tablaApuestas);
        filter = true;
      }
    }

    // Funcion que me permite borrar todas las apuestas
    function deleteAllBets() {
      datosApostador.apuestas = [];
      montoTotalPagar = 0;
      subTotalApuestas.innerText = `Subtotal: U$S${montoTotalPagar}`;
      apuestasRealizadasValor.innerText = `U$S${montoTotalPagar}`;
      apuestaNueva.remove();
      swal("Todas las apuestas han sido borradas");
      let futFil2 = filterFutbol2().map(function (bet) {
        return ` Categoria: ${bet.categoria}, Monto: U$S${bet.valor}, Horario de Apuesta: ${bet.hora}\n`;
      });

      let cabFil2 = filterCaballos2().map(function (bet) {
        return ` Categoria: ${bet.categoria}, Monto: U$S${bet.valor}, Horario de Apuesta: ${bet.hora}\n`;
      });
      let pokFil2 = filterPoker2().map(function (bet) {
        return ` Categoria: ${bet.categoria}, Monto: U$S${bet.valor}, Horario de Apuesta: ${bet.hora}\n`;
      });

      futbolBetting.innerText = futFil2;
      caballosBetting.innerText = cabFil2;
      pokerBetting.innerText = pokFil2;
    }

    const deleteAll = document.querySelector("#deleteAll");
    deleteAll.addEventListener("click", () => deleteAllBets());

    // Funcion confirmar apuestas realizadas
    function confirmAllBets() {
      if (apuestas.length >= 1) {
        swal({
          title: "Estas seguro?",
          text: "Una vez confirmadas tus apuestas no podras regresar",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        }).then((willConfirm) => {
          if (willConfirm) {
            onlineBet.push(apuestas);
            for (const apuesta of onlineBet) {
              apuestasOnGameStorage.push(apuesta);
            }
            guardarLocal(
              "Informacion Apuestas Confirmadas: ",
              JSON.stringify(apuestasOnGameStorage)
            );
            swal("Felicitaciones, tus apuestas han sido confirmadas", {
              icon: "success",
            });
          } else {
            swal("Apuestas canceladas, vuelva pronto", { icon: "error" });
            datosApostador.apuestas = [];
            montoTotalPagar = 0;
            apuestasRealizadasValor.innerText = `U$S${montoTotalPagar}`;
            subTotalApuestas.innerText = `Subtotal: U$S${montoTotalPagar}`;
            tbody1.innerHTML = "";
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
function myDarkMode() {
  const valorLiveDolaresAPesos = document.querySelector(".estiloSpanDolar");
  const valorLiveBtcAdolares = document.querySelector(".estiloSpanBtc");

  valorLiveDolaresAPesos.style.color = "black";
  valorLiveBtcAdolares.style.color = "black";
  valorDelDolar.style.color = "black";
  valorBtc.style.color = "black";

  let element = document.body;
  element.classList.toggle("dark-mode");
}

// Funcion Bono Bienvenida
function bonoBienvenida() {
  setTimeout(() => {
    const bono = document.createElement("div");
    bono.setAttribute("id", "bonoBienvenida");
    bono.setAttribute("class", "animate__animated animate__bounceInDown");
    const bonoTexto = document.createElement("span");
    bonoTexto.setAttribute("class", "bonoBienvenidaTexto");
    bonoTexto.innerText = `Disfruta hoy tu bono de bienvenida: U$S150`;
    bono.appendChild(bonoTexto);
    const formInicial = document.querySelector(".formText");
    formInicial.insertAdjacentElement("afterend", bono);
  }, 2200);
}

// Funcion API Dolar
function dolarValue() {
  let url = "https://www.dolarsi.com/api/api.php?type=valoresprincipales";
  fetch(url)
    .then((res) => res.json())
    .then((json) => {
      mostrarInfo(json);
    })
    .catch(() => swal(`Valores momentáneamente no disponibles`));

  function mostrarInfo(data) {
    let valorDolarOficial = data
      .filter((x) => x.casa.nombre === "Dolar Oficial")
      .map(function (el) {
        return `Compra: $${el.casa.compra} AR Venta: $${el.casa.venta} AR`;
      });

    valorDelDolar.innerHTML = valorDolarOficial;
  }
}

// Funcion API Bitcoin
function bitcoinValue() {
  let url = "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD";

  const datosCripto = async () => {
    try {
      function mostrarInfo(data) {
        let bitCoinValue = data.USD;
        valorBtc.innerHTML = `1 BTC = U$S${bitCoinValue}`;
      }
      const res = await fetch(url);
      const json = await res.json();
      mostrarInfo(json);
    } catch {
      swal(`Valor momentáneamente no disponible`);
    }
  };

  datosCripto();
}
// Funcion APi JSONplaceholder fakeusers top5
function top5() {
  if (top5Winners) {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((response) => response.json())
      .then((json) => mostrarInfo(json))
      .catch(() => swal("Información no disponible"));

    function mostrarInfo(data) {
      nodoTop5 = document.querySelector(".topPlayers");
      const top5players = document.createElement("div");
      top5players.setAttribute("class", "card");
      top5players.setAttribute("style", "width: 18rem;");
      nodoTop5.innerHTML = "";
      data
        .filter((x) => x.id <= 5)
        .forEach((element) => {
          let top5data = document.createElement("li");
          top5data.setAttribute("class", "list-group-item bg-light");
          top5data.style.listStyleType = "none";
          top5data.innerHTML = `Usuario: ${element.username},
                                    Rank: ${element.id} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>`;
          top5players.appendChild(top5data);
          nodoTop5.appendChild(top5players);
          nodoTop5.style.display = "block";
        });
    }
    top5week.innerHTML = "Cerrar";
    top5Winners = false;
  } else {
    nodoTop5.style.display = "none";
    top5week.innerHTML = "Top 5 Ganadores esta semana";
    top5Winners = true;
  }
}

// Funcion APi Info Caballos Corredores
function infoCarreraCaballos() {
  const botonInfoCaballos = document.querySelector("#caballosCompetencia");
  const divHorse = document.querySelector("#horseRunners");
  if (infoHorses) {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "horse-racing.p.rapidapi.com",
        "X-RapidAPI-Key": "4952590a94msh7662f4d44b46052p170f00jsn9b9fc11fc618",
      },
    };

    fetch("https://horse-racing.p.rapidapi.com/race/207660", options)
      .then((response) => response.json())
      .then((json) => {
        mostrarInfo(json);
      })
      .catch(() => swal("Información no disponible"));

    function mostrarInfo(data) {
      divHorse.innerHTML = "";
      const table = document.createElement("table");
      table.setAttribute("class", "table table-hover table-bordered");
      table.innerHTML = `<thead>
            <tr>
              <th>Caballos</th>
              <th>Edad</th>
              <th>Jockey</th>
              <th>Trainer</th>
            </tr>
          </thead>`;
      const tbodyHorses = document.createElement("tbody");
      divHorse.style.display = "block";
      data.horses.forEach((el) => {
        let topHorses = document.createElement("tr");
        topHorses.innerHTML = `<td>${el.horse}</td>
                      <td>${el.age}</td>
                      <td>${el.jockey}</td>
                      <td>${el.trainer}</td>`;

        tbodyHorses.appendChild(topHorses);
      });
      table.appendChild(tbodyHorses);
      divHorse.appendChild(table);
    }
    botonInfoCaballos.innerHTML = "Cerrar";
    infoHorses = false;
  } else {
    divHorse.style.display = "none";
    botonInfoCaballos.innerHTML = "Información Caballos Competidores";
    infoHorses = true;
  }
}

//Funcion API EmailJS
function emailJs() {
  const serviceID = "default_service";
  const templateID = "template_cj0kp2d";

  emailjs.sendForm(serviceID, templateID, formUsuario);
}
