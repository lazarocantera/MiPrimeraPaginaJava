var frase = prompt("introduce una frase");
console.log(frase);
//alert(frase);

function comparaLetras(fraseNueva) {
    console.log("Entro en la función")
    if (fraseNueva === frase.toUpperCase()) {
        console.log("la frase introducida solo tiene mayúsculas");
    }
    else if (fraseNueva === frase.toLowerCase()) {
        console.log("la frase solo tiene minúsculas");

    }
    else {
        console.log("la frase tiene mayúsculas y minúsculas");
    };
        
};

comparaLetras(frase);
console.log("Salgo de la función")
alert("fin");