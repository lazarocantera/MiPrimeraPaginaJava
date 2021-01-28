//creamos la clase cliente
class Cliente {
    //definimos las instancias nombre, direccion, telefono y nif
    constructor (nombre, direccion, telefono, nif) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
    this.nif = nif;
    };
};
//Creamos la clase elemento
class Elemento  {
    //definimos las instancias descripcion, cantidad y precio
    constructor (descripcion, cantidad, precio){
        this.descripcion = descripcion;
        this.cantidad = cantidad;
        this.precio = precio;

    };
};
//creamos la clase factura
class Factura {
    constructor(cliente, elementos) {
        //definimos las instancias cliente, elementos e informacion
        this.cliente = cliente;
        this.elementos = elementos;
        this.informacion = {
            baseImponible: 0,
            iva: 21,
            total: 0,
            formaPago: "domicialiación",
            };

        this.creaFactura = () => {
            for (var i = 0; i< this.elementos.length; i++) {
                this.informacion.baseImponible += this.elementos[i].cantidad * this.elementos[i].precio;
            };
        this.informacion.total = this.informacion.baseImponible * (1+(this.informacion.iva/100));
        console.log(informacion.total);
        };
        this.FacturaTotal = function () {
            this.creaFactura();
            alert("total: " + this.informacion.total);
            console.log("total: " + this.informacion.total);
        };
            
        };
       
    };
//creamos array con dos elementos
var cliente1 = new Cliente("Jacinto", "calle ferrocarriles", "666666", "111A");
var elementos = [new Elemento("tfno fijo", "1", "10"), new Elemento("tfno móvil", "2", "18")];
var facturaPersona = new Factura(cliente1, elementos);
facturaPersona.FacturaTotal;
//console.log("total: " + this.informacion.total);

