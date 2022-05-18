const StudentController = require("../../lib/controllers/StudentController");

describe("Tests para StudentController", () => {
    test("1) Devolver una lista de estudiantes", () => {
        const students = StudentController.getStudents();
        expect(students.length).toBe(51);
    });
});