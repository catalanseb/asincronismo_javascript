const XMLHttpRequest = require('XMLHttpRequest').XMLHttpRequest;
const API = 'https://rickandmortyapi.com/api/character';

const fetchData = (url_api) => {
    return new Promise((resolve, reject) => {
        let xhttp = new XMLHttpRequest();
        xhttp.open('GET', url_api, true);

        xhttp.onreadystatechange = (() => {
            if (xhttp.readyState === 4) {
                (xhttp.status === 200) ?
                resolve(JSON.parse(xhttp.responseText)):
                    reject(new Error('Error ' + url_api))

            }
        });

        xhttp.send();
    });
}

const anotherFunction = async(url_api) => {
    try {
        const data = await fetchData(url_api);
        const character = await fetchData(url_api + '/' + data.results[0].id);
        const origin = await fetchData(character.origin.url);

        console.log('Cantidad de personajes: ' + data.info.count);
        console.log('Nombre del primer personaje de los resultados: ' + character.name);
        console.log('Dimension: ' + origin.dimension);
    } catch (error) {
        console.error(error);
    }
}

anotherFunction(API);