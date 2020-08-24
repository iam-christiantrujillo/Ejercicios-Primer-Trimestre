//Escriba una función de JavaScript que acepte una cadena como parámetro y busque 
//la palabra más larga dentro de la cadena. 
//Ej. largeWord("Web Development Tutorial") resultado ---> 'Development'

function largeWord(string) {
    var words = string.split(" ");
    console.log(words)
    var large = 0;
    var word = null;
    for (var i = 0; i < words.length; i++) {
        if (large < words[i].length) {
            large = words[i].length;
            word = words[i];
        }
    }
    return word;
}

console.log(largeWord("Web Development Tutorial"))