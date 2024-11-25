const express = require('express');
const fs = require('fs');
const path = require('path');

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
    console.error('Error al guardar el archivo:', err);
  }
};

app.get('/students', (req, res) => {
  const students = readStudents();
  res.status(200).json(students);
});

app.get('/students/:id', (req, res) => {
  const students = readStudents();
  const student = students.find(student => student.id === parseInt(req.params.id));

  if (studentudent) {
    res.studentatus(200).json(studentudent);
  } else {
    res.studentatus(404).json({ message: 'Estudentudiante no encontrado' });
  }
});

app.delete('/students/:id', (req, res) => {
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