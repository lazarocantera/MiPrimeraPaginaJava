//creamos la clase calculo
class Calculo {
    constructor(lado) {
        //definimos la instancia perimetro y area con el constructor lado
        this.perimetro = lado * 4;
        this.area = lado * lado;
        console.log(`El cuadrado con ${lado} cm de lado tiene ${this.perimetro} cm de perímetro, y un área de ${this.area} cm2`)
    }
};

//creamos las variables para los calculos.
var cuadradoPeq = new Calculo(2);
var cuadaradoMed = new Calculo(5);
var cuadradoGran =new Calculo(10);
