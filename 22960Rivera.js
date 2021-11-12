//BOTONES + EVENTOS

//BOTON SIMULAR PRESTAMOS
$("#simular").click(function () {
  let nombre = $("#nombre").val();
  let dni = $("#dni").val();
  let monto = $("#monto").val();
  let cuotas = $("#cuotas").val();

  const prestamoSimulado = new Simulacion(nombre, dni, monto, cuotas);

  prestamoSimulado.presentar();
  prestamoSimulado.calcularInteres();
  prestamoSimulado.calcularMontoFinal();
});

//BOTON SOLICITAR PRESTAMO
$("#solicitar").click(function () {
  let nombre = $("#nombre").val();
  let dni = $("#dni").val();
  let monto = $("#monto").val();
  let cuotas = $("#cuotas").val();
  let indice = $("#indice").val();
  let final = $("#final").val();

  const deudor = new Prestamo(nombre, dni, monto, cuotas, indice, final);

  deudor.presentar();

  if (dniDeudores.includes(dni)) {
    $("#infoCliente").text("Es un deudor, no otorgar crédito.");
  } else {
    $("#infoCliente").text("No posee deudas, otorgar crédito.");
    deudores.push(deudor);
    dniDeudores.push(dni);
  }
});

//FUNCION MOSTRAR DEUDORES. 
$("#mostrar").click(function () {
  $("#dniDeudores").empty();

  for (let i = 0; i < dniDeudores.length; i++) {
    $("#dniDeudores").append(`<table id="tablaId"><tr>
                                <td>Nombre: ${deudores[i].nombre}</td>
                                <td> DNI: ${deudores[i].dni}</td>
                              </tr></table>`);
  }
});

//FUNCION OCULTAR DEUDORES
$("#borrar").click(function () {
    $("#dniDeudores").empty();  
});

// USO DE ARRAYS.
const dniDeudores = [];
const deudores = [];

//DECLARACION DE CLASE PARA INSTANCIAR SIMULACIONES.
class Simulacion {
  constructor(nombre, dni, monto, cuotas) {
    this.nombre = nombre;
    this.dni = dni;
    this.monto = monto;
    this.cuotas = cuotas;
  };
  // PRESENTACION DE LA INFORMACION SIN MANIPULAR.
  presentar() {
    //PRESENTO LA INFORMACIÓN SOBRE EL HTML A TRAVEZ DEL DOM.
    $("#infoCliente").text(`SOLICITUD DEL CLIENTE: ${this.nombre} 
                            solicita ${this.monto} $ 
                            en ${this.cuotas} cuotas.`);
  };
  // DECLARAR VALOR DE INDICE EN BASE A CUOTAS.
  calcularInteres() {
    let cuotas = parseInt(this.cuotas);
    switch (cuotas) {
      case 1:
      case 2:
      case 3:
        this.indice = 1.1;
        break;
      case 4:
      case 5:
      case 6:
        this.indice = 1.2;
        break;
      case 7:
      case 8:
      case 9:
        this.indice = 1.3;
        break;
      case 10:
      case 11:
      case 12:
        this.indice = 1.4;
        break;
      default:
        $("#infoCliente").text("Debe ingresar un numero de cuotas valido: 1 a 12.");
        break;
    }
  };
  //CALCULAR EL MONTO FINAL DEL PRESTAMOS
  calcularMontoFinal() {
    $("#calculos").empty();
    this.final = this.monto * this.indice;
    $("#calculos").append(`<label>Interes:</label><br>
                         <input type="number" name="interesInforme" 
                            id="indice" value="${this.indice}"readonly><br>
                         <label>Monto Final:</label><br>
                         <input type="number" name="finalInforme"
                            id="final" value="${this.final}" readonly>`);
  };
};

//DECLARACION DE CLASE PARA INSTANCIAR PRESTAMOS.
class Prestamo {
  constructor(nombre, dni, monto, cuotas, indice, final) {
    this.nombre = nombre;
    this.dni = dni;
    this.monto = monto;
    this.cuotas = cuotas;
    this.indice = indice;
    this.final = final;
    this.deudor = true;
  };

  // PRESENTACION DE LA INFORMACION SIN MANIPULAR CON JQUERY.
  presentar() {
    //PRESENTO LA INFORMACIÓN SOBRE EL HTML A TRAVEZ DEL DOM.
    $("#infoPrestamo")
      .text(`OTORGADO AL CLIENTE: ${this.nombre} recibio ${this.monto} $ 
                            a pagar en  ${this.cuotas} cuotas.`);
  };
};
