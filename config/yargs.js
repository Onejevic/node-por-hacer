const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
}

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado'
}

const argv = require('yargs')
    .command('crear', 'Crea un elemento', { descripcion })
    .command('actualizar', 'actualiza un elemento', { descripcion, completado })
    .command('borrar', 'Borra un elemento', { descripcion })
    .help()
    .argv;

module.exports = {
    argv
}