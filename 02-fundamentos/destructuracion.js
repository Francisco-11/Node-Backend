let deadpool = {
    nombre: 'wade',
    apellido: 'winston',
    poder: 'regeneración',
    getNombre: function() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`
    }
};


// console.log(deadpool.getNombre());

// destructuración

let { nombre: primerNombre, apellido, poder } = deadpool;

console.log(primerNombre, apellido, poder);