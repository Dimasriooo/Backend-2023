const persiapan = () =>{
    setTimeout(function(){
        console.log("mempersiapkan bahan ....");
    }, 3000);
};

const rebusAir = () =>{
    setTimeout(function(){
        console.log("merebus air ...");
    }, 3000);
};

const masak = () => {
    setTimeout(function(){
        console.log("memasak Mie ...");
        console.log("selesai");
    }, 5000);
};

const main = () => {
    persiapan();
    rebusAir();
    masak();
};

main();