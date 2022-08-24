const sectionReiniciar = document.getElementById("reiniciar");
const botonMascotaJugador = document.getElementById("boton-mokepon");
const botonReinicar = document.getElementById("boton-reinicar");


const sectionSeleccionarmokepon = document.getElementById("select-mokepon");
const spanMokeponJugador = document.getElementById("mokepon-jugador");

const spanMokeponEnemigo = document.getElementById("mokepon-enemigo");

const spanVidasJugador = document.getElementById("vidas-jugador");
const spanVidasEnemigo = document.getElementById("vidas-enemigo");


const ataqueDelJugador = document.getElementById("ataque-del-jugador");
const ataqueDelEnemigo = document.getElementById("ataque-del-enemigo");
const sectionMensajes = document.getElementById("resultado");

const sectionSeleccionarAtaque = document.getElementById("select-attack");
const contenedorTarjetas = document.getElementById("contenedor-tarjetas");
const contenedorAtaques = document.getElementById("contenedor-ataques");

const sectionVerMapa = document.getElementById("ver-mapa");
const mapa = document.getElementById("mapa");

let mokepones = [];
let ataqueJugador = [];
let ataqueEnemigo = [];
let opcionDeMokepones;
let mokeponHipodoge;
let mokeponCapipepo;
let mokeponRatigueya;
let mokeponLangostelvis;
let mokeponPydos;
let mokeponTucapalma;
let mascotaJugador;
let ataquesMokepon;
let ataquesMokeponEnemigo;
let botonFuego;
let botonAgua;
let botonTierra;
let botonAire;
let botonTrueno;
let botones = [];
let indexAtaqueJugador;
let indexAtaqueEnemigo;
let victoriasJugador = 0;
let victoriasEnemigo = 0;
let lienzo = mapa.getContext("2d");


class Mokepon {
    constructor(nombre, foto, vida, tipo) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.tipo = tipo;
        this.x = 20;
        this.y = 30;
        this.ancho = 80;
        this.alto = 80;
        this.mapaFoto = new Image();
        this.mapaFoto.src = foto;
        }
}

let Hipodoge = new Mokepon("Hipodoge", "./assets/mokepons_mokepon_hipodoge_attack.png", 5, "AGUA");
let Capipepo = new Mokepon("Capipepo", "./assets/mokepons_mokepon_capipepo_attack.png", 5, "TIERRA");
let Ratigueya = new Mokepon("Ratigueya", "./assets/mokepons_mokepon_ratigueya_attack.png", 5, "FUEGO");
let Langotelvis = new Mokepon("Langotelvis", "./assets/mokepons_mokepon_langostelvis_attack.png", 5, "FUEGO");
let Pydos = new Mokepon("Pydos", "./assets/mokepons_mokepon_pydos_attack.png", 5, "Trueno");
let Tucapalma = new Mokepon("Tucapalma", "./assets/mokepons_mokepon_tucapalma_attack.png", 5, "Aire");

