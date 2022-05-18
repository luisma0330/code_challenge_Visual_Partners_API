const Reader = require("../utils/Reader");
const StudentService = require("../services/StudentService");

class StudentController{
    static getStudents(){
        const json = Reader.readJsonFile("visualpartners.json");
        const students = StudentService.getStudents(json);
        return students;
    }
    
}

module.exports = StudentController;