/* Cuenta: Atributos: número de cuenta, saldo. Métodos: consultar saldo, realizar depósito, 
realizar retiro. */
class Cuenta{
constructor(saldo=0,numeroCuenta=0){
this.numeroCuenta=numeroCuenta
this.saldo=saldo
}
consultarSaldo(){
    return `$${this.saldo}`

}


realizarDeposito(saldoDepositar){


    this.saldo+=saldoDepositar
}
realizarRetiro(saldoRetirar,saldoActual){
if(saldoRetirar<=saldoActual)
this.saldo=saldoActual-saldoRetirar
else{
    alert("Usted no posee la cantidad que trata de retirar")
    this.saldo=saldoActual
}
return this.saldo
}

}export default Cuenta