//Escriba una función de JavaScript para redondear un número a una cantidad específica de dígitos. 
//Ej ---> roundNumber(2.3453467335,2) resultado -> 2.34

function redondear(numero, digitos){
    // numero = numero.toFixed(2)
    // return numero 

    var string = numero.toString()
    var numFinal = ''
    for(var i =0; i< string.length; i++){
        numFinal += string[i] // numFinal = numFinal + string[i]
        if(string[i] === '.'){
            i++
            for(var j = 0; j < digitos; j++){
                numFinal += string[i]
                i++
            }
            return parseFloat(numFinal)
        }
    }
    return numFinal
}

console.log(redondear(2.3453467335,2))

