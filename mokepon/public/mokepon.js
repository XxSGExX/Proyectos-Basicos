
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

let jugadorId = null
let enemigoId = null
let mokepones = [];
let mokeponesEnemigos= [];
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
let mascotaJugadorObjecto;
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
let intervalo;
let mapaBackground = new Image();
mapaBackground.src = "./assets/mokemap.png"
let alturaQueBuscamos;
let anchoDelMapa = window.innerWidth - 20;
const anchoMaximoDelMapa = 500;

if (anchoDelMapa > anchoMaximoDelMapa) {
    anchoDelMapa = anchoMaximoDelMapa -20
}

alturaQueBuscamos = anchoDelMapa * 600 / 800;

mapa.width = anchoDelMapa;
mapa.height = alturaQueBuscamos;


class Mokepon {
    constructor(nombre, foto, vida, tipo, fotoMapa, id= null) {
        this.nombre = nombre;
        this.id = id;
        this.foto = foto;
        this.vida = vida;
        this.ataques = [];
        this.tipo = tipo;
        this.ancho = 40;
        this.alto = 40;
        this.x = Randomnumbers(0, mapa.width - this.ancho);
        this.y = Randomnumbers(0, mapa.height - this.alto);
        this.mapaFoto = new Image();
        this.mapaFoto.src = fotoMapa
        this.velocidadX = 0;
        this.velocidadY = 0;
        }

    pintarMokepon() {
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto,
        )
    }
}

let Hipodoge = new Mokepon("Hipodoge", "./assets/mokepons_mokepon_hipodoge_attack.png", 5, "AGUA", "./assets/hipodoge.png");
let Capipepo = new Mokepon("Capipepo", "./assets/mokepons_mokepon_capipepo_attack.png", 5, "TIERRA", "./assets/capipepo.png");
let Ratigueya = new Mokepon("Ratigueya", "./assets/mokepons_mokepon_ratigueya_attack.png", 5, "FUEGO", "./assets/ratigueya.png");
let Langotelvis = new Mokepon("Langotelvis", "./assets/mokepons_mokepon_langostelvis_attack.png", 5, "FUEGO", "./assets/langotelvis.png");
let Pydos = new Mokepon("Pydos", "./assets/mokepons_mokepon_pydos_attack.png", 5, "Trueno", "./assets/pydos.png");
let Tucapalma = new Mokepon("Tucapalma", "./assets/mokepons_mokepon_tucapalma_attack.png", 5, "Aire", "./assets/tucapalma.png");

const HipodogeAtaques = [
    {nombre: '💧', id: 'boton-agua' },
    {nombre: '💧', id: 'boton-agua' },
    {nombre: '💧', id: 'boton-agua' },
    {nombre: '💨', id: 'boton-aire' },
    {nombre: '🌱', id: 'boton-tierra'},
]

const CapipepoAtaques = [
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '💧', id: 'boton-agua' },
    {nombre: '⚡', id: 'boton-trueno'},
]

const RatigueyaAtaques = [
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '⚡', id: 'boton-trueno' },
    {nombre: '🌱', id: 'boton-tierra'},
]

const LangotelvisAtaques = [
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '💨', id: 'boton-aire'},
]

const PydosAtaques = [
    {nombre: '⚡', id: 'boton-trueno'},
    {nombre: '⚡', id: 'boton-trueno'},
    {nombre: '⚡', id: 'boton-trueno'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🌱', id: 'boton-tierra'},
]

const TucapalmaAtaques = [
    {nombre: '💨', id: 'boton-aire'},
    {nombre: '💨', id: 'boton-aire'},
    {nombre: '💨', id: 'boton-aire'},
    {nombre: '⚡', id: 'boton-trueno'},
    {nombre: '💧', id: 'boton-agua'},
]

Hipodoge.ataques.push(...HipodogeAtaques)

Capipepo.ataques.push(...CapipepoAtaques)

Ratigueya.ataques.push(...RatigueyaAtaques)

Langotelvis.ataques.push(...LangotelvisAtaques)

Pydos.ataques.push(...PydosAtaques)

Tucapalma.ataques.push(...TucapalmaAtaques)

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

    unirseAlJuego()

}

function unirseAlJuego(){
    fetch("http://localhost:8080/unirse")
        .then(function(res) {
            if (res.ok) {
                res.text()
                    .then(function(respuesta){
                        console.log(respuesta);
                        jugadorId = respuesta
                    })
            }
        })
}

    //Logica de seleccion de los mokepones del jugador
function seleccionarMokeponJugador() {
    
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
        return
    }
    sectionSeleccionarmokepon.style.display = "none";
    
    seleccionarMokepon(mascotaJugador)

    extraerAtaques()
    sectionVerMapa.style.display = 'flex';
    inicarMapa()
}

function seleccionarMokepon(mascotaJugador){
    fetch(`http://localhost:8080/mokepon/${jugadorId}`, {
        method: "post",
        headers: {
            "Content-Type": "aplication/json"
        },
        body: JSON.stringify({
            mokepon: mascotaJugador
        })
    })
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
            if (ataqueJugador.length ===5) {
                enviarAtaques()
            }
        })
    })
}

function enviarAtaques() {
    fetch(`http://localhost:8080/mokepon/${jugadorId}/ataques`, {
        method: post,
        headers: {
            "Content-type": "application/jason"
        },
        body: JSON.stringify({
            ataques: ataqueJugador
        })
    })

    intervalo = setInterval(obtenerAtaques, 50)
}

