/**
 * Promesas, es un objeto que representa la finalizacion exitosa o fracaso
 * de una funcion o peticion. No se envian callbacks a la funcion
 * se adjunta a las funciones del objeto.
 */

const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'


const opts = null

function obtenerPersonaje(id) {
    return new Promise(function(resolve, reject){
        const URL = `${API_URL}${PEOPLE_URL.replace(':id',id)}/`

        $.get(URL, opts, function(data) {
            resolve(data)
        }).fail( () => reject(id))
    })
}

/** Las promesas tambien pueden estar encadenadas */
obtenerPersonaje(1)
    .then( ({ name }) =>  {
        console.log(`Hola, soy ${name}`)
        return obtenerPersonaje(2)
    }).then(({ name }) =>  {
        console.log(`Hola, soy ${name}`)
        return obtenerPersonaje(3)
    }).then(({ name }) =>  {
        console.log(`Hola, soy ${name}`)
        return obtenerPersonaje(4)
    }).then(({ name }) =>  {
        console.log(`Hola, soy ${name}`)
    })
    .catch(() => {
        console.log(`Sucedio un error`)
    })
