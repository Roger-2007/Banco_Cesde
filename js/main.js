import Cliente from "../js/Cliente.js"
import Cuenta from "../js/Cuenta.js"
import CuentaAhorros from "../js/CuentaAhorros.js";
import CuentaCorriente from "../js/CuentaCorriente.js";


document.getElementById('formRegistro')?.addEventListener( "submit" , function(event){
   event.preventDefault();
const nombre=document.getElementById("nombre").value
 const apellido=document.getElementById("apellido").value
 const correo=document.getElementById("correo").value
 const direccion=document.getElementById("direccion").value
 const contraseña=document.getElementById("contraseña").value
 const telefono=document.getElementById("telefono").value
 const identificacion=document.getElementById("identificacion").value
    console.log(nombre);
    localStorage.setItem('usuario', JSON.stringify({ correo, contraseña  }));
    localStorage.setItem('perfil', JSON.stringify([ nombre, apellido,correo,direccion,contraseña,identificacion,telefono ] ));
    window.location.href = 'iniciarsesion.html';
 const datoscliente= new Cliente(nombre,apellido,direccion,identificacion)

});

document.addEventListener('DOMContentLoaded', function() {
   const perfil = JSON.parse(localStorage.getItem('perfil'));

   if (perfil) {
      document.getElementById('modnombre').value = perfil[0];
      document.getElementById('modapellido').value = perfil[1];
      document.getElementById('modcorreo').value = perfil[2];
      document.getElementById('moddireccion').value = perfil[3];
      document.getElementById('modcontraseña').value = perfil[4];
      document.getElementById('modidentificacion').value = perfil[5];
      document.getElementById('modtelefono').value = perfil[6];
   }
});


document.getElementById('formModificarPerfil')?.addEventListener('submit',function(event){
   event.preventDefault();



 
  const nuevoNombre=document.getElementById('modnombre').value
const nuevoApellido=document.getElementById('modapellido').value
const nuevoCorreo=document.getElementById('modcorreo').value
const nuevaDireccion=document.getElementById('moddireccion').value
const nuevaContraseña=document.getElementById('modcontraseña').value
const nuevaIdentificacion=document.getElementById('modidentificacion').value
const nuevoTelefono=document.getElementById('modtelefono').value
localStorage.setItem('perfil', JSON.stringify([nuevoNombre,nuevoApellido,nuevoCorreo,nuevaDireccion,nuevaContraseña,nuevaIdentificacion,nuevoTelefono] ));

window.location.href = 'perfil.html';

})


document.getElementById('formInicioSesion')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    const email = document.getElementById('incorreo').value;
    const password = document.getElementById('incontraseña').value;

    // Recuperar los datos del localStorage
    const usuario = JSON.parse(localStorage.getItem('usuario'));

    // Verificar las credenciales
    if (usuario && usuario.correo === email && usuario.contraseña === password) {
        alert('Inicio de sesión exitoso!');
window.location.href="perfil.html"   
 } else {
        alert('Email o contraseña incorrectos.');
    }
});

const btnDepositar = document.getElementById('depositar');
const btnTransferir=document.getElementById('transferir')
const btnRetirar=document.getElementById('retirar')
 
const formDepositar=document.getElementById('formDepositar')
const formTransferir=document.getElementById('formTransferir')
const formRetirar=document.getElementById('formRetirar')

function mostrarFormDepositar(){
   formDepositar.style.display='flex';
}
function mostrarFormTransferir(){
   formTransferir.style.display='flex';

}
function mostrarFormRetirar(){
   formRetirar.style.display='flex'
}
function ocultarFormDepositar(){
   formDepositar.style.display='none';
}
function ocultarFormTransferir(){
   formTransferir.style.display='none';
}
function ocultarFormRetirar(){
   formRetirar.style.display='none'

}
btnDepositar.addEventListener('click',ocultarFormTransferir)
btnDepositar.addEventListener('click',mostrarFormDepositar)
btnDepositar.addEventListener('click',ocultarFormRetirar)
btnTransferir.addEventListener('click',ocultarFormDepositar)
btnTransferir.addEventListener('click',ocultarFormRetirar)
btnTransferir.addEventListener('click',mostrarFormTransferir)
btnRetirar.addEventListener('click',ocultarFormDepositar)
btnRetirar.addEventListener('click',ocultarFormTransferir)
btnRetirar.addEventListener('click',mostrarFormRetirar) 




/* Depositar */

 document.getElementById('formDepositar')?.addEventListener("submit",function(){
   const saldoDepositar=parseInt(document.getElementById('cantDepositar').value)
 const saldoActual=parseInt(localStorage.getItem('saldo')||0)||0
   console.log(localStorage.getItem('saldo'));
   const nuevoSaldo=saldoDepositar+saldoActual
   console.log(nuevoSaldo);
   localStorage.setItem('saldo', JSON.stringify(nuevoSaldo));
   const tipoMovimiento="Deposito"

   localStorage.setItem('tipoMovimiento', JSON.stringify( tipoMovimiento  ));
   localStorage.setItem('cantidadMovimiento', JSON.stringify(saldoDepositar));

})

/* Transferir */

document.getElementById('formTransferir')?.addEventListener("submit",function(){
   const cuentaCorriente=new CuentaCorriente()

   const saldoTransferir=parseInt(document.getElementById('cantTransferir').value)
 const saldoActual=parseInt(localStorage.getItem('saldo')||0)||0
   const nuevoSaldo=parseInt(cuentaCorriente.realizarTransferencia(saldoTransferir,saldoActual))
   console.log(nuevoSaldo);
   localStorage.setItem('saldo', JSON.stringify(nuevoSaldo));
   const tipoMovimiento="Transferencia"
   localStorage.setItem('tipoMovimiento', JSON.stringify( tipoMovimiento  ));
   localStorage.setItem('cantidadMovimiento', JSON.stringify(saldoTransferir));


})

/* Retirar */
document.getElementById('formRetirar')?.addEventListener('submit',function(){
   const cuenta=new Cuenta()
   const saldoRetirar=parseInt(document.getElementById('cantRetirar').value)
 
const saldoActual=parseInt(localStorage.getItem('saldo')||0)||0
const nuevoSaldo=parseInt(cuenta.realizarRetiro(saldoRetirar,saldoActual))
console.log(nuevoSaldo);


localStorage.setItem('saldo', JSON.stringify(nuevoSaldo));
const tipoMovimiento="retiro"

localStorage.setItem('tipoMovimiento', JSON.stringify( tipoMovimiento));
localStorage.setItem('cantidadMovimiento', JSON.stringify(saldoRetirar));

})
const btnConsultarSaldo=document.getElementById('consultarSaldo')
btnConsultarSaldo?.addEventListener('click',function(){
 const saldoNuevo = JSON.parse(localStorage.getItem('saldo'));
   const cuenta=new Cuenta(saldoNuevo)
   document.getElementById('saldoDisponible').innerText=cuenta.consultarSaldo()
})

/* localStorage.getItem('usuario',JSON.stringify({nombre?,}))
 */
const btnMovimiento=document.getElementById('btnMostrarMovimiento')
btnMovimiento?.addEventListener('click',function(){
   const ahorros=new CuentaAhorros()
   const movimiento = JSON.parse(localStorage.getItem('tipoMovimiento'));
   const valormovimiento = JSON.parse(localStorage.getItem('cantidadMovimiento'));

   document.getElementById('mostrarDatosMovimiento').innerText=ahorros.mostrarMovimiento(movimiento,valormovimiento)
})