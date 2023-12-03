// import data fruits menggunakan require
const fruits=  require('../data/fruits');
//membuat fungsi index dan store
const index = () => {
    for (const fruit of fruits){
        console.log(fruit);
    }
};
//menambahkan data
const store = (name) => {
    fruits.push(name);
    index();
};
//update data 
const update = (position, name) =>{
    fruits[position] = name;
    index();
}
//menghapus data
const destroy = position => {
    fruits.splice(position, 1);
    index();
}



// meng export method index dan store
module.exports = {index, store, update, destroy};