var escribeNum = prompt("Escribe un número");
console.log(escribeNum);

function checkNumber(numero) {
    
    console.log("estoy dentro de la función");
    if (numero % 2 === 0){
        console.log(numero + " Es un número par");
        alert("Es par");
        return "Número par";
        
    }
        else {
            console.log(numero + " es un número impar");
            alert("Es impar");
            return "Número  impar";
        };
};
checkNumber(escribeNum);
console.log("He salido de la función");

    
    




