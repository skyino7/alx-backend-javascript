/**
 * Counts the students in a CSV data file.
 * @param {String} path The path to the CSV data file.
 */

const fs = require('fs');

const countStudents = (path) => {
    let data;

    try {
        data = fs.readFileSync(path, 'utf8');
    } catch (err) {
        throw new Error('Cannot load the database');
    }

    const lines = data.trim().split('\n').filter((line) => line.trim() !== '');
    if (lines.length <= 1) {
        return;
    }

    const studentGroups = {};
    const dbFields = lines[0].split(',');
    const studentNames = dbFields.slice(0, dbFields.length - 1);

    for (const line of lines.slice(1)) {
        const studentRecord = line.split(',');
        const studentValues = studentRecord.slice(0, studentRecord.length - 1);
        const field = studentRecord[studentRecord.length - 1];
        if (!Object.keys(studentGroups).includes(field)) {
            studentGroups[field] = [];
        }
        const studentEntries = studentNames.map((Name, idx) => [Name, studentValues[idx]]);
        studentGroups[field].push(Object.fromEntries(studentEntries));
    }

    const totalStudents = Object.values(studentGroups).reduce((sum, group) => sum + group.length, 0);
    console.log(`Number of students: ${totalStudents}`);
    for (const [field, group] of Object.entries(studentGroups)) {
        const studentNames = group.map((student) => student.firstname).join(', ');
        console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
    }
};

module.exports = countStudents;
