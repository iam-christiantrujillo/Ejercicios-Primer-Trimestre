//Escriba una función de JavaScript para contar el número de vocales en una cadena dada.

function contadorVocales(cadena){
    var word = cadena.split("")
    var contador = 0
    word.forEach(function(element){
        if(element.toLowerCase() === 'a' || element.toLowerCase() === 'e' || 
        element.toLowerCase() === 'i' || element.toLowerCase() === 'o' || element.toLowerCase() === 'u'){
            contador++
        } 
    })
    return(contador)
    
}

console.log(contadorVocales("BuenasTardes"))