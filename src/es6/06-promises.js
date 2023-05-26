const anotherfunction = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('it does work');
        } else {
            reject('it does not work');
        }
    })
};

anotherfunction()
    .then(response => console.log(response))
    .catch(err => console.log(err));