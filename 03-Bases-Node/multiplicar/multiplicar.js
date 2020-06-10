const file = require('fs');

let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= 10; i++) {
            data += `Resultado: ${base}*${i} = ${base*i}\n`;
        }


        file.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`)

        });
    });
}



module.exports = {
    crearArchivo
}