Hipodoge.ataques.push(
    {nombre: '💧', id: 'boton-agua' },
    {nombre: '💧', id: 'boton-agua' },
    {nombre: '💧', id: 'boton-agua' },
    {nombre: '💨', id: 'boton-aire' },
    {nombre: '🌱', id: 'boton-tierra'},
)
Capipepo.ataques.push(
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '💧', id: 'boton-agua' },
    {nombre: '⚡', id: 'boton-trueno'},
)
Ratigueya.ataques.push(
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '⚡', id: 'boton-trueno' },
    {nombre: '🌱', id: 'boton-tierra'},
)
Langotelvis.ataques.push(
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '💨', id: 'boton-aire'},
)
Pydos.ataques.push(
    {nombre: '⚡', id: 'boton-trueno'},
    {nombre: '⚡', id: 'boton-trueno'},
    {nombre: '⚡', id: 'boton-trueno'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🌱', id: 'boton-tierra'},
)
Tucapalma.ataques.push(
    {nombre: '💨', id: 'boton-aire'},
    {nombre: '💨', id: 'boton-aire'},
    {nombre: '💨', id: 'boton-aire'},
    {nombre: '⚡', id: 'boton-trueno'},
    {nombre: '💧', id: 'boton-agua'},
)

mokepones.push(Hipodoge,Capipepo,Ratigueya,Langotelvis,Pydos,Tucapalma);


function iniciarJuego() {
    sectionSeleccionarAtaque.style.display = "none";
    sectionReiniciar.style.display = "none";
    sectionVerMapa.style.display = 'none';

    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
            <input type="radio"  name="mokepon" id=${mokepon.nombre} />
            <label class="tarjeta-de-mokepon" for=${mokepon.nombre} >
            <p>${mokepon.nombre} </p>
            <img src=${mokepon.foto} alt="${mokepon.nombre} ">
            </label>
            `
            contenedorTarjetas.innerHTML += opcionDeMokepones;
            mokeponHipodoge = document.getElementById("Hipodoge");
            mokeponCapipepo = document.getElementById("Capipepo");
            mokeponRatigueya = document.getElementById("Ratigueya");
            mokeponLangostelvis = document.getElementById("Langotelvis");
            mokeponPydos = document.getElementById("Pydos");
            mokeponTucapalma = document.getElementById("Tucapalma");
    })

    botonMascotaJugador.addEventListener("click", seleccionarMokeponJugador);
    botonReinicar.addEventListener("click", reinicarJuego);

}
    //Logica de seleccion de los mokepones del jugador
function seleccionarMokeponJugador() {
    sectionSeleccionarmokepon.style.display = "none";
    // sectionSeleccionarAtaque.style.display = "flex";
    sectionVerMapa.style.display = 'flex';


    if (mokeponHipodoge.checked == true) {
        spanMokeponJugador.innerHTML = mokeponHipodoge.id;
        mascotaJugador = mokeponHipodoge.id;
    } else if (mokeponCapipepo.checked == true) {
        spanMokeponJugador.innerHTML = mokeponCapipepo.id;
        mascotaJugador = mokeponCapipepo.id;
    } else if (mokeponRatigueya.checked == true) {
        spanMokeponJugador.innerHTML = mokeponRatigueya.id;
        mascotaJugador = mokeponRatigueya.id;
    } else if (mokeponLangostelvis.checked == true) {
        spanMokeponJugador.innerHTML = mokeponLangostelvis.id;
        mascotaJugador = mokeponLangostelvis.id;
    } else if(mokeponPydos.checked == true) {
        spanMokeponJugador.innerHTML = mokeponPydos.id;
        mascotaJugador = mokeponPydos.id;
    } else if(mokeponTucapalma.checked == true) {
        spanMokeponJugador.innerHTML = mokeponTucapalma.id;
        mascotaJugador = mokeponTucapalma.id;
    } else {
        alert("Por favor, Elieges un Mokepon")
    }

    extraerAtaques()

    seleccionarMokeponEnemigo()
}

    function extraerAtaques() {
        let ataques;
        for (let i = 0; i < mokepones.length; i++) {
            if (mascotaJugador === mokepones[i].nombre) {
                ataques = mokepones[i].ataques;
            }
        }
        mostrarAtaques(ataques)
    }

function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {
        ataquesMokepon = `
        <button id=${ataque.id}  class="boton_ataque BAtaque">${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataquesMokepon
    })

     botonFuego = document.getElementById("boton-fuego");
     botonAgua = document.getElementById("boton-agua");
     botonTierra = document.getElementById("boton-tierra");
     botonTrueno = document.getElementById("boton-trueno")
     botonAire = document.getElementById("boton-aire")
     botones = document.querySelectorAll('.BAtaque')
}
    //fuciones para los ataques de los mokepones
function secuenciaAtaques() {
    botones.forEach((boton) =>{
        boton.addEventListener("click", (e) => {
            if (e.target.textContent === "🔥") {
                ataqueJugador.push("🔥");
                console.log(ataqueJugador);
                boton.style.background = '#112f58';
                boton.disabled = true;
            } else if(e.target.textContent === "💧") {
                ataqueJugador.push("💧");
                console.log(ataqueJugador);
                boton.style.background = '#112f58';
                boton.disabled = true;
            } else if(e.target.textContent === "🌱") {
                ataqueJugador.push("🌱");
                console.log(ataqueJugador);
                boton.style.background = '#112f58';
                boton.disabled = true;
            } else if(e.target.textContent === "⚡") {
                ataqueJugador.push("⚡");
                console.log(ataqueJugador);
                boton.style.background = '#112f58';
                boton.disabled = true;
            } else {
                ataqueJugador.push("💨");
                console.log(ataqueJugador);
                boton.style.background = '#112f58';
                boton.disabled = true;
            }
            ataqueEnemigoAleatorio()
        })
    })
}
    //logica de seleccion de los mokepones del enemigo
