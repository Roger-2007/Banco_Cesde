import Cliente from "../js/Cliente.js"
import Cuenta from "../js/Cuenta.js"
import CuentaAhorros from "../js/CuentaAhorros.js";
import CuentaCorriente from "../js/CuentaCorriente.js";

function generarEnteroAleatorio(min, max) {
   return Math.floor(Math.random() * (max - min)) + min;
 }
 
/* localStorage.clear() */

document.getElementById('formRegistro')?.addEventListener( "submit" , function(event){
   event.preventDefault();
   let usuario = JSON.parse(localStorage.getItem('usuario'))||[];
   if (!Array.isArray(usuario)) {
      usuario = []; // Si no es un array, inicializa uno vacío
    }
   const nombre=document.getElementById("nombre").value
 const apellido=document.getElementById("apellido").value
 const correo=document.getElementById("correo").value
 const direccion=document.getElementById("direccion").value
 const contraseña=document.getElementById("contraseña").value
 const telefono=document.getElementById("telefono").value
 const identificacion=document.getElementById("identificacion").value
    console.log(nombre);
    localStorage.setItem('usuario', JSON.stringify({ correo, contraseña  }));
    usuario.push({nombre:nombre, apellido:apellido,correo:correo,direccion:direccion,contraseña:contraseña,identificacion:identificacion,telefono:telefono,cuentas:[]})
    window.location.href = 'iniciarsesion.html';
    localStorage.setItem('usuario', JSON.stringify(usuario));
    
/*  const datoscliente= new Cliente(nombre,apellido,correo,direccion,contraseña,identificacion,telefono)
 */
});





document.getElementById('formInicioSesion')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario
    const usuario = JSON.parse(localStorage.getItem('usuario'));

    const email = document.getElementById('incorreo').value;
    const password = document.getElementById('incontraseña').value;

    // Recuperar los datos del localStorage
    
    let cuentaBuscada = usuario.find(usuario => usuario.correo === email);
 if (cuentaBuscada){
    const emailLogin=cuentaBuscada.correo
const contraseñaLogin=cuentaBuscada.contraseña
    // Verificar las credenciales
    if (usuario && emailLogin === email && contraseñaLogin === password) {
        alert('Inicio de sesión exitoso!');
        localStorage.setItem('correoLogin', JSON.stringify(emailLogin));

window.location.href="gestorCuentas.html"   
 } else {
        alert('Email o contraseña incorrectos.');
    }
}
else{
   alert("La cuenta no existe")
}
}
);

if (window.location.pathname.includes('modificarPerfil.html')) {

/* Mostrar datos de perfil */

 document.addEventListener('DOMContentLoaded', function() {
   const usuario = JSON.parse(localStorage.getItem('usuario'));
   const correoLogin = JSON.parse(localStorage.getItem('correoLogin'));

   let cuentaBuscada = usuario.find(usuario => usuario.correo === correoLogin);
   if (usuario) {
      
      document.getElementById('modnombre').value = cuentaBuscada.nombre;
      document.getElementById('modapellido').value = cuentaBuscada.apellido;
      document.getElementById('modcorreo').value = cuentaBuscada.correo;
      document.getElementById('moddireccion').value = cuentaBuscada.direccion;
      document.getElementById('modcontraseña').value = cuentaBuscada.contraseña;
      document.getElementById('modidentificacion').value = cuentaBuscada.identificacion;
      document.getElementById('modtelefono').value = cuentaBuscada.telefono;
   }
});  


/* Actualizar datos */
document.getElementById('formModificarPerfil')?.addEventListener('submit',function(event){
   event.preventDefault();

const usuario=JSON.parse(localStorage.getItem('usuario'));
const correoLogin=JSON.parse(localStorage.getItem('correoLogin'))
const indice = usuario.findIndex(usuario => usuario.correo === correoLogin);
const cuentaBuscada = usuario.find(usuario => usuario.correo === correoLogin);
console.log(cuentaBuscada);
const nombre=cuentaBuscada.nombre
const apellido=cuentaBuscada.apellido
const correo=cuentaBuscada.correo
const direccion=cuentaBuscada.direccion
const contraseña=cuentaBuscada.contraseña
const identificacion=cuentaBuscada.identificacion
const telefono=cuentaBuscada.telefono

 const cliente=new Cliente(nombre,apellido,correo,direccion,contraseña,identificacion,telefono)
  const nuevoNombre=document.getElementById('modnombre').value
const nuevoApellido=document.getElementById('modapellido').value
const nuevoCorreo=document.getElementById('modcorreo').value
const nuevaDireccion=document.getElementById('moddireccion').value
const nuevaContraseña=document.getElementById('modcontraseña').value
const nuevaIdentificacion=document.getElementById('modidentificacion').value
const nuevoTelefono=document.getElementById('modtelefono').value
const nuevosDatos=cliente.actualizarDatos(nuevoNombre,nuevoApellido,nuevoCorreo,nuevaDireccion,nuevaContraseña,nuevaIdentificacion,nuevoTelefono)

if (indice !== -1) {
   usuario[indice].nombre=nuevosDatos[0]; // Actualiza solo los datos pasados en `nuevosDatos`
   usuario[indice].apellido=nuevosDatos[1]; // Actualiza solo los datos pasados en `nuevosDatos`
   usuario[indice].correo=nuevosDatos[2]; // Actualiza solo los datos pasados en `nuevosDatos`
   usuario[indice].direccion=nuevosDatos[3]; // Actualiza solo los datos pasados en `nuevosDatos`
   usuario[indice].contraseña=nuevosDatos[4]; // Actualiza solo los datos pasados en `nuevosDatos`
   usuario[indice].identificacion=nuevosDatos[5]; // Actualiza solo los datos pasados en `nuevosDatos`
   usuario[indice].telefono=nuevosDatos[6]; // Actualiza solo los datos pasados en `nuevosDatos`

   // Paso 4: Guarda el array actualizado en localStorage
   localStorage.setItem('usuario', JSON.stringify(usuario));
   localStorage.setItem('correoLogin', JSON.stringify(nuevoCorreo));

   alert('Su perfil ha sido modificado con exito') 
   window.location.href="perfil.html"   

}
 else {
   console.log("Usuario no encontrado.");
 }


})
}


