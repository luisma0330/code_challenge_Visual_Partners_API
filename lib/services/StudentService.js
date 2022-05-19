const Reader = require("../utils/Reader");

class StudentService{
    static getStudents(filePath){
        const students = Reader.readJsonFile(filePath);
        return students;
    }

    static getEmailWithCertification(students){
        const studentsWithCertification = students.filter((student) => student.haveCertification === true);
        const emails = studentsWithCertification.map((student) => student.email);
        return emails;
    }
}

module.exports = StudentService;