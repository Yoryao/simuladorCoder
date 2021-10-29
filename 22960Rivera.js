//BOTONES + EVENTOS


let boton = document.getElementById("calcular");
boton.addEventListener("click", simular);

let boton3 = document.getElementById("mostrarDeudores");
boton3.addEventListener("click", mostrarDeudores);

//ESTOY LEVANTANDO LOS DATOS DEL PRIMER FORMULARIO
let boton2 = document.getElementById("generar");
boton2.addEventListener("click", generar);

//INCORPORAR UN ARRAY : REQUISITO DE LA ENTREGA.
const dniDeudores = [];
const deudores = [];

//DECLARACION DE CLASE PARA INSTANCIAR PRESTAMOS.
class Simulacion {
  constructor(nombre, dni, monto, cuotas) {
    this.nombre = nombre;
    this.dni = dni;
    this.monto = monto;
    this.cuotas = cuotas;
    this.indice = 0;
    this.final = 0;
    this.deudor = false;
  }

  // PRESENTACION DE LA INFORMACION SIN MANIPULAR.
  presentar() {
    //PRESENTO LA INFORMACIÓN SOBRE EL HTML A TRAVEZ DEL DOM.
    let presentacion = document.getElementById("presentar");
    presentacion.innerText = `SOLICITUD DEL CLIENTE: ${this.nombre} solicita ${this.monto} $ en ${this.cuotas} cuotas.`;
  }

  // DECLARAR VALOR DE INDICE EN BASE A CUOTAS.
  // VALIDAR INGRESO ERROR EN CUOTAS - USAR SWITCH
  calcularInteres() {
    if (this.cuotas == 1) {
      this.indice = 1.1;
    } else if (this.cuotas == 2) {
      this.indice = 1.2;
    } else if (this.cuotas == 3) {
      this.indice = 1.3;
    } else {
      alert(`Ingrese una cantidad de cuotas valida.`);
    }
  }

  //CALCULAR EL MONTO FINAL DEL PRESTAMOS
  calcularMontoFinal() {
    this.final = this.monto * this.indice;

    const div = document.getElementById("int&Monto");
    div.innerHTML = `  <label>Interes:</label><br>
                           <input type="number" name="interesInforme" id="indice" value="${this.indice}"readonly><br>
                           <label>Monto Final:</label><br>
                          <input type="number" name="finalInforme"
    id="final" value="${this.final}" readonly>`;
  }
}

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

  // PRESENTACION DE LA INFORMACION SIN MANIPULAR.
  presentar() {
    //PRESENTO LA INFORMACIÓN SOBRE EL HTML A TRAVEZ DEL DOM.
    let presentacion = document.getElementById("presentar");
    presentacion.innerText = `SOLICITUD DEL CLIENTE: ${this.nombre} solicita ${this.monto} $ en ${this.cuotas} cuotas.`;
  }
}

//MANEJO DE EVENTOS A TRAVES DE LOS BOTONES.
//FUNCIONES

function simular() {
  let nombre = document.getElementById("nombre").value;
  let dni = document.getElementById("dni").value;
  let monto = document.getElementById("monto").value;
  let cuotas = document.getElementById("cuotas").value;

  const prestamoSimulado = new Simulacion(nombre, dni, monto, cuotas);

  prestamoSimulado.presentar();
  prestamoSimulado.calcularInteres();
  prestamoSimulado.calcularMontoFinal();
}

function generar() {
  let nombre = document.getElementById("nombre").value;
  let dni = document.getElementById("dni").value;
  let monto = document.getElementById("monto").value;
  let cuotas = document.getElementById("cuotas").value;
  let indice = document.getElementById("indice").value;
  let final = document.getElementById("final").value;

  const deudor = new Prestamo(nombre, dni, monto, cuotas, indice, final);

  deudor.presentar();

  if (dniDeudores.includes(dni)) {
    console.log("Es un deudor, no otorgar crédito.");
  } else {
    console.log("dar credito");
    deudores.push(deudor);
    dniDeudores.push(dni);
    console.log(deudores);
  }
}

//funcion para ir agregando el ultimo deudor a la lista.
function mostrarDeudores() {
  if (dniDeudores.length < 0) {
    let lista1 = document.getElementById("deudores");
    let lista = document.getElementById("tablaId");
    lista1.removeChild(lista);
      } else {
    let index = dniDeudores.length;

    let lista = document.getElementById("deudores");
    let tabla = document.createElement("table");
    let fila = document.createElement("li");
    tabla.id = "tablaId";
    fila.innerHTML = dniDeudores[index - 1];

    tabla.appendChild(fila);
    lista.appendChild(tabla);
  }
}
//INGRESO EL OBJETO CREADO EN EL ARRAY DE OBJETOS - DEUDORES

// //funcion para ir agregando el ultimo deudor a la lista.
// function mostrarDeudores() {
//   let index = dniDeudores.length;

//   let lista = document.getElementById("deudores");
//   let tabla = document.createElement("table");
//   let fila = document.createElement("li");

//   fila.innerHTML = dniDeudores[index - 1];

//   tabla.appendChild(fila);
//   lista.appendChild(tabla);
// }
