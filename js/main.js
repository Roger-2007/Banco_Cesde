import Cliente from "../js/Cliente.js"
import Cuenta from "../js/Cuenta.js"


document.getElementById('formRegistro')?.addEventListener( "submit" , function(event){
   event.preventDefault();
const nombre=document.getElementById("nombre").value
 const apellido=document.getElementById("apellido").value
 const correo=document.getElementById("correo").value
 const direccion=document.getElementById("direccion").value
 const contraseña=document.getElementById("contraseña").value
 const identificacion=parseInt(document.getElementById("identificacion")).value
    console.log(nombre);
    localStorage.setItem('usuario', JSON.stringify({ correo, contraseña  }));
    window.location.href = 'iniciarsesion.html';
 const datoscliente= new Cliente(nombre,apellido,direccion,identificacion)

});
 
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
   const formDepositar=document.getElementById('formDepositar')
const formTransferir=document.getElementById('formTransferir')
function mostrarFormDepositar(){
   formDepositar.style.display='flex';
}
function mostrarFormTransferir(){
   formTransferir.style.display='flex';

}
function ocultarFormDepositar(){
   formDepositar.style.display='none';
}
function ocultarFormTransferir(){
   formTransferir.style.display='none';

}

btnDepositar.addEventListener('click',ocultarFormTransferir)
    btnDepositar.addEventListener('click',mostrarFormDepositar)
    
btnTransferir.addEventListener('click',ocultarFormDepositar)
 btnTransferir.addEventListener('click',mostrarFormTransferir)
 
document.getElementById('formDepositar').addEventListener("submit",function(){
   const saldoDepositar=document.getElementById('cantDepositar').value
   const cuenta=new Cuenta(saldoDepositar,123456789);
   const saldoNuevo=cuenta.saldo
   localStorage.setItem('saldo', JSON.stringify(saldoNuevo));

})



const btnRetirar=document.getElementById('retirar')

btnRetirar.addEventListener('click',function(){
const saldoRetirar=document.getElementById('cantRetirar').value
   const cuenta=new Cuenta()
cuenta.realizarRetiro(saldoRetirar)
localStorage.setItem('saldo', JSON.stringify(cuenta.saldo));

})
const btnConsultarSaldo=document.getElementById('consultarSaldo')
btnConsultarSaldo.addEventListener('click',function(){
 const saldoNuevo = JSON.parse(localStorage.getItem('saldo'));
   const cuenta=new Cuenta(saldoNuevo)
   document.getElementById('saldoDisponible').innerText=cuenta.consultarSaldo()
})

/* localStorage.getItem('usuario',JSON.stringify({nombre?,}))
 */