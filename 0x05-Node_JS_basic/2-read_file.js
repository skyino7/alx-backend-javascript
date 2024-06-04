const fs = require('fs');

const countStudents = (path) => {
    let data;

    try {
        data = fs.readFileSync(path, 'utf8');
    } catch (err) {
        throw new Error('Cannot load the database');
    }

    const lines = data.split('\n').filter((line) => line.trim() !== '');
    if (lines.length <= 1) {
        return;
    }

    const students = lines.slice(1).map((line) => {
        const [id, firstname, age, field] = line.split(',');
        return { id, firstname, age, field };
    }).filter((student) => student.firstname);

    const numberOfStudents = students.length;
    console.log(`Number of students: ${numberOfStudents}`);

    const fields = [...new Set(students.map((student) => student.field))];
    fields.forEach((field) => {
        const studentsInField = students.filter((student) => student.field === field);
        console.log(`Number of students in ${field}: ${studentsInField.length}. List: ${studentsInField.map((student) => student.firstname).join(', ')}`);
    });
};

module.exports = countStudents;
