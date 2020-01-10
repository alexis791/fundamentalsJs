/**
 * Closures - son funciones que te acceso al scope (ambito) de la funcion
 * que la esta envolviendo. Es una combinacion de una funcion que viene 
 * incluida junto con referencias de su estado
 * 
 * Son funciones que retornan otras funciones.
 * 
 * Es una función que recuerda el estado de las variables al 
 * momento de ser invocada, y conserva este estado a través de 
 * reiteradas ejecuciones
 */


 //Lexical scope
 function saludar(nombre) {
     function edad(edad) {
        console.log(`Hola soy ${nombre}, y tengo ${edad} años de edad.`)
     }

     edad(25)
 }

 // Closure
 function saludar(nombre) {
    function edad(edad) {
       console.log(`Hola soy ${nombre}, y tengo ${edad} años de edad.`)
    }

    return edad
}

 let alexis = saludar('Alexis')
 alexis(28)


 