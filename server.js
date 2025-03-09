const express = require('express');
const app =express();
const path = require('path');
app.use(express.static('public'));
app.use(express.json());
let students = [];
app.get('/api/students',(req,res) => {
    res.json(students);
});
app.post('/api/students',(req,res) => {
   const student = req.body;
   students.push(student);
   res.status(201).json(student);
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server is running on http://localhost:${PORT}');
})



