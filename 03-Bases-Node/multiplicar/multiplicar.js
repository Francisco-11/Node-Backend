const file = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {

    console.log('==================='.green);
    console.log(`Tabla de ${base}`.green);
    console.log('==================='.green);
    for (let i = 1; i <= limite; i++) {
        console.log(`Resultado: ${base}*${i} = ${base*i}\n`);
    }
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `Resultado: ${base}*${i} = ${base*i}\n`;
        }


        file.writeFile(`tablas/tabla-${base}-al-limite${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt con limite ${limite}`.green)

        });
    });
}



module.exports = {
    crearArchivo,
    listarTabla
}