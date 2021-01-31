//calculoamos el número de enlaces de la página
const enlaces = document.getElementsByTagName('a');
console.log(enlaces);
//dirección a la que lleva el penúltimo enlace
const penultimo = enlaces[enlaces.length -1].href;
console.log(penultimo);
//número de enlaces del 3er parrafo
const tercerParrafo = document.getElementById("third-paragraph");
const numeroEnlaces = tercerParrafo.getElementsByTagName('a');
console.log(numeroEnlaces);


// Mostramos el primer resultado 
const primerResult = document.querySelector('#numeroEnlaces');
primerResult.innerHTML = `En esta página tenemos ${numeroEnlaces.length} enlaces`;
console.log(numeroEnlaces.length)

// Creamos un nodo para el segundo enlace
const SegundoEnlace = document.createElement('p');
const nodoSegundoEnlace = document.createTextNode(penultimate);
SegundoEnlace.appendChild(nodoSegundoEnlace);


const segParrrafo = document.querySelector('.results');
segParrrafo.appendChild(SegundoEnlace);

// Mostramos el tercer resultado
const tercerResul = document.querySelector('#third-result');
tercerResul.innerHTML = `En el tercer párrafo tenemos ${numeroEnlaces} enlaces.`;
console.log(numeroEnlaces)
