class Food{
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