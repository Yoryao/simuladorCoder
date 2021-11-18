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