/* CuentaAhorros: Hereda de Cuenta. Atributos: tasa de interés. Métodos: calcular 
intereses.  */
/* CuentaAhorros: Hereda de Cuenta.Métodos:
consultar saldo, realizar depósito, realizar retiro, consultar movimientos. */
import Cuenta from "../js/Cuenta.js"
class CuentaAhorros extends Cuenta{
constructor(numeroCuenta,saldo){
super(numeroCuenta,saldo)
this.tasaInteres=0.04
}

calcularInteres(){
return this.saldo*(1+this.tasaInteres/12)**(12*(1/12))
}


}export default CuentaAhorros