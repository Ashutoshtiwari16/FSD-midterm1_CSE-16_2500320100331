const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let students = [];

app.get('/', (req, res) => {
    res.send('Server is running on port 3000');
});

app.post('/api/students', (req, res) => {
    const { id, name, email, course, age } = req.body;

    if (!id || !name || !email || !course || !age) {
        return res.status(400).json({ 
            message: 'Invalid input: id, name, email, course, and age are mandatory fields.' 
        });
    }

    const existingStudent = students.find(student => student.id === id);
    if (existingStudent) {
        return res.status(409).json({ 
            message: `Duplicate student ID: Student with ID ${id} already exists.` 
        });
    }

    const newStudent = { id, name, email, course, age };
    students.push(newStudent);

    return res.status(201).json({
        message: 'Student successfully created',
        student: newStudent
    });
});

app.get('/api/students', (req, res) => {
    return res.status(200).json({
        count: students.length,
        students: students
    });
});

app.get('/api/students/:id', (req, res) => {
    const studentId = parseInt(req.params.id);
    const student = students.find(s => s.id === studentId);

    if (!student) {
        return res.status(404).json({
            message: `Student does not exist: Student with ID ${studentId} not found.`
        });
    }

    return res.status(200).json({
        student: student
    });
});

app.put('/api/students/:id', (req, res) => {
    const studentId = parseInt(req.params.id);
    const student = students.find(s => s.id === studentId);

    if (!student) {
        return res.status(404).json({
            message: `Student does not exist: Student with ID ${studentId} not found.`
        });
    }

    const { name, email, course, age } = req.body;

    if (name) student.name = name;
    if (email) student.email = email;
    if (course) student.course = course;
    if (age) student.age = age;

    return res.status(200).json({
        message: `Student record with ID ${studentId} updated successfully.`,
        student: student
    });
});

app.delete('/api/students/:id', (req, res) => {
    const studentId = parseInt(req.params.id);
    const index = students.findIndex(s => s.id === studentId);

    if (index === -1) {
        return res.status(404).json({
            message: `Student does not exist: Student with ID ${studentId} not found.`
        });
    }

    const deletedStudent = students.splice(index, 1)[0];

    return res.status(200).json({
        message: `Student record with ID ${studentId} deleted successfully.`,
        student: deletedStudent
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});