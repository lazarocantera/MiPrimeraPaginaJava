compDni = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z','S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
var numDni = prompt("introduce tu número de DNI: ");
/*var letraDNI = prompt( "Introduce la letra de tu DNI en mayúscula");*/
console.log(numDni)
if (numDni >= 99999999 || numDni <=0 ){
    alert("El número introducido no es válido");
    
} else {
    console.log("Vamos bien");
    var letraSel = compDni[numDni%23];
        /*console.log(letraSel===letraDNI);*/
        console.log(letraSel);   
        alert("la letra que te corresponde es '" + letraSel + "'");
    };

