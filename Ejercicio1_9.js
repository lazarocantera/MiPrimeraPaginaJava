var frase = prompt("Introduce una frase");
var arrayFrase = frase.split(" ");
console.log(arrayFrase);
var fraseMay = arrayFrase.map(cadena => cadena.toUpperCase());
console.log(fraseMay);
var inverso = fraseMay.reverse();
console.log(inverso);