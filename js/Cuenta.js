/* Cuenta: Atributos: número de cuenta, saldo. Métodos: consultar saldo, realizar depósito, 
realizar retiro. */
class Cuenta{
constructor(numeroCuenta,saldo){
this.numeroCuenta=numeroCuenta
this.saldo=saldo
}
consultarSaldo(){
    return `$${this.saldo}`
}

realizarDeposito(saldoDepositar){
    return this.saldo+=saldoDepositar
}

realizarRetiro(saldoRetirar){
if(saldoRetirar<=this.saldo)
this.saldo-=saldoRetirar
else{
    alert("Usted no posee la cantidad que trata de retirar")
    this.saldo=saldoActual
}
return this.saldo
}

}export default Cuenta