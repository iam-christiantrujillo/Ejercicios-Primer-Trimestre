//Escriba una función de JavaScript para eliminar. 
//Valores 'nulo', '0', '""', 'falso', 'indefinido' y 'NaN' de una matriz. 
//Ej removeFalsy([NaN, 0, 15, false, -22, '',undefined, 47, null]) resultado ----> [15, -22, 47]

function removeFalsy(matriz){

    // var filtered = matriz.filter(function(el) { 
    //     return el; });
    
    var filtered = matriz.filter(Boolean)
    
    return(filtered)


}

console.log(removeFalsy([NaN, 0, 15, false, -22, '',undefined, 47, null]))