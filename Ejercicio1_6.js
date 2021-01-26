const notas = [6, 7, 2, 9, 3, 4, 5, 8, 2]
var sumaNotas = 0;
for (let notasArray = 0; notasArray < 9; notasArray++)
{
    //console.log(sumaNotas);
    sumaNotas += notas[notasArray];
    console.log(sumaNotas);
};
alert(sumaNotas+ " es ek resultado de seguir el array");

var suma = 0;
for (let sumNota of notas){
    console.log(sumNota);
    suma += sumNota;
    console.log(suma)
};
alert(suma + " es el resultado del for of");