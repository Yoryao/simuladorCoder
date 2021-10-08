let montoInicial, cuotas, montoFinal, indice;

function calculadora() {
  montoInicial = parseInt(document.getElementById("monto"));
  cuotas = parseInt(document.getElementById("cuota"));

  console.log(`Monto Inicial: ${montoInicial}`);
  console.log(`Cuotas: ${cuotas}`);

  interes(cuotas);
  calcularInteres(montoInicial, cuotas, indice);

}

function calcularInteres(montoInicial, cuotas, indice) {
  switch (cuotas) {
    case 1:
      montoFinal = montoInicial * indice;
      break;
    case 2:
      montoFinal = montoInicial * indice;
      break;
    case 3:
      montoFinal = montoInicial * indice;
      break;
    default:
      console.log("Error");
  }

  console.log(`Monto Final: ${montoFinal}`);
}

function interes(cuotas) {
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
  }

  return indice;
}


let montoHtml = document.getElementById("montoInicial").value = montoInicial;
let cuotaHtml = document.getElementById("cuotas").value = cuotas;
let interesHtml = document.getElementById("interes").value = indice;
let finalHtml = document.getElementById("final").value = montoFinal;

alert(`El monto final es de: ${montoFinal}`);