/* Gestor de cuentas */

if (window.location.pathname.includes('gestorCuentas.html')) {
const botonesCrearCuenta=document.getElementById('botonesCrearCuenta')

function mostrarBotonesTipoCuenta(){
   botonesCrearCuenta.style.display="flex"
}
const btnCrearCuenta=document.getElementById('crearCuenta')
btnCrearCuenta?.addEventListener('click',mostrarBotonesTipoCuenta)


const btnTipoAhorro=document.getElementById('tipoAhorro')
btnTipoAhorro?.addEventListener('click',function(){
   const usuario = JSON.parse(localStorage.getItem('usuario'));
const correoLogin = JSON.parse(localStorage.getItem('correoLogin'));

let cuentaBuscada = usuario.find(usuario => usuario.correo === correoLogin);
let numeroCuenta=generarEnteroAleatorio(1000,5000)

const cuentaAhorros={numeroCuenta:numeroCuenta,tipo:"Cuenta de Ahorros",saldo:0,movimientos:[]}
cuentaBuscada.cuentas.push(cuentaAhorros)
localStorage.setItem('usuario', JSON.stringify(usuario));
alert("Usted creo una cuenta de forma exitosa")

location.reload();


})
const btnTipoCorriente=document.getElementById('tipoCorriente')
btnTipoCorriente?.addEventListener('click',function(){
   const usuario = JSON.parse(localStorage.getItem('usuario'));
const correoLogin = JSON.parse(localStorage.getItem('correoLogin'));

let cuentaBuscada = usuario.find(usuario => usuario.correo === correoLogin);

let numeroCuenta=generarEnteroAleatorio(1000,5000)

const cuentaCorriente={numeroCuenta:numeroCuenta,tipo:"Cuenta Corriente",saldo:0,movimientos:[]}

cuentaBuscada.cuentas.push(cuentaCorriente)
localStorage.setItem('usuario', JSON.stringify(usuario));
alert("Usted creo una cuenta de forma exitosa")
location.reload();




})

const usuario = JSON.parse(localStorage.getItem('usuario'));
const correoLogin = JSON.parse(localStorage.getItem('correoLogin'));

let cuentaBuscada = usuario.find(usuario => usuario.correo === correoLogin);

const gestorCuenta = document.getElementById("gestorCuenta"); /* Contenedor donde apareceran las cuentas */

if (cuentaBuscada.cuentas.length === 0) {
   const mensaje = document.createElement("p");
   mensaje.textContent = "Aún no has creado una cuenta.";
   gestorCuenta.appendChild(mensaje);
 } else {
// Recorrer el array de cuentas 
cuentaBuscada.cuentas.forEach(cuentas => {
  // Crear un botón para cada cuenta
  const boton = document.createElement("button");
  boton.textContent = `Numero de cuenta: ${cuentas.numeroCuenta} - Tipo de cuenta: ${cuentas.tipo} - Saldo: $${cuentas.saldo}`;
  
  boton.addEventListener("click", () => {
    // Guardar los datos de la cuenta seleccionada en localStorage

    localStorage.setItem("cuentaSeleccionada", JSON.stringify(cuentas));
    // Redirigir a otra página
    window.location.href = "perfil.html";  
   });

  // Agregar el botón al contenedor en el DOM
  gestorCuenta.appendChild(boton);
});}}


