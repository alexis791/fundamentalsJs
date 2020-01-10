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

async function mostrarPersonaje () {
    const personaje =  await obtenerPersonaje(1)
    console.log(personaje)
}

mostrarPersonaje()
