const StudentController = require("./controllers/StudentController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;


app.get("/", (request, response) => {
    response.json({message: "Welcome students to our API"});
});

app.listen(port, () => {
    console.log(`VisualThinking API in localhost:${port}`);
});

app.get("/v1/students", (request, response) => {
    const students = StudentController.getStudents();
    response.json(students);
});