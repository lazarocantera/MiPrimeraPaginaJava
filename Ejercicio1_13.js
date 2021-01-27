const mesesMin = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
console.log(mesesMin.length);
var meses7 = mesesMin.filter(mes => mes.length>7);
console.log(meses7);
//var meses7array = [meses7];
//console.log(meses7array);
var meses7Mayu = meses7.map(cadena => cadena.toUpperCase());
console.log(meses7Mayu);
