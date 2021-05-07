// Test 1

/**
 * func getString
 * @returns promise
 */
const getString = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!');
        } else {
            reject('Oooops');
        }
    });
};

// exec funct getString
getString()
    .then(response => console.log(response))
    .catch(err => console.log(err));


// Test 2

/**
 * func getPromise
 * @returns promise
 */
const getPromise = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            setTimeout(() => {
                resolve('Resuelto');
            }, 2000);
        } else {
            const error = new Error('error');
            reject(error);
        }
    });
};

// exec funct getPromise
getPromise()
    .then(response => console.log(response))
    .catch(err => console.log(err));


// call a mas de una promesa
Promise.all([getString(), getPromise()])
    .then(response => {
        console.log('Array of result: ' + response);
    })
    .catch(err => console.log(error));