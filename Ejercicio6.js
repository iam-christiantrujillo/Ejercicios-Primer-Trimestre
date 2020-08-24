//Escriba un programa JavaScript para cambiar el uso de mayúsculas en todas las letras de una 
//cadena determinada. Ej ---> changeMayus("ComoEstas") resultado ---> "cOMOeSTAS"

class Palabra{
    constructor(){
        this.palabraNueva = []
    }

    firstLast(palabra){

        var word = palabra.split("")
        var nuevo = this.palabraNueva 
        word.forEach(function(element){
            
            if(element === element.toUpperCase()){
                element = element.toLowerCase()
            }else{
                element = element.toUpperCase()
            }
            nuevo.push(element)
        })
        console.log(nuevo.join(""))
    }
}

var miPalabra = new Palabra ()

miPalabra.firstLast("ComoEstas")