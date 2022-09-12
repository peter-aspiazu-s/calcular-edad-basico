// apundo a los elementos del html que quiero manipular
const inputDate = document.querySelector('input')
const formulario = document.querySelector('form')

// evito que cuando se haga el submit del formulario
// se me recargue la página
formulario.addEventListener('submit', (e) => {
    e.preventDefault()
})

// escucho cuando se haga el evento change de input y leo su valor
// desde el e.target.value el cual lo almaceno en una variable
// y se lo paso como argumento a la funcion calcularEdad
inputDate.addEventListener('change', (e) => {
    const fecha = e.target.value

    calcularEdad(fecha)
})

// creo la funcion calcularEdad y le digo que reciba un argumento que
// llamo fecha
function calcularEdad(fecha) {
    let hoy = new Date();
    /* creo una variable llamada hoy que va a almacenar una
    nueva instancia Date, esto hace que tenga la fecha y hora actual */

    let cumpleanos = new Date(fecha);
    /* creo una variable llamada cumpleanos donde vuelvo a llamar una instancia de Date
    pero esta vez le paso el valor fecha que recibo en la funcion, esto hará que Date formatee
    la fecha y la devuelva con su formato, eso almacenará la variable cumpleaños */

    let edad = hoy.getFullYear() - cumpleanos.getFullYear();
    /* Creamos la variable edad que almacenara el resultado de una resta entre
    el año de la variable hoy (para eso usamos el metodo getFullYear el cual nos
    devuelve el año como hoy es de la fecha actual devuelve 2022 y cumpleaños es de
    la fecha que pongamos entonces devolvera el año que corresponda) y el año de la
    variable cumpleanos */

    /* Si algun payasito escoge una fecha que no llegue al año
    el valor mostrado en la consola será 0, pilas! */

    return console.log(edad);
}

