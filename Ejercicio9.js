//Escriba una función deJavaScript para verificar si dos valores enteros dados están en el 
//rango 50..99 (inclusive). Devuelve verdadero si alguno de ellos está en dicho rango. 
//Ej --> inRange(55,47) resultado ---> true

function inRange(numero1,numero2){

    if(numero1 > 50 && numero1 < 99 || numero2 > 50 && numero2 < 99){
        return true        
    } else {
        return false
    }

}

console.log(inRange(55,47))