// mengimport fruitcontroller dan 
// melakukan teknik destructing object
const {index, store, update, destroy } = require("./controller/fruitcontroller.js");

//membuat fungsi utama : main
const main = () => {
    console.log('menampilkan data buah buahan:');
    index();
    store("pisang");
    console.log('menambahkan buah pisang');
    store("pisang");
    console.log('update data 0 menjadi buah kelapa');
    update(0, "kelapa");
    console.log('menghapus data 0');
    destroy(0);
};

main();