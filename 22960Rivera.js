//BOTONES + EVENTOS

//BOTON SIMULAR PRESTAMOS
let btnSim = document.getElementById("simular");
btnSim.addEventListener("click", simular);

//BOTON SOLICITAR PRESTAMO
let btnSol = document.getElementById("solicitar");
btnSol.addEventListener("click", generar);

//BOTON MOSTRAR DEUDORES
let btnMos = document.getElementById("mostrar");
btnMos.addEventListener("click", () => {
  for (let i = 0; i < dniDeudores.length; i++) {
    let lista = document.getElementById("deudores");
    let tabla = document.createElement("table");
    let fila = document.createElement("li");
    tabla.id = "tablaId";
    fila.innerHTML = dniDeudores[i];

    tabla.appendChild(fila);
    lista.appendChild(tabla);
  }
});

//BOTON BORRAR DEUDORES
let btnBor = document.getElementById("borrar");
btnBor.addEventListener("click", () => {
 
    for (let i = 0; i < dniDeudores.length; i++) {
      let lista1 = document.getElementById("deudores");
      let lista = document.getElementById("tablaId");
      lista1.removeChild(lista);
    }
  }
);

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
    this.indice = 0;
    this.final = 0;
    this.deudor = false;
  };

  // PRESENTACION DE LA INFORMACION SIN MANIPULAR.
  presentar() {
    //PRESENTO LA INFORMACIÓN SOBRE EL HTML A TRAVEZ DEL DOM.
    let presentacion = document.getElementById("presentar");
    presentacion.innerText = `SOLICITUD DEL CLIENTE: ${this.nombre} solicita ${this.monto} $ en ${this.cuotas} cuotas.`;
  };

  // DECLARAR VALOR DE INDICE EN BASE A CUOTAS.
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
  };

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
};