function obtenerAtaques() {
    fetch(`http://localhost:8080/mokepon/${enemigoId}/ataques`)
        .then(function(res) {
            if (res.ok) {
                res.json()
                    .then(function({ataques}) {
                        if (ataques.length === 5 ) {
                            ataqueEnemigo = ataques
                            combateMokepon()
                        }
                    })
            }
        })
}


    //logica de seleccion de los mokepones del enemigo
function seleccionarMokeponEnemigo(enemigo) {
    spanMokeponEnemigo.innerHTML = enemigo.nombre;
    ataquesMokeponEnemigo = enemigo.ataques;
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
    clearInterval(intervalo)

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

function pintarCanvas() {
    
    mascotaJugadorObjecto.x = mascotaJugadorObjecto.x + mascotaJugadorObjecto.velocidadX
    mascotaJugadorObjecto.y = mascotaJugadorObjecto.y + mascotaJugadorObjecto.velocidadY
    lienzo.clearRect(0, 0, mapa.width, mapa.height);
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )
    mascotaJugadorObjecto.pintarMokepon()

    enviarPosicion(mascotaJugadorObjecto.x, mascotaJugadorObjecto.y)

    mokeponesEnemigos.forEach(function (mokepon){
        mokepon.pintarMokepon()
        reviscarColision(mokepon)
    })
    
}

function enviarPosicion(x, y) {
    fetch(`http://localhost:8080/mokepon/${jugadorId}/posicion`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            x,
            y
        })
    })
        .then(function (res) {
            if (res.ok) {
                res.json()
                    .then(function({ enemigos }){
                        mokeponesEnemigos.map(function (enemigo){
                            let mokeponEnemigo = null
                            const mokeponNombre= enemigo.mokepon.nombre || ""
                            if (mokeponNombre=== "Hipodoge") {
                                mokeponEnemigo = new Mokepon("Hipodoge", "./assets/mokepons_mokepon_hipodoge_attack.png", 5, "AGUA", "./assets/hipodoge.png", enemigo.id);
                            } else if (mokeponNombre === "Capipeo") {
                                mokeponEnemigo = new Mokepon("Capipepo", "./assets/mokepons_mokepon_capipepo_attack.png", 5, "TIERRA", "./assets/capipepo.png", enemigo.id);
                            } else if (mokeponNombre === "Ratigueya") {
                                mokeponEnemigo = new Mokepon("Ratigueya", "./assets/mokepons_mokepon_ratigueya_attack.png", 5, "FUEGO", "./assets/ratigueya.png", enemigo.id);
                            } else if (mokeponNombre === "Langotelvis") {
                                mokeponEnemigo = new Mokepon("Langotelvis", "./assets/mokepons_mokepon_langostelvis_attack.png", 5, "FUEGO", "./assets/langotelvis.png", enemigo.id);
                            } else if (mokeponNombre === "Pydos") {
                                mokeponEnemigo = new Mokepon("Pydos", "./assets/mokepons_mokepon_pydos_attack.png", 5, "Trueno", "./assets/pydos.png", enemigo.id);
                            } else if(mokeponNombre === "Tucapalma") {
                                mokeponEnemigo = new Mokepon("Tucapalma", "./assets/mokepons_mokepon_tucapalma_attack.png", 5, "Aire", "./assets/tucapalma.png", enemigo.id);
                            }
                            
                            mokeponEnemigo.x = enemigo.x
                            mokeponEnemigo.y = enemigo.y
                            
                           return mokeponEnemigo;
                        })
                    })    
            }
        })
}

function moverDerecha() {
    mascotaJugadorObjecto.velocidadX = 5
}
function moverIzquierda() {
    mascotaJugadorObjecto.velocidadX = -5
}
function moverArriba() {
    mascotaJugadorObjecto.velocidadY =  -5
}
function moverAbajo() {
    mascotaJugadorObjecto.velocidadY = 5
}
function detenerMovimiento() {
    mascotaJugadorObjecto.velocidadX = 0;
    mascotaJugadorObjecto.velocidadY = 0;
}

function sePresionoUnaTecla(event) {
    switch (event.key) {
        case "ArrowUp":
            moverArriba()
            break;
        case "ArrowDown":
            moverAbajo()
            break;
        case "ArrowRight":
            moverDerecha()
            break
        case "ArrowLeft":
            moverIzquierda()
            break;
        default:
            break;
    }
}

function inicarMapa(){
   
    mascotaJugadorObjecto = obtenerObjectoMascota()
    intervalo = setInterval(pintarCanvas, 50)
    window.addEventListener('keydown', sePresionoUnaTecla)
    window.addEventListener('keyup', detenerMovimiento)
}
function obtenerObjectoMascota() {
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            return mokepones[i];
        }
    }
}

function reviscarColision(enemigo) {
    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquierdaEnemigo = enemigo.x

    const arribaMacota = mascotaJugadorObjecto.y
    const abajoMacota = mascotaJugadorObjecto.y + mascotaJugadorObjecto.alto
    const derechaMacota = mascotaJugadorObjecto.x + mascotaJugadorObjecto.ancho
    const izquierdaMacota = mascotaJugadorObjecto.x

    if (
        abajoMacota < arribaEnemigo ||
        arribaMacota > abajoEnemigo ||
        derechaMacota < izquierdaEnemigo ||
        izquierdaMacota > derechaEnemigo
        ) {
        return
    }
    
    detenerMovimiento()
    clearInterval(intervalo)
    enemigoId = enemigo.id
    sectionSeleccionarAtaque.style.display = "flex";
    sectionVerMapa.style.display = "none";
    seleccionarMokeponEnemigo(enemigo)
}

window.addEventListener("load", iniciarJuego)