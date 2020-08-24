//Hay dos matrices con valores individuales, escriba un programa JavaScript para calcular la 
//suma de cada valor de índice individual de las matrices dadas 
//Ej. sumIndex([1,0,2,3,4],[3,5,6,7,8,13]) salida --> [4, 5, 8, 10, 12, 13]

function sumIndex(matriz1, matriz2){

    var Matriznueva = []
    for(var i=0; i< Math.max(matriz1.length, matriz2.length); i++){
        Matriznueva.push((matriz1[i] || 0 ) + (matriz2[i] || 0))
    }
    return Matriznueva




}

console.log(sumIndex([1,0,2,3,4],[3,5,6,7,8,13]))