function seleccionarMokeponEnemigo() {
    let seleccionAleatorio = Randomnumbers(0, mokepones.length -1);

    spanMokeponEnemigo.innerHTML = mokepones[seleccionAleatorio].nombre;
    ataquesMokeponEnemigo = mokepones[seleccionAleatorio].ataques;
    secuenciaAtaques()
}
function ataqueEnemigoAleatorio() {
    let ataqueAleatorio = Randomnumbers(0, ataquesMokeponEnemigo.length - 1);
        ataqueEnemigo.push(ataquesMokeponEnemigo[ataqueAleatorio].nombre)

    iniciarPelea()
}

function iniciarPelea() {
    if (ataqueJugador.length === 5) {
        combateMokepon()
    }
}

function indexAmbosOponentes(jugador, enemigo) {
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}
    //Funcion del combate
function combateMokepon() {

    for (let index = 0; index < ataqueJugador.length; index++) {
        if (ataqueJugador[index] === ataqueEnemigo[index]) {
            indexAmbosOponentes(index, index)
            crearMensajes("EMPATE");
        } else if((ataqueJugador[index] == "🔥" && ataqueEnemigo[index] == "🌱") || (ataqueJugador[index] == "💧" && ataqueEnemigo[index]  == "🔥") || (ataqueJugador[index] == "🌱" && ataqueEnemigo[index]  == "💧") || (ataqueJugador[index] === "⚡" && ataqueEnemigo[index] === "💧") || (ataqueJugador[index] === "💨" && ataqueEnemigo[index] === "🔥") || (ataqueJugador[index] === "⚡" && ataqueEnemigo[index] === "🌱") || (ataqueJugador[index] === "💨" && ataqueEnemigo[index] === "💧") ) {
            indexAmbosOponentes(index, index)
            crearMensajes("GANASTE");
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador;
        } else {
            indexAmbosOponentes(index, index)
            crearMensajes("PERDISTE");
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML = victoriasEnemigo;
        }
        revisarVidas()
    }
}

function revisarVidas() {
    if(victoriasJugador === victoriasEnemigo) {
        crearMensajesFinal("Esto Fue un Empate!!");
    } else if (victoriasJugador > victoriasEnemigo) {
        crearMensajesFinal("Felicitaciones! GANASTE!🎉");
    } else {
        crearMensajesFinal("Lo siento, Perdiste");
    }

}

function crearMensajes(result) {
    let nuevoAtaqueJugador = document.createElement("p");
    let nuevoAtaqueEnemigo = document.createElement("p");

    sectionMensajes.innerHTML = result;
    nuevoAtaqueJugador.innerHTML = indexAtaqueJugador;
    nuevoAtaqueEnemigo.innerHTML = indexAtaqueEnemigo;

    ataqueDelJugador.appendChild(nuevoAtaqueJugador);
    ataqueDelEnemigo.appendChild(nuevoAtaqueEnemigo);
}
function crearMensajesFinal(resultFinal) {
    sectionReiniciar.style.display = "block";
    let parrafo = document.createElement("p");
    sectionMensajes.innerHTML = resultFinal;
}

function reinicarJuego() {
    location.reload();
}

function Randomnumbers(min, max) {
    return Math.floor( Math.random()* (max - min + 1) + min);
}

function pintarPersonaje() {
    lienzo.clearRect(0, 0, mapa.Width, mapa.height);
    lienzo.drawImage(
        Capipepo.mapaFoto,
        Capipepo.x,
        Capipepo.y,
        Capipepo.ancho,
        Capipepo.alto
    )
}

function moverCapipepo() {
    Capipepo.y = Capipepo.y + 5
    pintarPersonaje()
}

window.addEventListener("load", iniciarJuego)