const download =() => {
    return new Promise((resolve, reject) => {
        const status = true;

        setTimeout(()=> {
            if (status) {
                resolve("download selesai");
            } else {
                reject("download Gagal");
            }
        }, 5000);
    });
};

console.log(download());

download()
    .then((res) =>{
        console.log(res);
    })
    .catch((err) =>{
        console.log(err);
    });