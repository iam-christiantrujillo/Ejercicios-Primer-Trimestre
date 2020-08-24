//Escriba una función de JavaScript para ordenar la siguiente matriz de objetos por valor de título. 

var ibrary = [ { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254}, 
{ author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264}, 
{ author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', 
libraryID: 3245} ];



    ibrary.sort(function (a, b) {
        if (a.title > b.title) {
            console.log("esto es 1")
          return 1;
          
        }
        if (a.title < b.title) {
            console.log("esto es -1")
          return -1;
        }
        console.log("esto es 0")
        return 0;
      });

    

console.log(ibrary) //Se ordena alfabeticamente



// console.log(ibrary[0].libraryID)