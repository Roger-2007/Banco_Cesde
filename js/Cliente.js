class Cliente{
constructor (nombre,apellido,direccion,identificacion){
this.nombre=nombre
this.apellido=apellido
this.direccion=direccion
this.identificacion=identificacion
}

actualizarDatos(nombre,apellido,direccion,identificacion){
if (nombre)
    this.nombre=nombre
if (apellido)
this.apellido=apellido
if(direccion)
this.direccion=direccion
if(identificacion)
this.identificacion=identificacion
}
}
export default Cliente