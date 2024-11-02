/* CuentaCorriente: Hereda de Cuenta. Métodos:
consultar saldo, realizar depósito, realizar retiro, sobregiro de 500.000 */
import Cuenta from "../js/Cuenta.js"
class CuentaCorriente extends Cuenta{
constructor(numeroCuenta=0,saldo=0){
    super(numeroCuenta, saldo)
this.sobregiro=-500000
}

realizarTransferencia(saldoTransferir,saldoActual){
this.saldo=saldoActual
  /*   if(saldoTransferir<=this.saldo)
this.saldo-=saldoTransferir  */
 if(saldoActual-saldoTransferir>=this.sobregiro)
     this.saldo=saldoActual-saldoTransferir
else{
alert("Saldo no disponible")
this.saldo=saldoActual
}
return this.saldo

}
}
export default CuentaCorriente