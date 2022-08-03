function iniciarJuego() {
    let botonMascotaJugador = document.getElementById('boton-mokepon')
    botonMascotaJugador.addEventListener('click', seleccionarMokeponJugador)
}

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
}
 
window.addEventListener('load', iniciarJuego)
