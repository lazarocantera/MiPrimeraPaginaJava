const scores = [
    {name: 'Christania Williams', country: 'Jamaica', time: 11.80},
    {name: 'Elaine Thompson', country: 'Jamaica', time: 10.71},
    {name: 'Tori Bowie', country: 'EEUU', time: 10.83},
    {name: 'Marie Josée Ta Lou', country: 'Irlanda', time: 10.86},
    {name: 'Dafne Schippers', country: 'Holanda', time: 10.90},
    {name: 'English Gardner', country: 'EEUU', time: 10.94},
    {name: 'Michelle-Lee Ahye', country: 'Trinidad', time: 10.92},
    {name: 'Shelly-Ann Fraser-Pryce', country: 'Jamaica', time: 10.86}
    ];

//var menorTiempo = scores.reduce((acumulador, valor) => acumulador.time < valor.time ? acumulador : valor, '');
//console.log("el mejor tiempo es " + menorTiempo);

var mejorTiempo = scores.reduce((acumulador1, actual) => {
    if (acumulador1.time < actual.time) {
        //console.log(acumulador1);
        return acumulador1;
    } else {
        //console.log(actual);
        return actual;
    }
}, {});
console.log(mejorTiempo.name + "   " + mejorTiempo.time);

