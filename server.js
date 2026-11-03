const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse incoming JSON requests
app.use(express.json());

// In-memory array to store student records
const students = [];

// Base route
app.get('/', (req, res) => {
    res.send('Server is running on port 3000');
});

// Task 2: POST /api/students - Create a student record
app.post('/api/students', (req, res) => {
    const { id, name, email, course, age } = req.body;

    // Validate mandatory fields
    if (!id || !name || !email || !course || !age) {
        return res.status(400).json({ 
            message: 'Validation failed: id, name, email, course, and age are mandatory fields.' 
        });
    }

    // Prevent duplicate student IDs
    const existingStudent = students.find(student => student.id === id);
    if (existingStudent) {
        return res.status(400).json({ 
            message: `Student with ID ${id} already exists.` 
        });
    }

    // Create and save new student record
    const newStudent = { id, name, email, course, age };
    students.push(newStudent);

    return res.status(201).json({
        message: 'Student record created successfully',
        student: newStudent
    });
});

// Task 3: GET /api/students - Retrieve all student records
app.get('/api/students', (req, res) => {
    return res.status(200).json({
        count: students.length,
        students: students
    });
});

// Task 3: GET /api/students/:id - Retrieve a specific student by ID
app.get('/api/students/:id', (req, res) => {
    const studentId = parseInt(req.params.id);
    const student = students.find(s => s.id === studentId);

    if (!student) {
        return res.status(404).json({
            message: `Student with ID ${studentId} not found.`
        });
    }

    return res.status(200).json({
        student: student
    });
});

// Configure the server to run on port 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});