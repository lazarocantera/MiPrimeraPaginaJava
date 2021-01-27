const words = ['Environmental', 'Systems', 'Research', 'Institute'];
var elem = words.length;
console.log(elem);
/*var contador1 = 0;
var nombre1 = words[contador1].length;
console.log(words[contador1] + nombre1);
var contador2 = ++contador1;
var nombre2 = words[contador2].length;
console.log(words[contador2] + nombre2);
var contador3 = ++contador2;
var nombre3 = words[contador3].length;
console.log(words[contador3] + nombre3);
var contador4 = ++contador3;
var nombre4 = words[contador3].length;
console.log(words[contador3] + nombre4);
*/


var palabra = words.reduce((acumulador, valor) => acumulador.length > valor.length ? acumulador : valor, '');
console.log(" esta es la palabra mas larga " + palabra);

var masLarga = words.reduce((acumulador1, actual) => {
    if (acumulador1.length > actual.length) {
    //console.log(acumulador1);
    //alert("la palabra mas larga es "+ acumulador1);
    return acumulador1;
    
    } else {
        //console.log(actual);
        return actual
        

    };
});
console.log("la palabra mas larga es " + masLarga);
