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



let getEmpleado = async(id) => {



    let empleadosDB = empleados.find(empleado => {
        return empleado.id === id;
    });

    if (!empleadosDB) {
        throw new Error(`No existe un empleado con el ID ${id}`);
    } else {
        return empleadosDB;
    }


}

let getSalario = async(empleado) => {


    let salariosDB = salarios.find(salario => {
        return salario.id === empleado.id;
    });

    if (!salariosDB) {
        throw new Error(`No se encontro un salario para el empleado ${empleado.id}`);
    } else {
        return {
            nombre: empleado.nombre,
            salario: salariosDB.salario,
            id: empleado.id
        };
    }

}


let getInformacion = async(id) => {
    let empleado = await getEmpleado(id);

    let respuesta = await getSalario(empleado);

    return `${respuesta.nombre} tiene un salario de ${respuesta.salario}`;
}

getInformacion(1).then(mensaje => console.log(mensaje))
    .catch(err => console.log(err));