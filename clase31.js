/**
 * Var, Let, Const
 */

 var alexis = {
     nombre : 'alexis',
     apellido : 'delgado',
     edad: 28
 }

 /** Var permite que las variables puede ser accedidas o modificadas
  * tanto afuera como adentro de los bloques internos de una funcion
  */
//  function esMayorDeEdad(persona) {
//      if(persona.edad > 18){
//         var mensaje = 'Es mayor de edad'    
//      } else {
//         var mensaje = 'Es menor de Edad'
//      }
//      console.log(mensaje)
//  }

/**Let se reduce al bloque (las llaves) en el cual la variable 
 * fue declarada. Fuera de este bloque la variable no existe. 
 * Una vez declarada la variable con let, 
 * no se puede volver a declarar con en ninguna otra parte de la función. */
//  function esMayorDeEdad(persona) {
//         let mensaje
//     if(persona.edad > 18){
//         mensaje = 'Es mayor de edad' 
//     } else {
//         mensaje = 'Es menor de Edad'
//     }
//     console.log(mensaje)
// }

/**““const”” al igual que ““let”” se define en el contexto o alcance de
 * un bloque, a diferencia de let y var, las varibles definidas como 
 * constantes (const), ya no podrán ser modificadas ni declaradas nuevamente,
 * en ninguna otra parte de la función o el contexto en el que ya existen */

function esMayorDeEdad(persona) {
    let mensaje
    const MAYOR_EDAD = 18
if(persona.edad > MAYOR_EDAD){
    mensaje = 'Es mayor de edad' 
    MAYOR_EDAD = 20
} else {
    mensaje = 'Es menor de Edad'
}
console.log(mensaje)
}

 esMayorDeEdad(alexis)
