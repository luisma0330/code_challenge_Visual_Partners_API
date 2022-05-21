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

    static getStudentsAccredit(students){
        const studentsAccredited = students.filter((student) => student.credits > 500);
        return studentsAccredited;
    }
}

module.exports = StudentService;