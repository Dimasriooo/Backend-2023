const fruits = require('./data.js');



//menampilkan semua data
const index = () => {
    for (fruit of fruits){
        console.log(fruit);
    }
}

//menambahkan data
const store = (name) => {
    fruits.push(name);
    index();
};

module.exports ={index, store};