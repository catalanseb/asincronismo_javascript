// Test 1

/**
 * func sum: suma dos numeros
 * @param {*} num1 
 * @param {*} num2 
 * @returns int
 */
const sum = (num1, num2) => {
    return num1 + num2;
}

/**
 * func calculator: llama un callback para sumar dos numeros
 * @param {*} num1 
 * @param {*} num2 
 * @param {*} callback 
 * @returns 
 */
const calculator = (num1, num2, callback) => {
    return callback(num1, num2);
}

console.log(calculator(2, 2, sum));

// Test 2

/**
 * func date: llama un callback despues de 3 seg. para imprimir una fecha
 * @param {*} callback 
 */
const date = (callback) => {
    console.log(new Date);

    setTimeout(() => {
        let date = new Date;
        callback(date);
    }, 3000);
}

/**
 * func printDate: imprime una fecha por consola
 * @param {*} dateNow 
 */
const printDate = (dateNow) => {
    console.log(dateNow);
}

date(printDate);