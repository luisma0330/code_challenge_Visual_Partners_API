const Reader = require("../utils/Reader");
const StudentService = require("../services/StudentService");

class StudentController{
    static getStudents(){
        const students = StudentService.getStudents("visualpartners.json");
        return students;
    }

    static getEmailWithCertification(){
        const students = Reader.readJsonFile("visualpartners.json");
        const emails = StudentService.getEmailWithCertification(students);
        return emails;
    }

    static getStudentsAccredit(){
        const students = Reader.readJsonFile("visualpartners.json");
        const accredited = StudentService.getStudentsAccredit(students);
        return accredited;
    }
    
}

module.exports = StudentController;