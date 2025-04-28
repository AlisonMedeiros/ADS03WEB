const myPromise = (number) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (number >= 6) {
                resolve(`O número ${number} é válido.`);
            } else {
                reject(`O número ${number} é menor que 6.`);
            }
        }, 1000);
    });
}

(async () => {
    console.log(myPromise(10));

    console.log(await myPromise(10));
})();



(async () => {
    try {
        const result = await myPromise(5);
        console.log(result);
    } catch (exception) {
        console.log("ERRO: " + exception);
    }

})();