const StudentService = require("../../lib/services/StudentService");

describe("Test para StudentService", () => {
    test("1) Prueba para leer un archivo json usando la clase student", () => {
        const students = StudentService.getStudents("test/utils/test.json");
        const expected = [
            {
                "id": "6264d5d89f1df827eb84bb23",
                "name": "Warren",
                "email": "Todd@visualpartnership.xyz",
                "credits": 508,
                "enrollments": [
                    "Visual Thinking Intermedio",
                    "Visual Thinking Avanzado"
                ],
                "previousCourses": 1,
                "haveCertification": true
            },
            {
                "id": "6264d5d85cf81c496446b67f",
                "name": "Lucinda",
                "email": "Sexton@visualpartnership.xyz",
                "credits": 677,
                "enrollments": [
                    "Visual Thinking Avanzado"
                ],
                "previousCourses": 6,
                "haveCertification": true
            }
        ];
        expect(students).toMatchObject(expected);
    });
    test("2) Devolver una lista con los emails de los estudiantes que tengan certificacion", () => {
        const students = [{email: "luisma0330@gmail.com", haveCertification: true}, {email: "luisma0321@gmail.com", haveCertification: false}];
        const emails = StudentService.getEmailWithCertification(students);
        expect(emails.length).toBe(1);
    });
    test("3) Devolver una lista con los estudiantes con más de 500 creditos", () => {
        const students = [{name: "luis", credits: 501}, {name: "manuel", credits: 499}];
        const accredited = StudentService.getStudentsAccredit(students);
        expect(accredited.length).toBe(1);
    });
});