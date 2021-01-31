/*class Food{
    constructor(nombre, tipo, cal) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.cal = cal;
    }
};

const donut = new Food("donut", "dulce", 452);
const cerveza = new Food("cerveza", "bebida", 43);
const manzana = new Food("manzana", "fruta", 52);
console.log(Food);

const element = document.getElementById('huey');
const element1 = document.getElementsByName('drone');
const element2 = document.getElementsByTagName('input');
const element3 = document.getElementsByClassName('label-input');
const element4 = document.querySelectorAll('.label-input');
const element5 = document.querySelectorAll('#louie');
const element6 = document.querySelector('.label-input');
*/
document.getElementById("miBoton").addEventListener("click", displaydate);
function displayDate () {
    document.getElementById("demo").innerHTML = Date();
}
