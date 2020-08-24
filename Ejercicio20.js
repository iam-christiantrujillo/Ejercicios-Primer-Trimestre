//Escriba una función de JavaScript para generar una matriz entre dos enteros de 1 paso de longitud. 
//Ej. rangeBetwee(4, 7) resultado --> [4, 5, 6, 7] 
//rangeBetwee(-4, 7) resultado --> [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]

function rangeBetween(numero1, numero2){
    var resultado = []
    for(var i = numero1; i<= numero2; i++){
        resultado.push(i)
    }
    return resultado

}

console.log(rangeBetween(-4, 7))