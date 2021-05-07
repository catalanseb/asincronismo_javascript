let XMLHttpRequest = require('XMLHttpRequest').XMLHttpRequest;
let API = 'https://rickandmortyapi.com/api/character';


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


fetchData(API)
    .then(data => {
        console.log('Cantidad de personajes: ' + data.info.count);
        return fetchData(API + '/' + data.results[0].id);
    })
    .then(data => {
        console.log('Nombre del primer personaje de los resultados: ' + data.name);
        return fetchData(data.origin.url);
    })
    .then(data => {
        console.log('Dimension: ' + data.dimension);
    })
    .catch(error => console.error(error));