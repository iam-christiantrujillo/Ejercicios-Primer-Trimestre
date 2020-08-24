//Escribe una función de JavaScript para convertir una cantidad en monedas. 
//Ej amountTocoins(46, [10, 5, 2, 1]) Resultado --> 10,10,10,10,5,1

var sumCoins = (coins) => { //lo mismo que function(coins)
    var sum = 0 
    for (var coin of coins){
        sum+=coin
    }
    return sum
}

var amountTocoins = (cantidad, coinTypes) => {
    var coins = []
    for(var coin of coinTypes){
        console.log("este es el coin: ",coin)
        while((sumCoins(coins) + coin) <= cantidad){
            console.log(sumCoins(coins) ,"+", coin ,"<=", cantidad)
            coins.push(coin)
        }
    }
    return coins
}

console.log(amountTocoins(46,[10,5,2,1]))