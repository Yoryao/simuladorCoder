
//INCORPORAR UN ARRAY : REQUISITO DE LA ENTREGA. VER METODOS EN LINEA 65
const dniDeudores = [];

//DECLARACION DE CLASE PARA INSTANCIAR PRESTAMOS.
class Prestamo {
    constructor( nombre, dni, monto, cuotas) {
        this.nombre  = nombre ;
        this.dni = dni;
        this.monto  = monto ;
        this.cuotas  = cuotas ;
        this.indice = 0 ;
        this.final = 0 ;
    };
      
// PRESENTACION DE LA INFORMACION SIN MANIPULAR.
    presentar() {
        console.log(`SOLICITUD DEL CLIENTE: ${this.nombre} solicita ${this.monto} $ en ${this.cuotas} cuotas.`);
        let montoDom = document.getElementById("montoInicialInforme");
        montoDom.value = this.monto;
        let cuotasDom = document.getElementById("cuotasInforme");
        cuotasDom.value = this.cuotas;
    
      };

// DECLARAR VALOR DE INDICE EN BASE A CUOTAS.
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
      let interesDom = document.getElementById("interesInforme");
      interesDom.value = this.indice;    
    };

//CALCULAR EL MONTO FINAL DEL PRESTAMOS
    calcularMontoFinal() {
        this.final = this.monto * this.indice;
        let finalDom = document.getElementById("finalInforme");
        finalDom.value = this.final;
    };    

//SE SOLICITA EL PRESTAMO, Y SE INGRESA EL DNI EN LA LISTA DE DEUDORES. 
    generar() {
        dniDeudores.push(this.dni);
    };
};  

//instanciar
const prestamo1 = new Prestamo("Jorge", 29946811, 15000, 1);
const prestamo2 = new Prestamo("Alma", 54996245,140000, 2);
const prestamo3 = new Prestamo("Helena", 58252869, 153000, 2);

//EJECUCIONES

prestamo1.calcularInteres();
prestamo1.calcularMontoFinal();
prestamo1.generar();

// prestamo2.calcularInteres();
// prestamo2.calcularMontoFinal();
// prestamo2.generar();

// prestamo3.calcularInteres();
// prestamo3.calcularMontoFinal();
// prestamo3.generar();

//PRESENTACIONES
prestamo1.presentar();
// prestamo2.presentar();
// prestamo3.presentar();

const informeDeudores = `Actualmente hay ${dniDeudores.length} deudores. Sus DNI son ${dniDeudores.join(", ")}.`;
console.log(informeDeudores);