//Escriba un programa JavaScript para crear una nueva cadena a partir de una cadena dada cambiando 
//la posición del primer y último carácter. La longitud de la cadena debe ser mayor o igual a 1. 
//Ej ----> firstLast("Hola") resultado ---> "aolH"

class Palabra{
    constructor(){
        this.palabraAlReves = []
    }

    firstLast(palabra){
        var word = palabra.split("")

        while(word.length !==0){
        var letra= word.pop()
        this.palabraAlReves.push(letra)
        }
        console.log(this.palabraAlReves.join(""))
    }

}

var miPalabra = new Palabra ()

miPalabra.firstLast("Hola")