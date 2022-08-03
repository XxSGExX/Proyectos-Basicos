function iniciarJuego() {
    let botonMascotaJugador = document.getElementById('boton-mokepon')
    botonMascotaJugador.addEventListener('click', seleccionarMokeponJugador)
}

function seleccionarMokeponJugador() {
    let mokeponhipodoge = document.getElementById('Hipodoge')
    let mokeponcapipepo = document.getElementById('Capipepo')
    let mokeponratigueya = document.getElementById('Ratigueya')
    let spanMokeponJugador = document.getElementById('mokepon-jugador')
    //Logica de seleccion de los mokepones del jugador
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
    let ataqueAleatorio = Randomnumbers(1,3)
    let spanMokeponEnemigo = document.getElementById('mokepon-enemigo')

    if  (ataqueAleatorio == 1) {
        spanMokeponEnemigo.innerHTML = 'Hipodoge'
    } else if (ataqueAleatorio == 2) {
        spanMokeponEnemigo.innerHTML = 'Capipepo'
    } else {
        spanMokeponEnemigo.innerHTML = 'Ratigueya'
    }
        
}  

function Randomnumbers(min, max)
        {
           return Math.floor( Math.random()* (max - min + 1) + min)
        }
 
window.addEventListener('load', iniciarJuego)
