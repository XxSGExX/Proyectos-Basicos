function iniciarJuego() {
    let botonMascotaJugador = document.getElementById('boton-mokepon')
    botonMascotaJugador.addEventListener('click', seleccionarMokeponJugador)
}

function seleccionarMokeponJugador() {
    let mokeponhipodoge = document.getElementById('Hipodoge')
    let mokeponcapipepo = document.getElementById('Capipepo')
    let mokeponratigueya = document.getElementById('Ratigueya')

    if(mokeponhipodoge.checked == true)
    {
        alert('seleccionaste a Hipodoge')

    } else if(mokeponcapipepo.checked == true)
    {
        alert('seleccionaste a Capipepo')

    } else if(mokeponratigueya.checked == true)
    {
        alert('seleccionaste a Ratigueya')
    } else {
        alert('Por favor selecciona un mokepon')
    }
}
 
window.addEventListener('load', iniciarJuego)
