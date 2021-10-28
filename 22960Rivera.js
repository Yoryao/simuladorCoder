//INCORPORAR UN ARRAY : REQUISITO DE LA ENTREGA.
const dniDeudores = [];
const deudores = [];

//DECLARACION DE CLASE PARA INSTANCIAR PRESTAMOS.
class Prestamo {
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
                           <input type="number" name="interesInforme" id="interesInforme" value="${this.indice}"readonly><br>
                           <label>Monto Final:</label><br>
                          <input type="number" name="finalInforme"
    id="finalInforme" value="${this.final}" readonly>`;
  }

  //SE SOLICITA EL PRESTAMO, Y SE INGRESA EL DNI EN LA LISTA DE DEUDORES.
  //ACA ESTOY TIRANDO FRUTA, PORQUE ME CARGA 2 VECES EL DNI Y NO SE PORQUE.
  //for discord
  generar() {
    if (!dniDeudores.includes(this.dni)) {
      dniDeudores.push(this.dni);
      console.log(this.dni);
      console.log(dniDeudores);
      console.log("No esta ingresado, Otorgar Crédito.");
    } else {
      console.log(this.dni);
      console.log(
        "Ya esta ingresado al registro de deudores. No otorgar crédito"
      );
    }
  }
}

//MANEJO DE EVENTOS A TRAVES DE LOS BOTONES.
//FUNCIONES

function solicitar() {
  let nombre = document.getElementById("nombre").value;
  let dni = document.getElementById("dni").value;
  let monto = document.getElementById("monto").value;
  let cuotas = document.getElementById("cuotas").value;

  const prestamo = new Prestamo(nombre, dni, monto, cuotas);

  prestamo.calcularInteres();
  prestamo.calcularMontoFinal();
  prestamo.presentar();

  //ESTOY LEVANTANDO LOS DATOS DEL PRIMER FORMULARIO
  let boton2 = document.getElementById("generar");
  boton2.addEventListener("click", generar);

  //INGRESO EL OBJETO CREADO EN EL ARRAY DE OBJETOS - DEUDORES

  function generar() {
    prestamo.generar();

    deudores.push(prestamo);
    // console.log(deudores);
    //prestamo.generar();
    //console.log(dniDeudores);
  }
}

function mostrarDeudores() {
  let tabla = document.getElementById("deudores");
  document.removeChild("fila");

  for (let i = 0; i < dniDeudores.length; i++) {
    let fila = document.createElement("li");
    fila.innerHTML = dniDeudores[i];
    tabla.appendChild(fila);
  }
}

//BOTONES + EVENTOS

let boton = document.getElementById("calcular");
boton.addEventListener("click", solicitar);

let boton3 = document.getElementById("mostrarDeudores");
boton3.addEventListener("click", mostrarDeudores);
