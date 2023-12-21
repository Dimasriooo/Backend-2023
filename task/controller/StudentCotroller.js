//import data student dari folder data/student.js
const student = require ('./data/students.js');






class StudentController {
    index(req, res) {
        const data ={
            message: "Menampilkan semua student",
            data: students,
        };


        res.json(data);
    }
    //digunakan untuk menambhakna data student
    store(req, res) {
        const {nama} = req.body;

        students.push(nama);

        const data = {
            message: `menambahkan data student ${nama}`,
            data: students,
        };

        res.status(200).json(data);
    }
    // update data student
    update(req, res) {
        const {id } = req.params;
        const {nama } = req.body;

        students[id] = nama;

        const data = {
            message: `mengedit student id ${id}, nama ${nama}`,
            data: students,
        };

        res.json(data);
    }
    //menghapus data student 
    destroy(req, res) {
        const { id } = req.params;

        students.splice(id, 1);

        const data = {
            message: `menghapus student id ${id}`,
            data: students,
        };
        res.json(data);
    }
}


const object = new StudentController();

module.exports = object;


