var ataqueJugador
var ataqueEnemigo

function iniciarJuego() {
    let botonMascotaJugador = document.getElementById('boton-mokepon')
    botonMascotaJugador.addEventListener('click', seleccionarMokeponJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)
}
    //Logica de seleccion de los mokepones del jugador
function seleccionarMokeponJugador() {
    let mokeponhipodoge = document.getElementById('Hipodoge')
    let mokeponcapipepo = document.getElementById('Capipepo')
    let mokeponratigueya = document.getElementById('Ratigueya')
    let spanMokeponJugador = document.getElementById('mokepon-jugador')
    
    if(mokeponhipodoge.checked == true)
    {
        spanMokeponJugador.innerHTML = 'Hipodoge'

    } else if(mokeponcapipepo.checked == true)
    {
        spanMokeponJugador.innerHTML = 'Capipepo'

    } else if(mokeponratigueya.checked == true)
    {
        spanMokeponJugador.innerHTML = 'Ratigueya'
    } else {
        alert('Por favor selecciona un mokepon')
    }

    seleccionarMokeponEnemigo()
}
    //logica de seleccion de los mokepones del enemigo
function seleccionarMokeponEnemigo() {
    let seleccionAleatorio = Randomnumbers(1,3)
    let spanMokeponEnemigo = document.getElementById('mokepon-enemigo')

    if  (seleccionAleatorio == 1) {
        spanMokeponEnemigo.innerHTML = 'Hipodoge'
    } else if (seleccionAleatorio == 2) {
        spanMokeponEnemigo.innerHTML = 'Capipepo'
    } else {
        spanMokeponEnemigo.innerHTML = 'Ratigueya'
    }
        
}  

function Randomnumbers(min, max) {
           return Math.floor( Math.random()* (max - min + 1) + min)
}
    //fuciones para los ataques de los mokepones
function ataqueFuego() {
    ataqueJugador = 'Fuego'
    ataqueEnemigoAleatorio()
}

function ataqueAgua() {
    ataqueJugador = 'Agua'
    ataqueEnemigoAleatorio()
}

function ataqueTierra() {
    ataqueJugador = 'Tierra'
    ataqueEnemigoAleatorio()
}

function ataqueEnemigoAleatorio() {
    let ataqueAleatorio = Randomnumbers(1,3)
    switch(ataqueAleatorio) {
        case 1:
            ataqueEnemigo = 'FUEGO'
            break;
        case 2:
            ataqueEnemigo = 'AGUA'
            break;
        case 3:
            ataqueEnemigo = 'TIERRA'
            break;
    }
}
 
window.addEventListener('load', iniciarJuego)
