const dniDeudores = [];

class Prestamo {
    constructor( nombre, dni, monto, cuotas) {
        this.nombre  = nombre ;
        this.dni = dni;
        this.monto  = monto ;
        this.cuotas  = cuotas ;
        this.indice = 0 ;
        this.final = 0 ;
    };
      
    presentar() {
        console.log(`SOLICITUD DEL CLIENTE: ${this.nombre} solicita ${this.monto} $ en ${this.cuotas} cuotas.`)
    };

    calcularInteres() {
      if (this.cuotas == 1) {
        this.indice = 1.1;
      } else if (this.cuotas == 2) {
        this.indice = 1.2;
      } else if (this.cuotas == 3) {
        this.indice = 1.3
      } else {
        console.log(`Ingrese una cantidad de cuotas valida.`);
      };
    };

    calcularMontoFinal() {
        this.final = this.monto * this.indice;
    };    

    generar() {
        dniDeudores.push(this.dni);
    };

};  

//instanciar
const prestamo1 = new Prestamo("Jorge", 29946811, 15000, 1);
const prestamo2 = new Prestamo("Alma", 54996245,140000, 2);
const prestamo3 = new Prestamo("Helena", 58252869, 153000, 2);

//EJECUCIONES

//prestamo1.presentar();
prestamo1.calcularInteres();
prestamo1.calcularMontoFinal();
prestamo1.generar();

//prestamo2.presentar();
prestamo2.calcularInteres();
prestamo2.calcularMontoFinal();
prestamo2.generar();

//prestamo3.presentar();
prestamo3.calcularInteres();
prestamo3.calcularMontoFinal();
prestamo3.generar();

//PRESENTACIONES

const informeDeudores = `Actualmente hay ${dniDeudores.length} deudores. Sus DNI son ${dniDeudores.join(", ")}.`;
// console.log(prestamo1);
// console.log(prestamo2);
// console.log(prestamo3);

console.log(informeDeudores);