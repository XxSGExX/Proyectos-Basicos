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

let mokepones = [];
let ataqueJugador = [];
let ataqueEnemigo = [];
let opcionDeMokepones;
let mokeponhipodoge;
let mokeponcapipepo; 
let mokeponratigueya;
let mascotaJugador;
let ataquesMokepon;
let ataquesMokeponEnemigo;
let botonFuego;
let botonAgua;
let botonTierra;
let botones = [];
let indexAtaqueJugador;
let indexAtaqueEnemigo;
let victoriasJugador = 0;
let victoriasEnemigo = 0;


class Mokepon {
    constructor(nombre, foto, vida,) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        }
}

let Hipodoge = new Mokepon("Hipodoge", "./assets/mokepons_mokepon_hipodoge_attack.png", 5);
let Capipepo = new Mokepon("Capipepo", "./assets/mokepons_mokepon_capipepo_attack.png", 5);
let Ratigueya = new Mokepon("Ratigueya", "./assets/mokepons_mokepon_ratigueya_attack.png", 5);

Hipodoge.ataques.push(
    {nombre: '💧', id: 'boton-agua' },
    {nombre: '💧', id: 'boton-agua' },
    {nombre: '💧', id: 'boton-agua' },
    {nombre: '🔥', id: 'boton-fuego' },
    {nombre: '🌱', id: 'boton-tierra'},
)
Capipepo.ataques.push(
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '💧', id: 'boton-agua' },
    {nombre: '🔥', id: 'boton-fuego'},
)
Ratigueya.ataques.push(
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '💧', id: 'boton-agua' },
    {nombre: '🌱', id: 'boton-tierra'},
)

mokepones.push(Hipodoge,Capipepo,Ratigueya)


function iniciarJuego() {
    sectionSeleccionarAtaque.style.display = "none";
    sectionReiniciar.style.display = "none";

    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
            <input type="radio"  name="mokepon" id=${mokepon.nombre} />
            <label class="tarjeta-de-mokepon" for=${mokepon.nombre} >
            <p>${mokepon.nombre} </p>
            <img src=${mokepon.foto} alt="${mokepon.nombre} ">
            </label>
            `
            contenedorTarjetas.innerHTML += opcionDeMokepones;
            mokeponhipodoge = document.getElementById("Hipodoge");
            mokeponcapipepo = document.getElementById("Capipepo");
            mokeponratigueya = document.getElementById("Ratigueya");
    }) 
    
    botonMascotaJugador.addEventListener("click", seleccionarMokeponJugador);
    botonReinicar.addEventListener("click", reinicarJuego);
    
}
    //Logica de seleccion de los mokepones del jugador
function seleccionarMokeponJugador() {
    sectionSeleccionarmokepon.style.display = "none";
    sectionSeleccionarAtaque.style.display = "flex";
    
    if (mokeponhipodoge.checked == true)
    {
        spanMokeponJugador.innerHTML = mokeponhipodoge.id;
        mascotaJugador = mokeponhipodoge.id;

    } else if (mokeponcapipepo.checked == true)
    {
        spanMokeponJugador.innerHTML = mokeponcapipepo.id;
        mascotaJugador = mokeponcapipepo.id;

    } else if (mokeponratigueya.checked == true)
    {
        spanMokeponJugador.innerHTML = mokeponratigueya.id;
        mascotaJugador = mokeponratigueya.id;
    } else {
        alert("Por favor selecciona un mokepon")
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
     botones = document.querySelectorAll('.BAtaque')
}
    //fuciones para los ataques de los mokepones
function secuenciaAtaques() {
    botones.forEach((boton) =>{
        boton.addEventListener("click", (e) => {
            if (e.target.textContent === "🔥") {
                ataqueJugador.push("FUEGO");
                console.log(ataqueJugador);
                boton.style.background = '#112f58';
            } else if(e.target.textContent === "💧") {
                ataqueJugador.push("Agua");
                console.log(ataqueJugador);
                boton.style.background = '#112f58';
            } else {
                ataqueJugador.push("TIERRA");
                console.log(ataqueJugador);
                boton.style.background = '#112f58';
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
    if(ataqueAleatorio == 0 || ataqueAleatorio == 1) {
        ataqueEnemigo.push("FUEGO");
    } else if (ataqueAleatorio == 3 || ataqueAleatorio == 4) {
        ataqueEnemigo.push("AGUA");
    } else {
        ataqueEnemigo.push("TIERRA");
    }

    console.log(ataqueEnemigo);
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
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador;
        } else if((ataqueJugador[index] == "FUEGO" && ataqueEnemigo[index] == "TIERRA") || (ataqueJugador[index] == "AGUA" && ataqueEnemigo[index]  == "FUEGO") || (ataqueJugador[index] == "TIERRA" && ataqueEnemigo[index]  == "AGUA")) {
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

    botonFuego.disabled = true;
    botonAgua.disabled = true;
    botonTierra.disabled = true;

}

function reinicarJuego() {
    location.reload();
}

function Randomnumbers(min, max) {
    return Math.floor( Math.random()* (max - min + 1) + min);
}
 
window.addEventListener("load", iniciarJuego)
