type P = Promise<number>

async function addTwoPromises(promise1: P, promise2: P): P {
    return Promise.all([promise1, promise2]).then(([promise1Result, promise2Result]) => promise1Result + promise2Result)
};