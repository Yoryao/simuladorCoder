// let montoInicial, cuotas, montoFinal, indice;

// function calculadora() {
//   montoInicial = parseInt(prompt("Ingrese el monto inicial del prestamo:"));
//   cuotas = parseInt(prompt("Ingrese la cantidad de cuotas para el prestamo:"));

//   console.log(`Monto Inicial: ${montoInicial}`);
//   console.log(`Cuotas: ${cuotas}`);

//   indice = interes(cuotas);
//   calcularInteres(montoInicial, indice);
// }

// Funcion para vincular el interes de acuerdo a las cuotas
/*function interes(cuotas) {
  switch (cuotas) {
    case 1:
      indice = 1.1;
      break;
    case 2:
      indice = 1.2;
      break;
    case 3:
      indice = 1.3;
      break;
    default:
      alert("Ingrese una cantidad de cuotas valida.")
      break;
  }
  return indice;
}*/

// funcion para calcular el interes del prestamo.
// function calcularInteres(montoInicial, indice) {
//   montoFinal = montoInicial * indice;
//     console.log(`Monto Final: ${montoFinal}`);
// }



// calculadora();


//RELACION AL DOM.
// let montoHtml = document.getElementById("montoInicial").value = montoInicial;
// let cuotaHtml = document.getElementById("cuotas").value = cuotas;
// let interesHtml = document.getElementById("interes").value = indice;
// let finalHtml = document.getElementById("final").value = montoFinal;

//alert(`El monto final es de: ${montoFinal}`);

class Prestamo {
    constructor( nombre, monto, cuotas) {
        this.nombre  = nombre ;
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
      }
    }

    generar() {
        this.final = this.monto * this.indice;
            
    };    

}  

//ejecución. 

const prestamo1 = new Prestamo("Jorge", 10000, 3);
const prestamo2 = new Prestamo("Alma", 100000, 2);


prestamo1.calcularInteres();
prestamo1.generar();
console.log(prestamo1);

prestamo2.calcularInteres()
prestamo2.generar();
console.log(prestamo2);


