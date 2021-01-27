//creamos la clase calculo
class Calculo {
    constructor(lado) {
        this.perimetro = lado * 4;
        this.area = lado * lado;
        console.log(`El cuadrado con ${lado} cm de lado tiene ${this.perimetro} de perímetro, y un área de ${this.area} cm2`)
    }
};
var cuadradoPeq = new Calculo(2);
var cuadaradoMed = new Calculo(5);
var cuadradoGran =new Calculo(10);

/*
class Square {
    constructor(side) {
      this.perimeter = side * 4;
      this.area = side * side;
  
      console.log(`Este cuadrado tiene ${side} cm de lado, su perímetro es ${this.perimeter} cm y su área ${this.area} cm3`);
    }
  };
  
  const small = new Square(2);
  const medium = new Square(5);
  const big = new Square(10);
  */