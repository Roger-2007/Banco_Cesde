class Cliente{
constructor (nombre,apellido,correo,direccion,contraseña,identificacion,telefono){
this.nombre=nombre
this.apellido=apellido
this.correo=correo
this.direccion=direccion
this.contraseña=contraseña
this.identificacion=identificacion
this.telefono=telefono
}

actualizarDatos(nombre,apellido,correo,direccion,contraseña,identificacion,telefono){
if (nombre)
    this.nombre=nombre
if (apellido)
this.apellido=apellido
if(correo)
    this.correo=correo
if(direccion)
this.direccion=direccion
if(contraseña)
    this.contraseña=contraseña
if(identificacion)
this.identificacion=identificacion
if(telefono)
    this.telefono=telefono
return [this.nombre,this.apellido, this.correo,this.direccion,this.contraseña ,this.identificacion,this.telefono] /*
return {nombre:this.nombre,apellido:this.apellido,correo:this.correo,direccion:this.direccion,contraseña:this.contraseña,identificacion:this.identificacion,telefono:this.telefono}
 */


}

}
export default Cliente