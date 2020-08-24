//Escriba una función de JavaScript que devuelva una cadena pasada con letras en orden alfabético. 
//Ej orderWord("webmaster") resultado ---> "abeemrstw"

function sortAlphabets(palabra){
    var ordenado = palabra.split('')
    ordenado.sort()
    return ordenado.join('')

}

console.log(sortAlphabets("webmaster"))