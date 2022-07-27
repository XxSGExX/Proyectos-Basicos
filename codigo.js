        function Randomnumbers(min, max)
        {
           return Math.floor( Math.random()* (max - min + 1) + min)
        }
        function eleccion(jugada)
        {
            let resultado; 
            if(jugada == 1)
        {
            resultado = "Piedra 🥌"
        } else if(jugada == 2)
        {
            resultado= "Papel 📃"
        }else if(jugada == 3)
        {
            resultado = "tijera ✂"
        } else
        {
            resultado= "Mala eleccion"
        }
        return resultado
        }
        function combate(a, b)
        {
        let result = ""
            if(a == b)
        {
            result = "empate"
        } else if((a == 1 && b == 3) || (a == 2 && b == 1) || (a == 3 && b == 2))
        {
            result = "Ganaste"
            triunfos++
        } else 
        {
            result = "Perdiste"
            perdidas++
        }
            return result
        }

        let player = 0
        let pc = Randomnumbers(1,3)
        let triunfos = 0
        let perdidas = 0
        let empate = 0

        while(triunfos < 3 && perdidas <3)
        {
        
            let player = prompt("Eliege: 1 para piedra, Elige:2 para papel, y Eliege:3 para tijera")
            let pc = Randomnumbers(1,3)
        
            alert("jugador elegio:" + eleccion(player))
            alert("pc eligio:" + eleccion(pc))
        
        //Combate
        alert("tu " + combate(player,pc))
        }
        alert("Ganaste " + triunfos + " veces . perdiste " + perdidas + " veces.")