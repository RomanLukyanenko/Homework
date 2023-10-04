
function printNumber(durationInSeconds) {
    let remainingTime = durationInSeconds;

    const timerInterval = setInterval(() => {
        console.log(`${remainingTime} секунд залишилось.`);
        remainingTime--;

        if (remainingTime < 0) {
            clearInterval(timerInterval);
            console.log('Час вийшов!');
        }
    }, 1000);
}

printNumber(60);







function delayedLoop(durationInSeconds) {
    let elapsedTime = 1;

    const timerInterval = setInterval(() => {
        console.log(`${elapsedTime} секунд пройшло.`);
        elapsedTime++;

        if (elapsedTime > durationInSeconds) {
            clearInterval(timerInterval);
            console.log('Час вийшов!');
        }
    }, 1000);
}

delayedLoop(60);








const randomPromise = () => {
    return new Promise((resolve, reject) => {
        const randomNum = Math.random();
        if (randomNum >= 0.5) {
            resolve('Дані завантажено успішно');
        } else {
            reject(new Error('Помилка завантаження даних'));
        }
    });
}

const getUserData = (id) => {
    return randomPromise()
        .then(data => {
            console.log(data);
            return { userId: id, name: 'Іван' }; 
        })
        .catch(error => {
            throw new Error("404 not found");
        });
};

getUserData(1)
    .then(data => console.log(data))
    .catch(error => console.log(error.message));



