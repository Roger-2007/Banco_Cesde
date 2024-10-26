/* CuentaCorriente: Hereda de Cuenta. Atributos: descubierto permitido. Métodos: 
realizar transferencia. */
import Cuenta from "../js/Cuenta.js"
class CuentaCorriente extends Cuenta{
constructor(descubiertoPermitido){
    super(this.numeroCuenta,this.saldo)
this.descubiertoPermitido=descubiertoPermitido
}

realizarTransferencia(saldoTransferir){
if(saldoTransferir<=this.saldo)
this.saldo-=saldoTransferir
else
alert("Saldo no disponible")
}

}
export default CuentaCorriente