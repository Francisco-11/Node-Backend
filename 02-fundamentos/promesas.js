let empleados = [{
    id: 1,
    nombre: 'Fernando'
}, {
    id: 2,
    nombre: 'Francisco'
}, {
    id: 3,
    nombre: 'Juan'
}];


let salarios = [{
    id: 1,
    salario: 1000,
}, {
    id: 2,
    salario: 2000
}];

let getEmpleado = (id) => {

    return new Promise((resolve, reject) => {

        let empleadosDB = empleados.find(empleado => {
            return empleado.id === id;
        });

        if (!empleadosDB) {
            reject(`No existe un empleado con el ID ${id}`);
        } else {
            resolve(empleadosDB);
        }
    });

}

let getSalario = (empleado) => {

    return new Promise((resolve, reject) => {

        let salariosDB = salarios.find(salario => {
            return salario.id === empleado.id;
        });

        if (!salariosDB) {
            reject(`No se encontro un salario para el empleado ${empleado.id}`);
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salariosDB.salario,
                id: empleado.id
            });
        }

    });

}

// Encadenar promesas

getEmpleado(3).then(empleado => {
        return getSalario(empleado);
    })
    .then(resp => {
        console.log(`El salario de ${resp.nombre} es de ${resp.salario}`);
    })
    .catch(err => {
        console.log(err);
    })