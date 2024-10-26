/* CuentaAhorros: Hereda de Cuenta. Atributos: tasa de interés. Métodos: calcular 
intereses.  */
import Cuenta from "../js/Cuenta.js"
class CuentaAhorros extends Cuenta{
constructor(tasaInteres){
super(this.numeroCuenta,this.saldo)
this.tasaInteres=tasaInteres
}
calcularInteres(){
    
}
}export default CuentaAhorros