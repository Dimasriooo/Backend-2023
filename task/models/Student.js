// import database
const db = require('../config/database');

// membuat class model Student
class Student {

    /**
     * Method untuk menampilkan semua data student
     */
    static all(){
        // return Promise sebagai solusi Asynchronous
        return new Promise((resolve, reject) => {
            const query = `SELECT * FROM students`;
            db.query(query, (err, results) => {
                return resolve(results);
            });
        });
    }

    /**
     * Buat fungsi untuk insert data 
     */
    static async create(data) {
        const id = await new Promise((resolve, reject) => {
          const sql = "INSERT INTO students SET ?";
          db.query(sql, data, (err, results) => {
            resolve(results.insertId);
          });
        });
    
        return new Promise((resolve, reject) => {
          const sql = "SELECT * FROM students WHERE id = ?";
          db.query(sql, id, (err, results) => {
            resolve(results);
          });
        });
        
      }
    }

// export class Student
module.exports = Student;