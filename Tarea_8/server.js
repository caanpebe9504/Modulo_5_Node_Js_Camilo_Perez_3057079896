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


app.post('/students', (req, res) => {
  const { name, age, major } = req.body;


  if (!name || typeof name !== 'string' || name.trim() === '') {
    return res.status(400).json({ message: 'El nombre es obligatorio y debe ser una cadena de texto válida.' });
  }

  if (!Number.isInteger(age) || age <= 0) {
    return res.status(400).json({ message: 'La edad debe ser un número entero positivo.' });
  }

  if (!major || typeof major !== 'string' || major.trim() === '') {
    return res.status(400).json({ message: 'La especialidad (major) es obligatoria y debe ser una cadena de texto válida.' });
  }

  const students = readStudents();
  const newId = students.length > 0 ? Math.max(...students.map(student => student.id)) + 1 : 1;

  const newStudent = { id: newId, name, age, major };
  students.push(newStudent);
  saveStudents(students);

  res.status(201).json(newStudent);
});


app.put('/students/:id', (req, res) => {
  const { name, age, major } = req.body;
  const studentId = parseInt(req.params.id);
  
  const students = readStudents();
  const studentIndex = students.findIndex(student => student.id === studentId);

  if (studentIndex === -1) {
    return res.status(404).json({ message: 'Estudiante no encontrado' });
  }


  if (name && (typeof name !== 'string' || name.trim() === '')) {
    return res.status(400).json({ message: 'El nombre debe ser una cadena de texto válida.' });
  }

  if (age && (!Number.isInteger(age) || age <= 0)) {
    return res.status(400).json({ message: 'La edad debe ser un número entero positivo.' });
  }

  if (major && (typeof major !== 'string' || major.trim() === '')) {
    return res.status(400).json({ message: 'La especialidad debe ser una cadena de texto válida.' });
  }

  if (name) students[studentIndex].name = name;
  if (age) students[studentIndex].age = age;
  if (major) students[studentIndex].major = major;

  saveStudents(students);

  res.status(200).json(students[studentIndex]);
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
