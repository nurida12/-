const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Деректер тіркелді');
    }, 2000);
});

myPromise
.then((data) => {
    console.log(data);

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Деректер тексерілді');
        }, 2000);
    });
})
.then((nextData) => {
    console.log(nextData);

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Деректер сақталды');
        }, 2000);
    });
})
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.error(error);
});