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


let getEmpleado = (id, callback) => {
    let empleadosDB = empleados.find(empleado => {
        return empleado.id === id;
    });

    if (!empleadosDB) {
        callback(`No existe un empleado con el ID ${id}`);
    } else {
        callback(null, empleadosDB);
    }

}

let getSalario = (empleado, callback) => {

    let salariosDB = salarios.find(salario => {
        return salario.id === empleado.id;
    });

    if (!salariosDB) {
        callback(`No se encontro un salario para el empleado ${empleado.id}`);
    } else {
        callback(null, {
            nombre: empleado.nombre,
            salario: salariosDB.salario,
            id: empleado.id
        });
    }

}



getEmpleado(3, (err, empleado) => {

    if (err) {
        return console.log(err);
    }

    getSalario(empleado, (err, resp) => {
        if (err) {
            return console.log(err);
        }
        console.log(`El salario de ${resp.nombre} es de ${resp.salario}`);
    })

});