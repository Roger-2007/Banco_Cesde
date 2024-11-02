/* CuentaAhorros: Hereda de Cuenta. Atributos: tasa de interés. Métodos: calcular 
intereses.  */
/* CuentaAhorros: Hereda de Cuenta.Métodos:
consultar saldo, realizar depósito, realizar retiro, consultar movimientos. */
import Cuenta from "../js/Cuenta.js"
class CuentaAhorros extends Cuenta{
constructor(numeroCuenta=0,saldo=0){
super(numeroCuenta,saldo)
}
mostrarMovimiento(tipoMovimiento,numeroEntrada){
return `Su ultimo movimiento fue de ${tipoMovimiento} y fue de un valor de $${numeroEntrada}`
}
}export default CuentaAhorros