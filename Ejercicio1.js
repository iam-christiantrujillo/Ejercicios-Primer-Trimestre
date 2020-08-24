//Crear una función que dado un año determine si es un año bisiesto o no.
// Ej---> isLeap(2016) Resultado ----> true

class Año{
    constructor(año){
        this.año= año
    }

    revisarSiEsBisiesto(){
        var año = this.año
        if(año % 4 === 0 && año % 100 !== 0 || año % 400 === 0){
            console.log(true)
        } else {
            console.log(false) 
        }

    }
}

var año = new Año(2008)

año.revisarSiEsBisiesto()

console.log(año)