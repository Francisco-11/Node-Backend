const lugar = require('./lugar/lugar');

const argv = require('./config/yargs').argv;

lugar.getLugar(argv.direccion)
    .then(console.log);

// console.log(argv.direccion);

/* const encodedUlr = encodeURI(argv.direccion);
console.log(encodedUlr);

const instance = axios.create({
    baseURL: `https://countries-cities.p.rapidapi.com/location/country/${encodedUlr}`,
    headers: { 'x-rapidapi-key': 'dfd580a9d7mshc052e8c293fde20p19a6cfjsnf9d38d34dc1d' }
});

instance.get()
    .then(resp => {
        console.log(resp.data);
    })
    .catch(err => console.log('Error!!!', err)); */