//Escriba un programa JavaScript para encontrar un par de elementos 
//(índices de los dos números) de una matriz dada cuya suma sea igual a un número objetivo específico.
// Ej findPairs([10,20,10,40,50,60,70],50) resultado --> 2,3

function findPairs(array, number){

    for(var i=0; i< array.length; i++){
        var number1= array[i]

        for(var i2=1; i2 < array.length; i2++){
        
            var number2 = array[i2]
        
            if(number1 + number2 === number){
            
                var resultado= []
                resultado.push(i)
                resultado.push(i2)
                return resultado
            }
        }
    }

}

console.log(findPairs([10,20,10,40,50,60,70],80))