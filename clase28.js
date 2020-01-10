/**
 * Callbacks are function that are executed when a task has being done
 * Are passed by parameter in a function
 */

const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'


const opts = { crossDomain: true }

// const callback = function (personaje) {
//     console.log(personaje)
// }

function obtenerPersonaje(id, callback) {
    const URL = `${API_URL}${PEOPLE_URL.replace(':id',id)}/`
    $.get(URL, opts, callback)
}

obtenerPersonaje(1, function({ name }) {
    console.log(`Hola, soy ${name}`)

    obtenerPersonaje(2, function({ name }) {
        console.log(`Hola, soy ${name}`)

        obtenerPersonaje(3, function({ name }) {
            console.log(`Hola, soy ${name}`)

            obtenerPersonaje(4, function(name){
                console.log(`Hola, soy ${name}`)

                obtenerPersonaje(5, function({ name }){
                    console.log(`Hola, soy ${name}`)
                })
            })
        })
    })
})
