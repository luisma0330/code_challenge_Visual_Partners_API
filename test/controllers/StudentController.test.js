const StudentController = require("../../lib/controllers/StudentController");

describe("Tests para StudentController", () => {
    test("1) Devolver una lista de estudiantes", () => {
        const students = StudentController.getStudents();
        expect(students.length).toBe(51);
    });
    test("2) Devolver una lista con los email de los estudiantes que tengan certificacion", () => {
        const emails = StudentController.getEmailWithCertification();
        expect(emails.length).toBe(29);
    });
    test("3) Devolver una lista con los estudiantes con 500 o mas creditos", () => {
        const accredited = StudentController.getStudentsAccredit();
        expect(accredited.length).toBe(27);
    });
});