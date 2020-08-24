//Escriba una funcion JavaScript para eliminar un carácter en la posición especificada de 
//una cadena dada y devolver la nueva cadena 
//Ej ---> removeChar("Hola",2) resultado --> "Hoa"

function remove(cadena, posicion){
        var caracter = (cadena.substr(posicion, 1))
        return cadena.replace(caracter,"")
        
}

console.log(remove("Hola", 2))

