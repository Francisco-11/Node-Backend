const axios = require('axios');

const getLugar = async(dir) => {

    const encodedUlr = encodeURI(dir);


    const instance = axios.create({
        baseURL: `https://countries-cities.p.rapidapi.com/location/country/${encodedUlr}`,
        headers: { 'x-rapidapi-key': 'dfd580a9d7mshc052e8c293fde20p19a6cfjsnf9d38d34dc1d' }
    });

    const resp = await instance.get();

    if (resp.data === 0) {
        throw new Error(`No hay resultados para ${ dir }`);
    }

    const data = resp.data;
    const direccion = data.name;
    const capital = data.capital;
    const continent = data.continent.name;

    return {
        direccion,
        capital,
        continent
    }
}

module.exports = {
    getLugar,
}