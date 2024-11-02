class Cliente{
constructor (nombre,apellido,direccion,identificacion){
this.nombre=nombre
this.apellido=apellido
this.direccion=direccion
this.identificacion=identificacion
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
return nuevosDatos=[this.nombre,this.apellido,this.correo,this.direccion,this.contraseña,this.identificacion,this.telefono]


}

}
export default Cliente