//Escribe una función que reciba un string como parametro y regrese el string con "Py" al principio, 
//si el string ya tiene "Py" regresar el string original 
//Ej ---> addPy("hola") resultado ---> "Pyhola"

function addPy(cadena){
    if(cadena.charAt(0) !== "P" && cadena.charAt(1) !== "y"){
        return cadena.substr( 0, 0) + "Py" + cadena;
    } else {
        return cadena
    }
    
}

console.log(addPy("hola"))
console.log(addPy("Pyla"))
