/* número de cuenta, saldo. Métodos: consultar saldo, realizar depósito, 
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


    this.saldo=+saldoDepositar
}
realizarRetiro(saldoRetirar){
if(saldoRetirar<=this.saldo)
this.saldo=-saldoRetirar
}
}export default Cuenta