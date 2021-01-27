const times = [60, 75, 79, 80, 55, 59];
var elem=times.length;
console.log(elem);
const sumaTimes = times.reduce((acumulador, currentValue) => acumulador + currentValue, 0);
console.log(sumaTimes);
var media = sumaTimes / elem;
console.log(media);