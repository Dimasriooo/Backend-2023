
//import method dalam fruitcontroller
const {index, store} = require('./fruitscontroller');

const main = () =>{
    console.log('Menampilkan data buah-buahan:');
    index();
    console.log("\n");
    store('manggis');
}

main();