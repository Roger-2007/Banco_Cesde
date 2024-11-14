/* CuentaCorriente: Hereda de Cuenta. Métodos:
consultar saldo, realizar depósito, realizar retiro, sobregiro de 500.000 */
import Cuenta from "../js/Cuenta.js"
class CuentaCorriente extends Cuenta{
constructor(numeroCuenta,saldo){
    super(numeroCuenta, saldo)
this.sobregiro=-500000
}
realizarRetiro(saldoRetirar){
  if((this.saldo-saldoRetirar)>=this.sobregiro)
  this.saldo-=saldoRetirar
  else{
      alert("Usted no posee la cantidad que trata de retirar")
      this.saldo=saldoActual
  }
  return this.saldo
  }
realizarTransferencia(saldoTransferir){
 if(this.saldo>=saldoTransferir)
     this.saldo-=saldoTransferir
else{
alert("Saldo no disponible")
}
return this.saldo

}
}
export default CuentaCorriente