/* Solo funciona en perfil */
if (window.location.pathname.includes('perfil.html')) {

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
/* Botones de la pagina de perfil */
btnDepositar?.addEventListener('click',ocultarFormTransferir)
btnDepositar?.addEventListener('click',mostrarFormDepositar)
btnDepositar?.addEventListener('click',ocultarFormRetirar)
btnTransferir?.addEventListener('click',ocultarFormDepositar)
btnTransferir?.addEventListener('click',ocultarFormRetirar)
btnTransferir?.addEventListener('click',mostrarFormTransferir)
btnRetirar?.addEventListener('click',ocultarFormDepositar)
btnRetirar?.addEventListener('click',ocultarFormTransferir)
btnRetirar?.addEventListener('click',mostrarFormRetirar) 




/* Depositar */

 document.getElementById('formDepositar')?.addEventListener("submit",function(event){
   event.preventDefault()
   const saldoDepositar=parseInt(document.getElementById('cantDepositar').value)
   const usuario=JSON.parse(localStorage.getItem('usuario'));
   const cuentaActual=JSON.parse(localStorage.getItem('cuentaSeleccionada'));
/*    const cuentaBuscada = usuario.find(usuario => usuario.cuentas.numeroCuenta === cuentaActual.numeroCuenta);
 */   const indice = usuario.findIndex(usuario => usuario.cuentas.numeroCuenta === cuentaActual.numeroCuenta);
   const cuenta=new Cuenta(cuentaActual.numeroCuenta,cuentaActual.saldo)
   const nuevoSaldo=cuenta.realizarDeposito(saldoDepositar)
console.log(nuevoSaldo);
if (indice !== -1) {
   usuario[indice].cuentas.saldo = nuevoSaldo; // Actualiza solo los datos pasados en `nuevosDatos`

   // Paso 4: Guarda el array actualizado en localStorage
   localStorage.setItem('usuario', JSON.stringify(usuario));

   alert('Su perfil ha sido modificado con exito') 

}
 else {
   console.log("Usuario no encontrado.");
 }

})

/* Transferir */

document.getElementById('formTransferir')?.addEventListener("submit",function(){
   const cuentaCorriente=new CuentaCorriente()

   const saldoTransferir=parseInt(document.getElementById('cantTransferir').value)
 /* const saldoActual=parseInt(localStorage.getItem('saldo')||0)||0
   const nuevoSaldo=parseInt(cuentaCorriente.realizarTransferencia(saldoTransferir,saldoActual)) */
   const usuario=JSON.parse(localStorage.getItem('usuario'));
   const cuentaActual=JSON.parse(localStorage.getItem('cuentaSeleccionada'));
   const cuentaBuscada = usuario.find(usuario => usuario.cuentas.numeroCuenta === cuentaActual.numeroCuenta);
   const cuenta=new Cuenta(cuentaBuscada)
   nuevoSaldo=cuenta.realizarDeposito(saldoTransferir)
   console.log(nuevoSaldo);


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

/* Consultar saldo */
const btnConsultarSaldo=document.getElementById('consultarSaldo')
btnConsultarSaldo?.addEventListener('click',function(){
   const usuario=JSON.parse(localStorage.getItem('usuario'));
   const cuentaActual=JSON.parse(localStorage.getItem('cuentaSeleccionada'));
   const cuentaBuscada = usuario.cuentas.find(cuenta => cuenta.numeroCuenta === cuentaActual.numeroCuenta);
   
      console.log(cuentaActual.numeroCuenta);
console.log(cuentaBuscada);
    const cuenta=new Cuenta()
     document.getElementById('saldoDisponible').innerText=cuenta.consultarSaldo() 
})

/* localStorage.getItem('usuario',JSON.stringify({nombre?,}))
 */

/* Mostrar movimiento */
const btnMovimiento=document.getElementById('btnMostrarMovimiento')
btnMovimiento?.addEventListener('click',function(){
   const contenedor = document.getElementById("mostrarDatosMovimiento");
   contenedor.innerHTML=``
   const usuario=JSON.parse(localStorage.getItem('usuario'));

   usuario.forEach(usuario => {
     contenedor.innerHTML += `
       <div>
         <p>Su ultimo movimiento fue de: ${usuario.tipoMovimiento} y fue de un valor de $${usuario.valor}</p>
         ${tipoMovimiento}${numeroEntrada}
         
       </div>
       <hr>
     `;
   });
 
 
 
 
   /*   const ahorros=new CuentaAhorros()
   const movimiento = JSON.parse(localStorage.getItem('tipoMovimiento'));
   const valormovimiento = JSON.parse(localStorage.getItem('cantidadMovimiento'));

   document.getElementById('mostrarDatosMovimiento').innerText=ahorros.mostrarMovimiento(movimiento,valormovimiento) */
})
}