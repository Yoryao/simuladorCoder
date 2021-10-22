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
        let interesDom = document.getElementById("interesInforme");
        interesDom.value = this.indice;

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
//ACA ESTOY TIRANDO FRUTA, PORQUE ME CARGA 2 VECES EL DNI Y NO SE PORQUE. 
    generar() {
      if (!dniDeudores.includes(this.dni)){
        dniDeudores.push(this.dni);
      } else {
        console.log("Ya esta ingresado al registro de deudores.")
      }  
    };
};  


let boton = document.getElementById("submitDatos");
boton.addEventListener("click", solicitar)
 
function solicitar() {
  let nombre = document.getElementById("nombre").value;
  let dni =    document.getElementById("dni").value;
  let monto =  document.getElementById("monto").value;
  let cuotas = document.getElementById("cuotas").value;
  
  const prestamo = new Prestamo(nombre, dni, monto, cuotas);
  
  prestamo.calcularInteres();
  prestamo.calcularMontoFinal();
  prestamo.presentar();
  
  //ESTOY LEVANTANDO LOS DATOS DEL PRIMER FORMULARIO
  let boton2 = document.getElementById("generar");
  boton2.addEventListener("click", generar);


  function generar() {
  
    prestamo.generar();
    console.log(dniDeudores);
    
  };

};  

let boton3 = document.getElementById("mostrarDeudores");
  boton3.addEventListener("click", mostrarDeudores);

function mostrarDeudores() {
let  tabla = document.getElementById("deudores");

for (let i = 0; i < dniDeudores.length; i++) {
 
  let fila = document.createElement("li");
  fila.innerHTML = dniDeudores[i];
  tabla.appendChild(fila);
  };
};


/*SOLICITUD DEL CLIENTE: jorge solicita 1 $ en 1 cuotas.
22960Rivera.js:87 ["29"]
22960Rivera.js:17 SOLICITUD DEL CLIENTE: Romina solicita 2 $ en 2 cuotas.
22960Rivera.js:58 Ya esta ingresado al registro de deudores.
22960Rivera.js:87 ["29"]
22960Rivera.js:87 (2) ["29", "33"]
22960Rivera.js:17 SOLICITUD DEL CLIENTE: Alma solicita 3 $ en 3 cuotas.
22960Rivera.js:58 Ya esta ingresado al registro de deudores.
22960Rivera.js:87 (2) ["29", "33"]
22960Rivera.js:58 Ya esta ingresado al registro de deudores.
22960Rivera.js:87 (2) ["29", "33"]
22960Rivera.js:87 (3) ["29", "33", "54"]
*/

