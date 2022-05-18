const Reader = require("../utils/Reader");

class StudentService{
    static getStudents(filePath){
        const students = Reader.readJsonFile(filePath);
        return students;
    }
}

module.exports = StudentService;