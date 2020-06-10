// Required
// const file = require('fs');
// const fs = require('express); de libreria externa
// const fs = require('./fs); ruta de archivos creados por ns
const { crearArchivo } = require('./multiplicar/multiplicar');

// let base = 'abc';

// console.log(process.argv);
// Esto es sumamente volatil porque si no se manda un valor o no se manda el tercer argumento 
// Ociurre error, y son muchas las validaciones que se deben realizar
// Para ello se ocupan paquetes q optimizan esto
let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1];

// console.log(base);
crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${ archivo}`))
    .catch((err) => {
        console.log(err);
    })