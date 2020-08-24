//Escriba una función de de JavaScript para crear una nueva cadena a partir de una cadena 
//dada con el primer carácter de la cadena dada agregado al principio y al final. 
//Ej --> addFisrt("Hola") resultado ---> "HHolaH"

class Palabra{
    constructor(){
        this.palabraNueva = []
    }

    firstLast(palabra){
        
        var word = palabra.split("")
        var letra= word.shift()
        var final = letra
        this.palabraNueva.push(letra,palabra,final)
        console.log(this.palabraNueva.join(""))
    }
}

var miPalabra = new Palabra ()

miPalabra.firstLast("Hola")