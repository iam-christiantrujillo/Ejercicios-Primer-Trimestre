//Escriba una función de JavaScript para encontrar la diferencia de dos matrices. 
//Ej difference([1, 2, 3], [100, 2, 1, 10]) Resultado --> ["3", "10", "100"]

function difference(matriz1, matriz2){

    var nuevaMatriz = []

    for( var i=0; i < matriz1.length; i++){
        
        for(var i2=0; i2 < matriz2.length; i2++){
            
            if(matriz1[i] === matriz2[i2]){
                delete matriz1[i]
                delete matriz2[i2]
            }
        }

    }


    nuevaMatriz = matriz1.concat(matriz2)
    var filtered = nuevaMatriz.filter(function (el) {
        return el != null;
      });

    return(filtered)
    
    


}

console.log(difference([1, 2, 3], [100, 2, 1, 10]))


