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
    $("#alertaDeudor").text("Es un deudor, no otorgar crédito.");
    $("#infoCliente").empty();
    $("#alertaDeudor")
      .css({
        "background-color": "yellow",
        color: "black",
        width: "250px",
        height: "250px",
      })
      .fadeIn(2000)
      .fadeOut(2000)
      .fadeIn(2000)
      .fadeOut(2000)
      .fadeIn(2000)
      .slideUp(4000);
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

//FUNCION BORRAR DATOS

$("#reset").click(function () {
  $("#nombre").val("");
  $("#dni").val("");
  $("#monto").val("");
  $("#cuotas").val("");
  $("#final").val("");
  $("#indice").val("");
  $("#infoCliente").text("");
  $("#infoPrestamo").text("");
  console.log("remove la clase!");
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
  }
  // PRESENTACION DE LA INFORMACION SIN MANIPULAR.
  presentar() {
    //PRESENTO LA INFORMACIÓN SOBRE EL HTML A TRAVEZ DEL DOM.
    $("#infoCliente").text(`SOLICITUD DEL CLIENTE: ${this.nombre} 
                            solicita ${this.monto} $ 
                            en ${this.cuotas} cuotas.`);
  }
  // DECLARAR VALOR DE INDICE EN BASE A CUOTAS.
  calcularInteres() {
    //capturo el valor elegido por el usuario
    let cuotas = parseInt(this.cuotas);

    $.get("./interesApi.json", (resp) => {
      console.log(resp);
      let objeto = resp.find((valor) => valor.cuotas === cuotas);
      this.indice = parseFloat(objeto.interes);
      console.log(this.indice);
    
  //realizo el calculo del monto final. 
    $("#calculos").empty();
    console.log(this.indice);
    this.final = this.monto * this.indice;
    console.log(this.final);
    $("#calculos").append(`<label>Interes:</label><br>
                         <input type="number" name="interesInforme" 
                            id="indice" value="${this.indice}"readonly><br>
                         <label>Monto Final:</label><br>
                         <input type="number" name="finalInforme"
                            id="final" value="${this.final}" readonly>`);
  });
}};

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
  }

  // PRESENTACION DE LA INFORMACION SIN MANIPULAR CON JQUERY.
  presentar() {
    //PRESENTO LA INFORMACIÓN SOBRE EL HTML A TRAVEZ DEL DOM.
    $("#infoPrestamo")
      .text(`OTORGADO AL CLIENTE: ${this.nombre} recibio ${this.final} $ 
                            a pagar en  ${this.cuotas} cuotas.`);
  }
}
