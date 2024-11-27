const express = require('express');
const fs = require('fs');
const path = require('path');
const authMiddleware = require('./middlewares/authMiddleware');
const validationMiddleware = require('./Middlewares/validationMiddleware');

const app = express();
const port = 3002;

app.use(express.json());

const studentsFile = path.join(__dirname, 'students.json');

const readStudents = () => {
  try {
    const data = fs.readFileSync(studentsFile);
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

const saveStudents = (students) => {
  try {
    fs.writeFileSync(studentsFile, JSON.stringify(students, null, 2));
  } catch (error) {
    console.error('Error al guardar el archivo:', error);
  }
};

app.get('/students', (req, res) => {
  const students = readStudents();
  res.status(200).json(students);
});

app.get('/students/:id', (req, res) => {
  const students = readStudents();
  const student = students.find(student => student.id === parseInt(req.params.id));

  if (student) {
    res.status(200).json(student);
  } else {
    res.status(404).json({ message: 'Estudiante no encontrado' });
  }
});


app.post('/students', authMiddleware, validationMiddleware, (req, res) => {
  const { name, age, major } = req.body;

  const students = readStudents();
  const newId = students.length > 0 ? Math.max(...students.map(student => student.id)) + 1 : 1;

  const newStudent = { id: newId, name, age, major };
  students.push(newStudent);
  saveStudents(students);

  res.status(201).json(newStudent);
});

app.put('/students/:id', authMiddleware, validationMiddleware, (req, res) => {
  const { name, age, major } = req.body;
  const studentId = parseInt(req.params.id);

  const students = readStudents();
  const studentIndex = students.findIndex(student => student.id === studentId);

  if (studentIndex === -1) {
    return res.status(404).json({ message: 'Estudiante no encontrado' });
  }

  if (name) students[studentIndex].name = name;
  if (age) students[studentIndex].age = age;
  if (major) students[studentIndex].major = major;

  saveStudents(students);

  res.status(200).json(students[studentIndex]);
});

app.delete('/students/:id', authMiddleware, (req, res) => {
  const students = readStudents();
  const studentId = parseInt(req.params.id);

  const studentIndex = students.findIndex(student => student.id === studentId);
  if (studentIndex === -1) {
    return res.status(404).json({ message: 'Estudiante no encontrado' });
  }

  students.splice(studentIndex, 1);
  saveStudents(students);

  res.status(200).json({ message: `Estudiante con ID ${studentId} eliminado` });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});