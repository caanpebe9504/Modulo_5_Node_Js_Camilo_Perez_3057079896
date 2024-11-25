const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());

const loadStudents = () => {
  try {
    const data = fs.readFileSync("./students.json", "utf8");
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
};


const saveStudents = (students) => {
  fs.writeFileSync("./students.json", JSON.stringify(students, null, 2));
};


const generateId = (students) => {
  const lastId = students.length > 0 ? students[students.length - 1].id : 0;
  return lastId + 1;
};


app.post("/students", (req, res) => {
  const { name, age, major } = req.body;

  if (!name || typeof name !== "string" || name.trim() === "") {
    return res
      .status(400)
      .json({ error: "El nombre es obligatorio y debe ser un texto no vacío" });
  }

  if (typeof age !== "number" || age <= 0) {
    return res
      .status(400)
      .json({ error: "La edad debe ser un número positivo" });
  }

  if (!major || typeof major !== "string" || major.trim() === "") {
    return res
      .status(400)
      .json({ error: "El major es obligatorio y debe ser un texto no vacío" });
  }

  const students = loadStudents();
  const newStudent = {
    id: generateId(students),
    name,
    age,
    major,
  };

  students.push(newStudent);
  saveStudents(students);

  res.status(201).json(newStudent);
});


app.put("/students/:id", (req, res) => {
  const studentId = parseInt(req.params.id, 10);
  const { name, age, major } = req.body;

  const students = loadStudents();
  const studentIndex = students.findIndex(
    (student) => student.id === studentId
  );

  if (studentIndex === -1) {
    return res.status(404).json({ error: "Estudiante no encontrado" });
  }


  if (name && (typeof name !== "string" || name.trim() === "")) {
    return res
      .status(400)
      .json({ error: "El nombre debe ser un texto no vacío" });
  }

  if (age && (typeof age !== "number" || age <= 0)) {
    return res
      .status(400)
      .json({ error: "La edad debe ser un número positivo" });
  }

  if (major && (typeof major !== "string" || major.trim() === "")) {
    return res
      .status(400)
      .json({ error: "El major debe ser un texto no vacío" });
  }

  const updatedStudent = {
    ...students[studentIndex],
    name: name || students[studentIndex].name,
    age: age || students[studentIndex].age,
    major: major || students[studentIndex].major,
  };

  students[studentIndex] = updatedStudent;
  saveStudents(students);

  res.status(200).json(updatedStudent);
});


app.delete("/students/:id", (req, res) => {
  const studentId = parseInt(req.params.id, 10);

  const students = loadStudents();
  const studentIndex = students.findIndex(
    (student) => student.id === studentId
  );

  if (studentIndex === -1) {
    return res.status(404).json({ error: "Estudiante no encontrado" });
  }

  students.splice(studentIndex, 1);
  saveStudents(students);

  res.status(200).json({ message: "Estudiante eliminado" });
});


app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
