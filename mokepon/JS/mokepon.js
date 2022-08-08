let ataqueJugador;
let ataqueEnemigo;
let vidasEnemigo = 3;
let vidasJugador = 3;

function iniciarJuego() {
    let sectionSeleccionarAtaque = document.getElementById("select-attack");
    sectionSeleccionarAtaque.style.display = 'none';

    let sectionReiniciar = document.getElementById("reiniciar");
    sectionReiniciar.style.display = 'none';

    let botonMascotaJugador = document.getElementById('boton-mokepon');
    botonMascotaJugador.addEventListener('click', seleccionarMokeponJugador);
    
    let botonFuego = document.getElementById('boton-fuego');
    botonFuego.addEventListener('click', ataqueFuego);
    let botonAgua = document.getElementById('boton-agua');
    botonAgua.addEventListener('click', ataqueAgua);
    let botonTierra = document.getElementById('boton-tierra');
    botonTierra.addEventListener('click', ataqueTierra);

    let botonReinicar = document.getElementById('boton-reinicar');
    botonReinicar.addEventListener("click", reinicarJuego);
}
    //Logica de seleccion de los mokepones del jugador
function seleccionarMokeponJugador() {
    let sectionSeleccionarmokepon = document.getElementById("select-mokepon");
    sectionSeleccionarmokepon.style.display = 'none';
    
    let sectionSeleccionarAtaque = document.getElementById("select-attack");
    sectionSeleccionarAtaque.style.display = 'block';
    
    let mokeponhipodoge = document.getElementById('Hipodoge');
    let mokeponcapipepo = document.getElementById('Capipepo');
    let mokeponratigueya = document.getElementById('Ratigueya');
    let spanMokeponJugador = document.getElementById('mokepon-jugador');
    
    if (mokeponhipodoge.checked == true)
    {
        spanMokeponJugador.innerHTML = 'Hipodoge'

    } else if (mokeponcapipepo.checked == true)
    {
        spanMokeponJugador.innerHTML = 'Capipepo'

    } else if (mokeponratigueya.checked == true)
    {
        spanMokeponJugador.innerHTML = 'Ratigueya'
    } else {
        alert('Por favor selecciona un mokepon')
    }

    seleccionarMokeponEnemigo()
}
    //logica de seleccion de los mokepones del enemigo
function seleccionarMokeponEnemigo() {
    let seleccionAleatorio = Randomnumbers(1,3);
    let spanMokeponEnemigo = document.getElementById('mokepon-enemigo');

    if (seleccionAleatorio == 1) {
        spanMokeponEnemigo.innerHTML = 'Hipodoge'
    } else if (seleccionAleatorio == 2) {
        spanMokeponEnemigo.innerHTML = 'Capipepo'
    } else {
        spanMokeponEnemigo.innerHTML = 'Ratigueya'
    }
        
}  
    //fuciones para los ataques de los mokepones
function ataqueFuego() {
    ataqueJugador = 'FUEGO🔥'
    ataqueEnemigoAleatorio();
}

function ataqueAgua() {
    ataqueJugador = 'AGUA💧'
    ataqueEnemigoAleatorio();
}

function ataqueTierra() {
    ataqueJugador = 'TIERRA🌱'
    ataqueEnemigoAleatorio();
}

function ataqueEnemigoAleatorio() {
    let ataqueAleatorio = Randomnumbers(1,3);
    switch(ataqueAleatorio) {
        case 1:
            ataqueEnemigo = 'FUEGO🔥'
            break;
        case 2:
            ataqueEnemigo = 'AGUA💧'
            break;
        case 3:
            ataqueEnemigo = 'TIERRA🌱'
            break;
    }
    combateMokepon()
}
    //Funcion del combate
function combateMokepon() { 
    let spanVidasJugador = document.getElementById('vidas-jugador');
    let spanVidasEnemigo = document.getElementById('vidas-enemigo');

    if (ataqueEnemigo == ataqueJugador) {
        crearMensajes('EMPATE');
    } else if((ataqueJugador == 'FUEGO🔥' && ataqueEnemigo == 'TIERRA🌱') || (ataqueJugador == 'AGUA💧' && ataqueEnemigo  == 'FUEGO🔥') || (ataqueJugador == 'TIERRA🌱' && ataqueEnemigo  == 'AGUA💧')) {
        crearMensajes('GANASTE');
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensajes('PERDISTE');
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador;
    }

     revisarVidas()
}

function revisarVidas() {
    if(vidasJugador == 0) {
        crearMensajesFinal("Lo siento Perdiste, PERDISTE😔");
    } else if (vidasEnemigo == 0) {
        crearMensajesFinal("Felicitaciones! GANASTE!🎉");
    }

}

function crearMensajes(result) {
    let sectionMensajes = document.getElementById('mensajes');
    let parrafo = document.createElement('p');
    parrafo.innerHTML = 'Tu mokepon ataco con '   + ataqueJugador + ', el mokepon enemgio ataco con  ' + ataqueEnemigo + "- " + result

    sectionMensajes.appendChild(parrafo);
}
function crearMensajesFinal(resultFinal) {
    let sectionReiniciar = document.getElementById("reiniciar");
    sectionReiniciar.style.display = 'block';
    let sectionMensajes = document.getElementById('mensajes');
    let parrafo = document.createElement('p');
    parrafo.innerHTML = resultFinal;

    sectionMensajes.appendChild(parrafo);

    let botonFuego = document.getElementById('boton-fuego');
    botonFuego.disabled = true;
    let botonAgua = document.getElementById('boton-agua');
    botonAgua.disabled = true;
    let botonTierra = document.getElementById('boton-tierra');
    botonTierra.disabled = true;

}

function reinicarJuego() {
    location.reload();
}

function Randomnumbers(min, max) {
    return Math.floor( Math.random()* (max - min + 1) + min);
}
 
window.addEventListener('load', iniciarJuego)
