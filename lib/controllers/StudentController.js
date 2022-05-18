const StudentService = require("../services/StudentService");

class StudentController{
    static getStudents(){
        const students = StudentService.getStudents("visualpartners.json");
        return students;
    }
    
}

module.exports = StudentController;