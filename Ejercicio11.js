//Escriba una función de Javascript que convierta un numero a formato moneda 
//Ej ---> convertExchange(2000) resultado --> "$2,000.00"

function convertExchange(numero){

    const formato = new Intl.NumberFormat('en-US',{
        style: 'currency',
        currency: 'USD'
    })
    return(formato.format(numero))

}

console.log(convertExchange(2000))