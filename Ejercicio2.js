//Crear una función que genere un numero aleatorio entre 1 y 10, esta función recibe un 
//numero como parametro si el numero es igual al numero generado aleatoriamente regresara 
//"Buen Trabajo" de lo contrario regresara "Intenta de nuevo". 
//Ej ---> randomGuess(7) resultado ---> "Buen trabajo" o "Intenta de Nuevo"

class Numero{
    constructor(numero){
        this.numero = numero
    }

    compararConNumRandom(){

        var numRandom = Math.floor(Math.random() * (10-2) + 2)
        console.log("Numero random: ", numRandom)
        if(numRandom === this.numero){
            console.log("Buen trabajo")
        } else{
            console.log("Intenta de nuevo")
        }


    }
}

var num = new Numero(3)

num.compararConNumRandom()

console.log(num)