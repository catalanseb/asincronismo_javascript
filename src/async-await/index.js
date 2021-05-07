// Test 1

/**
 * func testAsync
 * @returns promise
 */
const testAsync = () => {
    return new Promise((resolve, reject) => {
        (true) ?
        setTimeout(() => resolve('Do Something Async'), 3000): reject(new Error('Test Error'))
    });
}

/**
 * func test
 */
const test = async() => {
    const something = await testAsync();
    console.log(something);
}

console.log('Before');
test();
console.log('After');

// Test con manejo de errores
/**
 * func otherTest
 */
const otherTest = async() => {
    try {
        const something = await testAsync();
        console.log(something)
    } catch (error) {
        console.log(error);
    }
}

console.log('Before');
otherTest();
console.log('After');