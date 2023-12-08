const persiapan =() =>{
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve("menyiapkan Bahan ...");
        }, 3000);
    });
};

const rebusAir = () => {
    return new Promise((resolve) => {
        setTimeout(() =>{
        resolve("merebus Air ...");
        }, 7000);
    });
};

const masakk = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Masak mie ...");
        }, 5000);
    });
};

const main = () => {
    persiapan()
        .then((res) => {
            console.log(res);
            return rebusAir;
        })
        .then((res) => {
            console.log(res);
            return masakk();
        })
        .then((res) => {
            console.log(res);
        });
};

main();