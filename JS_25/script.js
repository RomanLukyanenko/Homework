const randomResolve = () => {
    return new Promise((resolve, reject) => {
        const randomNumber = Math.floor(Math.random() * 5) + 1;
        const delayInSeconds = randomNumber * 1000;

        setTimeout(() => {
            if (randomNumber % 2 === 0) {
                resolve(`Promise resolved ${randomNumber}`);
            } else {
                reject(new Error(`Promise rejected ${randomNumber}`));
            }
        }, delayInSeconds);
    });
};

const createPromiseArr = (n) => {
    const promiseArr = Array.from({ length: n }, randomResolve);

    Promise.all(promiseArr.map(p => p.catch(e => e)))
        .then(results => {
            console.log('🥳 Yasss');
            results.forEach(result =>
                result instanceof Error ? console.error(result.message) : console.log(result)
            );
        })
        .catch(() => {
            console.log('ok');
        });
};



const printResponse = async (n) => {
    try {
        const promiseArr = Array.from({ length: n }, randomResolve);
        const results = await Promise.all(promiseArr.map(p => p.catch(e => e)));

        const allResolved = results.every(result => !(result instanceof Error));

        if (allResolved) {
            console.log('🥳 Yasss');
        } else {
            console.log('ok');
            results.forEach(result => {
                if (result instanceof Error) {
                    console.error(result.message);
                }
            });
        }
    } catch (error) {
        console.error(error.message);
    }
};
printResponse(10);